Write a function that can process an input txt file with the following format:

3 love
6 computers
2 dogs
4 cats
1 I
5 you

In this file, each line contains a number followed by a word. The task is to decode a hidden message based on the arrangement of these numbers into a "pyramid" structure.
The numbers are placed into the pyramid in ascending order, with each line of the pyramid having one more number than the line above it. 
The smallest number is 1, and the numbers increase consecutively, like so:

  1
 2 3
4 5 6

The key to decoding the message is to use the words corresponding to the numbers at the end of each pyramid line (in this example, 1, 3, and 6). You should ignore all the other words. So for the example input file above, the message words are:

1: I
3: love
6: computers

and your function should return the string "I love computers". Happy coding!