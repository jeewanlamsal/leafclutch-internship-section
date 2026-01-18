
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InternshipDetail from "./pages/InternshipDetail";
import Enroll from "./pages/Enroll";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/internship/:id" element={<InternshipDetail />} />
          <Route path="/enroll" element={<Enroll />} />
          
        </Routes>
      </BrowserRouter>
    
  </QueryClientProvider>
);

export default App;
