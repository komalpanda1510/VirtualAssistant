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

