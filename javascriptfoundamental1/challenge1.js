const massMark = 78;
const heightMark = 1.69; // meters
const massJohn = 92;
const heightJohn = 1.95;

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);