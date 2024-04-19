import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { logIn } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = (userData) => {
    dispatch(logIn(userData));
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;