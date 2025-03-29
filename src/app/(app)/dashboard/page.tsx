// 'use client';
// import { Stepper } from '@/components/ui/stepper';
// import { Pencil } from 'lucide-react';

// // Define steps with pencil icons
// const steps = [
//   { id: 1, title: 'DETAILS', icon: <Pencil className="w-5 h-5" /> },
//   { id: 2, title: 'TERMS', icon: <Pencil className="w-5 h-5" /> },
//   { id: 3, title: 'CHARGES', icon: <Pencil className="w-5 h-5" /> },
// ];

// // Example content components
// const Step1Content = () => <div className="p-4">Details Content</div>;
// const Step2Content = () => <div className="p-4">Terms Content</div>;
// const Step3Content = () => <div className="p-4">Charges Content</div>;

// // Usage in a component
// function MyStepper() {
//   return (
//     <Stepper steps={steps} onSubmit={() => console.log('Form submitted')}>
//       <Step1Content />
//       <Step2Content />
//       <Step3Content />
//     </Stepper>
//   );
// }

// export default MyStepper;

'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  FileTextIcon,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const LoanDetailsPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams?.get('tab') || 'general';
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  useEffect(() => {
    const currentTab = searchParams?.get('tab') || 'general';
    setActiveTab(currentTab);
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Create a new URLSearchParams instance from the current searchParams
    const currentQuery = new URLSearchParams(searchParams?.toString() || '');
    currentQuery.set('tab', value);
    router.push(`?${currentQuery.toString()}`);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Loan Details</h1>

      {/* Loan Summary Card */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Home Loan Product</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Loan ID:</span>
                  <span className="font-medium">L0012345</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Application Date:</span>
                  <span>28 March 2025</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">Loan Amount</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Principal:</span>
                  <span className="font-medium">K5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Interest:</span>
                  <span>K1.25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fees:</span>
                  <span>K0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Amount:</span>
                  <span className="font-medium">K6.25</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">Payment Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Paid:</span>
                  <span>K0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Remaining:</span>
                  <span className="font-medium">K6.25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Next Payment Date:</span>
                  <span className="font-medium">28 August 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Next Payment Amount:</span>
                  <span>K6.25</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="repayments">Repayment Schedule</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="collateral">Collateral Details</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        {/* General Tab Content */}
        <TabsContent value="general">
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
        </TabsContent>

        {/* Repayment Schedule Tab Content */}
        <TabsContent value="repayments">
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
        </TabsContent>

        {/* Transactions Tab Content */}
        <TabsContent value="transactions">
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
        </TabsContent>

        {/* Collateral Tab Content */}
        <TabsContent value="collateral">
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
        </TabsContent>

        {/* Documents Tab Content */}
        <TabsContent value="documents">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoanDetailsPage;