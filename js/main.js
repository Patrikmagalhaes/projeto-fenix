
document.addEventListener("DOMContentLoaded", function () {
    const btnSubir = document.getElementById('btn-subir')
    const cabecalho = document.getElementById('inicio')
    const seta = document.getElementById('seta')

    let direcao = 0
    window.addEventListener("scroll", function () {

        var quantidadeRolada = document.body.scrollTop || document.documentElement.scrollTop;
        var quantidadeRolavel = document.documentElement.scrollHeight - document.documentElement.clientHeight
        var porcentagemDoscroll = (quantidadeRolada / quantidadeRolavel) * 100
        document.getElementById("scrollBar").style.width = porcentagemDoscroll + "%";

        function ScrollTop() {
            btnSubir.addEventListener('click', function () {
                cabecalho.scrollIntoView()
            })
        }
        if (scrollY < direcao) {
            ScrollTop()
            seta.classList.remove('off')
        }
        else {
            seta.classList.add('off')
        }
        direcao = scrollY
    })
})
