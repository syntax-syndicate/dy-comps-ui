import Construction from "@/components/construction";
import React from "react";
import CleanPage from "../(temps)/_component/clean-page";

function Page() {
  return (
    <main className="mb-6 grid px-6 md:px-10 lg:px-16">
      <CleanPage style="html, body { overflow: auto !important; -ms-overflow-style: none !important; scrollbar-width: none !important; } html::-webkit-scrollbar { display: none !important; }" />
      {/* <Construction className="m-auto max-w-72" /> */}
      <iframe
        src="https://programming-with-ia.github.io/vDocs/hooks/"
        className="absolute inset-0 h-screen w-screen"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups"
        title="vDocs"
      ></iframe>
    </main>
  );
}

export default Page;
