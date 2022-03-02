const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
  };
  // adfeb
  //1
  console.log("aaaaaaaaaa");
  //5
  msgPrinter ("bbbbbbbbbb",2000);
  //2
  console.log("dddddddddd");
  //4
  msgPrinter ("eeeeeeeeee",1000);
  //3
  console.log("ffffffffff");
  