# lett-store
Adicione todas as dependências com
* cd backend
	* yarn  
		![image](https://user-images.githubusercontent.com/53899920/77728338-10499480-6fdb-11ea-8668-cdf62ccf926e.png)	
* cd frontend
	* yarn  
		![image](https://user-images.githubusercontent.com/53899920/77728350-1770a280-6fdb-11ea-981b-2d56b519ddc6.png)

* Inicie o banco de dados no docker com o comando
	* docker run --name lett -e POSTGRES_USER=lett -e POSTGRES_PASSWORD=lett -p 5434:5432 -d postgres  
		![image](https://user-images.githubusercontent.com/53899920/77728670-bbf2e480-6fdb-11ea-9cbc-8f3d96e9b0d0.png)  
		
* Crie um arquivo .env no backend com as informações:
 ```env
 DB_HOST=localhost
DB_NAME=lett
DB_USER=lett
DB_PASS=lett
DB_PORT=5434

 ```
	
* No backend inicie o processo e inicialize a tabela no banco de dados com:
	* yarn dev  
		![image](https://user-images.githubusercontent.com/53899920/77728391-29524580-6fdb-11ea-9f08-d99a0cfdece9.png)  
	* yarn sequelize db:migrate  
		![image](https://user-images.githubusercontent.com/53899920/77729696-0ecd9b80-6fde-11ea-8b26-79736ebdfc33.png)


* No frontend inicie o processo com:
	* yarn start  
		![image](https://user-images.githubusercontent.com/53899920/77728413-37a06180-6fdb-11ea-8c94-82551dd04481.png)
		
### Caso use Insomnia, eu exportei o workspace para
https://lett-prova.s3.amazonaws.com/Insomnia_2020-03-27.json

## Enfim, a API:

Na api existem as seguintes rotas:

* http://localhost:3005/product/store
	* Exemplo de JSON no body válido:
```json
{
	"name": "Kit",
	"price": 89.99,
	"quantity": 3,
	"image": "https://colorlib.com/wp/wp-content/uploads/sites/2/free-download-t-shirt-mockup.jpg"
}
```

* http://localhost:3005/product/show
	* Exemplo de JSON no body válido:
* Para procurar por id:
```json
{
	"search": {
		"id": "1"	
	}
}
```

* Para procurar por nome:
```json
{
	"search": {
		"name": "Kit"	
	}
}
```

* Para procurar todos:
```json
{}
```

* http://localhost:3005/product/seed
	* Essa rota ativa uma função para popular o banco de dados com alguns exemplos

* http://localhost:3005/product/update
	* Exemplo de JSON válido:
```json
{
	"id": 1,
	"newProduct": {
		"name": "Blusa Branca",
		"image": "https://colorlib.com/wp/wp-content/uploads/sites/2/27_t-shirt-mockups.jpg",
		"price": 19.99
	}
}
```

* ou
```json
{
	"id": 1,
	"newProduct": {
		"price": 19.99
	}
}
```
