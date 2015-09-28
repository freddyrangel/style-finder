# StyleFinder

This is an app done at Integrate Hackathon 2015 built on React Native and AWS
Lamda, using IBM Watson API, Yelp's API, and Instagram's API.

StyleFinder shows a user a photo of a hair style from a salon near then,
allowing the user to like or dislike the photo. Then, they can see a list of
hair style photos that they liked and which salon that came from.

StyleFinder takes a user's geolocation data and fires off a job on AWS Lambda.
Lambda then uses Yelp's API to find nearby salons, and then uses Instagram's API
and IBM Watson's API to grab photos taken at those salons. 
