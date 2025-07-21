# Simple Sign-in

A modern authentication system built with Next.js 14, featuring email verification, secure sign-in, and user management.

## Features

- 🔐 Secure authentication with NextAuth.js
- ✉️ Email verification system
- 📝 User registration with email
- 🔑 Secure sign-in process
- 🎨 Modern UI with responsive design
- 🔄 Real-time form validation
- 🗄️ Persistent data storage with Prisma

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Prisma](https://www.prisma.io/) - ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [SQLite](https://www.sqlite.org/) - Database
- [TailwindCSS](https://tailwindcss.com/) - Styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simple-sigin.git
cd simple-sigin
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

Fill in your `.env` file with the following:
```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
EMAIL_SERVER=your-smtp-server
EMAIL_FROM=your-email@example.com
```

4. Set up the database:
```bash
npx prisma migrate dev
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── prisma/               # Database schema and migrations
├── public/              # Static assets
├── src/
│   ├── app/            # App router pages and API routes
│   ├── components/     # Reusable components
│   ├── lib/           # Utility functions and configurations
│   └── types/         # TypeScript type definitions
```

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font for Vercel.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
