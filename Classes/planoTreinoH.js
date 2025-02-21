class PlanoTreinoH {
    constructor() {
      this.treino = [
        'Peito e Tríceps', [
          {
            grupo: 'Peito',
            exercicios: [
              { nome: 'Flexões', series: 1, repeticoes: 12, peso: null },
              { nome: 'Supino c/ halteres e barra', series: 3, peso: 'Aproximação + até a falha' },
              { nome: 'Supino inclinado c/ halteres ou barra', series: 3, peso: 'Aproximação + até a falha' },
              { nome: 'Aberturas horizontal (com flexões no descanso)', series: 3, peso: 'Até a falha' },
              { nome: 'Aberturas diagonais "cross over"', series: 3, peso: 'Até a falha' },
              { nome: 'Press chest', series: 3, peso: 'Carga máxima na última série' }
            ],
          },
          {
            grupo: 'Tríceps',
            exercicios: [
              { nome: 'Polia alta com corda', series: 3, peso: 'Até a falha' },
              { nome: 'Tríceps no banco', series: 3, peso: null },
              { nome: 'Press francês (opcional)', series: 3, peso: null }
            ],
          },
        ],
        'Costas e Bíceps', [
          {
            grupo: 'Costas',
            exercicios: [
              { nome: 'Remo c/ halteres e barra pegada supina', series: 3, peso: 'Até a falha' },
              { nome: 'Remada baixa', series: 3, peso: 'Até a falha' },
              { nome: 'Pullover em polia', series: 3, peso: 'Até a falha' },
              { nome: 'Puxada frontal ou dirigido ao peito', series: 3, peso: 'Até a falha' },
              { nome: 'Fly inverso', series: 3, peso: 'Até a falha' },
              { nome: 'Prancha', series: 1, duracao: '2min' }
            ],
          },
          {
            grupo: 'Bíceps',
            exercicios: [
              { nome: 'Rosca pegada supina c/ halteres ou barra', series: 3, peso: 'Até a falha' },
              { nome: 'Rosca pegada neutra c/ halteres ou barra', series: 3, peso: 'Até a falha' },
              { nome: 'Polia baixa pegada supina', series: 3, peso: 'Até a falha' },
              { nome: 'Polia baixa pegada neutra com cordas', series: 3, peso: 'Até a falha' }
            ],
          },
        ],
        'Pernas e Glúteos', [
          {
            grupo: 'Pernas e Glúteos',
            exercicios: [
              { nome: 'Máquina extensora', series: '1 aproximação + Dropset diminuindo 5kg' },
              { nome: 'Leg press', series: 3, peso: 'Até a falha' },
              { nome: 'Stiff/Dead lift', series: 3, peso: 'Até a falha' },
              { nome: 'Flexora deitada', series: 3, peso: 'Até a falha' },
              { nome: 'Cadeira adutora', series: 3, peso: 'Até a falha' },
              { nome: 'Cadeira abdutora', series: 3, peso: 'Até a falha' },
              { nome: 'Hack squat', series: 3, peso: 'Até a falha' },
              { nome: 'Hip thrust', series: 3, peso: 'Até a falha' }
            ],
          },
        ],
        'Ombros, Antebraço e Trapézios', [
          {
            grupo: 'Ombros',
            exercicios: [
              { nome: 'Elevações laterais', series: 3, peso: 'Até a falha' },
              { nome: 'Elevações frontais', series: 3, peso: 'Até a falha' },
              { nome: 'Press militar em máquina', series: 3, peso: 'Até a falha' }
            ],
          },
          {
            grupo: 'Antebraço',
            exercicios: [
              { nome: 'Rosca pegada prono c/ halteres ou barra', series: 3, peso: 'Até a falha' },
              { nome: 'Polia baixa pegada prono', series: 3, peso: 'Até a falha' }
            ],
          },
          {
            grupo: 'Trapézios',
            exercicios: [
              { nome: 'Encolhimento com halteres', series: 3, peso: 'Até a falha' },
              { nome: 'Encolhimento com barra por trás', series: 3, peso: 'Até a falha' },
              { nome: 'Encolhimento com barra pela frente', series: 3, peso: 'Até a falha' },
              { nome: 'Remada alta c/ halteres ou barra', series: 3, peso: 'Até a falha' }
            ],
          },
          {
            grupo: 'Panturrilha/Gémeos',
            exercicios: [
              { nome: 'Elevações dos pés sentado', series: 3, peso: 'Aumentar peso por série' }
            ],
          },
          {
            grupo: 'Atividade Leve',
            exercicios: [
                { nome: 'Caminhada, Yoga ou Mobilidade', series: 1, descanso: '60 segundos' }
            ]
          }
        ]
      ]
    }
  }  