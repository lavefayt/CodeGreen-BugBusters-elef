import { StrictMode } from "react";
import { Slide, ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import { LoadingProvider } from "./context/LoadingContext";
import Main from "./App";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Slide}
        toastClassName={`text-xs`}
      />
      <AuthProvider>
        <LoadingProvider>
          <Main />
        </LoadingProvider>
      </AuthProvider>
    </StrictMode>
  );
}
