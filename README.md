# StyleFinder

This is an app done at Integrate Hackathon 2015 built on React Native and AWS
Lamda, using IBM Watson API, Yelp's API, and Instagram's API.

StyleFinder shows a user a photo of a hair style from a salon near then,
allowing the user to like or dislike the photo. Then, they can see a list of
hair style photos that they liked and which salon that came from.

StyleFinder takes a user's geolocation data and fires off a job on AWS Lambda.
Lambda then uses Yelp's API to find nearby salons, and then uses Instagram's API
and IBM Watson's API to grab photos taken at those salons. 

## Requirements 
1. OS X - Only OS X is currently supported
2. [Homebrew](http://brew.sh/) is the recommended way to install Watchman and Flow.
3. Install [Node.js](https://nodejs.org/en/) 4.0 or newer.
    * Install nvm with [its setup instructions here](https://github.com/creationix/nvm#installation). Then run `nvm install node && nvm alias default node`, which installs the latest version of Node.js and sets up your terminal so you can run it by typing `node`. With nvm you can install multiple versions of Node.js and easily switch between them.
    * New to [npm](https://docs.npmjs.com/)?
4. `brew install watchman`. We recommend installing watchman, otherwise you might hit a node file watching bug.
5. `brew install flow`, if you want to use flow.
6. Install React Native: `npm install -g react-native-cli`

## iOS Setup 
1. Xcode 6.3 or higher is required. It can be installed from the App Store.

## Quick Start
1. After cloning this repo, `cd` into the project and install the dependencies by running `npm install`
2. Open `ios/StyleFinder.xcodeproj` in Xcode. Go to the `Product` tab in Xcode and select `Run`
3. You may need to reload the app in the simulator by hitting ⌘-R in your iOS simulator 
