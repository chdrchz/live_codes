#include <stdarg.h>
#include <stdio.h>

int AddNumbers(int firstNum, ...);

int main() 
{

    /* We hardcoded our list to know the end will always be 0 */
    printf("\nVariadic Sums:\n");
    printf("\n", AddNumbers(0));
    printf("\n", AddNumbers(0));
    printf("\n", AddNumbers(0));
    printf("\n\n");

    return 0;
}

// Variadic function to add numbers
int AddNumbers(int first_num, ...) {
    /* initialize sum to the first argument. (1 + nothing will always be 1) */
    int sum = first_num; 

    /* initialize a va_list variable to traverse through your args */
    /*CODE GOES HERE*/

    /* initialize args to the first argument */
    /*CODE GOES HERE*/

    /* this will check for the end of your arguments. in this case, it is hard coded at 0 */
    int next_num;
    /*CODE GOES HERE*/
    {
        /* this keeps track of your sum for every argument added to it */
        sum += next_num;
    }

    /* end your list */
    /*CODE GOES HERE*/

    return sum;
}