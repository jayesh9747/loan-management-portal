'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlagIcon } from "lucide-react";
import { Button } from '../ui/button';

export interface RepaymentCardProps {
  /** Card index number to display on the left (optional) */
  index?: number;
  /** Loan product name (e.g., "Home loan") */
  loanProductName: string;
  /** Principal amount (e.g., "12,000 UGX") */
  principal: string;
  /** Loan balance amount (e.g., "9,500 UGX") */
  loanBalance: string;
  /** Amount paid (e.g., "2,500 UGX") */
  amountPaid: string;
  /** Loan term (e.g., "12 months") */
  term: string;
  /** Status text (e.g., "Active") */
  status?: string;
  /** Navigation path for making repayment */
  repaymentPath: string;
  /** Navigation path for viewing loan details */
  loanDetailsPath: string;
}

const RepaymentCard: React.FC<RepaymentCardProps> = ({
  index = 1,
  loanProductName,
  principal,
  loanBalance,
  amountPaid,
  term,
  status = "Active",
  repaymentPath,
  loanDetailsPath,
}) => {
  const router = useRouter();

  const handleMakeRepayment = () => {
    router.push(repaymentPath);
  };

  const handleViewLoanDetails = () => {
    router.push(loanDetailsPath);
  };

  return (
    <Card className="w-full p-4">
      <div className="flex items-center gap-4">
        {/* Large Number on Left */}
        <div className="text-4xl font-bold px-5">{index}.</div>

        {/* Middle Flex Column */}
        <div className="flex-grow flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">
              Loan Product Name [{loanProductName}]
            </h2>
          </div>

          {/* Loan details in grid layout */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Principal</span>
              <span className="text-sm font-medium">{principal}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Loan Balance</span>
              <span className="text-sm font-medium">{loanBalance}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Amount Paid</span>
              <span className="text-sm font-medium">{amountPaid}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Term</span>
              <span className="text-sm font-medium">{term}</span>
            </div>
          </div>
        </div>

        {/* Right Side with Status and Buttons */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 flex items-center gap-1">
              <FlagIcon className="h-3 w-3" />
              <span>{status}</span>
            </Badge>
          </div>
          <Button
            onClick={handleMakeRepayment}
            className=" text-white px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors"
          >
            Make Repayment
          </Button>
          <Button
            onClick={handleViewLoanDetails}
            className=" text-white px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors"
          >
            View Loan Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RepaymentCard;
