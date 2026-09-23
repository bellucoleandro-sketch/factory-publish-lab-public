import { test } from "node:test";
import assert from "node:assert/strict";

import { slugify } from "../src/slugify.ts";

// Especificação completa de slugify(). Estes testes são o contrato: a implementação
// precisa fazer todos passarem sem que nenhum deles seja alterado.

test("converte para minúsculas", () => {
  assert.equal(slugify("Forja"), "forja");
  assert.equal(slugify("FORJA OS"), "forja-os");
});

test("troca espaços por hífen único", () => {
  assert.equal(slugify("forja os"), "forja-os");
  assert.equal(slugify("forja   os   factory"), "forja-os-factory");
});

test("remove acentos, preservando a letra base", () => {
  assert.equal(slugify("João Pedro"), "joao-pedro");
  assert.equal(slugify("Ação Órgão"), "acao-orgao");
  assert.equal(slugify("Çedilha Ümlaut"), "cedilha-umlaut");
});

test("qualquer sequência de não alfanuméricos vira um hífen só", () => {
  assert.equal(slugify("forja/os_factory"), "forja-os-factory");
  assert.equal(slugify("v1.0 — release!"), "v1-0-release");
});

test("preserva números", () => {
  assert.equal(slugify("Unidade 7B"), "unidade-7b");
  assert.equal(slugify("Loja 24 Horas"), "loja-24-horas");
});

test("não sobra hífen nas pontas", () => {
  assert.equal(slugify("  forja os  "), "forja-os");
  assert.equal(slugify("---forja---"), "forja");
});

test("entrada vazia produz string vazia", () => {
  assert.equal(slugify(""), "");
  assert.equal(slugify("   "), "");
  assert.equal(slugify("!!!"), "");
});
