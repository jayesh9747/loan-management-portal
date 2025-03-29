import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const GeneralTab: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Loan Summary</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Principal</TableCell>
              <TableCell className="text-right">K5.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Interest</TableCell>
              <TableCell className="text-right">K1.25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fees</TableCell>
              <TableCell className="text-right">K0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Penalties</TableCell>
              <TableCell className="text-right">K0.00</TableCell>
            </TableRow>
            <TableRow className="font-medium">
              <TableCell>Total</TableCell>
              <TableCell className="text-right">K6.25</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Loan Terms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Interest Rate:</span>
                <span>25% per annum</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Loan Term:</span>
                <span>153 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Payment Frequency:</span>
                <span>One-time payment</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Disbursement Date:</span>
                <span>28 March 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Maturity Date:</span>
                <span>28 August 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Loan Officer:</span>
                <span>Region-8</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralTab;