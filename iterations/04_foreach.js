const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((item) => {
    // console.log(item);
})

coding.forEach( function (val){
    // console.log(val);
}) 

function printme (item) {
    // console.log(item);
}

// coding.forEach(printme)


const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },

    {
        languageName :"python",
        languageFileName : "py"
    },

    {
        languageName : "java" ,
        languageFileName : "java"
    }
]

myCoding.forEach((item) => {
    console.log(item);
})
