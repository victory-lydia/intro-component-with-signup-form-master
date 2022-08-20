let counter = 60;
let body1 = document.getElementById('count');

  let b = setInterval((

)=>{

    if(counter > 0){
        counter-=5;
        switch (counter > 0) {
           case (counter % 2 == 0 && !counter % 5 == 0):
              body1.style.cssText = `
             background-color: hsl(45, 94%, 49%)`//yellow
              break; 
           case (counter % 5 == 0 && counter > 10 ):
              body1.style.cssText = `
             background-color:  hsl(114, 92%, 9%)`//green
              break; 
           case (counter < 10 ):
              body1.style.cssText = `
              background-color: hsl(6, 94%, 69%)` //red

          }
    } else 


    {
        body1.style.backgroundColor = 'hsl(0, 100%, 74%)'
        clearTimeout(b)};

console.log(counter);

},1000) 