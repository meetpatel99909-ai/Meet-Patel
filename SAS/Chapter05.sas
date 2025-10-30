libname julie 'c:\Documents and Settings\sasjmp\My Documents';
 /*------------------------------------------------------------------ */
 /*     Genetic Analysis of Complex Traits Using SAS    Chapter 5     */ 
 /*     Manjit S. Kang, Mónica G. Balzarini, and Jose L. L. Guerra    */
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
 

/*  All macros are listed at the bottom of this file, 
    except pdmix800.sas and glimmix8.sas.
    Create separate files for all programs and %include them, 
    or simply open the code and submit in SAS.

    Datasets have been incorporated into this file, so use of
    proc import is not needed.  The comma separated format has been
    retained so separate files can be easily created if so desired.
*/


/*   Chapter 5.1   */

data peanut; infile CARDS firstobs=2 dsd;
  input geno$ rep yield env gen;
datalines;
geno,rep,yield,env,gen
Florman,1,0.5218,1,1
Florman,2,0.5923,1,1
Florman,3,0.7686,1,1
Florman,4,1.3326,1,1
Florman,1,1.8744,2,1
Florman,2,1.6779,2,1
Florman,3,2.6075,2,1
Florman,4,2.5168,2,1
Florman,1,2.3384,3,1
Florman,2,2.0008,3,1
Florman,3,2.9608,3,1
Florman,4,2.4216,3,1
Florman,1,2.98188,4,1
Florman,2,2.440426667,4,1
Florman,3,2.9159,4,1
Florman,4,2.51502,4,1
Florman,1,1.6814,5,1
Florman,2,1.4929,5,1
Florman,3,0.611,5,1
Florman,4,0.7314,5,1
Florman,1,3.7044,6,1
Florman,2,3.5603,6,1
Florman,3,2.4936,6,1
Florman,4,2.5801,6,1
Florman,1,3.0979,7,1
Florman,2,2.5565,7,1
Florman,3,3.0569,7,1
Florman,4,2.5121,7,1
Florman,1,1.842346667,8,1
Florman,2,1.602626667,8,1
Florman,3,1.7538,8,1
Florman,4,1.76418,8,1
Florman,1,2.0453,9,1
Florman,2,2.0818,9,1
Florman,3,2.7733,9,1
Florman,4,1.7324,9,1
Florman,1,4.6883,10,1
Florman,2,3.8174,10,1
Florman,3,4.1408,10,1
Florman,4,4.5264,10,1
Florman,1,1.39,11,1
Florman,2,1.37,11,1
Florman,3,2.55,11,1
Florman,4,1.98,11,1
Florman,1,5.109066667,12,1
Florman,2,5.9182,12,1
Florman,3,5.3818,12,1
Florman,4,4.928,12,1
Florman,1,1.15,13,1
Florman,2,1.09,13,1
Florman,3,1.29,13,1
Florman,1,4.94,14,1
Florman,2,3.95,14,1
Florman,3,3.83,14,1
Florman,4,4.85,14,1
Florman,1,1.798,15,1
Florman,2,3.6176,15,1
Florman,3,3.96682,15,1
Florman,4,4.2728,15,1
Tegua,1,0.9892,1,2
Tegua,2,0.7685,1,2
Tegua,3,0.6761,1,2
Tegua,4,1.402,1,2
Tegua,1,1.4012,2,2
Tegua,2,1.6476,2,2
Tegua,3,3.2105,2,2
Tegua,4,1.9017,2,2
Tegua,1,2.3136,3,2
Tegua,2,2.5486,3,2
Tegua,3,2.6795,3,2
Tegua,4,2.7674,3,2
Tegua,1,2.297,4,2
Tegua,2,2.259506667,4,2
Tegua,3,2.16286,4,2
Tegua,4,2.32199,4,2
Tegua,1,1.8544,5,2
Tegua,2,1.4136,5,2
Tegua,3,0.646,5,2
Tegua,4,0.6384,5,2
Tegua,1,3.7737,6,2
Tegua,2,3.5079,6,2
Tegua,3,2.7411,6,2
Tegua,4,2.8549,6,2
Tegua,1,3.649,7,2
Tegua,2,2.6708,7,2
Tegua,3,2.5214,7,2
Tegua,4,2.6921,7,2
Tegua,1,2.0997,8,2
Tegua,2,1.56415,8,2
Tegua,3,1.83141,8,2
Tegua,4,1.4212,8,2
Tegua,1,2.308,9,2
Tegua,2,2.1827,9,2
Tegua,3,2.721,9,2
Tegua,4,2.5661,9,2
Tegua,1,4.0963,10,2
Tegua,2,3.9642,10,2
Tegua,3,4.4383,10,2
Tegua,4,4.3451,10,2
Tegua,1,1.27,11,2
Tegua,2,1.83,11,2
Tegua,3,1.67,11,2
Tegua,4,2.08,11,2
Tegua,1,5.118133333,12,2
Tegua,2,5.408826667,12,2
Tegua,3,4.809636667,12,2
Tegua,4,4.4014,12,2
Tegua,1,1.74,13,2
Tegua,2,0.94,13,2
Tegua,3,1.27,13,2
Tegua,1,4.31,14,2
Tegua,2,4.48,14,2
Tegua,3,4.71,14,2
Tegua,4,4.1,14,2
Tegua,1,3.7835,15,2
Tegua,2,3.274533333,15,2
Tegua,3,3.245186667,15,2
Tegua,4,3.50556,15,2
mf484,1,1.4588,1,3
mf484,2,0.5318,1,3
mf484,3,1.0923,1,3
mf484,4,1.5665,1,3
mf484,1,0.94,2,3
mf484,2,0.9328,2,3
mf484,3,1.1931,2,3
mf484,4,1.2582,2,3
mf484,1,3.0043,3,3
mf484,2,2.0628,3,3
mf484,3,2.9453,3,3
mf484,4,2.5457,3,3
mf484,1,2.3467,4,3
mf484,2,2.28304,4,3
mf484,3,1.759366667,4,3
mf484,4,2.178866667,4,3
mf484,1,1.4916,5,3
mf484,2,1.796,5,3
mf484,3,1.073,5,3
mf484,4,2.4733,5,3
mf484,1,3.4687,6,3
mf484,2,3.1101,6,3
mf484,3,3.0004,6,3
mf484,4,2.6345,6,3
mf484,1,3.2418,7,3
mf484,2,2.4371,7,3
mf484,3,3.1743,7,3
mf484,4,2.7948,7,3
mf484,1,2.753613333,8,3
mf484,2,3.2224,8,3
mf484,3,2.97088,8,3
mf484,4,2.494426667,8,3
mf484,1,2.5678,9,3
mf484,2,3.2264,9,3
mf484,3,2.886,9,3
mf484,4,2.257,9,3
mf484,1,4.2004,10,3
mf484,2,4.951,10,3
mf484,3,4.4658,10,3
mf484,4,4.2004,10,3
mf484,1,1.75,11,3
mf484,2,2.64,11,3
mf484,3,3.47,11,3
mf484,4,2.25,11,3
mf484,1,5.394586667,12,3
mf484,2,5.448386667,12,3
mf484,3,5.79852,12,3
mf484,4,5.618716667,12,3
mf484,1,2.93,13,3
mf484,2,2.01,13,3
mf484,3,2.41,13,3
mf484,1,3.54,14,3
mf484,2,4.51,14,3
mf484,3,5.31,14,3
mf484,4,3.74,14,3
mf484,1,2.969626667,15,3
mf484,2,3.040393333,15,3
mf484,3,2.133,15,3
mf484,4,3.081846667,15,3
mf485,1,1.0026,1,4
mf485,2,1.1396,1,4
mf485,3,1.219,1,4
mf485,4,1.1252,1,4
mf485,1,0.4109,2,4
mf485,2,0.6545,2,4
mf485,3,0.8371,2,4
mf485,4,0.4109,2,4
mf485,1,2.1196,3,4
mf485,2,2.85,3,4
mf485,3,2.1803,3,4
mf485,4,1.808,3,4
mf485,1,1.68975,4,4
mf485,2,1.91178,4,4
mf485,3,2.0176,4,4
mf485,4,1.900253333,4,4
mf485,1,1.0707,5,4
mf485,2,1.1913,5,4
mf485,3,0.3393,5,4
mf485,4,0.7992,5,4
mf485,1,2.9639,6,4
mf485,2,3.0229,6,4
mf485,3,2.7575,6,4
mf485,4,2.8681,6,4
mf485,1,2.5935,7,4
mf485,2,1.8744,7,4
mf485,3,2.4788,7,4
mf485,4,3.1752,7,4
mf485,1,2.55696,8,4
mf485,2,2.19168,8,4
mf485,3,1.83762,8,4
mf485,4,1.93375,8,4
mf485,1,2.4606,9,4
mf485,2,3.0851,9,4
mf485,3,2.4309,9,4
mf485,4,4.0367,9,4
mf485,1,4.9857,10,4
mf485,2,5.1221,10,4
mf485,3,3.9628,10,4
mf485,4,3.7885,10,4
mf485,1,1.74,11,4
mf485,2,2.47,11,4
mf485,3,1.6,11,4
mf485,4,1.65,11,4
mf485,1,5.831116667,12,4
mf485,2,5.168,12,4
mf485,3,5.647766667,12,4
mf485,4,5.08838,12,4
mf485,1,1.8,13,4
mf485,2,1.97,13,4
mf485,3,1.57,13,4
mf485,1,4,14,4
mf485,2,3.35,14,4
mf485,3,3.71,14,4
mf485,4,4.01,14,4
mf485,1,3.380286667,15,4
mf485,2,2.855646667,15,4
mf485,3,4.141126667,15,4
mf485,4,2.236973333,15,4
mf487,1,0.7848,1,5
mf487,2,0.4108,1,5
mf487,3,1.1369,1,5
mf487,4,1.1369,1,5
mf487,1,1.3965,2,5
mf487,2,1.4036,2,5
mf487,3,1.4887,2,5
mf487,4,1.7793,2,5
mf487,1,2.3363,3,5
mf487,2,2.2572,3,5
mf487,3,2.7513,3,5
mf487,4,1.8426,3,5
mf487,1,1.521496667,4,5
mf487,2,1.99894,4,5
mf487,3,1.735793333,4,5
mf487,4,1.6261,4,5
mf487,1,2.2892,5,5
mf487,2,1.2726,5,5
mf487,3,0.6053,5,5
mf487,4,0.7993,5,5
mf487,1,3.6643,6,5
mf487,2,3.4353,6,5
mf487,3,2.5803,6,5
mf487,4,2.0994,6,5
mf487,1,3.1438,7,5
mf487,2,2.4825,7,5
mf487,3,2.873,7,5
mf487,4,2.4174,7,5
mf487,1,2.12064,8,5
mf487,2,1.301536667,8,5
mf487,3,1.4176,8,5
mf487,4,1.5771,8,5
mf487,1,3.8425,9,5
mf487,2,2.2768,9,5
mf487,3,3.6988,9,5
mf487,4,2.8894,9,5
mf487,1,4.8507,10,5
mf487,2,3.2921,10,5
mf487,3,3.9155,10,5
mf487,4,4.9115,10,5
mf487,1,1.31,11,5
mf487,2,1.34,11,5
mf487,3,2.31,11,5
mf487,4,1.89,11,5
mf487,1,5.24597,12,5
mf487,2,5.052753333,12,5
mf487,3,5.26471,12,5
mf487,4,4.38,12,5
mf487,1,1.56,13,5
mf487,2,1.53,13,5
mf487,3,1.54,13,5
mf487,1,3.48,14,5
mf487,2,4.28,14,5
mf487,3,4.5,14,5
mf487,4,4.43,14,5
mf487,1,3.14432,15,5
mf487,2,4.0868,15,5
mf487,3,4.19926,15,5
mf487,4,3.92365,15,5
mf489,1,0.6984,1,6
mf489,2,1.382,1,6
mf489,3,1.2705,1,6
mf489,4,1.0773,1,6
mf489,1,1.1579,2,6
mf489,2,0.6281,2,6
mf489,3,0.8173,2,6
mf489,4,0.8476,2,6
mf489,1,2.4563,3,6
mf489,2,2.2956,3,6
mf489,3,1.7776,3,6
mf489,4,2.2526,3,6
mf489,1,1.092043333,4,6
mf489,2,2.858133333,4,6
mf489,3,2.199,4,6
mf489,4,2.5542,4,6
mf489,1,1.488,5,6
mf489,2,1.1735,5,6
mf489,3,0.79,5,6
mf489,4,1.3729,5,6
mf489,1,2.9995,6,6
mf489,2,2.7779,6,6
mf489,3,2.2755,6,6
mf489,4,2.2372,6,6
mf489,1,3.3124,7,6
mf489,2,2.7048,7,6
mf489,3,2.5551,7,6
mf489,4,3.0473,7,6
mf489,1,2.79258,8,6
mf489,2,2.769813333,8,6
mf489,3,1.810966667,8,6
mf489,4,1.7816,8,6
mf489,1,3.365,9,6
mf489,2,1.9446,9,6
mf489,3,3.4106,9,6
mf489,4,4.2689,9,6
mf489,1,3.9735,10,6
mf489,2,3.6385,10,6
mf489,3,4.3769,10,6
mf489,4,4.1333,10,6
mf489,1,2.02,11,6
mf489,2,3.01,11,6
mf489,3,2.01,11,6
mf489,4,2.05,11,6
mf489,1,4.927,12,6
mf489,2,4.8342,12,6
mf489,3,4.7333,12,6
mf489,4,4.166333333,12,6
mf489,1,1.79,13,6
mf489,2,2.63,13,6
mf489,3,1.57,13,6
mf489,1,4.71,14,6
mf489,2,4.19,14,6
mf489,3,5.15,14,6
mf489,4,4.94,14,6
mf489,1,3.668973333,15,6
mf489,2,3.52,15,6
mf489,3,3.966346667,15,6
mf489,4,3.01896,15,6
manf393,1,1.1393,1,7
manf393,2,1.1249,1,7
manf393,3,1.0816,1,7
manf393,4,1.6297,1,7
manf393,1,1.4945,2,7
manf393,2,1.197,2,7
manf393,3,1.7643,2,7
manf393,4,1.8197,2,7
manf393,1,2.002,3,7
manf393,2,2.6324,3,7
manf393,3,2.6098,3,7
manf393,4,2.6349,3,7
manf393,1,1.349213333,4,7
manf393,2,1.836666667,4,7
manf393,3,2.17838,4,7
manf393,4,1.723953333,4,7
manf393,1,1.9473,5,7
manf393,2,1.6028,5,7
manf393,3,1.4482,5,7
manf393,4,1.1951,5,7
manf393,1,3.3075,6,7
manf393,2,3.1185,6,7
manf393,3,2.5245,6,7
manf393,4,2.6663,6,7
manf393,1,3.3957,7,7
manf393,2,2.789,7,7
manf393,3,2.8538,7,7
manf393,4,2.8099,7,7
manf393,1,2.34432,8,7
manf393,2,1.8768,8,7
manf393,3,1.999226667,8,7
manf393,4,2.41224,8,7
manf393,1,2.7645,9,7
manf393,2,4.1944,9,7
manf393,3,4.0331,9,7
manf393,4,2.2072,9,7
manf393,1,3.0426,10,7
manf393,2,3.6482,10,7
manf393,3,3.9253,10,7
manf393,4,3.5965,10,7
manf393,1,1.65,11,7
manf393,2,1.96,11,7
manf393,3,2.67,11,7
manf393,4,2.35,11,7
manf393,1,4.516893333,12,7
manf393,2,4.4198,12,7
manf393,3,5.356186667,12,7
manf393,4,4.472,12,7
manf393,1,2.27,13,7
manf393,2,2.65,13,7
manf393,3,1.79,13,7
manf393,1,4.7,14,7
manf393,2,4.08,14,7
manf393,3,4.01,14,7
manf393,4,3.73,14,7
manf393,1,2.424773333,15,7
manf393,2,2.2792,15,7
manf393,3,2.20336,15,7
manf393,4,1.984803333,15,7
mf447,1,0.7518,1,8
mf447,2,1.0949,1,8
mf447,3,0.8905,1,8
mf447,4,1.0656,1,8
mf447,1,1.6184,2,8
mf447,2,1.1381,2,8
mf447,3,0.7538,2,8
mf447,4,1.6554,2,8
mf447,1,1.9955,3,8
mf447,2,2.1212,3,8
mf447,3,2.8092,3,8
mf447,4,2.4521,3,8
mf447,1,1.38411,4,8
mf447,2,1.711786667,4,8
mf447,3,1.574516667,4,8
mf447,4,1.75187,4,8
mf447,1,2.242,5,8
mf447,2,1.4516,5,8
mf447,3,1.8316,5,8
mf447,4,1.9,5,8
mf447,1,3.2911,6,8
mf447,2,2.6336,6,8
mf447,3,2.4435,6,8
mf447,4,1.9734,6,8
mf447,1,3.3939,7,8
mf447,2,3.2932,7,8
mf447,3,3.6049,7,8
mf447,4,3.35,7,8
mf447,1,1.587166667,8,8
mf447,2,1.265246667,8,8
mf447,3,1.6184,8,8
mf447,4,1.28576,8,8
mf447,1,2.6012,9,8
mf447,2,3.0222,9,8
mf447,3,4.6687,9,8
mf447,4,1.7667,9,8
mf447,1,3.5414,10,8
mf447,2,3.8557,10,8
mf447,3,3.9835,10,8
mf447,4,3.9835,10,8
mf447,1,1.66,11,8
mf447,2,1.7,11,8
mf447,3,2.31,11,8
mf447,4,1.86,11,8
mf447,1,4.25799,12,8
mf447,2,4.05942,12,8
mf447,3,4.209333333,12,8
mf447,4,4.130663333,12,8
mf447,1,1.55,13,8
mf447,2,1.4,13,8
mf447,3,1.94,13,8
mf447,1,3.94,14,8
mf447,2,3.35,14,8
mf447,3,3.76,14,8
mf447,4,4.09,14,8
mf447,1,2.64307,15,8
mf447,2,3.05052,15,8
mf447,3,1.837593333,15,8
mf447,4,2.32162,15,8
mf478,1,1.4104,1,9
mf478,2,1.2947,1,9
mf478,3,1.2368,1,9
mf478,4,1.5406,1,9
mf478,1,1.7262,2,9
mf478,2,1.9555,2,9
mf478,3,2.7714,2,9
mf478,4,2.151,2,9
mf478,1,1.9257,3,9
mf478,2,2.1476,3,9
mf478,3,2.3523,3,9
mf478,4,2.3259,3,9
mf478,1,1.779383333,4,9
mf478,2,2.3161,4,9
mf478,3,2.26512,4,9
mf478,4,2.2568,4,9
mf478,1,2.3256,5,9
mf478,2,2.1067,5,9
mf478,3,2.0041,5,9
mf478,4,1.498,5,9
mf478,1,2.8099,6,9
mf478,2,2.2137,6,9
mf478,3,2.2327,6,9
mf478,4,2.1947,6,9
mf478,1,3.8174,7,9
mf478,2,3.3157,7,9
mf478,3,2.4602,7,9
mf478,4,3.2054,7,9
mf478,1,2.155786667,8,9
mf478,2,1.91384,8,9
mf478,3,2.3655,8,9
mf478,4,2.3529,8,9
mf478,1,3.6618,9,9
mf478,2,2.354,9,9
mf478,3,4.6556,9,9
mf478,4,2.8098,9,9
mf478,1,3.831,10,9
mf478,2,3.708,10,9
mf478,3,3.6934,10,9
mf478,4,2.8896,10,9
mf478,1,1.37,11,9
mf478,2,1.95,11,9
mf478,3,2.39,11,9
mf478,4,2.66,11,9
mf478,1,5.045906667,12,9
mf478,2,5.16896,12,9
mf478,3,4.899906667,12,9
mf478,4,3.677013333,12,9
mf478,1,1.88,13,9
mf478,2,1.36,13,9
mf478,3,1.39,13,9
mf478,1,4.56,14,9
mf478,2,4.18,14,9
mf478,3,4.21,14,9
mf478,4,4.38,14,9
mf478,1,2.79464,15,9
mf478,2,3.443733333,15,9
mf478,3,2.842833333,15,9
mf478,4,3.2604,15,9
mf480,1,1.8727,1,10
mf480,2,0.9225,1,10
mf480,3,1.082,1,10
mf480,4,1.7825,1,10
mf480,1,2.9739,2,10
mf480,2,3.5512,2,10
mf480,3,3.3685,2,10
mf480,4,3.1712,2,10
mf480,1,1.807,3,10
mf480,2,2.1372,3,10
mf480,3,1.98,3,10
mf480,4,2.8285,3,10
mf480,1,1.935733333,4,10
mf480,2,2.18784,4,10
mf480,3,2.12072,4,10
mf480,4,1.90624,4,10
mf480,1,2.623,5,10
mf480,2,1.3433,5,10
mf480,3,1.2655,5,10
mf480,4,1.2019,5,10
mf480,1,3.0808,6,10
mf480,2,1.9878,6,10
mf480,3,2.6641,6,10
mf480,4,1.981,6,10
mf480,1,2.6666,7,10
mf480,2,3.4646,7,10
mf480,3,2.958,7,10
mf480,4,2.7512,7,10
mf480,1,1.10864,8,10
mf480,2,0.796693333,8,10
mf480,3,0.936133333,8,10
mf480,4,0.97161,8,10
mf480,1,2.4237,9,10
mf480,2,2.2626,9,10
mf480,3,3.2223,9,10
mf480,4,2.2136,9,10
mf480,1,3.0703,10,10
mf480,2,3.3311,10,10
mf480,3,3.4248,10,10
mf480,4,3.0703,10,10
mf480,1,1.72,11,10
mf480,2,1.79,11,10
mf480,3,2.29,11,10
mf480,4,1.83,11,10
mf480,1,3.666496667,12,10
mf480,2,3.759466667,12,10
mf480,3,3.78858,12,10
mf480,4,3.046266667,12,10
mf480,1,1.55,13,10
mf480,2,1.09,13,10
mf480,3,0.81,13,10
mf480,1,4.05,14,10
mf480,2,3.84,14,10
mf480,3,3.8,14,10
mf480,4,3.19,14,10
mf480,1,1.79253,15,10
mf480,2,2.743936667,15,10
mf480,3,2.747866667,15,10
mf480,4,3.147733333,15,10
;

