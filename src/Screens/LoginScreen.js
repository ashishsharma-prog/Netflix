import React,{useState} from 'react';
import "./LoginScreen.css";
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [SignIn,setSignIn]=useState(false);
    return (
        <div className="loginScreen">
            <div className="loginSWcreen_background">
            <img className="loginScreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="loginscreen-logo"/>
            <button onClick={()=>setSignIn(true)} className="loginScreen_button">Sign In</button>
          <div className="loginScreen_gradient"/>
            </div>
          <div className="loginScreen_body">
              {SignIn?(
                  <SignupScreen/>
              ):(
                <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginScreen_input">
                    <form>
                        <input type="email" placeholder="Email Address"/>
                        <button
                        onClick={()=>setSignIn(true)}
                        className="loginScreen_getstarted">GET STARTED  </button>
                    </form>
                </div>
  
                </> 
              )}
             
          </div>


            
        </div>
        
    )
}

export default LoginScreen;