---
title: API Security
---

To access any of Haptik's APIs, you require a Haptik provided authentication token.

The Authorization header of each HTTP request should be "Bearer" followed by the token.

Note:  If the Authorization header is missing or invalid, then 401 status code is returned.

### Example Header

```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```
