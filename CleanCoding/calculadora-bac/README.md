# 🧪 Calculadora de Alcohol en Sangre (BAC)

Aplicación web sencilla en JavaScript para calcular el nivel estimado de alcohol en sangre (BAC) usando la fórmula de Widmark. El proyecto ejemplifica principios de **Clean Coding**.

---

## 📚 Tabla de Contenidos

- [🚀 ¿Cómo funciona?](#cómo-funciona)
- [📦 Estructura del Proyecto](#estructura-del-proyecto)
- [🧼 Principios de Clean Coding Aplicados](#principios-de-clean-coding-aplicados)
- [🛠️ Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
- [🧪 Pruebas unitarias](#pruebas-unitarias)
- [📘 Recursos usados](#recursos-usados)
- [🧠 Lecciones aprendidas](#lecciones-aprendidas)
- [📄 Licencia](#licencia)

---

## 🚀 ¿Cómo funciona?

El usuario ingresa:
- **Peso** (kg)
- **Número de bebidas alcohólicas** consumidas
- **Horas** desde el último consumo
- **Género** (masculino o femenino)

El sistema devuelve el nivel estimado de alcohol en sangre (BAC), redondeado a dos decimales.

---

## 📦 Estructura del Proyecto

```text
calculadora-bac/
│
├── index.html              # Interfaz de usuario
├── main.js                 # Controlador principal del DOM
├── bacCalculator.js        # Lógica del cálculo de BAC
├── constants.js            # Constantes reutilizables
├── utils.js                # Funciones auxiliares (ej. redondeo)
├── tests/                  # Pruebas unitarias con Vitest
│   ├── bacCalculator.test.js
│   └── utils.test.js
├── vitest.config.js        # Configuración de Vitest
├── README.md               # Documentación del proyecto
└── package.json            # Configuración npm
```

---

## 🧼 Principios de Clean Coding Aplicados

| Principio                                 | Aplicación específica                                 | Archivo(s)                        |
|-------------------------------------------|-------------------------------------------------------|-----------------------------------|
| Nombres claros y significativos           | Variables y funciones descriptivas                    | `main.js`, `bacCalculator.js`, `constants.js` |
| Funciones que hacen una sola cosa         | Cada función tiene una responsabilidad única           | `utils.js`, `bacCalculator.js`    |
| Evitar números mágicos                    | Uso de constantes descriptivas                        | `constants.js`                    |
| Uso de parámetros por defecto             | Género por defecto si no se provee                    | `bacCalculator.js`                |
| Preferencia por la inmutabilidad          | Uso de `const`                                        | `bacCalculator.js`, `main.js`     |
| Separación de responsabilidades           | Lógica, interfaz y configuración separadas            | Todos                             |
| Comentarios solo cuando son necesarios    | Explicaciones puntuales sobre lógica compleja          | `bacCalculator.js`                |
| Código modular y reutilizable             | Componentes desacoplados                              | `utils.js`, `constants.js`, `main.js` |
| Uso adecuado del control de flujo         | Validación básica y presentación de resultados         | `main.js`                         |
| Declaraciones limpias y consistentes      | Uso coherente de `let`, `const`, arrow functions       | Todo el proyecto                  |

---

## 🛠️ Cómo ejecutar el proyecto

> **Nota:** Para que los módulos JavaScript (`import/export`) funcionen, necesitas un servidor local.

### Opción 1: Live Server (Visual Studio Code)

1. Abre la carpeta `calculadora-bac` en VS Code.
2. Instala la extensión **Live Server**.
3. Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.
4. El navegador abrirá el archivo con soporte para módulos.

### Opción 2: Node.js (`serve`)

1. Instala `serve` globalmente (una sola vez):

   ```sh
   npm install -g serve
   ```

2. En la raíz del proyecto, ejecuta:

   ```sh
   serve .
   ```

3. Abre el navegador en la dirección indicada (ej. http://localhost:3000).

> ⚠️ **Importante:**  
> No abras `index.html` directamente (doble clic), ya que los módulos ES6 requieren servidor local.

---

## 🧪 Pruebas unitarias

Este proyecto incluye pruebas unitarias desarrolladas con **[Vitest](https://vitest.dev/)** para garantizar la calidad y mantenibilidad del código, en concordancia con los principios de *Clean Code*.

### 📂 Archivos de prueba

- `tests/bacCalculator.test.js`: Pruebas para la función `calculateBAC`.
- `tests/utils.test.js`: Pruebas para la función `roundToTwoDecimals`.

### 🛠️ Configuración

Vitest está instalado como dependencia de desarrollo (`devDependencies`).  
Se utiliza un archivo de configuración `vitest.config.js` para asegurar que se detecten correctamente los archivos dentro de la carpeta `tests/`.

### ▶️ Cómo ejecutar las pruebas

1. Asegúrate de estar en la raíz del proyecto (`calculadora-bac`).
2. Ejecuta el siguiente comando:

   ```sh
   npm run test
   ```

3. Verás una salida como esta si todo funciona correctamente:

   ```
   ✓ utils.test.js › roundToTwoDecimals › debería redondear a dos decimales
   ✓ bacCalculator.test.js › debería calcular un BAC válido
   Test Files  2 passed (2)
   Tests       4 passed (4)
   ```

---

## 📘 Recursos usados

- [Clean Code JavaScript - Español](https://github.com/andersontr15/clean-code-javascript-es)
- Fórmula de Widmark para el cálculo de BAC
- ECMAScript 6+ (JavaScript moderno con módulos)

---

## 🧠 Lecciones aprendidas

Este ejercicio permitió poner en práctica conceptos esenciales de Clean Coding. Se demostró cómo una estructura modular, claridad en el código y separación de responsabilidades mejoran la mantenibilidad, legibilidad y escalabilidad, incluso en proyectos pequeños.

---

## 📄 Licencia

Este proyecto es de libre uso con fines educativos.
