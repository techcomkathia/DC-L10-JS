function somar(a, b) {
    return a + b
}

test('soma 2 + 2', () => {
    //executando a funcao
    //comparando o resultado com o esperado
    expect(somar(2, 2)).toBe(4)
})

/*test('soma 2 + 2', () => {
    //executando a funcao
    //comparando o resultado com o esperado
    expect(somar(2, 2)).toBe(5)
    //teste falhado
})*/