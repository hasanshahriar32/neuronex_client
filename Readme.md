# project : Hstu ai

## Live Site

Front-end: [Hstu Ai (hstu-ai.vercel.app)](https://hstu-ai.vercel.app/)

Back-end Api documentation: <https://ai-chatbot-server.vercel.app/>

## Git Repositories

<!-- - [Github Client Repo](https://github.com/hasanshahriar32/neuronex_client)
- [Github Server Repo](https://github.com/hasanshahriar32/neuronex_server) -->

## Admin Login (Front-end)

Email: [paradoxtechbd@outlook.com](mailto:paradoxtechbd@outlook.com)

Password: neuronex

Admin dashboard password: hero

## Instruction Video

- [Video Link](https://drive.google.com/file/d/13xfyx7ld1P1QGVUoMJRF4waMSnk6NY8w/view?usp=sharing)

## Technologies

- Open AI API
- Stripe
- React.js + Vite
- Tailwind CSS
- Express.js
- Node.js
- MongoDB
- Firebase
- Npm packages
- jwt
- mongoose
- swagger-ui

## Introduction - The Project's Aim

The purpose of creating project Hstu Ai is to help the students, educators, or general people at academic usage. It responses at step-by-step method or other method as instructed. The ai also gives suggestions based on previous search. It’s assistive and chat friendly response method gives user a better experience.

## Project Features

- Ai usage with low cost & effective model.
- Historical chat remembering with better chat experience.
- Payment gateway with stripe.
- Better security: at authentication, authorization and api endpoint.
- Model management at admin dashboard.

## Table of Contents

- [AI manipulation](#-feature1-ai-manipulation)
- [Authentication, Authorization and Security](#-feature2-authentication-authorization-and-security)
- [Payment and token charge](#-feature3-payment-and-token-charge)
- [Ai Configuration](#-feature4-ai-configuration)

# 🤖 Feature1: AI manipulation.

## Ai routes

## we have two pages to interact with user to provide responses.

1. ai settings page

   purpose: to take settings info from the user

   ![Untitled](https://loking.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd633d289-ca2b-4dde-bb1b-88f54786d598%2FUntitled.png?id=67ec9a5a-5df8-4626-8741-f83231b45258&table=block&spaceId=7bd1b7a5-35f8-4a4d-be69-4a8272b2b6b5&width=1060&userId=&cache=v2)

2. ai response page

   purpose: at this page, user will take the prompt from user and in response, it will give the result.

   ![Untitled](https://loking.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F68f64973-11ed-4c46-9dd4-6a17f4170778%2FUntitled.png?id=73eb7537-4a97-4913-81a1-77bfe99b182f&table=block&spaceId=7bd1b7a5-35f8-4a4d-be69-4a8272b2b6b5&width=1540&userId=&cache=v2)

## Business logic

- like chat-gpt, this response layout will have session feature. that means, for every session will have its unique session Id.
- If the session id changes, the application will create a call to the backend. Now there will be two cases.
  - If the session is found (exists), then the application will load it’s messages to front end.
  - If the session is not found, then a new session will be created. For both cases, the session data will be sent to the front-end.
- After receiving session data to the front-end, the info will be saved to the context-api.
- After that, for every new messages / query the message will be saved at the backend according to the session id.
- There is also a save 💖 icon. At clicking this, the session will be saved (as favourite).
- The application’s logic diagram is shown below.

![Untitled (1).png](<https://loking.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a93717a-d793-42ab-a38b-02ccba666a5b%2FUntitled_(1).png?id=8390d4d9-0879-4d10-8548-5121fea470d6&table=block&spaceId=7bd1b7a5-35f8-4a4d-be69-4a8272b2b6b5&width=1060&userId=&cache=v2>)

## Features of Ai

- The ai has used open ai’s one of the cheap model. Gpt-3.5-turbo model. It is super fast and cost effective (10X cheaper than text-davinchi model).
- The model which is used has given instruction to act as a tutor and tested to work perfectly.
- After generating the response, the ai gives search suggestions. The suggestions are related to the previous response. And another model is used to propose search suggestion.

![Untitled](https://loking.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F92e7c321-4821-4b31-8f7a-acf9cdd01887%2FUntitled.png?id=ce81ef22-efbc-4b93-b8bb-76366368cd5d&table=block&spaceId=7bd1b7a5-35f8-4a4d-be69-4a8272b2b6b5&width=1900&userId=&cache=v2)

- The user has freedom to save the session, delete it or print it.
- The ai model can currently remember last 2 responses. (This number can be increased at backend). Which lets the user ask about the old questions. As the model used for this (gpt-3.5-turbo) is itself a chat friendly model, which means it lets the user to have a nice chatting experience.
- There is also a voice writing feature.
- The ui/ ux used for this section has been improved.

# 🔐 Feature2: Authentication, Authorization and Security.

The application is developed with keeping zero tolerance security measurements. We kept in mind the concurrent cybersecurity issues and made it less vulnerable.

Aa a glance, the security features are:

1. Authentication is developed with firebase. (A renowned third party provider).
2. Authorization is protected with a secondary password. The password is saved at database at bcrypt hash. The admin needs to change his password at admin section which is initially (by default) blank.
3. The private and sensible api’s are protected with JWT token. The modular pattern of backend lets the developer to apply or remove the protection easily.

## Business Logic:

### Authentication:

- Authentication is build with firebase. Initially, at the front-end, the authentication will take part and then the data will be send to the backend.
- At registration period, the user info (name and image) will be updated

### Authorization:

- An existing admin can add or remove another admin. (Except, super Admin).
- Authorization is protected with a secondary password. The password is saved at database at bcrypt hash. The admin needs to change his password at admin section which is initially (by default) blank.
- For only the sensible events, the admin will be prompted to input this secondary password.

![Untitled](https://loking.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F81451904-d2a5-4a69-aac0-af99553d40b5%2FUntitled.png?id=8ce37745-87d3-4b55-b5d5-0c07983c3901&table=block&spaceId=7bd1b7a5-35f8-4a4d-be69-4a8272b2b6b5&width=1250&userId=&cache=v2)

### Api protection:

- The api’s are protected with jwt token.
- When calling the protected api’s the developer will need to send the \_id as parameter along with Bearer token at header.
- The full api documentation will be found here. [api docs for Hstu coders (ai-chatbot-server.vercel.app)](https://ai-chatbot-server.vercel.app/)

## Feature of this section:

1. Strong security.
2. Second layer verification of admin for sensible events.
3. Api protection with jwt token.
4. Admin’s freedom to control the whole website at admin dashboard.

# 💳 Feature3: Payment and token charge

## Business Logic:

- The payment is applied with stripe. The transaction info is saved at the database. A user can visit his transactions and look for current balance at user dashboard.
- The payment is recognized as recharge. When the balance will be over, the user will be prompted to recharge. After recharge the new balance and duration will be added to existing balance/ duration.

Demo card: 4242 4242 4242 4242 | 05 | 25 | 125 | 54685

![Untitled](https://loking.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F36948013-6cff-46c3-b70f-d5d6f4f68861%2FUntitled.png?id=287d8022-625b-44b6-9d19-696bc1a9769c&table=block&spaceId=7bd1b7a5-35f8-4a4d-be69-4a8272b2b6b5&width=1340&userId=&cache=v2)

- (Admin can manage these recharge amount and duration).

![Untitled](https://loking.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3156f070-ecdf-46c8-9aea-570897fb1c42%2FUntitled.png?id=99680245-81e3-46f8-b4d2-9597b6966fa1&table=block&spaceId=7bd1b7a5-35f8-4a4d-be69-4a8272b2b6b5&width=1340&userId=&cache=v2)

- Admin can also control how much the token will be charged at backend. (Default: 0.002$/1K token).
- Admin can set how much credit a user might have when he first creates his account. Or not.

### Features of payment:

1. As open Ai charges on api as pay-as-you go method. We have applied this recharge type payment system.
2. The admin will be able to set recharge amount and validity. As well as the service charge. The rest amount after deducting service charge will be added to the balance.
3. The amount will be deducted as the token usage method.

# ⏳ Feature4: Ai Configuration

- The admin can change the ai configuration at ai dashboard.
- The settings that can be modified are following:
  - The initial balance of a new user.
  - The packages to recharge.
  - The charge at 1K token usage.

Overall, these are the features.
