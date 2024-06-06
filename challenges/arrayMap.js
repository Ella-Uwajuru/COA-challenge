/**
 * Determines if there exists a contiguous subarray within the given array that sums up to the target.
 * @param {number[]} arr - The array of integers.
 * @param {number} target - The target sum to find.
 * @returns {boolean} - Returns true if such a subarray exists, otherwise false.
 */
function hasSubarrayWithTargetSum(arr, target) {
    let start = 0; // Initialize the start pointer.
    let currentSum = 0; // Initialize the sum of the current window.

    // Traverse the array using the end pointer.
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; // Add the current element to the sum.

        // Adjust the window to meet the target sum condition.
        while (currentSum > target && start <= end) {
            currentSum -= arr[start]; // Remove elements from the start of the window.
            start++; // Move the start pointer.
        }

        if (currentSum === target) {
            return true; // Return true if the target sum is found.
        }
    }

    return false; // Return false if no subarray with the target sum is found.
}

// Example usage:
let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
