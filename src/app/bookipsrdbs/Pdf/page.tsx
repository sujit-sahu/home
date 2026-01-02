import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import TableOfContents from '@/components/books/TableOfContents';
import { books } from '@/data/books';
import type { NextPage } from 'next';

const Pdf: NextPage = () => {   // <-- rename component to match export
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
                    PDFs
                  </h1>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 mb-6">
                        Additional PDF documents can be found here.
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

export default Pdf;
