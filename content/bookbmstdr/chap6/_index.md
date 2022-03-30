---
title: Bayesian modeling for point referenced spatial data
linktitle: Chapter 6
cms_exclude: true

summary: 

date: 2022-03-30
type: book

weight: 60

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
  
<p>

<a href="../Rcode/Chapter6.html"> R code for reproducing the examples in Chapter 6. </a>


{{< gallery album="chap6figures" >}}


