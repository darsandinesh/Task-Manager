import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="content">
        <h1>Welcome to the Task Manager</h1>
        <p>Manage your tasks efficiently and stay organized!</p>
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
