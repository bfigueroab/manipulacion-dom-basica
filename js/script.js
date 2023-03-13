// Para seleccionar por elemento usamos querySelector()
// para seleccionar por id, usamos #pid
// const pid = document.querySelector('#pid')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo-1')
const input2 = document.querySelector('#calculo-2')
const btn = document.querySelector('#btn-calcular')
const resBox= document.querySelector('#res-box')

// Evento 'click' asociado a funcion btnOnClick
form.addEventListener( 'submit', sumarInputValues)

function sumarInputValues( event){
    console.log( event)
    event.preventDefault()
    let val1= Number(input1.value)
    let val2= Number(input2.value)
    let res= val1 + val2

    resBox.innerHTML = `resultado ${res}`
    // console.log('btn btnOnClick...' + res)
}