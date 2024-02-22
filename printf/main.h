#ifndef MAIN_H
#define MAIN_H
#include <stdarg.h>

/**
 * struct op - Operator structure
 *
 * @op: The operator
 * @f: The function associated with the operator
 */

typedef struct op
{
    char *op; /* This is the operator (ex: +, /, -, *) */
    int (*f)(int a, int b); /* This is the associated funtion that the operator will point to */
} op_t; /* This is just an alias for the structure */

/* This is a function that returns a pointer to a function */
int (*get_op_func(char *operator))(int, int);

/* These are the operator functions that our structure will point to */
int op_add(int a, int b);
int op_sub(int a, int b);
int op_mul(int a, int b);
int op_div(int a, int b);

#endif
