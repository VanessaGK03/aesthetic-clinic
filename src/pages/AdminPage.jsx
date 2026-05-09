

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css";

function AdminPage() {
  const navigate = useNavigate();

  // DEMO DATA
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Maria Ivanova",
      procedure: "Botox",
      date: "2026-04-20",
      time: "10:00",
    },
    {
      id: 2,
      doctor: "Dr. Maria Ivanova",
      procedure: "Laser Hair Removal",
      date: "2026-04-20",
      time: "11:00",
    },
    {
      id: 3,
      doctor: "Dr. Emilia Georgieva",
      procedure: "Lip Fillers",
      date: "2026-04-22",
      time: "13:00",
    },
  ]);

  const [editData, setEditData] = useState(null);

  // login protection
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin !== "true") {
      navigate("/login");
    }
  }, []);

  // DELETE
  const handleDelete = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  // OPEN EDIT
  const handleEdit = (appointment) => {
    setEditData({ ...appointment });
  };

  // SAVE EDIT
  const saveEdit = () => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === editData.id
          ? editData
          : appointment
      )
    );

    setEditData(null);
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>

      <button
        className="btn btn-primary"
        onClick={() => {
          localStorage.removeItem("isAdmin");
          navigate("/");
        }}
      >
        Logout
      </button>

      {/* grouped by doctor */}
      {Array.from(
        new Set(appointments.map((a) => a.doctor))
      ).map((doctor) => (
        <div className="doctor-card" key={doctor}>
          <h2>{doctor}</h2>

          {appointments
            .filter((a) => a.doctor === doctor)
            .map((appointment) => (
              <div className="booking-row" key={appointment.id}>
                <span>{appointment.date}</span>

                <span>{appointment.time}</span>

                <span>{appointment.procedure}</span>

                <button
                  className="btn edit"
                  onClick={() => handleEdit(appointment)}
                >
                  Edit
                </button>

                <button
                  className="btn delete"
                  onClick={() =>
                    handleDelete(appointment.id)
                  }
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      ))}

      {/* EDIT MODAL */}
      {editData && (
        <div className="edit-modal">
          <div className="edit-box">
            <h3>Edit Appointment</h3>

            <input
              type="date"
              value={editData.date}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  date: e.target.value,
                })
              }
            />

            <input
              type="time"
              value={editData.time}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  time: e.target.value,
                })
              }
            />

            <button
              className="btn btn-primary"
              onClick={saveEdit}
            >
              Save
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setEditData(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
