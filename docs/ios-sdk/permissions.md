---
id: permissions
title: Required Permissions
---

Make sure you have all of the following permission attributes in your `Info.plist` file:

Haptik only supports **_Portrait_** orientation.

```XML
<key>UISupportedInterfaceOrientations</key>
<array>
   <string>UIInterfaceOrientationPortrait</string>
</array>
```

---

**_Privacy - Photo Library Usage Description_** to enable a user to upload photos from the photos gallery in the chat flows.

```XML
<key>NSPhotoLibraryUsageDescription</key>
<string>To enable usage & saving of photos</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>To enable usage & saving of photos</string>
```

---

**_Privacy - Camera Usage Description_** to enable a user to upload photos from camera within chat flows.

```XML
<key>NSCameraUsageDescription</key>
<string>To enable camera usage for uploading photos</string>
```

---

**_Privacy - Contacts Usage Description_** To access phone contacts

```XML
<key>NSContactsUsageDescription</key>
<string>With contacts access, we provide an easy way to give you app support</string>
```

---

If you already allow **Arbitrary Loads** then you can skip adding the exception domains given below.

###### _Exception Domains_:

```XML
<key>NSAppTransportSecurity</key>
<dict>
   <key>NSExceptionDomains</key>
   <dict>
      <key>haptik-staging.s3.amazonaws.com</key>
      <dict>
         <key>NSIncludesSubdomains</key>
         <true/>
         <key>NSThirdPartyExceptionAllowsInsecureHTTPLoads</key>
         <true/>
      </dict>
      <key>haptikapi.com</key>
      <dict>
         <key>NSIncludesSubdomains</key>
         <true/>
         <key>NSThirdPartyExceptionAllowsInsecureHTTPLoads</key>
         <true/>
      </dict>
      <key>haptikdev.s3.amazonaws.com</key>
      <dict>
         <key>NSIncludesSubdomains</key>
         <true/>
         <key>NSThirdPartyExceptionAllowsInsecureHTTPLoads</key>
         <true/>
      </dict>
      <key>staging.hellohaptik.com</key>
      <dict>
         <key>NSIncludesSubdomains</key>
         <true/>
         <key>NSThirdPartyExceptionAllowsInsecureHTTPLoads</key>
         <true/>
      </dict>
   </dict>
</dict>
```
