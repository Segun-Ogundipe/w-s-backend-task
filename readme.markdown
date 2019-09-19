# Witts & Stratts Backend Developer Task

[![Coverage Status](https://coveralls.io/repos/github/Segun-Ogundipe/w-s-backend-task/badge.svg?branch=develop)](https://coveralls.io/github/Segun-Ogundipe/w-s-backend-task?branch=develop)
[![Build Status](https://travis-ci.com/Segun-Ogundipe/w-s-backend-task.svg?branch=develop)](https://travis-ci.com/Segun-Ogundipe/w-s-backend-task)

### GitHub Pages link for UI
[W-S-Backend-Task](https://segun-ogundipe.github.io/w-s-backend-task/client/index.html)

## SERVER

## API ENDPOINTS

| Resource URL | Methods  | Description  |
| ------- | --- | ---- |
| /api/totp | GET | Get TOTP |
| /api/totp | POST | Validate TOTP |

## Used Tools

### Server Environment
```
 NodeJS
```
### Framework
```
 Express
```
### Testing Framework and assertion library
```
 Mocha and Chai
```
### Continuous Integration
```
Travis CI
```
### Test Coverage
```
Coveralls
```
### Deployment
```
Heroku
```
### Heroku
[W-S-Backend-Task](https://w-s-totp.herokuapp.com/)

------------------------------------------------------------------------------

## Installing / Getting started

After cloning the project cd into it and run

```shell
npm install
npm run start
```

The first line installs the necessary libraries. The second line starts up the server so the endpoints can be accessed

## Developing

To start developing the project further run the following in the command line:

```shell
git clone https://github.com/Segun-Ogundipe/w-s-backend-task.git
cd w-s-backend-task/
npm install
```

`git clone` downloads a copy of the project and place it in 'w-s-backend-task' folder.
`cd` command gets you into the project's directory and `npm install` installs the libraries in package.json

## Overview

According to wikipedia, TOTP (Time-based one-time password; RFC 6238) is a means of generating unique one-time password, by taking its uniqueness from the current time. TOTP is an extension of HOTP, a one-time password (OTP) algorithm based on HMAC (RFC 4226).

The basic idea of TOTP is to generate a token that will serve as an extra means of security for internet applications. An example is your GTB app that requires the use of a hardware (or _\*737#_ service) to generate a token to validate a transaction or Github.com that uses a validator app or SMS to provide a token for 2-factor authentication.

TOTP uses a shared secret, which is available to both the server and the token generating device/platform.

<img src="https://www.microcosm.com/images/smartsign/otp.png" width="400"/>

<img src="https://www.telesign.com/wp-content/uploads/2015/09/sms_verify_graph.png" width="400" />

## Task

Create a simple web app that generates a TOTP using the secret key (MKBSWN3DPEHPK2PXZ) and a time cut-off of 30 seconds. Also provide a means of validating a provided TOTP token generated from your application.

A web interface is provided for you. All you need to do is to hook your endpoints to the various button interface.

You can use any library, programming language and framework of your choice.

To submit your answers, please upload it to github.com and send the link to us.

PS: To test the validity of your tokens and your program, you can use an app like authy (https://authy.com)

### Appendix

**RFC 4226:** <a href="https://tools.ietf.org/html/rfc4226" title="RFC4226">RFC4226</a>

**RFC 6238:** <a href="https://tools.ietf.org/html/rfc6238" title="RFC6238">RFC6238</a>

**TOTP on wikipedia:** <a href="https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm" title="TOTP">TOTP</a>

**Secret Key:** MKBSWN3DPEHPK2PXZ
