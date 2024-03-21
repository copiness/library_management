import { Button } from "@/components/ui/button";
import React from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";

import {
  BookOpen,
  Hourglass,
  LayoutDashboard,
  Settings,
  User,
  Users,
} from "lucide-react";
import {bookList,userList} from "@/dummyData"
import Tablecontainer from "@/components/Tablecontainer";
import BookTableContainer from "@/components/BookTablContainer";
import TopBooks from "@/components/TopBooks";



const Dashboard = () => {
  return (
    <div className="p-4  h-screen w-full">
      <Navbar />
      <div className="flex w-full gap-4">
        <div className="hidden lg:block p-2 w-1/5 h-[900px] ">
          <Sidebar />
        </div>
        <div className="p-2 lg:w-4/5 w-full h-full  bg-slate-100 lg:rounded-tl-[50px]  p-4">
          <div className="m-4 flex gap-6">
            <span className="text-3xl font-bold">Hello</span>
            <span className="text-3xl text-orange-600 font-bold">Admin!</span>
          </div>
          {/* CARD-CONTAINER */}
          <div className="flex p-4  items-center w-full justify-between gap-2 lg:flex-row flex-col ">
            <div className="lg:w-1/4 w-full ">
              <Card
                count={1234}
                title={"Visitors"}
                logo={<LayoutDashboard />}
              />
            </div>
            <div className="lg:w-1/4 w-full ">
              <Card count={1234} title={"Browse Books"} logo={<BookOpen />} />
            </div>{" "}
            <div className="lg:w-1/4 w-full ">
              <Card count={1234} title={"Overdue"} logo={<Hourglass />} />
            </div>{" "}
            <div className="lg:w-1/4 w-full ">
              <Card count={1234} title={"New Members"} logo={<Users />} />
            </div>
          </div>
          {/* TABLE-CONTAINER */}
          <div className="p-4 w-full flex lg:flex-row flex-col gap-2 items-center justify-between">
            <div className="lg:w-1/2 w-full"><Tablecontainer /></div>
            
            <div className="lg:w-1/2 w-full"><BookTableContainer/></div>
        
          </div>

          {/* TOP-Books */}
          <div className="p-4">
            <span className="font-bold ">Top Books</span>
            <TopBooks/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
