/**
 * Converte um título em um slug de URL.
 *
 * O comportamento exigido está especificado em `tests/slugify.test.ts`: minúsculas,
 * acentos removidos, qualquer sequência de caracteres não alfanuméricos virando um
 * único hífen, sem hífen sobrando nas pontas, e entrada vazia produzindo string
 * vazia.
 *
 * TODO: implementar. Hoje devolve a entrada sem alteração, então a especificação
 * dos testes falha.
 */
export function slugify(input: string): string {
  return input;
}
