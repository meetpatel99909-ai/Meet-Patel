 /*------------------------------------------------------------------ */
 /*     Genetic Analysis of Complex Traits Using SAS    Chapter 3     */ 
 /*            Ken Stalder and Arnold Saxton                          */
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

/*   Chapter 3.2   */;

data cowmilk;
input CowName$ DamID CurrSCC CurrMilk LactNum DamSCC DamMilk DamLact;
datalines;
  TRST11    3871716   100   47.1      3       650       .       5
  ZUKR02    3878083   152   54.4      2       162     38.1      5
  GENE01    3924135    62   52.6      3        54     34.4      5
  ANCH01    3933356    38   43.5      1       162     34.4      5
  LXUS01    3933356    41   49.0      2       162     34.4      5
  BUCK01    3953108   141   32.6      2       200     54.4      5
  VIEW10    3953973   162     .       2        29     54.4      5
  DAN15     3973832    87   43.5      2        29     58.0      4
  MONT09    3973868    38   38.1      1       100     47.1      3
  HRDL03    3986622   650   36.3      2       214     49.0      4
  DCLO04    4024311   162   61.7      1      1715     23.5      3
  MONT05    4024314   348   50.8      1        31     56.2      3
  FLAG01  110128090    13   54.4      1        13     68.9      3
  JOUR02  110128317   246   38.1      1        62       .       3
  AVRY12  110128438    81     .       1       746     49.0      3
  BRTA77  110128456   152     .       1      1131     41.7      3
  DCLO01  110409807    22   38.1      1        13     47.1      3
;

********heritability********************;
proc mixed data=cowmilk;
model currscc = damscc /solution influence outp=rrr;
estimate 'Heritability' damscc 2;
run;
proc univariate plot normal data=rrr;
 var resid;
run;

****  data plot ***;
goptions reset=all;
proc gplot data=cowmilk;
  goptions ftext=swiss hpos=50 vpos=45 ;
 axis1 minor=none value=(h=2) w=3 label=(h=2.5 a=90 'Offspring SCC');
 axis2 minor=none value=(h=2) w=3 label=(h=2.5 'Dam SCC');
 symbol1 v=dot i=rl w=3;
 plot currscc*damscc/haxis=axis2 vaxis=axis1;
run; quit;


********genetic correlations**************;
proc glm data=cowmilk;
 model currscc currmilk=dammilk;
 estimate '2*DamMilk slope' dammilk 2;
run; quit;
proc glm data=cowmilk;
 model currscc currmilk=damscc;
 estimate '2*DamSCC slope' damscc 2;
run; quit;


/*    Chapter 3.3   */


data one;
 input generation bw1 bw2 control;
 bw=bw1; rep=1; diff=bw-control; output;
 bw=bw2; rep=2; diff=bw-control; output;
datalines;
1  216.9  212.1  207.1
2  215.9  212.0  214.4
3  198.0  201.7  215.9
4  193.4  167.8  223.1
5  177.1  161.0  224.3
6  190.2  177.5  213.0
7  171.4  168.6  215.2
8  150.5  131.8  230.4
9  136.7  126.0  233.2
;


proc reg;
 model bw diff=generation;
 model bw = generation control;
run;

data one; set one;
 classgen=generation;
run;
proc mixed;
 class classgen rep ;
 model bw = control generation classgen /htype=1 solution;
 random rep rep*generation;
run;


proc mixed;
 class classgen rep ;
 model bw = control generation  /htype=1 solution;
 random rep rep*generation;
run;


/*   Chapter 3.4    */

*** simple example ***;
data one;
 input  indiv mom dad;
datalines;
 5 1 . 
 6 1 . 
 8 5 6 
 9 8 . 
 10 8 .
 11 9 10
;
proc inbreed matrix ;
run;


*** complex example ***;
data one;
 input  gen sex$ indiv mom dad cov;
datalines;
 0 F 3 4 .   .05
 0 M 2 4 .   .05
 0 F 1 . .   .05
 1 F 5 1 2   .
 1 M 6 3 2   .
 1 F 7 1 2   .
 2 F 8 5 6   .
 2 M 9 7 6   .
 3 F 10 8 9  .
;
proc inbreed average;
 gender sex;
 var indiv dad mom cov;
 matings 3/4 , 8/9 , 2/3;
run;
 proc inbreed average init=.05 matrix;
 class gen;
 gender sex;
 var indiv dad mom;
 run;



/*    Chapter 3.5   */


*****
F1 and parents, no reciprocals.
Data courtesy of Dennis West, University of Tennessee.
;

data one;
 input plot entry rep  year loc$ par1 par2 lodge height earht standpcnt buyield kgyield;
