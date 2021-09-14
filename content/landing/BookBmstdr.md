---
title: "Bayesian Modeling of Spatio-Temporal Data with R"  # Add a page title.
subtitle: Text book, Chapman and Hall (2021, in press).   

summary: "This is the landing page for my new book"  # Add a page description.
date: "2021-08-01T00:00:00Z"  # Add today's date.
type: "widget_page"  # Page type is a Widget Page
---


<h2>  Book Description </h2>

<p>
  Applied sciences, both physical and social,  such as atmospheric, biological, climate, demographic, economic, ecological, environmental, oceanic and political,  routinely gather large volumes of spatial and spatio-temporal data in order to make wide ranging inference and prediction. Ideally such   inferential tasks should be  approached through modeling as modeling automatically aids in estimation of uncertainties in all conclusions drawn from such data. Unified Bayesian modeling, implemented through user friendly software packages, provides a crucial key to unlocking the full power of these methods for solving challenging practical problems.
</p>
  <p> 
Keeping the applied scientists  in mind, this book presents most of the modeling with the help of R commands written in a purposefully developed <b> R</b> package to  facilitate spatio-temporal modeling. However, the presentation in the book does not lose sight of mathematical and statistical rigor as it presents the underlying theories of Bayesian inference and computation in stand alone chapters in the first part which would be appealing to  mathematics/statistics major final year undergraduate or post-graduate students who are in search of such modeling.
</p>


<ol> 
  <li> Sahu, S. K.  (2021a) <a href="https://www.soton.ac.uk/~sks/bmbook/bmstdr.pdf"> Bayesian modeling of spatio-temporal data with R. </a>  Chapman and Hall (in press).
   <b>  Download size 40MB. </b>
<li> Sahu, S. K.  (2021b) <a href="https://www.soton.ac.uk/~sks/bmbook/bmstdr-vignette.html"> bmstdr: Bayesian Modeling of Spatio-Temporal Data with R. </a>
  This is the companion R package. <a href="#bmstdr"> Please see below for installation and download information. </a>
</ol>  



<h2>  Key features of the book: </h2>



<ul>
<li> Accessible detailed discussion of a majority of all aspects of Bayesian methods and computations with worked examples, numerical illustrations and exercises with which the reader should be able to experience the methodologies live.
</li> 
<li> A spatial statistics jargon buster chapter that enables the reader to build up a vocabulary without getting clouded in modeling and technicalities in model fitting.
</li>
<li> Computation and modeling illustrations are provided with the help of the dedicated R package <b> bmstdr</b>. The look and feel of the model fitting commands and their output resemble that of the <b> lm </b> command in <b> R</b>. A novice user, who is  otherwise familiar with the <b> lm</b> command, will quickly be able to perform spatio-temporal modeling using well-known packages and platforms such <b> rstan, INLA, spBayes, spTimer, spTDyn, CARBayes </b> and  <b> CARBayesST. </b>
  </li>
  
<li> Included are <b> R </b> code notes detailing the algorithms used to produce all the tables and figures. An online supplement presents the necessary data and the full code for reproducing these results.
  </li>
<li> Two dedicated chapters discuss practical examples  of spatio-temporal modeling of point referenced and areal unit data. Taken from a variety of disciplines all illustrations are practical data driven rather than simulation based. 
  </li>
<li> Throughout, the emphasis has been on validating models by splitting data into test and training sets following on the philosophy of machine learning and data science. The last chapter consolidates this connection formally by bringing in the Gaussian process based machine learning into the context of the topics  presented in the book.   
  </li>
</ul>

<p>
This book is designed to make spatio-temporal modeling and analysis accessible and understandable to a wide audience from bachelors, masters and PhD students to researchers, from mathematicians and statisticians to practitioners in applied sciences.
By avoiding hard core mathematics and calculus, this book aims to be a bridge that removes the statistical knowledge gap from among the applied scientists. 
</p>




<h2>  Table of Contents </h2>

<ol>
  <li>  <a href="Rcode/Chapter1.html"> Examples of spatio-temporal data </a>
    <p>
    Chapter 1 introduces the main data sets analyzed in this book. The example data sets are categorized in two
broad types: point referenced data and areal unit data.
The examples of the first type includes air pollution data from the state of New York, England and Wales and also a
sub region in the Eastern United States east of the Mississippi river. Other examples include
precipitation volume data from rain-gauges situated in the Hubbard Brook experimental forest in New Hampshire, USA and
satellite recorded ocean chlorophyll levels and sea surface temperature and also another one on
measurements of ocean temperature and salinity levels from  roaming Argo floats in the North Atlantic Ocean. 
The areal unit data sets include  Covid-19 mortality in England,  vaccination coverage in Kenya, annual cancer rates in the USA,
hospitalization rates in England and child poverty in London. For each data set a map of the study region is drawn and
    modeling objectives are stated.
    
<li> <a href="Rcode/Chapter2.html"> Jargon of spatial and spatio-temporal modeling </a>
      <p>
	
