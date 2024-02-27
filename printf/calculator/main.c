#include <stdio.h>
#include <stdlib.h>
#include "main.h"


int main(int argc, char *argv[])
{
    if (argc != 4) /* The program expects 3 command line arguments, as well as the program name itself */
    {
        printf("Argument count too low!\n");
        return (98); /* This number represents a typical error code for an invalid number of args */
    }
    /* Assign the arguments passed on the command line */
    /* The atoi() function converts a string into an int
    This is necessary because argv by default is an array of strings */
    int num1 = atoi(argv[1]); 
    int num2 = atoi(argv[3]);
    char *operator = argv[2]; /* Our operator is already a string - Look at the structure! */

    /* Establish a function pointer that will allow you to point to the specific operation function */
    int (*operation)(int, int);

    /* Assign the function pointer to a variable to hold the address of the function you pointed to 
    ie: your op_add, op_sub, op_mul, etc */
    operation = get_op_func(operator);

    /* Finally! We get to actually do the thing!!! Store the result of the desired operation function */
    int result = 0;
    result = operation(num1, num2);

    /* Print the result!! Otherwise you can't see the beautiful code you did! */
    printf("%d\n", result);

    return (0); /* Success! */
}
