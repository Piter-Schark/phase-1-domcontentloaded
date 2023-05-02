// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    // document.querySelector('id')
    console.log("The DOM has loaded");
    
function updateId(words){
    let p = document.querySelector('p')
        p.textContent = words
}
updateId('This is really cool!')

    //console.log (document.querySelector('id'))
  });



