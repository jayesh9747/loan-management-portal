// src/components/apply-loan/loan-products/steps/AddCollateralContent.tsx
'use client';

import { useState, useEffect } from 'react';

interface AddCollateralContentProps {
    setValid: (isValid: boolean) => void;
}

export default function AddCollateralContent({ setValid }: AddCollateralContentProps) {
    const [collateral, setCollateral] = useState('');

    useEffect(() => {
        setValid(collateral.trim() !== '');
    }, [collateral, setValid]);

    return (
        <div>
            <h2>Add Collateral</h2>
            <input
                type="text"
                value={collateral}
                onChange={(e) => setCollateral(e.target.value)}
                placeholder="Collateral Description"
                className="border p-2 w-full"
            />
        </div>
    );
}