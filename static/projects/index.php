<?php
 require("../my.php");
  my_Header('/projects/','Research projects'); 
?>


<BODY BACKGROUND="/images/background.jpg" >

<font face="helvetica">

<center> 

<p>
<IMG src="../pics/1x1.gif" bgcolor="#a0a0a0" width=90% height=2>
<p>

<h2>
<font color="#FF00FF" face="arial" size="5"> Bayesian modelling of spatio-temporal data with R</font>
</h2>



</center>


<p>
<IMG src="../pics/1x1.gif" bgcolor="#a0a0a0" width=90% height=2>
<p>

<h2>
Prospective projects for all students  at <font color="#FF0000" face="arial"> BSc, </font>
 <font color="#008080" face="arial"> MSc </font>
 and
<font color="#000080" face="arial">  PhD </font> levels.
</h2>

<p>
 Observations that vary in both space and time are called spatio-temporal data. Example data set includes air pollution,
 precipitation, temperature, disease specific (Covid-19) case and death rates, brain imaging,
 ocean characteristics such as temperature,  salinity and chlorophyll levels.

<p> Data science techniques are to be used to extract the scientific information, e.g. long term trend in global
warming, hidden in these large data sets. Example of data science techniques include regression modelling and validation methods.
Intuitively one can expect that spatio-temporal regression models that exploit the spatio-temporal dependence in the data
will perform better than regression models with iid error distribution assumption.   

<h2>
If you are interested in:
</h2>
<ul>
<li> <font color="#008000" face="arial" size="5"> environmental statistics </font> you will have the opportunity to learn modelling of large climate and air pollution data sets. You can aim  to  <font color=#008080" face="arial">`go green' </font>  with Prof Sahu! </i>
<p>
 A third year Mathematics BSc student, Ms Jinran Zhan,  worked on a very similar project in 2018-2019 and
based on the project it has been possible to publish the research paper: <a href="Precip_JSM_proceedings_2020.pdf"> Spatio-temporal Bayesian modeling of precipitation using rain gauge data from the Hubbard Brook Experimental Forest, New Hampshire, USA. </a>


<li> <font color="#0000FF" face="arial" size="5">  data science </font> you will learn spatio-temporal regression models 
that outperfom independent error regression model in out of sample validation.
 This is indeed true for most data sets and you will have the opportunity to experience these results yourself. 
You will  have ample chance to learn   <i> to swim with data. </i>

<p>  During 2019-2020 
Witaya Bamrungpong,  a student in our MSc in
Data & Decision Analytics worked on <a href="Presentation_Witaya_31411029.pdf"> data science
project on air pollution modelling </a> which secured him the <b> top prize </b> from Boeing for 19/20 CORMSIS MSc Maths OR students. 


<li> <font color="#800080" face="arial" size="5"> medical statistics,  </font> you will learn to perform Bayesian disease mapping for analysing live coronavirus pandemic  data. A research paper jointly written with Prof Dankmar Boehning is <a href="sptime_covid.pdf"> also available.</a>  
</ul>


<h2>
Student testimonial: 
</h2>
Here is a direct quote from a BSc final year student in 2020-2021: 
<p>  
"I loved learning about and exploring different modelling techniques in Statistics. I can confidently say that it was the best module I have taken in my fourth year studying BSc Mathematics with Spanish. <p> 
At times it was really challenging but my supervisor Sujit Sahu guided me patiently and effectively which helped me progress with my research, thus making it fun, engaging and very enjoyable. <p>
It was a great pleasure to work with Sujit and I greatly appreciate the work he has put in. The constant support provided encouraged me to aspire for a deeper understanding of the topic."


<h2>
If you are thinking of studying for PhD please email me.  You may also want to see my pages
 on <a href="../research/"> research publication </a>  and <a href="../phdstudents/"> supervision record.<a> 
</h2>

<p>
<IMG src="../pics/1x1.gif" bgcolor="#a0a0a0" width=90% height=2>
<p>

Getting started with each project is easy with the R-package <b> bmstdr </b> developed by  Prof Sahu.  The projects will also benefit from an accessible textbook currently being written by Prof Sahu on the same topic.
 The projects will suit students with a wide range of interests in theory and application at all levels:
<font color="#FF0000" face="arial"> BSc, </font>
 <font color="#008080" face="arial"> MSc </font>
 and
<font color="#000080" face="arial">  PhD. </font> 
<ul>
<li> A mathematically strong and motivated student can develop the theory
behind the modelling so that new models can be fitted.
<li> A student with interests in data analytics and data science can
analyse a brand new spatio-temporal data set of their choice. 
<li> A student aiming to gain key skills in R programming can develop and enhance the  <b> bmstdr </b> package.
<li> It is possible to mix and match the above, i.e. theoretical development, application analytics and software development,
depending on your  own interest and dedication.   
<p>


<p>
<IMG src="../pics/1x1.gif" bgcolor="#a0a0a0" width=90% height=2>
<p>


<h2>
Practical examples from projects done by past students:
</h2> 

<ol>

<li> <h3> Number of Covid-19 deaths per million people upto September, 2020.  </h3>
<img src="covid_19_deaths.png" alt="global trend" width="800" height="500"/> 

<li> <h3> Annual percentage trend in ocean chlorophyll levels.  </h3>
<img src="space_trend_longhurst.png" alt="global trend" width="900" height="500"/> 


<li> <h3>  Average number of weekly covid deaths and levels of NO2 in England</h3>

<table border=4 cellspacing=2 cellpadding=2>
 <tr>
  <td><img src="observed_covid_death_rate.png" alt="Observed Covid death rate" width="450" height="400" /> </td>
  <td>
   <img src="mean_no2_by_LA.png" alt="Mean NO2 levels" width="450" height="400" />
  </td>
 </tr>
</table>


<li> <h3> Annual average temperature in the north Atlantic in 2003 and 
 average air pollution in New York. </h3>

<table border=4 cellspacing=2 cellpadding=2>
 <tr>
  <td><img src="temp_deep.png" alt="annual temperature" width="450" height="400" /> </td>
  <td>
   <img src="predicted_ny.png" alt="air pollution in New York" width="450" height="400" />
  </td>
 </tr>
</table>

<li> <h3>  Annual precipitation and trend map of Hubbard Brook experimental forest in New Hampshire, USA</h3>

<table border=4 cellspacing=2 cellpadding=2>
 <tr>
  <td><img src="rolling_rain2010_hbes.png" alt="rolling average" width="450" height="400" /> </td>
  <td>
   <img src="trend_wshed05-15.png" alt="trend map" width="450" height="400" />
  </td>
 </tr>
</table>

<li>  <h3> Air pollution modelling maps for eastern USA</h3>

<table border=4 cellspacing=2 cellpadding=2>
 <tr>
  <td><img src="grid_knots.png" alt="rolling average" width="450" height="400" /> </td>
  <td>
   <img src="prob_3y_06_gt85.png" alt="trend map" width="450" height="400" />
  </td>
 </tr>
</table>


<li> <h3>  Air pollution and their sd  map of England and Wales. 
</h3>
<table border=4 cellspacing=2 cellpadding=2>
 <tr>
  <td><img src="no2_la_2011.png" alt="rolling average" width="450" height="400" /> </td>
  <td>
   <img src="no2_la_2011_sd.png" alt="trend map" width="450" height="400" />
  </td>
 </tr>
</table>

</ol>

<menu> 



</menu>





<P>


<?
my_Footer('/teach/');
?>
