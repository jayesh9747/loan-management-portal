// src/components/apply-loan/loan-products/steps/TermsContent.tsx
'use client';

import { useState, useEffect } from 'react';

interface TermsContentProps {
    setValid: (isValid: boolean) => void;
}

export default function TermsContent({ setValid }: TermsContentProps) {
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        setValid(accepted); // Step is valid if terms are accepted
    }, [accepted, setValid]);

    return (
        <div>
            <h2>Terms</h2>
            <label>
                <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                />
                I accept the terms and conditions
            </label>
        </div>
    );
}