data Huehn;  infile CARDS firstobs=2 dsd;
input ind genotype location yield ;
datalines;
ind,genotype,location,yield
1,1,1,28.9
2,1,1,27.8
3,1,1,29.6
4,1,1,25.1
5,2,1,30.6
6,2,1,22.8
7,2,1,28
8,2,1,26.4
9,3,1,23.8
10,3,1,24
11,3,1,23.9
12,3,1,28.5
13,4,1,24.9
14,4,1,28.2
15,4,1,29.7
16,4,1,26.6
17,5,1,29.4
18,5,1,28.2
19,5,1,24.2
20,5,1,31.5
21,6,1,26.8
22,6,1,26.3
23,1,2,30.6
24,1,2,32.1
25,1,2,32
26,1,2,30.85
27,2,2,35.65
28,2,2,32.45
29,2,2,29.8
30,2,2,32.8
31,3,3,43.05
32,3,2,31.05
33,3,2,34
34,3,2,38.3
35,4,2,31.8
36,4,2,39.85
37,4,2,40.9
38,4,2,36.6
39,5,2,37.95
40,5,2,42.7
41,5,2,38.85
42,5,2,44
43,6,2,31.8
44,6,2,41
45,1,3,33.43
46,1,3,37.22
47,1,3,37.39
48,1,3,37.51
49,2,3,41.03
50,2,3,30.81
51,2,3,29.84
52,2,3,32.48
53,3,3,37.08
54,3,3,29.03
55,3,3,34.99
56,3,3,30.94
57,4,3,37.27
58,4,3,34.66
59,4,3,35.06
60,4,3,35.95
61,5,3,37.3
62,5,3,36.07
63,5,3,33.95
64,5,3,32.26
65,6,3,41.94
66,6,3,37.15
67,1,4,34.07
68,1,4,21.96
69,1,4,31.88
70,1,4,31.24
71,2,4,32.36
72,2,4,32.86
73,2,4,32.86
74,2,4,30.72
75,3,4,27.92
76,3,4,28.7
77,3,4,33.98
78,3,4,30.87
79,4,4,30.07
80,4,4,29.72
81,4,4,33.98
82,4,4,30.87
83,5,4,31.7
84,5,4,29.79
85,5,4,32.97
86,5,4,30.99
87,6,4,24.05
88,6,4,31.52
;
data kang;  infile CARDS firstobs=2 dsd;
input envindex gen  yield;
datalines;
envindex,gen,yield
1,1,10.2
1,2,8.8
1,3,8.8
1,4,9.3
1,5,9.6
1,6,7.2
1,7,8.4
1,8,9.6
1,9,7.9
1,10,10
1,11,9.3
1,12,8
1,13,10.1
1,14,9.4
1,15,10.8
1,16,6.3
1,17,7.4
2,1,7
2,2,7.8
2,3,7
2,4,6.9
2,5,7
2,6,8.3
2,7,7.4
2,8,6.5
2,9,6.8
2,10,7.9
2,11,7.3
2,12,6.8
2,13,8.1
2,14,7.1
2,15,7.1
2,16,6.4
2,17,4.1
3,1,5.3
3,2,4.4
3,3,5.3
3,4,4.4
3,5,5.5
3,6,4.6
3,7,6.2
3,8,6
3,9,6.5
3,10,5.3
3,11,5.7
3,12,4.4
3,13,4.2
3,14,5.6
3,15,5.8
3,16,3.9
3,17,3.8
4,1,7.8
4,2,5.9
4,3,7.3
4,4,5.9
4,5,7.8
4,6,6.3
4,7,7.9
4,8,7.5
4,9,7.6
4,10,5.4
4,11,5.6
4,12,7.8
4,13,6.5
4,14,8.1
4,15,7.5
4,16,5
4,17,5.4
5,1,9
5,2,9.2
5,3,8.8
5,4,10.6
5,5,8.3
5,6,9.3
5,7,9.6
5,8,8.8
5,9,7.9
5,10,9.1
5,11,7.7
5,12,9.5
5,13,9.4
5,14,9.4
5,15,10.3
5,16,8.8
5,17,8.7
6,1,6.9
6,2,7.7
6,3,7.9
6,4,7.9
6,5,7
6,6,8.9
6,7,9.4
6,8,7.9
6,9,6.5
6,10,7.2
6,11,5.4
6,12,6.2
6,13,7.2
6,14,8.8
6,15,7.3
6,16,7.1
6,17,6.4
7,1,4.9
7,2,2.5
7,3,3.4
7,4,2.5
7,5,3
7,6,2.5
7,7,3.6
7,8,5.6
7,9,3.8
7,10,3.9
7,11,3
7,12,3
7,13,2.5
7,14,2.6
7,15,3.8
7,16,2.8
7,17,1.6
8,1,6.4
8,2,6.4
8,3,8.1
8,4,7.2
8,5,7.5
8,6,6.6
8,7,7.7
8,8,7.6
8,9,7.8
8,10,7.5
8,11,6
8,12,7.2
8,13,6.8
8,14,7.6
8,15,6.9
8,16,7.2
8,17,7.3
9,1,8.4
9,2,6.1
9,3,6.8
9,4,6.1
9,5,8.2
9,6,6.9
9,7,6.9
9,8,9.1
9,9,9.2
9,10,7.7
9,11,6.7
9,12,7.8
9,13,6.5
9,14,5.2
9,15,8.3
9,16,6.8
9,17,7.1
10,1,8.7
10,2,9.4
10,3,8.8
10,4,7.9
10,5,7.8
10,6,7.8
10,7,11.4
10,8,9.9
10,9,8.6
10,10,8.5
10,11,8
10,12,8.3
10,13,9.1
10,14,11
10,15,8.1
10,16,7.8
10,17,8
11,1,5.4
11,2,5.2
11,3,5.6
11,4,4.6
11,5,4.8
11,6,5.7
11,7,6.6
11,8,6.8
11,9,5.2
11,10,4.8
11,11,4.9
11,12,5.4
11,13,4.5
11,14,5.6
11,15,7
11,16,6
11,17,5.6
12,1,8.6
12,2,8
12,3,9.2
12,4,8.1
12,5,8.3
12,6,8.9
12,7,8.6
12,8,9.6
12,9,9.5
12,10,7.7
12,11,7.6
12,12,8.3
12,13,6.6
12,14,9.5
12,15,9
12,16,9
12,17,8.5
;





