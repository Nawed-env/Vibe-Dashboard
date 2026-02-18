# Vibe-Dashboard

#  Vibe Dashboard

A modern full-stack application showcasing "Vibe Coding" - building clean, functional, and aesthetically pleasing products with a glassmorphism design.

##  Project Overview

This project demonstrates a complete full-stack application with:
- **Backend**: Java Spring Boot REST API
- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Design**: Modern glassmorphism UI with smooth animations

##  Features

- ✨ Beautiful glassmorphism design
- 🔍 Real-time search functionality
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎯 Clean and modern UI/UX

## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot 3.2.0
- Maven
- Lombok

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS 3.4
- Next.js Image Optimization

##  Project Structure

```
vibe-dashboard/
├── backend/                 
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/dashboard/
│   │       │       ├── backendApplication.java
│   │       │       ├── controller/
│   │       │       │   └── ItemController.java
│   │       │       ├── model/
│   │       │       │   └── Item.java
│   │       │       └── service/
│   │       │           └── ItemService.java
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── frontend/               # Next.js Frontend
    ├── src/
    │   ├── app/
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   └── components/
    │       ├── ItemCard.tsx
    │       └── SearchBar.tsx
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── next.config.js
    └── tsconfig.json
```

##  Getting Started

### Prerequisites

Make sure you have the following installed:
- **Java 17** or higher
- **Maven 3.6+**
- **Node.js 18+** and npm
- **Git**

### Installation & Setup

#### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd vibe-dashboard
```

#### 2️⃣ Setup Backend (Spring Boot)

```bash
# Navigate to backend directory
cd backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The backend will start at `http://localhost:3131`

**API Endpoint:**
- GET `/api/items` - Get all items
- GET `/api/items?search=query` - Search items

#### 3️⃣ Setup Frontend (Next.js)

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

The frontend will start at `http://localhost:3000`

##  Usage

1. **Start the Backend**: Run Spring Boot application (port 8080)
2. **Start the Frontend**: Run Next.js application (port 3000)
3. **Open Browser**: Navigate to `http://localhost:3000`
4. **Search**: Use the search bar to filter items by title, description, or category

##  Design Features

### Glassmorphism
The UI uses a modern glassmorphism effect with:
- Transparent backgrounds with backdrop blur
- Subtle borders and shadows
- Smooth hover effects and transitions

### Animations
- Fade-in effects for content loading
- Slide-up animations for card grids
- Smooth scale transformations on hover
- Loading spinner for data fetching

### Responsive Design
- Mobile-first approach
- Responsive grid layout (1/2/3 columns)
- Optimized images with Next.js Image component

##  API Documentation

### GET /api/items

**Description:** Retrieve all items or search items by query

**Query Parameters:**
- `search` (optional): Search term to filter items

**Response:**
```json
[
  {
    "id": 1,
    "title": "Modern Workspace",
    "description": "A sleek and minimalist workspace setup",
    "category": "Design",
    "imageUrl": "https://example.com/image.jpg",
    "rating": 4.8
  }
]
```

##  Configuration

### Backend Configuration (`application.properties`)
```properties
server.port=8080
spring.application.name=vibe-dashboard
```

### Frontend Configuration
- **Tailwind CSS**: Configured in `tailwind.config.js`
- **Next.js**: Configured in `next.config.js`
- **TypeScript**: Configured in `tsconfig.json`

##  Build for Production

### Backend
```bash
cd backend
mvn clean package
java -jar target/vibe-dashboard-1.0.0.jar
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

## 🐛 Troubleshooting

### Backend Issues
- **Port already in use**: Change port in `application.properties`
- **Maven build fails**: Run `mvn clean install -U`

### Frontend Issues
- **Module not found**: Run `npm install`
- **API connection fails**: Ensure backend is running on port 8080
- **Image loading issues**: Check CORS configuration in backend

##  Notes for Interviewers

This project demonstrates:
1. **Clean Architecture**: Separation of concerns with controller/service/model layers
2. **Modern Frontend**: Next.js App Router with TypeScript
3. **Beautiful UI**: Glassmorphism design with Tailwind CSS
4. **Real-time Features**: Debounced search functionality
5. **Responsive Design**: Mobile-first approach
6. **Best Practices**: Error handling, loading states, and user feedback

## 👨 Author

Created for Ravulapati Techub PVT LTD technical assessment

##  License

This project is created for assessment purposes.
