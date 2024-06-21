import React from "react";
import "@/app/components/styles/loading.css";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}
