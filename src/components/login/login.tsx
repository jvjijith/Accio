import "./login.css";
import {FaEnvelope,FaLock,FaAsymmetrik} from "react-icons/fa"

const Login = () => {
    return (
        <div className="wrapper">
        <div className="login is-active">
          <div className="profile"><FaAsymmetrik/></div>
          <div className="form-element">
            <span><FaEnvelope></FaEnvelope></span><input type="email" placeholder="Your Email Address"/>
          </div>
          <div className="form-element">
            <span><FaLock></FaLock></span><input type="password" placeholder=" Password"/>
          </div>
          <button className="btn-login">login</button>
        </div>
        
      
        
        <div className="login-view-toggle">
          <div className="sign-up-toggle is-active"><a href="#">Forgot Password</a></div>
        </div>
      </div>
      
    );
};

export default Login;