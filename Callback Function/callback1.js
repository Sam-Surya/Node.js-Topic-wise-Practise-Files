function doSomethingAsync(callback) {
   
    setTimeout(function () {
      console.log("Async operation completed.");
      
      callback();
      
    }, 2000); 

  }
  
  
  
  function callbackFunction() {
    console.log("Callback function executed.");
  }
  
  
  doSomethingAsync(callbackFunction);
  
  
  console.log("Main program continues to run.");
  