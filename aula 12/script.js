function verificar() {

   var data = new Date()
   var ano = data.getUTCFullYear ()
   var fano = document.getElementById ('txtano')
   var res = document.querySelector ('div#res')
   
   if ( fano.value.length == 0 || Number(fano.value) > ano )
   { window.alert (`(ERRO) Verifique os dados e tente novamente !!`)}
   
   else {
   
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number (fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id' , 'foto')

   if (fsex [0].checked) {
                          genero = 'Homem' 
                          if ( idade >=0 && idade <=3) {
                                   // BEBE
                               img.setAttribute('src','kalleo.jpeg')    
                        } 
                        
                        else if ( idade > 4 && idade <= 12){          
                                   // CRIANÇA
                               img.setAttribute('src','micael.jpeg')    
                        } 
                        
                        else if (idade > 13 && idade <= 30 ) {
                                  // JOVEM 2008  ate  1991
                               img.setAttribute('src','flaubert.jpeg')         
                        }
                        
                        else if ( idade > 31 && idade <= 40 ) {
                                // ADULTO 
                               img.setAttribute('src','franklin.jpeg') 
                        } 
                        
                        else if ( idade <= 50 ) {
                                // ADULTO
                           img.setAttribute('src','fabricio.jpeg') 
                        }

                        else  {
                                 // IDOSO
                               img.setAttribute('src', 'picorelli.jpeg' )   
                         }      

                     } else if (fsex [1].checked) {
                                   genero = 'Mulher'  
                          if (idade >=0 && idade <=10) {
                                 // BEBE
                               img.setAttribute('src' , 'bbmenina.jpg')
                        } 
                        
                        else if ( idade >4 && idade <= 12) {
                                 // CRIANÇA
                               img.setAttribute('srv' , 'menina.jpg')
                        }
                        
                        else if ( idade > 13 && idade <= 30 ) {
                                 // JOVEM       
                               img.setAttribute ('src','adriele.jpeg')  
                        } 
                        
                        else if ( idade > 31 && idade < 35 ) {
                                // ADULTO 
                               img.setAttribute ('src','jamile.jpeg')
                        }
                        
                        else if ( idade > 36 && idade < 40 ) {
                            // ADULTO 
                           img.setAttribute ('src','aline.jpeg')
                        }
                         
                         else if ( idade <= 60 ) {
                            // ADULTO 
                           img.setAttribute ('src','angela.jpeg')
                         }

                              else  {
                                 // IDOSO 
                                img.setAttribute('src', 'jussara.jpeg')  
                                }
                            
                            }    
    res.style.textAlign ='center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res. appendChild(img)

   
       }
}