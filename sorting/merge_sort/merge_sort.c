/*    Program: Merge Sort
 *    Author: Vidoje Sevic 
 *    Date: 02. 08. 2023. 
 *    Purpose: Learning advanced algorithms    */
#include <stdio.h>

void printList(int a[], int length);
void merge_sort(int a[], int length);
void merge_sort_recursion(int a[], int l, int r);
void merge_sorted_arrays(int a[], int l, int m, int r);

int main(int  argc, char *argv[]) {
    int arr[] = {53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65, 48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33};
    int length = sizeof(arr) / sizeof(arr[0]);

    printf("Unsorted list: ");
    printList(arr, length);

    merge_sort(arr, length);
    printf("Sorted list: ");
    printList(arr, length);

    return 0;
}

void printList(int a[], int length) {
    for (int i = 0; i < length; ++i) {
        printf("%d ", a[i]);
    }
    printf("\n");
}

void merge_sort(int a[], int length) {
    merge_sort_recursion(a, 0, length - 1);
}

void merge_sort_recursion(int a[], int l, int r) {

    if(l < r) {
        int m = l + (r - l) / 2;

        merge_sort_recursion(a, l, m);
        merge_sort_recursion(a, m + 1, r);

        merge_sorted_arrays(a, l, m, r);
    }
}

void merge_sorted_arrays(int a[], int l, int m, int r) {
    int left_length = m - l + 1;
    int right_length = r - m;

    int temp_left[left_length];
    int temp_right[right_length];

    int i, j, k;

    for(int i = 0; i < left_length; ++i)
        temp_left[i] = a[l + i];


    for(int i = 0; i < right_length; ++i)
        temp_right[i] = a[m + 1 + i];

    for(i = 0, j = 0, k = l; k <= r; ++k) {
        if((i < left_length) && (j >= right_length || temp_left[i] <= temp_right[j])) {
            a[k] = temp_left[i];
            i++;
        } else {
            a[k] = temp_right[j];
            j++;
        }
    }
}
