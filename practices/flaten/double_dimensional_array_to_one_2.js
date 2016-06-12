'use strict';

function double_to_one(collection) {
	var t=[1];
	var s=[1];
	for(var i=0;i<collection.length;i++)
	{
		for(var j=0;j<collection[i].length;j++)
		{
			t.push(collection[i][j]);
		}
	}

	for(var j=1;j<t.length;j++)
	{
		var flag=0;
		for(var k=0;k<s.length;k++)
		{
			if(t[j]==s[k])
			{
				flag=1;
			}
		}
		if(flag==0)
		{
			s.push(t[j]);
		}
	}
	return s;
}

module.exports = double_to_one;
