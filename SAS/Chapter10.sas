 /*------------------------------------------------------------------ */
 /*     Genetic Analysis of Complex Traits Using SAS    Chapter 10    */ 
 /*             Guilherme Rosa and Rob Tempelman                      */
 /*       Copyright(c) 2004 by SAS Institute Inc., Cary, NC, USA      */
 /*                   SAS Publications order # 59454                  */
 /*                        ISBN 1-59047-507-0                         */
 /*-------------------------------------------------------------------*/
 /*  History:  Created Oct 2004                                       */
 /*-------------------------------------------------------------------*/
 /*                                                                   */
 /* This material is provided "as is" by SAS Institute Inc.  There    */
 /* are no warranties, expressed or implied, as to merchantability or */
 /* fitness for a particular purpose regarding the materials or code  */
 /* contained herein. The Institute is not responsible for errors     */
 /* in this material as it now exists or will exist, nor does the     */
 /* Institute provide technical support for it.                       */
 /*                                                                   */
 /*-------------------------------------------------------------------*/
 

/*    Chapter 10.2.2    */

****  Output 10.1  ***;
proc iml;
 k = 3000; * Monte Carlo sample size;
  n = 120; * Total number of progeny (sample size);
   r = 32; * Number of recombinant progeny;

a1 = 1; b1 = 1; * hyperparameters;
 theta = j(k,1,0); * Vector to store the MC samples;
  a2 = r + a1; b2 = n - r + b1; * Parameters of the posterior distribution;

do i=1 to k;
 gamma1=2*rangam(0,a2);
 gamma2=2*rangam(0,b2);
 theta[i] = gamma1/(gamma1+gamma2);
end;

create sample from theta [colname={rate}];
 append from theta;
close sample;

quit;

****  Output 10.2  ***;
title1 'Posterior Distribution of the Recombination Rate';
title2 'Histogram and Kernel Density Estimation'; 
symbol c=blue interpol = join value= none width = 1;
proc capability data=sample;
 histogram rate / kernel (color=red);
run;


/*   Chapter 10.3   */

/*********************************************************************/
/*               THREE-POINT LINKAGE ANALYSIS                        */
/*  Phase-known Triple Backcross Example (Ott, 1999; pages 114-150)  */
/*  Inferences on loci order, recombination rates, and interference  */
/*    Coefficient of Coincidence restricted to the interval [0, 1]   */
/*********************************************************************/

options nodate nocenter;

proc iml;

* k1, k2, k3 and k4 obtained considering the order A-B-C;
  k1=0; k2=1; k3=2; k4=17;

* Starting points;
  order=1;
   ab=0.05; bc=0.11; ac=0.15;
    c1=(ab+bc-ac)/2; 
     c2=(ab-bc+ac)/2; 
      c3=(bc+ac-ab)/2; 
       c4=1-c1-c2-c3;
        c=(ab+bc-ac)/(2*ab*bc);
         p_old=k1*log(c1)+k2*log(c2)+k3*log(c3)+k4*log(c4);

iter=5000; * Number of samples saved for the posterior analyses;
theta=j(iter,5,0); * Vector to store the Monte Carlo samples of each parameter;

do i=1 to iter;
 do j=1 to 300; * Thinning-interval;

 r1=0.5*uniform(0); r2=0.5*uniform(0); 
  r3min=r1+r2-2*r1*r2;
   r3max=min(r1+r2,.5);
    r3=r3min+(r3max-r3min)*uniform(0); 

 c1=(r1+r2-r3)/2; 
  c2=(r1-r2+r3)/2; 
   c3=(r2+r3-r1)/2; 
    c4=1-c1-c2-c3;

 cand=1+int(3*uniform(0));
  if cand=1 then goto order1;
  if cand=2 then goto order2;
  if cand=3 then goto order3;

