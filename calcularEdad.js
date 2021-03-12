function calcularEdad(){
  let fecha = document.getElementById('fechaNac').value

  let hoy = new Date()
  console.log(hoy)

  fecha = fecha.split('-')
  console.table(fecha)
  let fn = new Date(fecha[0],fecha[1]-1,fecha[2])
  console.log('fn: '+fn)
  console.log('año: '+fn.getFullYear())
  console.log('mes: '+parseInt(fn.getMonth()+1))
  console.log('dia: '+fn.getDate())
  console.log('---')
  let restar = new Date(hoy.getFullYear(),fn.getMonth(),fn.getDate())>=hoy
  console.log(restar)
  let edad = hoy.getFullYear()-fn.getFullYear()-restar
  document.getElementById('edad').value=edad+' años'
  console.log(`${edad} años`)
}