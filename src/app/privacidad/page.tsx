import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Nebula",
  description: "Política de privacidad de Nebula Agencia de Desarrollo Web. Protección de datos personales según Ley 1581 de 2012 (Colombia) y RGPD.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <Link href="/" className="mb-8 inline-flex items-center gap-1 text-sm text-purple hover:text-purple-light transition-colors">
          ← Volver al inicio
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-black md:text-4xl">Política de Privacidad</h1>
        <p className="mb-8 text-sm text-zinc-500">Última actualización: 18 de junio de 2026</p>

        <div className="prose prose-zinc max-w-none space-y-6 text-zinc-700">
          <section>
            <h2 className="text-xl font-semibold text-black">1. Responsable del Tratamiento</h2>
            <p>
              Nebula (en adelante, &ldquo;Nebula&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;) es una agencia de desarrollo web con sede en Bogotá, Colombia. 
              Somos responsables del tratamiento de los datos personales que usted nos proporcione a través de nuestro sitio web nebula.agencia.
            </p>
            <p className="mt-2">
              <strong>Correo de contacto:</strong> contacto@nebula.agencia<br />
              <strong>Ubicación:</strong> Bogotá, Colombia
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">2. Datos que Recopilamos</h2>
            <p>Podemos recopilar los siguientes datos personales cuando usted utiliza nuestro sitio web o se pone en contacto con nosotros:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Mensaje o consulta enviada a través del formulario de contacto</li>
              <li>Datos de navegación (dirección IP, tipo de navegador, páginas visitadas) recopilados mediante cookies y tecnologías similares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">3. Finalidades del Tratamiento</h2>
            <p>Sus datos personales serán tratados con las siguientes finalidades:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Responder a sus consultas y solicitudes de información</li>
              <li>Enviar cotizaciones y propuestas de servicios</li>
              <li>Gestionar la relación comercial con nuestros clientes</li>
              <li>Mejorar nuestro sitio web y la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">4. Base Legal para el Tratamiento</h2>
            <p>El tratamiento de sus datos personales se fundamenta en:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Su consentimiento expreso, otorgado al aceptar esta política de privacidad</li>
              <li>La ejecución de un contrato de servicios o medidas precontractuales</li>
              <li>El interés legítimo de mejorar nuestros servicios y sitio web</li>
              <li>El cumplimiento de obligaciones legales aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">5. Derechos del Titular (ARCO)</h2>
            <p>De conformidad con la Ley 1581 de 2012 de Colombia y el Reglamento General de Protección de Datos (RGPD) de la Unión Europea, usted tiene los siguientes derechos:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
              <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos</li>
              <li><strong>Portabilidad:</strong> Solicitar la entrega de sus datos en un formato estructurado</li>
            </ul>
            <p className="mt-2">
              Para ejercer cualquiera de estos derechos, envíenos un correo a <strong>contacto@nebula.agencia</strong> indicando el derecho que desea ejercer y sus datos de identificación. Responderemos su solicitud en un plazo máximo de 15 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">6. Conservación de los Datos</h2>
            <p>
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en esta política, 
              o mientras exista una obligación legal que lo requiera. Una vez que ya no sean necesarios, procederemos a su eliminación segura.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">7. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra 
              el acceso no autorizado, la pérdida, el uso indebido o la alteración. Sin embargo, ningún sistema de seguridad 
              es completamente infalible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">8. Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación. 
              Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando una cookie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">9. Transferencia de Datos a Terceros</h2>
            <p>
              No compartimos sus datos personales con terceros, excepto cuando sea necesario para cumplir con una obligación legal, 
              proteger nuestros derechos, o con proveedores de servicios que actúan como encargados del tratamiento (plataformas de 
              hosting, servicios de correo electrónico) bajo nuestras instrucciones y con las debidas garantías.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">10. Cambios a esta Política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
              Le notificaremos sobre cambios significativos a través de nuestro sitio web. Le recomendamos revisar esta página periódicamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">11. Contacto</h2>
            <p>
              Si tiene preguntas, inquietudes o solicitudes relacionadas con esta política de privacidad o el tratamiento de sus datos personales, 
              puede contactarnos en:
            </p>
            <p className="mt-2">
              <strong>Correo electrónico:</strong> contacto@nebula.agencia<br />
              <strong>Ubicación:</strong> Bogotá, Colombia
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
