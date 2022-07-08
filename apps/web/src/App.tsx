import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";
import { trpc } from "./utils/trpc";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: import.meta.env.VITE_API_URL || "http://localhost:4000/trpc",
      // optional
      // headers() {
      //   return {
      //     authorization: getAuthCookie(),
      //   };
      // },
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
