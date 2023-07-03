---
title: Bayesian forecasting for point referenced data
linktitle: Chapter 9
cms_exclude: true

summary: 

date: 2022-03-30
type: book

weight: 90

# View.
#   1 = List
#   2 = Compact
#   3 = Card
#   4 = Citation
view: 3

# Optional header image (relative to `static/media/` folder).
header:
  caption: ""
  image: ""
---

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

<p> 

<a href="../Rcode/Chapter9.html"> R code for reproducing the examples in Chapter 9. </a>

{{< gallery album="chap9figures" >}}


