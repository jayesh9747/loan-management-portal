'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeading from "@/components/page-heading";
import SearchBar from "@/components/search-bar";
import LoanTable from "@/components/loans/loan-table";
import { Button } from "@/components/ui/button";

interface ActiveLoan {
    accountNumber: string;
    loanProduct: string;
    principalAmount: number;
    paid: number;
    remaining: number;
}

interface AppliedLoan {
    loanProduct: string;
    principalAmount: number;
}

interface PastLoan {
    loanProduct: string;
    principalAmount: number;
    interestRate: number;
    totalPaid: number;
}

// Dummy data (25 active loans for pagination demo)
const activeLoans: ActiveLoan[] = Array.from({ length: 25 }, (_, i) => ({
    accountNumber: `000000${553 + i}`,
    loanProduct: "Agricultural Loan",
    principalAmount: 5000,
    paid: 1500,
    remaining: 6593.82,
}));

const appliedLoans: AppliedLoan[] = [
    { loanProduct: "Personal Loan", principalAmount: 10000 },
    { loanProduct: "Car Loan", principalAmount: 20000 },
];

const pastLoans: PastLoan[] = [
    { loanProduct: "Home Loan", principalAmount: 200000, interestRate: 5, totalPaid: 210000 },
    { loanProduct: "Education Loan", principalAmount: 50000, interestRate: 4, totalPaid: 52000 },
];

const activeLoanColumns = [
    { field: "accountNumber", header: "Account Number" },
    { field: "loanProduct", header: "Loan Product" },
    { field: "principalAmount", header: "Principal Amount" },
    { field: "paid", header: "Paid" },
    { field: "remaining", header: "Remaining" },
    { field: "action", header: "Action" },
];

const appliedLoanColumns = [
    { field: "loanProduct", header: "Loan Product" },
    { field: "principalAmount", header: "Principal Amount" },
    { field: "action", header: "Action" },
];

const pastLoanColumns = [
    { field: "loanProduct", header: "Loan Product" },
    { field: "principalAmount", header: "Principal Amount" },
    { field: "interestRate", header: "Interest Rate" },
    { field: "totalPaid", header: "Total Paid" },
    { field: "action", header: "Action" },
];

export default function Loans() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    // Filter loans based on search query
    const filteredActiveLoans = activeLoans.filter(
        (loan) =>
            loan.loanProduct.toLowerCase().includes(searchQuery) ||
            loan.accountNumber.includes(searchQuery)
    );

    const filteredAppliedLoans = appliedLoans.filter((loan) =>
        loan.loanProduct.toLowerCase().includes(searchQuery)
    );

    const filteredPastLoans = pastLoans.filter((loan) =>
        loan.loanProduct.toLowerCase().includes(searchQuery)
    );

    // Pagination for Active Loans
    const [currentPage, setCurrentPage] = useState(1);
    const loansPerPage = 10;
    const indexOfLastLoan = currentPage * loansPerPage;
    const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
    const currentActiveLoans = filteredActiveLoans.slice(indexOfFirstLoan, indexOfLastLoan);
    const totalPages = Math.ceil(filteredActiveLoans.length / loansPerPage);

    return (
        <div className="p-4">
            <PageHeading title="Loans" />
            <div className="w-full">
                <SearchBar param="search" placeholder="loans" />
            </div>
            <Tabs defaultValue="active" className="mt-4 w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="active">Active Loan</TabsTrigger>
                    <TabsTrigger value="applied">Applied Loan</TabsTrigger>
                    <TabsTrigger value="past">Past Loans</TabsTrigger>
                </TabsList>

                <TabsContent value="active">
                    <LoanTable columns={activeLoanColumns} data={currentActiveLoans} />
                    {filteredActiveLoans.length > 0 && (
                        <div className="mt-4 flex items-center justify-between">
                            <Button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                variant="outline"
                            >
                                Previous
                            </Button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <Button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                variant="outline"
                            >
                                Next
                            </Button>
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="applied">
                    <LoanTable columns={appliedLoanColumns} data={filteredAppliedLoans} />
                </TabsContent>

                <TabsContent value="past">
                    <LoanTable columns={pastLoanColumns} data={filteredPastLoans} />
                </TabsContent>
            </Tabs>
        </div>
    );
}