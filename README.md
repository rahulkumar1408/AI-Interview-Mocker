# AI Mock Interview Application

## Project Description
This Full Stack AI Mock Interview App allows users to participate in mock interviews powered by **Gemini AI** and receive real-time feedback based on their responses. The application is built using **Next.js**, **React**, **Drizzle ORM**, and **Clerk** for user authentication, providing an intuitive and seamless interview experience. 💻

## Deployed Link: 
https://ai-interview-mocker-dun.vercel.app/

## Features
- **AI-powered mock interviews**: Generate interview questions using Gemini AI.
- **Real-time feedback**: After each interview session, the app provides feedback based on the user's performance.
- **User authentication**: Secure user accounts and session management with Clerk.
- **Scalable architecture**: Built with Next.js for fast rendering and smooth navigation.
- **ORM for data management**: Use Drizzle ORM to handle database operations efficiently.

## Tech Stack
- **Frontend**: Next.js (React)
- **Backend**: Next.js API routes
- **AI/NLP**: Gemini AI for generating interview questions and processing responses
- **Database**: Drizzle ORM for database operations
- **Authentication**: Clerk for user management

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/rahulkumar1408/AI-Interview-Mocker.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd ai-mock-interview-app
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
   - Create a `.env.local` file in the root directory.
   - Add the following environment variables:
     ```env
     GEMINI_AI_API_KEY=your-gemini-api-key
     DATABASE_URL=your-database-url
     ```

5. **Run the development server**:
    ```bash
    npm run dev
    ```

6. **Open your browser** and navigate to `http://localhost:3000`.

## Usage

1. **Sign up / Log in**: Users need to sign up or log in using Clerk for authentication.
2. **Start a mock interview**: Fill the details of yours such as Role,Topics,Years of Experience and begin the interview session.
3. **Answer questions**: Gemini AI will ask a series of questions. Respond verbally.
4. **Receive feedback**: Once the session is complete, the app will analyze your answers and provide detailed feedback, helping you improve.

## API Integration

- **Gemini AI**: Used for generating interview questions and analyzing user responses.
- **Drizzle ORM**: Manages interview data and user performance records.
- **Clerk**: Handles user authentication, registration, and session management.

## Deployment

To deploy this app, you can use platforms like Vercel (recommended for Next.js apps):

1. **Deploy on Vercel**:
   - Sign in to [Vercel](https://vercel.com/) and link your GitHub repository.
   - Configure environment variables for **Gemini AI**, **Drizzle ORM**, and **Clerk** in Vercel's dashboard.
   - Deploy your app!

## Contributing

1. **Fork the repository**.
2. **Create a new branch** for your feature:
    ```bash
    git checkout -b feature-branch
    ```
3. **Commit your changes**:
    ```bash
    git commit -m "Add new feature"
    ```
4. **Push to the branch**:
    ```bash
    git push origin feature-branch
    ```
5. **Open a pull request**.


## Acknowledgements
Special thanks to:
- **Next.js** for the powerful full-stack framework.
- **Gemini AI** for enabling AI-driven mock interviews.
- **Clerk** for user authentication.
- **Drizzle ORM** for managing our database interactions.

---


