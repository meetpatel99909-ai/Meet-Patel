 /*------------------------------------------------------------------ */
 /*     Genetic Analysis of Complex Traits Using SAS    Chapter 8     */ 
 /*                   Wendy Czika and Xiang Yu                        */
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
 
/*************************************************************/
   /* Read in random sample of African American individuals     */
   /*************************************************************/
   data g1;
    input id $ (a1-a14) ($); 
    group='Afr Amer';
    datalines;
   B0610 24 24 2 3 B B B B A B A A C C
   B0611 17 20 2 4.2/4.3 B B A B A A A B B B
   B0616 21 25 1.3 4.1 B B A B B C A B B B
   B0642 22 22 2 2 B B B B A B A B B B
   B0651 18 31 1.2 4.2/4.3 A B B B A C A A B B
   B0652 >41 22 1.1 4.1 A B A B A A A B C C
   B0665 24 28 1.1 3 A B A B C C A A A C
   B0671 0 0 2 3 B B A B A C A A B B
   B0673 20 28 4.1 4.2/4.3 B B B B B C A A B B
   B0675 28 29 1.2 4.1 B B A B A A A A B B
   B0681 22 22 4.1 4.1 B B A B A B A B A B
   B0692 21 24 1.2 4.2/4.3 B B B B A C A B B B
   B0703 25 28 1.1 3 B B A A A A A A B C
   B0713 17 18 1.1 3 B B A B A A A B A C
   B0718 24 25 1.2 3 B B B B A C A B B C
   B0741 21 28 1.2 2 B B A B A A A B B B
   B0744 25 28 1.2 3 A B A A A C B B B B
   B0757 24 24 1.2 4.1 A B A A B C A B B B
   B0760 0 0 1.2 4.1 B B A B A A B B A B
   B0762 0 0 1.2 3 A B A B B C A B B B
   B0773 28 32 1.2 1.3 A B A B A A A B C C
   B0775 21 24 3 4.1 A B A B A C A A B C
   B0791 28 31 1.2 4.2/4.3 A B A B B C A B B B
   B0796 18 21 1.1 3 A B B B A C A A A B
   B0798 21 21 2 3 B B A A B B A B A B
   ;

   /***********************************************************/
   /* Read in random sample of Caucasian individuals          */
   /***********************************************************/   
   data g2;
    input id $ (a1-a14) ($);   
    group='Cauc';
    datalines;
   C008 18 37 1.3 2 A B A A B B A B C C
   C009 22 29 1.2 4.2/4.3 A B A B A B A B A C
   C010 18 28 3 3 B B B B A A A A C C
   C013 24 24 3 4.1 A B A B B B A B B C
   C033 22 24 1.2 3 A A A A A A A A B C
   C048 29 31 3 4.1 B B A B A B A B B C
   C050 18 24 2 4.1 B B A B B B B B C C
   C061 16 24 2 4.1 A B A A B B A A C C
   C062 18 29 2 4.1 A B A A A A A B A A
   C064 18 23 1.1 2 B B A A A A A B A A
   C084 18 24 1.1 4.1 A B B B A B A A A C
   C087 18 18 1.2 3 A B A A A A A B A C
   C099 24 31 1.3 2 B B A B A A A B B C
   C112 24 29 2 3 A B A B B B B B A C
   C114 24 24 1.1 1.2 A B A B A B A A A C
   C119 20 34 1.1 4.1 A B A A A A A B A C
   C124 18 24 1.2 2 A B A A A A A A C C
   C127 18 26 4.1 4.1 A B A A A A B B A A
   C131 24 24 1.1 1.2 A B A B A B A B C C
   C136 18 21 1.1 1.2 B B A A A B A A C C
   C139 28 31 1.2 3 A B B B A A A A B C
   C155 18 31 4.1 4.2/4.3 B B A B B B B B B C
   C196 24 29 1.2 4.2/4.3 A B A A A B A B C C
   C198 22 24 1.2 2 B B A A A B A A C C
   C199 24 24 4.1 4.2/4.3 A B A B A B A A A B
   ;

   /***********************************************************/
   /* Read in random sample of Southwest Hispanic individuals */
   /***********************************************************/
   data g3;
    input id $ (a1-a14) ($);  
    group='SW Hisp';
    datalines;
   H317 30 31 4.2/4.3 4.2/4.3 A B A B B B A B A C
   H320 18 31 4.1 4.1 A A A B A B A A B C
   H329 18 24 3 4.2/4.3 A B A A A B A B B C
   H339 18 28 1.2 1.2 A B B B A B A B C C
   H362 18 25 1.1 4.2/4.3 B B A A A B A B A C
   H363 24 28 2 3 A B A A B B A B B B
   H376 18 24 1.1 4.2/4.3 A B A B A B A B B B
   H384 22 31 3 4.1 A B A B A A B B B B
   H393 24 25 3 3 A B B B A B A A B C
   H400 18 25 1.3 4.1 A A A A A B A A A C
   H409 18 31 4.1 4.2/4.3 B B A B B C A A B C
   H415 17 24 1.1 3 A A A A B B A A A B
   H423 18 24 1.1 3 A A A B A A A B B C
   H426 24 24 4.1 4.2/4.3 A B A A A B A B A B
   H429 18 31 3 4.2/4.3 A A A B B B A A A C
   H430 18 23 4.1 4.2/4.3 B B B B A A B B B B
   H433 24 27 3 3 A B A B A A A B A C
   H435 18 18 1.2 3 A B A B A B B B C C
   H445 0 0 1.2 4.1 A A A B B B A B A B
   H452 21 30 2 4.2/4.3 A B A A B B A B A C
   H461 24 29 1.2 2 A A A A B B A B A C
   H463 25 25 1.2 4.1 A B A A B B B B C C
   H480 24 28 3 4.1 A B A B A A A A A A
   H492 24 30 2 4.2/4.3 B B B B B B A B C C
   H501 24 24 1.1 4.1 B B A B B B A B A C
   ;

   /***********************************************************/
   /* Combine groups into a single data set and replace 0s    */
   /* with blanks to represent missing alleles                */
   /***********************************************************/
   data all_gps;
    set g1 g2 g3;
    array a{14} $;
    do i=1 to 14;
     if a{i}='0' then a{i}=' ';
    end;
    drop i;
   run;

   /***********************************************************/
   /* Create data set with names of marker loci               */
   /***********************************************************/
   data markers;
    input name $ @@;
    datalines;
   D1S80 HLA-DQA1 LDLR GYPA HBGG D7S8 Gc
   ;
   
   /***********************************************************/
   /* Calculate marker summary statistics for loci by group   */
   /***********************************************************/
   proc allele data=all_gps ndata=markers nofreq;
    var a1-a14;
    by group notsorted;
   run;

   ods listing exclude MarkerSumm;

   /***********************************************************/
   /* Calculate allele and gentoype frequencies for African   */
   /* American population group at marker locus D1S80         */
   /***********************************************************/
   proc allele data=all_gps ndata=markers(obs=1) boot=1000 seed=71;
    var a1-a2;
    where group='Afr Amer';
   run;


   /*******************************************************/
   /* GAW  example                                        */
   /*******************************************************/
