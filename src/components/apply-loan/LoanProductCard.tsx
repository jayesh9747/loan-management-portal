'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


interface LoanProduct {
    id: string;
    name: string;
    principal: number;
    interest: number;
    currency: string;
    term: number;
    categories: string[];
}

interface LoanProductCardProps {
    product: LoanProduct;
}

export default function LoanProductCard({ product }: LoanProductCardProps) {
    const router = useRouter();

    const handleViewDetails = () => {
        router.push(`apply-loan/loan-products/${product.id}`);
    };

    return (
        <Card className="w-full max-w-md border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
                <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div className="space-y-1">
                        <p className="text-muted-foreground">Principal</p>
                        <p className="font-semibold">
                            {product.principal.toLocaleString()} {product.currency}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground">Interest</p>
                        <p className="font-semibold">{product.interest}%</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground">Currency</p>
                        <p className="font-semibold">{product.currency}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground">Term</p>
                        <p className="font-semibold">{product.term} months</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {product.categories.map((category, index) => (
                        <span
                            key={index}
                            className={`px-2 py-1 text-xs rounded-full ${category === 'Agriculture'
                                ? 'bg-green-500 text-white'
                                : category === 'Business'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-500 text-white'
                                }`}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="flex justify-end">
                <Button
                    onClick={handleViewDetails}
                    variant="outline"
                    className="w-full"
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}