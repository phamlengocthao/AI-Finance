import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";

export default function Login() {
  const { login, loginWithGoogle, register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }

      navigate("/"); // ✅ về Home
    } catch (err) {
      alert(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      alert("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2 text-center">
          🤖 AI Finance
        </h2>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
          {isRegister ? "Create your account" : "Login to your account"}
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border rounded w-full p-3 mb-3 dark:bg-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full p-3 mb-4 dark:bg-gray-700"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-50"
        >
          {isRegister ? "Register" : "Login"}
        </button>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border py-3 rounded-lg mt-3 flex justify-center items-center gap-2"
        >
          <span>🔐</span> Continue with Google
        </button>

        {/* Switch mode */}
        <p className="text-xs text-center mt-4 text-gray-500">
          {isRegister ? "Already have an account?" : "No account yet?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="underline text-blue-600 dark:text-blue-400"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>

        {/* Back home */}
        <p className="text-xs text-center mt-3">
          <Link to="/" className="underline text-gray-500">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
