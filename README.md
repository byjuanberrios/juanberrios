# Plantilla Starter Astro + React

Este proyecto es una plantilla base para iniciar rápidamente el desarrollo de un nuevo sitio web utilizando [Astro](https://astro.build/) y [React](https://react.dev/). Incluye una estructura organizada, componentes reutilizables y configuración inicial para facilitar el desarrollo.

## 🚀 ¿Qué incluye esta plantilla?

- **Astro** como framework principal para sitios rápidos y modernos.
- **React** integrado para crear componentes interactivos fácilmente.
- Estructura de carpetas recomendada para escalabilidad.
- Ejemplo de configuración de rutas, temas y menús.
- Componentes compartidos como Header, Footer y botones de tema.
- Estilos globales listos para personalizar.

## 📁 Estructura del proyecto

```
/
├── public/                # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── assets/            # Recursos como imágenes
│   ├── components/        # Componentes Astro y React reutilizables
│   ├── layout/            # Layouts base para las páginas
│   ├── lib/               # Lógica y utilidades compartidas
│   ├── pages/             # Páginas del sitio (rutas)
│   ├── store/             # Estado global o stores
│   └── styles/            # Estilos globales y específicos
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts
└── tsconfig.json          # Configuración de TypeScript
```

## ⚙️ Configuración inicial

1. **Instala las dependencias:**

   ```sh
   pnpm install
   ```

2. **Configura los datos del sitio:**

   - Edita `src/config.ts` para personalizar el nombre, descripción y enlaces del sitio.
   - Personaliza los menús en `src/lib/Menus.ts`.

3. **Personaliza los componentes:**

   - Modifica los componentes en `src/components/` según tus necesidades.
   - Cambia el layout base en `src/layout/Layout.astro`.

4. **Ajusta los estilos:**

   - Edita `src/styles/global.css` para adaptar la apariencia a tu marca.

5. **Agrega tus páginas:**
   - Crea nuevas páginas en `src/pages/` usando `.astro` o `.mdx`.

## 🧞 Comandos útiles

| Comando          | Acción                                |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Inicia el servidor de desarrollo      |
| `pnpm build`     | Genera el sitio listo para producción |
| `pnpm preview`   | Previsualiza el sitio generado        |
| `pnpm astro ...` | Ejecuta comandos de Astro CLI         |

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build/es/)
- [Documentación de React](https://es.react.dev/)

---

¡Utiliza esta plantilla para acelerar el inicio de tu próximo proyecto web con Astro y React!
