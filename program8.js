/**
 * Created by hahha on 2017/8/16.
 */
// 方法一
/*
 var http = require('http');
 var bl = require('bl');

 http.get(process.argv[2],function(response){
 response.pipe(bl(function(err,data){
 if(err){
 return console.error(err);
 }
 data = data.toString();
 console.log(data.length);
 console.log(data);
 }));
 });
*/

// 方法二
var http = require('http');

http.get(process.argv[2],function(res){
    var result = '';
    res.setEncoding('utf8');
    res.on('data',function(data){
        result += data;
    })
    res.on('end',function(data){
        console.log(result.length);
        console.log(result);
    })
})