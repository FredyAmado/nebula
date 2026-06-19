import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eliminación de Datos — Nebula",
  description: "Solicitud de eliminación de datos personales de Nebula Agencia de Desarrollo Web. Ejercicio del derecho de cancelación según Ley 1581 de 2012.",
};

export default function EliminacionDatosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <Link href="/" className="mb-8 inline-flex items-center gap-1 text-sm text-purple hover:text-purple-light transition-colors">
          ← Volver al inicio
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-black md:text-4xl">Eliminación de Datos Personales</h1>
        <p className="mb-8 text-sm text-zinc-500">Última actualización: 18 de junio de 2026</p>

        <div className="prose prose-zinc max-w-none space-y-6 text-zinc-700">
          <section>
            <h2 className="text-xl font-semibold text-black">Derecho de Cancelación</h2>
            <p>
              De conformidad con la Ley 1581 de 2012 de Colombia y el Reglamento General de Protección de Datos (RGPD) 
              de la Unión Europea, usted tiene derecho a solicitar la eliminación (cancelación) de sus datos personales 
              cuando estos ya no sean necesarios para las finalidades que motivaron su recolección, o cuando haya retirado 
              su consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">¿Cómo solicitar la eliminación de sus datos?</h2>
            <p>Para ejercer su derecho de eliminación de datos, siga estos pasos:</p>
            <ol className="mt-2 list-decimal pl-6 space-y-2">
              <li>
                <strong>Envíe un correo electrónico</strong> a <strong>contacto@nebula.agencia</strong> con el asunto: 
                &ldquo;Solicitud de Eliminación de Datos&rdquo;
              </li>
              <li>
                <strong>Incluya en el correo:</strong>
                <ul className="mt-1 list-disc pl-6 space-y-1">
                  <li>Su nombre completo</li>
                  <li>El correo electrónico que utilizó para contactarnos</li>
                  <li>Una descripción clara de los datos que desea eliminar</li>
                  <li>Una declaración voluntaria indicando que solicita la eliminación de sus datos personales</li>
                </ul>
              </li>
              <li>
                <strong>Verificación de identidad:</strong> Es posible que le solicitemos información adicional para 
                confirmar su identidad antes de procesar su solicitud. Esto es una medida de seguridad para proteger 
                sus datos contra accesos no autorizados.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">Plazo de Respuesta</h2>
            <p>
              Una vez recibida y verificada su solicitud, procederemos a eliminar sus datos personales en un plazo 
              máximo de <strong>15 días hábiles</strong>. Le confirmaremos por correo electrónico cuando la eliminación 
              haya sido completada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">Excepciones</h2>
            <p>
              En algunos casos, podemos estar obligados legalmente a conservar ciertos datos incluso después de su 
              solicitud de eliminación. Esto incluye:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Datos necesarios para cumplir con obligaciones fiscales, contables o legales</li>
              <li>Datos requeridos para la defensa de reclamaciones legales</li>
              <li>Datos necesarios para la ejecución de un contrato vigente</li>
            </ul>
            <p className="mt-2">
              En caso de que no podamos eliminar algún dato debido a estas excepciones, le informaremos 
              detalladamente las razones y el plazo de conservación estimado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">Eliminación de Datos en Aplicaciones de Terceros</h2>
            <p>
              Si usted ha interactuado con Nebula a través de aplicaciones o plataformas de terceros (WhatsApp, 
              redes sociales, etc.), tenga en cuenta que la eliminación de sus datos en dichas plataformas debe 
              gestionarse directamente a través de los mecanismos que estas ofrecen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">Datos del Responsable</h2>
            <p>
              <strong>Nebula</strong><br />
              <strong>Correo electrónico:</strong> contacto@nebula.agencia<br />
              <strong>Ubicación:</strong> Bogotá, Colombia
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
