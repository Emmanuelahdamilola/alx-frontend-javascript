interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  class TeacherBuilder {
    private teacher: Teacher;
  
    constructor() {
      this.teacher = {
        firstName: '',
        lastName: '',
        fullTimeEmployee: true,
        location: ''
      };
    }
  
    setFirstName(firstName: string): TeacherBuilder {
      this.teacher.firstName = firstName;
      return this;
    }
  
    setLastName(lastName: string): TeacherBuilder {
      this.teacher.lastName = lastName;
      return this;
    }
  
    setFullTimeEmployee(fullTimeEmployee: boolean): TeacherBuilder {
      this.teacher.fullTimeEmployee = fullTimeEmployee;
      return this;
    }
  
    setYearsOfExperience(yearsOfExperience: number): TeacherBuilder {
      this.teacher.yearsOfExperience = yearsOfExperience;
      return this;
    }
  
    setLocation(location: string): TeacherBuilder {
      this.teacher.location = location;
      return this;
    }
  
    addCustomAttribute(key: string, value: any): TeacherBuilder {
      this.teacher[key] = value;
      return this;
    }
  
    build(): Teacher {
      return this.teacher;
    }
  }
  
  const teacherBuilder = new TeacherBuilder();
  const teacher3: Teacher = teacherBuilder
    .setFirstName('John')
    .setFullTimeEmployee(false)
    .setLastName('Doe')
    .setLocation('London')
    .addCustomAttribute('contract', false)
    .build();
  
  console.log(teacher3);
  

  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
  };

  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  interface Student {
    workOnHomework(): string;
    displayName(): string;
  }
  class StudentClass implements Student {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }

  // Test the Implementation
  const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); 
console.log(student.workOnHomework()); 


