/**
 * Converte um título em um slug de URL.
 *
 * O comportamento exigido está especificado em `tests/slugify.test.ts`: minúsculas,
 * acentos removidos, qualquer sequência de caracteres não alfanuméricos virando um
 * único hífen, sem hífen sobrando nas pontas, e entrada vazia produzindo string
 * vazia.
 */
export function slugify(input: string): string {
  return (
    input
      // NFD separa a letra base dos diacríticos, que são então descartados.
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );
}
