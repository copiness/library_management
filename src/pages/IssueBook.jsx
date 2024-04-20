import { Menu, Search } from "lucide-react";
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'sonner';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";

const IssueBook = () => {
  const URL = "https://library-management-backend-zf8y.onrender.com";
  const { userId } = useParams();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null); // Initial value for end date
  const [issuebook,setissuebook] = useState();
  const [bookid,setbookid] = useState();
  const [userid,setuserid] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    setuserid(userId)
  },[])

  const handleIssueBook = () => {
    // Perform action to issue book with selected dates
    console.log("Book issued from:", startDate, "to", endDate);
  };

  
    const issuebookbyid = async () => {
      try {
        const res = await axios.put(`${URL}/api/book/issuebook/${bookid}/${userid}`,
        {
          duedate:endDate,
         startingdate: startDate,
        })

        toast.success("Book is issued")
        navigate('/member')

      } catch (error) {
        toast.error(error.response.data.error)
        console.log(error.response.data);
      }
    }

  return (
    <div className='flex items-center justify-center p-6 h-screen w-full flex-col'>
      <div className='h-1/2 w-1/2 bg-slate-100 rounded-[30px] p-6 flex flex-col gap-4 item-center justify-center '>
      
        <span className='font-bold text-2xl'>Issue Book</span>
        <div className='flex flex-col gap-4 '>
          <span>User ID: <input className='outline-none w-full h-10' type="text" onChange={(e)=>setuserid(e.target.value)} value={userid}/></span>
          <span>Book ID: <input className='outline-none w-full h-10' type="text" onChange={(e)=>setbookid(e.target.value)} value={bookid}/></span>
          <div>
            <span>Select Start Date:</span>
            <DatePicker className='outline-none w-full h-10' selected={startDate} onChange={date => setStartDate(date)} />
          </div>
          <div>
            <span>Select End Date:</span>
            <DatePicker className='outline-none w-full h-10' selected={endDate} onChange={date => setEndDate(date)} />
          </div>
        </div>
        <Button onClick={issuebookbyid}>Issue Book</Button>
        <Button variant='destructive' onClick={()=>navigate('/')}>Cancel</Button>
      </div>
    </div>
  );
};

export default IssueBook;
