const fs = require("fs"); //Core module

//? Reading files
// fs.readFile("../data/201905.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString()); // only data will return buffer data not readable(byte format) actual data so used tostring method
// });

//? Writting files
// fs.writeFile("../output/solution.txt", "Test text", () => {
//   console.log("File was written");
// });

//? Directories
// if (!fs.existsSync("../assets")) {
//   fs.mkdir("../assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created!");
//   });
// } else {
//   console.log("Folder already exist..");
// }
//? Delete folders
// fs.rmdir("../assets", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Folder removed..");
// });

//? Deleting files
if (fs.existsSync("../output/solution.txt")) {
  fs.unlink("../output/solution.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted..");
  });
}
