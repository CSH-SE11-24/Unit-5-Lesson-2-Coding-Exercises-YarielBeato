// Task 1: Log a greeting message, "Script running" to the console.
console.log("yo")

// Task 2: Prompt the user to enter their username and save it in a variable called 'userName'. Then, console log "Hello, [userName]!"
let user = prompt("enter your name")
console.log("hello" + user)

// Task 3: Declare a variable named 'age' and assign it your age. Then, log a message to the console saying "I'm [age] years old."

let age = 16
console.log("i am" + age + "years old")
// Task 4: Create an object named 'class' with properties such as 'className', 'teacher', and 'grade'. Assign appropriate values to these properties.
let myclass = {
  classname:"Software",
  teacher:"Pham",
grade:85,

}


// Task 5: Console log "I'm taking [className] with [teacher]"
console.log(`i am taking ${myclass.classname} with ${myclass.teacher}`)


// Task 6: Write an if/else statement that checks if the grade is equal to or over 63. If it is, print "I am passing", else print "Oh no, I'm not passing YET."
if (myclass.grade >= 63){
  console.log("i am passing ")
}
if (myclass.grade < 63){
  console.log("i am falling")
}

