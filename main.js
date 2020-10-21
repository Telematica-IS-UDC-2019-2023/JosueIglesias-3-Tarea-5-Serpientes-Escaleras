class Dado {
    lanzarDado(){
        return Number(Math.round(Math.random() * (6 - 1) + 1))
    }
}

class Jugador { 
    constructor() {
        let posicion = 0
        this.posicion = posicion
    }

    avanzar(num){
        this.posicion += num  
    }
}

class Tablero{
    constructor(){
        }
    
    verificarCasilla(casilla){
        switch (casilla){
            case 6://escalera
                return 13
            case 10://serpiente
                return 2
            case 18://escalera
                return 65
            case 24://serpiente
                return 5
            case 31://escalera
                return 52
            case 35://serpiente
                return 3
            case 36://escalera
                return 55
            case 45://serpiente
                return 11
            case 47://escalera
                return 68
            case 66://escalera
                return 100
            case 70://serpiente
                return 64
            case 72://escalera
                return 90
            case 73://serpiente
                return 51
            case 83://escalera
                return 90
            case 87://serpiente
                return 75
            case 91://serpiente
                return 20
            default:
                return casilla 
        }
    }
}

let player1 = new Jugador
let player2 = new Jugador
let tab = new Tablero
let dado = new Dado

for (let i = 0; player1.posicion < 100 && player2.posicion < 100; i++){
        player1.avanzar(dado.lanzarDado())
        //console.log('Jugador 1: Posicion previa a verificar: ' + player1.posicion)
        player1.posicion = tab.verificarCasilla(player1.posicion)
        //console.log('Jugador 1: Posicion despues de verificar: ' + player1.posicion)
        //console.log( 'Posicion jugador 1: ' + player1.posicion)
        player2.avanzar(dado.lanzarDado())
        //console.log('Jugador 2: Posicion previa a verificar: ' + player2.posicion)
        player2.posicion = tab.verificarCasilla(player2.posicion)
        //console.log('Jugador 2: Posicion despues de verificar: ' + player2.posicion)
        console.log( 'Posicion jugador 1: ' + player1.posicion + " ||" + ' Posicion jugador 2: ' + player2.posicion)
}

if (player1.posicion >= 100){
    console.log('Ganó jugador 1')
} else if (player2.posicion >= 100){
    console.log('Ganó jugador 2')
}