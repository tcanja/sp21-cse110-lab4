function constantTime() {
   let d = new Date();
   let time = d.toLocaleTimeString();
   console.log(time);
}

var interval = setInterval(constantTime, 1000);
