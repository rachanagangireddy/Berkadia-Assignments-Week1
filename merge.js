var fs = require('fs');//including fs module
  function append(file,appendingFile){
      fs.readFile(appendingFile,'utf8',function(err,data)
      {
         // console.log(data);if you want to see the data in files view it
    fs.appendFile(file,data, function(err){
        if (err) throw err;//if any error it will print reference error
        console.log('The "data to append" was appended to file!');
      });
  });
}
//now call function append and check it by running.
append('message.txt','client.js');
append('message.txt','server.js');
