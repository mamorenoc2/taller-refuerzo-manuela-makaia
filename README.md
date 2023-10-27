# ReactJS: Introducción y Características Principales

ReactJS es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario (UI) interactivas y dinámicas. Como dato curioso, React es desarrollada y mantenida por Facebook. Ya siendo una biblioteca de Javascript es de suma importancia tener las bases claras de este lenguaje para poder entender la sintaxis de este lenguaje

## 1. Componentes

Esta librería se basa en el concepto de componentes reutilizables. Un componente es una unidad independiente que encapsula la lógica y la interfaz de usuario relacionadas, en palabras más prácticas son piezas individuales que unidas forman el rompecabezas completo. Los componentes pueden clasificarse en dos categorías principales: componentes funcionales y componentes de clase. A continuación, se describen estos tipos de componentes:

### Componentes Funcionales

Los componentes funcionales, como su nombre lo indica, son funciones de JavaScript. Estos son simples y se basan en la función. Aquí hay algunas características clave:

- **Simplicidad**: Los componentes funcionales son más simples de escribir y entender, y suelen usarse para componentes más pequeños y reutilizables.

- **Ausencia de estado (Stateless)**: Los componentes funcionales no tienen estado interno, es decir, que los hace ideales para representar partes de la interfaz de usuario que no requieren gestionar estados complejos.

- **Mejor rendimiento**: Debido a la falta de estado interno, los componentes funcionales suelen ser más eficientes en términos de rendimiento.

### Componentes de Clase

Los componentes de clase son clases de JavaScript que extienden la clase `React.Component` y tienen sus propias ventajas:

- **Estado y Ciclo de Vida**: Los componentes de clase pueden manejar estados internos y aprovechar los métodos del ciclo de vida de React, lo que los hace adecuados para componentes complejos que necesitan administrar datos cambiantes y realizar acciones específicas en momentos determinados.

- **Métodos de Ciclo de Vida**: Los componentes de clase ofrecen métodos de ciclo de vida como `componentDidMount`, `componentDidUpdate`, y `componentWillUnmount`, que son útiles para ejecutar código en momentos específicos durante el ciclo de vida del componente.

- **Contexto (Context)**: Los componentes de clase pueden utilizar el contexto de React para compartir datos entre componentes sin necesidad de pasar datos de forma manual o por props.

La elección entre componentes funcionales y de clase depende de la complejidad y los requisitos de tu aplicación. React 16.8 introdujo los Hooks, que de esto se hablará más adelante, esto lo que permite es que los componentes funcionales puedan administrar el estado y el ciclo de vida de manera similar a los componentes de clase, lo que ha hecho que los componentes funcionales sean aún más versátiles.

## 2. Virtual DOM

El DOM (Document Object Model) es una representación jerárquica de una página web o aplicación en un formato de árbol. Cada elemento HTML, como etiquetas `<div>`, `<p>`, y `<span>`, se representa como un nodo en este árbol. Con esto claro, el Virtual DOM es una representación en memoria de este árbol DOM real. React utiliza el Virtual DOM para rastrear los cambios en la interfaz de usuario y optimizar las actualizaciones.

Cuando se realiza una actualización en una aplicación React, React no modifica directamente el DOM real. En su lugar, realiza los siguientes pasos:

1. **Renderizado**: Cuando un componente de React se actualiza, React genera una nueva representación del Virtual DOM que refleja los cambios necesarios en la interfaz de usuario.

2. **Comparación**: React compara el nuevo Virtual DOM con el Virtual DOM anterior (el estado anterior) para determinar las diferencias, es decir, qué nodos han cambiado.

3. **Reconciliación**: React calcula la diferencia entre el Virtual DOM nuevo y antiguo, y luego actualiza solo los nodos que han cambiado en el DOM real. Esto se hace de manera eficiente, evitando actualizaciones innecesarias.

### Ventajas del Virtual DOM

El Virtual DOM ofrece varias ventajas clave:

- **Mejora del Rendimiento**: Al evitar actualizaciones innecesarias del DOM real, el Virtual DOM mejora el rendimiento de la aplicación. Solo se actualizan las partes que han cambiado, lo que ahorra tiempo y recursos.

- **Abstracción de Plataforma**: React puede utilizarse tanto en aplicaciones web como en aplicaciones móviles (a través de React Native). El Virtual DOM proporciona una capa de abstracción que permite que React funcione de manera coherente en diferentes plataformas.

- **Facilita el Desarrollo**: Los desarrolladores no tienen que preocuparse por manipular el DOM directamente ni realizar seguimiento de cambios. React se encarga de estas tareas de manera eficiente.

- **Control de Estado**: El Virtual DOM facilita la gestión del estado de la aplicación y el flujo unidireccional de datos, lo que hace que el desarrollo sea más predecible y menos propenso a errores.

## 3. JSX en React

JSX (JavaScript XML) es una extensión de JavaScript utilizada en React para definir la estructura de la interfaz de usuario de manera declarativa. JSX combina JavaScript con marcado similar a HTML, lo que facilita la creación de componentes y la representación de la interfaz de usuario de una manera más legible y familiar.

### Características Clave de JSX