**** Output 5.1  ***;
proc mixed data=peanut covtest; 
class  rep gen env;
model yield=  env gen gen*env ; 
random rep(env);
lsmeans gen /pdiff;
ods output diffs=p lsmeans=m;
ods listing exclude diffs lsmeans ;
run;
%include 'c:\PDMIX800.sas'; 
%pdmix800(p,m,alpha=.05, sort=yes);
run;

*** Output 5.2;
proc mixed data=peanut covtest; 
class  rep gen env;
model yield=  env gen gen*env ; 
random rep(env);
repeated/group=env;  
lsmeans gen /pdiff;
ods output diffs=p lsmeans=m;
ods listing exclude diffs lsmeans ;
run;
%include 'c:\PDMIX800.sas';
%pdmix800(p,m,alpha=.05, sort=yes);
run;


**** Output not shown  ***;
proc means data=peanut noprint mean;
  var yield;
  output out=yppp mean=yppp;
proc sort data=peanut; by env;
proc means noprint mean; by env;
  var yield;
  output out=yipp mean=yipp;
proc sort data=peanut; by gen;
proc means noprint mean; by gen;
  var yield;
  output out=ypjp mean=ypjp;
data enveff;
  merge yipp yppp;
  by _TYPE_;
  ei=yipp-yppp;
