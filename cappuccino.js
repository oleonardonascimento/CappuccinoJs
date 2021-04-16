const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const getSpoons = (cupQnt) => {
    return ((14 * cupQnt) / 7).toFixed(0)
}

const getWater = (cupQnt, cupSize) => {
    if (cupQnt > 1) {
        return ((parseFloat(14.285714285714) * cupSize / 100) * cupQnt).toFixed(2)
    } else {
        return (cupSize / 7).toFixed(2)
    }
}

const getMilk = (cupQnt, cupSize) => {
    if (cupQnt > 1) {
        return ((parseFloat(85.714285714286) * cupSize / 100) * cupQnt).toFixed(2)
    } else {
        return (cupSize - getWater(cupQnt, cupSize)).toFixed(2)

    }
}

const showRecipe = (cupQnt, cupSize) => {
    console.log(`Ingredientes para ${cupQnt} copos de ${cupSize}ml:

[+] ${getSpoons(cupQnt)} colheres de capuccino.
[+] ${getWater(cupQnt, cupSize)}ml de água.
[+] ${getMilk(cupQnt, cupSize)}ml de leite.
    `)
}

const showSteps = (cupQnt, cupSize) => {
    console.log(`
Modo de Preparo:

[!] Esquente ${getWater(cupQnt, cupSize)}ml de água (sem deixar ferver!).
[!] Adicione ${getSpoons(cupQnt)} colheres (de sopa) de pó de capuccino e misture bem.
[!] Pegue essa mistura e coloque na geladeira, até que esfrie.
[!] Após esfriar, coloque no liquidificador e bata junto com ${getMilk(cupQnt, cupSize)}ml de leite.
[!] E pronto, seu capuccino gelado está pronto para beber!!
    
OBS:
    [+] O liquidificador deixa mais cremoso
    [+] Use canudo de metal, bambu, madeira e papel. Temos que salvar as tartaruguinhas SZ.
    [!] Receita by: Rafa Ballerini!
    [!] Script by: Arthur Ottoni!
    `)
}

const validation = (cupQnt, cupSize) => {
    if (cupSize < 150 || cupSize > 500) {
        console.log('Tamanho inválido!') 
    } else if (cupQnt < 1) {
        console.log('Quantidade inválida!')
    } else {
        showRecipe(cupQnt, cupSize)
        showSteps(cupQnt, cupSize)
    }
}

const main = () => {
    console.clear()
    readline.question('Digite o tamanho do seu copo em ml (min = 150, max = 500): ', cupSize => {
        readline.question('Digite a quantidade de copos vc quer fazer: ', cupQnt => {
            readline.close()
            console.clear()
            validation(cupQnt, cupSize)
        })
    });
}

main()