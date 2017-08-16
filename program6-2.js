/**
 * Created by hahha on 2017/8/16.
 */
var fs = require('fs');
var path = require('path');

module.exports = function(dir,filterStr,callback){
    fs.readdir(dir,function(err,list){
        if(err){
            return callback(err);
        }
        list = list.filter(function(file){
            return path.extname(file) === '.' + filterStr
        })
        callback(null,list)
    })
}