datalines;
108	1	1	1998	KnoxTN	1	2	15.6	1.98	1.12	94	121.2	7604
207	2	1	1998	KnoxTN	1	3	16.4	2.37	1.31	99	132.4	8303
106	3	1	1998	KnoxTN	1	4	6	2.22	1.31	99	141.5	8871
109	4	1	1998	KnoxTN	1	5	7.5	2.16	1.28	99	139.1	8722
204	5	1	1998	KnoxTN	2	3	7.1	2.49	1.28	103	113.7	7131
101	6	1	1998	KnoxTN	2	4	13.4	2.31	1.34	99	138.3	8673
301	7	1	1998	KnoxTN	2	5	19	2.43	1.28	93	127.5	7997
103	8	1	1998	KnoxTN	3	4	3.2	2.46	1.46	91	128.5	8058
205	9	1	1998	KnoxTN	3	5	15.7	2.68	1.49	103	97.4	6110
208	10	1	1998	KnoxTN	4	5	6.5	2.68	1.4	91	144.2	9041
709	22	1	1998	KnoxTN	1	1	4.8	2.13	1.16	93	61.1	3830
706	23	1	1998	KnoxTN	2	2	0	2.19	1.12	97	63.6	3986
707	24	1	1998	KnoxTN	3	3	24.6	2.28	1.22	90	95.9	6017
708	25	1	1998	KnoxTN	4	4	4.4	2.31	1.25	100	99.2	6219
705	26	1	1998	KnoxTN	5	5	4.8	2.31	1.16	93	78.1	4896
502	1	2	1998	KnoxTN	1	2	6	2.1	1.12	99	111	6959
307	2	2	1998	KnoxTN	1	3	14.9	2.43	1.37	99	93.3	5848
305	3	2	1998	KnoxTN	1	4	20.6	2.34	1.37	100	86.8	5444
404	4	2	1998	KnoxTN	1	5	5.5	1.95	1.16	107	87.9	5514
405	5	2	1998	KnoxTN	2	3	9.4	2.34	1.28	94	55	3452
409	6	2	1998	KnoxTN	2	4	6.5	2.34	1.34	91	57.7	3621
406	7	2	1998	KnoxTN	2	5	6.3	2.28	1.25	93	87.8	5505
306	8	2	1998	KnoxTN	3	4	8.1	2.61	1.49	91	111.1	6969
304	9	2	1998	KnoxTN	3	5	6.1	2.49	1.31	97	105.2	6596
503	10	2	1998	KnoxTN	4	5	9.2	2.25	1.37	96	113.4	7115
805	22	2	1998	KnoxTN	1	1	4.7	1.92	1	94	51.8	3246
809	23	2	1998	KnoxTN	2	2	2.4	2.22	1.19	62	59.6	3740
808	24	2	1998	KnoxTN	3	3	8.5	2.22	1.19	87	69.6	4362
807	25	2	1998	KnoxTN	4	4	15.4	2.25	1.16	96	97.3	6104
806	26	2	1998	KnoxTN	5	5	9	2.16	1.19	99	91.7	5749
606	1	3	1998	KnoxTN	1	2	10.6	2.4	1.28	97	111.6	6997
803	2	3	1998	KnoxTN	1	3	11.9	2.25	1.22	99	69.4	4355
904	3	3	1998	KnoxTN	1	4	8.1	2.1	1.09	109	109.5	6866
607	4	3	1998	KnoxTN	1	5	19.4	2.34	1.28	99	130.6	8190
902	5	3	1998	KnoxTN	2	3	7.4	2.01	1.12	100	75	4704
801	6	3	1998	KnoxTN	2	4	20	2.25	1.22	96	115	7210
703	7	3	1998	KnoxTN	2	5	1.5	2.45	1.25	96	96.4	6043
601	8	3	1998	KnoxTN	3	4	29.4	2.49	1.4	100	124.7	7820
608	9	3	1998	KnoxTN	3	5	6.8	2.37	1.22	107	126.2	7918
609	10	3	1998	KnoxTN	4	5	14.9	2.31	1.28	99	138.9	8710
907	22	3	1998	KnoxTN	1	1	7.5	1.85	1.03	99	91.7	5748
909	23	3	1998	KnoxTN	2	2	1.5	2.01	1.12	99	73	4578
905	24	3	1998	KnoxTN	3	3	18.6	2.13	1.19	87	65.6	4115
908	25	3	1998	KnoxTN	4	4	4.8	2.01	1.12	93	74.7	4683
906	26	3	1998	KnoxTN	5	5	11.8	2.1	1.12	100	87.6	5494
732	1	1	1999	KnoxTN	1	2	31.7	1.9	0.88	93	83	5208
823	2	1	1999	KnoxTN	1	3	5.4	2	0.94	84	67.6	4239
825	3	1	1999	KnoxTN	1	4	15.5	2	0.94	102	92.5	5799
829	4	1	1999	KnoxTN	1	5	48.7	1.9	0.88	88	101.7	6379
831	5	1	1999	KnoxTN	2	3	20.6	1.9	0.97	131	72.5	4548
731	6	1	1999	KnoxTN	2	4	41.3	2.1	1.03	104	97.4	6108
729	7	1	1999	KnoxTN	2	5	43.4	2	0.97	104	96.1	6026
723	8	1	1999	KnoxTN	3	4	92.8	2.2	1.06	63	76.4	4790
722	9	1	1999	KnoxTN	3	5	59.4	2.1	1.09	84	103.1	6466
726	10	1	1999	KnoxTN	4	5	38.4	2.2	1	88	92.9	5825
1034	22	1	1999	KnoxTN	1	1	34	1.9	0.91	100	66.2	4152
1035	23	1	1999	KnoxTN	2	2	13.3	1.8	0.85	102	54.8	3438
1037	24	1	1999	KnoxTN	3	3	51.7	1.7	0.76	65	58.7	3681
1036	25	1	1999	KnoxTN	4	4	20	1.9	0.91	56	46.8	2937
1038	26	1	1999	KnoxTN	5	5	35.1	1.9	0.88	84	63	3953
1027	1	2	1999	KnoxTN	1	2	40.6	2	0.94	72	70.1	4396
1032	2	2	1999	KnoxTN	1	3	47.3	1.9	0.91	86	53.1	3329
924	3	2	1999	KnoxTN	1	4	43.2	2	0.94	84	96.9	6077
1022	4	2	1999	KnoxTN	1	5	29.4	2	0.88	77	82.4	5171
930	5	2	1999	KnoxTN	2	3	30.7	2	1	88	82.1	5147
929	6	2	1999	KnoxTN	2	4	44.7	2	0.94	86	95.7	5999
1023	7	2	1999	KnoxTN	2	5	41.6	2.1	0.97	81	87.1	5463
1024	8	2	1999	KnoxTN	3	4	60.8	2.2	1.06	52	55.8	3502
1030	9	2	1999	KnoxTN	3	5	44.7	2.2	1.03	86	79.2	4966
1028	10	2	1999	KnoxTN	4	5	86.2	2.2	1.09	65	45.6	2858
1043	22	2	1999	KnoxTN	1	1	25	1.9	0.88	109	59	3703
1039	23	2	1999	KnoxTN	2	2	23.6	1.8	0.88	86	45.8	2873
1041	24	2	1999	KnoxTN	3	3	37.5	1.9	0.91	90	63.2	3963
1040	25	2	1999	KnoxTN	4	4	16.1	2	1	70	59.5	3729
1042	26	2	1999	KnoxTN	5	5	39	2	0.91	93	75.1	4707
937	1	3	1999	KnoxTN	1	2	15.5	1.9	0.85	102	76.1	4770
735	2	3	1999	KnoxTN	1	3	39.5	2	0.85	97	76.6	4801
834	3	3	1999	KnoxTN	1	4	58.3	2	1	109	75.6	4741
832	4	3	1999	KnoxTN	1	5	44.7	1.9	0.94	86	71.6	4488
738	5	3	1999	KnoxTN	2	3	28.2	1.9	0.88	88	66.2	4152
936	6	3	1999	KnoxTN	2	4	40	2	0.94	102	81	5080
833	7	3	1999	KnoxTN	2	5	35.5	1.9	0.85	102	95.8	6009
835	8	3	1999	KnoxTN	3	4	15.5	2.1	1.09	102	67.4	4224
933	9	3	1999	KnoxTN	3	5	68.4	2	0.94	86	97.2	6093
938	10	3	1999	KnoxTN	4	5	33.3	2.2	1.12	95	69.9	4387
1047	22	3	1999	KnoxTN	1	1	34	1.8	0.88	100	62.1	3895
1044	23	3	1999	KnoxTN	2	2	21.4	1.7	0.79	95	50.9	3190
1046	24	3	1999	KnoxTN	3	3	80	1.9	0.94	68	41.7	2613
1048	25	3	1999	KnoxTN	4	4	45.7	2.2	1.16	79	48.5	3041
1045	26	3	1999	KnoxTN	5	5	25	2	1	90	61.1	3834
122	1	1	1999	MilanTN	1	2	13.4	.	.	92.8	132.9	8338
233	2	1	1999	MilanTN	1	3	10.2	.	.	87.5	101.6	6375
133	3	1	1999	MilanTN	1	4	2.4	.	.	75	100.3	6291
121	4	1	1999	MilanTN	1	5	5.3	.	.	101.7	134.6	8441
234	5	1	1999	MilanTN	2	3	23.5	.	.	91	99	6214
123	6	1	1999	MilanTN	2	4	10.9	.	.	98.2	138.7	8700
127	7	1	1999	MilanTN	2	5	5.3	.	.	100	120.1	7535
229	8	1	1999	MilanTN	3	4	14	.	.	89.3	92.4	5796
125	9	1	1999	MilanTN	3	5	1.8	.	.	96.4	109.9	6895
131	10	1	1999	MilanTN	4	5	9.4	.	.	94.6	154.5	9691
421	22	1	1999	MilanTN	1	1	5.8	.	.	92.8	79.7	5000
423	23	1	1999	MilanTN	2	2	2.3	.	.	76.8	72.4	4541
424	24	1	1999	MilanTN	3	3	10.4	.	.	85.7	98.6	6185
422	25	1	1999	MilanTN	4	4	12.8	.	.	83.9	125.6	7876
425	26	1	1999	MilanTN	5	5	3.5	.	.	100	127.1	7974
328	1	2	1999	MilanTN	1	2	3.8	.	.	94.6	100.6	6308
333	2	2	1999	MilanTN	1	3	2.1	.	.	85.7	119.6	7500
223	3	2	1999	MilanTN	1	4	8.2	.	.	108.9	155.2	9732
323	4	2	1999	MilanTN	1	5	5.2	.	.	103.5	144.1	9037
322	5	2	1999	MilanTN	2	3	3.7	.	.	96.4	104.9	6580
321	6	2	1999	MilanTN	2	4	7.5	.	.	94.6	137.3	8610
324	7	2	1999	MilanTN	2	5	3.8	.	.	94.6	118.2	7413
325	8	2	1999	MilanTN	3	4	17.5	.	.	101.7	108	6776
331	9	2	1999	MilanTN	3	5	3.6	.	.	100	124.4	7800
329	10	2	1999	MilanTN	4	5	14.5	.	.	98.2	139	8719
429	22	2	1999	MilanTN	1	1	0	.	.	94.6	76.9	4822
426	23	2	1999	MilanTN	2	2	3.7	.	.	96.4	75.7	4749
427	24	2	1999	MilanTN	3	3	8.5	.	.	83.9	91.7	5750
428	25	2	1999	MilanTN	4	4	12.9	.	.	96.4	102.9	6452
430	26	2	1999	MilanTN	5	5	3.9	.	.	91.1	124.6	7812
439	1	3	1999	MilanTN	1	2	6.5	.	.	82.1	92.5	5803
138	2	3	1999	MilanTN	1	3	7.5	.	.	94.6	120.5	7559
239	3	3	1999	MilanTN	1	4	11.7	.	.	91.1	96.1	6029
237	4	3	1999	MilanTN	1	5	5.9	.	.	91.1	121	7591
236	5	3	1999	MilanTN	2	3	12	.	.	89.3	87.2	5469
438	6	3	1999	MilanTN	2	4	3.8	.	.	94.6	134.4	8429
238	7	3	1999	MilanTN	2	5	5	.	.	107.1	158.4	9934
240	8	3	1999	MilanTN	3	4	10	.	.	89.3	122.6	7691
340	9	3	1999	MilanTN	3	5	4.7	.	.	85.7	108.8	6826
440	10	3	1999	MilanTN	4	5	2.6	.	.	69.6	131.3	8233
431	22	3	1999	MilanTN	1	1	0	.	.	94.6	86.9	5449
435	23	3	1999	MilanTN	2	2	2.5	.	.	71.4	69.8	4380
434	24	3	1999	MilanTN	3	3	11.9	.	.	75	87.6	5492
433	25	3	1999	MilanTN	4	4	7.3	.	.	73.2	96.5	6050
432	26	3	1999	MilanTN	5	5	2	.	.	89.3	129.9	8147
1001	1	1	1998	ColumMO	1	2	63	.	1.4	100	90.8	5697
1002	2	1	1998	ColumMO	1	3	32	.	1.36	96.1	69.9	4386
1003	3	1	1998	ColumMO	1	4	74	.	1.45	90.4	59.5	3732
1004	4	1	1998	ColumMO	1	5	82	.	1.42	94.2	60.4	3792
1005	5	1	1998	ColumMO	2	3	69	.	1.44	92.3	67.2	4214
1006	6	1	1998	ColumMO	2	4	55	.	1.38	94.2	100.3	6291
1007	7	1	1998	ColumMO	2	5	71	.	1.33	86.5	79	4955
1008	8	1	1998	ColumMO	3	4	52	.	1.66	84.6	73	4578
1009	9	1	1998	ColumMO	3	5	55	.	1.48	94.2	56.8	3562
1010	10	1	1998	ColumMO	4	5	44	.	1.62	96.1	68.9	4322
1022	22	1	1998	ColumMO	1	1	17	.	0.95	100	104	6523
1023	23	1	1998	ColumMO	2	2	40	.	1.22	90.4	65.4	4102
1024	24	1	1998	ColumMO	3	3	21	.	1.46	98.1	59.4	3728
1025	25	1	1998	ColumMO	4	4	39	.	1.21	88.5	77.1	4835
1026	26	1	1998	ColumMO	5	5	10	.	1.15	98.1	82.3	5163
2007	1	2	1998	ColumMO	1	2	45	.	1.3	90.4	89.4	5610
2008	2	2	1998	ColumMO	1	3	33	.	1.36	98.1	112	7027
2006	3	2	1998	ColumMO	1	4	44	.	1.5	96.1	115	7213
2021	4	2	1998	ColumMO	1	5	27	.	1.15	100	126	7902
2016	5	2	1998	ColumMO	2	3	57	.	1.27	76.9	83.9	5259
2015	6	2	1998	ColumMO	2	4	50	.	1.25	84.6	94.7	5940
2017	7	2	1998	ColumMO	2	5	59	.	1.37	88.5	75.5	4734
2018	8	2	1998	ColumMO	3	4	46	.	1.55	82.7	104.2	6535
2009	9	2	1998	ColumMO	3	5	20	.	1.24	94.2	79.7	5000
2002	10	2	1998	ColumMO	4	5	37	.	1.48	82.7	83.4	5232
2025	22	2	1998	ColumMO	1	1	15	.	0.94	100	114.7	7194
2022	23	2	1998	ColumMO	2	2	40	.	1.22	100	41.2	2587
2026	24	2	1998	ColumMO	3	3	33	.	1.27	100	72.9	4573
2024	25	2	1998	ColumMO	4	4	27	.	1.16	86.5	62.9	3944
2023	26	2	1998	ColumMO	5	5	24	.	1.13	88.5	89.6	5623
3006	1	3	1998	ColumMO	1	2	19	.	1.26	100	123.3	7731
3007	2	3	1998	ColumMO	1	3	15	.	1.23	100	80.7	5061
3019	3	3	1998	ColumMO	1	4	6	.	1.4	98.1	113.7	7132
3010	4	3	1998	ColumMO	1	5	10	.	1.33	98.1	89.6	5618
3017	5	3	1998	ColumMO	2	3	4	.	1.3	92.3	86.5	5425
3005	6	3	1998	ColumMO	2	4	33	.	1.32	100	89	5583
3009	7	3	1998	ColumMO	2	5	13	.	1.15	100	104	6526
3020	8	3	1998	ColumMO	3	4	28	.	1.39	90.4	124	7779
3016	9	3	1998	ColumMO	3	5	8	.	1.36	96.1	134.7	8446
3003	10	3	1998	ColumMO	4	5	34	.	1.42	96.1	87.9	5511
3022	22	3	1998	ColumMO	1	1	21	.	1.13	100	79.5	4985
3026	23	3	1998	ColumMO	2	2	18	.	1.17	96.2	66	4142
3023	24	3	1998	ColumMO	3	3	34	.	1.24	96.2	63.8	3999
3024	25	3	1998	ColumMO	4	4	22	.	1.22	94.2	117.8	7388
3025	26	3	1998	ColumMO	5	5	49	.	1.13	98.1	61.6	3866
1004	1	1	1998	QuickKY	1	2	6.1	.	.	100	106.3	6669
1018	2	1	1998	QuickKY	1	3	4.5	.	.	100	66.6	4175
1003	3	1	1998	QuickKY	1	4	9.1	.	.	100	122.4	7676
1006	4	1	1998	QuickKY	1	5	6.1	.	.	100	115.9	7272
1013	5	1	1998	QuickKY	2	3	7.6	.	.	100	76.4	4795
1001	6	1	1998	QuickKY	2	4	1.5	.	.	100	77.1	4839
1023	7	1	1998	QuickKY	2	5	6.1	.	.	100	115.1	7222
1012	8	1	1998	QuickKY	3	4	12.1	.	.	100	84.7	5311
1022	9	1	1998	QuickKY	3	5	.	.	.	100	96.3	6039
1026	10	1	1998	QuickKY	4	5	13.6	.	.	100	117.6	7376
1021	22	1	1998	QuickKY	1	1	4.5	.	.	100	63.3	3973
1015	23	1	1998	QuickKY	2	2	.	.	.	100	38.4	2408
1019	24	1	1998	QuickKY	3	3	10.6	.	.	100	43.3	2715
1017	25	1	1998	QuickKY	4	4	4.5	.	.	100	97.1	6090
1020	26	1	1998	QuickKY	5	5	9.1	.	.	100	89.9	5641
2023	1	2	1998	QuickKY	1	2	12.1	.	.	100	97.7	6128
2022	2	2	1998	QuickKY	1	3	.	.	.	100	70.4	4416
2001	3	2	1998	QuickKY	1	4	.	.	.	100	73.5	4611
2009	4	2	1998	QuickKY	1	5	13.6	.	.	100	106.6	6684
2025	5	2	1998	QuickKY	2	3	21.2	.	.	100	49.9	3131
2002	6	2	1998	QuickKY	2	4	16.7	.	.	100	82.4	5171
2016	7	2	1998	QuickKY	2	5	15.2	.	.	100	101.9	6393
2020	8	2	1998	QuickKY	3	4	16.7	.	.	100	111.1	6972
2006	9	2	1998	QuickKY	3	5	18.2	.	.	100	117.1	7343
2012	10	2	1998	QuickKY	4	5	15.1	.	.	100	118.6	7441
2011	22	2	1998	QuickKY	1	1	7.6	.	.	100	32.6	2044
2005	23	2	1998	QuickKY	2	2	12.1	.	.	100	22.9	1434
2019	24	2	1998	QuickKY	3	3	13.6	.	.	100	45	2822
2010	25	2	1998	QuickKY	4	4	4.5	.	.	100	86.2	5410
2026	26	2	1998	QuickKY	5	5	6.1	.	.	100	60	3766
3012	1	3	1998	QuickKY	1	2	18.2	.	.	100	69.4	4353
3005	2	3	1998	QuickKY	1	3	19.7	.	.	100	68.6	4305
3025	3	3	1998	QuickKY	1	4	3	.	.	100	71.8	4501
3026	4	3	1998	QuickKY	1	5	6.1	.	.	100	75.1	4709
3010	5	3	1998	QuickKY	2	3	15.1	.	.	100	81.7	5122
3020	6	3	1998	QuickKY	2	4	19.7	.	.	100	97.9	6140
3018	7	3	1998	QuickKY	2	5	6.1	.	.	100	95.6	5997
3004	8	3	1998	QuickKY	3	4	12.1	.	.	100	89.1	5591
3024	9	3	1998	QuickKY	3	5	7.6	.	.	100	118.8	7451
3013	10	3	1998	QuickKY	4	5	15.1	.	.	100	97.9	6141
3008	22	3	1998	QuickKY	1	1	.	.	.	100	42.5	2663
3021	23	3	1998	QuickKY	2	2	9.1	.	.	100	62.5	3920
3003	24	3	1998	QuickKY	3	3	21.2	.	.	100	43.4	2725
3017	25	3	1998	QuickKY	4	4	3	.	.	100	85.4	5356
3022	26	3	1998	QuickKY	5	5	.	.	.	100	61	3828
1006	1	1	1998	LexingKY	1	2	5.5	3.23	1.27	100	125.8	7887
1001	2	1	1998	LexingKY	1	3	6.9	3.2	1.41	100	114.1	7157
1023	3	1	1998	LexingKY	1	4	7.4	3.12	1.42	93	101.1	6342
1005	4	1	1998	LexingKY	1	5	4.1	2.95	1.41	100	108.9	6833
1004	5	1	1998	LexingKY	2	3	8.3	3	1.51	100	133.5	8373
1017	6	1	1998	LexingKY	2	4	6.9	3.17	1.22	100	116.2	7285
1002	7	1	1998	LexingKY	2	5	9	3	1.36	91.6	112.9	7083
1018	8	1	1998	LexingKY	3	4	2.7	3.3	1.33	100	113.4	7110
1015	9	1	1998	LexingKY	3	5	5.5	3	1.25	100	108.4	6797
1025	10	1	1998	LexingKY	4	5	11.1	3.12	1.36	100	126.2	7917
1020	22	1	1998	LexingKY	1	1	2.9	2.9	1.14	93	85	5334
1019	23	1	1998	LexingKY	2	2	4.1	3	1.36	100	83.6	5245
1010	24	1	1998	LexingKY	3	3	7.2	2.98	1.25	95.8	81.8	5132
1022	25	1	1998	LexingKY	4	4	6.9	2.99	1.3	100	73.4	4602
1012	26	1	1998	LexingKY	5	5	10.5	3.05	1.26	79.1	60.7	3806
2020	1	2	1998	LexingKY	1	2	5.5	2.91	1.18	100	131.1	8225
2014	2	2	1998	LexingKY	1	3	8.3	2.96	1.28	100	113	7090
2001	3	2	1998	LexingKY	1	4	5.5	3.03	1.21	100	121.7	7636
2003	4	2	1998	LexingKY	1	5	4.6	2.91	1.41	88.8	99.1	6218
2025	5	2	1998	LexingKY	2	3	4.1	3.05	1.34	100	113.7	7130
2026	6	2	1998	LexingKY	2	4	18	3.1	1.42	100	131.9	8274
2009	7	2	1998	LexingKY	2	5	9.7	3.32	1.3	100	129.6	8132
2019	8	2	1998	LexingKY	3	4	4.1	3.34	1.41	100	135.9	8526
2004	9	2	1998	LexingKY	3	5	7.5	3	1.25	91.6	101.1	6342
2006	10	2	1998	LexingKY	4	5	6.9	3.11	1.42	100	108.2	6786
2017	22	2	1998	LexingKY	1	1	1.3	2.9	1.17	100	73.7	4624
2002	23	2	1998	LexingKY	2	2	2.7	2.89	1.25	100	75.3	4725
2007	24	2	1998	LexingKY	3	3	8.3	3.1	1.51	100	78	4892
2024	25	2	1998	LexingKY	4	4	11.1	3.07	1.39	100	92.8	5823
2023	26	2	1998	LexingKY	5	5	9.7	2.91	1.11	100	94.4	5919
3001	1	3	1998	LexingKY	1	2	2.7	2.92	1.53	100	141.8	8895
3017	2	3	1998	LexingKY	1	3	1.3	3.12	1.2	100	116.8	7325
3024	3	3	1998	LexingKY	1	4	8.3	3	1.14	100	135.5	8499
3025	4	3	1998	LexingKY	1	5	6.9	2.82	1.22	100	136	8530
3002	5	3	1998	LexingKY	2	3	2.7	2.92	1.37	100	125.5	7872
3019	6	3	1998	LexingKY	2	4	5.5	3.05	1.42	100	164.7	10332
3010	7	3	1998	LexingKY	2	5	15.2	3.11	1.41	100	135.9	8521
3015	8	3	1998	LexingKY	3	4	4.1	3	1.45	100	141.2	8857
3016	9	3	1998	LexingKY	3	5	0	3.2	1.05	100	115.6	7253
3009	10	3	1998	LexingKY	4	5	13.8	3.26	1.52	100	133	8343
3020	22	3	1998	LexingKY	1	1	2.7	3.92	1.36	100	90.9	5700
3014	23	3	1998	LexingKY	2	2	2.7	2.88	1.24	100	76.6	4802
3021	24	3	1998	LexingKY	3	3	8.3	3.12	1.45	100	81.6	5116
3018	25	3	1998	LexingKY	4	4	11.1	2.86	1.12	100	91.3	5724
3008	26	3	1998	LexingKY	5	5	4.1	3	1.22	100	104.5	6552
;

