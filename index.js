const jsonfile = require('jsonfile')
const file = '/javascript/exam 3/data.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
for(i = 0; i < obj.items.length;i++){
    console.log("Name:" + obj.items[i].fname);
    console.log("Age: " + obj.items[i].age);
}
     

})