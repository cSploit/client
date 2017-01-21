# cSploit 2 client
The official web client for the cSploit daemon [![Build Status](https://travis-ci.org/cSploit/client.svg?branch=master)](https://travis-ci.org/cSploit/client)


## Build process

```shell
cd app
npm run build #Output will be cordova's www folder
cd ..
cordova build android #Or iOS, make sure to have installed the platform which you want to target
cordova emulate android/iOS #It will run the .APK/.IPA file on a local emulator
```



## Development

Work **only** within *./app* and test with `npm run dev`. This will launch a live-reload server with super-fast incremental webpack building.
Code style follows [airBnB's guide](https://github.com/airbnb/javascript), PRs are more welcome with tests included.
