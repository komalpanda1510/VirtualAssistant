# My JARVIS-Style AI Virtual Assistant

A full-stack virtual assistant powered by MERN, Gemini AI, and Web Speech API — complete with customizable voice, branding, secure login, and zero-cost deployment via Render!

---

## ​ Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Demo / Screenshots](#demo--screenshots)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Configuration](#configuration)  
  - [Running Locally](#running-locally)  
- [Deployment](#deployment)  
- [Customization](#customization)  
- [Contributing](#contributing)  
- [License](#license)  
---

## Overview

This project gives you a conversational AI assistant that feels like JARVIS:

- **Talks** using browser’s Web Speech API  
- **Thinks** using Gemini AI  
- **Remembers** via authenticated sessions (JWT & bcrypt)  
- **Looks** the way you want with custom avatar uploads (Cloudinary + Multer)  
- **Lives** for free with deployment on Render  

---

## Features

- **Voice Input & Output** — Speak to it, and it responds like a real assistant.  
- **Gemini-powered Intelligence** — Smart, context-aware replies.  
- **Secure Authentication** — Signup/login with hashed passwords and JWT.  
- **Custom Branding** — Upload your own assistant avatar, set its name and voice.  
- **Responsive Design** — Fully functional on mobile devices.  
- **Deployed on Render** — No cost, no hassle setup.

---

## Tech Stack

| Layer         | Technologies                                            |
|---------------|--------------------------------------------------------|
| Frontend      | React, Web Speech API                                  |
| Backend       | Node.js, Express                                       |
| Database      | MongoDB (via Mongoose)                                 |
| AI            | Google Gemini                                          |
| Auth          | JWT, bcryptjs                                          |
| File Upload   | Multer + Cloudinary                                    |
| Deployment    | Render (free tier)                                     |

---

## Demo / Screenshots

*(Include animated GIFs, screenshots, or descriptions here.)*

- **Voice Interaction** – Assistant responding in real time  
- **Auth Flow** – Signup/login screens  
- **Customization** – Uploading your custom avatar  
- **Responsive Layout** – Looks great on mobile

---

## Getting Started

### Prerequisites

- Node.js & npm installed  
- MongoDB URI (local or Atlas)  
- API key for Gemini AI  
- Cloudinary account (for image uploads)  

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
npm install
cd client
npm install
cd ..
```
## Configuration

Create a `.env` file in the root:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```
## Running Locally

```bash
# Backend
npm run server

# Frontend (in /client)
npm start

# Or both concurrently if configured
npm run dev
```
Visit http://localhost:3000 to chat with your assistant!

## Deployment

This app is deployable to Render with zero cost:

```bash
# Push your code to GitHub
```


## Deployment

This app can be deployed on Render for free:

### On Render

#### Backend (Web Service)
```plaintext
- Root Directory: e.g., `backend/`
- Build Command: `npm install` (and `npm run build` if needed)
- Start Command: `npm run server`
```
#### Frontend (Static Site)
```
- Root Directory: e.g., frontend/
- Build Command: npm install && npm run build
- Publish Directory: build/ (for Create React App)
```

Then:
```
Add environment variables matching your .env file

Click Deploy and your AI assistant will be live!
```
### Customization
```
Assistant Name — Change display name in UI config.

Voice — Adjust Web Speech API voice settings.

Avatar — Upload your own image via the UI.

Styling — Modify CSS or component styling to suit your brand.
```

### Contributing
```
Fork the repo

Create a feature branch: git checkout -b feature/my-feature

Make your changes and commit: git commit -m "Add awesome feature"

Push to your branch and open a Pull Request

```
### License

This project is licensed under the MIT License. Feel free to use and customize it for personal or commercial projects.
