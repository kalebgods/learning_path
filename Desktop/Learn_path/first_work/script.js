// A FOR LOOP TO OUTPUT EVEN NUMBERS FROM 2 - 10(INCLUSIVE) 
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

jjj
// A CONVERTED FOR LOOP TO WHILE LOOP
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// A LOOP TO OUTPUT A NUMBER GREATER THAN 100 USING A WHILE DO
let theNumber;
do {
    let theNumber = prompt("Enter a number greater than 100?", 0);
} while (theNumber <= 100 && theNumber);

// A LOOP TO OUTPUT PRIME NUMBERS USING A NESTED LOOP
let n = 10;
for(let i = 1; i <= n; i++){
    for(let j = 2; j < i; j++) {
        if(i % j == 0) continue
    }
}