/**
 * Created by hahha on 2017/8/16.
 */
// 方法一
/*
var net = require('net');

function zeroFill(i){
    return(i<10 ? '0' : '') + i
}
function now(){
    var d = new Date();
    return d.getFullYear() + '_'
    + zeroFill(d.getMoth() + 1) + '_'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}
var server = net.createServer(function(socket){
    socket.end(now() + '\n')
})
server.listen(Number(process.argc[2]))
*/

// 方法二
var net = require('net');
net.createServer(function(socket){
    var date = new Date();
    socket.end(date.toLocaleDateString());
}).listen(process.argv[2]);