function alterarPropriedade() {

    if (lista_de_propriedades.length === 0) {
        console.log("Lista vazia, escolha outra opçao do menu");
        menuPropriedade();
    }

    let inCpfDaBusca = teclado.question("Informe o CPF vinculado com a propriedade: ");

    let resultadoDaBusca = consultarPropriedade(inCpfDaBusca);

    let existenciaPropriedade = resultadoDaBusca[0];

    if(existenciaPropriedade == true) {
        console.log("1.Alterar nome");
        console.log("2.Alterar CPF");
        console.log("3.Alterar Organizacao: ");
        
        let escolha = parseInt(teclado.question('Escolha uma opcao do menu: '));
        console.log('--\n\n');

       let propriedadeEncontrada = lista_de_propriedades[resultadoDaBusca[1]];

        switch(escolha) {
            case 1:
                let inNovoNome = teclado.question("Informe o novo nome: ");
                propriedadeEncontrada.mudarNome(inNovoNome);
                break;
            case 2:
                let inNovoCpf = teclado.question("Informe o novo CPF: ");
                propriedadeEncontrada.mudarCpf(inNovoCpf);
                break;
            case 3:
                let inNovoCnpj = teclado.question("Informe o novo CNPJ da sua organizacao: ");
                if(consultarOrganizacao(inNovoCnpj)[0]) {
                    propriedadeEncontrada.mudarCnpj(inNovoCnpj);
                }
                break;
            default:
                console.log('Opcao Invalida! Tente novamente.');
        }
    }

    console.log('\n\n');
}