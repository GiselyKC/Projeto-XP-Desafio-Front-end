# Boas vindas ao repositório do projeto Home Broker

Neste projeto foi desenvolvido uma plataforma Home Broker que conecta o usuário ao sistema do pregão eletrônico do mercado de capitais, ao utilizar essa aplicação o usuário será capaz de:

  - Depositar ou fazer retirada de dinheiro;
  - Vizualizar seus ativos;
  - Comprar ativos na bolsa;

No repositório você vai encontrar os detalhes para acessar a pagina e como foi desenvolvido o projeto.

O projeto foi criado em aplicação React com uso de Hooks e para manipular os estados foi usado o Context API;

## Instruções para vizualiar o projeto

1. Clone o repositório

  - `git clone git@github.com:GiselyKC/Projeto-XP-Desafio-Front-end.git`

- Entre na pasta do repositório que você acabou de clonar:

  - `cd Projeto-XP-Desafio-Front-end`


2. Instale as dependências e inicialize o projeto

- Instale as dependências:

  - `npm install`

- Inicialize o projeto:

  - `npm start` (uma nova página deve abrir no seu navegador com a aplicação)


3. Para acessar a aplicação:

  - Digite no email:

    - `giselycavalli@xp.com`

  - Digite a senha:

    - `123456`


Obs.: Você pode acessar o arquivo `db.json` contido no projeto e alterar o email e a senha, caso desejar.


### Página de Login

Esta é a página inicial do aplicativo, a pessoa usuaria deverá conseguir fazer seu login, com email e senha.

  - A rota para esta página é ‘/’;
  - Enquanto o usuário não digitar o email e senha, o botão 'Acessar' ficará desabilitado;
  - Caso o usuário digitar a senha incorreta, aparecerá uma mensagem informando 'Senha incorreta';
  - Após clicar no botão 'Acessar' e ter informado o email e senha corretamente, a rota deve ser mudada para '/lista-acoes'.

### Página de Listas de Ações

Esta é a página em que o usuário podera vizualizar suas ações e também terá acesso as ações ativas na bolsa.

  - A rota para esta página é ‘/lista-acoes’;
  - Possui o botão 'Sair' que direciona para a página de Login;
  - Possui o botão 'Depósito / Retirada' que direciona para a rota '/deposito-retirada';
  - Na tabela 'Minhas Ações' contém o botão 'C / V' que após clicar, direciona para a rota '/comprar-vender/:id';
  - Na tabela 'Disponíveis para investir' contém o botão 'C' que após clicar, direciona para a rota '/comprar-vender/:id'.

### Página Depósito/Retirada

Nesta página o usuário podera vizualizar em tela o seu saldo e também depositar ou retirar seu dinheiro.

  - A rota para esta página é ‘/deposito-retirada’;
  - Possui o botão 'Voltar' que direciona para a página de Listas de Ações;
  - Possui o botão confirmar, que caso o usuário:
    - não selecionar a opção desejada, aparecerá uma mensagem informando 'Deve selecionar a opcão de Deposito ou Retirada';
    - não inserir o valor desejado, aparecerá uma mensagem informando 'Insira um valor';
    - inserir o valor e selecionar o botão desejado, o saldo será alterado conforme sua escolha;
    - tentar retirar um valor maior que o seu saldo, parecera uma mensagem informando 'Saldo insuficiente para retirada'.

### Página Comprar e Vender Ações

Nesta página o usuário podera comprar ou vender ações.

  - A rota para esta página é ‘/comprar-vender/:id’;
  - Possui o botão 'Voltar' que direciona para a página de Listas de Ações;
  - Possui o botão confirmar, que caso o usuário:
    - não selecionar a opção desejada, aparecerá uma mensagem informando 'Deve selecionar a opção Comprar ou Vender';
    - não inserir o valor desejado, aparecerá uma mensagem informando 'Insira um valor';
    - inserir o valor e selecionar o botão desejado, parecera uma mensagem informando 'Realizado com sucesso'.
 
 ### Stacks utilizadas
    
<div align="center"> 
   <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
  </a>

  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
  </a> 

  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  </a>

  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a> 


  <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/>
  </a>

   <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
   </a> 
</div>
       
