import { BookDashedIcon, BookOpen, LayoutDashboard, Settings, User } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
    const handlelink  = (link) => {
      navigate(link)
    }
  return (
    <div className=" p-4 gap-4 flex  flex-col  sticky top-0 gap-y-4 ">
      {/* <div className="flex items-center gap-4 bg-green-300 justify-start p-4 rounded-md">
        <LayoutDashboard />
        <span className="text-2xl font-bold">Dashboard</span>
      </div>

      <div className="flex items-center gap-4 bg-green-300 justify-start p-4 rounded-md">
        <BookOpen/>
        <span className="text-2xl font-bold">Issue Books</span>
      </div>

      <div className="flex items-center gap-4 bg-green-300 justify-start p-4 rounded-md">
        <User/>
        <span className="text-2xl font-bold">Member</span>
      </div>

      <div className="flex items-center gap-4 bg-green-300 justify-start p-4 rounded-md">
         <Settings/>
        <span className="text-2xl font-bold">Setting</span>
      </div> */}
      <Button variant='' className="flex items-center gap-4  p-6 rounded-md justify-start" onClick={()=>handlelink('/')}>
       <LayoutDashboard  className="text-2xl"/>
        <span className="text-2xl font-bold">Dashboard</span>
      </Button>

      <Button variant='' className="flex items-center gap-4  p-6 rounded-md justify-start" onClick={()=>handlelink('/books')}>
      <BookOpen  className="text-2xl"/>
        <span className="text-2xl font-bold">Book List</span>
      </Button>

      <Button variant='' className="flex items-center gap-4  p-6 rounded-md justify-start" onClick={()=>handlelink('/issuebook')}>
      <BookOpen  className="text-2xl"/>
        <span className="text-2xl font-bold">Issue Book</span>
      </Button>

      <Button variant='' className="flex items-center gap-4  p-6 rounded-md justify-start" onClick={()=>handlelink('/member')}>
      <User  className="text-2xl"/>
        <span className="text-2xl font-bold">Member</span>
      </Button>

      <Button variant='' className="flex items-center gap-4  p-6 rounded-md justify-start">
      <Settings className="text-2xl"/>
        <span className="text-2xl font-bold">Setting</span>
      </Button>
    </div>
  );
};

export default Sidebar;