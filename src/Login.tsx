import "./Login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <span className="login--anchor">
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </span>
    </div>
  );
};

export default Login;