1. **Sintaxis Similar a HTML**: Con JSX, puedes escribir elementos HTML y componentes de React de manera muy similar a como lo harías en HTML. Por ejemplo:

   ```jsx
   const element = <h1>Hola, Mundo</h1>;
   const nombre = "Juan";
   const element = <h1>Hola, {nombre}</h1>;


## 4. Hooks en ReactJS

Los Hooks son una característica introducida en React 16.8 que permite a los desarrolladores de React utilizar el estado y otras características de React en componentes funcionales. Antes de los Hooks, estas características estaban limitadas a los componentes de clase. Los Hooks tienen varios propósitos en el desarrollo de aplicaciones React:

- **Manejo del Estado (State Handling)**: Los Hooks, en particular el Hook `useState`, permiten a los componentes funcionales gestionar su estado interno. Esto elimina la necesidad de convertir un componente funcional en un componente de clase solo para manejar el estado.

- **Efectos Secundarios (Side Effects)**: El Hook `useEffect` se utiliza para manejar efectos secundarios en componentes funcionales, como hacer solicitudes a una API, suscribirse a eventos o manipular el DOM. Esto proporciona una alternativa a los métodos del ciclo de vida en los componentes de clase.

- **Contexto (Context)**: Los Hooks, como `useContext`, permiten a los componentes acceder al contexto de la aplicación. Esto es útil para pasar datos a través de la jerarquía de componentes sin necesidad de pasar props manualmente.

- **Referencias a Datos y DOM (Refs)**: El Hook `useRef` se utiliza para acceder al DOM directamente o para mantener referencias a datos que no provocarán una nueva renderización.

## 5. React Router DOM Versión 6

Todas las páginas web tienen rutas que dirigen a distintas partes de la aplicación, y para react existe el Router DOM versión 6, esta es una biblioteca se utiliza para gestionar la navegación y construir aplicaciones de una sola página (SPA) que permiten la navegación entre diferentes vistas o páginas sin recargar la página completa. Permite definir rutas para que las URL coincidan con componentes específicos, lo que facilita la creación de interfaces de usuario dinámicas y navegables.

### Principales Componentes

- **`<BrowserRouter>`**: Este componente se utiliza como envoltura principal alrededor de la aplicación y proporciona la funcionalidad de enrutamiento. Debe envolver todos los demás componentes relacionados con React Router DOM.

- **`<Route>`**: El componente `<Route>` se utiliza para definir una ruta y el componente que se debe renderizar cuando esa ruta coincide con la URL actual. Puede tomar propiedades como `path` (ruta), `element` (componente a representar), y `children` (componentes anidados).

- **`<Link>`**: El componente `<Link>` se utiliza para crear enlaces de navegación en la aplicación. En lugar de recargar la página, permite cambiar la URL y renderizar el componente correspondiente.

- **`<Routes>`**: El componente `<Routes>` se utiliza para definir múltiples rutas anidadas. Puedes organizar las rutas en una jerarquía de componentes utilizando `<Routes>`.

### Principales Hooks

- **`useNavigate`**: Este Hook permite obtener una función de navegación que puede utilizarse para cambiar la URL programáticamente. Se utiliza para navegar a rutas específicas en respuesta a eventos o lógica de la aplicación.

- **`useParams`**: El Hook `useParams` se utiliza para acceder a los parámetros de la URL definidos en las rutas. Facilita la recuperación de valores específicos de la URL.

- **`useLocation`**: El Hook `useLocation` proporciona información sobre la ubicación actual (URL) de la aplicación. Puede utilizarse para realizar acciones basadas en la URL actual, como seguimiento de la navegación.

- **`useMatch`**: El Hook `useMatch` se utiliza para determinar si una ruta coincide con la URL actual. Puede ser útil para activar ciertas lógicas o estilos basados en la coincidencia de rutas.

### Manejo de Navegaciones en React Router DOM

Esto es algo parecido a lo que se menciona anteriormente, solo que aquí está de forma más detallada lo que es que es el procedimiento para confrigurar las rutas:

1. **Configuración de Rutas**: Utiliza `<Route>` para definir rutas y especificar los componentes a renderizar en función de la URL.

2. **Creación de Enlaces**: Utiliza `<Link>` para crear enlaces de navegación entre rutas, cambiando la URL de forma programática.

3. **Navegación Programática**: Emplea `useNavigate` para cambiar la URL de manera programática en respuesta a eventos o lógica de la aplicación.

4. **Obtención de Parámetros de Ruta**: Utiliza `useParams` para acceder a los parámetros de la URL definidos en las rutas.

5. **Acceso a la Ubicación Actual**: Utiliza `useLocation` para obtener información sobre la URL actual, útil para rastrear la navegación.

6. **Coincidencia de Rutas**: Utiliza `useMatch` para determinar si una ruta coincide con la URL actual.

Estos conceptos y métodos son esenciales para construir una experiencia de navegación dinámica en aplicaciones React.

## Creación del proyecto React con Vite
¿

1. **Instalación de Node.js y npm**: Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde el [sitio oficial de Node.js](https://nodejs.org/).

2. **Instalación de Vite (si es necesario)**: Si aún no tienes Vite instalado de forma global, puedes hacerlo con el siguiente comando:
   ```bash
   npm install -g create-vite

3. **Creación de un Nuevo Proyecto React**: Para crear un nuevo proyecto React con Vite, utiliza el comando correspondiente.
    ```bash
     create-vite my-react-app --template react

4. **Acceso al Directorio del Proyecto**: Accede al directorio del proyecto React recién creado.
   ```bash
    cd my-react-app

6. **Inicio del Servidor de Desarrollo**: Para iniciar el servidor de desarrollo y ver tu aplicación, ejecuta el comando correspondiente.
   ```bash
     npm run dev