* Order A-B-C;
 order1:
  p_new=k1*log(c1)+k2*log(c2)+k3*log(c3)+k4*log(c4);
  if p_new-p_old > log(uniform(0)) then do;
  ab=r1; bc=r2; ac=r3;
  c=(r1+r2-r3)/(2*r1*r2);
  order=cand;
  p_old=p_new;
 end;
 goto another;

 * Order B-C-A;
 order2:
  p_new=k3*log(c1)+k1*log(c2)+k2*log(c3)+k4*log(c4);
  if p_new-p_old > log(uniform(0)) then do;
  bc=r1; ac=r2; ab=r3;
  c=(r1+r2-r3)/(2*r1*r2);
  order=cand;
  p_old=p_new;
 end;
 goto another;

 * Order B-A-C;
  order3:
  p_new=k2*log(c1)+k1*log(c2)+k3*log(c3)+k4*log(c4);
  if p_new-p_old > log(uniform(0)) then do;
  ab=r1; ac=r2; bc=r3;
  c=(r1+r2-r3)/(2*r1*r2);
  order=cand;
  p_old=p_new;
 end;
 goto another;

another:

 end;

 theta[i,1]=order;
  theta[i,2]=ab; theta[i,3]=bc;
   theta[i,4]=ac; theta[i,5]=c;

end;

theta=T(1:iter)||theta;

create MH from theta [colname={iter order ab bc ac c}];
 append from theta;
close MH;

quit;

proc print data=MH(obs=20);
run;

****  Output 10.3  ***;
proc freq data=MH;
 table order;
run;

****  Output 10.4-10.7  ***;
title1 'Recombination Rate Between Loci A and B';
title2 'Histogram and Kernel Density Estimation'; 
symbol c=blue interpol = join value= none width = 1;
proc capability data=MH;
 var ab bc ac c;
 histogram ab / kernel (color=red);
run; quit;


/*   Chapter 10.4   */


/*************************************************************/
/*                 GENETIC MAP CONSTRUCTION                  */
/*         Back-cross Progeny; Haldane Map Function          */
/*     Inferences on loci order and recombination rates      */
/*  Data set (data.txt): Columns:markers; Individuals: Rows  */
/*************************************************************/




data marker;
infile CARDS firstobs=2;
input a1-a5;
datalines;
Marker genotypes (Columns: markers: rows: individuals)
        0         0         0         0         0
        0         0         1         1         1
        0         0         0         0         0
        1         1         1         1         0
        0         0         0         0         0
        0         0         0         0         0
        1         1         0         0         0
        0         0         0         0         0
        0         0         0         0         0
        0         0         0         0         0
        0         0         0         0         0
        1         1         1         1         1
        1         1         0         0         0
        0         0         0         0         0
        0         0         0         0         0
        1         1         1         1         1
        0         0         1         1         1
        0         0         0         0         0
        0         0         1         1         1
        1         1         1         0         0
        1         1         1         1         1
        0         0         0         0         0
        0         1         1         1         1
        1         1         1         1         1
        1         1         1         1         1
        0         0         0         0         0
        1         1         1         1         1
        1         1         1         1         1
        1         1         1         1         1
        0         0         1         1         1
        1         1         1         1         1
        1         1         1         1         1
        0         0         0         0         0
        0         0         1         1         1
        1         1         1         1         1
        0         0         1         1         1
        1         1         0         0         0
        1         1         1         1         1
        0         1         1         1         1
        0         0         0         0         0
        1         1         1         1         0
        0         0         0         0         0
        0         0         0         0         0
        1         0         0         0         0
        1         1         1         1         1
        1         1         1         1         1
        0         0         0         0         0
        1         1         1         1         1
        1         1         1         1         1
        1         1         0         0         0
        1         1         1         1         1
        1         1         1         1         1
        0         0         0         0         0
        0         0         0         0         1
        1         1         1         1         1
        1         1         1         1         1
        1         1         1         1         1
        0         0         1         1         1
        0         0         0         0         0
;


proc iml;
   use work.marker;
   read all into marker;

m=marker;
 num=nrow(m); *number of individuals;
  obs=m;
   mt=m;

* obs: observed (input) matrix;
* m: mt with columns shifted according to estimated order;
* w: transition matrix;

* Map construction;
o={1, 5, 3, 4, 2};
 r={.05, .18, .02, .07};
  m=m[,o];
iter=10000;
 order=j(iter,5,0);
  rate=j(iter,4,0);
onew=j(5,1,0);
 rnew=j(4,1,0);
seq=1:5;
recomb={1 -1 0 0 0,
        0 1 -1 0 0,
        0 0 1 -1 0,
        0 0 0 1 -1};

