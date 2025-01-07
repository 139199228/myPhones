# Technical Architecture

## 1. Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context + Hooks
- **Icons**: Lucide React
- **Type Safety**: TypeScript strict mode

## 2. Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **API Style**: RESTful
- **Authentication**: JWT
- **Validation**: Zod

## 3. Database
- **Primary**: PostgreSQL (via Supabase)
- **Features**:
  - Row Level Security
  - Real-time subscriptions
  - Built-in authentication

## 4. Deployment
- **Frontend**: Netlify
- **Backend**: Supabase
- **CI/CD**: GitHub Actions

## 5. Development Tools
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Vitest
- **Version Control**: Git

## 6. Security
- **Authentication**: Supabase Auth
- **Authorization**: Row Level Security
- **API Security**: CORS, Rate Limiting
- **Data Validation**: Runtime type checking

## 7. Performance
- **Code Splitting**: Dynamic imports
- **Asset Optimization**: Vite built-in
- **Caching**: Service Worker
- **CDN**: Netlify Edge Network