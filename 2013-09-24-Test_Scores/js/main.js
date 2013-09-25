var scores = []

var report = parseFloat(prompt('Enter a score:'));
for (10)
{
  scores.push(report);
  report = parseFloat(prompt('Enter a score:'));
}

var sum = 0;
for (var count = 0; count < scores.length; count++)
{
  sum += scores[count].length;
}
var mean = sum / scores.length;

console.log('The mean is: ' + mean);