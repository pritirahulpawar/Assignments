// Number of rows for the pattern
let rows: number = 5;

// Outer loop: controls the number of rows (from 0 to rows)
for (let i: number = 0; i <= rows; i++) {

    // Initialize a string for each row (starts with a space for formatting)
    let line: string = " ";

    // First inner loop: adds leading spaces to align the stars to the right
    // As 'i' increases, the number of spaces decreases
    for (let j: number = i; j < rows; j++) {
        line += " ";
    }

    // Second inner loop: adds stars (*) to the current row
    // Number of stars increases with each row
    for (let j: number = 1; j <= i; j++) {
        line += "*";
    }

    // Print the constructed line for the current row
    console.log(line);
}
export{ }