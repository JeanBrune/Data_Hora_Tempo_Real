
//PARA FORMATAR MANUALMENTE A HORA, EM TEMPO REAL
//criar data
let data_nova = setInterval(
    function atualizar() {
        let data_nova = new Date()
        console.log(data_nova)
        formatar(data_nova)
        return data_nova
    }, 1000);


//selecionar onde exibir a data
let tela = document.querySelector("#data_hora")
//exibir data e hora na tela

//tela.innerHTML = formatar()

// function data() {
//     setInterval(() => {
//         let data_nova = new Date()
//         console.log(data_nova)
//     }, 1000);
//     return data_nova(data_real)
// }



//criar função de identificar o dia da semana
function dia_da_semana(dia_atual) {
    const dias = ["Domingo", "Segunda", "Terça", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
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







