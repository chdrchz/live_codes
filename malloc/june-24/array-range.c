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
    
    // free memory
    free (int_array);

    // return pointer
    return (int_array);
}
