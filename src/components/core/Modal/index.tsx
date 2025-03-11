"use client";

import { useRouter } from "next/navigation";
import { useRef, ReactNode, MouseEventHandler } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  return (
    <div
      ref={overlay}
      onClick={close}
      className="fixed z-10 left-0 top-0 button-0 w-full h-full bg-black bg-opacity-50 mx-auto"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl overflow-y-auto p-4 bg-white rounded">
        {children}
      </div>
    </div>
  );
}
