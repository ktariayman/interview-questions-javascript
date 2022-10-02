// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.



// first things first validation if the array length is less than 2 then return empty array
// loop through the array and save the first element
// then loop through the subArray [ from the element which we have save to the last element]
// if the sum of the two Saved numbers equal to Target then return array which contains [firstNumber, secondNumber];

// This is O(n^2) time | O(1) space

// this is the first solution I think of
const findTwoSum  = function (nums,target) {
    if(nums.length ===0 || nums.length ===1) return null;
    for (let i = 0 ; i < nums.length; i++){
        const firstNumber  = nums[i];
        for ( let j = i+1 ; i<nums.length ; j++){
            const secondNumber = nums[j];
            if (firstNumber + secondNumber === target) {
                return [firstNumber, secondNumber];
                }
        }
        } 
    }

    
    // Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

    // if the array is sorted then we can use the twoPointer Methods 
    // in this problem the array is not sorted , so we use a build in function to sort 
    // we create 2 pointers ( left & right , left equal to 0 , right equal to the length of the array)
    // while left is less than right that means exists another values
    // if the sum of the values of the nums[left]+nums[right] equal to the target then return array of the position [left,right]
    // if the sum of the values of the nums[left]+nums[right] greater than the target that mean the sum must be less then we decrement the value of the right pointer
    // same thing ,  if the sum of the values of the nums[left] +nums[right] less than the target that mean the sum must be greater then we increment the value of the left pointer
    // we repeat until we find the sum or the left pointer is less than the right pointer ( meaning , we check all the values of nums) so we quit


    // This is O(nlog(n))  | O(1) space

    // const findTwoSum  = function (nums,target) {
    function findTwoSum(nums, target) {
        nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
    const currentSum = nums[left] + nums[right];
    if (currentSum === target) {
    return [nums[left], nums[right]];
    } else if (currentSum < target) {
    left++;
    } else if (currentSum > target) {
    right--;
    }
    }
    return [];
   }
   
