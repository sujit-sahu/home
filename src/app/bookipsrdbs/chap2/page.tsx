import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter2() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={2}>
      <p className="text-gray-600 mb-6">
      This chapter introduces the R software package and discusses how to get started with many examples. It revisits some of the data sets already mentioned in Chapter 1 by drawing 
        simple graphs and obtaining summary statistics. The data sets are also provided in <a href="/ipsRdbsdata.zip" className="text-blue-600 hover:text-blue-800">this zip file. </a> 
         </p>
             Here is {' '}
                  <a href="/vignette_full.html" className="text-blue-600 hover:text-blue-800"> a R package vignette file  to get started </a>.

      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap2images/butterfly.png"
          alt="butterfly.png"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap2images/cover.png"
          alt="cover.png"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
