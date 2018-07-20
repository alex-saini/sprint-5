// Looping Triangle!

let hashtag = '#';

while (hashtag.length < 8) {
    console.log(hashtag);
    hashtag = hashtag += '#';
}

/* 
Wanted to do a while loop first before moving onto a for loop. Made the process simpler 
as I was able to look at the while loop while working on the for loop, plus I wanted some practice.
*/

for (let hashtag = '#'; hashtag.length < 8; hashtag += '#')
    console.log(hashtag);

// FizzBuzz

/* This took me far longer than it should've, I overthought a lot of the 'divisible' section of work but knew the
operators etc that belonged within it. Hard to explain... With some googling I sorted it. */

for (let n = 1; n < 101; n = n + 1) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);

// Chessboard

/* I won't beat around the bush here, I didn't know how to do this one. I went through many different troubleshooting techniques and 
the only reason I'm not putting another couple hours into working it out is because I am literally stumped for time at this point.
After seeing it and writing it out myself and kind of parting it, I do now understand how it works but when I have some free time I will 
revisit this and do it slightly differently to fully intergrate it into my (now sore) brain. :) */

let size = 8;

let board = '';

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {

      if ((x + y) % 2 == 0) {
        board += ' ';

      } else {
        board += '#';

      }
    }
    board += '\n';
  }
  
  console.log(board);




