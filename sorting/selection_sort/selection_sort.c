#include <stdio.h>
#include <ctype.h>

void selection_sort(int array[], int length);
void printList(int arr[], int length);

int main(int argc, char *argv[]) {
    int arr[] = {53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65, 48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33};
    int length = sizeof(arr) / sizeof(arr[0]);
    printf("Unsorted array:\n");
    printList(arr, length);

    selection_sort(arr, length);
    printf("Sorted array:\n");
    printList(arr, length);
    return 0;
}

void printList(int array[], int len) {
    for (int i = 0; i < len; ++i) {
        printf("%d ", array[i]);
    }
    printf("\n");
}

void selection_sort(int array[], int length) {
    for (int i = 0; i < length; ++i) {
        int min = i;
        for (int j = i + 1; j < length; ++j) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min != i) {
            int temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
}
