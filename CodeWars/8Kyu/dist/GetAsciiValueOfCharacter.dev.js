"use strict";

/*

8kyu - Get Ascii Value of Character

get ascii value of character

write a function getASCII which inputs a character and returns the corresponding ascii value for that character. Example : getASCII('A') => 65

for ASCII table, you can refer to http://www.asciitable.com/

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var getASCII = function getASCII(c) {
  return c.charCodeAt(0);
};