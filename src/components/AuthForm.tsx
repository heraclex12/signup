import React, { useState } from 'react';

interface FormField {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

interface AuthFormProps {
  mode: 'signin' | 'signup';
  onSubmit: (data: { [key: string]: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const fields: FormField[] = mode === 'signin' 
    ? [
        { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
        { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password' },
      ]
    : [
        { label: 'Name', type: 'text', name: 'name', placeholder: 'Enter your name' },
        { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
        { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password' },
        { label: 'Confirm Password', type: 'password', name: 'confirmPassword', placeholder: 'Confirm your password' },
      ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password?.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (mode === 'signup') {
      if (!formData.name?.trim()) {
        newErrors.name = 'Name is required';
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <div className="mt-1">
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              autoComplete={field.type === 'password' ? (field.name === 'confirmPassword' ? 'new-password' : 'current-password') : field.type === 'email' ? 'email' : 'name'}
            />
            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
            )}
          </div>
        </div>
      ))}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
