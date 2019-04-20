class NegociacaoController {

    constructor(data, quantidade, valor){
		
		let $ = document.querySelector.bind(document);	
		this._data = $('#data');
		this._quantidade = $('#quantidade');
		this._valor = $('#valor');
		Object.freeze(this);
	}	

	adiciona(event){
	   event.preventDefault();
	   let data = new Date(...this._data.value.split('-').map((item,indice)=> item - indice % 2));
       let negociacao = new Negociacao(data, this._quantidade.value, this._valor.value);	
	   console.log(negociacao);	
	}	
}	