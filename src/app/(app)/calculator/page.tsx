'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { UserIcon } from "lucide-react";
import PageHeading from '@/components/page-heading';

const LoanCalculator: React.FC = () => {
    // State for loan parameters
    const [loanAmount, setLoanAmount] = useState<number>(122900);
    const [interestRate, setInterestRate] = useState<number>(11);
    const [loanTenure, setLoanTenure] = useState<number>(12);

    // State for calculated values
    const [monthlyEMI, setMonthlyEMI] = useState<number>(0);
    const [interestPayable, setInterestPayable] = useState<number>(0);

    // Calculate EMI and interest payable
    useEffect(() => {
        // Convert interest rate from annual to monthly
        const monthlyInterestRate = interestRate / 12 / 100;

        // Calculate EMI using formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
        const emi = loanAmount * monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, loanTenure) /
            (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

        // Calculate total interest payable
        const totalPayment = emi * loanTenure;
        const totalInterest = totalPayment - loanAmount;

        setMonthlyEMI(Math.round(emi));
        setInterestPayable(Math.round(totalInterest));
    }, [loanAmount, interestRate, loanTenure]);

    return (
        <div className="container mx-auto px-4 py-8">
            <PageHeading title={'EMI calculator'}></PageHeading>
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg">

                <h1 className="text-2xl font-bold text-center mb-2">Personal Loan EMI Calculator Online</h1>
                <p className="text-center text-gray-600 mb-1">Calculate your Loan EMI in 3 easy steps.</p>
                <p className="text-center text-gray-600 mb-6">Use the slider to set your loan amount, interest rate and tenure to understand your loan summary</p>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="space-y-8">
                                {/* Step 1: Loan Amount */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">01</div>
                                                <span className="font-semibold">Required loan amount</span>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
                                            <Input
                                                type="number"
                                                value={loanAmount}
                                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                                className="pl-6 w-32"
                                            />
                                        </div>
                                    </div>
                                    <Slider
                                        defaultValue={[loanAmount]}
                                        min={50000}
                                        max={1000000}
                                        step={1000}
                                        onValueChange={(values) => setLoanAmount(values[0])}
                                        className="my-4"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Min $ 50,000</span>
                                        <span>Max $ 10L</span>
                                    </div>
                                </div>

                                {/* Step 2: Interest Rate */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">02</div>
                                                <span className="font-semibold">Interest rate</span>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center">
                                            <Input
                                                type="number"
                                                value={interestRate}
                                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                                className="w-20 mr-1"
                                            />
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <Slider
                                        defaultValue={[interestRate]}
                                        min={1}
                                        max={42}
                                        step={0.1}
                                        onValueChange={(values) => setInterestRate(values[0])}
                                        className="my-4"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Min 1%</span>
                                        <span>Max 42%</span>
                                    </div>
                                </div>

                                {/* Step 3: Loan Tenure */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">03</div>
                                                <span className="font-semibold">Loan tenure</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Input
                                                type="number"
                                                value={loanTenure}
                                                onChange={(e) => setLoanTenure(Number(e.target.value))}
                                                className="w-20"
                                            />
                                            <span className="text-sm">months</span>
                                        </div>
                                    </div>
                                    <Slider
                                        defaultValue={[loanTenure]}
                                        min={12}
                                        max={60}
                                        step={1}
                                        onValueChange={(values) => setLoanTenure(values[0])}
                                        className="my-4"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Min 12 months</span>
                                        <span>Max 60 months</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Loan Summary Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Loan Calculator Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center mb-8">
                                <div className="relative">
                                    <div className="rounded-full w-32 h-32 border-8 border-black bg-gray-100 flex items-center justify-center">
                                        <div className="flex flex-col items-center">
                                            <UserIcon className="h-6 w-6" />
                                            <span className="text-sm font-medium mt-1">Loan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-black"></div>
                                        <span>Loan Amount</span>
                                    </div>
                                    <div className="font-semibold">$ {loanAmount.toLocaleString()}</div>
                                </div>

                                <div className="flex justify-between items-center border-b pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                                        <span>Interest Payable</span>
                                    </div>
                                    <div className="font-semibold">$ {interestPayable.toLocaleString()}</div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t mt-6">
                                    <div className="text-lg font-semibold">Monthly EMI</div>
                                    <div className="text-xl font-bold">$ {monthlyEMI.toLocaleString()}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LoanCalculator;