// import React, { useState } from "react";
import userDefaultPic from '../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from 'react-helmet-async';

const Profile = () => {

    // const [userProfile, setUserProfile] = useState(null);
    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }

  return (
    <div className="text-center">
      <Helmet>
         <title>Luxstay | User Profile</title>
      </Helmet>
      <div className="m-0 md:m-5">
        <h1 className="font-bold text-2xl">Your Personal Profile</h1>
        <div className="overflow-x-auto p-0 m-0 md:m-2 lg:m-6 mt-6 rounded-2xl flex flex-col md:flex-row items-center justify-evenly">
            <div className="mr-0 md:mr-8 mb-4 md:mb-0">
                <img className="w-48 h-48 rounded-[50%]" src={user?.photoURL || userDefaultPic} alt="" />
            </div>
            <div>
              <div className='flex justify-left md:justify-between gap-2  md:gap-20 mb-5'>
                <p className='font-bold'>User ID</p>
                <p>{user?.uid || 'Not Found'}</p>
              </div>
              <div className='flex justify-left md:justify-between gap-2  md:gap-20 mb-5'>
                <p className='font-bold'>Name</p>
                <p>{user?.displayName || 'User Unknown'}</p>
              </div>
              <div className='flex justify-left md:justify-between gap-2  md:gap-20 mb-5'>
                <p className='font-bold'>Email</p>
                <p>{user?.email || 'User Unknown'}</p>
              </div>
              <div className='flex justify-left md:justify-between gap-2  md:gap-20 mb-5'>
                <p className='font-bold'>Contact No</p>
                <p>+ 00 01700000000</p>
              </div>
              <div className='flex justify-left md:justify-between gap-2  md:gap-20 mb-5'>
                <p className='font-bold'>Address</p>
                <p>New Town, Old City</p>
              </div>
              <div className='flex justify-left md:justify-between gap-2  md:gap-20 mb-5'>
                <p className='font-bold'>Additional Info</p>
                <p>{user?.metadata.UserMetadata || 'Not Found'}</p>
              </div>
            </div>
          {/* <table className="table font-bold">
            
            <thead>
              
            </thead>
            <tbody className=" ">
            <tr className="border-none">
                
                <td>User ID</td>
                <td>{user?.uid || 'Not Found'}</td>
                
              </tr>
             
              <tr className="border-none">
                
                <td>Name</td>
                <td>{user?.displayName || 'User Unknown'}</td>
                
              </tr>
             
              <tr className="border-none">
                
                <td>Email</td>
                <td>{user?.email || 'User Unknown'}</td>
                
              </tr>
              
              <tr className="border-none">
                
                <td>Contact No</td>
                <td>+ 00 01700000000</td>
                
              </tr>

              <tr className="border-none">
                
                <td>Address</td>
                <td>New Town, Old City</td>
                
              </tr>

              <tr className="border-none">
                
                <td>Additional Info</td>
                <td>{user?.metadata.UserMetadata || 'Not Found'}</td>
                
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
