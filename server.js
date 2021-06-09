var list = ['www.abc1.com', 'www.abc2.com']

const fs = require('fs')



getClientAddress = function (req) {
        // return req.ip.split(":").pop();
      //  console.log(req.headers);
        console.log(req.connection.remoteAddress);
  //      console.log(req.socket.remoteAddress        );
        return req.connection.remoteAddress; 
};

//  put here function to retrieve the host
function getHostName(req) {

        console.log(req.headers.host);
        
        return req.headers.host;

} ;



function puzzolinaparla(req, res) {
        
        brendaprintinconsole = console.log;
        let time = new Date();

        var ipaddress = getClientAddress(req);
        var hostname = getHostName(req);


        var finalstring = hostname + "/"  + time + "/" + ipaddress;

        //var ipclient = getClientAddress(req);
       
        //  get the host request
       
       // var moment = require('moment');
       // moment().format("Do dddd MMMM gggg");

        //  get the current time

        // update a data structure that keep the information of the whole system       
        
        // console.log(req.moment);
       
         fs.appendFile('/var/www/myapp/test.txt', finalstring, (err) => {
         if (err) {
                 console.error(err)
        return
                }
        
         })

        //const myConsole = new console.Console(fs.createWriteStream('/var/www/myapp/test.txt'));
        //myConsole.log(hostname);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        
        res.end('Boluda');
        


}



var gianna = require('http');

gianna.createServer(puzzolinaparla).listen(8080);

console.log('Server started on localhost:8080; press Ctrl-C to terminate...!');




