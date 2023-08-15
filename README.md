<h1 align="left"> <img align="left" alt="Whatsapp" width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"/>Whatsapp Based Login Server</h1></br>
<p align="left">
  Setup this to experience fastest phone number verification system SDK[⚡]
</p>

<p align="center">
  <a href="https://www.linkedin.com/[removed]" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/gVE0j.png" alt="linkedin"> LinkedIn
  </a><br/>
  <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"/></a>
  <a href="https://github.com/Piyusinha"><img alt="Profile" src="https://img.shields.io/badge/Github%20-Piyu.svg"/></a>
</p>

## Setup our server
### Clone this Project

```bash
git clone https://github.com/Piyusinha/WA-Webhook
```
### Install all dependency

```bash
npm i
```
### Run server
```bash
npm start
```
## Change Verify Token 
Verify token will be used on setup webhook on Meta For Developers 


[Go to .env File to change VERIFY_TOKEN ](https://github.com/Piyusinha/WA-Webhook/blob/d2b88ec7415b0f3ed20329a19793ab28a0afbb90/.env#L4)

## Change Mongo DB url 
a. Please use your own mongoDB cluster. </br>
  You can create you own mongoDB cluster on https://www.mongodb.com/atlas/database 
  
b. Change Cluster URL in .env file

## Change JWT secret Key
You can change [secret key](https://github.com/Piyusinha/WA-Webhook/blob/d2b88ec7415b0f3ed20329a19793ab28a0afbb90/.env#L3) in .env file (Remember - If your are not using default secret key you should also pass it in WhatsappSDK)

## Push the change and Deploy on Heroku or render
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

<a href="https://render.com/deploy?repo=https://github.com/Piyusinha/WA-Webhook">
<img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render" />
</a>


## [Setup Meta for Developers](https://developers.facebook.com/)
### **Step 1 :**</br>
Crate Account on Meta For Developers

Now You are on Dashboard

### **Step 2 :**</br>
Now Click on Create App
![image](https://user-images.githubusercontent.com/40850657/169704006-85b47d91-7343-4247-b0d2-7ae13dda7fd6.png)

a. Select Business -> **Next**</br>
b. Enter Your Details -> **Create App**

### **Step 3 :**</br>
Now Add Products to your app
![image](https://user-images.githubusercontent.com/40850657/169704185-a81489f3-cf3d-4c1c-8fbf-11ff954e7bfe.png)
 
 Scroll,You find Whatsapp and click on **Setup** </br>
 ![image](https://user-images.githubusercontent.com/40850657/169704324-cdf51096-9fb9-40f8-bafa-451250c13bb5.png)


### **Step 4 :**</br>
Click Continue </br>
![image](https://user-images.githubusercontent.com/40850657/169704480-776e0f33-4476-4c9a-ac8f-b6e2daaf6308.png)

### **Step 5 :**</br>
Add Phone number </br>
![image](https://user-images.githubusercontent.com/40850657/169704589-463a0a5e-c956-46d7-98f5-deb7d2d03878.png)

### **Step 6 :**</br>
a. Setup Webhook </br>
![image](https://user-images.githubusercontent.com/40850657/169705714-37f10788-b66b-4ed6-883b-4881fe65617c.png)

b. Add verify token( Check in Server setup steps ) and Webhook URL (https://yourherokuurl/webhook) </br>
![image](https://user-images.githubusercontent.com/40850657/169705754-9cad01cb-fce2-4594-8055-2f8cc98b3a14.png)

c. Click on Manage and Subscribe to Message
![image](https://user-images.githubusercontent.com/40850657/169705894-9db132ff-3ba0-4349-97ae-e48411844bff.png)


### Wohhhoooo we sucessfully setup our server Let's continue to [Android Library](https://github.com/Piyusinha/WhatsappBasedLogin) to Implement in our APP

# Test socket connection 
```
Socket URL = https://yourherokuurl/wasocket
Add Header = Bearer token  \\You have to generate JWT token
Connect with socket using POSTMAN and send any message to number which you verify on META platform
```

# License
```xml
Copyright 2022 lucifer (Piyush Sinha)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
