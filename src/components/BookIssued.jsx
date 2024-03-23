import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

const BookIssued = () => {
  return (
    <div className='bg-white rounded-md p-2 mt-2 h-32 w-full'>
      <Table>
        <TableHeader className="font-bold p-4">BookIssued</TableHeader>
        <TableHeader>
          <TableRow>
            <TableHead>UserId</TableHead>
            <TableHead>Book</TableHead>
            <TableHead>Issue Date</TableHead>
            <TableHead>Return Date</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default BookIssued
