import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userInput: Locator;
  readonly passInput: Locator;
  readonly loginBtn: Locator;
  readonly errorMsg: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userInput = page.locator('[data-test="username"]');
    this.passInput = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.errorMsg = page.locator('[data-test="error"]');
    this.title = page.locator('[data-test="title"]');
  }
  //Funcion para navegar a la pagina de inicio
  async navigate() {
    await this.page.goto('/');
  }
  //Funcion para realizar el login con las credenciales proporcionadas
  async login(user: string, pass: string) {
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.loginBtn.click();
  }
  //Funcion para validar el mensaje de error al ingresar credenciales incorrectas
  async validarError(mensajeEsperado: string) {
    await expect(this.errorMsg).toBeVisible();
    await expect(this.errorMsg).toContainText("Epic sadface: " + mensajeEsperado);
  }
  //Funcion para validar que se redirige a la pagina de productos despues de un login exitoso
  async validarVentanaProductos(urlEsperada: string, tituloEsperado: string) {
    await expect(this.page).toHaveURL(urlEsperada);
    await expect(this.title).toHaveText(tituloEsperado);
  } 

}