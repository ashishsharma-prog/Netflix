import React,{useEffect} from 'react';
import HomeScreen from './components/Homescreen';
import { auth } from './firebase';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
//import { onAuthStateChanged } from '@firebase/auth';
import {useDispatch,useSelector} from "react-redux";
import {login,logout, selectuser} from "./features/userSlice";
import ProfileScreen from './Screens/ProfileScreen';




function App() {
  const user=useSelector(selectuser);
  const dispatch = useDispatch();
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(
          login({
            uid:user.uid,
            email:user.email,
          })
        );
        
      }else{
        dispatch(logout());
      }

    });
    return unsubscribe;
  },[dispatch])


  return (
    <div className="App">
    
    <Router>
      {!user?(
        <LoginScreen/>
      ) :(
        <Routes>
          <Route path="/profile" element={<ProfileScreen/>}/>
        <Route exact path="/" element={<HomeScreen/>}/>
       </Routes>
      )}
    
    </Router>
    </div>
  );
}

export default App;
