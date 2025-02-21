function listarRefeicao(dieta,refeicao) {
 
  console.log(`Refeição: ${refeicao}`);
  const categorias = dieta.refeicoes[refeicao];

  for (const [categoria, alimentos] of Object.entries(categorias)) {
      if (alimentos.length > 0) {
          console.log(`${categoria} : ${alimentos.join(", ")}`);
      }
  }
  console.log('---------------------');
}

function listarTodasRefeicoes(dieta) {
   for (const refeicao in dieta.refeicoes) {
      listarRefeicao(dieta,refeicao);
  }
}

function validarDieta(){
  const resposta = confirm("Queres mudar algum alimento nas refeições?");
  return resposta;
  
}

function validarRefeicoes(dieta){
  
  for (const refeicao in dieta.refeicoes) {
    const resposta = confirm(`Queres mudar algum alimento nas refeição: ${refeicao}?`);
    if (resposta) {
      try {
        validarRefeicao(dieta, refeicao);
        console.log(`Foi alterada com sucesso esta refeição: ${refeicao}`);
        continue;
      } catch (error) {
        throw new Error(error);  
      }
    } else {
      continue;

    }
  }

}
function validarRefeicao(dieta, refeicao){
  for (const macronutriente in dieta.refeicoes[refeicao]) {
    const resposta = confirm(`Queres alterear: ${macronutriente}?`);
    if (resposta) {
      try {
        let value = novoMacronutriente();
        dieta.refeicoes[refeicao][macronutriente] = [value];
        console.log(`Foi alterado com sucesso este Macronutriente: ${macronutriente}`);
        continue;
      } catch (error) {
        throw new Error(error);  
      }
    } else {
      continue;

    }
  }

}

function novoMacronutriente(){
  let novo = prompt("Preenche o novo Macronutriente.");
  return novo;
}