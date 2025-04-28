import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto p-4 text-center min-h-screen bg-gray-50 flex items-center justify-center">
      <div>
        <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
        <h2 className="text-2xl mb-4 text-gray-700 font-semibold">Page Not Found</h2>
        <p className="mb-8 text-gray-600 text-lg">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
} 