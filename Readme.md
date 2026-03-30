# 🚀 Reto de Automatización QA - Web (Playwright + Cucumber)
Este proyecto contiene las pruebas automatizadas para la plataforma SauceDemo, desarrolladas con Playwright y Cucumber (playwright-bdd). La arquitectura sigue el patrón de diseño Page Object Model (POM) y utiliza TypeScript para garantizar un código robusto y tipado.

## 🛠️ Tecnologías y Patrones
* **Lenguaje:** TypeScript.
* **Framework:** Playwright (Motor de ejecución).
* **BDD:** Cucumber / Gherkin (Lenguaje de negocio).
* **Patrón de Diseño:** Page Object Model (POM) con Herencia para reutilización de componentes de Login.
* **Reportes:** Playwright HTML Reporter con capturas de pantalla y videos en caso de falla.

## 📋 Requisitos Previos
Asegúrate de tener instalado:

* Node.js (v18 o superior).
* Visual Studio Code (Recomendado).
* Extensiones: Playwright Test y Cucumber (Gherkin) Full Support.

## Opcional 
En caso de presentar un error de scripts deshabilitados
PowerShell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

## ⚙️ Configuración del Proyecto
Clonar el repositorio:
Bash
git clone [https://github.com/WilliamFlores10/reto-web-test.git]

Instalar dependencias:
Bash
npm install

Instalar navegadores de Playwright:
Bash
npx playwright install chromium

## 🧪 Ejecución de Pruebas
Puedes ejecutar las pruebas utilizando los scripts configurados en el package.json:

Ejecutar todos los tests:

Bash
npm test

Ejecutar con Interfaz Visual (UI Mode):
Ideal para debugging y ver el paso a paso:

Bash
npm run test:ui

Generar solo archivos BDD:

Bash
npm run bdd

## 📊 Reportes de Ejecución
Al finalizar cada ejecución, se genera un reporte detallado que incluye trazas y evidencias. Para visualizarlo, ejecuta:

Bash
npm run report
Ruta local: playwright-report/index.html

## 📁 Estructura del Proyecto
features/: Archivos .feature escritos en lenguaje Gherkin.

pages/: Clases Page Objects (LoginPage, ComprarPage).

steps/: Definición de los pasos (Step Definitions) en TypeScript.

test-results/: Carpeta con evidencias (fotos/videos) de ejecuciones.

**Autor:** William Flores