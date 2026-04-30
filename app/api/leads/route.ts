import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 })
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL não configurada")
      return NextResponse.json({ error: "Configuração interna ausente" }, { status: 500 })
    }

    const payload = {
      type: "contact",
      name,
      email,
      phone,
      message: message || "",
      fonte: "Landing Page Paraguai",
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Apps Script retornou status ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Leads API Error:", error)
    return NextResponse.json({ error: "Erro ao registrar contato" }, { status: 500 })
  }
}
