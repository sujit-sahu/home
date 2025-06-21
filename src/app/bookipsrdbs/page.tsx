'use client';

import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const BookipsrdbsPage: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar with Table of Contents */}
              <div className="lg:w-1/4">
                {/* Desktop Table of Contents */}
                <div className="hidden lg:block">
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                  <button 
                    className="w-full flex items-center justify-between text-lg md:text-xl font-semibold text-gray-900 mb-4 focus:outline-none cursor-pointer md:cursor-default"
                    onClick={(e) => {
                      const target = e.currentTarget;
                      const content = target.nextElementSibling;
                      const arrow = target.querySelector('.arrow');
                      if (window.innerWidth < 768) { // Only for mobile
                        if (content instanceof HTMLElement) {
                          content.style.maxHeight = content.style.maxHeight === '0px' ? '2000px' : '0px';
                          content.style.opacity = content.style.maxHeight === '0px' ? '0' : '1';
                        }
                        if (arrow instanceof HTMLElement) {
                          arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
                        }
                      }
                    }}
                  >
                    <span>Table of Contents</span>
                    <svg 
                      className="arrow w-6 h-6 transform transition-transform duration-300 md:hidden" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="transition-all duration-300 ease-in-out max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100">
                  <div className="space-y-2">
  <Link href="/bookipsrdbs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    1. Introduction to Basic Statistics
  </Link>
  <Link href="/bookipsrdbs/chap2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    2. Getting Started with R
  </Link>
  <Link href="/bookipsrdbs/chap3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    3. Introduction to Probability
  </Link>
  <Link href="/bookipsrdbs/chap4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    4. Conditional Probability and Independence
  </Link>
  <Link href="/bookipsrdbs/chap5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    5. Random Variables and Their Probability Distributions
  </Link>
  <Link href="/bookipsrdbs/chap6" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    6. Standard Discrete Distributions
  </Link>
  <Link href="/bookipsrdbs/chap7" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    7. Standard Continuous Distributions
  </Link>
  <Link href="/bookipsrdbs/chap8" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    8. Joint Distributions and the CLT
  </Link>
  <Link href="/bookipsrdbs/chap9" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    9. Introduction to Statistical Inference
  </Link>
  <Link href="/bookipsrdbs/chap10" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    10. Methods of Point Estimation
  </Link>
  <Link href="/bookipsrdbs/chap11" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    11. Interval Estimation
  </Link>
  <Link href="/bookipsrdbs/chap12" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    12. Hypothesis Testing
  </Link>
  <Link href="/bookipsrdbs/chap13" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  13. Generating Functions
</Link>
<Link href="/bookipsrdbs/chap14" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  14. Transformation and Transformed Distributions
</Link>
<Link href="/bookipsrdbs/chap15" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  15. Multivariate Distributions
</Link>
<Link href="/bookipsrdbs/chap16" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  16. Convergence of Estimators
</Link>
<Link href="/bookipsrdbs/chap17" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  17. Simple Linear Regression Model
</Link>
<Link href="/bookipsrdbs/chap18" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  18. Multiple Linear Regression Model
</Link>
<Link href="/bookipsrdbs/chap19" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  19. Analysis of Variance
</Link>
<Link href="/bookipsrdbs/Resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  Resources
</Link>
<Link href="/bookipsrdbs/Corrections" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  Corrections
</Link>
</div>

                  </div>
                </div>
                </div>
              </div>
              {/* Mobile Table of Contents Dropdown */}
              <div className="lg:hidden">
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <button 
                    className="w-full flex items-center justify-between text-lg md:text-xl font-semibold text-gray-900 mb-4 focus:outline-none cursor-pointer"
                    onClick={(e) => {
                      const target = e.currentTarget;
                      const content = target.nextElementSibling;
                      const arrow = target.querySelector('.arrow');
                      if (content instanceof HTMLElement) {
                        content.style.maxHeight = content.style.maxHeight === '0px' ? '2000px' : '0px';
                        content.style.opacity = content.style.maxHeight === '0px' ? '0' : '1';
                      }
                      if (arrow instanceof HTMLElement) {
                        arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
                      }
                    }}
                  >
                    <span>Table of Contents</span>
                    <svg 
                      className="arrow w-6 h-6 transform transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="transition-all duration-300 ease-in-out max-h-0 opacity-0">
                  <div className="space-y-2">
  <Link href="/bookipsrdbs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    1. Introduction to Basic Statistics
  </Link>
  <Link href="/bookipsrdbs/chap2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    2. Getting Started with R
  </Link>
  <Link href="/bookipsrdbs/chap3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    3. Introduction to Probability
  </Link>
  <Link href="/bookipsrdbs/chap4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    4. Conditional Probability and Independence
  </Link>
  <Link href="/bookipsrdbs/chap5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    5. Random Variables and Their Probability Distributions
  </Link>
  <Link href="/bookipsrdbs/chap6" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    6. Standard Discrete Distributions
  </Link>
  <Link href="/bookipsrdbs/chap7" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    7. Standard Continuous Distributions
  </Link>
  <Link href="/bookipsrdbs/chap8" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    8. Joint Distributions and the CLT
  </Link>
  <Link href="/bookipsrdbs/chap9" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    9. Introduction to Statistical Inference
  </Link>
  <Link href="/bookipsrdbs/chap10" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    10. Methods of Point Estimation
  </Link>
  <Link href="/bookipsrdbs/chap11" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    11. Interval Estimation
  </Link>
  <Link href="/bookipsrdbs/chap12" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
    12. Hypothesis Testing
  </Link>
  <Link href="/bookipsrdbs/chap13" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  13. Generating Functions
