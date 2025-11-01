import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",};

// Handle CORS preflight requests
export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

// Health check endpoint
export async function GET() {
  return new Response(
    JSON.stringify({
      status: "success",
      message: "Chat API is live ✅",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
      geminiConfigured: !!process.env.GEMINI_API_KEY,
    }),
    { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
  );
}

// Chat POST handler
export async function POST(req: Request) {
  console.log("💬 /api/chat endpoint hit", new Date().toISOString());

  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json(
        { text: "⚠️ Please enter a valid message." },
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("🚨 Missing GEMINI_API_KEY");
      return NextResponse.json(
        { text: "⚠️ Server misconfigured. Missing Gemini API key." },
        { status: 500, headers: corsHeaders }
      );
    }

    // Using a stable model that's known to work
    const model = "gemini-2.5-flash";
    const version = "v1beta";
    const geminiUrl = `https://generativelanguage.googleapis.com/${version}/models/${model}:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: [{
        role: "user",
        parts: [{ text: message }],
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.9,
        maxOutputTokens: 1024,
      },
    };

    console.log("📡 Sending request to Gemini API:", {
      model,
      version,
      bodyPreview: message.slice(0, 80) + (message.length > 80 ? "..." : ""),
    });

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Gemini API Error:", data);
      return NextResponse.json(
        {
          text: "⚠️ Gemini API request failed.",
          error: data?.error?.message || "Unknown API error",
        },
        { status: response.status, headers: corsHeaders }
      );
    }

    // Extract text response safely
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "⚙️ Sorry, I couldn't generate a response. Please try again.";

    console.log("🤖 Gemini Response:", text);
    return NextResponse.json({ text }, { headers: corsHeaders });

  } catch (error) {
    console.error("🚨 Server Error:", error);
    return NextResponse.json(
      {
        text: "⚠️ Internal server error while processing your request.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
