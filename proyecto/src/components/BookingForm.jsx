import { useState } from 'react'
import styles from '../styles/bookingform.module.css'

export const BookingForm = () => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  const today = new Date().toISOString().split('T')[0]

  const handleCheckInChange = (value) => {
    setCheckIn(value)
    if (checkOut && new Date(value) > new Date(checkOut)) {
      setCheckOut(value)
    }
  }

  const handleCheckOutChange = (value) => {
    if (checkIn && new Date(value) < new Date(checkIn)) {
      setCheckOut(checkIn)
      setCheckIn(value)
    } else {
      setCheckOut(value)
    }
  }

  const handleSearch = () => {
    alert(`Buscando habitaciones:
      Fecha de entrada: ${checkIn}
      Fecha de salida: ${checkOut}
      Habitaciones: ${rooms}
      Adultos: ${adults}
      Niños: ${children}`)
  }

  return (
    <div className={styles.bookingForm}>
      <div className={styles.dateSection}>
        <label className={styles.label}>
          Fecha de entrada:
          <input
            type="date"
            value={checkIn}
            onChange={(e) => handleCheckInChange(e.target.value)}
            min={today}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Fecha de salida:
          <input
            type="date"
            value={checkOut}
            onChange={(e) => handleCheckOutChange(e.target.value)}
            min={checkIn || today}
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.occupancySection}>
        <label className={styles.label}>
          Adultos:
          <input
            type="number"
            min="1"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Niños:
          <input
            type="number"
            min="0"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Habitaciones:
          <input
            type="number"
            min="1"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.summary}>
        <p>Fecha de entrada: {checkIn || 'No seleccionada'}</p>
        <p>Fecha de salida: {checkOut || 'No seleccionada'}</p>
        <p>Habitaciones: {rooms}</p>
        <p>Adultos: {adults}</p>
        <p>Niños: {children}</p>
      </div>

      <button className={styles.searchButton} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  )
}
