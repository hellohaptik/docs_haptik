# Security Overview

#### We protect your data.

All data is written to multiple disks instantly, backed up daily, and stored in multiple locations. Messages that our users send are stored on servers that use modern techniques to remove bottlenecks and points of failure. Sensitive Data is backed up every 5 mins across multiple data centers.

#### Your data is sent using HTTPS.

Whenever your data is in transit, everything is encrypted, and sent using HTTPS. We use certificates encrypted by GoDaddy. We use SHA-256 encryption to secure all communication.

#### Full redundancy for all major systems.

Complete redundancy for all aspects of our system. Our systems are engineered to stay up even if multiple servers fail.

#### Physical Security of the Cloud

Our web servers and databases run on servers in secure data centers on the Amazon Webs Services Cloud Solution. Physical access is restricted to authorized personnel. Premises are monitored and access is logged.

You can read further about AWS security and certifications here:
https://aws.amazon.com/security/

#### Penetration Testing and Security Audit of SDKs

Our Client SDKs are regularly audited by Appknox for any issues in code or design that may result in security vulnerabilities. Any leakages during communication are detected using both Manual and Automated Techniques. 

#### Network Security

Haptik servers may also allow SSH access (protected by TLS and private key authentication) for administration. Administrative access is granted only to select employees of Haptik, based on role and business need.

The entire Haptik Systems and Infrastructure are further secured with a VPN. No one can access the system unless they are within the VPN.

#### Authentication

Clients login to Haptik using a password which is known only to them. Passwords are not stored; instead, as is standard practice, only a secure hash of the password is stored in the database. Because the hash is relatively expensive to compute, and because a “salting” method is used, brute-force guessing attempts are relatively ineffective, and password reverse-engineering is difficult even if the hash value were to be obtained by a malicious party.



