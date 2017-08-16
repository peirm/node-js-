/**
 * Created by hahha on 2017/8/16.
 */

// 求和
var num = 0;
for(var i=2;i<process.argv.length;i++){
    num = Number(process.argv[i]) + num;
}
console.log(num);