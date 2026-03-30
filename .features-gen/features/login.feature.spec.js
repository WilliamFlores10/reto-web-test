// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login de Usuario', () => {

  test.describe('Login exitoso con credenciales válidas', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "standard_user" y la contraseña "secret_sauce"', null, { page }); 
      await Then('debería ser redirigido al "inventory.html" de "Products" de productos', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "problem_user" y la contraseña "secret_sauce"', null, { page }); 
      await Then('debería ser redirigido al "inventory.html" de "Products" de productos', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "performance_glitch_user" y la contraseña "secret_sauce"', null, { page }); 
      await Then('debería ser redirigido al "inventory.html" de "Products" de productos', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "error_user" y la contraseña "secret_sauce"', null, { page }); 
      await Then('debería ser redirigido al "inventory.html" de "Products" de productos', null, { page }); 
    });

    test('Example #5', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "visual_user" y la contraseña "secret_sauce"', null, { page }); 
      await Then('debería ser redirigido al "inventory.html" de "Products" de productos', null, { page }); 
    });

  });

  test.describe('Login no exitoso con credenciales inválidas', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "locked_out_user" y la contraseña "secret_sauce"', null, { page }); 
      await Then('debería ver un mensaje de error indicando "Sorry, this user has been locked out."', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "locked_out_user" y la contraseña "secret"', null, { page }); 
      await Then('debería ver un mensaje de error indicando "Username and password do not match any user in this service"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "locked_out_user" y la contraseña ""', null, { page }); 
      await Then('debería ver un mensaje de error indicando "Password is required"', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('que el usuario navega a la página de inicio', null, { page }); 
      await When('ingresa el usuario "" y la contraseña "secret"', null, { page }); 
      await Then('debería ver un mensaje de error indicando "Username is required"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"standard_user\" y la contraseña \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"standard_user\"","children":[{"start":20,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then debería ser redirigido al \"inventory.html\" de \"Products\" de productos","stepMatchArguments":[{"group":{"start":26,"value":"\"inventory.html\"","children":[{"start":27,"value":"inventory.html","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"Products\"","children":[{"start":47,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"problem_user\" y la contraseña \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"problem_user\"","children":[{"start":20,"value":"problem_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"secret_sauce\"","children":[{"start":51,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then debería ser redirigido al \"inventory.html\" de \"Products\" de productos","stepMatchArguments":[{"group":{"start":26,"value":"\"inventory.html\"","children":[{"start":27,"value":"inventory.html","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"Products\"","children":[{"start":47,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"performance_glitch_user\" y la contraseña \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"performance_glitch_user\"","children":[{"start":20,"value":"performance_glitch_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"secret_sauce\"","children":[{"start":62,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then debería ser redirigido al \"inventory.html\" de \"Products\" de productos","stepMatchArguments":[{"group":{"start":26,"value":"\"inventory.html\"","children":[{"start":27,"value":"inventory.html","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"Products\"","children":[{"start":47,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"error_user\" y la contraseña \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"error_user\"","children":[{"start":20,"value":"error_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"secret_sauce\"","children":[{"start":49,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then debería ser redirigido al \"inventory.html\" de \"Products\" de productos","stepMatchArguments":[{"group":{"start":26,"value":"\"inventory.html\"","children":[{"start":27,"value":"inventory.html","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"Products\"","children":[{"start":47,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"visual_user\" y la contraseña \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"visual_user\"","children":[{"start":20,"value":"visual_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"secret_sauce\"","children":[{"start":50,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then debería ser redirigido al \"inventory.html\" de \"Products\" de productos","stepMatchArguments":[{"group":{"start":26,"value":"\"inventory.html\"","children":[{"start":27,"value":"inventory.html","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"Products\"","children":[{"start":47,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"locked_out_user\" y la contraseña \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"locked_out_user\"","children":[{"start":20,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"secret_sauce\"","children":[{"start":54,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then debería ver un mensaje de error indicando \"Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Sorry, this user has been locked out.\"","children":[{"start":43,"value":"Sorry, this user has been locked out.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"locked_out_user\" y la contraseña \"secret\"","stepMatchArguments":[{"group":{"start":19,"value":"\"locked_out_user\"","children":[{"start":20,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"secret\"","children":[{"start":54,"value":"secret","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then debería ver un mensaje de error indicando \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Username and password do not match any user in this service\"","children":[{"start":43,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":55,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"locked_out_user\" y la contraseña \"\"","stepMatchArguments":[{"group":{"start":19,"value":"\"locked_out_user\"","children":[{"start":20,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"\"","children":[{"start":54,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":57,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then debería ver un mensaje de error indicando \"Password is required\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Password is required\"","children":[{"start":43,"value":"Password is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":61,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When ingresa el usuario \"\" y la contraseña \"secret\"","stepMatchArguments":[{"group":{"start":19,"value":"\"\"","children":[{"start":20,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"secret\"","children":[{"start":39,"value":"secret","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then debería ver un mensaje de error indicando \"Username is required\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Username is required\"","children":[{"start":43,"value":"Username is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end