proc mixed data=one;
 class par1 par2 year loc rep;
 model kgyield = par1*par2;
 random loc year(loc) rep*year(loc);
 estimate 'pure line mean' intercept 5 par1*par2 1 0 0 0 0   1 0 0 0   1 0 0  1 0   1/divisor=5 ;
 estimate 'avg heterosis' par1*par2  -4 2 2 2 2   -4 2 2 2   -4 2 2  -4 2   -4/divisor=20;
 ** avg of 4 heterosis values per line ;
 estimate 'heterosis 1' par1*par2  -4 2 2 2 2  -1 0 0 0   -1 0 0  -1 0   -1/divisor=8;
 estimate 'heterosis 2' par1*par2  -1 2 0 0 0  -4 2 2 2   -1 0 0  -1 0   -1/divisor=8;
 estimate 'heterosis 3' par1*par2  -1 0 2 0 0  -1 2 0 0   -4 2 2  -1 0   -1/divisor=8;
 estimate 'heterosis 4' par1*par2  -1 0 0 2 0  -1 0 2 0   -1 2 0  -4 2   -1/divisor=8;
 estimate 'heterosis 5' par1*par2  -1 0 0 0 2  -1 0 0 2   -1 0 2  -1 2   -4/divisor=8;
 ** deviation of line heterosis from avg heterosis;
