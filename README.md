# Simple Sign-in

A modern authentication system built with Next.js 14, featuring email verification, secure sign-in, and user management.

## Features

- 🔐 User authentication (Sign up & Sign in)
- ✉️ Email verification system
- 🛡️ Secure password handling
- 🎨 Modern UI with responsive design
- 🔄 API routes for authentication flow
- 📦 SQLite database with Prisma ORM

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Database:** SQLite
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS, PostCSS
- **Linting:** ESLint
- **Build Tool:** npm/yarn/pnpm

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- npm/yarn/pnpm package manager
- Git for version control

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd simple-signin
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma migrate dev
```

4. Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
# Add your email service credentials
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
├── prisma/                # Database schema and migrations
│   ├── migrations/        # Database migrations
│   └── schema.prisma     # Prisma schema file
├── public/               # Static assets
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
│   ├── lib/            # Utility functions and configurations
│   └── types/          # TypeScript type definitions
├── .gitignore          # Git ignore file
├── eslint.config.mjs   # ESLint configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
└── tsconfig.json       # TypeScript configuration
```

## API Routes

- `POST /api/signup` - Create new user account
- `POST /api/verify` - Verify email address
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication endpoints

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

The application uses Next.js 14 with the App Router. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Development Tools

- **TypeScript** - For type-safe code
- **ESLint** - For code linting and maintaining code quality
- **PostCSS** - For processing CSS with plugins

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License.