do i=1 to iter;
do ii=1 to 10;

* Two point analysis;
do k=1 to 5;
 seq[k]=loc(o=k);
end;
mt=m[,seq];
 ww=2*mt-1;
 number=T(ww)*ww; 
  number=.5*(num-number);

w=abs(m*T(recomb));
 w=(w#T(r))+((1-w)#T(1-r));
  p=log(w); p=p[+];

onew=o;
 u1=1+int(5*uniform(0));
do;
 novo:
  u2=1+int(5*uniform(0));
  if u2=u1 then goto novo;
end;
 onew[u1]=o[u2];
  onew[u2]=o[u1];
   if onew[>:<] > onew[<:>] then onew=onew[5:1];

w=mt[,onew];
 ww=abs(w*T(recomb));
do j=1 to 4;
 xa=1+number[onew[j],onew[j+1]];
  xa=rangam(0,xa);
 xb=1+num-number[onew[j],onew[j+1]];
  xb=rangam(0,xb);
 rnew[j]=xa/(xa+xb);
end;
ww=(ww#T(rnew))+((1-ww)#T(1-rnew));
 pnew=log(ww); pnew=pnew[+];
  u=uniform(0);
 if pnew-p > log(u) then do;
  o=onew; r=rnew; m=w;
 end;

w=abs(m*T(recomb));
 w=(w#T(r))+((1-w)#T(1-r));          
  p=log(w); p=p[+];

do j=1 to 5;
 onew[j]=uniform(0);
end;
onew=rank(onew);
if onew[>:<] > onew[<:>] then onew=onew[5:1];

w=mt[,onew];
 ww=abs(w*T(recomb));
do j=1 to 4;
 xa=1+number[onew[j],onew[j+1]];
  xa=rangam(0,xa);
 xb=1+num-number[onew[j],onew[j+1]];
  xb=rangam(0,xb);
 rnew[j]=xa/(xa+xb);
end;
ww=(ww#T(rnew))+((1-ww)#T(1-rnew));
 pnew=log(ww); pnew=pnew[+];
  u=uniform(0);
 if pnew-p > log(u) then do;
  o=onew; r=rnew; m=w;
 end;

w=abs(m*T(recomb));
 w=(w#T(r))+((1-w)#T(1-r));
  p=log(w); p=p[+];

u=1+int(5*uniform(0));
 onew=o;
if u = 5 then do;
 onew[1]=o[5]; onew[5]=o[1];
end;
else do;
 onew[u]=o[u+1]; onew[u+1]=o[u];
end;
 if onew[>:<] > onew[<:>] then onew=onew[5:1];                  

w=mt[,onew];
 ww=abs(w*T(recomb));
do j=1 to 4;
 xa=1+number[onew[j],onew[j+1]];
  xa=rangam(0,xa);
 xb=1+num-number[onew[j],onew[j+1]];
  xb=rangam(0,xb);
 rnew[j]=xa/(xa+xb);
end;
ww=(ww#T(rnew))+((1-ww)#T(1-rnew));
 pnew=log(ww); pnew=pnew[+];
  u=uniform(0);
 if pnew-p > log(u) then do;
  o=onew; r=rnew; m=w;
 end;

* Conditional for recombinant rates;

do j=1 to 4;
 xa=1+number[o[j],o[j+1]];
  xa=rangam(0,xa);
 xb=1+num-number[o[j],o[j+1]];
  xb=rangam(0,xb);
 r[j]=xa/(xa+xb);
end;

end;

order[i,]=T(o);
 rate[i,]=T(r);

end;

create order from order [colname={M1 M2 M3 M4 M5}];
 append from order;
close order;

create rate from rate [colname={r12 r23 r34 r45}];
 append from rate;
close rate;

quit;

data order;
 set order;
 order=10000*M1+1000*M2+100*M3+10*M4+M5;
run;

****  Output 10.8  ***;
proc freq data=order;
 table order;
run;


/*   Chapter 10.5.1   */

/******************************************************************/
/*                          QTL ANALYSIS                          */
/*         Brassica napus example (Ferreira et al., 1995)         */
/*                F1-derived Double Haploid lines                 */
/*        105 progeny and 10 marker loci (linkage group 9)        */ 
/*                  9% of missing genotypes                       */
/*   Marker positions:                                            */
/*     0, 8.8, 20.6, 27.4, 34.2, 42.9, 53.6, 64.1, 69.2, 83.9 cM  */
/******************************************************************/


data qtl;
infile CARDS firstobs=2;
input a b c d e f g h i j k;
datalines;
Phenotypes (first column) and Marker genotypes
  3.0204      -1      -1      -1      -1      -1      -1      -1      -1     -99      -1
  2.9704      -1      -1      -1      -1     -99      -1      -1      -1      -1       1
  2.7408      -1      -1       1       1       1       1       1       1       1       1
  3.3673       1       1       1       1      -1      -1      -1      -1      -1       1
  3.1355      -1      -1      -1      -1      -1      -1      -1      -1      -1      -1
  2.6391       1       1       1       1       1       1       1       1     -99     -99
  3.1135       1       1       1       1       1       1       1       1     -99      -1
  2.9444       1       1       1       1       1       1       1       1     -99       1
  2.2513       1     -99       1       1       1       1       1     -99     -99       1
  2.3514       1       1       1       1       1       1       1       1       1       1
  3.0681      -1      -1      -1      -1      -1       1       1      -1      -1      -1
  3.1355      -1      -1      -1      -1      -1      -1     -99      -1      -1      -1
  3.1570      -1      -1      -1      -1      -1      -1     -99      -1      -1      -1
  3.0204       1       1       1       1       1       1       1       1       1      -1
  3.5115      -1      -1      -1      -1      -1      -1      -1      -1     -99      -1
  2.8904       1       1       1       1       1       1       1       1       1      -1
  2.8904       1       1       1       1       1       1     -99       1       1       1
  3.1135       1       1       1       1       1       1     -99       1       1     -99
  2.8622       1       1      -1     -99      -1      -1     -99      -1      -1      -1
  3.1987       1       1       1       1       1       1       1       1       1       1
  2.9704       1     -99       1       1       1       1       1       1       1     -99
  3.4177      -1      -1      -1       1      -1      -1      -1      -1     -99      -1
  2.8034       1      -1      -1     -99      -1      -1     -99      -1     -99       1
  2.5649       1       1       1       1       1       1     -99       1       1       1
  2.5257       1       1       1     -99       1       1       1       1       1       1
  2.8904      -1       1       1       1       1       1       1       1       1       1
  3.1987      -1      -1      -1      -1      -1      -1      -1      -1      -1      -1
  3.4965       1      -1      -1      -1      -1      -1      -1      -1      -1      -1
  2.4849       1       1       1       1       1       1     -99       1       1       1
  3.2771       1       1      -1      -1      -1      -1      -1      -1      -1      -1
  3.0681       1       1       1       1       1       1     -99       1       1       1
  2.9178       1     -99       1     -99       1       1       1       1     -99     -99
  2.9042       1       1       1       1       1       1       1       1       1       1
  3.0445       1       1       1       1       1       1       1       1       1       1
  2.9444       1       1       1       1       1       1       1       1      -1      -1
  3.0445       1       1      -1      -1      -1      -1      -1      -1      -1      -1
  2.4849       1       1       1       1     -99       1     -99       1       1     -99
  3.3142       1       1       1       1      -1      -1      -1      -1      -1      -1
  3.0204       1     -99       1       1       1       1       1       1       1       1
  3.1570     -99     -99     -99      -1      -1     -99     -99     -99     -99       1
  2.5649       1     -99       1     -99     -99     -99     -99     -99     -99      -1
  2.1401       1       1       1       1       1       1       1       1       1       1
  3.3499       1       1       1       1       1       1       1       1       1      -1
  3.1135       1       1       1       1       1       1     -99       1       1       1
  3.1463      -1      -1      -1      -1      -1      -1      -1      -1      -1      -1
  2.8332       1      -1      -1      -1       1      -1     -99      -1      -1      -1
  2.8904      -1      -1      -1      -1     -99       1     -99       1       1       1
  3.2958      -1      -1      -1      -1     -99      -1      -1      -1      -1      -1
  2.9957      -1      -1      -1      -1      -1      -1      -1      -1      -1      -1
  2.7408       1       1       1       1       1       1       1       1       1       1
  3.7955       1     -99       1       1       1      -1      -1      -1      -1      -1
  3.2189       1       1       1       1     -99       1       1       1       1      -1
  2.9444       1       1       1       1       1       1       1       1       1       1
  2.7408       1      -1       1       1       1       1       1       1       1       1
  3.0681     -99       1     -99       1       1     -99       1     -99     -99      -1
  3.4657      -1      -1     -99      -1      -1      -1      -1      -1      -1      -1
  3.2189      -1      -1      -1      -1      -1      -1      -1       1       1       1
  3.0445       1       1     -99       1       1       1       1       1       1       1
  3.4812       1       1     -99       1       1       1       1       1       1      -1
  3.5973       1       1     -99       1       1      -1      -1      -1      -1      -1
  3.1570       1       1       1       1       1       1       1       1       1      -1
  3.6376     -99      -1     -99      -1      -1      -1     -99      -1      -1      -1
  3.1355       1       1     -99      -1      -1      -1      -1      -1      -1      -1
  2.8904       1       1       1       1       1       1       1       1       1       1
  3.1781      -1      -1     -99      -1      -1      -1      -1      -1     -99      -1
  3.0082       1       1       1       1       1       1      -1      -1      -1      -1
  3.3673       1      -1       1       1       1       1       1       1       1      -1
  3.1355       1       1       1       1       1       1       1       1       1       1
  3.1355      -1      -1      -1      -1      -1      -1       1       1       1       1
  2.9957       1       1       1       1       1       1       1       1      -1      -1
-99.0000       1       1       1       1       1       1      -1      -1      -1      -1
  3.1987       1       1       1       1       1       1       1       1       1       1
  3.0910       1      -1      -1      -1      -1      -1      -1      -1      -1      -1
  3.5264      -1      -1      -1      -1      -1      -1      -1      -1      -1      -1
  3.1355       1       1       1       1       1       1       1       1       1       1
  2.6741      -1       1      -1       1       1       1       1       1       1       1
  3.0681      -1      -1      -1      -1      -1      -1       1       1       1       1
  3.0445       1       1       1       1       1       1       1       1       1     -99
  3.0204      -1      -1       1       1     -99       1       1       1       1       1
  3.0910      -1      -1      -1       1     -99       1      -1       1       1       1
  2.9704      -1      -1      -1     -99      -1      -1      -1      -1      -1      -1
  3.2189      -1      -1      -1      -1      -1       1       1       1       1       1
  3.1781       1     -99       1       1       1      -1      -1     -99      -1      -1
  3.3499       1       1       1       1       1      -1      -1      -1      -1      -1
  2.9178      -1     -99      -1      -1      -1     -99       1     -99     -99       1
  2.8622       1       1       1       1       1       1       1       1       1       1
  2.9704       1       1       1       1       1       1       1       1       1      -1
  2.3979      -1      -1      -1       1       1       1       1       1       1       1
  2.9178       1       1       1       1       1       1      -1       1       1       1
  2.8622      -1      -1       1       1       1       1      -1       1       1       1
  3.0445      -1      -1      -1      -1     -99      -1      -1      -1      -1      -1
  2.8904       1       1       1       1       1       1       1       1       1       1
  3.3673       1       1       1       1       1       1       1       1      -1      -1
  2.6391       1       1       1       1       1       1       1       1       1       1
  3.0681      -1     -99      -1      -1      -1      -1      -1       1       1       1
  3.3844      -1      -1      -1      -1      -1      -1      -1      -1      -1      -1
  2.6741       1       1       1       1       1       1       1       1       1       1
  3.3499      -1      -1      -1     -99      -1      -1      -1      -1      -1      -1
  3.2958      -1     -99     -99     -99      -1      -1     -99     -99     -99      -1
  3.1135       1       1       1      -1       1       1       1      -1      -1      -1
  3.3844      -1      -1      -1      -1      -1      -1       1      -1      -1      -1
  3.4657       1       1      -1      -1      -1      -1       1      -1      -1      -1
  3.2581     -99     -99      -1       1      -1      -1      -1      -1     -99      -1
  3.0681       1       1       1       1     -99       1       1       1      -1      -1
  3.2771      -1     -99      -1      -1      -1      -1      -1      -1      -1      -1
;


proc iml;
   use work.qtl;
   read all into data;

num=nrow(data); *number of individuals;

y=data[,1];

m=data[,2:11];
 miss=loc(m=-99);
  w=m;
   w[miss]=1;

* QTL Searching;

d={.088, .206, .274, .342, .429, .536, .641, .692, .839};

alpha=-1; beta=0; * prior of var;
incre=0.03; * proposal increment;

mu=3; a=-.165; var=.081; q=w[,9]; * Starting points;
 dist=.68;
  int=8;
   t=(1-exp(-2*(dist-.641)))/2;
   u=(1-exp(-2*(.692-dist)))/2;

iter=2000;
results=j(iter,4,0);
 do i=1 to iter;
  do l=1 to 200; * Thinning interval;

* Missing marker data inputation;

dd=0//d;
 dd=dd[1:int]//dist//dd[int+1:10];
  rr=j(10,1,0);
   do j=1 to 10;
    rr[j]=(1-exp(-2*(dd[j+1]-dd[j])))/2;
   end;

mq=m[,1:int]||q||m[,int+1:10];
wq=w[,1:int]||q||w[,int+1:10];

flank=wq[,2];
 do ind=1 to num;
  if mq[ind,1]=-99 then do;
   if flank[ind]=-1 then p=1-rr[1];
    else p=rr[1];
   if p > uniform(0) then wq[ind,1]=-1;
    else wq[ind,1]=1;
  end;
 end;

flank=wq[,10];
 do ind=1 to num;
  if mq[ind,11]=-99 then do;
   if flank[ind]=-1 then p=1-rr[10];
    else p=rr[10];
   if p > uniform(0) then wq[ind,11]=-1;
    else wq[ind,11]=1;
  end;
 end;

do mid=1 to 9;
 flank=wq[,mid]-2*wq[,mid+2];
do ind=1 to num;
if mq[ind,mid+1]=-99 then do;

if flank[ind]=3 then p=rr[mid]*(1-rr[mid+1])/(rr[mid]*(1-rr[mid+1])+(1-rr[mid])*rr[mid+1]);
if flank[ind]=-1 then p=rr[mid]*rr[mid+1]/(rr[mid]*rr[mid+1]+(1-rr[mid])*(1-rr[mid+1]));
if flank[ind]=-3 then p=(1-rr[mid])*rr[mid+1]/(rr[mid]*(1-rr[mid+1])+(1-rr[mid])*rr[mid+1]);
if flank[ind]=1 then p=(1-rr[mid])*(1-rr[mid+1])/(rr[mid]*rr[mid+1]+(1-rr[mid])*(1-rr[mid+1]));

if p>uniform(0) then wq[ind,mid+1]=-1;
else wq[ind,mid+1]=1;

end; end;
end;

w=wq[,1:int]||wq[,int+2:11];

* Missing phenotypic data inputation;

y[71]=mu+q[71]*a+sqrt(var)*normal(0);

* Sampling the QTL position;

ll=max(0, dist-incre);
ul=min(.839, dist+incre);
range=ul-ll;
k=range*uniform(0)+ll;

dd=d//k;
dd=rank(dd); pos=k; k=dd[10];

dd=0//d;
do j=1 to 9;
 if k=j then do;
  r=(1-exp(-2*(pos-dd[j])))/2;
  s=(1-exp(-2*(dd[j+1]-pos)))/2;
 end;
end;

dd=((1-q)||(1+q))/2;

flank=w[,int]-2*w[,int+1];

prob=j(num,2,0);
do j=1 to num;

if flank[j] = 3 then do;
 prob[j,1]=(1-u)*t/(t*(1-u)+u*(1-t));
 prob[j,2]=(1-t)*u/(t*(1-u)+u*(1-t));
end;

if flank[j] = -1 then do;
 prob[j,1]=(t*u)/(t*u+(1-t)*(1-u));
 prob[j,2]=(1-t)*(1-u)/(t*u+(1-t)*(1-u));
end;

if flank[j] = -3 then do;
 prob[j,1]=(1-t)*u/(t*(1-u)+u*(1-t));
 prob[j,2]=(1-u)*t/(t*(1-u)+u*(1-t));
end;

if flank[j] = 1 then do;
 prob[j,1]=(1-t)*(1-u)/(t*u+(1-t)*(1-u));
 prob[j,2]=(t*u)/(t*u+(1-t)*(1-u));
end;

end;

pqold=log(prob); pqold=dd#pqold;
 pqold=pqold[+]+log(min(.839,pos+incre)-max(0, pos-incre));

flank=w[,k]-2*w[,k+1];

prob=j(num,2,0);
do j=1 to num;

if flank[j] = 3 then do;
 prob[j,1]=(1-s)*r/(r*(1-s)+s*(1-r));
 prob[j,2]=(1-r)*s/(r*(1-s)+s*(1-r));
end;

if flank[j] = -1 then do;
 prob[j,1]=(r*s)/(r*s+(1-r)*(1-s));
 prob[j,2]=(1-r)*(1-s)/(r*s+(1-r)*(1-s));
end;

if flank[j] = -3 then do;
 prob[j,1]=(1-r)*s/(r*(1-s)+s*(1-r));
 prob[j,2]=(1-s)*r/(r*(1-s)+s*(1-r));
end;

if flank[j] = 1 then do;
 prob[j,1]=(1-r)*(1-s)/(r*s+(1-r)*(1-s));
 prob[j,2]=(r*s)/(r*s+(1-r)*(1-s));
end;

end;

pqnew=log(prob); pqnew=dd#pqnew;
 pqnew=pqnew[+]+log(range);
if pqnew-pqold > log(uniform(0)) then do;
 dist=pos; int=k;
 t=r; u=s;
end;

* Sampling the QTL genotypes;

flank=w[,int]-2*w[,int+1];
 prob=j(num,2,0);
do j=1 to num;

if flank[j] = 3 then do;
 prob[j,1]=(1-u)*t*exp(-0.5*(y[j]-mu+a)**2/var);
 prob[j,2]=(1-t)*u*exp(-0.5*(y[j]-mu-a)**2/var);
end;

if flank[j] = -1 then do;
 prob[j,1]=t*u*exp(-0.5*(y[j]-mu+a)**2/var);
 prob[j,2]=(1-t)*(1-u)*exp(-0.5*(y[j]-mu-a)**2/var);
end;

if flank[j] = -3 then do;
 prob[j,1]=(1-t)*u*exp(-0.5*(y[j]-mu+a)**2/var);
 prob[j,2]=(1-u)*t*exp(-0.5*(y[j]-mu-a)**2/var);
end;

if flank[j] = 1 then do;
 prob[j,1]=(1-t)*(1-u)*exp(-0.5*(y[j]-mu+a)**2/var);
 prob[j,2]=(t*u)*exp(-0.5*(y[j]-mu-a)**2/var);
end;

end;

prob=prob[,1]/(prob[,1]+prob[,2]);

do j=1 to num;
 if prob[j]>uniform(0) then q[j]=-1;
else q[j]=1;
end;

* Sampling mu;

mu=(y-q*a)[+]/num;
 muvar=var/num;
  mu=mu+sqrt(muvar)*normal(0);

* Sampling a;

a=T(q)*(y-mu)/num;
 avar=var/num;
  a=a+sqrt(avar)*normal(0);

* Sampling var;

k=T(y-mu-q*a)*(y-mu-q*a);
 a1=alpha+num/2;
  a2=1/(beta+k/2);
   var=a2*rangam(0,a1);
    var=1/var;

end;

results[i,1]=mu;
 results[i,2]=a;
  results[i,3]=var;
   results[i,4]=dist;

end;

iter=1:iter;
 results=T(iter)||results;

create gibbs from results [colname={iter mu a var dist}];
 append from results;
close gibbs;

quit;

proc print data=gibbs(obs=20);
run;

symbol c=blue interpol = join value= none width = 1;
proc gplot data=gibbs;
title 'Monte Carlo sample trace';
 plot dist*iter;
run;

**** Output 10.9-10.12  ***;
proc capability data=gibbs;
 title 'Marginal posterior distribution';
 var var dist;
 histogram var dist / kernel (color=red);
run;quit;


