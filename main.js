
countNext = () => {
    let x  = 100;
    let z = 0;

    setTimeout(function () {
        for (y = 0; y < x; y++){
            z += 1;
            if (z != x){
                console.log(z);
            }
        }
        
        
    }, 1000);
}

countNext();