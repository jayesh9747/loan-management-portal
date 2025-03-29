// src/pages/LoanApplicationPage.tsx
'use client';

import { useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { Pencil } from 'lucide-react';
import PageHeading from '@/components/page-heading';
import { StepperHeader, StepperNavigation } from '@/components/ui/stepper';
import TermsContent from '@/components/apply-loan/loan-products/steps/terms-content';
import PersonalInfoContent from '@/components/apply-loan/loan-products/steps/personal-info-content';
import AddCollateralContent from '@/components/apply-loan/loan-products/steps/add-collateral-content';
import AddGuarantorsContent from '@/components/apply-loan/loan-products/steps/add-guarantors-content';
import ReviewContent from '@/components/apply-loan/loan-products/steps/review-content';
import SignAgreementContent from '@/components/apply-loan/loan-products/steps/sign-agreement-content';

interface LoanApplicationPageProps {
  loanProductName: string;
}

export default function LoanApplicationPage({ loanProductName }: LoanApplicationPageProps) {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract the currentStep from the query parameter; default to 'terms'
  const currentStep = searchParams.get('currentStep') || 'terms';

  // Define steps with stepName and icon
  const steps = [
    { id: 1, title: 'Terms', icon: <Pencil className="w-5 h-5" />, stepName: 'terms' },
    { id: 2, title: 'Personal Information', icon: <Pencil className="w-5 h-5" />, stepName: 'personal-information' },
    { id: 3, title: 'Add Collateral', icon: <Pencil className="w-5 h-5" />, stepName: 'add-collateral' },
    { id: 4, title: 'Add Guarantors', icon: <Pencil className="w-5 h-5" />, stepName: 'add-guarantors' },
    { id: 5, title: 'Sign Agreement', icon: <Pencil className="w-5 h-5" />, stepName: 'sign-agreement' },
    { id: 6, title: 'Review', icon: <Pencil className="w-5 h-5" />, stepName: 'review' },
  ];

  // Determine current step index based on the query parameter
  const currentStepIndex = steps.findIndex(s => s.stepName === currentStep);

  // If the current step is invalid, redirect to the default step 'terms'
  if (currentStepIndex === -1) {
    router.replace(`/apply-loan/loan-products/${id}?currentStep=terms`);
    return null;
  }

  // State for tracking completed steps and current step validity
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStepValid, setCurrentStepValid] = useState(false);

  // Ensure that all previous steps are completed before accessing the current step
  const isStepAccessible =
    currentStepIndex === 0 || completedSteps.includes(currentStepIndex - 1);
  if (!isStepAccessible) {
    // Find the first incomplete step and redirect
    const firstIncompleteIndex = steps.findIndex((_, index) => index < currentStepIndex && !completedSteps.includes(index));
    const targetStep = firstIncompleteIndex !== -1 ? steps[firstIncompleteIndex].stepName : 'terms';
    router.replace(`/apply-loan/loan-products/${id}?currentStep=${targetStep}`);
    return null;
  }

  // Navigation handlers updating the query parameter for currentStep
  const handleNext = () => {
    if (currentStepValid) {
      setCompletedSteps(prev => [...new Set([...prev, currentStepIndex])]);
      if (currentStepIndex < steps.length - 1) {
        router.push(`/apply-loan/loan-products/${id}?currentStep=${steps[currentStepIndex + 1].stepName}`);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      router.push(`/apply-loan/loan-products/${id}?currentStep=${steps[currentStepIndex - 1].stepName}`);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted');
    // Add your submission logic here (e.g., API call)
  };

  // Render step content based on the current step
  const renderStepContent = () => {
    switch (currentStepIndex) {
      case 0:
        return <TermsContent setValid={setCurrentStepValid} />;
      case 1:
        return <PersonalInfoContent setValid={setCurrentStepValid} />;
      case 2:
        return <AddCollateralContent setValid={setCurrentStepValid} />;
      case 3:
        return <AddGuarantorsContent setValid={setCurrentStepValid} />;
      case 4:
        return <SignAgreementContent setValid={setCurrentStepValid} />;
      case 5:
        return <ReviewContent setValid={setCurrentStepValid} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen px-2 bg-gray-100">
      <PageHeading title={loanProductName} goBack />
      <div className="flex justify-center my-6">
        <StepperHeader steps={steps} activeStep={currentStepIndex} />
      </div>
      <div className="mx-auto max-w-4xl bg-white p-6 mt-6 rounded-lg shadow-md">
        {renderStepContent()}
        <StepperNavigation
          activeStep={currentStepIndex}
          steps={steps}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isNextEnabled={currentStepValid}
        />
      </div>
    </div>
  );
}
