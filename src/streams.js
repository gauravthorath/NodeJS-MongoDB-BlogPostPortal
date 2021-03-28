const fs = require("fs"); //Core module

//Read Stream declarion
const readStream = fs.createReadStream("../data/201905.txt", {
  encoding: "utf8",
});

//Write Stream declarion
const writeStream = fs.createWriteStream("../output/resultofWS.txt");

// //Reading data
// readStream.on("data", (chunk) => {
//   //data is event using which we can access data from stream as soon as it available
//   console.log("\nNew chunk of data\n");
//   //console.log(chunk.toString()); // No need to put tostring() method as we have added encoding as utf8 at createreadstream
//   console.log(chunk.toString());

//   //Writting data
//   writeStream.write("\nNew Chunk\n");
//   writeStream.write(chunk);
// });

//Pipe : is used to write what ever is coming from readStream to writeStream
readStream.pipe(writeStream);
