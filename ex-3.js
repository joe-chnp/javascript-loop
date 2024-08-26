// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000,];
let minScore;
// Start coding here
let i = 0
let j = 0
while (j < scores.length){
    if (scores[i] <= scores[j]){
        j++;
    } else {
        i++;
    }
};
minScore = scores[i];
console.log(minScore);
