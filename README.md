This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Objetivos del proyecto:

Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito. 
Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total. 
Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.
Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.



## Componentes principales de la Aplicacion:

Navbar
Cart
ItemList
ItemDetail
Checkout


## Credenciales Ocultas:

Las credenciales de acceso a firestore han sido guardadas en un archivo .env, los contenidos del mismo se han compartido por privado en la entrega a traves de la plataforma de coder house.

## Dependencias Utilizadas:

bootstrap": "^4.5.3",
firebase": "^7.2.3",
react": "^16.13.1",
react-dom": "^16.13.1",
react-router-dom": "^5.2.0"

## Funcionalidades Extra:

Actualizacion de stock automaticamente en firestore.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

