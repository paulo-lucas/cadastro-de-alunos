$(document).ready(function(){
  $('.date').mask('00/00/0000')
  $('.time').mask('00:00:00')
  $('.tel').mask('(00) 0000-0000')
  $('.phone').mask('(00) 0 0000-0000')
  $('.cpf').mask('000.000.000-00', {reverse: true})
  $('.rg').mask('00.000.000-0', {reverse: true})


  $("#enviar_id").click(function(){
  	var dados = document.getElementsByClassName("dados"); //array com todos os inputs
  	var mensagemErro = ""
  	var everythingOk = true

  	//procurando dados não preenchidos
  	for(var i = 0; i < dados.length; i++){
  		if(dados[i].value == ""){
  			mensagemErro = mensagemErro+"O campo ["+dados[i].name+"] é necessário.\n"
			everythingOk = false

			dados[i].style.borderColor = "red"

			//trocando as cores das bordas dos dropdowns
			if(dados[i].id == "sexo_id")
				document.getElementsByClassName("btn dropdown-toggle btn-default")[0].style.borderColor = "red"
			if(dados[i].id == "curso_id")
				document.getElementsByClassName("btn dropdown-toggle btn-default")[1].style.borderColor = "red"
		}else{
			//retornando as cores de bordas aos itens preenchidos
			dados[i].style.borderColor = "#ccc"
			if(dados[i].id == "sexo_id")
				document.getElementsByClassName("btn dropdown-toggle btn-default")[0].style.borderColor = "#ccc"
			if(dados[i].id == "curso_id")
				document.getElementsByClassName("btn dropdown-toggle btn-default")[1].style.borderColor = "#ccc"
		}
  	}


  	if(everythingOk){
	  	alert("Aluno cadastrado com sucesso.\n"+
	  			"Prontuário: "+$('#prontuario_id').val()+
	  			"\n\nAluno:"+
	  			"\n> Nome: "+$('#aluno_nome_id').val()+
	  			"\n> CPF: "+$('#aluno_cpf_id').val()+
	  			"\n> RG: "+$('#aluno_rg_id').val()+
	  			"\n> Data de Nascimento: "+$('#aluno_data_id').val()+
	  			"\n> Sexo: "+$('#sexo_id').val()+
	  			"\n> Telefone: "+$('#telefone_id').val()+
	  			"\n> Celular: "+$('#aluno_celular_id').val()+
	  			"\n> Curso(s): "+getCursos()+
	  			"\n> Email: "+$('#aluno_email_id').val()+
	  			"\n\nResponsável:"+
	  			"\n> Nome: "+$('#responsavel_nome_id').val()+
	  			"\n> CPF: "+$('#responsavel_cpf_id').val()+
	  			"\n> RG: "+$('#responsavel_rg_id').val()+
	  			"\n> Email: "+$('#responsavel_email_id').val()+
	  			"\n> Data de Nascimento: "+$('#responsavel_data_id').val()+
	  			"\n> Celular: "+$('#responsavel_celular_id').val())

	  	//retornando as cores de borda normais
	  	for(var i = 0; i < dados.length; i++)
	  		dados[i].style.borderColor = "#ccc"
		document.getElementsByClassName("btn dropdown-toggle btn-default")[0].style.borderColor = "#ccc"
		document.getElementsByClassName("btn dropdown-toggle btn-default")[1].style.borderColor = "#ccc"

	}else{ 
		//if(!everythingOk)
		alert(mensagemErro)
	}
  })


  	// retorna os cursos escolhidos
	function getCursos(){
		var curso;
		var cursos = document.getElementsByName("curso")
		var matricula = ''
		
		for(var i = 0; i < cursos.length; i++){
			curso = cursos[i]
			if(curso.selected)
				matricula = matricula+"\n> > "+curso.value
		}
		return matricula
	}


	//limpando os dropdowns
	$('#limpar_id').click(function(){
		var dados = document.getElementsByClassName("dados")
		$("#sexo_id").val('default');
		$("#sexo_id").selectpicker("refresh");
		$("#curso_id").val('default');
		$("#curso_id").selectpicker("refresh");
		for(var i = 0; i < dados.length; i++)
	  		dados[i].style.borderColor = "#ccc"
		document.getElementsByClassName("btn dropdown-toggle btn-default")[0].style.borderColor = "#ccc"
		document.getElementsByClassName("btn dropdown-toggle btn-default")[1].style.borderColor = "#ccc"
	})
})
