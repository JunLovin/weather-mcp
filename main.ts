import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from 'zod'

const server = new McpServer({
    name: "Said MCP",
    version: '1.0.0',
})

server.tool(
    'obtener-clima',
    'Herramienta para obtener el clima en tiempo real',
    {
        city: z.string().describe('City name')
    },
    async ({ city }) => {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
        const data = await response.json()

        if (data.length === 0) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `No se pudo encontrar la información de ${city}`
                    }
                ]
            }
        }

        const { latitude, longitude } = data.results[0]

        const getCurrentWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,precipitation,rain`)

        const weatherData = await getCurrentWeather.json()

        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(weatherData, null, 2)
                }
            ]
        }
    }
)


const transport = new StdioServerTransport()
await server.connect(transport)