import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreVertical, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, DownloadIcon } from 'lucide-react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from '@/components/ui/pagination';

const CollateralTab: React.FC = () => {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-semibold">Collateral Details</h3>
                    <Button variant="outline" className="flex items-center gap-2">
                        <DownloadIcon className="h-4 w-4" />
                        Export
                    </Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Registration Date</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Real Estate</TableCell>
                            <TableCell>House property located at Region-8</TableCell>
                            <TableCell>K15.00</TableCell>
                            <TableCell>
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </TableCell>
                            <TableCell>28 March 2025</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
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

export default CollateralTab;