 /*------------------------------------------------------------------ */
 /*     Genetic Analysis of Complex Traits Using SAS    Chapter 4     */ 
 /*                     Arnold M. Saxton                              */
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
 

/*  Chapter 4.2.1     */

/****************************************************************
Macro for Genetic Selection on One Trait
******************************************************************/
%macro select1(i=0,pselect=0,h2=0,phenosd=0,
                genlen=1,sibr=0, sibt=0, nsib=0,family=, corr=, corrh2=0);
data select1zz;
i=&i;   h2=&h2;
pselect=&pselect;
phenosd=&phenosd;
genlen=&genlen;
if pselect=0 or i ne 0 then do;
  max=-4;    min=4;
  fmax= i-  ( exp(-.5*max*max)/sqrt(2*3.141592653589793))/(1-probnorm(max) );
  fmin= i-  ( exp(-.5*min*min)/sqrt(2*3.141592653589793))/(1-probnorm(min) );
  do iter=1 to 260;
  xy1= fmin+fmax;
  xy2=fmin*min+fmax*max;
  xx1=2;   xx2=min+max; 
           xx3=min*min + max*max;  
  b0=( xy1*xx3 - xy2*xx2 );
  b1=(-xy1*xx2 + xy2*xx1 );
  new= -b0/b1;
  pselect= 1-probnorm(new) ;
  fnew= i-  ( exp(-.5*new*new)/sqrt(2*3.141592653589793))/pselect;
  if fnew<0 then do;
    min=new; fmin=fnew;
  end; 
  else do;
    max=new; fmax=fnew;
  end;
  if abs(fnew)< .00000001 then iter=1000;
 end;
end;
if i=0 then do;
  x=probit(1-pselect);
  norm= exp(-.5*x*x)/sqrt(2*3.141592653589793);
  i=norm/pselect;
end;
  GeneticGain=i*h2*phenosd/genlen; 
  family=upcase("&family");
  if family ne '' then do;
     nsib=1*&nsib;
	 sibr=1*&sibr;
	 sibt=1*&sibt;
     if family='FAMILY' then famfact= (1+(nsib-1)*sibr)/sqrt(nsib*(1+(nsib-1)*sibt));
	 if family='SIB' then famfact=nsib*sibr/sqrt(nsib*(1+(nsib-1)*sibt));
	 if family='WITHIN' then famfact= (1-sibr)*sqrt( (nsib-1)/(nsib*(1-sibt)) );
	 if family='COMB' then famfact= sqrt( 1 + (sibr-sibt)**2 / (1-sibt) * (nsib-1)/(1+(nsib-1)*sibt) );
     &family.GeneticGain=i*h2*phenosd*famfact/genlen; 
  end;
  else famfact=1;
   %if %length(&corr)=0 %then corr=.; %else corr=1*&corr; ;
  if corr ne . then do;
   corrh2=1*&corrh2;
   INDIRECTGeneticGain=i*sqrt(h2)*sqrt(corrh2)*corr*phenosd/genlen;
  end;
  drop max--norm famfact;
run;
proc print heading=h; 
run;
%mend;

%select1(pselect=.10,h2=.2,phenosd=5);
%select1(i=.5,h2=.2,phenosd=5);
%select1(i=1,h2=.3,phenosd=50,genlen=1);


/*  chapter 4.2.2   */
%select1 (pselect=.20, h2=.3, phenosd=1, family=within, sibr=.25, sibt=.4, nsib=8);


/*  Chapter 4.2.3   */
%select1 (pselect=.20, h2=.3, phenosd=1, family=within, sibr=.25, sibt=.4, nsib=8, corr=.3, corrh2=.1);


