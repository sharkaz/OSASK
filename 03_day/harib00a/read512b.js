var fs = require('fs');
fs.open('/Users/zwtzhang/Downloads/iso/ubuntu-14.04.2-server-amd64.iso', 'r', function(status, fd) {
    if (status) {
        console.log(status.message);
        return;
    }
    var buffer = new Buffer(512);
    
    fs.read(fd, buffer, 0, 512, 0, function(err, num) {
        fs.open('ubuntu-iso-installer-512.img', 'w', function(status, fdw){
          fs.write(fdw, buffer, 0, 512, function(errw, written, bufferw){
            console.log(written+' bytes has been written to e512.img');
          });
        });
    });
});


