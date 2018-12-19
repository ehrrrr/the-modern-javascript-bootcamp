// Prototypal Inheritance
// Classes
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}. `;
        this.likes.forEach((like) => {
            bio += `${this.firstName} likes ${like}. `
        });
        return bio;
    }
    set fullName(fullName) {
        const names = fullName.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes){
        super(firstName,lastName,age,likes);
        this.position = position;
    }
    getBio(){
        return `${this.fullName} is a ${this.position}.`;
    }
    getYearsLeft(){
        return 65-this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes){
        super(firstName,lastName,age,likes);
        this.grade = Math.min(100, Math.max(0, grade));
    }
    getBio(){
        return `${this.firstName} is ` + (this.grade>=70 ? "passing" : "failing") + " the class";
    }
    updateGrade(amount){
        this.grade+=amount;
    }
}

const teacher = new Employee("Anrew", "Meat", 27, "Teacher", ["Teaching"]);
console.log(teacher.getBio());
console.log(`${teacher.fullName} has ${teacher.getYearsLeft()}  years left.`);


const stud = new Student("Ivan", "Petrov", 13, 55, ["Skiing", "Biking"]);
stud.fullName = "Clancey Turner";
console.log(stud.getBio());
stud.updateGrade(20);
console.log(stud.getBio());

const me = new Person("Elisaveta", "Hristova", 26);
console.log(me.getBio());


//===============================================
//Get and Set
const data = {
    locations: [],
    get location(){
        return this._location;
    },
    set location(value){
        this._location = value.trim();
        this.locations.push(this._location);
    }
}

data.location = "  Sofia  ";
data.location = " New York";
console.log(data.location);