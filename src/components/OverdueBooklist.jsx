import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OverdueBooklist = ({users}) => {

  const today = new Date()
  return (
    <div className="bg-white rounded-md p-2 ">
        {/* <span className="font-bold">Ovedue List</span> */}
      <Table>
        <TableHeader className="font-bold p-4">Overdue List</TableHeader>
        <TableHeader>
          <TableRow>
            <TableHead>UserId</TableHead>
            <TableHead>UserName</TableHead>
            <TableHead>Book</TableHead>
            <TableHead>Issued Date</TableHead>
            <TableHead>Return Date</TableHead>
            <TableHead>Overdue</TableHead>
            <TableHead>Fine</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
         {users.map((item)=>(
          <TableRow>
            <TableCell>{item?.userid}</TableCell>
            <TableCell>{item?.username}</TableCell>
            <TableCell>{item?.lastbook.bookname}</TableCell>
            <TableCell>{new Date(item?.lastbook.startingdate).toLocaleDateString('en-IN')}</TableCell>
            <TableCell>{new Date(item?.lastbook.duedate).toLocaleDateString('en-IN')}</TableCell>
            <TableCell>{Math.floor((today.getTime()-new Date(item?.lastbook.duedate).getTime())/(1000*3600*24))}</TableCell>
            <TableCell>₹{10*Math.floor((today.getTime()-new Date(item?.lastbook.duedate).getTime())/(1000*3600*24))}</TableCell>
          </TableRow>
         ))
         
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default OverdueBooklist;
