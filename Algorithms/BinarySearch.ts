/**
 * Binary Search is an efficient algorithm for finding a specific element in a sorted array.
 * It works by repeatedly dividing the array into two halves - one with elements smaller than
 * the target, and the other with elements larger than the target. It then narrows down the
 * search by only considering the half that may contain the target element. This process continues
 * until the desired element is found or until the search space becomes empty.
 *
 * NOTE: Binary Search can only be used on SORTED ARRAYS! First use a sorting
 * algorithm like quick sort on the array and then search.
 */
function binarySearch(arr: number[], target: number): number {
  let left: number = 0;
  let right: number = arr.length - 1;

  // We use a while loop to keep searching as long as left is less than or equal to right.
  // This loop will keep running until we either find the target or exhaust the search space.
  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 1)); // 0
console.log(binarySearch(arr, 9)); // 8

/*
1. We declare a function binarySearch with two parameters: an array arr of numbers and a target number 
target. The function returns a number - the index of the target in the array, or -1 if the target is 
not found.

2. We initialize two variables: left and right. left starts at index 0, and right starts at the last 
index of the array (arr.length - 1). These two variables define the range of indices we're searching in.

3. We use a while loop to keep searching as long as left is less than or equal to right. This loop will 
keep running until we either find the target or exhaust the search space.

4. Inside the loop, we calculate the middle index mid by averaging left and right and rounding down 
using Math.floor(). This index is used to check the middle element of the current search range.

5. Next, we check if the middle element (arr[mid]) is equal to the target. If it is, we found the target 
and return its index (mid).

6. If the middle element is less than the target, we know the target must be in the right half of 
the array. So, we update left to mid + 1 to search only the right half.

7. If the middle element is greater than the target, we know the target must be in the left half of 
the array. So, we update right to mid - 1 to search only the left half.

8. The loop continues until we either find the target or the search space becomes empty (left > right). 
If the target isn't found, the function returns -1.
*/
