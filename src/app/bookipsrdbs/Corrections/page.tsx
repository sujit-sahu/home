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
                      Further, resources (e.g. lecture slides) will be published through this page. Please revisit this page later. The data sets discussed in the book are published via the R package
                      <a href="https://cran.r-project.org/web/packages/ipsRdbs/index.html" className="text-blue-600 hover:text-blue-800"> ipsRdbs </a> 
                      available from CRAN. The data files are also available to download from this website as a zip file,
                      <a href="/ipsRdbsdata.zip" className="text-blue-600 hover:text-blue-800">ipsRdbsdata.zip. </a>
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
