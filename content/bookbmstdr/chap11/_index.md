---
title: Further examples of areal data modeling
linktitle: Chapter 11
cms_exclude: true

summary: 

date: 2022-03-30
type: book

weight: 110

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

Parallel to Chapter 8, this chapter showcases four examples of areal and temporal areal unit data sets.
Click the links below to see the R-code for the examples. 
<ol>
<li> <a href="../Rcode/Chap11_Kenya.html"> Assessing childhood vaccination coverage in Kenya </a>

{{< gallery album="chap11figures/kenya" >}}


<li>  <a href="../Rcode/Chap11_USA.html"> Assessing trend in cancer rates in the USA </a>

{{< gallery album="chap11figures/usa" >}}

<li>  <a href="../Rcode/Chap11_eng.html"> Localized modeling of hospitalization data from England </a>

{{< gallery album="chap11figures/england_respiratory" >}}


<li> <a href="../Rcode/Chap11_london.html"> Assessing trend in child poverty in London </a>

{{< gallery album="chap11figures/london" >}}

</ol>
<p>

All the model fitting  is done using the  <i>Bcartime</i> model fitting function in the  <i>bmstdr</i> package.
The fitted model object is then explored for making several types of inference required
in different practical settings. The full version of the
code lines for model fitting and further investigations   are provided in an online supplement which allows
the reader  to reproduce all the results and graphs illustrated here.
