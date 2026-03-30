Feature: Comprar un producto

    Background:
    Given que el usuario navega a la página de inicio
    And ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Scenario Outline: El usuario puede agregar un producto al carrito desde la página de productos
    Given que el usuario agrega el producto "<producto>" al carrito
    When el contador del carrito debe mostrar "<unidad>" unidad
    Examples:
      | producto                      | unidad |
      | Sauce Labs Backpack           | 1      |

    Scenario Outline: El usuario puede ver los productos agregados en el carrito de compras.
    Given que el usuario agrega el producto "<producto>" al carrito
    When debería ser redirigido al "<url>" de "<titulo>" del carrito
    Then el producto "<producto>" debe estar visible en el carrito
    Examples:
      | producto                      | url          | titulo     |
      | Sauce Labs Backpack           | cart.html    | Your Cart  |
      | Sauce Labs Bike Light          | cart.html    | Your Cart  |
      | Sauce Labs Bolt T-Shirt          | cart.html    | Your Cart  |
      | Sauce Labs Fleece Jacket          | cart.html    | Your Cart  |
      | Sauce Labs Onesie          | cart.html    | Your Cart  |
      | Test.allTheThings() T-Shirt (Red)          | cart.html    | Your Cart  |

    Scenario Outline: El usuario puede completar el proceso de compra hasta la confirmación.
    Given que el usuario agrega el producto "<producto>" al carrito
    When debería ser redirigido al "<url>" de "<titulo>" del carrito
    When se encuentra en la pantalla de checkout de informacion del cliente
    And completa el formulario el nombre "<nombre>" , apellido "<apellido>" y codigo postal "<zipcode>"
    Then deber ver un mensaje de confirmación "<mensajeFinal>" 
    Examples:
      | producto                      | url          | titulo     | nombre  | apellido  | zipcode | mensajeFinal |
      | Sauce Labs Backpack           | cart.html    | Your Cart  | Juan    | Perez     | 12345   | Thank you for your order! |

