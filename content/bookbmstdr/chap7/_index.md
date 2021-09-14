---
title: Bayesian modeling for point referenced spatio-temporal data
linktitle: Chapter 7
cms_exclude: true

summary: 

date: 2021-08-21
type: book

weight: 70

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

<a href="../Rcode/Chapter7.html"> R code for reproducing the examples in Chapter 7. </a>
 
This is the main methodological chapter which discusses spatio-temporal modeling for point referenced continuous  data.
As in the preceding  chapter  it obtains exact theoretical results for a simple separable spatio-temporal model which serves as the
base line for model comparison purposes. More complex models, requiring advanced computation methods,  are introduced gradually.
Various models such as the independent GP based model, autoregressive model, dynamic model and the Gaussian predictive process based model are
fitted and compared using the <i>Bsptime </i> command in the   <i>bmstdr </i> package. The user does not need to directly code with the underlying
packages such as <i>spTimer,  rstan,  INLA </i> and <i>spBayes </i>. The <i>nysptime</i> data set is used as a running example
to illustrate all the methods. 

    


