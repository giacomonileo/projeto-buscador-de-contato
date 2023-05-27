const contact = [
    { name: 'Leonardo', number: '(41) 996657544' },
    { name: 'Amanda', number: '(47) 992335400' },
    { name: 'Nathan', number: '(47) 997622185' },
    { name: 'Eliane', number: '+44 7983 733818' },
    { name: 'Anderson', number: '(47) 992819693' },
    { name: 'Claudiomar', number: '(41) 995591448' },
    { name: 'Vinicius', number: '(41) 998440823' },
    { name: 'Rafael', number: '(47) 992800960' },
    { name: 'Paulo Henrique', number: '(41) 998582060' },
]

let p = document.querySelector('p')
let input = document.querySelector('input')

function search(){
    for (let i = 0; i < contact.length; i++) {
        if (input.value.toLowerCase() === contact[i].name.toLowerCase()) {
            p.innerHTML = `Contato Encontrado Nome:${contact[i].name} Tel:${contact[i].number}`
            break
        } else {
            p.innerHTML = "Contato não encontrado, por favor tente novamente"
        }
    }
}