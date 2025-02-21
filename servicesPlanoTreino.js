function definirPlanoTreino(cliente){

    if (cliente.idade <= 14){
        cliente.planoTreino = new PlanoTreinoC();
    }else{
        
        if (cliente.sexo === 'M'){
            cliente.planoTreino = new PlanoTreinoH();
        }else{
            cliente.planoTreino = new PlanoTreinoF();
        }
    }
}
function printExercicio(exercicios){

  exercicios.forEach(element => {
    if (element.nome){
      console.log(`nome: ${element.nome}`)
    }if (element.series){
      console.log(`series: ${element.series}`)
    }if (element.repeticoes){
      console.log(`repetições: ${element.repeticoes}`)
    }if (element.descanso){
      console.log(`descanso: ${element.descanso}`)
    }
  });

}
function listarExercicios(exercicio) {     
  console.log(exercicio[0]);
  printExercicio(exercicio[1][0]['exercicios']);

  console.log('---------------------');
}


function listarTodosTreinos(planoTreino) {

  planoTreino['treino'].forEach(element => {
    listarExercicios(element);
  });
}

function validarTreino(){
  const resposta = confirm("Queres mudar algum exercicio do teu treino?");
  return resposta;
  
}

function validarTreinos(planoTreino) {
  const treinos = planoTreino.treino;
  for (let i = 0; i < treinos.length; i++) {
    const element = treinos[i];
    const resposta = confirm(`Queres mudar algum exercicios do treino: ${element[0]}? (índice: ${i})`);
    if (resposta) {
      try {
        // Aqui assumimos que element[1][0]['exercicio'] é o valor correto para validarExercicio
        validarExercicio(planoTreino, element[1][0]['exercicios'],i);
        console.log(`Foi alterada com sucesso este exercício: ${element[0]} (índice: ${i})`);
        break;
      } catch (error) {
        throw new Error(error);
      }
    } else {
      break;
    }
  }
}

function validarExercicio(planoTreino, exercicios,index) {
  for (let i = 0; i < exercicios.length; i++) {
    const element = exercicios[i];
    if (element.nome) {
      const resposta = confirm(`Queres alterar: ${element.nome}? (índice: ${i})`);
      if (resposta) {
        try {
          let exervalue = novoExercicio();
          planoTreino.treino[index][1][0]['exercicios'][i].nome = exervalue;
          console.log(`Foi alterado com sucesso este exercício: ${element.nome} (índice: ${i})`);
          break;
        } catch (error) {
          throw new Error(error);
        }
      } else {
        break;
      }
    }
  }
}



function novoExercicio(){
  let novoexer = prompt("Preenche o novo exercicio.");
  return novoexer;
}