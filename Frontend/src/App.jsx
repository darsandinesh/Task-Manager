import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
