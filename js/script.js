'use strict'
// pegando .btn
const ratings = document.querySelectorAll('.btn');

// pegando botão de submit
const submit = document.querySelector('.submit button');

// pegando o component
const component = document.querySelector('.component');

//thank you com rate 
const valor = document.querySelector('.component .value');


// FUNÇÃO PARA ADICIONAR COR EM CLICK DE BUTTON

// criei uma função forEach
ratings.forEach(function (index1) {
    // esta função recebe um evento click
    index1.addEventListener('click', function(e) {
        // dentro desse evento criei uma variavel current
        // esta variavel armazena o texto do botão selecionado, converte em INT, e diminui em um
        // assim ficará parecido como um array
        const current= parseInt(e.currentTarget.innerText - 1);
        // console.log(current)       
        
        // criei um for loop para pegar o segundo index
        for(let i = 0; i < ratings.length; i++) {
            // o index2 é o 'i' do loop no array de ratings
            let index2 = ratings[i].innerText -1;
            // console.log(index2)
            // caso o valor de current seja igual o do index2
            if(current ===  index2) {
                // então a cor será adicionada
                ratings[i].classList.add('active')
            }
            // caso não seja
            else {
                // ela sera removida
                ratings[i].classList.remove('active')
            }
        }
        const value = e.currentTarget.innerText;

        // CRIAR MECANISMO DE SUBMIT
        submit.addEventListener('click', function(){
            component.classList.add('hide')
            valor.innerHTML = `You selected ${current + 1} out of ${ratings.length}`
        })


    })
})

