import React from 'react';

interface UserProfileProps {
  name: string;
  role: string;
  joinDate: string;
  imageUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role, joinDate, imageUrl }) => {
  return (
    <div className="flex flex-col items-left justify-center p-4 bg-white rounded-lg">
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full object-cover" />
      <div className="text-lg font-bold mt-2">{name}
      <span className="bg-blue-100 text-blue-800 ml-5 px-3 py-1 rounded-full text-sm mt-1">{role}</span>
      </div>
      
      <div className="text-gray-600 text-sm mt-1">Join Date: {joinDate}</div>
    </div>
  );
};

export default UserProfile;