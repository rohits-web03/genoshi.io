# Genoshi.io

Check it out : [Deployed Link](https://genoshi-io-two.vercel.app/)

## Introduction

This repository contains a React application scaffolded with Vite, written in TypeScript, styled using Tailwind CSS and Icons from Font Awesome.

# Project Overview

This project contains the required two pages.

After starting the server:

![Home Page](<public/Genoshi Frontend Internship Test.png>)

### Pricing Page:

![Pricing](<public/Genoshi Pricing Page.png>)

![After selecting a pricing plan](<public/Genoshi Pricing Page 2.png>)

### Profile Pages:

#### Profile Dashboard:

![Profile Dashboard](<public/Profile Dashboard.png>)

#### Create New Graph

![Create New Graph](<public/Create New Graph Page.png>)

#### Account Settings

![Account Settings](<public/Account Settings.png>)

#### Graph Details


![Graph Details](<public/Graph Details.png>)

#### Graph Preview

![Graph Preview](<public/Graph Preview Page.png>)

### Below are the details of each page:

## Profile Pages
### Profile Dashboard
- User profile details: name, email, profile photo, bio
- Account details: current subscription plan & status
- Usage metrics: graphs created, graphs shared, papers collected
- Recent activity feed: show recent graphs, collections, queries
- Buttons for creating new graphs, sharing graphs, and uploading papers
- List of saved graphs with title, date created, preview thumbnail
- Links to Favourites and Collections pages

### Create New Graph Page
- Form to specify graph title and description
- Upload papers or select from favourites/collections
- Configure graph settings: layout, colors, etc
- View graph visualization preview

### Graph Details Page
- Show graph title, description, date created
- Button to navigate to the graph
- List of papers shown in the graph
- Buttons to edit (remove/favourite papers), share, or delete a graph

### Account Settings
- Update user profile details
- Change password
- Manage subscription plan
- Link third-party accounts like Google
- View usage statistics

## Pricing Page
### Pricing Plans
Create a basic page to display pricing plans in a responsive grid format:

- **Basic Plan**
  - Price: $4/month/user
  - Features:
    - Up to 10 graphs
    - Up to 500 chatbot queries

- **Pro Plan**
  - Price: $8/month/user
  - Features:
    - Up to 50 graphs
    - Up to 1000 chatbot queries
    - Email + live chat support

- **Enterprise Plan**
  - Price: Contact for price
  - Features:
    - Unlimited graphs
    - Ability to upload custom PDFs
    - 24/7 phone + email support


## Setting up the project locally

### Requirements

Before getting started, ensure you have the following prerequisites installed:

- Node.js (recommended version)
- npm or Yarn package manager

#### Follow these steps to set up the project locally:

### 1. Clone the Repository

    git clone https://github.com/rohits-web03/genoshi.io.git

#### Navigate to Project Directory:

    cd genoshi.io

### 2. Install Dependencies

#### Using npm

    npm install

#### Using Yarn

    yarn install


### 3. Run the Development Server

#### Using npm
    npm run dev

#### Using Yarn
    yarn dev

The application should start and be accessible at [http://localhost:5173](http://localhost:5173) by default.

## Project Structure

- `src/`: Contains the application source code and assets.
  - `assets`: Holds the images used.
  - `components/`: Holds React components.
      - `Pricing/`: Holds React components related to Pricing page.
      - `Profile`: Holds React components related to Profile pages.
  - `Pages`: Holds the Pages for different routes.
- `App.tsx`: Main application file.
- `main.tsx`: Entry point for the application.

## Available Scripts

In the project directory, you can run the following commands:

- `npm run dev` or `yarn dev`: Starts the development server.
- `npm run build` or `yarn build`: Builds the production-ready application.
- `npm run serve` or `yarn serve`: Serves the production build for testing.
- `npm run lint` or `yarn lint`: Lints the code using ESLint.

## TypeScript Configuration

The project is set up to use TypeScript. Feel free to add TypeScript types and interfaces as needed in the `src/` directory.

## Tailwind CSS Configuration

The Tailwind CSS configuration is located in the `tailwind.config.js` file. Customize it according to your styling requirements.

