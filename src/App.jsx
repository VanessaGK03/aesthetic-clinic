import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Procedures from "./components/Procedures";
import Team from "./components/Team";
import OurMission from "./components/OurMission";
import Location from "./components/Location";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import ProcedureModal from "./components/ProcedureModal";
import LoginPage from "./pages/LoginPage";

import AdminPage from "./pages/AdminPage";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [openProcedureModal, setOpenProcedureModal] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const handleOpenModal = (doctorName = "") => {
    setSelectedDoctor(doctorName);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDoctor("");
  };

  const handleOpenProcedure = (procedure) => {
    setSelectedProcedure(procedure);
    setOpenProcedureModal(true);
  };

  const handleCloseProcedure = () => {
    setOpenProcedureModal(false);
    setSelectedProcedure(null);
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero openBooking={() => handleOpenModal()} />
              <Procedures openProcedure={handleOpenProcedure} />
              <Team openBooking={handleOpenModal} />
              <OurMission />
              <Location />
              <Footer />

              {openModal && (
                <BookingModal
                  closeModal={handleCloseModal}
                  doctor={selectedDoctor}
                  procedure={selectedProcedure?.name}
                />
              )}

              {openProcedureModal && (
                <ProcedureModal
                  closeModal={handleCloseProcedure}
                  procedure={selectedProcedure}
                />
              )}
            </>
          }
        />

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
