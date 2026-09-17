import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { ComprarPage } from '../pages/ComprarPage';

// Definimos qué objetos estarán disponibles en todos los pasos de Cucumber
type MyFixtures = {
  loginPage: LoginPage;
  comprarPage: ComprarPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  comprarPage: async ({ page }, use) => {
    await use(new ComprarPage(page));
  },
});

