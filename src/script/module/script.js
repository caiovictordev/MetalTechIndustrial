export default function validacao(){
    const nomeFerramenta = document.getElementById("nome")
    const tipoFerramenta = document.getElementById("tipo")
    const quantidade = document.getElementById("qtd")
    const setorUtilizacao = document.getElementById("setor")
    const codigoFerramenta = document.getElementById("cod")
    const ol = document.getElementById("list-products")
    
    const cadastrar = document.querySelector('.btnSubmit')
    
    const codigoRepetido = []
    
    class Ferramenta{
        constructor(nome, tipo, quantidade, setor, codigo){
            this.nome = nome
            this.tipo = tipo
            this.quantidade = quantidade
            this.setor = setor 
            this.codigo = codigo
        }
        nomeFerramenta(){
            if(this.nome.length < 5 || this.nome.length > 15){
                throw new Error("Error! Tem que ter entre 5 e 15 caracteres");
            }
        }
        tipoDaFerramenta(){
            if(this.tipo.trim() === ""){
                throw new Error("Error! O campo 'TIPO DE FERRAMENTA'não pode vazio");  
            }
        }
        
        quantidadeFerramenta(){
            if(this.quantidade <= 0){
                throw new Error("Error! Deve haver pelos um produto.");
            }
            if(isNaN(this.quantidade)){
                throw new Error("Error! Este campo deve conter apenas números");
            }
        }
        setor(){
            if(this.setor.trim() === ""){
                throw new Error("Error! O campo 'SETOR DE UTILIZAÇÃO' nâo pode estar vazio.");
            }
        }
        validarCodigo(){
            if(isNaN(this.codigo)){
                throw new Error("Error! Deve conter apenas números.");
            }
            if(String(this.codigo).length === ""){
                throw new Error("Error, o campo 'CÓDIGO DA FERRAMENTA' não pode estar vazio.");
            }
            if(String(this.codigo).length !== 5){
                throw new Error("Error! Deve conter apenas 5 números");
            }

            const codigoExiste = codigoRepetido.some(item => codigoFerramenta === this.codigo)
            if(codigoExiste){
                throw new Error("Erro! Já existe um produto com esse código.")
            }
        }
        validation(){
            this.nomeFerramenta()
            this.tipoDaFerramenta()
            this.quantidadeFerramenta()
            this.validarCodigo()
        }
        salvar(){
            codigoRepetido.push(this.codigo)
        }
    }
    cadastrar.addEventListener('click', (event)=>{
        
        event.preventDefault()
        try {
            const ferramenta = new Ferramenta(
                nomeFerramenta.value,
                tipoFerramenta.value,
                quantidade.value,
                setorUtilizacao.value,
                codigoFerramenta.value
            )
        ferramenta.validation()
        alert("Produto Cadastrado com sucesso.")

        ferramenta.salvar()

        const liOl = document.createElement('li')
        liOl.innerText = 'Produto Cadastrado'

        const ul = document.createElement('ul')
        const liUlNome = document.createElement('li')
        liUlNome.innerText = `Nome: ${ferramenta.nome}`

        const liUlTipoFerramenta = document.createElement('ul')
        liUlTipoFerramenta.innerText = `Tipo: ${ferramenta.tipo}`

        const liUlQuantidade = document.createElement('ul')
        liUlQuantidade.innerText = `Quatidade: ${ferramenta.quantidade}`

        const liUlSetor = document.createElement('ul')
        liUlSetor.innerText = `Setor: ${ferramenta.setor}`

        const liUlCodigo = document.createElement('ul')
        liUlCodigo.innerText = `Setor: ${ferramenta.codigo}`

        ul.append(liUlNome, liUlTipoFerramenta, liUlQuantidade, liUlSetor, liUlCodigo)

        ol.append(liOl, ul)
        } catch (error) {
            alert(`mensagem: ${error.message}`)
            alert(`Nome do Erro: ${error.name}`)
        }
        
    })
}