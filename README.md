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
	
* No backend inicie o processo com:
	* yarn dev  
		![image](https://user-images.githubusercontent.com/53899920/77728391-29524580-6fdb-11ea-9f08-d99a0cfdece9.png)

* No frontend inicie o processo com:
	* yarn start  
		![image](https://user-images.githubusercontent.com/53899920/77728413-37a06180-6fdb-11ea-8c94-82551dd04481.png)





O .env não foi adicionado no gitignore para não ter trabalho
de configurá-lo novamente

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
