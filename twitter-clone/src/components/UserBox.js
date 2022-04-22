import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGyfMTRI4kwhg/profile-displayphoto-shrink_100_100/0/1625836952140?e=1653523200&v=beta&t=bMUaeKmRE8vfsR-1-bfYbVW95bChiidmVaB1V99yeVc"
          alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Musab Bayram</span>
        <span className="text-sm text-gray-dark">@MBahadirBayram</span>
      </div>

      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;
