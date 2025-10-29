createNormal =
function(mu = 0, sd = 1)
{
   
   sample =
     function(num = 1)
        rnorm(num, mu, sd)

   shift =
     function(to)
        mu <<- to

   scale =
     function(by)
         sd <<- by
		  shift =
     function(to)
        mu <<- to

   scale =
     function(by)
         sd <<- by

   list(sample = sample, shift = shift, scale = scale)
}
