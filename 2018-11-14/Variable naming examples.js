// Old habit 1
// bad because gr could be used in other places without proper scope
var gr = new GlideRecord('x_snc_mocha_case');

// Old habit 2
// bad becase 'case' is a reserved JavaScript keyword
var case = new GlideRecord('x_snc_mocha_case');

// Beter way - add a suffix for the type
var caseGr = new GlideRecord('x_snc_mocha_case');

// Also prevents against multiple variables being confusing
var caseObj = {"state" : "complete"};

// Skip the trivial examples
// This is totally not necessary!!!
var iInt = 0;

