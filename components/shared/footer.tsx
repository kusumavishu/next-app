import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full rounded-none"
          // onClick={() => {
          //   window.scrollTo({ top: 0, behavior: "smooth" });
          //   console.log("clicked");
          // }}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          back to top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/conditions-of-use">Conditions of Use</Link>
          <Link href="/page/privacy-policy">Privacy Policy</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p>@2025 {APP_NAME}</p>
        </div>
        <div className="mt-8 text-gray-400 flex justify-center text-sm">
          mandamarri, mancherial, mandamarri 504231
        </div>
      </div>
    </footer>
  );
}
