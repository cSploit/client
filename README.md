# client
The official web client for the cSploit daemon [![Build Status](https://travis-ci.org/cSploit/client.svg?branch=master)](https://travis-ci.org/cSploit/client)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Build process

```shell
npm install
npm run build
npm run ios
npm run android
npm run browser
```



## Development

Work **only** within *./src* and test with `npm run browser`. This will launch a live-reload server with super-fast incremental webpack building. Note that many cordova plugins may fail to work on a browser so testing capabilities are limited.
