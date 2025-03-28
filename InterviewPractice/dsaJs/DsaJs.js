console.log("Hello, World!");

// pattern question
// for (let i=0; i<5; i++) {
//   let row = "";
//   for(let j=0; j<i+1; j++) {
//     row += "* "
//   }
//   console.log(row);
// }

//--------------------------------------------------------------------------------------

// // str = Hello Saurav
// //Output:- varuaS olleH
// let str = "Hello Saurav";

// let newStr = "";

// for(let i= str.length-1; i>=0; i--) {
//   newStr += str[i];
// }
// console.log(newStr);

// BY USING method
// let str = "Hello Saurav";

// let reverseStr = str.split("").reverse().join("");
// console.log(reverseStr);

//--------------------------------------------------------------------------------------

// // str = Hello Saurav
// // Output:- olleH varuaS

// let str = "Hello Saurav";

// let splitStr = str.split(" ");
// // console.log(splitStr);

// let arrStr= [];

// for(let i=0; i<splitStr.length; i++) {
//   let reverseStr = "";
//   for(let j=splitStr[i].length - 1; j>=0; j--){
//     reverseStr += splitStr[i][j]
//   }

//   arrStr.push(reverseStr);
// }
// console.log(arrStr.join(" "));

//--------------------------------------------------------------------------------------

//prime number

// function prime(num){
//   if(num < 2) {
//     return false;
//   }

//   if(num ===  2) {
//     return true;
//   }

//   if(num % 2 === 0) {
//     return false;
//   }

//   for(let i=3; i<num-1; i+=2) {
//     if(num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(prime(1));

//--------------------------------------------------------------------------------------

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// const nums = [3,3];
// const target = 6;

// for(let i=0; i<nums.length; i++) {
//   for(let j=1; j<nums.length; j++) {
//     if(nums[i] + nums[j] === target) {
//       console.log(i, j);
//     }
//   }
// }

// -----------------------------

// nums = [1,2,4,7,2];

// target = 4
// Output: [1,4]

// Find the indeces that sum to target

// function getNumber(arr, target) {
//   let indecesArr = [];
//   // console.log(arr, target);

//   for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[i] + arr[j] == target) {
//         console.log(i, j);
//         indecesArr.push(i, j);
//       }
//     }
//   }
//   return indecesArr;
// }

// console.log(getNumber([1,2,4,7,2], 4));

// --------------------------------------------------------

// [1, 2, 3, 1, 4, 2]

// function removeDuplicates(arr) {
//   let uniqueArr = [];
//   for(let i=0; i<arr.length; i++) {
//       if(!uniqueArr.includes(arr[i])){
//           uniqueArr.push(arr[i]);
//       }
//   }
//   return uniqueArr;
// }

// console.log(removeDuplicates([1, 2, 3, 1, 4, 2]));

// --------------------------------------------------------

// 1️⃣ Find the largest element in an array

// [3, 5, 7, 2, 8]

// function largestElement(arr) {
//   let max = 0;
//   for(let i=0; i<arr.length; i++) {
//     if(arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(largestElement([3, 5, 7, 2, 8]));

// ✅ Using Math.max method

// function largestElement(arr) {
//   return Math.max(...arr);
// }

// console.log(largestElement([3, 5, 7, 2, 8]));

// --------------------------------------------------------

// 2️⃣ Find the smallest element in an array

// [3, 5, 7, 2, 8, -6]

// function smallestElement(arr) {
//   let min = arr[0];

//   for(let i=0; i<=arr.length; i++) {
//     if(arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(smallestElement([3, 5, 7, 2, 8, -6]));

// ✅ Using Math.min method
// function smallestElement(arr) {
//   return Math.min(...arr);
// }

// console.log(smallestElement([3, 5, 7, 2, 8, -6]));

// --------------------------------------------------------

// 3️⃣ Find the sum of all elements in an array

// function sum(arr){
//   let sum = 0;
//   for(let i=0; i<arr.length; i++){
// sum += arr[i];
//   }
//   return sum;
// }

// console.log(sum([1,2,3,4]));

//✅ Using reduce method
// function sum(arr) {
//   return arr.reduce((acc, num) => {
//     return acc + num;
//   }, 0)
// }

// console.log(sum([1,2,3,4]));

// --------------------------------------------------------

// 4️⃣ Find the second largest element in an array

// [10, 5, 20, 8]

// function secondLargest(arr) {
//   let max = -Infinity;
//     let secondMax = -Infinity;
//     for(let i=0; i<arr.length; i++) {
//       if(arr[i] > max) {
//       secondMax = max;
//         max = arr[i];
//       } else if(arr[i] < max && arr[i] > secondMax) {
//         secondMax = arr[i];
//       }
//     }
//     return secondMax;
// }

