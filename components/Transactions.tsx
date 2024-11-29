import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transactions } from "@/lib/utils";
import Dropdown from "./Dropdown";

const Transactions = () => {
  return (
    <div className="border border-border rounded-[10px] p-5">
      <div className="flex my-3 items-center justify-between max-sm:flex-col">
        <h5 className="font-lufgaMedium max-sm:text-center">Recent transactions</h5>
        <div className="flex gap-2">
          <Dropdown
            title="All accounts"
            text1="Admin"
            text2="Manager"
            text3="User"
          />
          <Dropdown
            title="See all"
            text1="This month"
            text2="Last Month"
          />
        </div>
      </div>
      <div className="p-5">
        <Table className="font-lufgaRegular">
          <TableHeader className="bg-muted font-lufgaMedium">
            <TableRow>
              <TableHead className="text-primary">DATE</TableHead>
              <TableHead className="text-primary">AMOUNT</TableHead>
              <TableHead className="text-primary">PAYMENT NAME</TableHead>
              <TableHead className="text-primary">METHOP</TableHead>
              <TableHead className="text-primary">CATEGORY</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.paymentId}>
                <TableCell><div className="w-[100px]">{transaction.paymentDate}</div></TableCell>
                <TableCell>{transaction.paymentAmount}</TableCell>
                <TableCell><div className="flex w-[120px]"><img className="w-5 h-5 mr-5" src={transaction.paymentImage} alt={transaction.paymentName} /> {transaction.paymentName}</div></TableCell>
                <TableCell><div className="w-[150px]">{transaction.paymentMethod}</div></TableCell>
                <TableCell>
                  {transaction.paymentCategory}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transactions;
