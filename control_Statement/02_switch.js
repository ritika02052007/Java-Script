// ********** Syntax of Switch ************

// switch(key) {
//     case value :
//         statement 
//         break;
//     case value :
//         statement
//         break;


//     default :
//          statement
// }


const month = "may"

switch (month) {
    case "jan" :
        console.log("january");
        break ;
    case "feb" :
        console.log("febraury");
        break ;
    case "march" :
        console.log("march");
        break ;
    case "may" :
        console.log("may");
        break ;

    default :
        console.log("Another month");
        break;
}