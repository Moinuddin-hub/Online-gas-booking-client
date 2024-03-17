import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const User = () => {
    const { user } = useAuth();
    // const [userData, setUserData] = useState("");
    // useEffect(() => {
    //   User(user.email)
    //     .then((res) => setUserData(res))
    //     .catch((err) => console.log(err));
    // }, [user.email]);
    // console.log(userData);
    console.log(user);
    return (
        <div>
        <div className="flex justify-center items-center h-screen mb-8">
          <div className="bg-white shadow-lg rounded-2xl w-9/12 lg:w-4/6 pt-4">
            <img
              alt="profile"
              src="https://source.unsplash.com/350x150/?northern lights"
              className="w-full h-4/5 mb-4 rounded-t-lg "
              width={200}
              height={200}
            />
            <div className="flex flex-col items-center justify-center p-4 -mt-16">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src={user.photoURL}
                  width={100}
                  height={100}
                  className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-sub_color "
                />
              </a>
  
              {/* <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
                {role && role.toUpperCase()}
              </p> */}
              <p className="mt-2 md:text-xl font-medium text-gray-800 ">
              Name: {user.displayName}
              </p>
              <div className="w-full p-2 mt-4 rounded-lg">
                <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
                  <p className="flex flex-col">
                   User Status
                    <span className="font-bold text-black ">
                      {user.status}
                    </span>
                  </p>
                  <p className="flex flex-col">
                    Email
                    <span className="font-bold text-black ">{user.email}</span>
                  </p>
                  <p className="flex flex-col">
                   User Type:
                    <span className="font-bold text-black ">
                      {user.usertype}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default User;