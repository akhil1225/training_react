import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div>Profile
        
            <hr/>
                <Link to="/profile/myaccount">My Account</Link> 
            <hr/>
                <Link to="/profile/mysettings">My Settings</Link>

        </div>
      )
}

export default Profile