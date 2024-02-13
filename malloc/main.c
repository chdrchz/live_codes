#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main()
{
    char *boogie= "I really like to shake my bum"; 
    char *new_boogie;

    int i = 0;
    size_t length = 0;

    length = strlen(boogie);

    new_boogie = malloc(sizeof(char) * (length));

    if (new_boogie == NULL)
    {
        return(1);
    }

    while (boogie[i] != '\0')
    {
        new_boogie[i] = boogie[i];
        i++;
    }

    new_boogie[i] = '\0';

    printf("%s\n", new_boogie);

    free(new_boogie);

    return (0);
}