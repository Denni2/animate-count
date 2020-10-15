let val = 100;
let x = 1;
let infos = document.getElementById('linear-percents');

increaseCounter = () => {
    setInterval(() => {
        if (x <= val){

            document.getElementById('display').innerHTML = x;
            infos.style.width = x + '%';
            
            
            x++;
        }   
        
    }, 10);
}

increaseCounter()