const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let returnTut = []
    tutorials.map(el => {
      console.log(el)
    let temp = [];
    let char = '';
    temp = el.split(" ");
  console.log(temp);
    for (let i = 0; i < temp.length; i++)
      {
      char = temp[i].charAt(0).toUpperCase();
      temp[i] = temp[i].substring(1);
      temp[i] = char+temp[i];
      }
      
    returnTut.push(temp.join(" "));
})
return returnTut;
}