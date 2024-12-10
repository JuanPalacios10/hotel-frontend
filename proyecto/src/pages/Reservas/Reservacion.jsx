import { Banner } from '../../components/Banner';
import hreservas from '../../assets/images/reservas/hreservas.webp';
import { BookingForm } from '../../components/BookingForm';

export function Reservas() {
  return (
    <main>
      <Banner imgUrl={hreservas}>Reservas</Banner>
      <BookingForm />
    </main>
  );
}
