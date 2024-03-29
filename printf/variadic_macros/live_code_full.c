#include <stdarg.h>
#include <stdio.h>

int AddNumbers(int firstNum, ...);

int main() 
{

    /* We hardcoded our list to know the end will always be 0 */
    printf("\nVariadic Sums:\n");
    printf("\n2 + 2 = %d ", AddNumbers(2, 2, 0));
    printf("\n3 + 4 + 5 = %d ", AddNumbers(3, 3, 4, 5, 0));
    printf("\n6 + 7 + 8 + 9 = %d ", AddNumbers(4, 6, 7, 8, 9, 0));
    printf("\n\n");

    return 0;
}

// Variadic function to add numbers
int AddNumbers(int first_num, ...) {
    /* initialize sum to the first argument. (1 + nothing will always be 1) */
    int sum = first_num; 

    /* initialize a va_list variable to traverse through your args */
    va_list args;

    /* initialize args to the first argument */
    va_start(args, first_num);

    /* this will check for the end of your arguments. in this case, it is hard coded at 0 */
    int next_num;
    while ((next_num = va_arg(args, int)) != 0) 
    {
        /* this keeps track of your sum for every argument added to it */
        sum += next_num;
    }

    /* end your list */
    va_end(args);

    return sum;
}
