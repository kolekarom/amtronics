'use client';

import dynamic from 'next/dynamic';

// Dynamically import ChatBot with SSR disabled
const ChatBot = dynamic(() => import('./ChatBot'), { 
  ssr: false,
  loading: () => null // Optional: Add a loading component if needed
});

// This is a client component that wraps the ChatBot
export default function ChatBotClient() {
  return <ChatBot />;
}