proc import datafile='gawsnps.csv' out=gawsnps replace;
run;

   data founders;
    set gawsnps;
    if father=. and mother=.;
   run;

data map;
    input name $ pos @@;
    datalines;
   SNP1  993   SNP2  1748
   SNP3  1868  SNP4  1987
   SNP5  4411  SNP6  4848
   SNP7  5007  SNP8  5663
   SNP9  5762  SNP10 5782
   SNP11 5901  SNP12 6805
   SNP13 7073  SNP14 7332
   SNP15 7987  SNP16 8067
   SNP17 8226  SNP18 9497
   SNP19 9616  SNP20 10054
   SNP21 10955 SNP22 11782
   SNP23 11981 SNP24 12408
   SNP25 12716 SNP26 13710
   SNP27 13869 SNP28 14544
   SNP29 15021 SNP30 16849
   ;
   run;

   proc allele data=founders ndata=map(rename=(name=oldname pos=name)) 
               exact=10000 nofreq seed=123;
    var a1-a60;
   run;

   proc allele data=founders ndata=map(rename=(name=oldname pos=name)) 
               exact=10000 nofreq seed=72;
    var a1-a60;
    where affection='A';
   run;

ods listing select LDMeasures;

   proc allele data=founders ndata=map haplo=est maxdist=1
               corrcoeff delta dprime propdiff yulesq;
    var a1-a60;
   run;
   /*********************************************************/
   /* Create output data set with LD test statistics        */
   /*********************************************************/   
   proc allele data=founders ndata=map noprint 
               haplo=est outstat=ldtest;
    var a1-a60;
   run;

   /*********************************************************/
   /* Create data set with marker names and dummy p-values  */
   /*********************************************************/   
   data dummy;
    set map;
    rename name=locus;
    prob=1;
   run;

   %tplot(ldtest, dummy, prob);

   %macro fivelocushaps;
    %do first=1 %to 51 %by 10;     
     %let last=%eval(&first+9);      
     %let firstm=%eval((&first+1)/2);         
     
     proc haplotype data=founders ndata=map(firstobs=&firstm) ld;
        var a&first-a&last;
     run;

    %end;
   %mend;
   
   %fivelocushaps


