import { Banner } from '../../components/Banner'
import { TituloTexto } from '../../components/TituloTexto'
import hnormas from '../../assets/images/normas/hnormas.jpg'

export function Normas() {
  return (
    <>
      <Banner imgUrl={hnormas}>Normas</Banner>
      <main>
        <TituloTexto
          classTitle="text-title"
          title="Normas del Hotel"
          text="En el hotel El Buen Vivir, nuestro principal objetivo es brindar a cada huésped una experiencia inolvidable,
        llena de comodidad, tranquilidad y excelencia en el servicio. Para lograrlo, es fundamental que todos
        respeten las siguientes normas, diseñadas para garantizar una estancia placentera para todos."
        />
        <TituloTexto
          classTitle="text-title"
          title="Check-In"
          text="Horario de Check-In: Desde las 15:00 horas. Al momento del registro, se requiere una identificación oficial 
        y una tarjeta de crédito válida."
        />
        <TituloTexto
          classTitle="text-title"
          title="Check-Out"
          text="Horario de Check-Out: Hasta las 13:00 horas.
        Por favor, asegúrese de cumplir con los horarios establecidos para evitar cargos adicionales. 
        Si necesita realizar un check-out tardío, comuníquese con la recepción con anticipación, sujeto a disponibilidad."
        />
        <TituloTexto
          classTitle="text-title"
          title="Metodos de pago"
          text="Se aceptan las siguientes tarjetas de crédito: Mastercard, Visa, Diners Club y American Express. 
        El hotel se reserva el derecho de realizar una preautorización en la tarjeta proporcionada para garantizar la reserva."
        />
        <TituloTexto
          classTitle="text-title"
          title="Politica de mascotas"
          text="Por motivos de higiene, seguridad y para garantizar la comodidad de todos nuestros huéspedes, no se permite el ingreso de mascotas 
        en las instalaciones del hotel. Esta política nos ayuda a mantener un entorno limpio y a prevenir posibles inconvenientes o riesgos para 
        otros huéspedes. Agradecemos su comprensión y cooperación para preservar la calidad de nuestra estancia"
        />
        <TituloTexto
          classTitle="text-title"
          title="Politica de privacidad"
          text="El Hotel El Buen Vivir valora la privacidad de sus huéspedes. Los datos personales recopilados durante 
        la reserva y estancia se utilizarán exclusivamente para fines administrativos y promocionales del hotel, 
        respetando la normativa vigente en protección de datos. No se compartirán datos personales con terceros sin consentimiento previo."
        />
        <TituloTexto
          classTitle="text-title"
          title="Política de Tratamiento de Datos en Videovigilancia"
          text="En cumplimiento de lo preceptuado por la ley 1581 de 2012 y su decreto reglamentario no. 1377 de 2013, sobre 
        el tratamiento de datos personales con fines de vigilancia a través de sistemas de cámaras o videocámaras, le 
        informamos que sus datos de carácter personal, eventualmente serán grabados por nuestras cámaras de video 
        vigilancia, cuya ubicación se encuentra debidamente identificada, con el único efecto de garantizar la 
        seguridad de nuestras instalaciones."
        />
        <TituloTexto
          classTitle="text-title"
          title="Politica de cancelación"
          text="Las cancelaciones realizadas hasta dos horas del momento de la reserva no tendrán cargos adicionales. En caso 
        de no presentarse o cancelar fuera del plazo, se aplicará un cargo correspondiente a la primera noche de estancia."
        />
        <TituloTexto
          classTitle="text-title"
          title="Uso de las instalaciones"
          text="El acceso a áreas comunes como piscina, gimnasio y zonas recreativas está permitido únicamente a huéspedes 
        registrados. Se prohíbe el consumo de bebidas alcohólicas y alimentos en áreas no designadas."
        />
        <TituloTexto
          classTitle="text-title"
          title="Seguridad y responsabilidad"
          text="El hotel no se hace responsable por objetos de valor no depositados en las cajas fuertes disponibles en cada habitación.
        En caso de emergencia, siga las indicaciones del personal y los protocolos establecidos para evacuaciones."
        />
        <TituloTexto
          classTitle="text-title"
          title="Normas de convivencia"
          text="Mantenga el volumen moderado de dispositivos electrónicos en las habitaciones y áreas comunes.
        Está prohibido fumar en cualquier área cerrada del hotel.Se solicita a todos los huéspedes evitar conductas invasivas o ruidosas que puedan incomodar a otros. 
        El personal del hotel está disponible para mediar en cualquier situación que comprometa la tranquilidad de la estancia."
        />
      </main>
    </>
  )
}