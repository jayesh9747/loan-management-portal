'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthRoutes } from '@/components/auth/step-navigation';


export default function AuthIndexPage() {
    const router = useRouter();

    useEffect(() => {
        router.push(AuthRoutes.MOBILE_VERIFICATION);
    }, [router]);

    return null;
}