---
title: Bayesian modeling for areal unit data
linktitle: Chapter 10
cms_exclude: true

summary: 

date: 2021-08-21
type: book

weight: 100

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

<a href="../Rcode/Chapter10.html"> R code for reproducing the examples in Chapter 10. </a>

 This chapter discusses Bayesian models for both areal and temporal areal  data. As areal unit data are often discrete
counts, this chapter first provides a gentle introduction to the generalized linear models (GLM).  The linear predictor in the
GLM is then allowed to accommodate CAR models for areal only data and then temporally  varying  CAR models suitable for
temporal areal  unit data. Several models, such as the BYM model and the Leroux model, 
based on the <i>CARBayes </i> and  <i>CARBayesST </i> packages are discussed. These  and a few alternative models
based on bespoke code written in  <i>INLA</i> are made available through the <i>bmstdr</i> wrapper function
<i>Bcartime</i>.
Model fitting, comparison and validation are illustrated using the Covid-19 mortality data sets <i>engtotals</i> and <i>engdeaths </i>
present in the  <i>bmstdr</i> package. 
