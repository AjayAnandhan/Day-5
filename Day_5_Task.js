// // a . Print odd numbers in an array
// var a,b,i;
// a = function(){
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
// var a = function(){
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
// b = function(){
//     c = 0;
//     for(i=0;i<a.length;i++){
//             c = c+ +a[i];
//     }
//     return c;
// }
// console.log(b())

// // d . Return all the prime numbers in an array
// var a,b,c,d,e;
// a = [-5, -3, -2, -1, ...Array(50).keys()]; 
// b = function(c) {
//   for (let d = 2; c > d; d++) {
//     if (c % d == 0) {
//       return false;
//     }
//   }
//   return c > 1;
// }
// console.log(a.filter(b));

// // e . Return all the palindromes in an array

 
// function isPalindrome(s)
// {
//     let a = s;
//     s = s.split('').reverse().join('');
//     return s == a;
// }
// function PalindromicStrings(arr,N)
// {
//     let ans = [];
//     for (let i = 0; i < N; i++) {
//         if (isPalindrome(arr[i])) {
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// }
// let arr = [ "abc", "car", "ada", "racecar", "cool" ];
// let N = arr.length;
// let s = PalindromicStrings(arr, N);
// if(s.length == 0){
//     console.log("-1");
// }
// for(let st of s){
//     console.log(st," ");
// }


// // f . Return median of two sorted arrays of the same size
// function getMedian(ar1, ar2, n)
// {
//     var i = 0; 
//     var j = 0; 
//     var count;
//     var m1 = -1, m2 = -1;
//     for (count = 0; count <= n; count++)
//     {
//         if (i == n)
//         {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
//         else if (j == n)
//         {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
//         else if (ar1[i] <= ar2[j])
//         {
//             m1 = m2; 
//             m2 = ar1[i];
//             i++;
//         }
//         else
//         {
//             m1 = m2; 
//             m2 = ar2[j];
//             j++;
//         }
//     }
 
//     return (m1 + m2)/2;
// }
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// if (n1 == n2)
//     console.log("Median is "+ getMedian(ar1, ar2, n1));
// else
//     console.log("Doesn't work for arrays of unequal size");


// //  g . function removeDuplicates(arr, n)
// function removeDuplicates(arr, n)
// {
//     if (n==0 || n==1)
//         return n;
//     var temp = new Array(n);
//     var j = 0;
//     for (var i=0; i<n-1; i++)
//         if (arr[i] != arr[i+1])
//             temp[j++] = arr[i];
//     temp[j++] = arr[n-1];
//     for (var i=0; i<j; i++)
//         arr[i] = temp[i];
//     return j;
// }
// var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
//     var n = arr.length;
//     n = removeDuplicates(arr, n);
//     for (var i=0; i<n; i++)
//        document.write( arr[i]+" ");


// //  h . Rotate an array by k times
function RightRotate(a, n, k)
{
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
        }
    }
    console.log("<br>");
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
RightRotate(Array, N, K);