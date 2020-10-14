let val = 1000;
let x = 0;

increaseCounter = () => {
    setInterval(() => {
        if (x != val){

            document.getElementById('display').innerHTML = x;
            x++;
        }   
        
    }, 10);
}

increaseCounter()