estimate 'dev heterosis 1' par1*par2  -12 6 6 6 6   3 -4 -4 -4   3 -4 -4  3 -4   3/divisor=40;
estimate 'dev heterosis 2' par1*par2  3 6 -4 -4 -4  -12 6 6 6   3 -4 -4  3 -4   3/divisor=40;
estimate 'dev heterosis 3' par1*par2  3 -4 6 -4 -4   3 6 -4 -4  -12 6 6  3 -4   3/divisor=40;
estimate 'dev heterosis 4' par1*par2  3 -4 -4 6 -4   3 -4 6 -4   3 6 -4  -12 6   3/divisor=40;
estimate 'dev heterosis 5' par1*par2  3 -4 -4 -4 6   3 -4 -4 6   3 -4 6  3 6   -12/divisor=40;
 ***** cross heterosis;
 estimate 'hij 1-2'  par1*par2 -1 2 0 0 0  -1 /divisor=2;
 estimate 'hij 1-3'  par1*par2 -1 0 2 0 0   0 0 0 0  -1/divisor=2;
 estimate 'hij 1-4'  par1*par2 -1 0 0 2 0   0 0 0 0   0 0 0  -1/divisor=2;
 estimate 'hij 1-5'  par1*par2 -1 0 0 0 2   0 0 0 0   0 0 0   0 0  -1 /divisor=2;
 estimate 'hij 2-3'  par1*par2  0 0 0 0 0  -1 2 0 0  -1/divisor=2;
 estimate 'hij 2-4'  par1*par2  0 0 0 0 0  -1 0 2 0   0 0 0  -1/divisor=2;
 estimate 'hij 2-5'  par1*par2  0 0 0 0 0  -1 0 0 2   0 0 0   0 0  -1 /divisor=2;
 estimate 'hij 3-4'  par1*par2  0 0 0 0 0   0 0 0 0  -1 2 0  -1/divisor=2;
 estimate 'hij 3-5'  par1*par2  0 0 0 0 0   0 0 0 0  -1 0 2   0 0  -1 /divisor=2;
 estimate 'hij 4-5'  par1*par2  0 0 0 0 0   0 0 0 0   0 0 0  -1 2  -1 /divisor=2;
 ***** specific heterosis;
 estimate 'Sij 1-2' par1*par2 0   12   -4   -4   -4  0   -4   -4   -4  4  0  0  4  0  4
 /divisor=20;
 estimate 'Sij 1-3' par1*par2  0   -4   12   -4   -4  4   -4  0  0  0   -4   -4  4  0  4
 /divisor=20;
 estimate 'Sij 1-4' par1*par2  0   -4   -4   12   -4  4  0   -4  0  4   -4  0  0   -4  4
 /divisor=20;
 estimate 'Sij 1-5' par1*par2  0   -4   -4   -4   12  4  0  0   -4  4  0   -4  4   -4  0
 /divisor=20;
 estimate 'Sij 2-3' par1*par2  4   -4   -4  0  0  0   12   -4   -4  0   -4   -4  4  0  4
 /divisor=20;
 estimate 'Sij 2-4' par1*par2  4   -4  0   -4  0  0   -4   12   -4  4   -4  0  0   -4  4
 /divisor=20;
 estimate 'Sij 2-5' par1*par2  4   -4  0  0   -4  0   -4   -4   12  4  0   -4  4   -4  0
 /divisor=20;
 estimate 'Sij 3-4' par1*par2  4  0   -4   -4  0  4   -4   -4  0  0   12   -4  0   -4  4
 /divisor=20;
 estimate 'Sij 3-5' par1*par2  4  0   -4  0   -4  4   -4  0   -4  0   -4   12  4   -4  0
 /divisor=20;
 estimate 'Sij 4-5' par1*par2  4  0  0   -4   -4  4  0   -4   -4  4   -4   -4  0   12  0
 /divisor=20;

 lsmeans par1*par2;
