import "@/styles/globals.css";
import { MyContextProvider } from "@/context/menuContext";

export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <div className="w-full h-full flex-grow">
        <Component {...pageProps} />
      </div>
    </MyContextProvider>
  );
}
