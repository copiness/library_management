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

const OverdueBooklist = () => {
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
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Overdue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Fine</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>0</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OverdueBooklist;
