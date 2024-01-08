export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((item) => item.location === city)
    .map((item) => {
      const grade = newGrades.filter(
        (newGrade) => newGrade.studentId === item.id,
      );
      const newGrade = grade.length > 0 ? grade[0].grade : 'N/A';
      return { ...item, grade: newGrade };
    });
}
