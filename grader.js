function average(a) 
{
    var sum=0;
    for(var i=0;i<a.length;i++)
    {
        sum = sum + a[i];
    }
    var avg = sum/a.length;
    return Math.round(avg);
}

var scores = [90,98,89,100,86,94];
console.log("Scores " + average(scores));
var scores2 = [40,65,72,82,54,73,63,95,49];
console.log("Scores2 " + average(scores2));
