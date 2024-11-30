import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { allTransactions } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import Badge from "./Badge";

const Transactions2 = () => {
  return (
      <div>
        <h6 className="text-[#82828C] mb-2">{allTransactions.length} items</h6>
        <div className="max-h-[60vh] border border-border rounded-[10px] overflow-y-auto">
        <Table className="font-lufgaRegular">
          <TableHeader className="bg-muted font-lufgaMedium">
            <TableRow>
              <TableHead className="text-primary">DATE</TableHead>
              <TableHead className="text-primary">AMOUNT</TableHead>
              <TableHead className="text-primary">PAYMENT NAME</TableHead>
              <TableHead className="text-primary">METHOP</TableHead>
              <TableHead className="text-primary">CATEGORY</TableHead>
              <TableHead className="text-primary">STATUS</TableHead>
              <TableHead className="text-primary"><Ellipsis /></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allTransactions.map((transaction) => (
              <TableRow key={transaction.paymentId} >
                <TableCell><div className="w-[100px]">{transaction.paymentDate}</div></TableCell>
                <TableCell className="text-success">{transaction.paymentAmount}</TableCell>
                <TableCell><div className="flex w-[120px]"><img className="w-5 h-5 mr-5" src={transaction.paymentImage} alt={transaction.paymentName} /> {transaction.paymentName}</div></TableCell>
                <TableCell><div className="w-[150px]">{transaction.paymentMethod}</div></TableCell>
                <TableCell>
                  {transaction.paymentCategory}
                </TableCell>
                <TableCell>
                  <Badge text={transaction.paymentStatus} className="bg-success-foreground text-success rounded-[10px]" />
                </TableCell>
                <TableCell><Ellipsis /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </div>
  );
};

export default Transactions2;
