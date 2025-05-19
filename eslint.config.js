// Importa las reglas recomendadas de JavaScript de ESLint
import js from '@eslint/js'

// Importa definiciones de variables globales (por ejemplo: window, document)
import globals from 'globals'

// Importa el plugin para validar el uso correcto de hooks en React
import reactHooks from 'eslint-plugin-react-hooks'

// Importa el plugin que ayuda a mantener compatibilidad con React Fast Refresh (Vite)
import reactRefresh from 'eslint-plugin-react-refresh'

// Exporta la configuración de ESLint como un array de objetos
export default [
  // Ignora la carpeta 'dist', que contiene los archivos de build
  { ignores: ['dist'] },

  // Configuración principal para todos los archivos .js y .jsx
  {
    files: ['**/*.{js,jsx}'], // Aplica estas reglas a todos los archivos JavaScript y JSX

    languageOptions: {
      ecmaVersion: 2020, // Soporta sintaxis de ECMAScript 2020
      globals: globals.browser, // Usa las variables globales propias del entorno navegador (como window, fetch, etc.)

      parserOptions: {
        ecmaVersion: 'latest', // Permite usar la sintaxis más reciente disponible de JavaScript
        ecmaFeatures: { jsx: true }, // Habilita el soporte para JSX (necesario para React)
        sourceType: 'module', // Permite el uso de módulos ES6 (import/export)
      },
    },

    plugins: {
      'react-hooks': reactHooks, // Plugin que valida el uso correcto de hooks de React
      'react-refresh': reactRefresh, // Plugin que asegura el correcto uso del sistema Fast Refresh de Vite
    },

    rules: {
      // Aplica las reglas recomendadas por ESLint
      ...js.configs.recommended.rules,

      // Aplica las reglas recomendadas para el uso de React Hooks
      ...reactHooks.configs.recommended.rules,

      // Marca como error las variables no utilizadas, pero ignora las que comienzan con mayúscula o guion bajo (útil para componentes o constantes)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Avisa (warn) si se exporta algo que no sea un componente, para mantener Fast Refresh funcionando correctamente
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Permite exportar constantes sin generar advertencia
      ],
    },
  },
]
