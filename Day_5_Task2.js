// // a . Print odd numbers in an array
// var a,b,i;
// var a = ()=>{
//     b = [];
//     for(i=0;i<=10;i++){
//         if(i%2 != 0){
//             b.push(i);
//         }
//     }
//     return b;
// }
// console.log(a())

// // b . Convert all the strings to title caps in a string array
// var a,b,i,c;
// c = "HELLO AJAY"
// var a = ()=>{
//     b = [];
//     c = c.toLowerCase().split(' ');
//     for (var i = 0; i < c.length; i++) {
//       c[i] = c[i].charAt(0).toUpperCase() + c[i].slice(1);
//       b.push(c[i]);
//     }
//     return b.join(" ");
// }
// console.log(a());

// // c . Sum of all numbers in an array
// var a,b,i,c;
// a = "89789714879".split("")
// b = () => {
//     c = 0;
//     for(i=0;i<a.length;i++){
//             c = c+ +a[i];
//     }
//     return c;
// }
// console.log(b())


// // d . Return all the prime numbers in an array
// var a,b,c,d,e;
// b = (c)=> {
//   for (let d = 2; c > d; d++) {
//     if (c % d == 0) {
//       return false;
//     }
//   }
//   return c > 1;
// }
// console.log([-5, -3, -2, -1, ...Array(50).keys()].filter(b));

// e . Return all the palindromes in an array
var isPalindrome = (s)=>
{
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
var PalindromicStrings = (arr,N)=>
{
    let ans = [];
    for (let i = 0; i < N; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
let s = PalindromicStrings(arr, N);
if(s.length == 0){
    console.log("-1");
}
for(let st of s){
    console.log(st," ");
}