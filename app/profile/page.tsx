import { ArrowLeft, Bell, LockKeyhole, Paintbrush, Settings, SquarePen, Trash2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Profilepage() {
  return (
    <main className="bg-[#E4E0E1] min-h-screen flex flex-col">
      <span className="flex justify-between p-3">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <Link href="/">
          <SquarePen />
        </Link>
      </span>
      <div className="flex flex-col items-center pt-16  gap-4">
        {/* Profile Picture */}
        <div className="w-32 h-32 p-2 rounded-full overflow-hidden  border-4 border-[#493628]">
          <Image
            src="/profile-picture.webp"
            alt="Profile Picture"
            width={128}
            height={128}
            className="object-cover rounded-full w-full h-full"
          />
        </div>
        {/* Text */}
        <div className=" bg-[#af8f6f94] w-[75%] p-2 rounded-lg mt-5 flex flex-col  ">
          <h1 className="text-[#493628] font-extrabold text-2xl pb-2 text-center ">
            John Doe
          </h1>
          <p className="text-sm text-gray-500 font-bold text-center">johndoe16@gmail.com</p>
          <div className="px-4 py-6">
      <h1 className="text-[#493628] font-bold text-lg mb-6">Settings:</h1>

      {/* Appearance */}
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-gray-300">
          <p className="text-[#493628] font-medium">Appearance</p>
          <Paintbrush size={18} className="text-[#493628]" />
        </div>

        {/* Notifications */}
        <div className="flex justify-between items-center pb-2 border-b border-gray-300">
          <p className="text-[#493628] font-medium">Notifications</p>
          <Bell size={18} className="text-[#493628]" />
        </div>

        {/* Account */}
        <div className="flex justify-between items-center pb-2 border-b border-gray-300">
          <p className="text-[#493628] font-medium">Account</p>
          <User size={18} className="text-[#493628]" />
        </div>

        {/* Privacy */}
        <div className="flex justify-between items-center pb-2 border-b border-gray-300">
          <p className="text-[#493628] font-medium">Privacy</p>
          <LockKeyhole size={18} className="text-[#493628]"/>
          
        </div>

        {/* Clear Completed Tasks */}
        <div className="flex justify-between items-center pb-2 border-b border-gray-300">
          <p className="text-[#493628] font-medium">Clear Completed Tasks</p>
          <Trash2 size={18} className="text-[#493628]" />
        </div>

        {/* App Settings */}
        <div className="flex justify-between items-center pb-2">
          <p className="text-[#493628] font-medium">App Settings</p>
          <Settings size={18} className="text-[#493628]" />
        </div>
      </div>
    </div>
        </div>
      </div>
    </main>
  );
}

export default Profilepage;
