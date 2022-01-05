// //PARA FUNÇÃO NATIVA DO JS
// //criar data em tempo real
// let data_nativa_js = setInterval(() => {
//     tela.innerHTML = new Date().toLocaleDateString("pt-br", options) //formato regional, opções de exibição declaradas em variavel separada
// }, 1000);

// //formatar data criando um objeto separado para facilitar a leitura
// let options = {
//     dateStyle: "full",
//     timeStyle: "full"
// }

// //selecionar onde exibir a data
// let tela = document.querySelector("#data_hora")

// //exibir na tela
// tela.innerHTML = data_nativa_js()


//PARA FORMATAR MANUALMENTE A HORA, EM TEMPO REAL
//criar data
let data_nova = setInterval(
    function atualizar() {
        let data_nova = new Date()
        console.log(data_nova)
        formatar(data_nova)
        return data_nova
    }, 1000);

//identificar onde exibir na tela
let tela = document.querySelector("#data_hora")

//criar função de identificar o dia da semana
function dia_da_semana(dia_atual) {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    return dias[dia_atual]
}

//criar função de identificar o mês
function mes_do_ano(mes_atual) {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return meses[mes_atual]
}

//criar função de adicoinar zero
function zero_esquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`
}

//criar função de formatar data
function formatar(data_nova) {
    //extrair elementos
    //data
    let dia_atual = zero_esquerda(data_nova.getDate())
    console.log(dia_atual)

    let semana_index = data_nova.getDay()
    console.log(semana_index)
    let dia_semana = dia_da_semana(semana_index)
    console.log(dia_semana)

    let mes_index = data_nova.getMonth()
    console.log(mes_index)
    let mes_nome = mes_do_ano(mes_index)
    console.log(mes_nome)

    let ano_atual = data_nova.getFullYear()
    //hora
    let hora = zero_esquerda(data_nova.getHours())
    let min = zero_esquerda(data_nova.getMinutes())
    let seg = zero_esquerda(data_nova.getSeconds())
    console.log(seg)

    //exibir na tela
    tela.innerHTML = `${dia_semana}, ${dia_atual} de ${mes_nome} de ${ano_atual}, <br> ${hora}:${min}:${seg} (horário local)`
}



