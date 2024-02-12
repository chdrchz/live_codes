#include <stdlib.h>
#include <stdio.h> 

int main()
{
    int *bananas;

    bananas = malloc(sizeof(int));

    if (bananas == NULL)
    {
        printf("Memory allocation failed.\n");
        return(1);
    }

    *bananas = 42;

    free(bananas);

    printf("%d\n", *bananas);

    free(bananas);
}