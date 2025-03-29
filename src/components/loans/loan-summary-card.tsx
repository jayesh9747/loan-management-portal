import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SummarySection from './summary-section';

const LoanSummaryCard: React.FC = () => {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SummarySection
            title="Home Loan Product"
            items={[
              { label: 'Loan ID:', value: <span className="font-medium">L0012345</span> },
              {
                label: 'Status:',
                value: (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                ),
              },
              { label: 'Application Date:', value: '28 March 2025' },
            ]}
          />
          <SummarySection
            title="Loan Amount"
            titleClass="text-sm font-semibold uppercase text-gray-500 mb-3"
            items={[
              { label: 'Principal:', value: <span className="font-medium">K5.00</span> },
              { label: 'Interest:', value: 'K1.25' },
              { label: 'Fees:', value: 'K0.00' },
              { label: 'Total Amount:', value: <span className="font-medium">K6.25</span> },
            ]}
          />
          <SummarySection
            title="Payment Status"
            titleClass="text-sm font-semibold uppercase text-gray-500 mb-3"
            items={[
              { label: 'Paid:', value: 'K0.00' },
              { label: 'Remaining:', value: <span className="font-medium">K6.25</span> },
              { label: 'Next Payment Date:', value: <span className="font-medium">28 August 2025</span> },
              { label: 'Next Payment Amount:', value: 'K6.25' },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanSummaryCard;