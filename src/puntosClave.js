let cuerpo = {
    codoIzq: '',
    codoDer: '',
    hombroIzq: '',
    hombroDer: ''
}


// Estas variables se declaran afuera para almacenar valores por fuera de la funcion
let distDer
let distMaxDer

const estaAleteando = () => {
    // Condicion que evalua si algun punto no se esta sensando en algun frame
    let checkearPuntos = (isNaN(cuerpo.codoDer.y) || isNaN(cuerpo.hombroDer.y))
    // Condicion que evalua si la distancia en x entre el hombro y el codo esta entre 0 y 60 (brazos bajos)
    let condicionDer = (cuerpo.codoDer.x - cuerpo.hombroDer.x <= 60 && cuerpo.codoDer.x - cuerpo.hombroDer.x >= 0)
    // En caso de que no sense el codo o el hombro en algun frame, la variable distDer mantiene el valor anterior
    // Si los dos puntos se detectan se calcula la distancia en el eje Y entre el codo y el hombro
    distDer = checkearPuntos ? distDer : cuerpo.codoDer.y - cuerpo.hombroDer.y
    // Calcula la distancia entre el codo y el hombro solo cuando se detecta la persona con los brazos bajos
    distMaxDer = condicionDer ? distDer : distMaxDer
    /**
     * regla de 3 simples para transformar la distancia entre codo/hombro a porcentaje
     * Si distMaxDer ____ 100%
     *    distDer________ ?
     */
    let porcentajeDer = (distDer * 100) / distMaxDer

    console.log(porcentajeDer + '%')
    

    // Si la distancia entre el codo y el hombro es menor al 50% de la distancia maxima devuelve true
    if (porcentajeDer < 50) {
        return true
    } else {
        return false
    }
}

module.exports = {
    cuerpo,
    estaAleteando
}