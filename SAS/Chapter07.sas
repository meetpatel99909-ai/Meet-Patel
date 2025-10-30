 /*------------------------------------------------------------------ */
 /*     Genetic Analysis of Complex Traits Using SAS    Chapter 7     */ 
 /*                Rob Tempelman and Guilherme Rosa                   */
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
 
/*   Chapter 7.2   */

/* Input pedigree file 
   Animal id in first field, sire id in second field, dam id in third field. 
If sire or dam is unknown, indicate with period '.' */

data pedigree;
  input animal sire dam;
datalines;
1 . .
2 . .
3 . .
4 . .
5 . .
6 . .
7 . .
8 . .
9 . .
10 . .
11 . .
12 . .
13 . .
14 . .
15 . .
16 . .
17 . .
18 . .
19 . .
20 . .
21 . .
22 . .
23 . .
24 . .
25 1 2
26 1 2
27 1 2
28 1 2
29 1 2
30 1 2
31 1 2
32 1 2
33 1 3
34 1 3
35 1 3
36 1 3
37 1 3
38 1 3
39 1 3
40 1 3
41 1 4
42 1 4
43 1 4
44 1 4
45 1 4
46 1 4
47 1 4
48 5 6
49 5 6
50 5 6
51 5 6
52 5 6
53 5 6
54 5 6
55 5 7
56 5 7
57 5 7
58 5 7
59 5 7
60 5 7
61 5 8
62 5 8
63 5 8
64 5 8
65 5 8
66 5 8
67 5 8
68 5 8
69 5 8
70 9 10
71 9 10
72 9 10
73 9 10
74 9 10
75 9 10
76 9 11
77 9 11
78 9 11
79 9 11
80 9 11
81 9 11
82 9 11
83 9 12
84 9 12
85 9 12
86 9 12
87 9 12
88 9 12
89 9 12
90 9 12
91 13 14
92 13 14
93 13 14
94 13 14
95 13 14
96 13 14
97 13 14
98 13 14
99 13 15
100 13 15
101 13 15
102 13 15
103 13 15
104 13 15
105 13 15
106 13 15
107 13 16
108 13 16
109 13 16
110 13 16
111 13 16
112 13 16
113 13 16
114 13 16
115 17 18
116 17 18
117 17 18
118 17 18
119 17 18
120 17 18
121 17 18
122 17 18
123 17 19
124 17 19
125 17 19
126 17 19
127 17 19
128 17 19
129 17 19
130 17 19
131 17 19
132 17 19
133 17 20
134 17 20
135 17 20
136 17 20
137 17 20
138 17 20
139 17 20
140 21 22
141 21 22
142 21 22
143 21 22
144 21 22
145 21 22
146 21 22
147 21 22
148 21 23
149 21 23
150 21 23
151 21 23
152 21 23
153 21 23
154 21 23
155 21 24
156 21 24
157 21 24
158 21 24
159 21 24
160 21 24
161 21 24
162 21 24
163 107 81
164 107 81
165 107 81
166 107 81
167 107 81
168 107 81
169 107 81
170 107 81
171 107 81
172 107 81
173 107 82
174 107 82
175 107 82
176 107 82
177 107 82
178 107 82
179 107 82
180 107 82
181 107 112
182 107 112
183 107 112
184 107 112
185 107 112
186 107 112
187 107 112
188 107 112
189 118 120
190 118 120
191 118 120
192 118 120
193 118 120
194 118 120
195 118 120
196 118 120
197 118 113
198 118 113
199 118 113
200 118 113
201 118 113
202 118 113
203 118 113
204 118 146
205 118 146
206 118 146
207 118 146
208 118 146
209 118 146
210 118 146
211 118 146
212 118 146
213 140 128
214 140 128
215 140 128
216 140 128
217 140 128
218 140 128
219 140 128
220 140 131
221 140 131
222 140 131
223 140 131
224 140 131
225 140 131
226 140 131
227 140 105
228 140 105
229 140 105
230 140 105
231 140 105
232 140 105
233 140 105
234 140 105
235 100 98
236 100 98
237 100 98
238 100 98
239 100 98
240 100 98
241 100 98
242 100 37
243 100 37
244 100 37
245 100 37
246 100 37
247 100 37
248 100 37
249 100 52
250 100 52
251 100 52
252 100 52
253 100 52
254 100 52
255 100 52
256 100 52
257 100 52
258 123 137
259 123 137
260 123 137
261 123 137
262 123 137
263 123 137
264 123 137
265 123 137
266 123 137
267 123 69
268 123 69
269 123 69
270 123 69
271 123 69
272 123 69
273 123 69
274 123 69
275 123 69
276 123 39
277 123 39
278 123 39
279 123 39
280 123 39
281 123 39
282 123 39
283 51 65
284 51 65
285 51 65
286 51 65
287 51 65
288 51 65
289 51 31
290 51 31
291 51 31
292 51 31
293 51 31
294 51 31
295 51 31
296 51 31
297 51 31
298 51 138
299 51 138
300 51 138
301 51 138
302 51 138
303 51 138
304 51 138
305 51 138
306 51 138
;

