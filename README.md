# sse-nest-js
Sample Nest JS app to test Server Side Events (SSE) to push unidirectional notifications to UI from API layer without Websockets.

- UI will subscribe to the Server Side Event (SSE) endpoint on the NestJS layer on page load for the specified user id in URL (`?userId=2`).
- A `corn scheduler` is setup on the Nest JS layer for every `5 seconds` which will emit message to a random user id.
- The SSE connection will be destroyed on page unload.

## Local setup

```
npm i
npm start
```

Visit in Browser -> http://localhost:3000/?userId=2

