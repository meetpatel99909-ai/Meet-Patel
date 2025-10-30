<?xml version="1.0" standalone="yes"?>
<NewDataSet>
  <ANALYSIS_Keywords>
	<Selection>True</Selection>
	<KeyID>1</KeyID>
	<Name>Credit Card</Name>
	<Value />
	<Type>Regular Expression</Type>
	<Lookin>1,1,1,1</Lookin>
	<MatchCase>False</MatchCase>
	<MatchContent>False</MatchContent>
	<LookinName>Formulas,Values,Comments,VBA</LookinName>
  </ANALYSIS_Keywords>
  <ANALYSIS_Keywords>
    <Selection>False</Selection>
    <KeyID>2</KeyID>
    <Name>SSN</Name>
    <Value />
    <Type>Regular Expression</Type>
    <Lookin>1,1,1,1</Lookin>
    <MatchCase>False</MatchCase>
    <MatchContent>False</MatchContent>
    <LookinName>Formulas,Values,Comments,VBA</LookinName>
  </ANALYSIS_Keywords>
  <ANALYSIS_Keywords>
    <Selection>False</Selection>
    <KeyID>3</KeyID>
    <Name>PPS Number</Name>
    <Value />
    <Type>Regular Expression</Type>
    <Lookin>1,1,1,1</Lookin>
    <MatchCase>False</MatchCase>
    <MatchContent>False</MatchContent>
    <LookinName>Formulas,Values,Comments</LookinName>
  </ANALYSIS_Keywords>
  <ANALYSIS_Keywords>
    <Selection>True</Selection>
    <KeyID>4</KeyID>
    <Name>Connect</Name>
    <Value>Save</Value>
    <Type>General</Type>
    <Lookin>0,0,0,1</Lookin>
    <MatchCase>False</MatchCase>
    <MatchContent>False</MatchContent>
    <LookinName>VBA</LookinName>
  </ANALYSIS_Keywords>
  <ANALYSIS_Keywords>
    <Selection>True</Selection>
    <KeyID>5</KeyID>
    <Name>Password</Name>
    <Value>Pass</Value>
    <Type>General</Type>
    <Lookin>0,0,0,1</Lookin>
    <MatchCase>False</MatchCase>
    <MatchContent>False</MatchContent>
    <LookinName>VBA</LookinName>
  </ANALYSIS_Keywords>
  <ANALYSIS_RegExpMaster>
    <KeyID>1</KeyID>
    <MasterPattern>\b([0-9][ -]*?){13,19}\b</MasterPattern>
    <ApplyLuhn>True</ApplyLuhn>
    <ReplaceChars />
  </ANALYSIS_RegExpMaster>
  <ANALYSIS_RegExpMaster>
    <KeyID>2</KeyID>
    <MasterPattern>\b[0-9]{1,11}\b</MasterPattern>
    <ApplyLuhn>True</ApplyLuhn>
    <ReplaceChars />
  </ANALYSIS_RegExpMaster>
  <ANALYSIS_RegExpMaster>
    <KeyID>3</KeyID>
    <MasterPattern>\d{7}</MasterPattern>
    <ApplyLuhn>True</ApplyLuhn>
    <ReplaceChars />
  </ANALYSIS_RegExpMaster>
   <ANALYSIS_RegExpDetail>
    <KeyID>1</KeyID>
    <KeywordDetailedID>1</KeywordDetailedID>
    <Expression>\b3[47][0-9][0-9]([\ \-]?)[0-9]{6}([\ \-]?)[0-9]{5}\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>1</KeyID>
    <KeywordDetailedID>2</KeywordDetailedID>
    <Expression>\b3(0[0-5,9]|6[0-9])[0-9]([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{2}\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>1</KeyID>
    <KeywordDetailedID>3</KeywordDetailedID>
    <Expression>\b3[89][0-9][0-9]([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{2}\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>1</KeyID>
    <KeywordDetailedID>4</KeywordDetailedID>
    <Expression>\b6(011|4[4-9][0-9]|5[0-9][0-9])(([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4})(([\ \-]?)[0-9]{3})?\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>1</KeyID>
    <KeywordDetailedID>5</KeywordDetailedID>
    <Expression>\b622(1([\ \-]?)2[6-9]|1([\ \-]?)[3-9][0-9]|[2-8]([\ \-]?)[0-9][0-9]|9([\ \-]?)[01][0-9]|9([\ \-]?)2[0-5])[0-9]{2}([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}(([\ \-]?)[0-9]{3})?\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>1</KeyID>
    <KeywordDetailedID>6</KeywordDetailedID>
    <Expression>\b35(2[8-9]|[3-8][0-9])([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>1</KeyID>
    <KeywordDetailedID>7</KeywordDetailedID>
    <Expression>\b5[1-5][0-9]{2}([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>1</KeyID>
    <KeywordDetailedID>8</KeywordDetailedID>
    <Expression>\b4[0-9]{3}([\ \-]?)[0-9]{4}([\ \-]?)[0-9]{4}([\ \-]?)([0-9]{1})(([\ \-]?)[0-9]{3})?(([\ \-]?)[0-9]{3})?\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>2</KeyID>
    <KeywordDetailedID>1</KeywordDetailedID>
    <Expression>\b[0-9]{3}([\ \-]?)[0-9]{2}([\ \-]?)[0-9]{4}\b</Expression>
  </ANALYSIS_RegExpDetail>
  <ANALYSIS_RegExpDetail>
    <KeyID>3</KeyID>
    <KeywordDetailedID>1</KeywordDetailedID>
    <Expression>\b(\d{7})([A-Z]{1,2})\b</Expression>
  </ANALYSIS_RegExpDetail>
</NewDataSet>