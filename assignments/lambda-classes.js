// CODE here for your Lambda Classes


class  Person {
    constructor (Attributes){
        this.name = Attributes.name;
        this.age = Attributes.age;
        this.location = Attributes.location;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
     }
  }

  class  Instructor extends Person {
    constructor (InsAttributes) {
        super (InsAttributes)
        this.specialty = InsAttributes.specialty;
        this.favLanguage = InsAttributes.favLanguage;
        this.catchphrase = InsAttributes.catchphrase;
    }
    demo (subject) {
        return `Today we are learning about ${this.subject}`;
     }

    grade (student) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
  }

  class Student extends Person {
      constructor (Perattributes) {
          super (Perattributes);
          this.previousBackground = Perattributes.previousBackground;
          this.className = Perattributes.className;
          this.favSubject = Perattributes.favSubject;
      }
    
      listSubjects () {
        for (let i = 0; i <this.favSubject.length; i++) {
         console.log (this.favSubject[i])    
        }
      }

      PRAssignment (subject){
          return `${this.name} has submitted a PR for ${subject}`;
      }

      sprintChallenge (subject) {
         return `${this.name} has begun sprint challenge on ${subject}`;
      }
  }

  class ProjectManager extends Instructor {
      constructor (PMAttributes) {
        super(PMAttributes)
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
      }

  standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
  }

}

const person = new Person({
    previousBackground: "Stay at home Mom",
    name: 'Alice',
    age: 45,
    location: 'New York',
    specialty: "Closures",
    favLanguage: "Java",
    catchphrase: "Did you do your homework??" ,
    className: "WEB7",
    favSubject: "Coding",
    gradClassName: "WEBPT7",
    favInstructor: "Javascript teacher",

  });

  const student = new Student({
    previousBackground: "Student",
    name: 'Zachary',
    age: 20,
    location: 'Los Angeles',
    specialty: "Callbacks",
    favLanguage: "Java",
    catchphrase: "Its Showtime! " ,
    className: "CS132",
    favSubject: ['Html', 'CSS', 'JavaScript'],
    gradClassName: "WEBPT7",
    favInstructor: "HTML teacher",

  });

  const instructor = new Instructor({
    previousBackground: "Cook",
    name: 'Gabe',
    age: 34,
    location: 'Cali',
    specialty: "redux",
    favLanguage: "Python",
    catchphrase: "Bueller….Bueller…Bueller? " ,
    className: "WEB7",
    favSubject: "Coding",
    gradClassName: "WEBPT7",
    favInstructor: "None",

  });

  const projectManager = new ProjectManager({
    previousBackground: "Kindergarten Teacher",
    name: 'Alison',
    age: 33,
    location: 'Virginia',
    specialty: "Objects",
    favLanguage: "Javascript",
    catchphrase: "Hello, Newman " ,
    className: "WEB7",
    favSubject: "Coding",
    gradClassName: "CS1",
    favInstructor: "React Instructor",

  });


  console.log(person.name); 
  console.log(person.speak()); 
  console.log(student.catchphrase); 
  console.log(student.listSubjects());
  console.log(student.PRAssignment("HTML"));
  console.log(student.sprintChallenge());
  console.log(Instructor.demo());
  console.log(Instructor.grade());
  console.log(ProjectManager.location);
  console.log(ProjectManager.standUp());
  console.log(ProjectManager.debugsCode());


  