document.addEventListener("DOMContentLoaded", function () {
    const btnSubir = document.getElementById('btn-subir')
    const inicio = document.getElementById('inicio')
    const seta = document.getElementById('seta')
    const btnCopiar = document.getElementById('copiar')
    const email = document.getElementById('email')

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
        }
        else {
            seta.classList.add('off')
        }
        direcao = scrollY
    })

    btnCopiar.addEventListener('click', function () {
        let range = document.createRange()
        range.selectNode(email)
        window.getSelection().removeAllRanges
        window.getSelection().addRange(range)

        document.execCommand("copy")
    })

})