// console.log(secondLargest([10, 5, 20, 8]));

// by forOf loop
// function secondLargest(arr) {
//   let max = -Infinity, secondMax = -Infinity;

//   for(let num of arr){
//     if(num > max){
//       secondMax = max;
//       max = num;
//     }
//     else if(num < max && num > secondMax){
//       secondMax = num;
//     }
//   }

//   return secondMax;
// }

// console.log(secondLargest([10,15, 5, 20, 8]));

// ✅ Using sort method
// function secondLargest(arr) {
// let sorted = [...arr].sort((a,b) => b-a);
// return sorted[1];
// }

// console.log(secondLargest([10, 15, 5, 20, 8]));

// --------------------------------------------------------

// 5️⃣ Find the index of a given element in an array

// function findIndexManual(arr, target) {
// let index;
// for(let i=0; i<arr.length; i++) {
//   if(arr[i] === target) {
//     index = i;
//   }
// }
// return index;
// }

// console.log(findIndexManual([10, 20, 30], 10));

// ✅ Using indexOf method
// function findIndexManual(arr, target) {
//   return arr.indexOf(target);
// }

// console.log(findIndexManual([10, 20, 30], 20));

// Using forIn loop
// function findIndexManual(arr, target) {
//   for(let index in arr) {
//     if(arr[index] === target){
//       return Number(index);
//     }
//   }
// }

// console.log(findIndexManual([10, 20, 30], 10));

// --------------------------------------------------------

// 6️⃣ Check if an array is sorted in ascending order

// function isSortedManual(arr) {
//   for(let i=0; i<arr.length; i++) {
//     if(arr[i] > arr[i+1]){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSortedManual([1, 2, 4]));

// function isSortedManual(arr) {
//   for(let i=0; i<arr.length; i++) {
//     if(arr[i] < arr[i-1]){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSortedManual([1, 3, 2, 4]));

// ✅ Using built-in methods (every)

// function isSorted(arr) {
//     return arr.every((val, i) => i === 0 || arr[i - 1] <= val);
// }

// console.log(isSorted([1, 2, 3, 4])); // Output: true
// console.log(isSorted([3, 1, 2, 4])); // Output: false

// --------------------------------------------------------

// 7️⃣ Reverse an array

// function reverseArrayManual(arr) {
//   let left = 0, right = arr.length - 1;
//   while(left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }

// console.log(reverseArrayManual([1, 2, 3, 4])); // Output: [4, 3, 2, 1]

// ✅ Using reverse method
// function reverseArrayManual(arr) {
//   return arr.reverse();
// }

// console.log(reverseArrayManual([1, 2, 3, 4]));

// --------------------------------------------------------

// 8️⃣ Find the number of occurrences of a given element in an array

// function countOccurrencesManual(arr, target) {
//   let count = 0;
//   for(let num of arr) {
//     if(num === target){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOccurrencesManual([1, 2, 3, 2, 1, 1, 4], 2)); // Output: 3

// ✅ Using filter method
// function countOccurrencesManual(arr, target) {
//   return arr.filter((num) => num === target).length;
// }
// console.log(countOccurrencesManual([1, 2, 3, 2, 1, 1, 4], 2)); // Output: 3

// --------------------------------------------------------------------------------------

// 9️⃣ Check if an array contains duplicate elements

// function hasDuplicatesManual(arr){
//   let uniqueArr = [];
//   for(let i=0; i<arr.length; i++) {
//     if(!uniqueArr.includes(arr[i])){
//       uniqueArr.push(arr[i]);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(hasDuplicatesManual([1, 2, 3, 4])); // Output: false

// ✅ Using Set method
// function hasDuplicates(arr) {
//     return new Set(arr).size !== arr.length;
// }

// console.log(hasDuplicates([1, 2, 3, 4])); // Output: false
// console.log(hasDuplicates([1, 2, 3, 1])); // Output: true

// --------------------------------------------------------------------------------------

// 🔟 Merge two sorted arrays into one sorted array

// function mergeSortedArraysManual(arr1, arr2){
//   let i=0, j=0, mergedArray = [];

