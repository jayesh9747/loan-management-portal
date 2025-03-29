// src/components/apply-loan/loan-products/steps/PersonalInfoContent.tsx
'use client';

import { useState, useEffect } from 'react';

interface PersonalInfoContentProps {
    setValid: (isValid: boolean) => void;
}

export default function PersonalInfoContent({ setValid }: PersonalInfoContentProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const isValid = name.trim() !== '' && email.includes('@');
        setValid(isValid); // Step is valid if name and email are filled
    }, [name, email, setValid]);

    return (
        <div>
            <h2>Personal Information</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="border p-2 mb-2 w-full"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border p-2 mb-2 w-full"
            />
        </div>
    );
}