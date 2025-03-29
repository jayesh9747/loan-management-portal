// src/components/apply-loan/loan-products/steps/AddGuarantorsContent.tsx
'use client';

import { useState, useEffect } from 'react';

interface AddGuarantorsContentProps {
    setValid: (isValid: boolean) => void;
}

export default function AddGuarantorsContent({ setValid }: AddGuarantorsContentProps) {
    const [guarantorName, setGuarantorName] = useState('');
    const [guarantorContact, setGuarantorContact] = useState('');

    useEffect(() => {
        const isValid = guarantorName.trim() !== '' && guarantorContact.trim() !== '';
        setValid(isValid); // Step is valid if both fields are filled
    }, [guarantorName, guarantorContact, setValid]);

    return (
        <div>
            <h2>Add Guarantors</h2>
            <input
                type="text"
                value={guarantorName}
                onChange={(e) => setGuarantorName(e.target.value)}
                placeholder="Guarantor Name"
                className="border p-2 mb-2 w-full"
            />
            <input
                type="text"
                value={guarantorContact}
                onChange={(e) => setGuarantorContact(e.target.value)}
                placeholder="Guarantor Contact (e.g., phone or email)"
                className="border p-2 mb-2 w-full"
            />
        </div>
    );
}