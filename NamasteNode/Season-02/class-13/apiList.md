# DevTinder APIs

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## connectionRequestRouter
- POST /request/send/:status/:userId  =>   POST /request/send/interested/:userId  OR  POST /request/send/ignored/:userId

- POST /request/review/:status/:requestId  =>   POST /request/review/accepted/:requestId  OR  POST /request/review/rejected/:requestId

## userRouter
- GET /user/requests/received
- GET /user/connections
- GET /user/feed - Gets you the profiles of other users on platform


Status: ignore, interested, accepted, rejected