proc glm data= peanut noprint;
  class env gen rep;
  model yield=env rep(env) gen/p;
  output out=pred r=zij;
proc sort data=pred;by env;
proc sort data=enveff;by env;
data Ze;
  merge pred enveff;
  by env;
proc sort out=GEI;by gen;
proc reg data=GEI outest=estimate;by gen; 
   model zij=ei/noint;
data estimate;
set estimate;
betai=ei;keep gen betai;
proc print data=estimate;run;

**** Output 5.2 5.3 5.4 5.5;
goptions reset=all cback=white;

%include 'c:\FixedBiplot.sas'; 
goptions colors=(black);
%FixedBiplot(peanut,15,10,4,yield,env,gen,rep,geno); 


**** Output 5.6  ***;
goptions cback=white;
options nodate ls=75;
%include 'c:\GLBM.sas';
%GLBM(DATA=peanut, ENV_N=15 ,GEN_N=10, REP_N=4,
      VAR=yield, ENV=env ,GEN=gen, REP=rep,COMMENT=SREG); 
%include 'c:\PC1PC2PLOT.sas';
%PC1PC2PLOT(DATA=peanut,VAR=yield, ENV=env ,GEN=gen,
          SCORE_e=c.vece, SCORE_g=c.vecg, GENCOD=geno);   **macro creates lib c in c:\ ;


