# Conudi

Componente: Conversor de unidade de distância

Objetivo
	O componente tem como objetivo facilitar a conversão de distâncias de Metro para Quilômetros. 

Contexto
	Esse componente é utilizado em aulas de Física, que possuem matérias, onde devem converter valores com unidades de distância como “Metros” ou “Quilômetros”.

Problema
	Alunos não conseguem obter conversão de maneira rápida e correta.

Justificativa
	Dificuldade de alunos em conseguir resultados de conversões de unidades de distância corretamente.

Caso de uso expandido
.
Conversor de unidade de distância

Nome: Converter unidade de distância.
Tipo: Primária.
Ator (es): Programador.
Responsabilidade: Receber dados e realizar cálculo de conversão de unidades de distância.
Pré-condição: Entrada de valor numérico.
Pós-condição: Resultado da conversão.

Fluxo: Converter unidade de distância

Opção do ator
Resposta do sistema
1 - O programador insere valor numérico a ser convertido.

3 - Confirma a inserção do número.


2 - Verifica se o valor inserido é um valor numérico decimal

4 - Realiza a conversão de metros para quilômetros.

5 - Exibe uma mensagem de sucesso e o resultado de conversão.
Exceções
2 - O valor inserido contém caracteres diferentes de numeral, sistema retorna uma mensagem de erro.

	

Exemplo

<converte-distancia distan-metros= “10000”></converte-distancia>

Fluxo com entradas corretas.
Dados de entrada
Dados de saída
10.000 m
10 Km


Fluxo com entradas incorretas.
Dados de entrada
Dados de saída
2a
Mensagem de erro.

encurtador.com.br/hHy12








This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
