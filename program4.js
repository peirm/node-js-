/**
 * Created by hahha on 2017/8/16.
 */
var fs = require('fs');// 引用fs.js文件

fs.readFile('program4.txt',function(err,data){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());// 打印出文本内容
    console.log('\n共：' + data.toString().split('\n').length + ' 行');// 打印出行数
});