run;



/*   Beginning of a general program to generate estimate statements for diallel experiments  */
proc iml;
**** program to generate contrast coefficients for diallels with parents but no reciprocals;
***enter number of lines;  nlines=5;

reset fw=6;
ncol=nlines*(nlines+1)/2;
ncross=nlines*(nlines-1)/2;
crosshet=j(ncross,ncol,0);
cont=0;
do mx=1 to nlines;
do fx=mx+1 to nlines;
cont=cont+1;
coeff=0;
do ii=1 to nlines;
do jj=ii to nlines;
coeff=coeff+1;
if ii=mx & jj=mx then crosshet[cont,coeff]=-1;
if ii=fx & jj=fx then crosshet[cont,coeff]=-1;
if ii=mx & jj=fx then crosshet[cont,coeff]=2;
end;end;end;end;
divisor1=2;
print divisor1, crosshet;
divisor5=2*ncross;
avghet=crosshet[+,];
print divisor5, avghet;

linehet=j(nlines,ncol,0);
cont=0;
do mx=1 to nlines;
do fx=mx+1 to nlines;
cont=cont+1;
do ll=1 to nlines;
 if ll=mx | ll=fx then linehet[ll,]=linehet[ll,]+crosshet[cont,];
end;end;end;
divisor2=2*nlines;
print divisor2 , linehet;

spechet=crosshet*(divisor2);
cont=0;
do mx=1 to nlines;
do fx=mx+1 to nlines;
cont=cont+1;
do ll=1 to nlines;
 if ll=mx | ll=fx then spechet[cont,]=spechet[cont,]-divisor1*linehet[ll,];
end;end;end;
divisor3=divisor1*divisor2;
print divisor3, spechet;
quit;



