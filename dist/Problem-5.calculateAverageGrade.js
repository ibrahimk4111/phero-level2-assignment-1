"use strict";
{
    function calculateAverageGrade(data) {
        const grades = data.grades;
        const sum_of_grades = grades.reduce((a, b) => a + b);
        return sum_of_grades / grades.length;
    }
    const student1 = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90],
    };
    const averageGradeForBob = calculateAverageGrade(student1);
    console.log(averageGradeForBob);
}