proc inbreed data=pedigree covar outcov=amatrix;
 var animal sire dam;
run;

/* Input dataset with animal (1-306), generation (1 or 2) and y (data) 
   Include base animals (1-24) with missing records (y = .) */

data meyer;
  input animal generation y;
datalines;
1 1 .
2 1 .
3 1 .
4 1 .
5 1 .
6 1 .
7 1 .
8 1 .
9 1 .
10 1 .
11 1 .
12 1 .
13 1 .
14 1 .
15 1 .
16 1 .
17 1 .
18 1 .
19 1 .
20 1 .
21 1 .
22 1 .
23 1 .
24 1 .
25 1 220
26 1 212
27 1 221
28 1 207
29 1 218
30 1 201
31 1 214
32 1 229
33 1 214
34 1 198
35 1 194
36 1 211
37 1 212
38 1 228
39 1 210
40 1 198
41 1 223
42 1 223
43 1 215
44 1 226
45 1 212
46 1 231
47 1 229
48 1 221
49 1 210
50 1 213
51 1 223
52 1 239
53 1 222
54 1 223
55 1 217
56 1 216
57 1 206
58 1 204
59 1 216
60 1 212
61 1 218
62 1 218
63 1 220
64 1 202
65 1 209
66 1 213
67 1 201
68 1 211
69 1 225
70 1 213
71 1 211
72 1 221
73 1 215
74 1 228
75 1 204
76 1 225
77 1 224
78 1 225
79 1 216
80 1 224
81 1 220
82 1 225
83 1 215
84 1 222
85 1 219
86 1 224
87 1 225
88 1 212
89 1 214
90 1 219
91 1 239
92 1 233
93 1 241
94 1 232
95 1 226
96 1 228
97 1 211
98 1 215
99 1 228
100 1 211
101 1 202
102 1 226
103 1 222
104 1 203
105 1 213
106 1 219
107 1 230
108 1 238
109 1 217
110 1 220
111 1 222
112 1 227
113 1 227
114 1 234
115 1 222
116 1 221
117 1 203
118 1 210
119 1 210
120 1 229
121 1 227
122 1 221
123 1 237
124 1 222
125 1 232
126 1 237
127 1 223
128 1 229
129 1 231
130 1 229
131 1 228
132 1 232
133 1 213
134 1 232
135 1 227
136 1 231
137 1 232
138 1 230
139 1 220
140 1 234
141 1 223
142 1 226
143 1 221
144 1 230
145 1 214
146 1 233
147 1 220
148 1 223
149 1 216
150 1 224
151 1 227
152 1 226
153 1 217
154 1 218
155 1 224
156 1 228
157 1 223
158 1 225
159 1 230
160 1 213
161 1 224
162 1 227
163 2 245
164 2 245
165 2 253
166 2 252
167 2 249
168 2 240
169 2 238
170 2 254
171 2 262
172 2 258
173 2 232
174 2 252
175 2 243
176 2 245
177 2 236
178 2 254
179 2 233
180 2 228
181 2 240
182 2 238
183 2 235
184 2 230
185 2 252
186 2 238
187 2 228
188 2 246
189 2 253
190 2 242
191 2 252
192 2 250
193 2 231
194 2 239
195 2 246
196 2 233
197 2 235
198 2 254
199 2 233
200 2 233
201 2 262
202 2 250
203 2 248
204 2 243
205 2 255
206 2 237
207 2 230
208 2 240
209 2 236
210 2 227
211 2 247
212 2 238
213 2 241
214 2 234
215 2 243
216 2 229
217 2 239
218 2 243
219 2 243
220 2 269
221 2 240
222 2 233
223 2 246
224 2 252
225 2 240
226 2 256
227 2 238
228 2 232
229 2 244
230 2 221
231 2 243
232 2 251
233 2 236
234 2 241
235 2 254
236 2 249
237 2 237
238 2 238
239 2 248
240 2 247
241 2 233
242 2 232
243 2 228
244 2 225
245 2 229
246 2 264
247 2 228
248 2 224
249 2 234
250 2 243
251 2 238
252 2 238
253 2 237
254 2 235
255 2 243
256 2 256
257 2 241
258 2 237
259 2 238
260 2 234
261 2 241
262 2 221
263 2 237
264 2 236
265 2 250
266 2 237
267 2 247
268 2 239
269 2 238
270 2 239
271 2 233
272 2 234
273 2 224
274 2 248
275 2 235
276 2 248
277 2 232
278 2 240
279 2 236
280 2 235
281 2 253
282 2 243
283 2 234
284 2 233
285 2 222
286 2 233
287 2 213
288 2 228
289 2 209
290 2 225
291 2 223
292 2 226
293 2 224
294 2 223
295 2 221
296 2 224
297 2 219
298 2 229
299 2 238
300 2 230
301 2 240
302 2 246
303 2 236
304 2 230
305 2 230
306 2 230
;

