document.addEventListener("DOMContentLoaded", function () {
    const btnSubir = document.getElementById('btn-subir')
    const inicio = document.getElementById('inicio')
    const seta = document.getElementById('seta')
    const header = document.getElementById('cabecalho')

    let direcao = 0
    window.addEventListener("scroll", function () {

        var quantidadeRolada = document.body.scrollTop || document.documentElement.scrollTop;
        var quantidadeRolavel = document.documentElement.scrollHeight - document.documentElement.clientHeight
        var porcentagemDoscroll = (quantidadeRolada / quantidadeRolavel) * 100
        document.getElementById("scrollBar").style.width = porcentagemDoscroll + "%";

        function ScrollTop() {
            btnSubir.addEventListener('click', function () {
                inicio.scrollIntoView()
            })
        }
        if (scrollY <= direcao) {
            ScrollTop()
            seta.classList.remove('off')
            header.classList.remove('off')
        }
        else {
            seta.classList.add('off')
            header.classList.add('off')
        }
        direcao = scrollY
    })
})
