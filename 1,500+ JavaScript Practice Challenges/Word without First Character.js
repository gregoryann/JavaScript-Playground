



/*

Word without First Character
Create a function that takes a word and returns the new word without including the first character.

Examples
newWord("apple") ➞ "pple"

newWord("cherry") ➞ "herry"

newWord("plum") ➞ "lum"



*/



function newWord(txt){
	return txt.slice(1)
}




function newWord(txt){
	let str = txt.substring(1);
	return str
}






function newWord(txt){
	let res ="not text"
	if(isNaN(txt) == true) {
		res = txt.substring(1);
	}
	return res;
}





const newWord = txt => {
	return txt.slice(1)
}