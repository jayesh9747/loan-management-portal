"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import PageHeading from "@/components/page-heading";

export default function ApplyLoanPage() {
    const [submissionDate, setSubmissionDate] = useState<Date | undefined>(new Date());
    const [disbursalDate, setDisbursalDate] = useState<Date | undefined>(new Date());
    const [loanProduct, setLoanProduct] = useState("");
    const [purposeOfLoan, setPurposeOfLoan] = useState("");
    const [principalAmount, setPrincipalAmount] = useState("");
    const [currency, setCurrency] = useState("Kenyan Shilling");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your loan submission logic here
        console.log({
            submissionDate,
            disbursalDate,
            loanProduct,
            purposeOfLoan,
            principalAmount,
            currency
        });
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 space-y-4">
            <PageHeading title="Apply For Loan" />
            <p className="text-sm text-gray-600 mb-4">
                New Loan application for John Doe, Account Number 1000219832
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Loan Product *
                    </label>
                    <Select
                        value={loanProduct}
                        onValueChange={setLoanProduct}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select Loan Product" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="income-loan">Income Loan</SelectItem>
                            <SelectItem value="business-loan">Business Loan</SelectItem>
                            <SelectItem value="personal-loan">Personal Loan</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purpose of Loan *
                    </label>
                    <Select
                        value={purposeOfLoan}
                        onValueChange={setPurposeOfLoan}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select Purpose" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="tailoring-shop">Tailoring Shop</SelectItem>
                            <SelectItem value="business-expansion">Business Expansion</SelectItem>
                            <SelectItem value="personal-use">Personal Use</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Principal Amount
                    </label>
                    <Input
                        type="number"
                        value={principalAmount}
                        onChange={(e) => setPrincipalAmount(e.target.value)}
                        placeholder="Enter Principal Amount"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency
                    </label>
                    <Input
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        readOnly
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Submission Date
                    </label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !submissionDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {submissionDate ? format(submissionDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={submissionDate}
                                onSelect={setSubmissionDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Disbursal Date
                    </label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !disbursalDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {disbursalDate ? format(disbursalDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={disbursalDate}
                                onSelect={setDisbursalDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="flex justify-between space-x-4">
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                            // Reset form
                            setLoanProduct("");
                            setPurposeOfLoan("");
                            setPrincipalAmount("");
                            setSubmissionDate(new Date());
                            setDisbursalDate(new Date());
                        }}
                    >
                        CLEAR
                    </Button>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        SUBMIT
                    </Button>
                </div>
            </form>
        </div>
    );
}