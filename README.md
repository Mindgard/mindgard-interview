## Scenario

We have an [Image classifier API](https://github.com/LJBirch/Backend-Test/tree/main) that can take an photo/image and return a classification.

We wish to wrap this in an ExpressJS service that will make it suitable to use in a production environment.

```
┌────────────────────────────────────┐                                  
│              Docker                │                                  
│                                    │                                  
│ ┌──────────────────┐  ┌──────────┐ │ ┌─────────────────┐     ┌───────┐
│ │                  │  │          │ │ │                 │     │       │
│ │ Image Classifier ◄──┤ Fast API ◄─┼─┤   Express API   │◄────┤ Photo │
│ │                  │  │          │ │ │                 │     │       │
│ └──────────────────┘  └──────────┘ │ └─────────────────┘     └───────┘
│                                    │                                  
│                                    │                                  
└────────────────────────────────────┘                                  
```


In particular the classifier API we're wrapping lacks some of the following. 

* Validation of uploaded filetypes
* Rate limiting
* Authentication
* Data sanitization
* Protection against common security vulnerabilities
* Error handling and logging (n.b. without exposing sensitive information)
* Performance and scalability awareness

We'd like to implement some of these via a new ExpressJS wrapper service. 

## Task

We'd like you to implement some of the above. Please don't spend more than 2-3 hours on this. It's not essential you complete all the features listed above; we're more interested in your approach.  

To help you get started we have provided you with a scaffolding wrapper service that can call through to a fake or real classifier service.  

## Instructions to run

`$ npm install`

`$ npm start fake`

You can upload an image to the express service you just started. e.g.
 
`$ curl -vv -F "image_file=@./tests/dog.jpg" http://localhost:3000/image`

You can also run tests via 

`$ npm test`

n.b. `$ npm start fake` starts up with a stub image classifier service. Just in case you're interested, you can also omit the `fake` parameter to point to a real instance of our example [image classifier API](https://github.com/LJBirch/Backend-Test/tree/main). To get this running you'd have to clone and follow the instructions in [the linked repo](ttps://github.com/LJBirch/Backend-Test/tree/main). But for the purposes of the exercise you can save yourself some time by using the stub.

## Evaluation criteria

We'd like to either pair with you on this task or review it together with you after you complete.

* Ability to articulate decisions and tradeoffs during code review
* Code quality
* Completeness
* Testing 
* Security implementation & awareness

## Additional Notes

* Feel free to modify the provided code in any way you see fit
* Include some written notes on your solution & how we can try it out 

## Submission

* Create a private GitHub/GitLab repository for storing the code and share it with us. Invite is ok.

## Additional information

Unless you work for us, your work is your own. We kindly ask you to not share the code publicly before the recruitment project is concluded. Once the process is completed, you’re free to open source this work and share it publicly / as part of your portfolio. 

## Time Limit 

Please return the exercise within 7 days (or as otherwise agreed with whomever sent you this exercise). 

Good luck! 

Mindgardians 🛡️ 🧠  
