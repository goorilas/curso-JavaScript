// DOM (document object model)
// criando árvore DOM
                            //window
                //location - document - history
                             // |
                            //html
                        //head - body
                        // |       |
                //meta - title     |    
                            //h1 - p - p - div
                                   //  |
                                   //strong
                                   
// selecionando elementos do DOM
var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[0] //usa-se o [0] quando getElements esta no plural para selecionar qual ('p') selecionar, nesse caso selecionando o primeiro qe é o [0].

// usamos dessa forma para selecionar por Id.
var d = window.document.getElementById('msg')

// dessa forma com querySelector para Id tags e ('div.msg') no caso de a seleção for feita por uma class.
var d = window.document.querySelector('div#msg')