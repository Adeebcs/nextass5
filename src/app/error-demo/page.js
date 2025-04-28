'use client';

import { useEffect, useState } from 'react';

export default function ErrorDemo() {
  const [shouldError, setShouldError] = useState(false);

  useEffect(() => {
    if (shouldError) {
      throw new Error('This is a simulated error!');
    }
  }, [shouldError]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Error Demonstration</h1>
        <p className="text-gray-600 mb-8">
          Click the button below to trigger a 500 error and see the error page in action.
        </p>
        <button
          onClick={() => setShouldError(true)}
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Trigger Error
        </button>
      </div>
    </div>
  );
} 