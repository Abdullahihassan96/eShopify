# MERN E-Commerce

Full-stack e-commerce app with admin and shopping views. The client is a Vite + React app, and the server is a Node/Express API with MongoDB.

## Features

- Customer shopping flow with product browsing, search, filters, cart, and checkout
- Admin dashboard for products, orders, and features
- Auth with protected routes and role-based access
- Reviews, ratings, and order history
- Media uploads via Cloudinary

## Tech Stack

- Client: React, Vite, Tailwind CSS, Redux Toolkit
- Server: Node.js, Express
- Database: MongoDB (Mongoose)
- Payments: PayPal (configurable)
- Media: Cloudinary

## Project Structure

```
client/   # React app
server/   # Express API
```

## Getting Started

### Prerequisites

- Node.js 18+ (or 20+)
- MongoDB connection string
- Cloudinary account (optional for image uploads)
- PayPal credentials (optional for payments)

### Install

```
cd server
npm install

cd ../client
npm install
```

### Environment Variables

Create a `.env` file in `server/`:

```
PORT=5000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
```

If you use a client-side env var, add it to `client/.env` with the `VITE_` prefix:

```
VITE_API_URL=http://localhost:5000
```

### Run in Development

```
cd server
npm run dev
```

In a second terminal:

```
cd client
npm run dev
```

Client runs at `http://localhost:5173` and server at `http://localhost:5000` by default.

## Scripts

### Client

- `npm run dev` Start Vite dev server
- `npm run build` Production build
- `npm run preview` Preview production build
- `npm run lint` Lint

### Server

- `npm run dev` Start server with nodemon
- `npm start` Start server

## License

- MIT
