'use client';

import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import RepaymentCard, { RepaymentCardProps } from '@/components/repayments/repayment-card';
import PageHeading from '@/components/page-heading';
import SearchBar from '@/components/search-bar';

function LoanProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const loanData: RepaymentCardProps[] = [
    {
      index: 1,
      loanProductName: 'Home Loan',
      principal: '12,000 UGX',
      loanBalance: '9,500 UGX',
      amountPaid: '2,500 UGX',
      term: '12 months',
      status: 'Active',
      repaymentPath: '/repayments/loans/1',
      loanDetailsPath: '/repayments/loans/1',
    },
    {
      index: 2,
      loanProductName: 'Car Loan',
      principal: '20,000 UGX',
      loanBalance: '15,000 UGX',
      amountPaid: '5,000 UGX',
      term: '24 months',
      status: 'Active',
      repaymentPath: '/loans/2/repayment',
      loanDetailsPath: '/loans/2/details',
    },
    // Add more loan objects as needed
  ];

  // Filter products based on search term (using the loanProductName property)
  const filteredProducts = loanData.filter((product) =>
    product.loanProductName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Heading */}
      <PageHeading title="Active Loans" />

      {/* Search Input */}
      <div className="mb-6">
        <SearchBar
          param="search"
          placeholder="Search loans"
        />
      </div>

      {/* Loan Products Grid */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        {currentProducts.map((loan) => (
          <RepaymentCard key={loan.index} {...loan} />
        ))}
      </div>

      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default LoanProductsPage;
