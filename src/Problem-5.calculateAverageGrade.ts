{
  function calculateAverageGrade(data: Student): number {
    const grades: number[] = data.grades;
    const sum_of_grades: number = grades.reduce((a, b) => a + b);
    return sum_of_grades / grades.length;
  }

  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob);
}
