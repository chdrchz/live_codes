#include "main.h"
#include <stddef.h>

/**
 * get_op_func - selects the correct function to perform the operation asked
 * @operator: operator passed as argument (! notice it is a string !)
 *
 * Return: pointer to the function that corresponds to the operator given
 */

int (*get_op_func(char *operator))(int, int)
{
    op_t operators[] = { /* Notice how this array is of type op_t (that was our structure!) */
        {"+", op_add},
        {"-", op_sub},
        {"/", op_div},
        {NULL, NULL} /* This is null because the program needs to know when to stop */
    };

    int counter = 0;

    while (operators[counter].op != NULL) /* Remember this op variable is defined in our structure */
    {
        /* Operator is the user inputted command. ie *, /, +, - */
        if (*(operators[counter].op) == *operator && *(operator + 1) == '\0') 
            return (operators[counter].f); /* Return the correct operator based on the user inputted command */
        /* Continue looping until there is an operator match */
        counter++;
    }
    return (NULL); /* We return null here because the loop did not find any match in the operators array
                        and allows the programmer to handle what to do in the case of no match */
}
