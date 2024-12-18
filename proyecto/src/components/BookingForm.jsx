import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/bookingform.module.css";

export const BookingForm = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showOccupancy, setShowOccupancy] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const occupancyRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (occupancyRef.current && !occupancyRef.current.contains(event.target)) {
        setShowOccupancy(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    alert(`Buscando habitaciones:
    Fecha de entrada: ${checkIn}
    Fecha de salida: ${checkOut}
    Habitaciones: ${rooms}
    Adultos: ${adults}
    Niños: ${children}`);
  };
  

  return (
    <div className={styles.bookingForm}>
      <label>
        Check-in:
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </label>

      <label>
        Check-out:
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </label>

      <div className={styles.occupancyWrapper} ref={occupancyRef}>
        <button
          className={styles.toggleButton}
          onClick={() => setShowOccupancy(!showOccupancy)}
        >
          Habitaciones
        </button>
        {showOccupancy && (
          <div className={styles.occupancySection}>
            <label>
              Habitaciones:
              <input
                type="number"
                min="1"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </label>
            <label>
              Adultos:
              <input
                type="number"
                min="1"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
              />
            </label>
            <label>
              Niños:
              <input
                type="number"
                min="0"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              />
            </label>
          </div>
        )}
      </div>

      <button className={styles.searchButton} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};