/*
Quick Sort is an efficient sorting algorithm that works by selecting a 
'pivot' element from the array and partitioning the other elements into 
two groups - those less than the pivot and those greater than the pivot. 
The pivot is then in its final sorted position. The same process is then 
applied recursively to the two groups until the entire array is sorted.
*/

function quickSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    const pivotIndex: number = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot: number = arr[high];
  let i: number = low - 1;

  for (let j: number = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const data: number[] = [50, 30, 20, 10, 40, 60, 80, 90, 70];
quickSort(data, 0, data.length - 1)
console.log(data);

/*
1. We have two functions: quickSort and partition. The quickSort function is our main function that 
takes an array arr and two indices low and high as input. It sorts the elements in the array between 
these two indices.

2. The quickSort function first checks if low is less than high. If it is, it means there are at least 
two elements to sort, and we proceed with the sorting process.

3. We call the partition function, which takes the same input as quickSort. This function selects a 
pivot element (in this case, the element at index high), partitions the array, and returns the final 
index of the pivot element.

4. After partitioning, we know that the pivot is in its correct position. We then apply the quickSort 
function recursively to the left and right sides of the pivot, excluding the pivot itself.

5. The partition function starts by initializing a variable i to low - 1. This variable will be used to 
keep track of the last index where an element was swapped with a smaller value.

6. We then loop through the elements between low and high - 1 with a variable j. If an element arr[j] 
is less than the pivot, we increment i and swap the elements at indices i and j.

7. After the loop, we swap the pivot element with the element at index i + 1. This ensures that the pivot 
is in its correct position, with all smaller elements to its left and all larger elements to its right.

8. Finally, we return the pivot's index (i + 1) so that the quickSort function knows where to split 
the array for further recursive calls.

To sort an entire array, you would call the quickSort function with low as 0 and high as arr.length - 1. 
The array will be sorted in-place, so you don't need to return it. 
*/