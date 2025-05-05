import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter8() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={8}>
      
      <p className="text-gray-600 mb-6">
      This chapter showcases spatio-temporal modeling for point referenced data using five practical examples. The examples highlight the practical use of such modeling and extend the methodologies where necessary. The examples build on the basic concepts introduced in the earlier chapters, especially the previous chapter, on spatio-temporal modeling. Click the links below to see the R-code for the examples.

Estimating annual average air pollution in England and Wales.
</p>

<p><a href="/bookbmstdr/chap8/chapter8.4" className="text-blue-600 hover:text-blue-800">Estimating annual average air pollution in England and Wales</a></p>
<div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap8images/predgridew.png" alt="predgridew.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/insideknots.png" alt="insideknots.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/2011_no2_sd.png" alt="2011_no2_sd.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/2011_no2.png" alt="2011_no2.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/allknotsew.png" alt="allknotsew.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>
<p><a href="/bookbmstdr/chap8/chapter8.4" className="text-blue-600 hover:text-blue-800">Assessing probability of non-compliance in air pollution</a></p>
<div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap8images/uso3sites.png" alt="uso3sites.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/prob99-02.png" alt="prob99-02.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/usagrid_knots.png" alt="usagrid_knots.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/prob03-06.png" alt="prob03-06.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/met_adjusted_an4thmax_97_06_base85.png" alt="met_adjusted_an4thmax_97_06_base85.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/met_adjusted_4thmax_99_05.png" alt="met_adjusted_4thmax_99_05.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/met_adjusted_3yave_99_06_base85.png" alt="met_adjusted_3yave_99_06_base85.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/met_adjusted_3ave_99_05.png" alt="met_adjusted_3ave_99_05.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/fitted_an4thmax_97_06_base85.png" alt="fitted_an4thmax_97_06_base85.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/fitted_3yave_99_06_base85.png" alt="fitted_3yave_99_06_base85.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/compliance_plot_06.png" alt="compliance_plot_06.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/compliance_plot_05.png" alt="compliance_plot_05.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>
<p><a href="/bookbmstdr/chap8/chapter8.3" className="text-blue-600 hover:text-blue-800">Analyzing precipitation data from the Hubbard Brook Experimental Forest</a></p>
<div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap8images/9a.png" alt="9a.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/9ab.png" alt="9ab.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/9b.png" alt="9b.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/allpred_rolling_rain2010_sd.png" alt="allpred_rolling_rain2010_sd.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/allpred_rolling_rain2010.png" alt="allpred_rolling_rain2010.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/ann_and_rolling.png" alt="ann_and_rolling.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/average_annual.png" alt="average_annual.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/elevation_hubbardbrook.png" alt="elevation_hubbardbrook.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/mean_var_log.png" alt="mean_var_log.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/mean_var_orig.png" alt="mean_var_orig.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/mean_var_sqrt.png" alt="mean_var_sqrt.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain_hist_orig.png" alt="rain_hist_orig.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain_hist_sqrt.png" alt="rain_hist_sqrt.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain_mean_vars.png" alt="rain_mean_vars.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain_v_elevation.png" alt="rain_v_elevation.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain_v_latitude.png" alt="rain_v_latitude.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain_v_long_lat.png" alt="rain_v_long_lat.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain_v_longitude.png" alt="rain_v_longitude.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain2001_hbes_wshed_sd.png" alt="rain2001_hbes_wshed_sd.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain2001_hbes_wshed.png" alt="rain2001_hbes_wshed.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain2011_hbes_wshed_sd.png" alt="rain2011_hbes_wshed_sd.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain2011_hbes_wshed.png" alt="rain2011_hbes_wshed.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain2015_total_sd.png" alt="rain2015_total_sd.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rain2015_total.png" alt="rain2015_total.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rainfall_phichoice.png" alt="rainfall_phichoice.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rainfall_validation.png" alt="rainfall_validation.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rolling_average_annual.png" alt="rolling_average_annual.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rolling_rain2010_hbes_wshed.png" alt="rolling_rain2010_hbes_wshed.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rolling_rain2010_hbes.png" alt="rolling_rain2010_hbes.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rolling_rain2010_sd_hbes_wshed.png" alt="rolling_rain2010_sd_hbes_wshed.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/rolling_rain2010_sd_hbes.png" alt="rolling_rain2010_sd_hbes.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/sd_trend_rolling_rain_05-15_hbes.png" alt="sd_trend_rolling_rain_05-15_hbes.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/trend_rolling_rain_05-15_hbes.png" alt="trend_rolling_rain_05-15_hbes.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/trend_wshed05-15_sd.png" alt="trend_wshed05-15_sd.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/trend_wshed05-15.png" alt="trend_wshed05-15.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>
<p><a href="/bookbmstdr/chap8/chapter8.1" className="text-blue-600 hover:text-blue-800">Modeling temperature data from roaming ocean Argo floats</a></p>
<div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap8images/temp_v_sali_scatter.png" alt="temp_v_sali_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/temp_deep.png" alt="temp_deep.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/sd_temp_deep.png" alt="sd_temp_deep.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/lon_v_temp_scatter.png" alt="lon_v_temp_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/latlon_v_temp_scatter.png" alt="latlon_v_temp_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/lon_v_sali_scatter.png" alt="lon_v_sali_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/latlon_v_salinity_scatter.png" alt="latlon_v_salinity_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/lat_v_temp_scatter.png" alt="lat_v_temp_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/lat_v_sali_scatter.png" alt="lat_v_sali_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/lat_lon_v_temp_scatter.png" alt="lat_lon_v_temp_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/lat_and_lon_v_temp_scatter.png" alt="lat_and_lon_v_temp_scatter.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/argo_float_locations_deep.png" alt="argo_float_locations_deep.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap8images/argo_float_exploratory_deep.png" alt="argo_float_exploratory_deep.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>
     </ChapterLayout>
  );
}
