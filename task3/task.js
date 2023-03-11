// let level = 1
(() => {
    let dead = 0
    let lost = 0
    
    
    function fin(){
        if (dead >= 10){
            //Начнем с начала
            dead = 0
            lost = 0
            level += 1
            alert(`Вы победили, следующий уровень ${level}, скорость на 10% увеличится`)
           
        }
        if (lost >= 5){\
            //Начнем с начала
            dead = 0
            lost = 0
            level -= 1
            alert("Вы проиграли, следующий уровень ${level}, скорость на 10% уменьшится")

        }
        document.getElementById('level').textContent = level

    }

    function getClickFunc(i){
        return function(){
           if ( document.getElementById(`hole${i}`).className === 'hole hole_has-mole' ){
            //Убил
            dead += 1
            document.getElementById('dead').textContent = dead
           }else{
            //Промазал
            lost += 1
            document.getElementById('lost').textContent = lost
           }
           fin()
        }
    }

    for (var i = 1; i <= 9; i++) {
        document.getElementById(`hole${i}`).onclick = getClickFunc(i)
    }
})()

