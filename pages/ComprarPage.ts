import { Page, Locator, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class ComprarPage extends LoginPage {
  readonly page: Page;
  readonly checkoutBtn: Locator;
  readonly firstnameInput: Locator;
  readonly lastnameInput: Locator;
  readonly zipcodeInput: Locator;
  readonly continueBtn: Locator;
  readonly productLocator: Locator;
  readonly carritoCounter: Locator;
  readonly carritoBtn: Locator;
  readonly productoCarrito: Locator;
  readonly finishBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstnameInput = page.locator('[data-test="firstName"]');
    this.lastnameInput = page.locator('[data-test="lastName"]');
    this.zipcodeInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.productLocator = page.locator('.inventory_item:has-text');
    this.carritoCounter = page.locator('.shopping_cart_badge');
    this.carritoBtn = page.locator('[data-test="shopping-cart-link"]');
    this.productoCarrito = page.locator('[data-test="inventory-item-name"]');
    this.finishBtn = page.locator('[data-test="finish"]');
  }
  // Funcion para agregar productos al carrito
  async agregarProductos(productName: string) {
    const productLocator = this.page.locator('.inventory_item', { hasText: productName });
    await productLocator.locator('button').click();
  }
  // Validar que el contador del carrito se actualice correctamente
  async validarContadorCarrito(expectedCount: string) {
    await expect(this.carritoCounter).toHaveText(expectedCount);
  }
  // Validar que al hacer clic en el carrito se redirija a la página del carrito
  async validarVentanaCarrito(urlEsperada: string, tituloEsperado: string) {
    await this.carritoBtn.click();
    await expect(this.page).toHaveURL(urlEsperada);
    await expect(this.title).toHaveText(tituloEsperado);
  } 
  // Validar que el producto agregado al carrito se muestre correctamente en la página del carrito
  async validarProductos(productName: string) {
    await expect(this.productoCarrito).toHaveText(productName);
  }
  // Función para proceder al checkout
  async irCheckout() {
    await this.checkoutBtn.click();
    await expect(this.page).toHaveURL("checkout-step-one.html");
    await expect(this.title).toHaveText("Checkout: Your Information");
  }
  // Función para ingresar la información de checkout y continuar
  async informationInput(firstname: string, lastname: string, zipcode: string) {
    await this.firstnameInput.fill(firstname);
    await this.lastnameInput.fill(lastname);
    await this.zipcodeInput.fill(zipcode);
    await this.continueBtn.click();
  }
  // Validar que al continuar se redirija a la página de resumen del checkout
  async finalizarCompra(compraFinalizada: string) {
    await this.finishBtn.click();
    await expect(this.page).toHaveURL("checkout-complete.html");
    await expect(this.title).toHaveText("Checkout: Complete!");
    const confirmationMsg = this.page.locator('.complete-header');
    await expect(confirmationMsg).toHaveText(compraFinalizada);
  }

}