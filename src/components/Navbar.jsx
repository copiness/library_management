import { Menu, Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="flex item-center justify-between p-4">
      {/*Logo  */}

      <div className="flex items-center gap-6">
        <img src="/logo.svg" alt="" />
        {/* <div className="lg:hidden "><Button variant='ghost'><Menu/></Button></div> */}
        <Sheet>
          <SheetTrigger>
            <div className="lg:hidden ">
              <Button variant="ghost">
                <Menu />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side={'bottom'}><Sidebar/></SheetContent>
        </Sheet>
      </div>
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 border-2 p-4 rounded-lg ">
        <Search />
        <input type="text" placeholder="search" className="outline-none" />
      </div>
      {/* User data */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl ">Admin</span>
        <img
          src="/pic.jpg"
          alt=""
          className="h-10 w-10 rounded-full object-cover "
        />
      </div>

      
    </div>
  );
};

export default Navbar;
