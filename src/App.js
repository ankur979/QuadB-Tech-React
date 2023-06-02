import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShowList from "./components/ShowList/ShowList";
import ShowSummary from "./components/showSummary/ShowSummary"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
