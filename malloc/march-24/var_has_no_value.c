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

    printf("%d\n", *bananas);

    free(bananas);
}
