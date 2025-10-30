 /*------------------------------------------------------------------ */
 /*     Genetic Analysis of Complex Traits Using SAS    Chapter 11    */ 
 /*         Greg Gibson and Russ Wolfinger                            */
" /*       Copyright(c) 2004 by SAS Institute Inc., Cary, NC, USA      */"
 /*                   SAS Publications order # 59454                  */
 /*                        ISBN 1-59047-507-0                         */
 /*-------------------------------------------------------------------*/
 /*  History:  Created Oct 2004                                       */
 /*-------------------------------------------------------------------*/
 /*                                                                   */
" /* This material is provided ""as is"" by SAS Institute Inc.  There    */"
" /* are no warranties, expressed or implied, as to merchantability or */"
 /* fitness for a particular purpose regarding the materials or code  */
 /* contained herein. The Institute is not responsible for errors     */
" /* in this material as it now exists or will exist, nor does the     */"
 /* Institute provide technical support for it.                       */
 /*                                                                   */
 /*-------------------------------------------------------------------*/
 

/*  Chapter 11.3   */
***obtain your own sample data ***;

proc print data=work.madata(obs=20);
run;
proc mixed data=work.madata; 
class array dye; 
model value = dye / outp=rfi; 
random array array*dye; 
run;

data sasuser.rfi;
set work.rfi;
run;
proc sort data=sasuser.rfi;
by clone treat1 treat2 dye;
run;
ods exclude all; 
ods noresults;
proc mixed data=sasuser.rfi;
by clone; 
class array dye treat1 treat2;
model resid = treat1 treat2 treat1*treat2 dye / outp=sasuser.rfir; 
random array; 
lsmeans dye treat1 treat2 treat1*treat2 / diff; 
ods output covparms=sasuser.covparms tests3=sasuser.tests3 
lsmeans=sasuser.lsms diffs=sasuser.diffs;
run;
ods exclude none;
ods results;
data sasuser.diffs;
set sasuser.diffs;
NegLog10p = -log10(Probt);
run;



/*  Chapter 11.4  */
*** download public data from URL in text ***;

%let path = C:\Documents and Settings\<yourID>\My Documents\BISC\Asthma\;
"proc import out=aa datafile=""&path.GDS266.soft.txt"" dbms=tab replace;"
getnames=yes;
datarow=2;
run;
"libname a ""&path"";"

/*---log2 transform MAS 5.0 statistics---*/
%let narray = 29;
data a.aa;
set aa;
array gsm{*} gsm:;
do array = 1 to &narray;
gsm[array] = log2(gsm[array]);
end;
drop array;
run;

"/*---create tall data set by hand-coding treatments for one-way ANOVA,"
note asthma2_atopy0 combination is not present in the data---*/
data a.aatall;
set a.aa;
array g{*} gsm:;
do array = 1 to &narray;
log2mas5 = g[array];
"if (array <= 13) then trt = ""asthma1_atopy1"";"
"else if (array <= 15) then trt = ""asthma1_atopy0"";"
"else if (array <= 20) then trt = ""asthma2_atopy1"";"
"else if (array <= 25) then trt = ""asthma0_atopy1"";"
"else if (array <= 29) then trt = ""asthma0_atopy0"";"
"else trt = ""Unknown"";"
output;
end;
drop gsm:;
run;

"/*---note that some of the control spots are replicated 2-4 times on the chip,"
so take means of these to create a single obs per gene on each array---*/
proc sort data=a.aatall;
by array id_ref;
proc means data=a.aatall noprint;
by array id_ref;
var log2mas5;
id identifier trt;
output out=aatallm(drop=_type_ _freq_) mean=log2mas5;
run;

/*---normalize by subtracting medians---*/
proc stdize data=aatallm out=a.aatallstd method=median;
by array;
var log2mas5;
run;

/*---change id ref for later merge with annotation---*/
data a.aatallstd;
set a.aatallstd;
rename id_ref = Probe_Set_ID;
drop identifier;
run;

/*---load trimmed u133 annotation file from netaffx.com---*/
proc import out=a.u133anno
"datafile= ""&path.HG-U133A_annot_trim.csv"""
dbms=csv replace;
getnames=yes;
datarow=2;
run;


*** mixed model analysis code ***;
proc mixed;
class trt;
model log2mas5 = trt / outp=generesiduals;
lsmeans trt;
"estimate ""Asthma 1 minus 0"""
trt -1 -1 1 1 0;
"estimate ""Atopy 1 minus 0"""
trt -1 1 -1 1 0;
"estimate ""Asthma 2 minus 0 Atopy 1"""
trt 0 -1 0 0 1;
"estimate ""Asthma 2 minus 1 Atopy 1"""
trt 0 0 0 -1 1;
run;
