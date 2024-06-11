#include <stdio.h>
#include <stdlib.h>

int *array_range(int min, int max) {
    
    // variable declaration
    int *int_array = 0;
    int total_size = 0;
    int i;
    
    // basic error handling
    if (min > max) {
        return NULL;
    }

    // calculate the total size of the array
    total_size = ((max - min) + 1);

    // allocate memory based on size
    int_array = malloc(sizeof(int) * total_size);
    
    // if mem allocation fails
    if (int_array == NULL) {
        return NULL;
    }

    // loop through size of the array 
    for (i = 0; i < total_size; i++) {
        int_array[i] = min + i;
    }

    // return pointer
    return (int_array);
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

        // we didn't need to free up there cause we free here
        free(int_array);

    } else {
        printf("Failed to create array.");
    }

    return (0);
}
