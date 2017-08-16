/**
 * Created by hahha on 2017/8/16.
 */

var fs = require('fs');// 引用fs.js文件

var data = fs.readFileSync('program3.txt');// 将program3.txt文件引入到data中

console.log('共：' + data.toString().split('\n').length + ' 行');// 打印出行数