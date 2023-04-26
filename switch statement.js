let number = 2

switch (number) {
    case 1:
        console.log("one");
        break;
        case 2:
        console.log("two");
        break;
        case 3:
        console.log("three");
        break;

    default:
        console.log("invalid input");
        break;
}


// Combining cases ...


let letter = "s"

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(letter +" "+ "this is vowel");
        break;

    default:
        console.log(letter +" "+ "this is not vowel");
        break;
}