This chapter introduces the main keywords and concepts we often encounter in spatial and
spatio-temporal modeling. Written from a beginner reader's point of view,  it explains the basic concepts of
stochastic processes, stationarity, variogram,  isotropy, Mat\`{e}rn covariance function, Gaussian Processes,
space-time covariance function,  Kriging, auto-correlation, Moran's I and Geary's C,
internal and external standardization,  spatial smoothers, CAR models and point processes. 
Detailed examples are provided to illustrate the concepts. Longer discussions are provided to understand the
roles played by the two parameters (decay and smoothness) of a  Mat\`{e}rn correlation  function. 
For areal unit data  the terms internal and external standardization are discussed in detail so that the
basic concepts of disease mapping are understood before undertaking the modeling tasks. 

      
<li>  <a href="Rcode/Chapter3.html"> Exploratory data analysis methods </a>
<p>
  This chapter emphasizes the need to carry out Exploratory Data Analysis (EDA) before embarking on any modeling
endeavor. EDA techniques introduced include non-spatial techniques such as histogram, pairwise scatter plots;
spatial methods such as variogram and Kriging; and temporal exploration such as time series plots.  
  In particular, the chapter  explores the following four data sets which are provided in the <i>bmstdr </i> package.
  <ol>
 <li> <i> nyspatial </i>:  point referenced spatial air pollution data from New York, 
<li>  <i> nysptime:</i>  point referenced spatio-temporal air pollution data from New York, 
<li> <i>engtotals:</i> areal unit data on Covid-19 mortality in England,
<li> <i> engdeaths:</i> areal unit weekly temporal data on Covid-19 mortality in England, 
</ol>
  Familiarity of these data sets is crucial for understanding the modeling performed in the  later chapters.
  
  <li>   Bayesian inference methods
    <p>
  Presented in a stand alone fashion,  this chapter describes the
main ideas of Bayesian inference needed in the rest of the book. Starting from the Bayes theorem in
probability it discusses prior and posterior distributions, point and interval estimation, prior and
posterior predictive distribution for model checking, hypothesis testing and Bayesian  model choice statistics
such as the Deviance Information Criteria (DIC) and  Watanabe Information Criteria (WAIC).
<p>
A simple conjugate normal-normal example is used to illustrate the methods and  interpretations of,
and the background intuition behind,  the results. All mathematical derivations are included and the
level of mathematical difficulty is suitable for a final year
undergraduate student majoring in mathematics/statistics or a post-graduate student with some background in
these or a related subject. Theoretical exercises are provided to check understanding. However, it is not necessary to learn all
the derivations to understand the modeling presented in the subsequent chapters as commentary has been provided to
interpret the results from a practical view point.

<li>   <a href="Rcode/Chapter5.html">  Bayesian computation methods</a>
  <p>
This chapter introduces the underlying concepts behind the powerful and popular computation methods used to make
Bayesian inference for complex but parametric modeling problems. Presented with two simple running examples the chapter
defines the methods of Monte Carlo, importance sampling, rejection sampling, Markov chain, Metropolis-Hastings algorithm, Gibbs sampler,
Hamiltonian Monte Carlo and  integrated nested Laplace approximation. These methods are illustrated using 
<i> R</i> commands  in the <i> bmstdr</i> package and the results are  compared with the exact theoretical and approximate
results using numerical integration. The topics of Markov chain Monte Carlo (MCMC): convergence,
diagnostics, run length and the number of chains are discussed from a practical implementation view point.
Exact and MCMC estimated  values of Bayesian model choice criteria such as the DIC and WAIC for a simple normal-normal
example are compared.  Exercises are provided to check understanding. 

  
<li> <a href="Rcode/Chapter6.html"> Bayesian modeling for point referenced spatial data</a>
  <p>
This chapter introduces the general topic of practical Bayesian modeling and discusses its advantages over procedure based
methods. The chapter discusses theoretical results for a simple linear regression model and also for a spatial model with known correlation
parameter for point referenced data. These `exactly' computable models are treated as the starting  straw models
in the subsequent model comparison exercises. More advanced models, e.g.,  with nugget effects and unknown
spatial correlation,  for point referenced spatial data are then introduced  and their implementations using the packages
<i>spBayes,  rstan, INLA </i> are discussed. Introductions are provided for writing
code from scratch with these packages. The <i>bmstdr </i> package command <i>Bspatial </i> for fitting using
any of these packages, without the need to write package specific code,  is introduced and illustrated.   This chapter also defines the ideas
of model validation using four important statistics: root mean square error, mean absolute error, continuous ranked
  probability score and coverage. All these statistics are illustrated using the <i>nyspatial</i> data set.
  
<li>  <a href="Rcode/Chapter7.html"> Bayesian modeling for point referenced spatio-temporal data</a>
  
This is the main methodological chapter which discusses spatio-temporal modeling for point referenced continuous  data.
As in the preceding  chapter  it obtains exact theoretical results for a simple separable spatio-temporal model which serves as the
base line for model comparison purposes. More complex models, requiring advanced computation methods,  are introduced gradually.
Various models such as the independent GP based model, autoregressive model, dynamic model and the Gaussian predictive process based model are
fitted and compared using the <i>Bsptime </i> command in the   <i>bmstdr </i> package. The user does not need to directly code with the underlying
packages such as <i>spTimer,  rstan,  INLA </i> and <i>spBayes </i>. The <i>nysptime</i> data set is used as a running example
to illustrate all the methods. 

