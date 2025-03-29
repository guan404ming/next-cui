"use client";
import { Tldraw, track, useEditor } from "tldraw";
import { useEffect, useState } from "react";
import ChatSheet from "@/components/chatSheet";

export default function Home() {
  const [open, setOpen] = useState(false);

  const SheetContext = track(() => {
    const editor = useEditor();
    const selected = editor.getSelectedShapes();

    useEffect(() => {
      if (selected.length > 0) {
        setOpen(true);
        editor.selectNone();
      }
    }, [selected]);

    return null;
  });

  return (
    <main>
      <div className="fixed inset-0">
        <Tldraw>
          <SheetContext />
        </Tldraw>
      </div>

      <ChatSheet open={open} setOpen={setOpen} />
    </main>
  );
}
