import { Menu, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";

const BookCard = () => {
  const { id } = useParams();
  console.log(id);

  const URL = "https://library-management-backend-zf8y.onrender.com";
  const [bookdata, setbookdata] = useState(null);
  const [bookcount, setbookcount] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getbookbyid = async () => {
      try {
        const res = await axios.get(`${URL}/api/book/getbookbyid/${id}`);
        setbookdata(res.data);
        setbookcount(res.data.total);
      } catch (error) {}
    };
    getbookbyid();
  }, []);

  useEffect(() => {
    const updatebook = async () => {
      try {
        const res = await axios.put(`${URL}/api/book/updatebook/${id}`, {
          total: bookcount,
          available: bookcount - bookdata?.total + bookdata.available,
        });
        toast.success("Book count Updated");
      } catch (error) {}
    };
    updatebook();
  }, [bookcount]);

  const handlebookcount = () => {
    setbookcount(bookcount + 1);
  };

  const deletebook = async () => {
    try {
      const res = await axios.post(`${URL}/api/book/deletebookbyid/${id}`);
      navigate("/books");
    } catch (error) {
      toast.success(error.response.data.error);
      console.log(error.response.data);
    }
  };

  return (
    <div className="h-full w-full  p-4 flex flex-col items-start">
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

      <div className="flex flex-col lg:flex-row  items-center justify-between p-4 w-full h-full gap-2">
        <div className="w-full h-4/5 lg:w-1/2 p-4 ">
          <img
            className="w-full  h-[400px] rounded-md object-contain"
            src={bookdata?.bookimage}
            alt=""
          />
        </div>

        <div className="w-full h-4/5 lg:w-1/2 flex flex-col gap-6 ">
          <span className="text-3xl font-bold">{bookdata?.bookname}</span>
          <span className="">Author:{bookdata?.authorname}</span>
          <div className="">
            <h1 className="font-bold">Description:</h1>
            <span>{bookdata?.description}</span>
          </div>
          <span>Available :{bookdata?.available}</span>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-4 item-center p-4 border-1 rounded-md justify-between">
              <span className="flex items-center justify-center font-bold">
                Increase Book Availability
              </span>
              <span>{bookcount}</span>
              <Button onClick={handlebookcount}>+</Button>
            </div>
            <Button variant="destructive" onClick={deletebook}>
              Delete this book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
