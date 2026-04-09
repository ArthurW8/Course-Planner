const courses = [
{
  id:"COMP 110",
  name: "Introduction to Programming",
  credit: 3,
  prereq: ["Math 130"],
  gen_ed: ["FC-QUANT"],
},
{
  id: "Comp 210",
  name: "Data Structures and Analysis",
  credit: 3,
  prereq: ["COMP 110"],
  gen_ed: [],
},
{
  id: "COMP 211",
  name: "Systems Fundamentals.",
  credit: 3,
  prereq: ["COMP 210"],
  gen_ed: [],
},
{
  id: "COMP 301",
  name: "Foundations of Programming",
  credit: 3,
  prereq:["COMP 210"],
  gen_ed: [],
},
{
  id: "MATH 231",
  name: "Calculus of Functions of One Variable I",
  credit: 4,
  prereq: ["MATH 110"],
  gen_ed: ["FY-LAUNCH (only designated sections)", "FC-QUANT"],
},
{
  id: "MATH 232",
  name: "Calculus of Functions of One Variable II",
  credit: 4,
  prereq: ["MATH 231"],
  gen_ed: ["FC-QUANT"],
},
{
  id: "MATH 233",
  name: "Calculus of Functions of Several Variables",
  credit: 4,
  prereq: ["MATH 232"],
  gen_ed: ["FC-QUANT"],
},
{
  id: "MATH 381",
  name: "Discrete Mathematics",
  credit: 3,
  prereq: ["MATH 231"],
  gen_ed: [],
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