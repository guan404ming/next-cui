"use client";
import { Tldraw } from "tldraw";
import { ChatSection } from "@/components/chat";

export default function Home() {
  return (
    <main>
      <div style={{ position: "fixed", inset: 0 }}>
        <Tldraw />
      </div>
    </main>
  );
}
