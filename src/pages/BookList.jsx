
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Bookmark, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";
import { Item } from "@radix-ui/react-menubar";
import { toast } from "sonner"
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


const BookList = () => {
  const URL = "https://library-management-backend-zf8y.onrender.com";
  const [isOpen, setIsOpen] = useState(false);
  const [books,setbooks] = useState([]);
  const [bookid,setbookid] =useState("");
  const [bookname,setbookname] = useState("");
  const [authorname,setauthorname] =useState("");
  const [available,setavailable] = useState("");
  const [total,settotal] = useState("");
  const [bookimage,setbookimage] = useState("");
  const [description,setdescription] = useState("");

  const addbook = async () => {
    try {
      setavailable(total)
      const res = await axios.post(`${URL}/api/book/createbook`, {
        bookid,
        bookname,
        authorname,
        available,
        total,
        bookimage,
        description
      });
      setIsOpen(false)
      setbookid("")
      setbookname("")
      setauthorname("")
      settotal("")
      setbookimage("")
      setbooks(res.data)
      setdescription("")
      
      toast.success("Book has been Added.")

    } catch (error) {
      console.error("Error adding user:", error.response.data);
    }
  };

  //Initially fetching book when someone come to that webapge 
  useEffect (()=> {
    const booklist = async () => {
      const res = await axios.get(`${URL}/api/book/getbook`)
      setbooks(res.data)
    }
    booklist();
  },[])
  

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate() 
    const handleLink = (bookid) => {
      navigate(`/book/${bookid}`)
    }

  

  return (
    <div className="bg-slate-100 h-screen overflow-hidden p-4 relative">
      <div className="flex justify-between items-center  ">
        <div className="flex items-center gap-3">
        <span className="font-bold text-3xl">Book List</span>
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
        <div className="hidden md:flex  p-4 items-center border-2 gap-2 bg-white rounded-md ">
          <SearchIcon />
          <input
            className="outline-none"
            type="text"
            placeholder="search for books"
          />
        </div>
        <div>
          <Button onClick={handleOpen}>
            Add Book
            <Bookmark />
          </Button>
        </div>
      </div>

      {/* book */}
      <div className="flex flex-wrap p-2 bg-white h-screen overflow-y-auto">

          {books.map((item)=> (
            <div key={item._id} className="flex flex-col items-center justify-center p-2 w-1/2 md:w-1/4 lg:w-1/6" onClick={()=>handleLink(item.bookid)}>
            <img className="w-40  h-50 rounded-md" src={item.bookimage?item.bookimage:'/book.jpeg'} alt="" />
            <span className="font-bold text-2xl mt-2 ">{item.bookname}</span>
            <span className="font-bold text-2xl mt-2 ">{item.bookid}</span>
          </div>
          ))
          
          }
          
      </div>

      <div className="bg-slate-100">
        {isOpen && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3 bg-slate-100  p-6 rounded-2xl flex flex-col items-center justify-center gap-4 ">
            <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
              <span className="font-bold">Book Name</span>
              <input
                className="outline-none"
                type="text"
                placeholder="type book name here..."
                onChange={e=>setbookname(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
              <span className="font-bold">Book ID</span>
              <input
                className="outline-none"
                type="text"
                placeholder="type memeber name here..."
                onChange={e=>setbookid(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
              <span className="font-bold">Author Name</span>
              <input
                className="outline-none"
                type="text"
                placeholder="type Author name here..."
                onChange={e=>setauthorname(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
              <span className="font-bold">Book Image Link</span>
              <input
                className="outline-none"
                type="text"
                placeholder="Book image link"
                onChange={e=>setbookimage(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
              <span className="font-bold">Total Book</span>
              <input
                className="outline-none"
                type="number"
                placeholder="Total book"
                onChange={e=>settotal(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 p-2 border-1 rounded-md">
              <span className="font-bold">Description</span>
              <textarea
                className="outline-none w-full p-2"
                type="textarea"
                placeholder="Book description..."
                onChange={e=>setdescription(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="destructive" onClick={handleOpen}>
                Cancel
              </Button>
              <Button onClick={()=>addbook()}>Add Book</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