/*  Chapter 5.2.3  */


/* Mixed ANOVA for fixed genotypes, random environmental and replication(environment) effects.
Assumptions for the GEI terms: homogeneous variance and independence */;
proc mixed data=peanut;
class env gen rep;
model yield=gen;
random env rep(env) gen*env;



/* Mixed Shukla model for fixed genotypes, random environmental and replication(environment) effects.
Assumptions for the GEI terms: Heterogeneous by genotypes variances and independence */;
proc mixed data=peanut;
class env gen rep;
model yield=gen;
random int rep/subject=env;
random gen/subject=env type=UN(1);


/* Mixed AMMI(n) model for fixed genotypes, random environmental and replication(environment) effects. 
Assumptions for the GEI terms: Heterogeneous by genotypes variances and covariances between GE terms 
of two genotypes in the same environment */;
proc mixed data=peanut;
class env gen rep;
model yield=gen;
random int rep/subject=env;
random gen/subject=env type=FA0(1);



/* Mixed Eberhart & Russell model for fixed genotypes, random replication(environment) effects. 
Assumptions for the GEI terms: Heterogeneous by genotypes variances and covariances between GEI terms 
of two genotypes in the same environment */;
proc mixed data=peanut;
class env gen rep;
model yield=gen;
random rep/subject=env;
random gen/subject=env type=FA1(1);


/* Mixed HetR model for fixed genotypes, random environmental and replication(environment) effects. 
Assumptions for the GEI terms: homogeneous variance and independence.  Assumptions for the error terms: 
heterogeneous by environment variance */;
proc mixed data=peanut;
class env gen rep;
model yield=gen;
random env rep(env) gen*env;
repeated/group=env;



**** Output 5.7 5.8   ***;

/* creating base files for appending results*/;
        data crit;
        length structr $25;
        length descr $25;
        structr=' ';descr=' ';value=.;
        data LSM;
        length structr $25;
        length msgroup $20;
        structr=' ';gen=.;
        Estimate=.;
        msgroup=' ';
/* running macro runmixed with 5 mixed models for MET */;
        %let class=GEN ENV REP;
        %include  'c:\RUNMIXED.sas'; 
        *2 way Analysis;
        %runmixed(data=peanut, GEN=gen,ENV=env, REP=rep, VAR=yield,
        model=GEN,
        z=random ENV GEN*ENV REP(ENV),
        comment=2W, outfit=CRIT, outlsm=lsm, alpha=0.05);

        * Shukla stability variance;
        %runmixed(data=peanut, GEN=gen,ENV=env, REP=rep, VAR=yield,
        model=GEN,
        z=random int REP/subject=ENV ;
        random GEN/subject=ENV type=un(1),
        comment=SV, outfit=CRIT, outlsm=lsm, alpha=0.05);

        *Finlay-Wilkinson;
        %runmixed(data=peanut, GEN=gen,ENV=env, REP=rep, VAR=yield,
        model=GEN,
        z=random int REP/sub=ENV;
        random GEN/sub=ENV type=FA1(1),
        comment=FW, outfit=CRIT, outlsm=lsm, alpha=0.05);

        *Eberhart-Russell;
        %runmixed(data=peanut, GEN=gen,ENV=env, REP=rep, VAR=yield,
        model=GEN,
        z=random REP/sub=ENV;
        random GEN/sub=ENV type=FA1(1),
        comment=ER, outfit=CRIT, outlsm=lsm,alpha=0.05);

        *AMMI(2);
        %runmixed(data=peanut, GEN=gen,ENV=env, REP=rep, VAR=yield,
        model=GEN,
        z=random int REP/sub=ENV;
        random GEN/sub=ENV type=FA0(2),
        comment=FA2, outfit=CRIT, outlsm=lsm, alpha=0.05);

        proc print data=lsm; proc print data=crit noobs;run;


/*   Chapter 5.2.4   */

**** Output ;
%include 'c:glimmix8.sas' / nosource; 
%glimmix (data=kang, 
procopt=method=REML  maxfunc = 1000 maxiter = 300 lognote,
stmts=%str(
class GEN ENVINDEX;
model yield = ENVINDEX;
random GEN/SOLUTION ;
repeated/group= gen;
parms /eqcons=1 to 18/EQCONS=3;),
error=normal, 
converge= 1e-10,
link=identity);
run;


proc import datafile="c:\Huehn.xls" out=Huehn replace; run; 

proc genmod data=Huehn; 
class genotype location;
     model yield=genotype location / dist=normal ; * Model A ;

proc genmod data=Huehn;
class genotype location;
     model yield=genotype location / dist=poisson; * Model B;

proc genmod data=Huehn;
class genotype location;
     model yield=genotype location / dist=gamma  ; * Model C;
run;


proc genmod data=huehn;
class genotype location;
model yield =genotype location genotype*location / dist=normal type3 ;
output out=normal predicted=yhat;

proc genmod data=huehn;
class genotype location;
model yield =genotype location genotype*location/ dist=poisson type3;
output out=poisson predicted=yhat;

proc genmod data=huehn;
class genotype location;
model yield =genotype location genotype*location/ dist=gamma type3;
output out=gamma predicted=yhat;
run;

proc mixed ;
class location genotype;
model yield = genotype; *[model E] ;
random location;
run;
proc mixed ;
class location genotype;
model yield = genotype; *[model F];
random location location*genotype;
run;


/*   Chapter 5.3   */

proc import datafile="c:\kang.xls" out=SSGA replace; run; 

