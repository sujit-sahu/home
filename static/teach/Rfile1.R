# Section 1.3 -------------------------------------------------
2+2

x <- 2+2
y = 2+2

ls()

x

x <- 2+3

mean(c(38, 100, 64, 43, 63, 59, 107, 52, 86, 77))

help(mean)
?mean

# Section 1.4 -------------------------------------------------
# In university computer create a math1024 folder and then a 
# data sub-folder where you keep all the files 
# Do not use spaces in sub-folder names

setwd("H:/math1024/") 
# change this to the file location of your data files (not the zip folder)
# Or in Rstudio please go through the top menu button Session and  Set Working directory

# In your own personal computer you may need something like: 
# setwd("C:/math1024/") 

## Note that these are forward slashes(/). 
## Not backward slashes in Windows! 

# Section 1.5 -------------------------------------------------
## Read the computer failure data set
cfail <- scan("compfail.txt") 
## Read the fast food data set 
ffood <- read.csv("servicetime.csv", header=T) 
# csv stands for comma separated value file 
wgain <- read.table("wtgain.txt", header=T)

bill <- read.table("billionaires.txt", header=T)

# header=T (TRUE) tells R that the f  irst row of the data file contains the column names.

## try the following if you were not able to read the data already 
path <- "http://www.personal.soton.ac.uk/sks/teach/math1024/"

cfail <- scan(paste0(path, "compfail.txt"))
ffood <- read.csv(paste0(path, "servicetime.csv"), head=T)
wgain <- read.table(paste0(path, "wtgain.txt"), head=T)
bill <- read.table(paste0(path, "billionaires.txt"), header=T)

ffood

head(ffood)

tail(ffood)

dim(ffood)

names(ffood)  # Prints the column names of the data set
ffood$AM # Prints the values in the AM column 
ffood[1,] # Prints the first row and all columns
ffood[,1] # Prints the first column and all rows 
ffood[1:2, ] # Prints the first two rows and all columns
ffood[1, 2] # Prints the first row second column entry 

wrongfood <- read.table("servicetime.csv", head=T)

# Section 1.6 -------------------------------------------------

summary(ffood)

summary(cfail)

summary(wgain)

summary(bill)

table(cfail)

var(ffood$AM) # variance of the AM data

var(c(ffood$AM, ffood$PM)) 
# variance of the AM and PM data combined

table(bill$region)

# Section 1.7 -------------------------------------------------

stem(ffood$AM)

barplot(table(cfail))

barplot(table(bill$region), col=2:6)

hist(cfail)

hist(cfail, xlab="Number of weekly computer failures")

plot(wgain$initial, wgain$final) # plot wgain$final against wgain$initial

abline(0, 1, col="red") # add a 45 degree line
# Nicer and more informative plot
plot(wgain$initial, wgain$final,xlab="Wt in Week 1", ylab="Wt in Week 12", pch="*", las=1) # relabel both axes
abline(0, 1, col="red")
title("A scatterplot of the weights in Week 12 against the weights in Week 1") # add a title

boxplot(cfail)

## Example of programming in R

boxplot(ffood)

boxplot(data=bill, wealth ~ region, col=2:6)

?par 

# Section 1.8 -------------------------------------------------
## Highlight from below 
butterfly <- function(color = 2, p1=2, p2=4) {
  theta <- seq(from=0.0, to=24 * pi, len = 2000)
  radius <- exp(cos(theta)) - p1 * cos(p2 * theta)
  radius <- radius + sin(theta/12)
  x <- radius * sin(theta)
  y <-  - radius * cos(theta)
  plot(x, y, type = "l", axes = F, xlab = "", ylab = "", col = color)
}
## Upto the above
# Then press the Run button
## If there are no error messages run the following 

butterfly(p1=20, p2=4)

butterfly(color = 6)

par(mfrow=c(2, 2))
butterfly(color = 6)
butterfly(p1=5, p2=5, color=2)
butterfly(p1=10, p2=1.5, color = "seagreen")
butterfly(p1=20, p2=4, color = "blue")

## Finish R commands for lab session 1


## Start R commands for lab session 2

# Section 2.1 -------------------------------------------------
x <- c(1, 4, 7, 10, 13)
x[1] # gives the first element of x.
x[2:4] # gives the elements x[2], x[3], x[4].
x[-(2:4)] # gives all but x[2], x[3], x[4].

y <- 5:15

x <- seq(from=1, to=13, by =3) # a better way of inputting the x above.

?seq # prints out the help file 

a1 <- c(1,3,5,6,8,21) # if you have to input irregular data.

