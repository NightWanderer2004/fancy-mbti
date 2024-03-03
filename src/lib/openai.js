import openai from 'openai'

const openaiApiKey = process.env.OPENAI_API_KEY
const openaiInstance = new openai.OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true })

export { openaiInstance as openai }
