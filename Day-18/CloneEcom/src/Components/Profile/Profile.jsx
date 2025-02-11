import React from 'react'


const Profile = ({ name, profilePicture,style }) => {

    return (
      <div className="flex flex-col align-items-center border rounded-full shadow-lg max-w-sm" style={style}>
        <img
          src={profilePicture}
          alt={`${name}'s profile picture`}
          className="w-100 h-100 rounded-full  object-cover "
          style={{borderRadius:style.borderRadius}}
        />
        
      </div>
    );
  };

  export default Profile;