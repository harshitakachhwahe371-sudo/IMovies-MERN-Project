# IMovies — MERN Movie Booking Demo

React + Vite frontend, Express API, MongoDB/Mongoose, JWT login, role-based admin APIs, movie search/filter, showtimes, seat booking, booking history and cancellation.

**Demo only:** checkout is simulated and does not charge money. This is a student project starter, not a security-audited production app. A real payment gateway, verified webhooks, temporary seat holds, email/SMS and full real-time seat locking are not implemented.

## Requirements
Node.js 20+ and MongoDB local or Atlas.

## Run backend
```powershell
cd backend
Copy-Item .env.example .env
npm install
npm run seed
npm run dev
```
Configure `backend/.env` before running. API health: http://localhost:5000/api/health

## Run frontend (second terminal)
```powershell
cd frontend
Copy-Item .env.example .env
npm install
npm run dev
```
Open http://localhost:5173. If PowerShell blocks npm scripts, use `npm.cmd run dev`.

## Demo flow
Register/login, filter movies, choose a showtime and seats, confirm a demo booking, view/cancel future bookings. Seed data adds demo movies and shows. Running seed clears existing movies/shows in this demo database.

## Admin
Register an account, then assign its `role` to `admin` in MongoDB for local testing. Do not publish admin credentials. Admin page can add movies, schedule shows, archive movies, and list bookings.

## GitHub
From project root:
```powershell
git init
git add .
git commit -m "Initial IMovies MERN project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
Never commit `.env`, Atlas credentials or JWT secrets; only `.env.example`.

## Deployment
Atlas database → Render backend (`npm install`, `npm start`) → Vercel frontend (root `frontend`, build `npm run build`, output `dist`). Set Render `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`, `NODE_ENV=production`; set Vercel `VITE_API_URL` to `https://YOUR-BACKEND/api`. Then test all flows on the live site.
