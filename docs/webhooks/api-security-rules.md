---
title: API security
---

To access any Haptik API, you require a Haptik provided token.

The Authorization header of each HTTP request should be "Bearer" followed by the token.

Note:  If the Authorization header is missing or invalid, then 401 status code is returned.

### Example Header

```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```