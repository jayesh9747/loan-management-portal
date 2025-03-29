import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { DownloadIcon, FileTextIcon, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

const DocumentsTab: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Loan Documents</h3>
          <Button variant="outline" className="flex items-center gap-2">
            <DownloadIcon className="h-4 w-4" />
            Download All
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Document Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date Uploaded</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Loan Agreement</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>28 March 2025</TableCell>
              <TableCell>Signed loan agreement document</TableCell>
              <TableCell>245 KB</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" title="Download">
                    <DownloadIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="View">
                    <FileTextIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>ID Verification</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>28 March 2025</TableCell>
              <TableCell>Identity verification document</TableCell>
              <TableCell>180 KB</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" title="Download">
                    <DownloadIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="View">
                    <FileTextIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

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

export default DocumentsTab;