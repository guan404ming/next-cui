"use client";
import { Tldraw, track, useEditor } from "tldraw";
import { ChatSection } from "@/components/chat";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
            </SheetHeader>
            <ChatSection />
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}
