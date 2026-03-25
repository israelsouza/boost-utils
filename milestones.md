Centralizando as issues da `Milestone 1: Fundação` criada durante as aulas do `curso.dev`.

# Geral

- Proposta de arquitetura e pastas
- Testes automatizados
- Banco de dados (local)
- Migrations
- Continuos Integration
- Linter de Código
- Linter de commits
- Banco de dados (homologação e produção)
- Tipo de Licença

# Issues e tarefas internas

## Proposta de arquitetura e pastas

📦 root
 ┣ 📂 pages
 ┃ ┗ 📜 index.js
 ┣ 📂 models
 ┃ ┣ 📜 user.js
 ┃ ┣ 📜 content.js
 ┃ ┗ 📜 password.js
 ┣ 📂 infra
 ┃ ┗ 📜 database.js
 ┃ ┣ 📂 migrations
 ┃ ┣ 📂 provisioning
 ┃ ┃ ┣ 📂 staging
 ┃ ┃ ┣ 📂 production
 ┣ 📂 tests

## Testes automatizados

- [ ] Instalar o Test Runner (Jest)
- [ ] Criar um Teste

## Banco de dados (local)

- [x] Criar endpoint /status
- [x] Subir Banco de Dados (Local)
- [x] Criar módulo database.js

---

- [x] Mover arquivo .env para .env.development
- [x] Adicionar .jsconfig.json com o baseUrl
- [x] Adicionar os scripts dos serviços
- [x] Finalizar retorno do endpoint /status

## Migrations

- [x] Executar migrations por linha de comando
- [x] Executar migrations pelo endpoint '/migrations'

## Continuos Integration

- [x] Estabilizar ambiente local
- [x] Estabilizar testes locais
- [x] Estabilizar o CI
- [x] Refatorações gerais
  - [x] Estabilizar versões de pacotes instalados
  - [x] Atualizar para versões 'seguras'


## Linter de Código

- [ ] Garantir estilização com `Prettier`
- [ ] Garantir qualidade com `ESLint`

## Linter de commits



## Banco de dados (homologação e produção)



## Tipo de Licença




