# TourMate Frontend

**Project Name:** TourMate  

**Admin Login:**  
- Email: `sourob2356@gmail.com`  
- Password: `example123`
  
**Guide Login:**  
- Email: `miraz@gmail.com`  
- Password: `miraz123`

**User Login:**  
- Email: `fullstackdev2356@gmail.com`  
- Password: `example123`
  
**Live URL:** _[[https://tour-mate-client.vercel.app](https://tour-mate-client.vercel.app)]_
**Server source code:** _[[https://tour-mate-server-swart.vercel.app](https://tour-mate-server-swart.vercel.app)]_

---

## 🌟 Overview

A Fullstack application for managing and organizing tours, where admins and super admins can create and manage tour packages. Users can explore available tours, book their desired ones, and make secure payments through SSLCommerz. Each tour includes assigned guides responsible for assisting tourists during their trips.

---

## 🚀 Key Features

### User Authentication
- Users can register and log in.
- Google OAuth login support via Passport.
- Forgot password, Verify email, Reset password etc.

### Tours 
- List all available tours with:
  - Search by name, title or location
  - Filter by division/type etc
  - Pagination
- **Booking Logic**: 
  - Only **User can book tours**.
- View tours details, including guide info, reviews, and description.
- Add a review after attending a tour.

### User Dashboard
- See User Stats
- Manage user profile and information
- See list of booked Tours
- Re Payment booked tours
- See Guide applications

### Guide Dashboard
- See Guide Stats
- Manage guide profile and information
- Manage Assigned tours

### Admin Dashboard
- See tours, users, bookings stats 
- Manage Users, Guides, Admins or Super Admins
- Approve, reject Guide applications 
- Manage tours
- Manage bookings
- Manage divisions

### Additional Pages
- **Landing Page** with:
  - Hero
  - Featured Tours
  - Explore by division
  - Why Choose TourMate
  - Become a Guide
  - What Our Travelers Say
  - Subscription banner
- **Static Content Pages**:
  - About
  - Contact
  - FAQ
  - Privacy Policy
  - Terms & Conditions
- **404 Not Found Page**:
  - not found 

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/asrafulsgit/tour-mate-client.git
cd tour-mate-client
Install dependencies

bash
npm install
```
```env
Configure environment variables
Create .env.local with:
NEXT_PUBLIC_API_BASE_URL = ""
```

```bash
npm run dev
```


