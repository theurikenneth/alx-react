import { Seq } from "immutable";

export default function printBestStudents(object) {
  const seq = Seq(object);

  // console.log(seq);
  const student_filter = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUppercase() + string.slice(1);
  }

  const JSObject = student_filter.toJS();

  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capitalizeFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capitalizeFirstLetter(JSObject[key].lastName);
    return JSObject[key];
  });

  console.log(JSObject);
}
