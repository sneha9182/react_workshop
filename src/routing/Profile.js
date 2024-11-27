import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <p className="mt-4 text-gray-700">This is the profile page for user ID: {id}</p>
    </div>
  );
};

export default Profile;
