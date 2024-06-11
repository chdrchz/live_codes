#include <stdio.h>
#include <stdlib.h>

int *array_range(int min, int max) {
    
    // variable declaration
    
    // basic error handling

    // calculate the total size of the array

    // allocate memory based on size
    
    // if mem allocation fails

    // loop through size of the range

    // return pointer
}

int main() {
    int min = 5;
    int max = 10;
    int *int_array = 0;

    int_array = array_range(min, max);

    if (int_array != NULL) {
        printf("Array: ");

        for (int i = 0; i <= max - min; i++) {
            printf("%d ", int_array[i]);
        }

        // don't have to free up there, cause we are freeing here
        free(int_array);

    } else {
        printf("Failed to create array.");
    }
    return (0);
}