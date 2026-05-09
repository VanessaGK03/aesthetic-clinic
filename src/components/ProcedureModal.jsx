

import { useState } from "react";
import "./ProcedureModal.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProcedureModal({ closeModal, procedure }) {
  if (!procedure) return null;

  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  // hours
  const timeSlots = Array.from(
    { length: 10 },
    (_, i) => `${(i + 9).toString().padStart(2, "0")}:00`
  );

  // available working hours
  const getAvailableTimes = () => {
    if (!selectedDate) return [];

    const day = selectedDate.getDay();

    if (day === 0) return []; // Sunday
    if (day === 6) return timeSlots.filter((t) => t <= "15:00"); // Saturday

    return timeSlots;
  };

  const availableTimes = getAvailableTimes();

  // submit demo
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal large">
        <span className="close" onClick={closeModal}>
          ×
        </span>

        {!submitted ? (
          <div className="procedure-modal-content">
            
            {/* left side */}
            <div className="procedure-info">
              <img src={procedure.image} alt={procedure.name} />
              <h2>{procedure.name}</h2>
              <p>{procedure.description}</p>
              <p><strong>Doctor:</strong> {procedure.doctor}</p>
              <p className="price">{procedure.price}</p>
            </div>

            {/* form */}
            <form className="procedure-form" onSubmit={handleSubmit}>
              <h3>Book Appointment</h3>

              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email" required />

              {/* calendar */}
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                filterDate={(date) => date.getDay() !== 0} // ❌ без неделя
                placeholderText="Select date"
                className="date-input"
              />

              {/* time */}
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                disabled={!selectedDate}
              >
                <option value="">Select Time</option>

                {availableTimes.length > 0 ? (
                  availableTimes.map((t, i) => (
                    <option key={i} value={t}>
                      {t}
                    </option>
                  ))
                ) : (
                  <option disabled>
                    {selectedDate
                      ? "Clinic is closed"
                      : "Select a date first"}
                  </option>
                )}
              </select>

              <button className="btn btn-primary">
                Confirm 
              </button>
            </form>
          </div>
        ) : (
          <div className="success">
            <h2>Thank you!</h2>
            <p>We will contact you shortly.</p>

            
          </div>
        )}
      </div>
    </div>
  );
}

export default ProcedureModal;

