import { useState } from 'react';
import { loginUser } from '../services/authService';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Importing the CSS file for styling

const LoginPage = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await loginUser(user);
      localStorage.setItem('token', data.token.accessToken); 
      navigate('/home');
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handelRegister = () => {
    navigate('/register')
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Your Password"
        />
        <button
          type="submit"
          disabled={loading}
          className="login-button"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p >New User? <span onClick={handelRegister} style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Register first</span></p>
      </form>
    </div>
  );
};

export default LoginPage;
