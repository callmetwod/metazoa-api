## 🤓Visão Geral
Esta API foi desenvolvida em **JavaScript/Node.js.** 
Basicamente é uma API que contém informações de ONGS de proteção animal e serviços de SOS como bombeiros para encontros com animais selvagens como: ***Nome, Endereço, Telefone, etc**, cadastro de animais para adoção e visualização de animais que estão disponíveis para adoção, cadastro de funcionários e de usuários, como também agências de adoção e novas ONGS.
Foi utilizado Express para o roteamento e manipulação de requisições HTTP, e MySQL como banco de dados.

**URL PARA CONSUMO DA API** =  https://metazoa-api.onrender.com 

(Todos os dados estão hospedados na https://railway.app/ numa imagem em MySql)

Código feito em conjunto com [@oziel062](https://github.com/Oziel062)

## 🖥️Endpoints

### Dados

**Dados** = (user, professional, agency, animal, SOS,)

---
### Criando um Dado

- **Endpoint**: `/new-(dado)` (Ex: "/new-user")
- **Metodo HTTP**: POST
- **Descrição**: Cria um novo dado


#### Parâmetros de Requisição de Dados

### User

~~~json
{
"name": "Nome do usuário",
"email": "Endereço do usuário",
"password": "Senha do usuário"
}
~~~

### Animal
~~~json
{
"name": "Nome do animal",
"race": "Raça do animal",
"age": "Idade do animal",
"injured": "Se o animal está ferido (true ou false)",
"for_adoption": "Se o animal está disponível para adoção (true ou false)"
}
~~~


### SOS
~~~json
{ 
"name": "Nome do SOS",
"email": "Endereço do SOS",
"phone": "Número do SOS",
"address": "Endereço do SOS"
}
~~~


### Professional
~~~json
{ 
"name": "Nome do Professional",
"email": "Endereço do Professional",
"password":"Senha do Professional"
}
~~~

### Agency
~~~json
{
"name": "Nome da Agency",
"address": "Endereço da Agency"
}
~~~


---
### Listando dados

- **Endpoint**: `/nomeDoDadoEmPlural` (ex: '/users', '/agencies', 'soss')
- **Metodo HTTP**: GET
- **Descrição**: Mostra todos os dados selecionados do DB

---
### Metodos Update Disponíveis

**Agency**


- **Endpoint**: `/update-address/`
- **Metodo HTTP**: PATCH
~~~~json
{
	"address": "Novo endereço"
}
~~~~
- **Descrição**: Edita o endereço da agência

---
**Users**

- **Endpoint**: `/update-password/`
- **Metodo HTTP**: PATCH
~~~~json
{
	"newPassword": "novaSenha"
}
~~~~
- **Descrição**: Edita a senha do usuário
---
**Professional**

- **Endpoint**: `/update-professional/`
- **Metodo HTTP**: PATCH
~~~~json
{
	"newPassword":"juliousss222"
}
~~~~
- **Descrição**: Edita a senha do professional

---
**SOS**

**Phone**
- **Endpoint**: `/update-phone/`
- **Metodo HTTP**: PATCH
~~~~json
{
	"phone":"00-20202020"
}
~~~~
- **Descrição**: Edita o telefone do SOS

---
**Animal**

**Injured**
- **Endpoint**: `/update-injured/`
- **Metodo HTTP**: PATCH
~~~~json
{
	"injured":"false"
}
~~~~
- **Descrição**: Edita o estado Injured do animal

---
### Deletando Dado

- **Endpoint**: `/delete(dado)/idDoDado` (ex: /delete-professional/c37c70a3-7a5f-43c9-9b5f-18fb8bf6f25)
- **Metodo HTTP**: DELETE
- **Descrição**: Deleta o dado do DB
