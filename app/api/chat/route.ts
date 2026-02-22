import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// 🌐 CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// 🧠 Static Info Knowledge Base — Smart & Specific Replies
const companyInfo = [
  // 1️⃣ Company Overview
  {
    keywords: ["amtronics", "about", "who are you", "company", "what is amtronics", "mission", "vision"],
    answer:
      "🏢 Amtronics Power is an Indian electronics manufacturer specializing in inverters, solar systems, PCB design, and energy control solutions.",
  },
  {
    keywords: ["founded", "established", "started"],
    answer: "📅 Amtronics Power was founded to deliver efficient and sustainable energy solutions in India.",
  },
  {
    keywords: ["unique", "special", "different"],
    answer:
      "💡 We stand out through our focus on high-efficiency, durable, and eco-friendly electronic systems.",
  },
  {
    keywords: ["location", "where", "address", "office", "headquarters", "map"],
    answer:
      "📍 Amtronics Power Systems — SR NO 78, Near Mahadev Mandir, Swaraj Colony, Shri Gajanan Maharaj Nagar, Dighi, Pune, Maharashtra 411015.",
  },

  // 2️⃣ Contact Information
  {
    keywords: ["phone", "number", "contact number", "customer care number"],
    answer: "📞 Our customer support number is +91 89834 17716.",
  },
  {
    keywords: ["email", "mail", "support email", "contact email"],
    answer: "📧 You can email us at support@amtronicspower.com.",
  },
  {
    keywords: ["whatsapp", "chat", "message"],
    answer: "💬 Connect with us on WhatsApp at +91 89834 17716.",
  },
  {
    keywords: ["working hours", "timing", "office hours", "open", "close"],
    answer: "🕓 We’re open Monday to Saturday, 9 AM – 6 PM.",
  },

  // 3️⃣ Products & Services
  {
    keywords: ["products", "what you make", "what you sell", "product list"],
    answer:
      "⚙️ We manufacture inverters, solar systems, battery management units, and control boards.",
  },
  {
    keywords: ["services", "offer", "provide", "do you install"],
    answer: "🛠️ We provide installation, repair, and maintenance services for all our systems.",
  },
  {
    keywords: ["custom", "made to order", "design", "bespoke"],
    answer: "🔧 Yes, we create custom electronics and power systems tailored to your requirements.",
  },
  {
    keywords: ["warranty", "guarantee"],
    answer: "🧾 All our products come with a 1-year standard warranty.",
  },
  {
    keywords: ["amc", "maintenance", "annual maintenance"],
    answer: "🧰 We offer Annual Maintenance Contracts (AMC) for continued service support.",
  },


  // 4️⃣ Orders & Sales
  {
    keywords: ["buy", "purchase", "order", "how to buy", "payment", "discount"],
    answer:
      "🛍️ You can order directly from Amtronics or through authorized dealers. We accept UPI, NEFT, and card payments. Bulk orders may get discounts.",
  },

  // 5️⃣ Delivery & Returns
  {
    keywords: ["delivery", "shipping", "dispatch", "receive"],
    answer: "🚚 Standard delivery within 3–7 business days across India.",
  },
  {
    keywords: ["return", "refund", "replace"],
    answer:
      "🔄 Returns are accepted for manufacturing defects within 7 days of delivery.",
  },
  {
    keywords: ["claim", "warranty claim", "service request"],
    answer:
      "📩 To claim warranty, email support@amtronicspower.com with your serial number and purchase proof.",
  },

  // 6️⃣ Support
  {
    keywords: ["support", "help", "issue", "problem", "not working", "repair","contact","phone","email","number"],
    answer:
      "🧑‍🔧 For technical support, call +91 89834 17716 or email support@amtronicspower.com.",
  },

  // 7️⃣ Quality & Sustainability
  {
    keywords: ["iso", "certified", "certification", "quality"],
    answer:
      "🏅 We’re certified with ISO 9001:2015 and RoHS Compliant manufacturing standards.",
  },
  {
    keywords: ["eco-friendly", "sustainable", "environment", "green"],
    answer:
      "🌿 We use eco-friendly materials and sustainable manufacturing processes.",
  },

  // 8️⃣ Partnerships & Business
  {
    keywords: ["dealer", "distributor", "partner", "business inquiry"],
    answer:
      "🤝 To become a dealer or partner, contact us at business@amtronicspower.com.",
  },
  {
    keywords: ["export", "international", "outside india"],
    answer: "🌍 Yes, we export selected products internationally.",
  },

  // 9️⃣ Legal / Documentation
  {
    keywords: ["terms", "policy", "privacy", "gst", "invoice", "manual", "datasheet"],
    answer:
      "📄 For legal documents, GST invoices, or datasheets, please email support@amtronicspower.com.",
  },
  {
  keywords: ["location", "address", "where are you located"],
  answer: "📍 Our organization is located in Shri Gajanan Maharaj Nagar, Dighi, Pune,411015."
},
{
  keywords: ["name", "your name", "bot name"],
  answer: "🤖 My name is AMbot ."
},
{
  keywords: ["developer", "who developed you", "created this bot"],
  answer: "👨‍💻 This bot was developed by Om and the project team."
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
    let message: string = '';
    const contentType = req.headers.get('content-type') || '';
    
    // Handle both JSON and FormData requests
    if (contentType.includes('application/json')) {
      // Traditional JSON request
      const body = await req.json();
      message = body.message;
    } else if (contentType.includes('multipart/form-data')) {
      // FormData request with files
      const formData = await req.formData();
      message = formData.get('message') as string || '';
      
      // Log file information for debugging
      const files: string[] = [];
      for (const [key, value] of formData.entries()) {
        if (key.startsWith('file') && value instanceof File) {
          files.push(`${value.name} (${value.size} bytes, ${value.type})`);
        }
      }
      
      if (files.length > 0) {
        console.log("📎 Files received:", files);
        // For now, we'll acknowledge the files but focus on the text message
        // In a future enhancement, we could process the files here
        if (!message.trim()) {
          message = `I've sent ${files.length} file${files.length > 1 ? 's' : ''}. Please help me with these ${files.length > 1 ? 'documents' : 'document'}.`;
        } else {
          message += `\n\nI've also attached ${files.length} file${files.length > 1 ? 's' : ''}: ${files.map(f => f.split(' ')[0]).join(', ')}.`;
        }
      }
    } else {
      // Fallback attempt to parse as JSON
      const body = await req.json();
      message = body.message;
    }
    
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
