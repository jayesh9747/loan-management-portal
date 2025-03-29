// src/components/apply-loan/loan-products/steps/ReviewContent.tsx
'use client';

import { useEffect } from 'react';

interface ReviewContentProps {
    setValid: (isValid: boolean) => void;
}

export default function ReviewContent({ setValid }: ReviewContentProps) {
    useEffect(() => {
        setValid(true); // Step is always valid since it’s just a review
    }, [setValid]);

    return (
        <div>
            <h2>Review</h2>
            <p>Please review your application details before submitting.</p>
            {/* Add summary of previous steps here if form data is persisted */}
        </div>
    );
}