<li> Practical examples of point referenced data modeling
  <p>
  This chapter showcases spatio-temporal modeling for point  referenced data using
five practical examples. The examples highlight the practical use of
such modeling and extend the methodologies where necessary. The examples
build on  the basic concepts introduced  in the earlier chapters,  especially
the previous chapter,  on spatio-temporal modeling. The example data sets  are:
    <ol>
      <li> <a href="Rcode/Chap8_ewpollution.html">Estimating annual average air pollution in England and Wales</a>
      <li> <a href="Rcode/Chap8_uspollution.html">Assessing probability of non-compliance in air pollution </a>
      <li><a href="Rcode/Chap8_rainfall.html">  Analyzing precipitation data from the Hubbard Experimental
Forest </a>
      <li> <a href="Rcode/Chap8_ocean_chl.html">Assessing annual trends in ocean chlorophyll levels</a>
      <li> <a href="Rcode/Chap8_Argo.html"> Modeling temperature data from roaming ocean Argo floats </a>
    </ol>
    <p> 
    All the examples illustrate calculation of  spatio-temporal statistics, e.g. annual levels from daily observations, trends in
annual levels along with their uncertainties. Commentary has been provided to reproduce the results and the  online supplement contains the
full code.
  <li> <a href="Rcode/Chapter9.html"> Bayesian forecasting for point referenced data</a>
   <p> 
The topic of forecasting is discussed  in this chapter.  Several easy to use and scalable
forecasting methods are presented for Gaussian data.  The first of these is an exact Bayesian method
based on the separable spatio-temporal model discussed in Chapter 7. In this case we  evaluate
the exact forecast estimates from the  exact forecasting distribution and illustrate with the
<i>nyspitme </i> data set. As an alternative to the exact method,  we illustrate with  the
built-in forecasting method in the  <i>spTimer </i> package. We also discuss  several forecasting
relevant statistics and diagrams such as the hit and false alarm  rates,
sharpness diagram, probability integral transform diagram and a marginal calibration plot. 
We compare the forecasting methods using daily ozone pollution data in the eastern United States
for a two week period in July 2010.

<li>  <a href="Rcode/Chapter10.html"> Bayesian modeling for areal unit data</a>
  <p> 
  This chapter discusses Bayesian models for both areal and temporal areal  data. As areal unit data are often discrete
counts, this chapter first provides a gentle introduction to the generalized linear models (GLM).  The linear predictor in the
GLM is then allowed to accommodate CAR models for areal only data and then temporally  varying  CAR models suitable for
temporal areal  unit data. Several models, such as the BYM model and the Leroux model, 
based on the <i>CARBayes </i> and  <i>CARBayesST </i> packages are discussed. These  and a few alternative models
based on bespoke code written in  <i>INLA</i> are made available through the <i>bmstdr</i> wrapper function
<i>Bcartime</i>.
Model fitting, comparison and validation are illustrated using the Covid-19 mortality data sets <i>engtotals</i> and <i>engdeaths </i>
present in the  <i>bmstdr</i> package. 

  <li> Further examples of areal data modeling
    <p>
      Parallel to Chapter 8, this chapter showcases four examples of areal and temporal areal unit data sets. The examples are on: 
    <ol>
      <li> <a href="Rcode/Chap11_Kenya.html"> Assessing childhood vaccination coverage in Kenya </a>
      <li>  <a href="Rcode/Chap11_USA.html"> Assessing trend in cancer rates in the USA </a>
      <li>  <a href="Rcode/Chap11_eng.html"> Localized modeling of hospitalization data from England </a>
	<li> <a href="Rcode/Chap11_london.html"> Assessing trend in child poverty in London </a>
    </ol>
    <p>
    All the model fitting  is done using the  <i>Bcartime</i> model fitting function in the  <i>bmstdr</i> package.
The fitted model object is then explored for making several types of inference required
in different practical settings. The full version of the
code lines for model fitting and further investigations   are provided in an online supplement which allows
the reader  to reproduce all the results and graphs illustrated here.
    
<li> Gaussian processes for data science and other applications
	<p> 
	This  chapter aims to present GP based models for machine learning showing  an
immediate connection between the GP based regression models presented in the
earlier chapters. The chapter highlights the  equivalent
correspondences between the different terminologies used in the fields of mainstream statistics and data science.
For example, estimation (and prediction)  is generically termed as `learning' in data science.
The chapter  further elaborates and use these synergies to build bridges between the two fields - more importantly between
what has been presented in the earlier chapters of this book and relevant parts of machine learning. 
The chapter also discusses the use  of GP in Bayesian calibration of computer codes. 


</ol>
<ul>
  <li> Appendix A: Statistical densities used in the book
  <li>Appendix B: Answers to selected exercises
  </ul>  

