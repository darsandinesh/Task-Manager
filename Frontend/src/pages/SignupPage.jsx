import { useState } from 'react';
import { signupUser } from '../services/authService';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!user.name) errors.name = 'Name is required';
    if (!user.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = 'Email is invalid';
    }
    if (!user.password) {
      errors.password = 'Password is required';
    } else if (user.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await signupUser(user);
      navigate('/'); 
    } catch (error) {
      console.error('Signup failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handelLogin = () =>{
    navigate('/')
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">Sign Up</h2>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <InputField
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <InputField
          label="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Your Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button
          type="submit"
          disabled={loading}
          className="signup-button"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p>Already have an account? <span onClick={handelLogin} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Login</span></p>
      </form>
    </div>
  );
};

export default SignupPage;