var nome = 'Jamile'
var idade = 34
var país = 'Americana'
var agora= new Date()
var horas = agora.getHours()
if ( horas <= 12) { console.log (' BOM DIA ')}
else if ( horas <=18 ) { console.log (' BOA TARDE')}
else {console.log ( 'BOA NOITE')}

console.log ( `Seja bem vindo ${nome}`)
console.log (`Qauntos anos vc tem ? Eu tenho ${idade}`)
console.log ( `Vc pode me dizer de que País vc é ? Eu sou ${país}`)