data ssga;  infile CARDS firstobs=2 dsd;
input location genotype $ yield;
gen=1*substr(genotype,2);
datalines;
location,genotype,yield
1,g1,10.2
2,g1,9.02
3,g1,8.36
4,g1,5.07
5,g1,5.34
6,g1,4.91
7,g1,5.4
8,g1,5.43
9,g1,7.04
10,g1,6.87
11,g1,8.71
12,g1,6.38
13,g1,7.78
14,g1,6.44
1,g2,8.77
2,g2,9.21
3,g2,6.06
4,g2,3.12
5,g2,4.38
6,g2,2.49
7,g2,5.2
8,g2,3.43
9,g2,7.82
10,g2,7.67
11,g2,9.47
12,g2,5.95
13,g2,5.9
14,g2,6.36
1,g3,8.81
2,g3,8.82
3,g3,6.8
4,g3,3.03
5,g3,5.31
6,g3,3.45
7,g3,5.67
8,g3,7.09
9,g3,6.96
10,g3,7.92
11,g3,8.79
12,g3,7.58
13,g3,7.31
14,g3,8.08
1,g4,9.34
2,g4,10.6
3,g4,6.07
4,g4,3.44
5,g4,4.4
6,g4,2.54
7,g4,4.58
8,g4,6.05
9,g4,6.95
10,g4,7.9
11,g4,7.89
12,g4,7.05
13,g4,5.95
14,g4,7.16
1,g5,9.65
2,g5,8.34
3,g5,8.24
4,g5,4.56
5,g5,5.47
6,g5,3.01
7,g5,4.77
8,g5,4.9
9,g5,7.02
10,g5,7.04
11,g5,7.84
12,g5,5.28
13,g5,7.78
14,g5,7.48
1,g6,7.23
2,g6,9.3
3,g6,6.88
4,g6,4.86
5,g6,4.65
6,g6,2.51
7,g6,5.73
8,g6,3.17
9,g6,8.35
10,g6,8.93
11,g6,7.82
12,g6,8.16
13,g6,6.32
14,g6,6.6
1,g7,8.42
2,g7,9.57
3,g7,6.95
4,g7,6.25
5,g7,6.2
6,g7,3.63
7,g7,6.59
8,g7,7.6
9,g7,7.39
10,g7,9.44
11,g7,11.4
12,g7,5.97
13,g7,7.92
14,g7,7.67
1,g8,9.59
2,g8,8.76
3,g8,9.14
4,g8,4.63
5,g8,6.05
6,g8,5.59
7,g8,6.75
8,g8,6.67
9,g8,6.49
10,g8,7.94
11,g8,9.85
12,g8,6.17
13,g8,7.49
14,g8,7.63
1,g9,7.94
2,g9,7.86
3,g9,9.24
4,g9,5.63
5,g9,6.54
6,g9,3.83
7,g9,5.23
8,g9,8.41
9,g9,6.8
10,g9,6.53
11,g9,8.55
12,g9,6.12
13,g9,7.61
14,g9,7.82
1,g10,9.96
2,g10,9.11
3,g10,7.69
4,g10,3.75
5,g10,5.29
6,g10,3.93
7,g10,4.82
8,g10,4.27
9,g10,7.89
10,g10,7.22
11,g10,8.47
12,g10,6.27
13,g10,5.36
14,g10,7.52
1,g11,8
2,g11,9.51
3,g11,7.76
4,g11,3.77
5,g11,4.43
6,g11,3
7,g11,5.36
8,g11,5.13
9,g11,6.85
10,g11,6.21
11,g11,8.34
12,g11,5.64
13,g11,7.77
14,g11,7.22
1,g12,10.1
2,g12,9.36
3,g12,6.51
4,g12,3.32
5,g12,4.23
6,g12,2.46
7,g12,4.49
8,g12,4.35
9,g12,8.08
10,g12,7.23
11,g12,9.14
12,g12,6.52
13,g12,6.61
14,g12,6.82
1,g13,9.39
2,g13,9.42
3,g13,5.22
4,g13,2.73
5,g13,5.65
6,g13,2.58
7,g13,5.63
8,g13,4.11
9,g13,7.07
10,g13,8.83
11,g13,11
12,g13,6.75
13,g13,8.13
14,g13,7.58
1,g14,10.8
2,g14,10.3
3,g14,8.28
4,g14,5.94
5,g14,5.78
6,g14,3.83
7,g14,7.03
8,g14,7.48
9,g14,7.08
10,g14,7.29
11,g14,8.12
12,g14,6.82
13,g14,7.47
14,g14,6.89
1,g15,6.27
2,g15,8.84
3,g15,6.8
4,g15,4.19
5,g15,3.87
6,g15,2.79
7,g15,6.03
8,g15,5.91
9,g15,6.42
10,g15,7.06
11,g15,7.79
12,g15,6.78
13,g15,5.01
14,g15,7.22
1,g16,7.4
2,g16,8.72
3,g16,7.11
4,g16,3.59
5,g16,3.79
6,g16,1.58
7,g16,5.64
8,g16,4.14
9,g16,4.13
10,g16,6.35
11,g16,8.05
12,g16,5.79
13,g16,5.42
14,g16,7.26
;

proc gam data=SSGA; 
class genotype;
model yield =  param(genotype) spline(location,df=100) ;
output out=estimate p all;
id gen;
run;
*** rerun GAM after seeing DF needed ***;
proc gam data=SSGA; 
id genotype;
model yield =  param(gen) spline(location,df=12) ;
output out=estimate p all;
run; quit;

**** Output 5.9 5.10 ;
legend1 frame cframe=ligr cborder=black label=none 
position=center;
axis1   label=(angle=90 rotate=0);
axis2   minor=none;
symbol1 color=red interpol=join value=none line=1;
proc gplot data=estimate;
plot p_yield * location = 1 /overlay legend=legend1 
frame cframe=ligr vaxis=axis1 haxis=axis2;

*** store Linear model fit in lestimate ***;
proc glm data=SSGA; 
class location genotype gen;
model yield =  genotype location ;
output out=lestimate p=means ;
run;

**** Ouput 5.11 5.12 5.13;
 goptions colors=(black) ftext=swiss;
*** 5.3  Outputs 5.11-13 ***;
proc g3d data=ssga;
plot gen*location=yield/ zmin=0 zmax=12 ctop=black cbottom=ligr;
run;quit;
proc g3d data=lestimate;
plot gen*location= means/ zmin=0 zmax=12 ctop=black cbottom=ligr;
run;
proc g3d data=estimate;
plot gen*location = p_yield/ zmin=0 zmax=12 ctop=black cbottom=ligr;
run;quit;

*** Table 5.4  ***;
proc gam data=ssga;
class genotype;
model yield =  param(genotype) spline(location,df=12);
output out=estimate1 p all;
run;









/*    Macros for Chapter 5   */



/*MACRO General Linear Bilinear Model***********/
/*To run GREG, SREG and SREGH models and******************/
/*graphically explore genotype-by-environment interaction*/
/*For details, Contact: Monica Balzarini, mbalzari@agro.uncor.edu*/

/*************MACRO ARGUMENTS     ***********/

/***DATA=  Set the name of data set       ***/
/***ENV_N= Set the number of environments ***/
/***GEN_N= Set the number of genotypes    ***/
/***REP_N= Set the number of replicates   ***/

/***VAR= Set the name of the response variable    ***/
/***ENV= Set the name of the environment variable ***/
/***GEN= Set the name of the genotype variable    ***/
/***REP= Set the name of the replication variable ***/

/***COMMENT=  Set the name of the model to run     ***/
/***Possible arguments are SREG, SREGH, and GREG   ***/



