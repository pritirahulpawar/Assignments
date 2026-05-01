// Total number of rows for the diamond pattern
let rows: number = 5;

// ----------- Upper Half of Diamond -----------
// Outer loop: controls the number of rows (0 to rows)
for (let i: number = 0; i <= rows; i++) {

    // Initialize a string to build each row
    let line: number | string = " ";

    // Add leading spaces for alignment (spaces decrease as i increases)
    for (let j: number = i; j < rows; j++) {
        line += " ";
    }

    // Add numbers from 1 to i (increasing sequence)
    // Each number is padded with spaces for better formatting
    for (let j: number = 1; j <= i; j++) {
        line += ` ${j} `;
    }

    // Print the current row
    console.log(line);
}

// ----------- Lower Half of Diamond -----------
// Outer loop: starts from rows-1 and decreases to 0
for (let i: number = rows - 1; i >= 0; i--) {

    // Initialize a string to build each row
    let line: number | string = " ";

    // Add leading spaces for alignment (spaces decrease as i increases)
    for (let j: number = i; j < rows; j++) {
        line += " ";
    }

    // Add numbers from 1 to i (increasing sequence)
    // Each number is padded with spaces for better formatting
    for (let j: number = 1; j <= i; j++) {
        line += ` ${j} `;
    }

    // Print the current row
    console.log(line);

}