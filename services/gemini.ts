import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const gerarDetalhesProduto = async (tituloProduto: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Você é um consultor de vendas sênior da "Super Toldos", uma empresa brasileira de toldos e coberturas.
      Escreva uma descrição de produto curta, persuasiva e prática (aprox. 40-50 palavras) para o produto: "${tituloProduto}".
      
      Diretrizes:
      - Tom: Profissional, direto, focado na qualidade e durabilidade. NÃO poético ou florido.
      - Aspectos principais a mencionar: Proteção contra sol/chuva, qualidade do material (ex: solda eletrônica), visual moderno para comércio ou residência.
      - Idioma: Português (Brasil).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Proteção e design moderno para seu ambiente. Materiais de alta durabilidade e acabamento premium.";
  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return "Proteção e design moderno para seu ambiente. Materiais de alta durabilidade e acabamento premium.";
  }
};