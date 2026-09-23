# factory-publish-lab

Laboratório **descartável** da Forja Factory, criado para uma finalidade única: testar o efeito
externo da publicação — branch remota e Pull Request em modo draft — sem tocar em nenhum repositório
de produto.

Não é um produto, não tem dependências, não fala com nenhum serviço, não guarda segredo nenhum e
pode ser apagado a qualquer momento.

## Diferença em relação ao factory-lab-01

- `factory-lab-01`: laboratório **local**, sem remoto. Prova isolamento, orçamento, lock,
  contabilidade de custo e repetibilidade.
- `factory-publish-lab` (este): laboratório de **publicação real**, com remoto privado no GitHub.
  Prova branch remota → PR draft → CI, e nada além disso.

Separar os dois evita misturar as evidências dos testes locais com as do teste de efeito externo.

## Projeto

`src/slugify.ts` está deliberadamente **incompleto** (devolve a entrada sem alteração), e
`tests/slugify.test.ts` é a especificação completa do comportamento esperado.

```
pnpm test        # node --test "tests/*.test.ts" — sem dependências, sem node_modules
```

## Regras do laboratório

- Merge nunca é automático; PR é sempre draft.
- Nenhum secret, credencial, Action ou deploy é configurado aqui.
- O push da branch de um run só acontece por comando humano explícito, e somente porque
  `pushEnabled` existe no overlay deste alvo na Factory — em nenhum outro.
