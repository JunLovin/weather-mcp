# 🌤️ Said MCP - Servicio de Clima en Tiempo Real

**Said MCP** es una implementación sencilla pero poderosa de un servidor MCP (Model Context Protocol), diseñada para proporcionar información del clima en tiempo real a través de una herramienta accesible y extensible.

---

## 🚀 Características

- 🔧 **Servidor MCP personalizado** con `@modelcontextprotocol/sdk`
- 📍 **Geolocalización precisa** mediante la API de Open-Meteo
- 🌡️ **Datos meteorológicos actuales**: temperatura, lluvia y precipitación
- ⚡ **Interfaz sencilla y eficiente** basada en transporte por `stdio`

---

## 🧠 ¿Cómo funciona?

El servidor expone una herramienta llamada `obtener-clima` que permite consultar el estado del tiempo para cualquier ciudad, resolviendo la ubicación con coordenadas geográficas y consultando datos meteorológicos actualizados.

### 🔍 Flujo de ejecución

1. 🏙️ Se recibe el nombre de una ciudad.
2. 🌍 Se obtiene su latitud y longitud a través de la API de geocodificación de Open-Meteo.
3. ☁️ Se consultan los datos climáticos actuales.
4. 📝 Se devuelve la información en un formato estructurado.

---

## 📦 Estructura del Proyecto

```bash
.
├── .gitignore
├── main.ts              # Archivo principal del servidor MCP
├── package.json         # Dependencias y metadatos del proyecto
├── package-lock.json    # Control de versiones de dependencias
└── README.md            # Este archivo 📝
```

---

## 🛠️ Requisitos

- NodeJS >= 18
- TypeScript
- Acceso a internet (Para llamadas a las APIs)

## 🧪 Ejemplo de Uso

```ts
server.tool(
  'obtener-clima',
  'Herramienta para obtener el clima en tiempo real',
  { city: z.string().describe('City name') },
  async ({ city }) => {
    // Consulta a la API y retorno de datos...
  }
)
```

---

## 🔌 Integración

El servidor se conecta usando StdioServerTransport, permitiendo una integración sencilla con sistemas compatibles con MCP.

```ts
const transport = new StdioServerTransport()
await server.connect(transport)
```

--

## 📜 Licencia

MIT License

---

## ✨ Autor

Desarrollado con pasión por [Said Ruiz](https://said-coverletter.vercel.app).