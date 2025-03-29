'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AuthStepNavigation, { AuthRoutes } from '@/components/AuthStepNavigation';
import { useAuth } from '@/context/auth';


export default function MobileVerificationPage() {
  const router = useRouter();
  const { updateMobileVerification, authState } = useAuth();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = async () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      setError('Please enter a valid mobile number');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1500));
      setOtpSent(true);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length < 4) {
      setError('Please enter a valid OTP');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update auth context state
      updateMobileVerification(mobileNumber);
      
      // Navigate to next step
      router.push(AuthRoutes.EMAIL_VERIFICATION);
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-60 bg-gray-900 text-white p-4">
        <AuthStepNavigation />
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Mobile Verification</CardTitle>
            <CardDescription>
              {!otpSent 
                ? 'Enter your mobile number to receive an OTP'
                : 'Enter the OTP sent to your mobile number'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {!otpSent ? (
              <div className="space-y-4">
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                
                <div className="text-sm">
                  <span>Didn't receive the OTP? </span>
                  <button 
                    className="text-blue-500 hover:underline"
                    onClick={handleSendOtp}
                  >
                    Resend
                  </button>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={!otpSent ? handleSendOtp : handleVerifyOtp}
              disabled={loading}
            >
              {loading ? 'Loading...' : !otpSent ? 'Send OTP' : 'Verify OTP'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}