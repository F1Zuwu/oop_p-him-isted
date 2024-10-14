class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(student, grade) {
        this.grades.push({ student, grade });
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
        return `Kursus: ${this.name}`;
    }
}

module.exports = Course;
