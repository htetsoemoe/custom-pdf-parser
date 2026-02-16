# Node.js PDF Parser API

Build a custom PDF parser using TypeScript and Node.js

## Tech Stack
 - **Runtime**: Node.js with ES modules
 - **Framework**: Express.js
 - **Language**: TypeScript
 - **PDF Library**: pdf-parse
 - **Testing**: Jest + Supertest
 - **File Upload**: express-fileupload
 - **CORS**: cors middleware

## Installation

### Prerequisites

- Node.js 18+ (ES modules support required)
- npm or yarn


### Setup
1. Clone the repository

```bash
git clone <repository-url></repository-url>
cd node-pdf-parser
```

2. Install dependencies

```bash
npm install cors express express-fileupload pdf-parse
```

```bash
npm install -D typescript ts-node @types/node @types/express nodemon prettier dotenv @types/cors @types/express-fileupload
```

```bash
npx tsc --init
```

3. (Optional) Create a `.env` file for environment variables:

```env
PORT=8080
NODE_ENV=development
```

## Usage

### Development

Start the development server with auto-reload:

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### Production

Build the TypeScript:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## API Endpoints

### Health Check

**GET** `/`

Check if the API is running.

```bash
curl http://localhost:3000/
```

**Response:**
```json
{
  message: 'Welcome to the PDF Text Extractor API!'
}
```