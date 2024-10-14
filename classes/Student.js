const Person = require('./Person');

class Student extends Person {
    constructor(name) {
        super(name);
        this.id = null;
        this.grades = [];
    }

    setId(id) {
        if (this.id === null) {
            this.id = id;
        }
    }

    getId() {
        return this.id;
    }

    addGrade(course, grade) {
        this.grades.push({ course, grade });
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1;
        const sum = this.grades.reduce((total, g) => total + g.grade, 0);
        return sum / this.grades.length;
    }

    description() {
        return `${this.name} on õpilane.`;
    }
}

module.exports = Student;