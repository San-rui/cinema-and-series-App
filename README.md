# Cinema & Series App

React Js version: 17.0.2
Node version: 15.14
API: https://www.themoviedb.org/
Material UI
Firebase

En este proyecto he realizado una aplicación con dos tipos de perfiles:

•	Admin
    o Inciar sesión con "role admin".
    o Acceso a todas las paginas del sitio.
    o Seleccionar items (peliculas o series) de la api para agregar a la plataforma (DB) de reproducción.
    o Eliminar items (peliculas o series) de la plataforma (DB).
    o Eliminar usuarios.

•	User
    o Iniciar sesión con "role user".
    o Acceso solo a películas, series y detalle.
    o Los items (películas y series) pueden ser marcadas como vistos.

# Deploy: https://san-rui.github.io/cinema-and-series-App/

# Screens

• Signup
  Esta pantalla contiene un formulario que permite crear usuarios en la base de datos.
  Los usuarios se crean con el role “user” por defecto.

• Login
  Formulario de inicio de sesión que solicita usuario y contraseña.

• Admin
  Esta pantalla lista las películas mejor ranqueadas.
  Tiene un buscador que en caso de contener texto realizará una busqueda multiple (peliculas, series, personas, etc).
  Para ambos casos previos, dispondremos de una paginación que se ajuste a los resultados.
  Cada item tiene un botón que permite dar de alta la totalidad de sus datos en la base de datos de la aplicación.
  Los items que ya existen en la base de datos, contienen un botón que permita eliminarlos.
  
• Home
  Esta pantalla lista todos los items dados de alta en la base de datos.
  Al hacer click sobre un item, se abre la pagina “Detail”.
  Los items contienen un botón que permita marcarlos como vistos para el usuario en sesión.
  
• Películas
  Esta pantalla lista solo las películas dadas de alta en la base de datos.
  Al hacer click sobre un item, se abre la pagina “Detail”.
  Las películas contienen un botón que permita marcarlos como vistos para el usuario en sesión.
  
• Series
  Esta pantalla lista solo las series dadas de alta en la base de datos.
  Al hacer click sobre un item, se abre la pagina “Detail”.
  Las series contienen un botón que permita marcarlos como vistos para el usuario en sesión.

• Detail
  En esta pantalla se puede ver la información detallada de la película, poster y trailers y un listado con el resto de los items (películas y series)  disponibles.
