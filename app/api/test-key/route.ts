import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'GEMINI_API_KEY not found in environment variables',
      }),
      { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }

  try {
    // Test with the latest model endpoint
    const testUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const response = await fetch(testUrl);
    const data = await response.json();

    if (response.ok) {
      return new Response(
        JSON.stringify({
          status: 'success',
          message: 'API key is valid!',
          availableModels: data.models ? data.models.map((m: any) => ({
            name: m.name,
            supportedMethods: m.supportedGenerationMethods || []
          })) : 'No models found',
          keyPrefix: apiKey ? `...${apiKey.slice(-4)}` : 'Not set',
          timestamp: new Date().toISOString()
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: 'Failed to fetch models',
          error: data.error || 'Unknown error',
          keyPrefix: apiKey ? `...${apiKey.slice(-4)}` : 'Not set',
          timestamp: new Date().toISOString()
        }),
        {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'API request failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        keyPrefix: apiKey ? `...${apiKey.slice(-4)}` : 'Not set',
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}
