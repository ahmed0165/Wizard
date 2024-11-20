// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600">
      <div className="bg-white p-8 rounded-md shadow-lg w-3/4 md:w-1/2 lg:w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-md"
          />
          <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
