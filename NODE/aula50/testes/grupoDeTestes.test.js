//agrupar vários casos de teste para uma mesma função
//testando as diversas possibilidades de retorno

function imc(peso, altura){
    const imc = peso / (altura * altura)
    
    if(imc < 18.5){
        return 'Abaixo do peso'
    }
    if(imc >= 18.5 && imc < 25){
        return 'Peso normal'
    }
    if(imc >= 25 && imc < 30){
        return 'Acima do peso'
    }
    if(imc >= 30){
        return 'Obesidade'
    }
}


//testar se o imc é de acordo com abaixo do peso, peso normal, acima do peso e obesidade
//ou seja o teste dessa função compreende 4 possibilidades/ testes

//describe cria um grupo de testes
//onde cada teste será um item para a 'finalização do teste' com sucesso
describe('testar função de cálculo de imc', () => {
    test('abaixo do peso', () => {
        expect(imc(50, 1.80)).toBe('Abaixo do peso')
    })
    test('peso normal', () => {
        expect(imc(70, 1.80)).toBe('Peso normal')
    })
    test('acima do peso', () => {
        expect(imc(90, 1.80)).toBe('Acima do peso')
    })
    test('obesidade', () => {
        expect(imc(120, 1.80)).toBe('Obesidade')
    })
})