</Link>
<Link href="/bookipsrdbs/chap14" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  14. Transformation and Transformed Distributions
</Link>
<Link href="/bookipsrdbs/chap15" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  15. Multivariate Distributions
</Link>
<Link href="/bookipsrdbs/chap16" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  16. Convergence of Estimators
</Link>
<Link href="/bookipsrdbs/chap17" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  17. Simple Linear Regression Model
</Link>
<Link href="/bookipsrdbs/chap18" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  18. Multiple Linear Regression Model
</Link>
<Link href="/bookipsrdbs/chap19" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
  19. Analysis of Variance
</Link>
</div>

                  </div>
                </div>
              </div>
              <div className="lg:w-3/4">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
                  <div className="prose max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Probability, Statistics and R</h1>
                

                <div className="mb-8 flex justify-center items-center">
                  <img
                    src="cover_ipsRdbs.png"
                    alt="Introduction to Probability, Statistics & R Book Cover"
                      className="w-1/3 h-auto rounded-lg shadow-lg"
                      width={450}
                      height={300}
                  />
                  </div>

                  <div className="text-gray-600 mb-6 space-y-6">
                  
                  <div className="mt-12">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      It is now possible to order this book from
                      <a href="https://www.waterstones.com/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> Waterstones, </a> or
                      <a href="https://www.barnesandnoble.com/w/introduction-to-probability-statistics-r-sujit-k-sahu/1143708068?ean=9783031378652" className="text-blue-600 hover:text-blue-800"> Barnes & Noble, </a> or
                      <a href="https://www.foyles.co.uk/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> foyles bookshops </a> or
                      <a href="https://www.amazon.com/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/" className="text-blue-600 hover:text-blue-800"> Amazon.com </a> or 
                      <a href="https://www.amazon.co.uk/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/" className="text-blue-600 hover:text-blue-800"> Amazon.co.uk in the UK. </a>
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      
                <div className="text-gray-600 mb-6 space-y-6">
                  The book is based on my lecture notes for many courses (modules), for example, <a href="/2020_math1024.pdf" className="text-blue-600 hover:text-blue-800">Introduction to Probability and Statistics,</a> taught to first and second year students in various BSc in Mathematics degree programmes.
                  The book contains many examples and exercises, and it is suitable for self-study as well as classroom use.
                </div>
                <div className="text-gray-600 mb-6 space-y-6">
                This book has been accessed 62,000 times as of June 21, 2025. <a href="https://link.springer.com/book/10.1007/978-3-031-37865-2?_gl=1*17rnx1i*_up*MQ..&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1vT1jB8a8B-8flWTBxuryQYtkto1SFKqS2SNTzhL8FutIK7z72FYx4aAsTpEALw_wcB" target="_blank" rel="noopener noreferrer">View the book on Springer</a>.
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key features of the book:</h2>
                  <ul className="space-y-4 list-none">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">This is an accessible textbook that engages the reader with many practical examples using probability and statistics for data science and machine learning.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">The book provides a comprehensive coverage of topics in probability, and both applied and mathematical statistics.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">The topics discussed in the book cover the syllabus for the 2023 Actuarial Statistics 1 examination administered by the Institute and Faculty of Actuaries in London.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">R, a popular statistical computing software package, is introduced from scratch and illustrated with many practical data sets. For example, see the <a href="/bookipsrdbs/Part1.html" className="text-blue-600 hover:text-blue-800">R Getting Started page</a> or the <a href="/bookipsrdbs/vignette_full.html" className="text-blue-600 hover:text-blue-800">the package vignette.</a></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">The book comes with its own dedicated R package <a href="https://CRAN.R-project.org/package=ipsRdbs" className="text-blue-600 hover:text-blue-800">ipsRdbs,</a> available from <a href="https://CRAN.R-project.org/" className="text-blue-600 hover:text-blue-800">CRAN.</a> Once inside R and with the package installed, just asking for help for any data set included in the package will produce all the code required to reproduce the results and analysis presented in the book for that data set. Hence, a beginner reader can reproduce all those results without having to first learn all the commands and their exact syntax in R. This makes it seamless to learn, use and apply practical methods in introductory probability, statistics and beyond.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">The textbook also contains many theoretical and applied exercises for readers and instructors.</span>
                    </li>
                  </ul>
                  

                </div>
                      

                      <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {[
                            'college2.jpg',
                            'gamma_density.png',
                            'Lion_cub.jpg',
                            'mediansqueeze.png',
                            'n2contours2.png',
                            'possum.jpg',
                            'puffin_scotland.jpg',
                            'rv_mapping.png'
                          ].map((image) => (
                            <div key={image} className="relative group overflow-hidden rounded-lg shadow-lg">
                              <img
                                src={`/bookipsrdbs/${image}`}
                                alt={image.replace('.png', '').split('_').join(' ')}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-center px-4 text-sm">
                                  {image.replace('.png', '').split('_').join(' ')}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-12">
                      <ul className="space-y-8">
  <li>
    <h5 id="chapter-1" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap1/" className="text-blue-600 hover:text-blue-800">Chapter 1</a>
    </h5>
    <p className="text-gray-700">This chapter introduces basic statistics such as the mean, median and mode and standard deviation. It also provides introduction to many motivating data sets which are used as running examples throughout the book.</p>
  </li>
  <li>
    <h5 id="chapter-2" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap2/" className="text-blue-600 hover:text-blue-800">Chapter 2</a>
    </h5>
    <p className="text-gray-700">This chapter introduces the R software package and discusses how to get started with many examples. It revisits some of the data sets already mentioned in Chapter 1 by drawing simple graphs and obtaining summary statistics.</p>
  </li>
  <li>
    <h5 id="chapter-3" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap3/" className="text-blue-600 hover:text-blue-800">Chapter 3</a>
    </h5>
    <p className="text-gray-700">The basic concepts of probability are introduced in this chapter. Elementary methods of counting, the number of permutations and the number of combinations are introduced and illustrated. Elementary methods for calculating probabilities are discussed and the general urn problem in probability is defined.</p>
  </li>
  <li>
    <h5 id="chapter-4" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap4/" className="text-blue-600 hover:text-blue-800">Chapter 4</a>
    </h5>
    <p className="text-gray-700">This chapter introduces many advanced laws of probability such as the total probability theorem, conditional probability and the Bayes theorem. The famous Monty Python problem is discussed and illustrated using a simulation tool in R.</p>
  </li>
  <li>
    <h5 id="chapter-5" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap5/" className="text-blue-600 hover:text-blue-800">Chapter 5</a>
    </h5>
    <p className="text-gray-700">Chapter 5 defines the random variables and their probability distributions. Many properties such as mean, variance, and quantiles of random variables are also defined here. Laws for expectations and variances of linear functions of random variables are also discussed.</p>
  </li>
  <li>
    <h5 id="chapter-6" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap6/" className="text-blue-600 hover:text-blue-800">Chapter 6</a>
    </h5>
    <p className="text-gray-700">This chapter introduces the standard discrete distributions: Bernoulli, binomial, Poisson, geometric, hypergeometric and negative binomial. In each case the basic properties, such as mean and variance are obtained and the R commands to obtain probabilities and cumulative probabilities are illustrated.</p>
  </li>
  <li>
    <h5 id="chapter-7" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap7/" className="text-blue-600 hover:text-blue-800">Chapter 7</a>
    </h5>
    <p className="text-gray-700">This chapter introduces standard continuous distributions: exponential, normal, gamma and beta. As in Chapter 6, here we find the means and variances and also discuss the R commands for finding various quantities for each distribution.</p>
  </li>
  <li>
    <h5 id="chapter-8" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap8/" className="text-blue-600 hover:text-blue-800">Chapter 8</a>
    </h5>
    <p className="text-gray-700">This chapter introduces the joint probability distribution for multiple random variables. It also discusses conditional and marginal distributions, conditional expectations, covariance and correlation. Finally it introduces the central limit theorem for the sum of independent random variables.</p>
  </li>
  <li>
    <h5 id="chapter-9" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap9/" className="text-blue-600 hover:text-blue-800">Chapter 9</a>
    </h5>
    <p className="text-gray-700">This chapter introduces the basic concepts of statistical inference and statistical modelling. It distinguishes between population distributions and sample statistics (quantities). The concepts of estimators and their sampling (probability) distributions are also introduced.</p>
  </li>
  <li>
    <h5 id="chapter-10" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap10/" className="text-blue-600 hover:text-blue-800">Chapter 10</a>
    </h5>
    <p className="text-gray-700">This chapter discusses three important methods for point estimation: method of moments, maximum likelihood and Bayesian methods.</p>
  </li>
  <li>
    <h5 id="chapter-11" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap11/" className="text-blue-600 hover:text-blue-800">Chapter 11</a>
    </h5>
    <p className="text-gray-700">Chapter 11 discusses techniques such as the pivoting method for interval estimation. The central limit theorem is used to derive confidence intervals for the mean parameters of binomial, Poisson and normal distributions.</p>
  </li>
  <li>
    <h5 id="chapter-12" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap12/" className="text-blue-600 hover:text-blue-800">Chapter 12</a>
    </h5>
    <p className="text-gray-700">Chapter 12 discusses testing of statistical hypotheses called null and alternative hypothesis. Definintions of many related keywords, e.g. critical region, types of errors while testing statistical hypothesis, power function, sensitivity and specificity are provided.</p>
  </li>
  <li>
    <h5 id="chapter-13" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap13/" className="text-blue-600 hover:text-blue-800">Chapter 13</a>
    </h5>
    <p className="text-gray-700">Chapter 13 starts the Part III of this book on advanced distribution theory and probability. It discusses the moment generating function, cumulant generating function and probability generating function for discrete random variables.</p>
  </li>
  <li>
    <h5 id="chapter-14" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap14/" className="text-blue-600 hover:text-blue-800">Chapter 14</a>
    </h5>
    <p className="text-gray-700">Chapter 14 is devoted to deriving distributions of transformed random variables in one and multiple dimensions. These techniques are used to derive sampling distributions of quantities of statstical interests while sampling from the normal distribution.</p>
  </li>
  <li>
    <h5 id="chapter-15" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap15/" className="text-blue-600 hover:text-blue-800">Chapter 15</a>
    </h5>
    <p className="text-gray-700">Chapter 15 discusses bivariate and multivariate probability distributions. In particular, it discusses the marginal and conditional distributions associated with bivariate and multivariate normal distributions. It also discusses the joint moment generating function for the multivariate normal distribution.</p>
  </li>
  <li>
    <h5 id="chapter-16" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap16/" className="text-blue-600 hover:text-blue-800">Chapter 16</a>
    </h5>
    <p className="text-gray-700">Chapter 16 discusses asymptotic theories which are often required to guarantee good properties of statistical inference techniques. Three types of modes of convergence in statistics are discussed and illustrated with the help of simulation using R routines.</p>
  </li>
  <li>
    <h5 id="chapter-17" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap17/" className="text-blue-600 hover:text-blue-800">Chapter 17</a>
    </h5>
    <p className="text-gray-700">Chapter 17 kicks off Part V of the book on introduction to statistical modelling. It discusses the concepts related to simple regression modelling with many practical examples. The concepts of estimation, inference and predictions are discussed along with the required theoretical derivations.</p>
  </li>
  <li>
    <h5 id="chapter-18" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap18/" className="text-blue-600 hover:text-blue-800">Chapter 18</a>
    </h5>
    <p className="text-gray-700">Chapter 18 generalises the simple regression techniques of the previous chapter to the case where there are multiple possible explanatory variables. This chapter describes the foundational basics for machine learning where the simple and multiple regression techniques are exploited heavily for practical problems.</p>
  </li>
  <li>
    <h5 id="chapter-19" className="text-xl font-semibold mb-2">
      <a href="/bookipsrdbs/chap19/" className="text-blue-600 hover:text-blue-800">Chapter 19</a>
    </h5>
    <p className="text-gray-700">Finally, Chapter 19 introduces the concepts of analysis of variance which is a seen as a general model comparison technique where there are categorical explanatory variables. Theoretical generalisation of the techniques from the two preceding chapters are included and so are illustrations using R.</p>
  </li>
</ul>

                      </div>
                    </div>
                    </div>
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

export default BookipsrdbsPage;