%Macro  GLBM(DATA=, ENV_N= ,GEN_N=, REP_N=,
             VAR=, ENV= ,GEN=, REP=,COMMENT=, GENCOD=);

    %IF (&COMMENT=GREG) %THEN %DO;

    proc mixed data=&DATA info noitprint noclprint;
    class &GEN &ENV &REP;
    model &VAR = &GEN /outpred=resid1;
    random &REP(&ENV);
    ods listing exclude outpred;
    id &GENCOD &GEN &ENV &REP;

    %END;

    %IF (&COMMENT=SREG) %THEN %DO;

    proc mixed data=&DATA info noitprint noclprint;
    class &GEN &ENV &REP;
    model &VAR = &ENV/outpred=resid1;
    random &REP(&ENV);
    ods listing exclude outpred;
    id &GENCOD &GEN &ENV &REP;

    %END;


    %IF (&COMMENT=SREGH) %THEN %DO;

    proc mixed data=&DATA info noitprint noclprint;
    class &GEN &ENV &REP;
    model &VAR = &ENV /outpred=resid1;
    random &REP(&ENV);
    repetead/group=&ENV;
    ods listing exclude outpred;
    id &GENCOD &GEN &ENV &REP;

    %END;

proc sort data=resid1;
       by &ENV &GEN ;
proc means mean noprint;
       by &ENV &GEN ;
       var resid;
       ID &GENCOD;
output out=resid2 mean=res;
libname c 'c:';


/************************************************************************/
/****************** RESIDUAL PCA ****************************************/
/************************************************************************/

proc iml;
    use resid2 var{&ENV &GEN res};
    read all var{res} into r;

    e=shape(r,&ENV_N);

    call svd(envvec,val1,genvec,e);
    val=val1#val1*&REP_N;

    propeig= val/val[+];
    propacum=propeig;
    do i=2 to nrow(val);
       propacum[i]=propacum[i-1]+propeig[i];
    end;

    print 'Proportions of each component', val propeig propacum;


    labe='env_1':'env_25';
    labg='gen_1':'gen_25';


    create c.vece from envvec (|colname=labe|);
    append from envvec;


    create c.vecg from genvec (|colname=labg|);
    append from genvec;

quit;
proc print data=c.vece;
proc print data=c.vecg;
run;
%Mend;


**********************************************************************************************;
/*MACRO PC1PC2PLOT***********/
/*To obtain PC1 vs PC2 biplots ******************/
/*for exploring genotype-by-environment interaction*/
/*For details, Contact: Monica Balzarini, mbalzari@agro.uncor.edu*/

/*************MACRO ARGUMENTS     ***********/

/***DATA=  Set the name of dataset               ***/
/***VAR= Set the name of the response variable    ***/
/***ENV= Set the name of the environment variable ***/
/***GEN= Set the name of the genotype variable    ***/
/***REP= Set the name of the replication variable ***/

/***SCORE_e= Set the name of permanent dataset containing environment scores ***/
/***SCORE_g= Set the name of permanent dataset containing genotype    scores ***/
/***GENCOD=  Set the name of variable containing genotype codes ***/


%Macro  PC1PC2PLOT(DATA=,
             VAR=, ENV=,GEN=,
             SCORE_e=, SCORE_g=,GENCOD=);

/***********  PREPARE AND GENERATE BIPLOTS  ************************************/

proc sort data=&DATA;
    by &ENV;

proc means data=&DATA noprint;
    var &VAR;
    by &ENV;
    output out=enva mean=ydoteye;

proc sort data=&DATA;
    by &GEN;

proc means data=&DATA noprint;
    var &VAR;
    by &GEN;
    ID &GENCOD;
    output out=gena mean=ydoteye;

proc sort data=&DATA;
    by &GEN &ENV;
proc means data=&DATA noprint;
    var &VAR;
    by &GEN &ENV;
    output out=means mean=;

data enva;
    merge enva &score_e;
    PC1=env_1;
    PC2=env_2;

data gena;
    merge gena &score_g;
    PC1=gen_1;
    PC2=gen_2;
PROC PRINT;
data envanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set enva;
    text=&ENV;
    style = 'SWISSB';
    xsys='2'; ysys='2'; color='blue'; position='5'; function='label';
    size=1.5;
    x=PC1;
    y=PC2;
data genanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set gena;
    text=&GENCOD;
    style = 'ZAPFB';
    xsys='2'; ysys='2'; color='red'; position='5'; function='label';
    size=1;
    x=PC1;
    y=PC2;
data vecann1;
    set envanno genanno;

data vectors;
    set enva gena;

proc gplot data=vectors;
    symbol1 v=none i=none color=white;
    plot PC2*PC1=1 PC2*PC1=1/anno=vecann1 overlay vref=0 href=0 ;

run;

%Mend;



**********************************************************************************************;


%macro FixedBiplot(data,env_n,gen_n,rep_n,var,env,gen,rep,gencod);

/**************TO GET RESIDUALS FROM THE ADDITIVE MODEL  *************/

proc mixed data=&DATA info noitprint noclprint noinfo;
  class &GEN &ENV &REP;
  model &VAR = &ENV &GEN /outpred=resid1;
  random &REP(&ENV);
  ods listing exclude outpred;
  id &GEN &ENV &REP;


/************* COMPUTE AVERAGE OF RESIDUALS TO OBTAIN THE E MATRIX ******/

proc sort data=resid1;
       by &ENV &GEN ;
proc means mean noprint;
       by &ENV &GEN ;
       var resid;
output out=resid2 mean=res;

/************************************************************************/
/******************  START IML FOR RESIDUAL ANALYSIS  *******************/
/************************************************************************/

proc iml;
    use resid2 var{&ENV &GEN res};
    read all var{res} into r;

    e=shape(r,&ENV_N);

    call svd(envvec,val1,genvec,e);
    val=val1#val1*&REP_N;

/******************* PRINT PCA RESULTS  *********************************/

    propeig= val/val[+];
    propacum=propeig;
    do i=2 to nrow(val);
       propacum[i]=propacum[i-1]+propeig[i];
    end;

    print 'Proportions of each component', val propeig propacum;


    labe='env_1':'env_25';
    labg='gen_1':'gen_25';


    create vece from envvec (|colname=labe|);
    append from envvec;


    create vecg from genvec (|colname=labg|);
    append from genvec;


/*** CREATE DATASET FOR COMPUTING PREDICTED VALUES ***********************/

   matcomb = envvec` || genvec` || val1;
   label1="env1":"env&ENV_N" ;
   label2="gen1":"gen&GEN_N";
   label3={"lambda"};
   label=label1||label2||label3;
   create matrix from matcomb (|colname=label|);
   append from matcomb;

quit;



/*** LR TESTS TO SELECT NUMBER OF SIGNIFICANT MULTIPLICATIVE TERMS ******/

proc mixed noitprint noclprint data=&DATA method=ML noinfo;
class &ENV &GEN &REP;
model &VAR = &ENV &GEN /outpredm=pre0;
random &REP(&ENV) ;
ods listing exclude outpredm;
ods output FitStatistics=pca0;
id &ENV &GEN &REP &VAR;

data pre0; set pre0;check=1;
data matrix1; set matrix;if _n_=1;check=1;


data pred1;
merge pre0 matrix1;
by check;
array environ {&ENV_N} env1-env&ENV_N;
array genotyp {&GEN_N} gen1-gen&GEN_N;
keep &VAR &ENV &GEN &REP PRED RESID check;
PRED = PRED+lambda*environ(&ENV)*genotyp(&GEN);
RESID= &VAR - PRED;

data matrix1; set matrix;if _n_=2;check=1;

data pred2;
merge pred1 matrix1;
by check;
array environ{&ENV_N} env1-env&ENV_N;
array genotyp{&GEN_N} gen1-gen&GEN_N;
keep &VAR &ENV &GEN &REP PRED RESID check;
PRED  = PRED+lambda*environ(&ENV)*genotyp(&GEN);
RESID = &VAR - PRED;

data matrix1; set matrix;if _n_=3;check=1;