********  Section 8.5.1   **********;


   /*********************************************************/
   /* Create 1 variable per marker containing genotype      */
   /* coded as the number of "2" alleles in the genotype    */
   /*********************************************************/      
   data founders_g;
    set founders;
    array g{30};
    array a{60};
    do i=1 to 30;
     g{i}=a{2*i-1}+a{2*i}-2;
    end;
   run;

   /*********************************************************/
   /* Perform an ANOVA on each individual marker            */
   /*********************************************************/      
   %macro genoanova;
    %do i=1 %to 30;
     title "SNP &i";
     proc glm data=founders_g;
      class g&i;
      model q1 = g&i; 
     run;
    %end;
   %mend;
   %genoanova    



proc haplotype data=gawsnps ndata=map out=outhap; 
 var a11-a20;
run;

title 'Original PROC HAPLOTYPE OUT= Data Set'; 
proc print data=outhap;
 where _id_ lt 20; 
run;

data out1;
  set outhap;
  haplotype=tranwrd(haplotype1,'-','_');
run;

data out2;
  set outhap;
  haplotype=tranwrd(haplotype2,'-','_');
run;

data outnew;
  set out1 out2;
run;

proc sort data=outnew;
 by haplotype;
run;

data outnew2;
  set outnew;
  lagh=lag(haplotype);
  if haplotype ne lagh then num+1;
  hapname="H"||trim(left(num));
  call symput('numhaps', trim(left(num)));
run;
  
proc sort data=outnew2;
  by _id_ haplotype;
run;

data outt;
  set outnew2;
  by _id_ haplotype;
  if first.haplotype then totprob=prob/2;
  else totprob+prob/2;
  if last.haplotype;
run;
  
proc transpose data=outt out=outreg(drop=_NAME_) ;
  id hapname;
  idlabel haplotype;
  var totprob;
  by _id_;
run;

data outmissto0(drop=i);
  set outreg;
  array h{&numhaps};
  do i=1 to &numhaps;
   if h{i}=. then h{i}=0;
  end;
run;

data htr;
  merge outmissto0 gawsnps;
run;

title 'Haplotype Trend Regression';
proc reg data=htr;
  model q1 =  h2-h&numhaps ;
