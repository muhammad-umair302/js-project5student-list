const students = [

  {
  
  name: "John Doe",
  
  semester: 3,
  
  father_name:"Doe",
  
  isFeePaid:true,
  
  courses: ["Mathematics", "Physics", "Computer" ,
  
  "Science"]
  
  },
  
  {
  
  name: "Jane Smith",
  
  father_name:"Smith",
  
  semester: 2,
  
  isFeePaid:true,
  
  courses: ["Biology", "Chemistry", "English"]
  
  },
  
  {
  
  name: "Emily Johnson",
  
  father_name: "Johnson",
  
  semester: 4,
  
  isFeePaid:false,
  
  courses: ["Economics", "Statistics", "Marketing"]
  
  }
  
  ];



var message = '';
var student;
var search;
var list;


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentInfo (student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>semester: ' + student.semester + '</p>';
  report += '<p>father_name: ' + student.father_name + '</p>';
  report += '<p>isFeePaid : ' + student.isFeePaid + '</p>';
  report += '<p>courses: ' + student.courses + '</p>';
  return report;
}

// while (true) 
{
  search = prompt("Search Student records:");
  
  //   if (search === null || search.toLowerCase())
  //  {
  //   break;
  // }
 for (var i = 0; i < students.length; i += 1) {
    student = students [i];
    if (search.toLowerCase() === student.name.toLowerCase()) {
      message = getStudentInfo(student);
      print(message);
      break;
    } else if (search.toLowerCase() === "list") {
        
      for (prop in students){
       console.log(prop, ":", students [prop]);
      }
      
  }
    }
      }
        