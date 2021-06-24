// Instantiating easyHTTP
const http = new easyHTTP;
  
// Data that that we need to update 
const on = {
    "id" : 1 ,
    "status" : 1
};

const off = {
    "id" : 1 ,
    "status" : 0
};
  
// Put prototype method(url, data,
// response text)
function onFunc(){

    http.put(
        'https://iotlightcontrol.herokuapp.com/1',
           on, function(err, post){
          if(err) {
            console.log(err);
          } else {
            console.log(post);
          }
        });

}

function offFunc(){

    http.put(
        'https://iotlightcontrol.herokuapp.com/1',
           off, function(err, post){
          if(err) {
            console.log(err);
          } else {
            console.log(post);
          }
        });

}

