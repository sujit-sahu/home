---

# Documentation: https://wowchemy.com/docs/page-builder/
widget: pages

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 40

title: R package 'bmstdr'

subtitle: The package source is available  from <a href="https://CRAN.R-project.org/package=bmstdr"> CRAN  </a> and <a href="https://github.com/sujit-sahu/bmstdr/"> github.  </a> Here is   <a href="/bmbook/bmstdr-full_vignette.html"> a full version of the vignette.</a>

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
<li> Please install the package directly from CRAN.

```{r source, echo=TRUE, eval=FALSE}
install.packages("bmstdr", dependencies = TRUE)
```

<li> There is a long list of dependent packages that may need to be installed on your computer. You may find   <a href="/bmbook/install-bmstdr.R"> the commands in this R file </a> useful to install those packages.

<li>  Development version of the package can be installed from github using the <b> R </b> command:

```{r source, echo=TRUE, eval=FALSE}
devtools::install_github("sujit-sahu/bmstdr", build_vignettes = TRUE)
```

<li> You may check the installation:

```{r source, echo=TRUE, eval=FALSE}
library(bmstdr)
ls("package:bmstdr")
browseVignettes('bmstdr')
```

<li>
<h2>
<font color="#FF00FF" face="arial" size="5"> Here is   <a href="/bmbook/bmstdr-full_vignette.html"> a full version of the vignette.</a> This version has not been distributed with the package because of file size limitation in CRAN.</a> </font>
</h2>

<li> <a href="/bmbook/bmstdr_0.3.0.manual.pdf"> A pdf version of the manual </a> is also available. </li>

<li>
<font color="#FF00FF" face="arial" size="5"> Here is   <a href="/bmbook/bmstdr_poster.pdf"> a conference poster for bmstdr.</a>
</li>



</ol>


