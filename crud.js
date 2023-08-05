const novoForm = document.getElementById('form_func')
const listaFunc = document.getElementById('lista_func')

novoForm.addEventListener("submit", (e)=> {
    
    e.preventDefault();

    const nome = document.getElementById('nome_func').value 
    const cargo = document.getElementById('cargo_func').value
    const perfil = document.getElementById('perfil_func').value

    var div_card = document.createElement('div')
    div_card.classList.add('card')

    var div_card_image = document.createElement('div')
    div_card_image.classList.add('card-image')
    div_card_image.innerHTML = `<img src=${perfil}>`

    var div_card_content = document.createElement('div')
    div_card_content.classList.add('card-content')

    var span_card_title = document.createElement('span')
    span_card_title.classList.add('card-title')
    span_card_title.textContent = `${nome}`

    var p_cargo = document.createElement('p')
    p_cargo.textContent = `${cargo}`

    var div_card_action = document.createElement('div')
    div_card_action.classList.add('card-action')

    var btn_edit = document.createElement('button')
    btn_edit.textContent = 'Editar'
    btn_edit.classList.add('waves-effect')
    btn_edit.classList.add('waves-light')
    btn_edit.classList.add('btn')
    btn_edit.classList.add('amber')

    var btn_del = document.createElement('button')
    btn_del.textContent = "Deletar"
    btn_del.classList.add('waves-effect')
    btn_del.classList.add('waves-light')
    btn_del.classList.add('btn')
    btn_del.classList.add('deep-orange')

    listaFunc.appendChild(div_card)

    div_card.appendChild(div_card_image)
    div_card.appendChild(div_card_content)
    div_card.appendChild(div_card_action)

    div_card_content.appendChild(span_card_title)
    div_card_content.appendChild(p_cargo)

    div_card_action.appendChild(btn_edit)
    div_card_action.appendChild(btn_del)

    novoForm.reset() 

    btn_edit.addEventListener('click', ()=>{
        const novoNome = prompt('digite o novo nome')
        const novoCargo = prompt('digite o novo cargo')
        const novoPerfil = prompt('digite a url do perfil')

        span_card_title.textContent = `${novoNome}`
        p_cargo.textContent = `${novoCargo}`
        div_card_image.innerHTML = `<img src=${novoPerfil}>`

    })

    btn_del.addEventListener('click', ()=>{
        div_card.remove()
    })
    
})