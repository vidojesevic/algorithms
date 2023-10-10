#include <stdio.h>
#include <ctype.h>

void printList(int list[], int len);
void insertionSort(int list[], int len);

int main(int argc, char *argv[]) {
    int list[] = {53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65, 48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33};
    int length = sizeof(list) / sizeof(list[0]);

    printf("Unsorted list:\n");
    printList(list, length);

    insertionSort(list, length);
    printf("Sorted list:\n");
    printList(list, length);

    return 0;
}

void printList(int list[], int len) {
    for (int i = 0; i < len; ++i) {
        printf("%d ", list[i]);
    }
    printf("\n");
}

void insertionSort(int list[], int len) {
    for (int i = 0; i < len; ++i) {
        int val = list[i];
        int j = i - 1;
        while (j >= 0 && list[j] > val) {
            list[j+1] = list[j];
            j--;
        }
        list[j+1] = val;
    }
}
