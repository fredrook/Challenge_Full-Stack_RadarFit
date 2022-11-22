
## Missão backend

Desenvolver uma **API JSON RESTful** em **Node** que utilize todos os métodos (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).  
Faça o teste unitário da **API** (Bônus :star:)

### Especificação

Monte uma base de produtos com a seguinte estrutura:

```
produto:   string
valor:     float
descricao: text
created:   datetime
updated:   datetime
```

Utilize **MongoDB** ou **Postgres** para armazenar os dados que a **API** irá consumir.

### API endpoints

`GET /produtos`

Retorna todos os produtos

---

`GET /produtos/find`

Retorna os produtos de acordo com o termo passado parâmetro `q`

---

`GET /produtos/{id}`

Retorna os detalhes do produto

---

`POST /produtos`

Adiciona um novo veículo

---

`PUT /produtos/{id}`

Atualiza os dados de um veículo

---

`PATCH /produtos/{id}`

Atualiza apenas alguns dados do produto

---

`DELETE /produtos/{id}`

Apaga o produto


## Missão frontend

Desenvolver uma **UI (User Interface)** de acordo com o desenho abaixo:


![Image embedded in markdown](https://i.ibb.co/v3zdYcw/Microsoft-Teams-image.png)
![Image embedded in markdown](https://i.ibb.co/Qf2zYjq/Microsoft-Teams-image-1.png)


## Missão Deploy

Hospede sua aplicação front-end no Heroku / Firebase Hosting / Vercel ou qualquer outra hospedagem de sua preferência.

Favor incluir o link do front-end na submissão via e-mail.

### Especificação

- Consumir **API** criada acima
- Criar uma tela que tenha...
    - Listagem de produtos
    - Detalhe do produto
    - Busca
    - Formulário de novo/edição de produtos

### Dica

Utilize algum framework para auxiliar no desenvolvimento da interface, por exemplo:

- https://getmdl.io/
- http://getbootstrap.com/css/
- http://foundation.zurb.com/

## Prazo

Você terá 72 horas para finalizar o coding challenge. Good luck!