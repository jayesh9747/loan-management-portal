'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CollateralTab from '@/components/loans/collateral-tab';
import DocumentsTab from '@/components/loans/documents-tab';
import GeneralTab from '@/components/loans/general-tab';
import LoanSummaryCard from '@/components/loans/loan-summary-card';
import RepaymentScheduleTab from '@/components/loans/repayment-schedule-tab';
import TransactionsTab from '@/components/loans/transactions-tab';


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
        const currentQuery = new URLSearchParams(searchParams?.toString() || '');
        currentQuery.set('tab', value);
        router.push(`?${currentQuery.toString()}`);
    };

    return (
        <div className="container mx-auto py-8 px-4 max-w-6xl">
            <h1 className="text-2xl font-bold mb-6">Loan Details</h1>
            <LoanSummaryCard />
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="repayments">Repayment Schedule</TabsTrigger>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                    <TabsTrigger value="collateral">Collateral Details</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                    <GeneralTab />
                </TabsContent>
                <TabsContent value="repayments">
                    <RepaymentScheduleTab />
                </TabsContent>
                <TabsContent value="transactions">
                    <TransactionsTab />
                </TabsContent>
                <TabsContent value="collateral">
                    <CollateralTab />
                </TabsContent>
                <TabsContent value="documents">
                    <DocumentsTab />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default LoanDetailsPage;