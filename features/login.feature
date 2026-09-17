Feature: Login de Usuario

	Scenario Outline: Login exitoso con credenciales válidas
		Given que el usuario navega a la página de inicio
		When ingresa el usuario "<usuario>" y la contraseña "<contraseña>"
		Then debería ser redirigido al "inventory.html" de "Products" de productos
		Examples:
			| usuario                 | contraseña   |
			| standard_user           | secret_sauce | // usuario estándar
			| problem_user            | secret_sauce | // usuario con problemas
			| performance_glitch_user | secret_sauce | // usuario con problemas de rendimiento
			| error_user              | secret_sauce | // usuario con errores 
			| visual_user             | secret_sauce | // usuario con problemas visuales

	Scenario Outline: Login no exitoso con credenciales inválidas
		Given que el usuario navega a la página de inicio
		When ingresa el usuario "<usuario>" y la contraseña "<contraseña>"
		Then debería ver un mensaje de error indicando "<mensaje>"
		Examples:
			| usuario         | contraseña           | mensaje                                                     |
			| locked_out_user | secret_sauce         | Sorry, this user has been locked out.                       | // usuario bloqueado
			| locked_out_user | secret               | Username and password do not match any user in this service | // usuario bloqueado con contraseña incorrecta
			| locked_out_user | Password is required |                                                             | // usuario bloqueado con contraseña vacía
			| secret          | Username is required |                                                             | // usuario con nombre de usuario incorrecto y contraseña vacía