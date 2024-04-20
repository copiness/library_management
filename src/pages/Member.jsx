import { useEffect, useState } from "react";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis, SearchIcon } from "lucide-react";
import { userList } from "@/dummyData";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner"
import { useNavigate } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";



const Member = () => {
  const URL = "https://library-management-backend-zf8y.onrender.com";
  const [isOpen, setIsOpen] = useState(false);
  const [id, setid] = useState(null);
  const [name, setname] = useState(null);
  const [number, setnumber] = useState(null);
  const [iserror, setiserror] = useState(null);
  const [users,setusers]= useState([])

  const navigate = useNavigate() 

  // Add user using Api
  const adduser = async () => {
    try {
      const res = await axios.post(`${URL}/api/user/createuser`, {
        userid: id,
        username: name,
        mobilenumber: number,
      });
      setiserror(null);
      setusers(res.data.userlist);
      setIsOpen(false)
      setid(null)
      setname(null)
      setnumber(null)
      toast.success("User has been created.")

    } catch (error) {
      console.error("Error adding user:", error.response.data);
      setiserror(error.response.data);
    }
  };

  // Function to delete user 
  const deleteuser = async (userid) => {
    try {
      const res = await axios.delete(`${URL}/api/user/deleteusers`, {
        data: { userid: userid }

      })
        const updatedUserList = res.data.updateduserlist;
        setusers(updatedUserList)
        toast.success(res.data.message)

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  // FETCH USERS
  
  useEffect(() => {
    const getuser = async () => {
      try {
        const res = await axios.get(`${URL}/api/user/getusers`)
        setusers(res.data)
      } catch (error) {
        
      }
    }
    getuser()
    
  },[]) 

  // 

  const unIssuebook = async (userid) => {
    try {
      const res = await axios.put(`${URL}/api/book/unissuebook/${userid}`)
      setusers(res.data.updatedlist)
      console.log(res.data);
      toast.success("Book unissued succesfully")
    } catch (error) {
      
    }
  }
  


  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  //console.log(isOpen);
  return (
    <div className=" bg-slate-100 p-6 h-screen overflow-hidden relative">
      <div className="flex justify-between items-center mb-4 ">
        
      <div className="flex items-center gap-3">
        <span className="font-bold text-3xl">Member List</span>
        <Sheet>
        <SheetTrigger>
          <div className="">
            <Button variant="ghost">
              <Menu />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <Sidebar />
        </SheetContent>
      </Sheet>
      </div>
        <div className="flex p-4 items-center border-2 gap-2 bg-white rounded-md">
          <SearchIcon />
          <input
            className="outline-none"
            type="text"
            placeholder="search for memeber"
          />
        </div>
        <div>
          <Button onClick={handleOpen}>Add Member</Button>
        </div>
      </div>
      <div className="h-full w-full bg-white rounded-lg overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/6">User Id</TableHead>
              <TableHead className="w-2/6">name</TableHead>
              <TableHead className="w-2/6">Book</TableHead>
              <TableHead className="w-1/6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow>
                <TableCell className="w-1/6">{item.userid}</TableCell>
                <TableCell className="w-2/6">{item.username}</TableCell>
                <TableCell className="w-2/6">{item.lastbook.bookname?item.lastbook.bookname:'No book found'}</TableCell>
                <TableCell className="w-1/6">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Ellipsis />
                    </HoverCardTrigger>
                    <HoverCardContent className="flex flex-col items-center gap-4">
                      {item.lastbook.bookname?(
                        <Button variant="destructive" onClick={() => {unIssuebook(item.userid)}}>Unissue Book</Button>
                      ):(
                        <div className="flex flex-col items-center justify-center gap-2">
                          <Button onClick={() => navigate(`/issuebook/${item.userid}`)}>Issue Book</Button>
                        <Button variant="destructive" onClick={() => {deleteuser(item.userid)}}>Delete User</Button>
                        </div>
                      )}
                      

                    </HoverCardContent>
                  </HoverCard>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {isOpen && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-slate-100  p-4 rounded-2xl flex flex-col items-center justify-center gap-4 ">
          <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
            <span className="font-bold">Member Id</span>
            <input
              className="outline-none"
              type="text"
              placeholder="type memeber id here..."
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
            <span className="font-bold">Member Name</span>
            <input
              className="outline-none"
              type="text"
              placeholder="type memeber name here..."
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
            <span className="font-bold">Member phone number</span>
            <input
              className="outline-none"
              type="text"
              placeholder="mobile number"
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="destructive" onClick={handleOpen}>
              Cancel
            </Button>
            <Button onClick={adduser}> Add Member</Button>
          </div>
          {iserror && (
            <div>
              <span className="text-red-600 text-3xl">{iserror.message}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Member;
