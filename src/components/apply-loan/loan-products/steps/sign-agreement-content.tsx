// src/components/apply-loan/loan-products/steps/SignAgreementContent.tsx
'use client';

import { useState, useEffect } from 'react';

interface SignAgreementContentProps {
    setValid: (isValid: boolean) => void;
}

export default function SignAgreementContent({ setValid }: SignAgreementContentProps) {
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        setValid(signed); // Step is valid if the agreement is signed
    }, [signed, setValid]);

    return (
        <div>
            <h2>Sign Agreement</h2>
            <label>
                <input
                    type="checkbox"
                    checked={signed}
                    onChange={(e) => setSigned(e.target.checked)}
                />
                I agree to the loan terms and conditions
            </label>
        </div>
    );
}