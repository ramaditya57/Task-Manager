import React, { useContext, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  // Handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if(!password) {
      setError('Please enter the password');
      return;
    }

    setError("");

    // Login api call
    try{
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password
      });

      const { token, role } = response.data;

      if(token) {
        localStorage.setItem('token', token);
        updateUser(response.data); // Assuming updateUser is a function to update user context
        
        // Redirect to dashboard based on role
        if(role === 'admin') {
          navigate('/admin/dashboard');
        } else if(role === 'member') {
          navigate('/user/dashboard');
        }
      }
    } catch(err) {
      if(err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return <AuthLayout>
  <div className="lg:w-[70%] h-3/4 md:h-[98%] flex flex-col justify-center">
    <h3 className="text-2xl font-semibold text-gray-100">Welcome Back</h3>
    <p className="text-sm text-gray-400 mt-1 mb-6">Please enter your details to log in</p>

    <form onSubmit={handleLogin} className="space-y-4">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email Address"
        placeholder="john@example.com"
        type="text"
      />

      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Min 8 characters"
        type="password"
      />

      {error && (
        <p className="text-red-400 text-sm pt-1">{error}</p>
      )}

      <button
        type="submit"
        className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold rounded-md shadow-sm"
      >
        LOGIN
      </button>

      <p className="text-sm text-gray-400 mt-3">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-blue-400 hover:text-blue-300 underline font-medium"
        >
          Sign Up
        </Link>
      </p>
    </form>
  </div>
</AuthLayout>

}

export default Login
