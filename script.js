const avanca = ducumento.querySelectorALL(´.btn-proximo´);

avanca.forEach(button => {
    button.addEventListener(`click`, funtion(){
        const atual = documento.querySelector(` .ativo`);
        const proximoPasso = `passo-`+ this.geTATTribute(´ data-proximo´),

        atual.classiListe.remover(`ativo`);
        documento.getElementById(proximoPasso).classList.addEventListener(`ativo`);
})
})