//   while(i<arr1.length && j<arr2.length){
//     if(arr1[i] < arr2[j]){
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while(i<arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   while(j<arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// console.log(mergeSortedArraysManual([1, 3, 5], [2, 4, 6, 7])); // Output: [1, 2, 3, 4, 5, 6]

// ✅ Using concat and sort methods
// function mergeSortedArrays(arr1, arr2) {
//     return arr1.concat(arr2).sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// --------------------------------------------------------------------------------------

// 11. Find the missing number in an array of 1 to N.

// ✅ Using Sum Formula
// function findMissingNumber(arr, n) {
// let sum = (n * (n + 1) / 2);
// return sum - arr.reduce((acc, num) => {
//   return acc + num;
// }, 0)
// }

// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3

// --------------------------------------------------------------------------------------

// 12.  Rotate an array k times to the right

// function rotateArray(arr, k) {
//   k = k % arr.length;

//   for(let i=0; i<k; i++) {
//     let last = arr.pop();
//     arr.unshift(last);
//   }
//   return arr;

// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// --------------------------------------------------------------------------------------

// 13. Find the maximum product of two elements in an array.

// function maxProductManual(arr) {
//   let max1 = -Infinity, max2= -Infinity;
//   let min1 = Infinity, min2 = Infinity;

//   for(let num of arr) {
//     if(num > max1) {
//       max2 = max1;
//       max1 = num;
//     } else if(num < max1 && num > max2){
//       max2 = num;
//     }

//     if(num < min1) {
//       min2 = min1;
//       min1 = num;
//     } else if(num > min1 && num < min2) {
//       min2 = num;
//     }
//   }

//   return Math.max(max1 * max2, min1 * min2);
// }

// console.log(maxProductManual([-10, -20, 1, 3, 2])); // Output: 200

// ✅ Using Sorting (Built-in method)
// function maxProductManual(arr) {
//   arr.sort((a,b) => a-b);
//   let n = arr.length;

//   return Math.max(arr[n-1] * arr[n-2], arr[0] * arr[1]);
// }
// console.log(maxProductManual([-10, -20, 1, 3, 2])); // Output: 200

//--------------------------------------------------------------------------------------

// 14. Move all zeros to the end of the array without changing the order of non-zero elements.

//Using Two Pointers (Optimized)
// function moveZeros(arr) {
// let index = 0;

// for (let num of arr){
//   if(num !== 0) {
//     arr[index] = num;
//     index++;
//   }
// }

// while(index < arr.length) {
//   arr[index] = 0;
//   index++;
// }

// return arr;
// }

// console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

//--------------------------------------------------------------------------------------

// function arrayIntersection(arr1, arr2) {
//   let i=0, j=0, result=[];

//   while(i<arr1.length && j<arr2.length){
//     if(arr1[i] < arr2[j]){
//       i++;
//     }
//     else if(arr1[i] > arr2[j]){
//       j++;
//     } else {
//       result.push(arr1[i]);
//       i++;
//       j++;
//     }
//   }
//   return result;
// }

// console.log(arrayIntersection([1, 2, 4, 5, 6], [2, 5, 7])); // Output: [2, 5]

// ✅ Using HashSet (Brute Force)
// function arrayIntersectionManual(arr1, arr2){
//   let set = new Set(arr1);
//   let result = [];

//   for (let num of arr2){
//     if(set.has(num)){
//       result.push(num);
//       set.delete(num);
//     }
//   }
//   return result;
// }
// console.log(arrayIntersectionManual([1, 2, 4, 5, 6], [2, 5, 7])); // Output: [2, 5]

//--------------------------------------------------------------------------------------

// function arrayUnionManual(arr1, arr2) {
//   let result=[...arr1];

//   for(let num of arr2) {
//     if(!result.includes(num)){
//       result.push(num);
//     }
//   }
//   return result;
// }
// console.log(arrayUnionManual([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]

// ✅ Using Set (Built-in)
// function arrayUnion(arr1, arr2) {
//   let set = [...new Set([...arr1, ...arr2])];
//   return set;
// }

// console.log(arrayUnion([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]

//--------------------------------------------------------------------------------------

// function isArrayPalindrome(arr){
//   let left=0, right=arr.length-1;

//   while(left < right) {
//     if(arr[left] !== arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isArrayPalindrome([1, 2, 3, 2, 1])); // Output: true

//--------------------------------------------------------------------------------------

// Count the number of positive, negative, and zero elements in an array.
// function countNumbers(arr){
//   let pos=0, neg=0, zero=0;

//   for(let num of arr){
//     if(num > 0) {
//       pos++;
//     } else if(num < 0){
//       neg++;
//     } else {
//       zero++;
//     }
//   }
//   return {pos, neg, zero}
// }
// console.log(countNumbers([-1, 2, 0, -3, 4, 0]));

//--------------------------------------------------------------------------------------

// Find the sum of the subarray with the maximum sum (Kadane’s Algorithm)
// function maxSubarraySum(arr){
//   let maxSum = -Infinity;
//   let currentSum = 0;

//   for(let num of arr){
//     currentSum = Math.max(num, currentSum + num);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

//--------------------------------------------------------------------------------------

// function secondLargestManual(arr) {
//   if(arr.length < 2) return null;
//   let max = -Infinity, secondMax = -Infinity;

//   for(let num of arr){
//     if(num > max){
//       secondMax = max;
//       max = num;
//     } else if(num < max && num > secondMax){
//       secondMax = num;
//     }
//   }
//   return secondMax;
// }

// console.log(secondLargestManual([10, 20, 4, 45, 99, 99])); // Output: 45

//--------------------------------------------------------------------------------------

// function rotateArrayManual(arr, k) {
//   k = k % arr.length;

//   for(let i=0; i<k; i++){
//     let last = arr.pop();
//     arr.unshift(last);
//   }
// return arr;

// }
// console.log(rotateArrayManual([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

//--------------------------------------------------------------------------------------

// function maxSubarraySum(arr) {
//   let currentSum = 0;
//   let maxSum = -Infinity;

//   for(let num of arr){
//     currentSum = Math.max(num, currentSum + num);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

//--------------------------------------------------------------------------------------

// function firstNonRepeating(arr){

//   for(let i=0; i<arr.length; i++){
//     let uniqueArr = true;
//     for(let j=0; j<arr.length; j++){
//       if(i !== j && arr[i] === arr[j]){
//         uniqueArr = false;
//         break;
//       }
//     }
//     if(uniqueArr) return uniqueArr = arr[i];
//   }

// }

// console.log(firstNonRepeating([4, 5, 1, 2, 5, 1, 2])); // Output: 4

//--------------------------------------------------------------------------------------

// function reverseStringManual(str) {
//   return str.split("").reverse().join("");
// }

// function reverseStringManual(str) {

// let reverse = "";

// for(let i=str.length-1; i>=0; i--){
//   reverse += str[i];
// }

// return reverse;
// }

// console.log(reverseStringManual("hello")); // Output: "olleh"

//--------------------------------------------------------------------------------------

// function isPalindromeManual(str){
// return str === str.split("").reverse().join("");
// }

// function isPalindromeManual(str){
//

//   let left = 0, right = str.length-1;

//   while(left < right){
//     if(str[left] !== str[right]){
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindromeManual("hello")); // Output: true

//--------------------------------------------------------------------------------------

// function countVowelsManual(str){
//   let count = 0;
//   let vowels = "aeiouAEIOU";

//   for(let char of str){
//     if(vowels.includes(char)){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowelsManual("hello world")); // Output: 3

//--------------------------------------------------------------------------------------

// function removeVowelsManual(str){
// let uniqueArr = "";
// let vowels = "aeiouAEIOU";

// for(let char of str){
//   if(!vowels.includes(char)){
//     uniqueArr += char;
//   }
// }
// return uniqueArr;
// }

// console.log(removeVowelsManual("hello world")); // Output: "hll wrld"

//--------------------------------------------------------------------------------------

// function areAnagrams(str1, str2){
// return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(areAnagrams("listen", "silent")); // Output: true

//--------------------------------------------------------------------------------------

// function firstUniqueChar(str){

//   for(let i=0; i<str.length; i++) {
//     let uniqueArr = true;
//     for(let j=0; j<str.length; j++){
//       if(i !== j && str[i] === str[j]){
//         uniqueArr = false;
//         break;
//       }
//     }
//     if(uniqueArr) return str[i];
//   }
// }
// console.log(firstUniqueChar("abacabad")); // Output: 'c'

//--------------------------------------------------------------------------------------

// function charFrequency(str){
//   let freq = {};

//   for(let char of str){
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   return freq;
// }

// console.log(charFrequency("banana"));

// function charFrequency(str){
//   let freq = {};
//   for(let i=0; i<str.length; i++) {
//     let count = 1;
//     for(let j=0; j<str.length; j++) {
//       if(i !== j && str[i] === str[j]){
//         freq[str[i]] = count++;
//       }
//     }
//     freq[str[i]] = count;
//   }
//   return freq;

// }

// console.log(charFrequency("banana"));

//--------------------------------------------------------------------------------------

// // Find the number of words in a string

// function countWordsManual(str) {
//   let count = 0;
//   let inWord = false;

//   for(let i=0; i<str.length; i++) {
//     if(str[i] !== " " && !inWord) {
//       count++;
//       inWord = true;
//     } else if(str[i] === " ") {
//       inWord = false;
//     }
//   }
//   return count;
// }

// console.log(countWordsManual("Hello world!")); // Output: 2
// console.log(countWordsManual("  This is a   test  ")); // Output: 4

//--------------------------------------------------------------------------------------

// function removeDuplicatesManual(str) {
//   let unique = "";

//   for(let i=0; i<str.length; i++) {
//     if(!unique.includes(str[i])){
//       unique += (str[i]);
//     }
//   }
//   return unique;
// }

// console.log(removeDuplicatesManual("banana")); // Output: "ban"
