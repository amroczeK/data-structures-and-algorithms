/*
This is the main Merge Sort function. It takes an array of numbers as input 
and returns a sorted array.
*/
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/*
The merge() function takes two sorted arrays (left and right) and returns a 
new array that has all the elements from both input arrays, sorted in ascending order.
*/
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/*
Now let's break it down so you can understand how Merge Sort works:

1. function mergeSort(arr: number[]): number[]: This is the main Merge Sort function. It takes an array of 
numbers as input and returns a sorted array.

2. If the array length is less than or equal to 1, it means the array is already sorted, so we just 
return the array as is.

3. We then calculate the middle index of the array and split the array into two parts: left and right.

4. We call the mergeSort function recursively on both the left and right parts, which will sort them individually. 
Once they are sorted, we call the merge() function to combine them into a single sorted array.

5. The merge() function takes two sorted arrays (left and right) and returns a new array that has all the 
elements from both input arrays, sorted in ascending order.

6. To accomplish this, we initialize two pointers (leftIndex and rightIndex) to track our position in 
both left and right arrays.

7. We then use a while loop to iterate through both arrays until we reach the end of one of them. 
Inside the loop, we compare the current element of the left array with the current element of the right array. 
We push the smaller element into our result array and increment the pointer for that array.

8. After the loop, we might still have some remaining elements in either the left or the right array. 
We concatenate these remaining elements to the result array since they are already sorted.

9. And that's how the Merge Sort algorithm works! It efficiently sorts an array by breaking it down into 
smaller parts, sorting them individually, and then merging them together.
*/