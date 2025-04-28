import Image from 'next/image';
import users from '@/data/users';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return users.map((user) => ({
    id: user.id,
  }));
}

export default async function UserProfile({ params }) {
  // Ensure params is properly awaited
  const { id } = await Promise.resolve(params);
  const user = users.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <Link href="/" className="text-blue-700 hover:text-blue-900 hover:underline mb-4 inline-block font-medium">
        ← Back to Users
      </Link>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="text-center">
          <div className="w-32 h-32 relative mx-auto mb-4">
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-gray-800">{user.name}</h1>
          <p className="text-gray-600 mb-6 text-lg">{user.bio}</p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded">
            <h2 className="font-bold mb-3 text-gray-800">Contact Information</h2>
            <p className="text-gray-700"><span className="font-medium">Email:</span> {user.email}</p>
            <p className="text-gray-700"><span className="font-medium">Phone:</span> {user.phone}</p>
            <p className="text-gray-700"><span className="font-medium">Address:</span> {user.address}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h2 className="font-bold mb-3 text-gray-800">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 