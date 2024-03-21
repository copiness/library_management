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
import { Ellipsis } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import { bookList } from "@/dummyData";

const BookTableContainer = ({}) => {
  return (
    <div className="w-full bg-white rounded-lg p-4">
      <div className="flex items-center justify-between ">
        <span>Book List</span>
        <Button>Issue Book</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6">Book Id</TableHead>
            <TableHead className="w-2/6">Book name</TableHead>
            <TableHead className="w-2/6">Author</TableHead>
            <TableHead className="w-2/6">Available</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookList.map((item) => (
            <TableRow>
              <TableCell className="w-1/6">{item.bookId}</TableCell>
              <TableCell className="w-2/6">{item.title}</TableCell>
              <TableCell className="w-2/6">{item.author}</TableCell>
              <TableCell className="w-1/6">{item.available}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full flex flex-row-reverse">
        <span className="text-orange-600 font-semibold">see all</span>
      </div>
    </div>
  );
};

export default BookTableContainer;
