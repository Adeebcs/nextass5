import Image from 'next/image';
import Link from 'next/link';
import users from '@/data/users';

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">User Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="w-24 h-24 relative mx-auto mb-4">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl font-bold text-center text-gray-800">{user.name}</h2>
            <p className="text-gray-600 text-center mt-2">{user.bio}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {user.skills.slice(0, 2).map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
