# Dynamic programming for the fibonacci sequence

.Fibonacci<- c(1, 1)
  
dynFibonacci <-
function(n)
{
  curMax = length(.Fibonacci)
  if(curMax >= n)
      return(.Fibonacci[n])

  for(i in seq(curMax + 1, n)) 
     .Fibonacci[i] <<- .Fibonacci[i - 1]  + .Fibonacci[i - 2] 

  .Fibonacci[n]
}


##
dynFibonacci(4)
dynFibonacci(7)


# But global variables.
# Need to reset these for timing purposes, say

reset.dynFibonacci =
function()
  .Fibonacci <<- c(1, 1)


# Want a way to make the globals non-global so we could have two of these.

generator =
function()
{
  .Fibonacci<- c(1, 1)

   function(n) {
      curMax = length(.Fibonacci)
      if(curMax >= n)
        return(.Fibonacci[n])

      for(i in seq(curMax + 1, n)) 
        .Fibonacci[i] <<- .Fibonacci[i - 1]  + .Fibonacci[i - 2] 

      .Fibonacci[n]
    }
}

dynFibonacci = generator()

f1 = generator()
f2 = generator()

f1(2)
f1(8)
environment(f1)$.Fibonacci

environment(f2)$.Fibonacci

