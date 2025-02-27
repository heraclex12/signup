'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthForm from '@/components/AuthForm';

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = async (data: { [key: string]: string }) => {
    // Here you would typically make an API call to authenticate the user
    console.log('Sign in data:', data);
    // For demo purposes, we'll just log the data and redirect
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              create a new account
            </Link>
          </p>
        </div>
        <AuthForm mode="signin" onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
