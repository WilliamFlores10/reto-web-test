Feature: Login de Usuario

  Scenario Outline: Login exitoso con credenciales válidas
    Given que el usuario navega a la página de inicio
    When ingresa el usuario "<usuario>" y la contraseña "<contraseña>"
    Then debería ser redirigido al "inventory.html" de "Products" de productos
    Examples:
      | usuario         | contraseña     |
      | standard_user   | secret_sauce   |
      | problem_user    | secret_sauce   |
      | performance_glitch_user   | secret_sauce   |
      | error_user      | secret_sauce   |
      | visual_user     | secret_sauce   |

  Scenario Outline: Login no exitoso con credenciales inválidas
    Given que el usuario navega a la página de inicio
    When ingresa el usuario "<usuario>" y la contraseña "<contraseña>"
    Then debería ver un mensaje de error indicando "<mensaje>"
    Examples:
      | usuario         | contraseña     | mensaje  |                                                              
      | locked_out_user | secret_sauce   | Sorry, this user has been locked out. |
      | locked_out_user | secret         | Username and password do not match any user in this service |
      | locked_out_user |                | Password is required |
      |                 | secret         | Username is required |