'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto p-4 text-center min-h-screen bg-gray-50 flex items-center justify-center">
      <div>
        <h1 className="text-6xl font-bold mb-4 text-gray-800">500</h1>
        <h2 className="text-2xl mb-4 text-gray-700 font-semibold">Something went wrong!</h2>
        <p className="mb-8 text-gray-600 text-lg">An error occurred. Please try again.</p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
} 