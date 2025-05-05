import ChapterLayout from '@/components/books/ChapterLayout';

export default function Chapter11() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={11}>
      
      <p className="text-gray-600 mb-6">
        Parallel to Chapter 8, this chapter showcases four examples of areal and temporal areal unit data sets. Click the links below to see the R-code for the examples.
      </p>

      <p>Assessing childhood vaccination coverage in Kenya</p>
      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <img src="/bookbmstdr/chap11images/sdrandomeffectmap.png" alt="sdrandomeffectmap.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/randomeffectmap.png" alt="randomeffectmap.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/primarymap.png" alt="primarymap.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/Observed_vaccination_rate.png" alt="Observed_vaccination_rate.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/cov95map.png" alt="cov95map.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/cov80map.png" alt="cov80map.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
      </div>

      <p>Assessing trend in cancer rates in the USA</p>
      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <img src="/bookbmstdr/chap11images/uscancerfits.png" alt="uscancerfits.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/uscancer_rate.png" alt="uscancer_rate.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/unemployment.png" alt="unemployment.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/percentage_of_white.png" alt="percentage_of_white.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/obsd_SMR_10.png" alt="obsd_SMR_10.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
      </div>

      <p>Assessing trend in child poverty in London</p>
      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <img src="/bookbmstdr/chap11images/v2_smr_england_07-11.png" alt="v2_smr_england_07-11.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/smr_england_07-11.png" alt="smr_england_07-11.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/smr_eng_boxplot.png" alt="smr_eng_boxplot.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/local_structures.png" alt="local_structures.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
      </div>

      <p>Localized modeling of hospitalization data from England</p>
      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <img src="/bookbmstdr/chap11images/tsplot_poverty.png" alt="tsplot_poverty.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/pairs_logit.png" alt="pairs_logit.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/london_poverty.png" alt="london_poverty.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/london_poverty_continuous.png" alt="london_poverty_continuous.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <img src="/bookbmstdr/chap11images/fitted_london_poverty.png" alt="fitted_london_poverty.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
      </div>
    </ChapterLayout>
  );
}
