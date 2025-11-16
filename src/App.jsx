import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import GlobalContext from "./contexts/LoaderContextProvider";
function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <GlobalContext.Provider value={{ loading, setLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/:id" element={<Moviepage />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}
export default App