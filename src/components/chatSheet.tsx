import { SetStateAction } from "react";
import { Dispatch } from "react";
import { ChatSection } from "./chat";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface ChatSheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ChatSheet({ open, setOpen }: ChatSheetProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger />
      <SheetContent className="w-[1200px] sm:w-[600px] sm:max-w-[540px]">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
        </SheetHeader>
        <ChatSection />
      </SheetContent>
    </Sheet>
  );
}
