function cunsultaCep() {
	$(".barra-progresso").show();
	var cep = document.getElementById("cep").value;
	var url = "https://viacep.com.br/ws/"+cep +"/json/"
	console.log(url);
	
	$.ajax({
		url:url,
		type:"GET",
		success: function(response){
			console.log(response);
			//document.getElementById("logradouro").inner.HTML = response.logradouro;
			$("#logradouro").html(response.logradouro);
			$("#bairro").html(response.bairro);
			$("#localidade").html(response.localidade);
			$("#uf").html(response.uf);
			$("#titulo_cep").html("CEP " +response.cep);
			$(".cep").show();	
			$(".barra-progresso").hide();
		}

	})
}

$(function(){
	$(".cep").hide();
	$(".barra-progresso").hide();
});