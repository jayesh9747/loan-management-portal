import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { MoreVertical, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

const TransactionsTab: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Transactions</h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Checkbox id="hide-reversed" />
              <label htmlFor="hide-reversed" className="text-sm">Hide Reversed</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="hide-accruals" />
              <label htmlFor="hide-accruals" className="text-sm">Hide Accruals</label>
            </div>
            <Button variant="default" className="flex items-center gap-2">
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Id Office</TableHead>
                <TableHead>External Id</TableHead>
                <TableHead>Transaction Date</TableHead>
                <TableHead>Transaction Type</TableHead>
                <TableHead colSpan={5} className="text-center">Breakdown</TableHead>
                <TableHead>Loan Balance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
              <TableRow>
                <TableHead colSpan={5}></TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Principal</TableHead>
                <TableHead>Interest</TableHead>
                <TableHead>Fees</TableHead>
                <TableHead>Penalties</TableHead>
                <TableHead colSpan={2}></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1 Region-8</TableCell>
                <TableCell>ext-1</TableCell>
                <TableCell>28 March 2025</TableCell>
                <TableCell>Disbursement</TableCell>
                <TableCell>5.00</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>5.00</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell>2</TableCell>
                <TableCell>2 Region-8</TableCell>
                <TableCell></TableCell>
                <TableCell>28 March 2025</TableCell>
                <TableCell>Accrual</TableCell>
                <TableCell>1.25</TableCell>
                <TableCell></TableCell>
                <TableCell>1.25</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Items per page:</span>
            <Select defaultValue="100">
              <SelectTrigger className="w-16 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-sm text-gray-500">1 – 2 of 2</div>

          <Pagination>
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
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsTab;