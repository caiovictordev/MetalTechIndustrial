class Ferramenta{
    constructor(nome, tipo, quantidade, setor, codigo){
        this.nome = nome
        this.tipo = tipo
        this.quantidade = quantidade
        this.setor = setor 
        this.codigo = codigo
    }
    nomeFerramenta(){
        if(this.nome.length >= 5 && this.nome.length <= 15){
            throw new Error("Error! Tem que ter entre 5 e 15 caracteres");
            
        }
    }
    tipoDaFerramenta(){
        if(this.tipo.trim() === ""){
            throw new Error("Error! O campo 'TIPO DE FERRAMENTA'não pode vazio");  
        }
    }
    quantidade(){
        if(this.quantidade <= 0){
            throw new Error("Error! Deve haver pelos um produto.");
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
    }
    codigoVazio(){
        if(String(this.codigo).length === ""){
            throw new Error("Error, o campo 'CÓDIGO DA FERRAMENTA' não pode estar vazio.");
            
        }
    }
    codigo(){
        if(String(this.codigo).length !== 5){
            throw new Error("Error! Deve conter apenas 5 números");
        }
    }

    validation(){
        this.nomeFerramenta()
        this.tipoDaFerramenta()
        this.quantidade()
        this.validarCodigo()
        this.codigoVazio()
        this.codigo()   
    }
}

const ferramenta = new Ferramenta()