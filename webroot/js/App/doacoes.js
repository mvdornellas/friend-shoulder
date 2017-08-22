$(document).ready(function(){
    doacoes.ValidacaoFormularioDoacao();
	$("select[name='categoria_id']").change(function(){
		$("#nome-categoria").val($("option[value="+this.value+"]")[0].text);
	});
});

function Doacoes(){}

Doacoes.prototype = {
	constructor: Doacoes,
	ValidacaoFormularioDoacao: function(){
		$("#formDoacao").validate({
			rules: {
				descricao: "required",
				quantidade: "required",
				categoria_id:'required'
			},
			messages: {
				descricao: "O campo Descrição é obrigatório",
				quantidade: "O campo Quantidade é obrigatório",
				categoria_id:'O campo Categoria é obrigatório'
			},
			errorElement : 'div',
			       errorPlacement: function(error, element) {
			         var placement = $(element).data('error');
			         if (placement) {
			           $(placement).append(error)
			         } else {
			           error.insertAfter(element);
			         }
			}
		});
	}  
}

var doacoes = new Doacoes();