%macro compare;
data store; run;
ods listing exclude all;
%do ii=1 %to 20;
%let sibt=%sysevalf(0+.05*&ii);
%select1 (pselect=.20, h2=.3, phenosd=1, family=within, sibr=.25, Sibt=&sibt, nsib=8 );
data store; set store select1zz;
run;
%end;
ods listing;
proc gplot;
  goptions      ftext=swiss hpos=50 vpos=45 ;
 symbol1 v=square i=join c=black w=5;
 symbol2 v=dot i=join c=black w=5;
 axis1 label=(a=90 h=2.5 'Genetic Gain') w=3 major=(w=3) minor=(n=1 w=3) value=(h=2);
 axis2 w=3 label=(h=2.5 'Sib t') major=(w=3) minor=(n=1 w=3) value=(h=2);
 legend1 frame;
 plot (geneticgain withingeneticgain)*sibt/overlay nolegend haxis=axis2 vaxis=axis1;
run; quit;
%mend;


%compare;



/*   Chapter 4.3   */

*** First Obtain indcull.sas macro in separate file, open and run in SAS;
%indcull(2,trait1 trait2, 1.21 2.2 6.25, .605 .8609 .8609 2.2,1 1,.05);


%indcull(3,trait1 trait2 trait3, 1 .5 1 .5 .5 1, .4 .1 .1 .1 .3 .1  .1 .1 .4, 2 -3 1, .10);



/*   Chapter 4.4   */



%Macro sindex(p=, g=, ew= , desired=, save=, selecton=, plabels=, glabels=, h2=, Psd=, Pvar=);

