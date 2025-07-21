# Simple Sign-in

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern authentication system built with Next.js, featuring email verification, secure sign-in, and user management. This project implements a complete authentication flow with email verification, providing a secure and user-friendly sign-up and sign-in experience.

## Features

- 🔐 **Advanced Authentication**
  - Secure user registration and login
  - Session management with NextAuth.js
  - Password hashing and security best practices
  - Protected API routes and middleware
  
- ✉️ **Email Verification System**
  - Automated email verification flow
  - Secure token generation and validation
  - Custom email templates
  - Verification status tracking
  
- 🎨 **Modern UI Components**
  - Responsive authentication forms
  - Loading states and animations
  - Error handling and validation
  - Toast notifications for user feedback
  
- 🛡️ **Security Features**
  - CSRF protection
  - Rate limiting
  - Secure password handling
  - HTTP-only cookies
  
- 🚀 **Performance Optimized**
  - Server-side rendering with Next.js
  - Turbopack for faster development
  - Optimized asset loading
  - Efficient database queries
  - Type-safe operations

## Tech Stack

- **Frontend:**
  - Next.js with App Router
  - React
  - TypeScript for type safety
  - Tailwind CSS for styling
  - PostCSS for CSS processing
  
- **Backend:**
  - Next.js API routes
  - Prisma ORM
  - SQLite database
  - NextAuth.js for authentication
  
- **Development Tools:**
  - ESLint for code quality
  - TypeScript for type checking
  - Prisma Studio for database management
  - Turbopack for fast refresh
  - PostCSS plugins for CSS optimization

## Authentication Flow

1. **Sign Up Process:**
   - User submits registration form
   - System validates input and creates account
   - Verification email is sent
   - Account remains inactive until verified

2. **Email Verification:**
   - User receives verification email
   - Clicks verification link
   - System validates token
   - Account is activated upon success

3. **Sign In Process:**
   - User enters credentials
   - System validates and creates session
   - User is redirected to protected area

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- npm/yarn/pnpm package manager
- Git for version control

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
cd simple-signin
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Set up the database:
\`\`\`bash
npx prisma generate
npx prisma migrate dev
\`\`\`

4. Create a \`.env\` file in the root directory with the following variables:
\`\`\`env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
# Add your email service credentials
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

The development server uses Turbopack for faster refresh rates. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

\`\`\`
├── prisma/                # Database schema and migrations
│   ├── migrations/        # Database migrations
│   └── schema.prisma     # Prisma schema file
├── public/               # Static assets
│   ├── file.svg         # File icon
│   ├── globe.svg        # Globe icon
│   ├── next.svg         # Next.js logo
│   ├── vercel.svg       # Vercel logo
│   └── window.svg       # Window icon
├── src/
│   ├── app/             # App router pages and API routes
│   │   ├── api/         # API endpoints
│   │   │   ├── auth/    # Authentication API routes
│   │   │   ├── signup/  # Sign-up API routes
│   │   │   └── verify/  # Email verification routes
│   │   ├── auth/        # Authentication pages
│   │   ├── signin/      # Sign-in page
│   │   └── signup/      # Sign-up page
│   ├── components/      # Reusable React components
│   │   └── AuthForm.tsx # Authentication form component
│   ├── lib/            # Utility functions and configurations
│   │   ├── email.ts    # Email service configuration
│   │   └── prisma.ts   # Prisma client configuration
│   └── types/          # TypeScript type definitions
├── .gitignore          # Git ignore file
├── eslint.config.mjs   # ESLint configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
└── tsconfig.json       # TypeScript configuration
\`\`\`

## UI Components

### AuthForm Component
The main authentication component (\`AuthForm.tsx\`) provides:
- Dynamic form rendering for sign-in and sign-up
- Real-time input validation
- Error handling and display
- Loading states and animations
- Responsive design for all screen sizes

### Design System
- Consistent color scheme using Tailwind CSS
- Responsive typography
- Custom SVG icons for enhanced UI
- Loading spinners and animations
- Toast notifications for user feedback

## API Routes

- \`POST /api/signup\` - Create new user account
- \`POST /api/verify\` - Verify email address
- \`POST /api/auth/[...nextauth]\` - NextAuth.js authentication endpoints

## Development

### Available Scripts

- \`npm run dev\` - Start the development server with Turbopack
- \`npm run build\` - Build the application for production
- \`npm run start\` - Start the production server
- \`npm run lint\` - Run ESLint to check code quality

### Development Tools

- **TypeScript** - For type-safe code
- **ESLint** - For code linting and maintaining code quality
- **PostCSS** - For processing CSS with plugins
- **Prisma Studio** - For database management
- **Turbopack** - For faster development experience

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/improvement\`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (\`git commit -am 'Add new feature'\`)
6. Push to the branch (\`git push origin feature/improvement\`)
7. Create a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## Deployment

1. **Build the Application:**
\`\`\`bash
npm run build
\`\`\`

2. **Database Setup:**
- Set up your production database
- Update DATABASE_URL in your production environment
- Run migrations:
\`\`\`bash
npx prisma migrate deploy
\`\`\`

3. **Environment Variables:**
- Set up all required environment variables in your hosting platform
- Ensure NEXTAUTH_URL is set to your production URL
- Configure email service credentials

4. **Deploy:**
- Deploy to your preferred hosting platform (Vercel, AWS, etc.)
- Set up proper SSL certificates
- Configure custom domain if needed

5. **Post-Deployment:**
- Verify email sending functionality
- Test authentication flow
- Monitor error logs and performance

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Turbopack Documentation](https://turbo.build/pack)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
