import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { ComprarPage } from '../pages/ComprarPage';

const { Given, When, Then } = createBdd();
//Paso para agregar un producto al carrito
Given('que el usuario agrega el producto {string} al carrito', async ({ page }, productName) => {
    const Page = new ComprarPage(page);
    await Page.agregarProductos(productName);
});
//Contador de productos en el carrito
When('el contador del carrito debe mostrar {string} unidad', async ({ page }, expectedCount) => {
    const Page = new ComprarPage(page);
    await  Page.validarContadorCarrito(expectedCount);
});
//Validar que se redirige a la ventana del carrito
When('debería ser redirigido al {string} de {string} del carrito', async ({ page }, url, titulo) => {
    const Page = new ComprarPage(page);
    await Page.validarVentanaCarrito(url,titulo);
});
//Validar que el producto agregado esté visible en el carrito
Then('el producto {string} debe estar visible en el carrito', async ({ page }, productName) => {
    const Page = new ComprarPage(page);
    await Page.validarProductos(productName);
});
//Paso para ir a la pantalla de checkout
When('se encuentra en la pantalla de checkout de informacion del cliente', async ({ page }) => {
    const Page = new ComprarPage(page);
    await Page.irCheckout();
});
//Paso para completar el formulario de informacion del cliente
Then('completa el formulario el nombre {string} , apellido {string} y codigo postal {string}', async ({ page }, firstname, lastname, zipcode) => {
    const comprarPage = new ComprarPage(page);
    await comprarPage.informationInput(firstname, lastname, zipcode);
});
//Paso para finalizar la compra y validar el mensaje de confirmación
Then('deber ver un mensaje de confirmación {string}', async ({ page }, compraFinalizada) => {
    const Page = new ComprarPage(page);
    await Page.finalizarCompra(compraFinalizada);
});