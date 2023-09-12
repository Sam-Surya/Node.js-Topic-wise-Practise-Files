const os = require('os');



console.log('Hostname: ' + os.hostname());



console.log('Operating System: ' + os.type());


console.log('Platform: ' + os.platform());


console.log('CPU Architecture: ' + os.arch());


console.log('Number of CPU Cores: ' + os.cpus().length);


console.log('Total Memory (bytes): ' + os.totalmem());


console.log('Free Memory (bytes): ' + os.freemem());


console.log('Home Directory: ' + os.homedir());


const userInfo = os.userInfo();
console.log('User Info:', userInfo);


const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);