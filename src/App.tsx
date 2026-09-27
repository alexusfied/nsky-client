import "./index.css";
import ChatPage from "./pages/ChatPage";
import { ThemeProvider } from "@mui/material/styles";
import { nskyTheme } from "./providers/theme/nskyTheme.ts";

export function App() {
    return (
        <ThemeProvider theme={nskyTheme}>
            <main className={"bg-primary-variant"}>
                <ChatPage />
            </main>
        </ThemeProvider>
    );
}

export default App;
