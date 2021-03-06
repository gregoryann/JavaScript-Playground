



/*


Missing Third Angle
You are given 2 out of 3 angles in a triangle, in degrees.

Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

An acute angle is less than 90 degrees.
A right angle is exactly 90 degrees.
An obtuse angle is greater than 90 degrees (but less than 180 degrees).
For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

Examples
missingAngle(27, 59) ➞ "obtuse"

missingAngle(135, 11) ➞ "acute"

missingAngle(45, 45) ➞ "right"
Notes
The sum of angles of any triangle is always 180 degrees.


*/






/*  Solution 1   */


function missingAngle(angle1, angle2) {
	//An acute angle is one smaller than 90 degrees.
//A right angle is one that is exactly 90 degrees.
//An obtuse angle is one greater than 90 degrees 
	var angle3 = angle1 + angle2;
	if(angle3 != 90){
		if(angle3 > 90){
			return "acute"
		}else{
			return "obtuse"		
		}
	}else{
		return "right"
	}
}


/*  Solution 2   */





/*  Solution 3   */