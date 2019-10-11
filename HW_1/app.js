// Зробити функцію, яка буде робити профайли студентів по групах.
// Створити папка jscx-1800 та jscx-2000
// В конжній папці має бути ще одна пака з імям студента а-ля Viktor Okten. В той файл потрібно записати інфу про студента.
// Його дані довільні. Також на компі мають знаходитьсь фотки. Фото потрібно скопіювати в папку з профайлом студента стрімами.
//
// * Поміняти місцями студентів з 18 та з 20 години
//
// const {mkdir, createWriteStream, createReadStream} = require("fs");
// const {promisify} = require("util");
//
// const DATA = require("./students");
//
// const makeDirectory = promisify(mkdir);
//
// function writeToFile(path, data) {
//   createWriteStream(path, 'utf-8').write(data);
// }
//
// function copyFile(from, to) {
//   const writable = createWriteStream(to, 'utf-8');
//   createReadStream(from).pipe(writable);
// }
//
//
//  function generateStudents() {
//   DATA.forEach(async group => {
//     const dir = `./${group.groupName}`;
//     try {
//       await makeDirectory(dir);
//     } catch (e) {
//       console.log("skipping... file already exists")
//     }
//
//     group.students.forEach(async student => {
//       const name = `${student.firstName}_${student.lastName}`;
//       const studentDir = `${dir}/${name}`;
//       try {
//       await makeDirectory(studentDir);
//       } catch (e) {
//         console.log("skipping... file already exists")
//       }
//       writeToFile(`${studentDir}/${name}.txt`, JSON.stringify(student, null, 4));
//       copyFile('./images/img.jpg', `${studentDir}/${name}_img.jpg`)
//     });
//   });
// }
//
// generateStudents();

const fs = require('fs');

const data = require('./students');


function makeDir() {

  data.forEach(group => {
    const dir = `./${group.groupName}`;
    fs.mkdir(dir, (err) => {
      if (err) return;
    });


    group.students.forEach(student => {
      const name = `${student.firstName}_${student.lastName}`;
      const studDir = `${dir}/${name}`;
      fs.mkdir(studDir, (err) => {
        if (err) return;
        fs.writeFile(`${studDir}/${name}.txt`, JSON.stringify(student, undefined, 2), err => {

          const writeStream = fs.createWriteStream(`${studDir}/${name}_img.jpg`);
          const readStream = fs.createReadStream('./images/img.jpg');
          readStream.pipe(writeStream);

        });

      });

    });

  });
}

makeDir();



