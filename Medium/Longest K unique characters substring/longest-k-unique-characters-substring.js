//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function printArray(res, n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];;
        s+=" "; 
    }
    console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s = readLine();
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.longestKSubstr(s, k);
    console.log(res);
  }
}



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    longestKSubstr(s, k) {
        let str=s; 
        if (k <= 0) {
            return -1;
            }
  
        let left = 0;
        let right = 0;
        const charCount = {};
        let distinctCount = 0;
        let maxSubstring = '';
      
          while (right < str.length) {
            // Add the character at right to charCount and increment its count
            const char = str[right];
            charCount[char] = (charCount[char] || 0) + 1;
            if (charCount[char] === 1)
            {
              distinctCount++;
            }
            
            // Shrink the window while distinctCount is greater than k
            while (distinctCount > k)
            {
              const char = str[left];
              charCount[char]--;
              if (charCount[char] === 0) {
                distinctCount--;
              }
              left++;
            }
    
    // Update maxSubstring if the current substring has k distinct characters
            if (distinctCount === k) {
              const substring = str.substring(left, right + 1);
              
              if (substring.length > maxSubstring.length)
              {
                maxSubstring = substring;
              }
            }
            
            // Expand the window
            right++;
          }
          
 
            let output=(maxSubstring.length>0)? maxSubstring.length : -1;

          return output

    }
}