a2 <- seq(5,25, length=5)
a3 <- c(a1,a2)
a4 <- seq(from=min(a1), to=max(a1), length=10)
a5 <- rep(2, 5)
a6 <- c(1, 3, 9)
a7 <- rep(a6, times=2)
a8 <- rep(a6, each=2)
a9 <- rep(a6, c(2, 3, 1))
cbind(a7, a8, a9) # Can you see the differences between a7, a8 and a9?


y <- matrix(1:6, nrow=3,ncol=2) # creates a 3 by 2 matrix, called y.
# You can access parts of y by calling things like:
y[1,2] # gives the first row second column entry of y
y[1,] # gives the first row of y
y[,2] # gives the second column of y and so on.

# Individual elements of vectors or matrices, or whole rows or columns of matrices may be updated
# by assigning them new values, e.g.

a1[1] <- 3

y[1,2] <- 3

y[,2] <- c(2,2, 2)

# You can do arithmetic with the matrices, for example suppose
x <- - matrix (1:6, nrow=3,ncol=2)
# Now you can simply write 

z <- x+y

# Section 2.2 -------------------------------------------------
# Create a data frame called dframe by issuing the command:
dframe <- data.frame(x=1:10, y=rnorm(10))

# You can add a new column to a data frame, dframe say, by issuing:
dframe$xy <- dframe$x * dframe$y

# Certain statistical operations on vectors result in scalars
mean(dframe$x)
var(dframe$x)

View(dframe)

myresults <- list(mean=10, sd=3.32, values=5:15)

# Section 2.3 -------------------------------------------------
citizen <- factor(c("uk", "us", "no", "in", "es", "in"))

table(citizen)

levels(citizen)

levels(bill$region) # Assuming you read the billionaire data set already.

levels(bill$region) <- c("Asia", "Europe", "Mid-East", "Other", "USA")

a1[a1>5]

bill$wealth> 5

bill$region == "A"

bill.wealth.ge5 <- bill[bill$wealth>5, ]

bill.wealth.ge5

bill.region.A <- bill[ bill$region == "A", ]

bill.region.A

x <- 1:10

x>3 & x<7

x<3 | x>7

a <- seq(1, 10, by =2)

oddrows <- bill[a, ]
## Finish R commands for lab session 2


## Start R commands for lab session 3
  
# Set working directory and then read the data set 

bill <- read.table("billionaires.txt", header=T)

# Section 3.1 -------------------------------------------------
x <- matrix(1:12, byrow=T, ncol=4) # type x to see what matrix you have got.

apply(x, 2, mean) # produces four column means of x

apply(x, 1, mean) # produces three row means of x

tapply(X=bill$wealth, INDEX=bill$region, FUN=mean)
tapply(X=bill$wealth, INDEX=bill$region, FUN=sd)

# Rounding the numbers make those look nice 
round(tapply(X=bill$wealth, INDEX=bill$region, FUN=mean), 2)

?tapply 


# Section 3.2 -------------------------------------------------

hist(bill$wealth) # produces a dull looking plot.

hist(bill$wealth, nclass=20) # produces a more detailed plot.

hist(bill$wealth, nclass=20, xlab="Wealth", main="Histogram of wealth of billionaires") 
#produces a more detailed plot.

boxplot(data=bill, wealth~region, col=2:6) # Side by side box plots of wealth by region.

boxplot(data=bill, age~region, col=2:6) # Age distribution of the wealthy by region.

plot(bill$age, bill$wealth) # Very dull plot.

plot(bill$age, bill$wealth, xlab="Age", ylab="Wealth", pch="*") # A bit better.
plot(bill$age, bill$wealth, xlab="Age", ylab="Wealth", type="n") # Lays the plot area but does not plot.

text(bill$age, bill$wealth, labels=bill$region, cex=0.7, col=2:6) 
# Adds the points to the empty plot. Definitely a better looking plot where we can grasp a bit more information.

install.packages("ggplot2")

library(ggplot2)

levels(bill$region) <- c("Asia", "Europe", "Mid-East", "Other", "USA")

g1 <- ggplot(data=bill, aes(x=age, y=wealth)) +
  geom_point(aes(col=region, size=wealth)) 
g1

g2 <- g1 + geom_smooth(method="loess", se=F)
g2

g3 <- g2 + labs(subtitle="Wealth vs Age of Billionaires",   
                x="Age",  y="Wealth (Billion US $)", 
                caption = "Source: Fortune Magazine, 1992.")

g3


# Section 3.3 -------------------------------------------------
errors <- read.csv("2019ageguess.csv", head=T)
head(errors)
boxplot(data=errors, abs_error~sex, col=2:3)
