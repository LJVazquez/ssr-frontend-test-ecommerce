## 🌟 Acerca del proyecto

Esta App es parte de una prueba técnica nivel semi senior de frontend
especializado en React y Next.js. La misma consiste en realizar un
E-Commerce que consuma la API de productos de [Dummy Json](https://dummyjson.com/docs/products).

### 📋 Puntos principales del desafio tecnico

Se debe crear una aplicación web de e-commerce que permita a los usuarios buscar productos, añadirlos al carrito y realizar la compra.

La aplicación debe tener las siguientes características:

- Una página principal con una barra de búsqueda que redireccionará a una página de listado con los productos encontrados.
- Una página de detalle de cada producto, que muestre su imagen, nombre, descripción, precio y botón de añadir al carrito.
- Una página que muestre los productos según su categoría.
- Una página de checkout que muestre los productos seleccionados con sus precios y el total, y un formulario de pago con los datos necesarios.
- Una página de confirmación que muestre el número de pedido.

### 📋 Especificaciones técnicas del desafio

![Next][next.js]

[next.js]: https://img.shields.io/badge/Next-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

- Utilizar última version de [Next.js](https://nextjs.org/)
- Utilizar en lo posible componentes Server Side.
- Finalizar el proceso de compra mediante una Server Action.
- Consumir la API de productos de DummyJson (https://dummyjson.com/docs/products).
- Evitar usar librerías externas a Next.Js
- Full responsive.

**Plus**:

- Utilizar animaciones de carga
- Uso de layouts
- Diseño acorde a la temática.

## 🧰 Ejecutar localmente

### ‼️ Prerequisitos

Es necesario tener instalado:

- [Npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/)

Abrir la terminal en la misma carpeta donde se encuentra el descargado el proyecto y ejecutar los siguientes comandos:

```bash
npm i
npm run dev
```

## 💻 Uso

La app consta de un Home que contiene un buscador de productos en su Hero.

![Screenshot 1](/screenshots/Screenshot_1.jpg)

Al buscar se redirige a un listado de artículos encontrados.

![Screenshot 2](/screenshots/Screenshot_2.jpg)

Al seleccionar un producto, se redirige a la vista de detalles.

![Screenshot 3](/screenshots/Screenshot_3.jpg)

El checkout permite ver los productos en el carro y completar la compra.

![Screenshot 4](/screenshots/Screenshot_4.jpg)

La mayoría de los componentes que realizan fetching de datos están envueltos Suspense para mostrar un placeholder.

![Screenshot 5](/screenshots/Screenshot_5.jpg)

## 🎓 Sobre mi

Soy desarollador full stack semi senior con 3+ años de experiencia.
Mis tecnologías favoritas son React y Next.js 😃

- [Linkedin](https://www.linkedin.com/in/lvazquez-dev/)
- [Email](mailto:ljvazquez00@gmail.com)
