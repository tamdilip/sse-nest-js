# 🔔 sse-nest-js

[![Live demo](https://img.shields.io/badge/Render-Live%20demo-violet?style=flat-square&logo=render&logoColor=violet)](https://sse-nest-js.onrender.com/?userId=2)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/tamdilip/sse-nest-js) 


Sample Nest JS app to test Server-Sent Events (SSE) to push unidirectional notifications to UI from API layer without Websockets.

- UI will subscribe to the Server-Sent Events (SSE) endpoint on the NestJS layer on page load for the specified user id in URL (`?userId=2`).
- A `corn scheduler` is setup on the Nest JS layer for every `2 seconds` which will emit message to a random user id.
- The SSE connection will be destroyed on page unload.

## Local setup

```
        $ git clone https://github.com/tamdilip/sse-nest-js.git
        $ cd sse-nest-js
        $ npm start
        $ Visit in Browser -> http://localhost:3000/?userId=2
```


## Screenshot
![Image of Demo App](https://raw.githubusercontent.com/tamdilip/sse-nest-js/main/client/images/demo.png)
