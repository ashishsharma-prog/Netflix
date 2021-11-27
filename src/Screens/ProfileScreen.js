import React from 'react'
import Navbar from '../components/Navbar'
import { selectuser } from '../features/userSlice';
import {useSelector} from "react-redux";
import { auth } from '../firebase';
import "./ProfileScreen.css";

function ProfileScreen() {
    const user=useSelector(selectuser);
    return (
        <div className="profilescreen">
            
            <Navbar/>
            <div className="profilescreen_body">
                <h1>Edit Profile</h1>
                <div className="profilescreen_info">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="ProfileScreen_avatar"
                    />
                    <div className="profilescreen_details">
                        <h2>{user.email}</h2>
                        <div className="profilescreen_plans">
                            <h3>Plans(Current Plan:Premium)</h3>
                            
                            <button
                            onClick={()=>auth.signOut()}
                             className="profilescreen_signout">Sign Out </button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