run;



********* Section 8.5.2 ******;


   /*********************************************************/
   /* Organize gawsnps into nuclear families with parents   */
   /* listed first                                          */
   /*********************************************************/      
   proc sort data=gawsnps; 
    by pedigree household_id id; 
   run;

   /*********************************************************/
   /* Create data set with children only to determine       */
   /* the cutoffs Zl and Zu for extreme sampling            */
   /*********************************************************/      
   data offspring;
    set gawsnps;
    by pedigree household_id;
    if first.household_id then withinfam=0;
    withinfam+1;
    if withinfam <= 2 then delete;
    drop withinfam;
   run;

   /*********************************************************/
   /* Determine 10% and 90% quantiles of Q1                 */
   /*********************************************************/      
   ods output quantiles=q;
   proc univariate data=offspring;
    var q1;
   run;

   data q2;
    set q;
    if quantile="10%" then call symput('zl',estimate);
    else if quantile="90%" then call symput('zu',estimate);
   run;

   /*********************************************************/
   /* Create data set containing parents and children that  */
   /* meet criteria for extreme sampling (Zl< or >Zu).      */
   /*********************************************************/      
   data extreme;
    set gawsnps;
    by pedigree household_id;
    if first.household_id then withinfam=0;
    withinfam+1;
    if withinfam > 2 and q1 <= &zu and q1 >= &zl then delete;
    drop withinfam;
   run;

   %macro qtdt;
         
    /** Define fstats_all data set **/
    data fstats_all;
     length locus $5;
     delete;
    run;

    /** Loop over each marker **/
    %do one=1 %to 59 %by 2;
     %let two=%eval(&one+1);
     %let marker=%eval(&two/2);

     /******************************************************/
     /* Create variables containing children's marker      */
     /* genotype and the parental mating type.             */
     /* Keep 1 child per family with valid mating type     */
     /******************************************************/       
     data extremeglm;
      set extreme;
      by pedigree household_id;
      if first.household_id then withinfam=0;
      withinfam+1;
      pargeno=compress((lag(a&one)+lag(a&two))||      
                       (lag2(a&one)+lag2(a&two)));
      chigeno=a&one+a&two;
      if pargeno='23' then pargeno='32';
      if pargeno='34' then pargeno='43';
      if withinfam=3 and pargeno in ('32', '33', '43');
     run;
     
     title "Marker &marker";

     ods output ModelANOVA=fstats;
     ods listing close;
     proc glm data=extremeglm;
      class pargeno chigeno;
      model q1=pargeno chigeno/ ss1;
     run;

     /******************************************************/
     /* Create data set containing F-statistics for        */
     /* the TDT_Q5.  This data set will be used in         */
     /* %TPLOT macro so Locus variable must be defined.    */
     /******************************************************/   
     data fstats_all;
      set fstats_all fstats(in=new);
      if Source='chigeno';
      if new then Locus="SNP&marker";
     run;

     data fstats;
      set fstats;
      probf=1;
     run;

    %end;
    ods listing;
   %mend;
   
   %qtdt    

   %tplot(ldtest, fstats_all, ProbF)

 %macro sibqtdt; 
 /*********************************************************/
 /* Remove sibships of size 1 from data set and create    */
 /* columns of genotypes                                  */
 /*********************************************************/      
   data sibdata;
    set offspring;
    array a{60};
    array geno{30};
    by pedigree household_id;
    if first.household_id and last.household_id then delete;
    do i=1 to 30;
     geno[i]=a[2*i-1]+a[2*i]-2;
    end;
    drop i;
   run;

 /** Loop over each marker **/
 %do m=1 %to 30;

  title "SNP &m";

  proc mixed data=sibdata;
   class geno&m household_id;
   model q1 = geno&m;
   random household_id geno&m*household_id;
  run;
 %end;
%mend;

%sibqtdt;


