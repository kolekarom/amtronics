import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// 🌐 CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// 🧠 Static Info Knowledge Base
const companyInfo = [
  // 1️⃣ Company Overview
  {
    keywords: ["amtronics", "about", "who", "what is", "company", "mission", "vision", "founded", "unique"],
    answer: "🏢 **Amtronics Power** is an Indian electronics manufacturer specializing in power systems, inverters, PCB design, and solar solutions. Our mission is to build sustainable and efficient energy systems for modern needs.",
  },
  {
    keywords: ["location", "where", "address", "office", "headquarters"],
    answer: "📍 Our head office is located at **S/N 78, Shri Gajanan Maharaj Nagar, Dighi – Pune, Maharashtra, India.**",
  },
  {
    keywords: ["partners", "distributors", "dealers"],
    answer: "🤝 Amtronics Power works with regional distributors and OEM clients across India for energy and control systems integration.",
  },

  // 2️⃣ Contact Info
  {
    keywords: ["contact", "email", "phone", "number", "support", "help", "customer care"],
    answer: "☎️ You can reach our support team at **support@amtronicspower.com** or call **+91 89834 17716** (Mon–Sat, 9 AM – 6 PM).",
  },
  {
    keywords: ["whatsapp", "chat"],
    answer: "💬 You can message us on WhatsApp at **+91 89834 17716** during working hours.",
  },
  {
    keywords: ["hours", "timing", "open", "work"],
    answer: "🕓 We’re open **Monday to Saturday, 9:00 AM – 6:00 PM**.",
  },

  // 3️⃣ Products & Services
  {
    keywords: ["product", "services", "offer", "sell"],
    answer: "⚙️ We offer **inverters, solar systems, battery management units, and control boards**, all designed for efficiency and reliability.",
  },
  {
    keywords: ["custom", "made to order"],
    answer: "🔧 Yes, we provide **custom-designed electronics and power solutions** as per client requirements.",
  },
  {
    keywords: ["solar", "inverter", "installation", "battery"],
    answer: "🔋 Yes, we provide **solar power systems, inverters**, and **installation support** across India.",
  },
  {
    keywords: ["warranty", "guarantee"],
    answer: "🛠️ All Amtronics products come with a **1-year standard warranty**.",
  },
  {
    keywords: ["amc", "maintenance", "annual"],
    answer: "🧰 Yes, we offer **Annual Maintenance Contracts (AMC)** for our products.",
  },

  // 4️⃣ Orders & Sales
  {
    keywords: ["buy", "purchase", "order", "discount", "payment", "bulk"],
    answer: "🛍️ You can order directly from Amtronics or our authorized dealers. Bulk discounts are available. Payments accepted via UPI, NEFT, and cards.",
  },

  // 5️⃣ Delivery & Returns
  {
    keywords: ["delivery", "shipping", "return", "refund", "replace"],
    answer: "🚚 Delivery takes 3–7 business days. Returns are accepted for manufacturing defects within 7 days of receipt.",
  },
  {
    keywords: ["claim", "service", "warranty claim"],
    answer: "🧾 To claim warranty, contact **support@amtronicspower.com** with your product serial number and purchase proof.",
  },

  // 6️⃣ Support
  {
    keywords: ["support", "not working", "repair", "issue", "fault", "problem"],
    answer: "🔧 If you face issues, email **support@amtronicspower.com** or call **+91 89834 17716** for technical help.",
  },

  // 7️⃣ Quality & Sustainability
  {
    keywords: ["eco-friendly", "sustainability", "environment", "iso", "quality"],
    answer: "🌿 Amtronics Power follows **ISO-grade manufacturing** standards and eco-friendly design practices.",
  },

  // 8️⃣ Partnerships
  {
    keywords: ["dealer", "partner", "distributor", "business"],
    answer: "🤝 For dealership or business partnerships, contact **business@amtronicspower.com**.",
  },
  {
    keywords: ["export", "international"],
    answer: "🌍 Yes, we export select products internationally.",
  },

  // 9️⃣ Legal
  {
    keywords: ["terms", "policy", "privacy", "invoice", "gst", "registration", "manual", "datasheet"],
    answer: "📄 All legal information, including policies, manuals, and GST invoices, is available on request via **support@amtronicspower.com**.",
  },
];

// 🧩 Static detection function
function detectStaticAnswer(message: string): string | null {
  const lower = message.toLowerCase();
  for (const entry of companyInfo) {
    if (entry.keywords.some((k) => lower.includes(k))) {
      return entry.answer;
    }
  }
  return null;
}

// 🩺 Health Check
export async function GET() {
  return new Response(
    JSON.stringify({
      status: "success",
      message: "Chat API live ✅",
      timestamp: new Date().toISOString(),
    }),
    { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
  );
}

// 💬 Chat handler (Static + Gemini fallback)
export async function POST(req: Request) {
  console.log("💬 /api/chat endpoint hit", new Date().toISOString());

  try {
    const { message } = await req.json();
    if (!message?.trim()) {
      return NextResponse.json({ text: "⚠️ Please enter a valid message." }, { status: 400, headers: corsHeaders });
    }

    // 1️⃣ Check static company info first
    const staticResponse = detectStaticAnswer(message);
    if (staticResponse) {
      console.log("📘 Static company info matched. Responding without Gemini.");
      return NextResponse.json({ text: staticResponse }, { headers: corsHeaders });
    }

    // 2️⃣ Gemini API fallback
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ text: "⚠️ Missing Gemini API key." }, { status: 500, headers: corsHeaders });
    }

    const model = "gemini-2.5-flash";
    const version = "v1beta";
    const geminiUrl = `https://generativelanguage.googleapis.com/${version}/models/${model}:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: [{ role: "user", parts: [{ text: message }] }],
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
      messagePreview: message.slice(0, 80) + (message.length > 80 ? "...": ""),
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
        { text: "⚠️ Gemini API request failed.", error: data?.error?.message || "Unknown API error" },
        { status: response.status, headers: corsHeaders }
      );
    }

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
