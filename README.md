# client
The official web client for the cSploit daemon [![Build Status](https://travis-ci.org/cSploit/client.svg?branch=master)](https://travis-ci.org/cSploit/client)



## Build process

```shell
cd app
npm run build #output will be cordova's www folder
cd ..
cordova build android #or iOs
#cordova emulate android/iOs
```



## Development

Work **only** within *./app* and test with `npm run dev`. This will launch a live-reload server with super-fast incremental webpack building.
Code style follows [airBnB's guide](https://github.com/airbnb/javascript), PRs are more welcome with tests included.
