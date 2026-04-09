const courses = [
{
  id:"COMP 110",
  name: "Introduction to Programming",
  credits: 3,
  prereq: ["Math 130"],
},
{
  id: "COMP 210",
  name: "Data Structures and Analysis",
  credits: 3,
  prereq: ["COMP 110"],
},
{
  id: "COMP 211",
  name: "Systems Fundamentals.",
  credits: 3,
  prereq: ["COMP 210"],
},
{
  id: "COMP 301",
  name: "Foundations of Programming",
  credits: 3,
  prereq:["COMP 210"],
},
{
  id: "MATH 231",
  name: "Calculus of Functions of One Variable I",
  credits: 4,
  prereq: ["MATH 110"],
},
{
  id: "MATH 232",
  name: "Calculus of Functions of One Variable II",
  credits: 4,
  prereq: ["MATH 231"],
},
{
  id: "MATH 233",
  name: "Calculus of Functions of Several Variables",
  credits: 4,
  prereq: ["MATH 232"],
},
{
  id: "MATH 381",
  name: "Discrete Mathematics",
  credits: 3,
  prereq: ["MATH 231"],
}

];
function canTake(courseID, completedCourse){
  const course = courses.find(c => c.id === courseID);
  if (!course) return false;
  if (course.prereq.length === 0) return true;
  return course.prereq.some(prereq => completedCourse.includes(prereq));
}

let courseTaken = [];
function addTakenCourse(course){
  if (courseTaken.includes(course)){
    console.log("You have taken this course");
  }
  else{
  courseTaken.push(course);
  }
}


console.log (canTake("MATH 233", courseTaken));