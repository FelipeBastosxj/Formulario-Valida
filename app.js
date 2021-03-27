$('#reservista').hide();
$('.aviso').hide();

$('#aparecer').change(function(e){

  if(e.target.value == 'MASCULINO'){
    $('#reservista').show();
  }else if(e.target.value != 'MASCULINO'){
    $('#reservista').hide();
  }

});


$('.formulario').submit(function(e){

  if($('.i1').val()==='' || $('.i2').val()==='' || $('.i4').val()==='' || $('.i5').val()===''){
    event.preventDefault();
    $('.aviso').show();
}else{
    $('.aviso').hide();
    alert('ENVIADO COM SUCESSO')
}

 e.preventDefault();

$.ajax({

  type: 'POST',
  url: 'ajax.php',
  data: {nome: $("#nome").val(), cpf: $("#cpf").val(), 
  sexo: $("#aparecer").val(), perfil: $('#perfil').val(), 
  nr: $('#rnumero').val(), email: $('#email').val(), senha: $('#senha').val()

}})
.done(function(msg){
  alert("DATA SALVO" + msg)
});

});