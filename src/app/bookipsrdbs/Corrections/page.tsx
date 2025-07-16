import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import TableOfContents from '@/components/books/TableOfContents';
import { books } from '@/data/books';
import type { NextPage } from 'next';

const Corrections: NextPage = () => {
  const bookId = 'bookipsrdbs';
  const book = books[bookId];

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar with Table of Contents */}
            <div className="lg:w-1/4">
              {/* Desktop Table of Contents */}
              <div className="hidden lg:block">
                <TableOfContents chapters={book.chapters} bookId={bookId} />
              </div>

              {/* Mobile Table of Contents Dropdown */}
              <div className="lg:hidden">
                <TableOfContents chapters={book.chapters} bookId={bookId} />
              </div>
            </div>

            {/* Main content */}
            <div className="lg:w-3/4">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
                <div className="prose max-w-none">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Corrections
                  </h1>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 mb-6">
                      <a href="html_typos.html" className="text-blue-600 hover:text-blue-800">  Here is a list of additional corrections.</a> Please also visit 
                      <a href="https://link.springer.com/chapter/10.1007/978-3-031-37865-2_21?_gl=1*u8az8*_up*MQ..&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1vT1jB8a8B-8flWTBxuryQYtkto1SFKqS2SNTzhL8FutIK7z72FYx4aAsTpEALw_wcB" className="text-blue-600 hover:text-blue-800"> the Publisher's correction page. </a> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Corrections;
