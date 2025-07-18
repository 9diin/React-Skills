import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Ref from "./Ref";
// import App from "./App.tsx";
// import Effect from "./Effect.tsx";
// import Memo from "./Memo";
// import Average from "./Average";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Ref />
    </StrictMode>
);
