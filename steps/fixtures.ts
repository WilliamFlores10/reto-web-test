import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';

// Definimos qué objetos estarán disponibles en todos los pasos de Cucumber
type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});