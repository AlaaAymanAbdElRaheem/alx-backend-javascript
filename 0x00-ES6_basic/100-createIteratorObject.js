export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const nameList = [];
  for (const emp of employees) {
    for (const name of emp) {
      nameList.push(name);
    }
  }
  return nameList;
}
