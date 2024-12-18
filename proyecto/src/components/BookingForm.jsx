import { useState, useRef, useEffect } from 'react'
import styles from '../styles/bookingform.module.css'
import axios from 'axios'

export const BookingForm = () => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [showOccupancy, setShowOccupancy] = useState(false)
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  const occupancyRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (occupancyRef.current && !occupancyRef.current.contains(event.target)) {
        setShowOccupancy(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearch = async (event) => {
    event.preventDefault()

    try {
      const res = await axios.get(
        `http://localhost:8000/buscar_disponibilidad/?fecha_entrada=${checkIn}&fecha_salida=${checkOut}&habitaciones=${rooms}`
      )
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className={styles.bookingForm} onSubmit={handleSearch}>
      <label className={styles.label}>
        Check-in:
        <input
          type="date"
          className={styles.input}
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </label>

      <label className={styles.label}>
        Check-out:
        <input
          type="date"
          className={styles.input}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </label>

      <div className={styles.occupancyWrapper} ref={occupancyRef}>
        <button className={styles.toggleButton} onClick={() => setShowOccupancy(!showOccupancy)}>
          Habitaciones
        </button>
        {showOccupancy && (
          <div className={styles.occupancySection}>
            <label className={styles.label}>
              Habitaciones:
              <input
                type="number"
                className={styles.input}
                min="1"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </label>
            <label className={styles.label}>
              Adultos:
              <input
                type="number"
                className={styles.input}
                min="1"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
              />
            </label>
            <label className={styles.label}>
              Niños:
              <input
                type="number"
                className={styles.input}
                min="0"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              />
            </label>
          </div>
        )}
      </div>

      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </form>
  )
}
