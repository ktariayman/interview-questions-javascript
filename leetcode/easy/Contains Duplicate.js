 // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// loop through the array , 
// compare every number ( exemple nums[i] , i=0 ) with every other number 
// we do the same things with the rest of the array until we find duplicat or we finish
// we are doing it for every number so it's time complexity = O(n^2) but the good news we don't need any extra memory so space complexity = O(1)


const  containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {//  O(N) 
        for (let j = 0; j < i; j++) {         // O(N) 
            const isDuplicate = nums[j] === nums[i];
            if (isDuplicate) 
                return true;
        }
    }
    return false;
}

// can we do better ?? yes we can 

// sort the array then any duplicates exist , they gonna be adjacent to each other
// [1,2,3,1] ==> [1,1,2,3]
// now we are going to test , we gonna loop through the array once 
// two pointer method , t[i] && t[i+1] if they are equals then return true else false
// it's O(nlog(n)) time complexity and also O(1) space complexity


var containsDuplicate2 = (nums) => {
    nums.sort((a, b) => a - b);// O(nlog(n))
    return hasDuplicate(nums);
}

const hasDuplicate = (nums) => {
    for (let i = 0; i < (nums.length - 1); i++) {/* Time O(N) */
        const j = (i + 1);

        const isNextDuplicate = nums[i] === nums[j];
        if (isNextDuplicate) 
            return true;
    }

    return false;
}

// other solution which we goona sucrifice the Space complexity and the time complexity gonna be less than O(nlon(n))
// We goona create a Set which contains all the values of the array :nums
// NB : Set do not contains any duplicates numbers so if the array equals [1,1,1] , Set(1,1,1) ==> [1]
// then we goona compare the length of the array nums and the length of the Set 
// if they are equals then no duplicates and return true else return false

// time complexity O(n)  , space complexity O(n) : because we create a new SET 

var containsDuplicate3 = (nums) => {
    const numsSet = new Set(nums);
    

    return !(numsSet.size === nums.length);;
};