proc iml symsize=1000;
   reset fw=10;
   *     constants and accuracy control*;
   pi = 3.141592653589793;
   twopi=6.283185307179587;
   rt2pi = sqrt(twopi);
   pcorr1=0; pcorr2=0; gcorr=0;
      
  	  %if %length(&ew) >0 %then %do; ew={&ew}`; %end;
  	  %if %length(&selecton) >0 %then %do; uset={&selecton}`; %end;
  	  %if %length(&psd) >0 %then %do; psd={&psd}`; pcorr1=1; %end;
	  %if %length(&pvar) >0 %then %do; pvar={&pvar}`; pcorr2=1; %end;
	  %if %length(&h2) >0 %then %do; h2={&h2}`; gcorr=1; %end;
	  if pcorr1=1 then do;
	    pcorr1=0; pcorr2=1;
		pvar=psd#psd;
	  end;

	  if pcorr2=1 then do;
        *** correlation matrix input;
	    ntrait=nrow(pvar);
        if gcorr ^=1 then print 'ERROR - Both G and P must be correlation matrics and (Pvar or Psd) and H2 must be input.';
        ngene=ntrait; *if correlation matrices used, must be same p and g traits;
**print pvar gcorr ntrait ngene;
		pp=j(ntrait,ntrait,1);
		gg=j(ntrait,ngene,1);

        kk=1;
		do ii=2 to ntrait; do jj=1 to ii-1;
		  pp[ii,jj]=num(scan("&p",kk,' '));
		  pp[jj,ii]=pp[ii,jj];
		  gg[ii,jj]=num(scan("&g",kk,' '));
		  gg[jj,ii]=gg[ii,jj];
		  kk=kk+1;
		end;end;
**print gg, (pvar*h2`),((pvar#h2)*(pvar#h2)`);
		pp=sqrt(pvar*pvar`) #pp;
		gg=sqrt((pvar#h2)*(pvar#h2)`) #gg;
	  end;

	  else do;
	    *** covariance matrix input;
	    temp=scan("&p",1,' ');
		ii=0; ntrait=0;
		do while (temp ^= '');
           ii=ii+(ntrait+1); ntrait=ntrait+1;
           temp=scan("&p",ii,' ');
        end;
		ntrait=ntrait-1;
		temp=scan("&g",ntrait,' ');
		ii=ntrait; ngene=1;
		do while (temp ^= '');
           ii=ii+ntrait; ngene=ngene+1;
           temp=scan("&g",ii,' ');
        end;
		ngene=ngene-1;
		pp=j(ntrait,ntrait,0);
		gg=j(ntrait,ngene,0);

		kk=1;ll=1;
		do ii=1 to ntrait; 
          do jj=1 to ii;
		    pp[ii,jj]=num(scan("&p",kk,' '));
		    pp[jj,ii]=pp[ii,jj];
 		    kk=kk+1;
		  end;
		  do jj=1 to ngene;
		    gg[ii,jj]=num(scan("&g",ll,' '));
			ll=ll+1;
		  end;
		end;

	  end;

	  save=num("&save");
	  if nrow(uset)=0 then uset=1:ntrait;

	  **** allocate storage;
	  pname=j(ntrait,1,"        ");
	  gname=j(ngene,1,"        ");
	  **** read input values;
	  do ii=1 to ntrait;
	    pname[ii,1]=scan("&plabels",ii,' ');
		if pname[ii,1]='' then pname[ii,1]=compress("PTrait"+char(ii) );
	  end;
      pname=compress(pname);
	  do ii=1 to ngene;
	    gname[ii,1]=scan("&glabels",ii,' ');
		if gname[ii,1]='' then gname[ii,1]=compress("GTrait"+char(ii) );
	  end;
**print pname gname;
      *    initialize matrices       echo input *;
      print "PHENOTYPIC INFORMATION Covariances";
      print pp [rowname=pname];
      print "GENETIC INFORMATION Covariances   P\\G ";
      print gg [rowname=pname colname=gname];
      temp=probit(save);
      si = exp(-temp*temp/2.0) / (save*rt2pi);
      print  (100*save) " percent selected, or selection intensity =" si;

	  %if %length(&ew) >0 %then %do;
		***standard index using uset phenotypic traits to select all genetic traits;
	  pinv=inv(pp[uset,uset]);
      sib=pinv*gg[uset,]*ew;
      sdindex=sqrt(sib`*pp[uset,uset]*sib);
	  sigain=si#sdindex;
	  indgains= gg[uset,]`*sib#si/sdindex;
	  print (vecdiag(pinv)) (sib#sib/vecdiag(pinv)) ;
	  relcontr = 100*(1-sqrt( (sdindex*sdindex-sib#sib/vecdiag(pinv))/(sdindex*sdindex) ));
	  pname1=pname[uset]; 
	  print "Selection index and economic weights", sib [rowname=pname1] ew;
	  print "Individual trait gains and relative contribution", 
                indgains [rowname=gname] relcontr;
      print "Predicted total gain and StdDev(Index)", sigain sdindex;
      %end;

	  %if %length(&desired)>0 %then %do;
  	    do ii=1 to ngene;
          temp=scan("&desired",ii,' ');
          dginput=dginput//temp;
          if upcase(temp) ^= 'MAX' then do;
		     dgt=dgt||ii;
			 dg=dg//num(temp);
		  end;
		end;
	  print '***Tallis restricted index using phenotypic traits ' (pname[uset]`) ,
            'to produce desired genetic gains ***';
	  pinv=inv(pp[uset,uset]);
	  ggr=gg[uset,dgt];
**print ggr;
	  temp=det(ggr`*pinv*ggr);
	  if temp=0 then print "Unable to complete problem due to singularity";
	  else do;
        sib= (i(nrow(uset)) - pinv*ggr*inv(ggr`*pinv*ggr)*ggr`) * pinv*gg[uset,]*ew
               +  pinv*ggr*inv(ggr`*pinv*ggr)*dg;
        sdindex=sqrt(sib`*pp[uset,uset]*sib);
	    sigain=si#sdindex;
	    indgains= gg[uset,]`*sib#si/sdindex;
	    pname1=pname[uset];
	    print "Selection index weights", sib [rowname=pname1];
	    %if %length(&ew) >0 %then %do;
		  TotalGain= ew`*indgains;
          print "Individual trait gains", indgains [rowname=gname] dginput ew;
          print "Predicted total gain and StdDev(Index)", TotalGain sdindex;
		%end; %else %do;
          print "Individual trait gains", indgains [rowname=gname] dginput;
		%end;
	  end;
	  %end;
quit;
%mend;

***  jap j genetics 50:33 ***;
%sindex(
p   = -.80 
      -.10 -.30 
       .80 -.40 -.10 
       .10 .40 .40 -.05 
      -.30 .20 .20 -.40 .20
	    0    0   0    0 .10  0  ,
g   =  -.60
       -.60 -.40
	    .85 -.50 .30
		  0  .30 .40    0
	   -.50  .20 .30 -.50 .10
		  0    0   0  .05 .10  0  ,
h2=    .20 .20 .50 .30 .40 .30 .05 ,
psd=    10   2   4  10  18  12  30,
plabels=EP  FC  EW  EF  BW  SM  AV,
glabels=EP  FC  EW  EF  BW  SM  AV,
ew= 0 -1 .1 -.1 -.1 0 0,
desired= 8 -3 0 max max max max,
save=.10 ,
selecton= 3 4 5 );

***  cunningham example  ***;
 
%sindex(p=.25 0 .25 0 0 36,  
    g=.0875  -.0047  .0887   -.0047 .0250 0   .0887  0 9,
	ew= 2 22 1,
	save=.10
	);

%sindex(p=.25 0 .25 0 0 36,  
    g=.0875  -.0047  .0887   -.0047 .0250 0   .0887  0 9,
	ew= 2 22 1,
	save=.10,
	selecton=1 2
	);


/*   Chapter 4.5    */
**** all code below forms SELECTBLUP.SAS;  

data ped;
 input ind sire dam;
datalines;
1   23 24
5   23 25
101 1 2
102 1 2
103 1 3
104 1 3
111 5 6
112 5 6
113 5 7
114 5 7
121 8 9
122 8 9
123 8 10
124 8 10
;
proc inbreed covar outcov=covmat ;
run;
 

data one;
  input ind milk fat age;
datalines;
101  16365  2.3  4
102  23129  2.5  6 
103  18366  2.4  5
104  17392  2.1  5
111  19582  2.6  3
112  18944  2.3  4
113  17038  2.7  5
114  18835  2.5  6
121  21019  2.9  5
122  20865  2.7  4
123  19782  2.5  5
124  20321  2.6  6
;
proc iml;
 use covmat;                              *** need dataset from proc inbreed;
 read all var{ind} into indcovmat;        ***change to variable name for individuals in pedigree;
 rdim=nrow(indcovmat);
 read all into covmat;
 cdim=ncol(covmat);
 covmatrix=covmat[, cdim-rdim+1:cdim];
 use one;                                  *** need dataset with production data;
 read all into data;
 indwithdata=data[,1];                     **** assumes first column has individual id;
 rmdim=nrow(indwithdata);
 do ii=1 to rmdim;
   do jj=1 to rdim;
     if indwithdata[ii,1] = indcovmat[jj,1] then do;
            index=index//jj;  jj=rdim+1;
	 end;
 end;end;
 ** index now contains location of individuals with 
          production data in the pedigree cov matrix;
 submatrix=covmatrix[index,index] * .25;                ***heritability gives Va/Ve to scale covariances (here h2=.20);
 create submat from submatrix; append from submatrix;
quit;
data submat; set submat;
 row=_n_;
run;
proc print; run;

%macro getblup(dset,var);
proc mixed order=data data=&dset;   ***order=data so external gdata is in same order;
 class ind;
 model &var = /ddfm=kr;
 random ind /gdata=submat g solution type=un;
 ods output solutionr = blups;
run;
data aggeno; merge aggeno blups(rename=( estimate=blup_&var));
run;
%mend;
data aggeno; run;   ***erase this dataset;
%getblup(one,milk);
%getblup(one,age);
%getblup(one,fat);

data aggeno; set aggeno;
 ag=blup_milk*9 + blup_age*1 + blup_fat*3;
 drop stderrpred--probt;
run;
proc sort; by descending ag ;
proc print;
run;



