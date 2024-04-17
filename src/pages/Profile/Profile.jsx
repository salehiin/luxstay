// import React, { useState } from "react";
import userDefaultPic from '../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

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
      <div className="m-5">
        <h1 className="font-bold text-2xl">Your Personal Profile</h1>
        <div className="overflow-x-auto border border-green-500 p-0 md:p-8 m-0 md:m-2 lg:m-10 mt-6 rounded-2xl flex flex-col md:flex-row items-center">
            <div className="mr-0 md:mr-8">
                <img className="w-48 h-48 rounded-[50%]" src={user?.photoURL || userDefaultPic} alt="" />
            </div>
          <table className="table font-bold">
            {/* head */}
            <thead>
              
            </thead>
            <tbody className=" ">
            <tr className="border-none">
                {/* <th>1</th> */}
                <td>User ID</td>
                <td>{user?.uid || 'Not Found'}</td>
                <td><button className="btn btn-sm btn-ghost"></button></td>
                
              </tr>
              {/* row 1 */}
              <tr className="border-none">
                {/* <th>2</th> */}
                <td>Name</td>
                <td>{user?.displayName || 'User Unknown'}</td>
                
              </tr>
              {/* row 2 */}
              <tr className="border-none">
                {/* <th>3</th> */}
                <td>Email</td>
                <td>{user?.email || 'User Unknown'}</td>
                
              </tr>
              {/* row 3 */}
              <tr className="border-none">
                {/* <th>4</th> */}
                <td>Contact No</td>
                <td>+ 00 01700000000</td>
                
              </tr>

              <tr className="border-none">
                {/* <th>5</th> */}
                <td>Address</td>
                <td>New Town, Old City</td>
                
              </tr>

              <tr className="border-none">
                {/* <th>6</th> */}
                <td>Additional Info</td>
                <td>{user?.metadata.UserMetadata || 'Not Found'}</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
