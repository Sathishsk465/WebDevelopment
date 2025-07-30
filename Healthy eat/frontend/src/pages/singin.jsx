import React, { useState } from 'react';

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [action, setAction] = useState('Login');
  const [welcome, setWelcome] = useState('Welcome Back!');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (action === "signUp" && !name)) {
      setError('Please fill in all required fields.');
      return;
    }

    const endpoint =
      action === 'Login'
        ? 'http://localhost:3001/signin'
        : 'http://localhost:3001/signup';

    const payload =
      action === 'Login'
        ? { email, password }
        : { name, email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('Server says:', result);

      if (!response.ok) {
        setError(result.message || 'Something went wrong.');
        return;
      }

      setError('');
      alert(`${action === 'Login' ? 'Login' : 'Signup'} successful!`);

      if (action === 'signUp') {
        setAction('Login');
        setWelcome('Welcome Back!');
        setName('');
      }

      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="flex items-center py-10 justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6"
      >
        <img src="src/assets/chef.png" alt="" className="w-50 mx-auto my-0 animate-bounce" />
        <h2 className="text-2xl font-bold text-gray-800 text-center">{welcome}</h2>
        {action === 'Login' && (
          <p className="text-sm text-gray-500 text-center">
            Sign in to continue your shopping adventure
          </p>
        )}

        {error && (
          <div className="text-red-600 bg-red-100 p-2 rounded text-sm text-center">
            {error}
          </div>
        )}

        {action === 'signUp' && (
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
        )}

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all"
        >
          {action}
        </button>

        {action === 'Login' ? (
          <div className="text-center text-sm mt-4">
            New here?{' '}
            <a
              onClick={() => {
                setAction('signUp');
                setWelcome('Register to Order');
              }}
              className="cursor-pointer"
            >
              <b className="text-indigo-500 hover:underline">Create an account</b>
            </a>
          </div>
        ) : (
          <div className="text-center text-sm mt-4">
            Already have an account?{' '}
            <a
              onClick={() => {
                setAction('Login');
                setWelcome('Welcome Back!');
              }}
              className="cursor-pointer"
            >
              <b className="text-indigo-500 hover:underline">Sign In</b>
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignIn;
