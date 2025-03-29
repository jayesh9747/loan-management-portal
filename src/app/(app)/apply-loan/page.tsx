'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Card, CardHeader } from '@/components/ui/card';
import LoanProductCard from '@/components/apply-loan/LoanProductCard';
import PageHeading from '@/components/page-heading';
import SearchBar from '@/components/search-bar';



function LoanProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Sample loan products data
  const loanProducts = [
    {
      id: '1',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '2',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '3',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '4',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '5',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '6',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '7',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '8',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '9',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '10',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '11',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '12',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    {
      id: '1',
      name: 'Farm Expansion Loan',
      description: 'A loan to help farmers expand their operations.',
      principal: 50000,
      interest: 5.5,
      currency: 'USD',
      term: 24,
      categories: ['Agriculture', 'Business'],
    },
    // Add more loan products here...
    // Repeat the above object to create at least 12 products for pagination demo
  ];

  // Filter products based on search term
  const filteredProducts = loanProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.categories.some(cat => 
      cat.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct, 
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Heading */}
      <PageHeading title="Loan Products" />

      {/* Search Input */}
      <div className="mb-6">
        <SearchBar param="search" placeholder="loans" />
      </div>

      {/* Loan Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {currentProducts.map(product => (
          <LoanProductCard 
            key={product.id} 
            product={product} 
          />
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