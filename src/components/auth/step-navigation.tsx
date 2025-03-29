'use client';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

// Define the authentication routes
export enum AuthRoutes {
    MOBILE_VERIFICATION = '/auth/mobile-verification',
    EMAIL_VERIFICATION = '/auth/email-verification',
    TERMS_CONDITIONS = '/auth/terms-conditions',
    COMPLETE = '/auth/complete'
}

// Define steps for the authentication flow
const steps = [
    {
        id: 1,
        title: 'Mobile Verification',
        route: 'mobile-verification',
        link: AuthRoutes.MOBILE_VERIFICATION,
    },
    {
        id: 2,
        title: 'Email Verification',
        route: 'email-verification',
        link: AuthRoutes.EMAIL_VERIFICATION,
    },
    {
        id: 3,
        title: 'Terms & Conditions',
        route: 'terms-conditions',
        link: AuthRoutes.TERMS_CONDITIONS,
    }
];

export default function AuthStepNavigation() {
    const router = useRouter();
    const pathname = usePathname();
    const currentPath = pathname.split('/').pop() || '';
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    useEffect(() => {
        // Find the current step index based on the current path
        const index = steps.findIndex((step) => step.route === currentPath);
        if (index !== -1) {
            setCurrentStepIndex(index);
        }
    }, [currentPath]);

    // Check if user can navigate to a specific step
    const canNavigateToStep = (stepIndex: number) => {
        // Can always go back to previous steps
        if (stepIndex <= currentStepIndex) return true;

        // Can go to next step only if all previous steps are completed
        for (let i = 0; i < stepIndex; i++) {
            if (!completedSteps.includes(steps[i].id)) {
                return false;
            }
        }
        return true;
    };

    // Mark current step as completed
    const markStepCompleted = (stepId: number) => {
        if (!completedSteps.includes(stepId)) {
            setCompletedSteps([...completedSteps, stepId]);
        }
    };

    // Handle step navigation
    const handleStepClick = (stepIndex: number) => {
        if (canNavigateToStep(stepIndex)) {
            router.push(steps[stepIndex].link);
        }
    };

    return (
        <div className="mb-12 mt-4 lg:mb-0 min-w-60">
            {/* Back button - disabled if on first step */}
            {currentStepIndex > 0 && (
                <button
                    onClick={() => router.push(steps[currentStepIndex - 1].link)}
                    className="mb-4 flex items-center gap-2 text-xl disabled:text-white/50 lg:mb-12 lg:gap-5"
                >
                    <span>← Back</span>
                </button>
            )}

            {/* List of authentication steps */}
            <div className="relative flex flex-row justify-between lg:flex-col lg:justify-start lg:gap-8">
                {steps.map((step, i) => (
                    <div
                        key={step.id}
                        className={clsx(
                            "group z-20 flex items-center gap-3 text-2xl",
                            { "cursor-pointer": canNavigateToStep(i), "cursor-not-allowed opacity-70": !canNavigateToStep(i) }
                        )}
                        onClick={() => canNavigateToStep(i) && handleStepClick(i)}
                    >
                        <span
                            className={clsx(
                                'flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors duration-200 lg:h-12 lg:w-12 lg:text-lg',
                                {
                                    'border-none bg-teal-500 text-black': currentPath === step.route,
                                    'border-white/75 bg-gray-900 text-white/75': currentPath !== step.route,
                                    'border-green-500 bg-green-500 text-white': completedSteps.includes(step.id) && currentPath !== step.route,
                                }
                            )}
                        >
                            {completedSteps.includes(step.id) && currentPath !== step.route ? '✓' : i + 1}
                        </span>
                        <span
                            className={clsx(
                                'hidden transition-colors duration-200 lg:block',
                                {
                                    'font-light text-white/75': currentPath !== step.route && !completedSteps.includes(step.id),
                                    'font-semibold text-white': currentPath === step.route,
                                    'font-medium text-green-500': completedSteps.includes(step.id) && currentPath !== step.route
                                }
                            )}
                        >
                            {step.title}
                        </span>
                    </div>
                ))}

                {/* Mobile background dashes */}
                <div className="absolute top-4 flex h-1 w-full border-b border-dashed lg:hidden" />
            </div>
        </div>
    );
}