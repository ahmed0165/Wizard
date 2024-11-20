// src/app/profile/page.tsx
export default function ProfilePage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-6 rounded-md shadow-lg w-3/4 md:w-1/2 lg:w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <p className="text-gray-700">Welcome to your profile!</p>
        {/* Add profile details or account settings here */}
      </div>
    </div>
  );
}
