# 🎁 Amigo Secreto - Juego Interactivo

Un juego web interactivo para realizar sorteos de "amigo secreto" de manera divertida y fácil. Desarrollado como parte del desafío de formación de Alura para fortalecer habilidades en lógica de programación.

## ✨ Características

- **Interfaz intuitiva**: Diseño moderno y responsive para una experiencia de usuario óptima
- **Gestión de amigos**: Agregar y visualizar la lista de participantes
- **Sorteo aleatorio**: Selección completamente aleatoria usando algoritmos matemáticos
- **Validaciones robustas**: Prevención de entradas vacías y errores de usuario
- **Animaciones suaves**: Efectos visuales atractivos para mejorar la experiencia
- **Diseño responsive**: Funciona perfectamente en dispositivos móviles y de escritorio

## 🚀 Funcionalidades Principales

### 1. **Agregar Amigos**
- Campo de texto para ingresar nombres
- Validación automática de entradas vacías
- Mensajes de error informativos
- Limpieza automática del campo después de agregar

### 2. **Lista de Participantes**
- Visualización en tiempo real de todos los amigos agregados
- Estilos atractivos con efectos hover
- Actualización automática de la lista

### 3. **Sorteo Aleatorio**
- Selección completamente aleatoria de participantes
- Validación de que existan amigos en la lista
- Resultado destacado con animaciones
- Prevención de sorteos sin participantes

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS, flexbox y animaciones
- **JavaScript (ES6+)**: Lógica de programación pura sin frameworks
- **Fuentes Web**: Google Fonts (Inter y Merriweather)
- **Iconografía**: Assets personalizados para mejor UX

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto-main/
├── index.html          # Página principal del juego
├── app.js             # Lógica de programación JavaScript
├── style.css          # Estilos y diseño visual
├── assets/            # Imágenes e iconos del proyecto
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md          # Documentación del proyecto
```

## 🎯 Funciones JavaScript Implementadas

### `agregarAmigo()`
- Captura y valida el input del usuario
- Añade nombres al array de amigos
- Actualiza la interfaz automáticamente

### `mostrarListaAmigos()`
- Renderiza la lista de participantes
- Limpia duplicados en cada actualización
- Aplica estilos dinámicamente

### `sortearAmigo()`
- Genera selección aleatoria usando `Math.random()`
- Valida disponibilidad de participantes
- Muestra resultado con formato destacado

## 🎨 Características de Diseño

- **Paleta de colores**: Esquema coherente con variables CSS
- **Tipografía**: Combinación de fuentes Inter y Merriweather
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla
- **Micro-interacciones**: Efectos hover y transiciones suaves
- **Accesibilidad**: Uso de ARIA labels y roles semánticos

## 🚀 Cómo Usar

1. **Abrir el proyecto**: Navega a la carpeta del proyecto y abre `index.html` en tu navegador
2. **Agregar amigos**: Escribe nombres en el campo de texto y haz clic en "Añadir"
3. **Ver la lista**: Los nombres se mostrarán automáticamente en la lista
4. **Realizar sorteo**: Haz clic en "Sortear amigo" para seleccionar aleatoriamente
5. **¡Disfrutar!**: El resultado se mostrará con una animación atractiva

## 🔧 Instalación y Configuración

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor web ni dependencias externas

### Pasos de Instalación
1. Clona o descarga el repositorio
2. Navega a la carpeta del proyecto
3. Abre `index.html` en tu navegador preferido
4. ¡Listo para usar!

## 📱 Compatibilidad

- **Navegadores**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Dispositivos**: Desktop, tablet y móvil
- **Sistemas Operativos**: Windows, macOS, Linux, Android, iOS

## 🎓 Objetivos de Aprendizaje

Este proyecto fue desarrollado para fortalecer:
- **Lógica de programación** con JavaScript puro
- **Manipulación del DOM** y eventos del navegador
- **Validación de formularios** y manejo de errores
- **Arrays y métodos** de JavaScript (push, for, Math.random)
- **CSS moderno** con variables, flexbox y animaciones
- **HTML semántico** y accesibilidad web

## 🤝 Contribuciones

Este es un proyecto educativo desarrollado como parte de la formación de Alura. Las contribuciones son bienvenidas para mejorar la funcionalidad, diseño o documentación.

## 📄 Licencia

Proyecto educativo desarrollado para fines de aprendizaje y formación.

---

**Desarrollado con ❤️ para el desafío de formación de Alura**
