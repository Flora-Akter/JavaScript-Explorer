const students = [
    {id:21, Name:'Flora'},
    {id:41, Name:'Akter'},
    {id:61, Name:'Sonia'},
    {id:81, Name:'Iffty'}
];
const Names = students.map( s => s.Name);
console.log(Names);

const ids = students.map( s => s.id);
console.log(ids);

const bigger = students.filter( s => s.id>40);
console.log(bigger);

const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);