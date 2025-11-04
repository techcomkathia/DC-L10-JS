import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useContext } from 'react';
import { ProdutosContexto } from './ProdutosContexto';

import { useState } from 'react';

export default function Atividade3() {
    //desestruturar o objeto compartilhado no contexto
    const {produtos, setProdutos} = useContext(ProdutosContexto)

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState(0)
    const [imagem, setImagem] = useState('')


    function cadastrarProduto(e){
        e.preventDefault()//remove o comportamento padrão do formulário

        if(!nome || !preco || !imagem){
            alert('Preencha todos os campos')
            return
        }
        const novoProduto = ({id: produtos.length+1,nome:nome,preco: preco,img: imagem}) //criar o produto
        setProdutos([...produtos, {...novoProduto}]) //adicionar o produto ao array de produtos do contexto
        console.log(produtos)//mostrar o array de produtos no console
        //limpar as variaveis dos inputs
        setNome('')
        setPreco(0)
        setImagem('')
        setNovoProduto({})
    }


    return(
        <>
            <h1>Atividade 3</h1>
            <p>Adicionar produtos ao array de produtos</p>


            <Form onSubmit={(e)=> cadastrarProduto(e)}>
                <Form.Group className="mb-3" controlId="produto">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do produto" 
                    onChange={(e) => { setNome(e.target.value)} } value={nome} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="preco">
                    <Form.Label>Preco</Form.Label>
                    <Form.Control type="number" placeholder="Digite o preco do produto" 
                    onChange={(e) =>{ setPreco(e.target.value)}}  value={preco} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imagem">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control type="text" placeholder="Digite a url da imagem do produto" 
                    onChange={(e) =>{ setImagem(e.target.value)}} value={imagem}   />
                </Form.Group>

                <Form.Group className="mb-3" controlId="btn">
                    <Button variant="primary" type="submit" >
                        Cadastrar
                    </Button>
                </Form.Group>
            </Form>
        </>)




}