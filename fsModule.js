const fs = require('fs'); // this line means we are  bringing this module to use in this program.
// this module is great  
fs.appendFileSync('f1.txt', "hello you guys should be from kashmir"); 
// the line above will look for the file f1.txt: if file is present it will add the "hello you guys" to 
// that file othervise it will create the file first and then add to it.
fs.appendFileSync("f1.txt", " \n Yes im from kashmir How are you");
/// this line would be added to the same txt file created earlier.
