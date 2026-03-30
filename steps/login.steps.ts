import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const { Given, When, Then } = createBdd();

// Aquí defines tus pasos de Cucumber utilizando Given, When y Then
Given("que el usuario navega a la página de inicio", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
});
// Aqui definimos el login enviando el usuario y contraseña
When("ingresa el usuario {string} y la contraseña {string}", async ({ page }, user, pass) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(user, pass);
  },
);
// Validaciones a la pagina de inventario de productos
Then("debería ser redirigido al {string} de {string} de productos", async ({ page }, url, titulo) => {
  const loginPage = new LoginPage(page);
  await loginPage.validarVentanaProductos(url, titulo);
});
// Validaciones de mensaje de error al ingresar credenciales invalidas
Then("debería ver un mensaje de error indicando {string}", async ({ page }, mensajeEsperado) => {
    const loginPage = new LoginPage(page);
    await loginPage.validarError(mensajeEsperado);
});