data pred3;
merge pred2 matrix1;
by check;
array environ{&ENV_N} env1-env&ENV_N;
array genotyp{&GEN_N} gen1-gen&GEN_N;
keep &VAR &ENV &GEN &REP PRED RESID check;
PRED = PRED+lambda*environ(&ENV)*genotyp(&GEN);
RESID = &VAR - PRED;

proc mixed noitprint noclprint data=pred1 method=ml noinfo;
class &ENV &GEN &REP;
model RESID= /noint;
random &REP(&ENV);
ods output FitStatistics=pca1;
run;

proc mixed noitprint noclprint data=pred2 method=ml noinfo;
class &ENV &GEN &REP;
model RESID= /noint;
random &REP(&ENV);
ods output FitStatistics=pca2;
run;

proc mixed noitprint noclprint data=pred3 method=ml noinfo;
class &ENV &GEN &REP;
model RESID = /noint;
random &REP(&ENV);
ods output FitStatistics=pca3;
run;

proc mixed noitprint noclprint data=&DATA method=ml noinfo;
class &ENV &GEN &REP;
model &VAR = &ENV|&GEN;
random &REP(&ENV);
ods output FitStatistics=pcall;
run;


data pca0; set pca0; if descr='-2 Log Likelihood'; pca0=value; keep pca0;
run;


data pca1; set pca1; if descr='-2 Log Likelihood'; pca1=value; keep pca1;
run;


data pca2; set pca2; if descr='-2 Log Likelihood'; pca2=value; keep pca2;
run;


data pca3; set pca3; if descr='-2 Log Likelihood'; pca3=value; keep pca3;
run;

data pcall; set pcall; if descr='-2 Log Likelihood'; pcall=value; keep pcall;
run;

data likratio; merge pca0 pca1 pca2 pca3  pcall;
pca=0; chisq=pca0-pcall; df=(&ENV_N-1)*(&GEN_N-1);
       p_value=1-probchi(chisq,df); output;
pca=1; chisq=pca1-pcall; df=(&ENV_N-1)*(&GEN_N-1)-(&ENV_N+&GEN_N-3);
       p_value=1-probchi(chisq,df); output;
pca=2; chisq=pca2-pcall; df=(&ENV_N-1)*(&GEN_N-1)-(2*&ENV_N+2*&GEN_N-6);
       p_value=1-probchi(chisq,df); output;
pca=3; chisq=pca3-pcall; df=(&ENV_N-1)*(&GEN_N-1)-(3*&ENV_N+3*&GEN_N-11);
       p_value=1-probchi(chisq,df); output;

proc print data=likratio;
var pca chisq df p_value;
Title 'Goodness of fit LRTs for adding PCA terms';
run;



/***********  PREPARE AND GENERATE BIPLOTS  ************************************/

proc sort data=&DATA;
    by &ENV;

proc means data=&DATA noprint;
    var &VAR;
    by &ENV;id &gencod;
    output out=enva mean=ydoteye;

proc sort data=&DATA;
    by &GEN;

proc means data=&DATA noprint;
    var &VAR;
    by &GEN; id &gencod;
    output out=gena mean=ydoteye;

proc sort data=&DATA;
    by &GEN &ENV;
proc means data=&DATA noprint;
    var &VAR;
    by &GEN &ENV; id &gencod;
    output out=means mean=;

data enva;
    merge enva vece;
    PC1=env_1;
    PC2=env_2;
    PC3=env_3;
proc print;
data gena;
    merge gena vecg;
    PC1=gen_1;
    PC2=gen_2;
    PC3=gen_3;

data envanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set enva;
    text=&ENV;
    style = 'SWISSB';
    xsys='2'; ysys='2'; color='blue'; position='5'; function='label';
    size=1.5;
    x=PC1;
    y=PC2;
data genanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set gena;
    text=&GENCOD;
    style = 'ZAPFB';
    xsys='2'; ysys='2'; color='red'; position='5'; function='label';
    size=1;
    x=PC1;
    y=PC2;
data vecann1;
    set envanno genanno;


data envanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set enva;
    text=&ENV;
    style = 'SWISSB';
    xsys='2'; ysys='2'; color='blue'; position='5'; function='label';
    size=1.5;
    x=PC1;
    y=PC3;
data genanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set gena;
    text=&GENCOD;
    style = 'ZAPFB';
    xsys='2'; ysys='2'; color='red'; position='5'; function='label';
    size=1;
    x=PC1;
    y=PC3;
data vecann13;
    set envanno genanno;



data envanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set enva;
    text=&ENV;
    style = 'SWISSB';
    xsys='2'; ysys='2'; color='blue'; position='5'; function='label';
    size=1.5;
    x=ydoteye;
    y=PC1;
data genanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set gena;
    text=&GENCOD;
    style = 'ZAPFB';
    xsys='2'; ysys='2'; color='red'; position='5'; function='label';
    size=1;
    x=ydoteye;
    y=PC1;
data vecann21;
    set envanno genanno;


data envanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set enva;
    text=&ENV;
    style = 'SWISSB';
    xsys='2'; ysys='2'; color='blue'; position='5'; function='label';
    size=1.5;
    x=ydoteye;
    y=PC2;
data genanno(keep=xsys ysys x y color function position size text style);
    length text $ 8;
    set gena;
    text=&GENCOD;
    style = 'ZAPFB';
    xsys='2'; ysys='2'; color='red'; position='5'; function='label';
    size=1;
    x=ydoteye;
    y=PC2;
data vecann22;
    set envanno genanno;


data vectors;
    set enva gena;

title '                                                    ';
proc gplot data = vectors;
    symbol1 v=none i=none color=white;
    plot PC1*ydoteye=1 PC1*ydoteye=1/anno=vecann21 overlay vref=0 href=0;
    *title 'First Multiplicative Component vs. Mean Response';
run;

proc gplot data=vectors;
    symbol1 v=none i=none color=white;
    plot PC2*PC1=1 PC2*PC1=1/anno=vecann1 overlay vref=0 href=0 ;
    *title1 'Second vs. First Multiplicative Component Scores';
run;

proc gplot data=vectors;
    symbol1 v=none i=none color=white;
    plot PC3*PC1=1 PC3*PC1=1/anno=vecann13 overlay vref=0 href=0 ;
    *title1 'Third vs. First Multiplicative Component Scores';
run;

/******************  Show GEI table ******************************************/
title '                                                    ';
proc iml;
    use means var{&ENV &GEN &VAR};
    read all var{&VAR} into y;
    e=shape(y,&GEN_N);
    print 'Matrix subjected to SVD';
    print e;
quit;

%mend;




**********************************************************************************************;


%macro runmixed(data=,GEN=, ENV=, REP=,VAR=, model=,z=,comment=,outfit=,outlsm=, alpha=);
    %let _print_=off;

    proc mixed data=&data;
    class &class ;
    model &VAR=&model/outpred=prd&comment;
    &z;
    lsmeans &GEN/pdiff;
    ods output diffs=p&comment lsmeans=m&comment;
    ods listing exclude diffs lsmeans ;
    ods listing exclude outpred;
    ods output FitStatistics=Fitinfo;
    run;


    data fitinfo;
    length structr $25;
    set fitinfo;
    structr="&comment";


    proc append base=&outfit data=fitinfo force;

    %include 'c:\PDmix800.sas';
    %pdmix800(p&comment,m&comment,alpha=&alpha, sort=yes);


    data lsmeans;
    set msgrpzz;
    structr="&comment";

    proc append base=&outlsm data=lsmeans force;

    %let _print_=on;

%mend;


