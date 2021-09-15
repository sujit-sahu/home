# Update R to the latest version
# Depending on your operating system please install the correct package
# Windows
install.packages("https://www.soton.ac.uk/~sks/bmbook/bmstdr_0.1.2.zip", repos=NULL)
# Mac
install.packages("https://www.soton.ac.uk/~sks/bmbook/bmstdr_0.1.2.tgz", repos=NULL)
# Linux Ubuntu
install.packages("https://www.soton.ac.uk/~sks/bmbook/bmstdr_0.1.2_R_x86_64-pc-linux-gnu.tar.gz", repos=NULL)
# file.path(tempdir(), 'inla.graph')
# Please check the installation
library(bmstdr)
ls("package:bmstdr")
library(databmstdr)
ls("package:databmstdr")
browseVignettes()
browseVignettes('bmstdr')

## Install from source 

devtools::install_github("sujit-sahu/bmstdr", build_vignettes = TRUE)


# Installation may fail if you do not have all the packages.
# The following commands will install most of the required packages
install.packages(c("Rcpp", "spTimer", "ggplot2", "rstan", "spBayes",  "CARBayes",
                   "CARBayesST", "BH", "RcppEigen", "StanHeaders"), dependencies =T)
install.packages(c("matrixcalc", "rgdal", "spdep", "sf"),  dependencies =T)
install.packages(c("akima", "broom", "doBy", "tidyr"))
install.packages("INLA", repos=c(getOption("repos"), INLA="https://inla.r-inla-download.org/R/stable"), dep=TRUE)
# You may also need to install
install.packages(c("coda", "extraDistr", "RcppParallel", "maps",  "spTDyn", "rstantools"),
                 dependencies =T)
install.packages(c("xtable","MASS", "mnormt", "loo", "cowplot"), dependencies=T)
install.packages(c("usmap", "directlabels", "ggrepel", "ggspatial", "ggpubr", "grid", "ggsn"),
                 dependencies=T)
install.packages(c("geoR", "RColorBrewer", "gridExtra", "sptDyn"),   dependencies=T)

# Plus some other packages maybe required to be installed