/* Row numbers needed to be provided for pipelining numerator relationship matrix (A)from PROC INBREED into PROC MIXED */

data L2DATA;
  set amatrix;
  parm = 1;
  row = _n_;
run;

/* Posterior inference on fixed and random effects treating variance components as known */

****  Output 7.1 ****;
proc mixed data=meyer covtest noprofile;
  class generation animal;
  model y = generation /solution noint covb;
  random animal /type=lin(1) LDATA=L2data solution;
  parms (40) (50) /noiter;
  ods listing exclude solutionr; ods output solutionr = solutionr;
run;

data solutionr;
  set solutionr;
  accuracy = (40-StderrPred**2)/40;
	
/* classical accuracy of genetic evaluation (40 = additive genetic variance) */

run;

/* Print off posterior means of random effects with posterior standard deviations 
for first 30 animals */

proc print data=solutionr (obs=30);
run;	


/*   chapter 7.3.1   */

****  Output 7.2 ****;
proc mixed data=meyer covtest asycov;
  class generation animal;
  model y = generation /solution noint covb;
  random animal /type=lin(1) LDATA=L2data solution ;
  parms (40) (50) ;
  ods listing exclude solutionr; ods output solutionr = solutionr;
run;

/*   Chapter 7.4.2  */

****  Output 7.3 ****;
data meyer; set meyer;    **create example binomial trait;
  if .<y<235 then b_235=0; else b_235=1;
run;

%inc 'C:\glimmix8.sas' / nosource;
%glimmix(data=meyer,
  stmts=%str(
  class generation animal;
  model b_235 = generation /solution noint covb cl;
  random animal /type=lin(1) LDATA=L2data solution;
  parms (0.8) (1) /eqcons = 1,2;
  ods output solutionf=solutionf;
  ods listing exclude solutionr; ods output solutionr = solutionr;
   ),error=binomial, link=probit
);
run;

data solutionr;
  set solutionr;
  accuracy = (0.8-StderrPred**2)/0.8;
	
/* classical accuracy of genetic evaluation (40 = additive genetic variance) */

run;

/* Print off posterior means of random effects with posterior standard deviations 
for first 30 animals */

proc print data=solutionr (obs=30);
run;



*** Output 7.4  another model ***;
%glimmix(data=meyer,
  procopt=noprofile covtest,
  stmts=%str(
  class generation animal;
  model b_235 = generation /solution noint covb;
  random animal /type=lin(1) LDATA=L2data solution;
  parms (0.8) (1) / eqcons=2 ;
  ods listing exclude solutionr; ods output solutionr = solutionr;
   ),error=binomial, link=probit
)
run;


*** Contact authors for code producing Output 7.5-7.9  ***;



