/**
 * Created by hahha on 2017/8/16.
 */
var fs = require('fs');

fs.readFile('program5.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("异步读取的内容：\n" + data.toString());
});