---
title: Signing management requests
---

Few management APIs require requests signed by the ECT for authentication and authorisation.

> Note: This is required only for issuing JWTs and listing ECT clients.
> All other APIs **do not** require this.

These APIs include:
 - JWT issuing APIs
 - Client enumeration APIs

## Verifying that the request was sent by ECT

To verify that a request came from the ECT service, we:

 - Check the request signature to verify the authenticity of the request.

   **You must sign all management requests.**

 - Check the request timestamp to make sure that the request is not an old one being sent as part of a replay attack

 > Note: When one or both of these checks fail, our web service sends a response with an HTTP status code of
 > `400 Bad Request`.

Requests that ECTs send to our web service must include two HTTP headers that we use to check the request signature:

#### Management request headers


Parameter | Description
--- | ---
`SignatureCertChainUrl` | The URL to fetch the certificate chain from. (In case of a CA signed certificate.)
`SignatureCertUUID` | The certificate ID returned by us when you provide us your certificate. (In case of a self signed certificate.)
`Signature` | Signature generated from the body

## Fetching the certificate

### Certificate URL validation

 > Applicable for ECTs using CA signed certificates.

To check and validate the request signature, we verify the URL in the `SignatureCertChainUrl` header to make sure that it matches the format that ECT uses.

This can help to protect against requests that attempt to make our web service download malicious files.

#### Make sure that the URL meets all of the following criteria:

 - The protocol is https (not case sensitive).
 - The hostname is the FQDN of the ECT. (not case sensitive).
 - The path begins with /ect.api/ (case sensitive).
 - If a port is specified in the URL, the port is 443.

#### The following are examples of correctly formatted URLs:

 - https://subdomain.ect.com/ect.api/ect-api-cert.pem
 - https://subdomain.ect.com:443/ect.api/ect-api-cert.pem
 - https://subdomain.ect.com/ect.api/../ect.api/ect-api-cert.pem

#### The following are examples of invalid URLs:

 - http://subdomain.ect.com/ect.api/ect-api-cert.pem (invalid protocol)
 - https://notect.com/ect.api/ect-api-cert.pem (invalid hostname)
 - https://subdomain.ect.com/EcT.aPi/ect-api-cert.pem (invalid path)
 - https://subdomain.ect.com/invalid.path/ect-api-cert.pem (invalid path)
 - https://subdomain.ect.com:563/ect.api/ect-api-cert.pem (invalid port)

 
 > If the URL does not meet all of these criteria, we do not proceed to the next step.

We download the PEM-encoded X.509 certificate chain using the URL specified in the *SignatureCertChainUrl* header in the request.

This chain can be provided at runtime so that it can be updated periodically.

This certificate chain we downloaded in the preceding step is composed of the following, in order:
 - The ECT signing certificate.
 - One or more additional certificates that create a chain of trust to a root certificate of a certificate authority (CA).


### Certificate ID validation

 > Applicable for ECTs using self signed certificates.

If you choose to utilise a self signed certificate, we will generate and return a certificate UUID for the same.

Requests signed with the said certificate need to provide the `SignatureCertUUID` parameter.

Upon the receipt of a management request, we validate the UUID provided, and fetch the corresponding certificate from our data store.


## Certificate verification

### CA signed certificate

We confirm the validity of the signing certificate by completing the following steps:

 - Check the Not Before and Not After dates of the signing certificate to make sure that it is not expired.
 - Make sure the ECT FQDN is present in the Subject Alternative Names (SANs) section of the signing certificate.
 - Validate that all certificates in the chain combine to create a chain of trust to a trusted root CA certificate.


### Self signed certificate

We confirm the validity of the signing certificate by completing the following steps:

 - Validate that a certificate with the said ID exists with us.
 - Check the Not Before and Not After dates of the signing certificate to make sure that it is not expired.
 - Make sure the domain name ECT FQDN is present in the Subject Alternative Names (SANs) section of the signing certificate.
 
**If certificate verification fails, we discard the request.**


## Signature verification

 - After confirming the validity of the signing certificate, we extract the public key from it.
 - We base64-decode the value of the `Signature` header in the request to obtain the encrypted signature.
 - Use the public key extracted from the signing certificate to decrypt the encrypted signature to produce the asserted hash value.
 - We generate a SHA-1 hash value from the full HTTP request body to produce the derived hash value.
 - Compare the asserted hash value and derived hash values to ensure that they match.

   **If they do not match, we discard the request.**

 > Note: make sure the signature is generated as follows:
>  1. Convert the prepared request body to bytes with UTF-8 encoding.
>  2. Generate a SHA-1 hash of encoded body.
>  3. ASN.1 encode the hash and convert it from hex to binary.
>  4. Encrypt the binary blob with your private key.
>
> **These steps are provided only for reference. You should not need to do the above operations by hand.
>   Your language WILL provide a one-shot signing system.
>   It is HIGHLY RECOMMENDED that you use the high level functionality and avoid using low level primitives.**

## Timestamp verification

 - Every request that your web service sends must include a timestamp in the request body.

 - The timestamp is part of the signed portion of the request, so it cannot be modified without also invalidating the request signature.

 - We use this timestamp to verify the freshness of the request before sending a response.

 - This can help protect our web service from attempted replay attacks in which an attacker acquires a properly signed request and then repeatedly resends it to disrupt the our service.

We allow a tolerance of no more than **150 seconds** (two and a half minutes).
This means that our service should only process requests in which the timestamp is within 150 seconds of the current time.

**If the timestamp differs from the current time by more than 150 seconds, we discard the request.**


The timestamp is part of the request object in the JSON body of the request. For example:

```json
POST /jwt/issue
{
  "fqdn": "awesome.ect.com",
  "client_id": "86f7e437faa5a7fce15d1ddcb9eaeaea377667b8",
  "timestamp": "2019-05-13T12:34:56Z",
}
```

 > Please ensure that the timestamp value is an ISO 8601 formatted string, for example `2019-05-13T12:34:56Z`.
 > The time is expected to be in the UTC timezone. (As indicated by the *Z* in the timestamp string.)

*We return HTTP error code `400 Bad Request`, to reject requests in which the timestamp falls outside the tolerance.*

## Sample python snippet for signed requests

```python
#!/usr/bin/env python3

import datetime
import requests
import json
import pem
import base64
from OpenSSL import crypto


keyfile_path = 'host.key' # PEM encoded RSA/ECDSA private key


keyfile = pem.parse_file(keyfile_path)[0]

private_key = crypto.load_privatekey(crypto.FILETYPE_PEM, keyfile.as_bytes())


url = 'https://<base_url>/tract/management/token/issue/' # base URL is pre-shared with you

payload = {
    'client_id': '', # client ID for which you are generating the token
                     # ID can be fetched from the client enumeration API
    'fqdn': '', # your FQDN pre-shared with us
    'timestamp': datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
}

# optional minification step
# doesn't really make a difference as long as the body sent and the body hashed+signed are the same
minified_json = json.dumps(payload, separators=(',', ':'))

headers = {
  'Content-Type': 'application/json',
  'Signature': base64.b64encode(crypto.sign(private_key, bytes(minified_json, 'utf-8'), 'sha1')),
  'SignatureCertUUID': '' # This is shared with you when you pre-share a cert with us.
                          # WARNING: Make sure the UUID is the correct UUID for the certificate used for this request.
                          #          Mismatching UUID will cause the request to fail.
}

response = requests.request('POST', url, headers=headers, data=minified_json)

# verify data sent and received
print(response.request.headers, end='\n\n')
print(response.request.body, end='\n\n')
print(response.text.encode('utf8'))

```