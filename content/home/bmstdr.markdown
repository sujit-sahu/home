---

# Documentation: https://wowchemy.com/docs/page-builder/
widget: pages

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 40

title: R package 'bmstdr'
subtitle: The package source is available  from <a href="https://github.com/sujit-sahu/bmstdr/"> github.  </a>

# Date format for experience
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006

content:
  # Page type to display. E.g. post, talk, publication...
  page_type: pages
  # Choose how many pages you would like to display (0 = all pages)
  count: 5
  # Filter on criteria
  filters:
    author: ""
    category: ""
    tag: "bmstdr"
    exclude_featured: false
    exclude_future: false
    exclude_past: false
    publication_type: ""
  # Choose how many pages you would like to offset by
  offset: 0
  # Page order: descending (desc) or ascending (asc) date.
  order: desc

design:
  # Choose a view for the listings:
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   4 = Citation (publication only)
  view: 2
---


<ul>
<li> You can download <a href="/bmbook/install-bmstdr.R"> this R file </a> and install the package as instructed in it.
<li> Or you can install directly  in R from the commands given  below.
</ul> 

<ol>
<li> Windows binary of bmstdr:   <a href="/bmbook/bmstdr_0.1.2.zip">  bmstdr_0.1.2.zip. </a> Use the <b> R </b> command:


```r
install.packages("htps://www.sujitsahu.com/bmbook/bmstdr_0.1.2.zip", repos=NULL)
```

<li> Macos binary of bmstdr:  <a href="https://www.sujitsahu.com/bmbook/bmstdr_0.1.2.tgz">  bmstdr_0.1.2.tgz. </a> Use the <b> R </b>  command:



```r
install.packages("https://www.sujitsahu.com/bmbook/bmstdr_0.1.2.tgz", repos=NULL)
```

<li> Linux (Ubuntu) binary of bmstdr:
<a href="bmstdr_0.1.1_R_x86_64-pc-linux-gnu.tar.gz"> bmstdr_0.1.2_R_x86_64-pc-linux-gnu.tar.gz.  </a>Use the <b> R </b>  command:



```r
install.packages("https://www.sujitsahu.com/bmbook/bmstdr_0.1.2_R_x86_64-pc-linux-gnu.tar.gz", repos=NULL)
```

</ol>

<h2>
 Source version of the package can be installed from github using the <b> R </b> command:
</h2>


```r
devtools::install_github("sujit-sahu/bmstdr", build_vignettes = TRUE)
```


<h2>
<font color="#FF00FF" face="arial" size="5"> Here is a copy of the   <a href="/bmbook/bmstdr-vig_version.html"> bmstdr package vignette.</a> </font>
</h2>

