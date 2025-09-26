"use client";

import SearchModal from "@/components/SearchModal";
import ChatbotWidget from "@/components/ChatbotWidget";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import TranslateWidget from "@/components/TranslateWidget";
import FloatingContacts from "@/components/FloatingContacts";

export default function ClientRoot() {
  return (
    <>
      <SearchModal />
      <ChatbotWidget />
      <ServiceWorkerRegister />
      <TranslateWidget />
      <FloatingContacts />
    </>
  );
}
