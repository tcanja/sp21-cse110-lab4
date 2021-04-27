# Part 1 A

## var declaration

1. What is printed by line 9? If the code returns an error, explain why.
- values added: 20

2. What is printed by line 13? If the code returns an error, explain why.
- final result: 20

## let declaration
3. What is printed by line 9? If the code returns an error, explain why.
- values added: 20

4. What is printed by line 13? If the code returns an error, explain why. 
- There's an error because the 'let' defined the result in the if-else statement instead of the scope of the function

## const declaration
5. What is printed by line 9? If the code returns an error, explain why.
- There is no line printed, because the code returns an error. A const value cannot be redefined.

6. What is printed by line 13? If the code returns an error, explain why. 
- There is no line printed, because the code returns an error. A const value cannot be redefined, and line 13 doesn't have access to the const value that it's trying to access.

# Part 1 B
1. What will happen at line 12 and why? If the code causes an error, explain why.
- Line 12 will print 3. i is incremented to 3 within the loop resulting in a print of 3.

2. What will happen at line 13 and why? If the code causes an error, explain why.
- Line 13 will print 150. discountedPrice can be accessed within the function since it was declared by var, and the ast price of the array is 300, and 300 x .5 is 150.

3. What will happen at line 14 and why? If the code causes an error, explain why.
- Line 14 will print 150. finalPrice can be accessed within the function since it is declared by var. The last price (150) didn't need to be rounded resulting in finalPrice = 150

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
- The function discountedPrices will return a new array containing = [50, 100, 150]. Once it iterates through the input array, it will return the new array containing the discounted prices, which is every element x .5

5. What will happen at line 12 and why? If the code causes an error, explain why. Assume this function is being called like the others: discountPrices([100, 200, 300], 0.5).
- This code results in an error because i is declared using let, so the scope of i is only in the loop and line 12 cannot access it.

6. What will happen at line 13 and why? If the code causes an error, explain why.
- Line 13 results in an error because discountedPrice is declared using let, so the scope of discountedPrice is only in the for loop and line 13 cannot access it.

7. What will happen at line 14 and why? If the code causes an error, explain why.
- The code will print the value of finalPrice (150), since finalPrice is declared outside of the loop it is accessible.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
- The function discountedPrices will result in the array containing [50, 100, 150] since it is declared outside of the loop and is accessible.

9. What will happen at line 11 and why? If the code causes an error, explain why.
- Line 11 results in an error because  is declared using let, so i's scope remains in the for loopm and line 11 can't access it.

10. What will happen at line 12 and why? If the code causes an error, explain why.
- Line 12 results in the printing of the value 3. The value of length is decalred using a const so the value doesn't change

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
- The function discountedPrices returns the array containing [50, 100, 150], because we redeclare it with every loop and it doesn't get changed once it is declared

12. Given the above Object, write the notation for:
A. Accessing the value of the name property in the student object
- student.name
B. Accessing the value of the Grad Year property in the student object
- student['Grad Year']
C. Calling the function for the greeting property in the student object
- student.greeting()
D. Accessing the name property of the object in the Favorite Teacher property in student
- student['Favorite Teacher'].name
E. Access the first index in the array of the courseLoad property of the student object
- student.courseLoad[1]

13. Arithmetic
A. ‘3’ + 2
- result: 32 - because it is string concatenation and 2 is read as a string

B. ‘3’ - 2
- result: 1 - because 3 is read as an int to do the math operation

C. 3 + null
- result: 3 - because null is converted to 0

D. ‘3’ + null
- result: 3null - because 3 is first converted to string the concat with null

E. true + 3
- result: 4 - because true converts to 1

F. false + null
- result: 0 - because false and null both convert to 0

G. '3' + undefined
- result: 3undefined - because 3 converts to a string, then concats with undefined

H. '3' - undefined
- result: NaN - becuse undefined converts to NaN

14. Comparisons
A. ‘2’ > 1
- true, because 2 converts to an int

B. ‘2’ < ‘12’
- false because they are both compared as strings and the smaller length will be greater

C. 2 == ‘2’
- true, because 2 converts to an int

D. 2 === ‘2’
- false, because === doesn't allow for conversion, so we can't compare the two different types

E. true == 2
- false, boolean converts to 1 which is not equal to 2

F. true === Boolean(2)
- true because boolean(2) converts to true

15. Explain the difference between the == and === operators.
- == checks for eqaulity with conversions, and === checks for eqaulity but doesn't allow for conversions

16. Read more [here](./part1b-question16.js)

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.
- The result is [2, 4, 6]. doSomething returns double the input array, since callback(array[i]) is actually performing the doSomething(array[i]). We know this because doSomething is passed into the modifyArray

18. Read more [here](./part1b-question18.js)

19. What is the output of the above code?
- result: 1 4 3 2
