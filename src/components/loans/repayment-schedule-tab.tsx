import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { DownloadIcon, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

const RepaymentScheduleTab: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Repayment Schedule</h3>
          <Button variant="outline" className="flex items-center gap-2">
            <DownloadIcon className="h-4 w-4" />
            Export to PDF
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Paid Date</TableHead>
                <TableHead>Balance Of Loan</TableHead>
                <TableHead>Principal Due</TableHead>
                <TableHead>Interest</TableHead>
                <TableHead>Fees</TableHead>
                <TableHead>Penalties</TableHead>
                <TableHead>Due</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>In advance</TableHead>
                <TableHead>Late</TableHead>
                <TableHead>Outstanding</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-gray-50">
                <TableCell colSpan={3}>28 March 2025</TableCell>
                <TableCell></TableCell>
                <TableCell>5.00</TableCell>
                <TableCell colSpan={9}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>153</TableCell>
                <TableCell>28 August 2025</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>5.00</TableCell>
                <TableCell>1.25</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>6.25</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>6.25</TableCell>
              </TableRow>
              <TableRow className="font-medium">
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell>K5.00</TableCell>
                <TableCell>K1.25</TableCell>
                <TableCell>K0.00</TableCell>
                <TableCell>K0.00</TableCell>
                <TableCell>K6.25</TableCell>
                <TableCell>K0.00</TableCell>
                <TableCell>K0.00</TableCell>
                <TableCell>K0.00</TableCell>
                <TableCell>K6.25</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink><ChevronsLeft className="h-4 w-4" /></PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink><ChevronLeft className="h-4 w-4" /></PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink><ChevronRight className="h-4 w-4" /></PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink><ChevronsRight className="h-4 w-4" /></PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
};

export default RepaymentScheduleTab;