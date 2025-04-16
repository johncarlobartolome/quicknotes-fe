import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import NewNotesPage from "./pages/NewNotesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/notes"
          element={
            <MainLayout>
              <NotesPage />
            </MainLayout>
          }
        />
        <Route
          path="/new"
          element={
            <MainLayout>
              <NewNotesPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
