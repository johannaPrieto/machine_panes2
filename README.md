# IA Bakery - En busca de tu pan favorito

Una aplicación web sencilla que utiliza TensorFlow.js y Teachable Machine para identificar panes desde la cámara del navegador y mostrar la receta asociada.

## 🔧 Resumen
- Proyecto: Página estática con HTML, CSS y JavaScript.
- Modelo: TensorFlow.js (exportado desde Teachable Machine) localizado en la carpeta `modelos` (`model.json`, `metadata.json`, `weights.bin`).
- Librerías externas: `@tensorflow/tfjs` y `@teachablemachine/image` (cargadas desde CDN en `index.html`).

## ✅ Requisitos previos

- Navegador moderno (Chrome, Edge o Firefox). Recomendado: Chrome o Edge para mejor compatibilidad con webcam.
- Conexión a Internet para cargar las librerías desde CDN (a menos que las copies localmente).
- Un servidor local para servir archivos (no abrir con `file://`) para evitar restricciones de CORS y acceso a la cámara.
- Opcional: Python 3 o Node.js si eliges usar un servidor HTTP rápido.

## 📁 Estructura del proyecto

- `index.html` - Página principal.
- `script.js` - Lógica de la aplicación y carga del modelo.
- `style/style.css` - Estilos.
- `modelos/` - Modelo exportado (debe contener `model.json`, `metadata.json`, `weights.bin`).
- `machine_panes/` - Contenido adicional y `README.md` (si aplica).

## 🔁 Clonar el repositorio

```bash
git clone https://github.com/johannaPrieto/machine_panes2.git
cd machine_panes2

## 🚀 Ejecutar la app localmente (opciones)

> Nota: La app requiere servir archivos mediante HTTP/HTTPS para que la webcam funcione correctamente.
1) Usando Python 3 (Windows - `cmd.exe`):
```cmd
py -3 -m http.server 8000
rem o si python está en PATH
python -m http.server 8000
```
2) Usando Node.js (sin instalar globalmente, con NPX):
```cmd
npx http-server -p 8000
rem o
npx serve -s -l 8000
```
3) Usando VS Code Live Server:
- Instala la extensión Live Server.
- Abre la carpeta del proyecto en VS Code.
- Haz click en "Go Live" (arriba a la derecha) para servir en `http://127.0.0.1:5500` o similar.
4) Abrir en el navegador:
Abre `http://localhost:8000` (o el puerto donde se haya servido) en Chrome/Edge.
## 🧭 Uso (qué hacer en la app)
1. Abre la app en tu navegador.
2. Pulsa el botón "Iniciar".
3. Selecciona la opción "Cámara".
4. Pulsa "Iniciar cámara" y concede los permisos para usar la webcam cuando el navegador lo solicite.
5. La aplicación correrá un temporizador de 10 segundos mientras realiza predicciones. Al terminar mostrará la receta del pan detectado (si existe en la base de recetas del `script.js`).
## ⚠️ Problemas comunes y solución
- El modelo no carga y aparece un mensaje de error:
  - Verifica que exista la carpeta `modelos` con `model.json`, `metadata.json` y `weights.bin` en la raíz del proyecto.
  - Asegúrate de servir la app desde HTTP(S) (no desde `file://`).
  - Revisa la consola del navegador (DevTools) para ver errores (p. ej. CORS, NotFound, 404).

- No se accede a la cámara:
  - Revisa los permisos en el navegador (barras de URL o ajustes) y confirma que la cámara esté conectada o no esté en uso por otra aplicación.
  - Prueba en otro navegador (Chrome o Edge recomendado).

- La página dice que `tmImage` no carga:
  - Revisa tu conexión a Internet para que el CDN cargue.
  - Como alternativa, descarga `@teachablemachine/image` y `@tensorflow/tfjs` y referencia los archivos localmente en `index.html`.

## 🛠️ Reemplazar o volver a exportar el modelo (Teachable Machine)
Si quieres usar tu propio modelo entrenado en Teachable Machine:

1. En Teachable Machine > Export Model > TensorFlow.js (te dará `model.json` y `weights.bin`).
2. Coloca `model.json`, `metadata.json` y `weights.bin` dentro de la carpeta `modelos/` en la raíz del repo.
3. Asegúrate de que la ruta en `script.js` siga apuntando a `./modelos/model.json`. Si cambias la ruta, actualiza el código o usa una ruta relativa correcta.

## 📦 Desarrollo y pruebas
- Para desarrollo, cualquier servidor local será suficiente (ver sección "Ejecutar la app localmente").
- Si quieres ver logs y errores: abre DevTools (F12) y revisa la consola y la pestaña "Network".

## ⚖️ Licencia
- Este proyecto no tiene licencia específica incluida. Añade un `LICENSE` si deseas especificar los términos de uso/redistribución.

## ✉️ Contacto
- Si tienes dudas o quieres ayuda, deja una issue en el repositorio o añade un correo en la sección de contacto.
¡Listo! Si quieres, puedo: 
- Adjuntar un `LICENSE` apropiado (MIT/Apache/CC) y una sección de contribución.
- Añadir un comando de `package.json` para ejecutar un servidor local con NPM.
- Incluir una versión donde las librerías se carguen localmente para modo offline.
