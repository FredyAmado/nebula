import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Nebula",
  description: "Aviso de privacidad y política de tratamiento de datos personales de Nebula. Cumplimiento Ley 1581 de 2012 y Habeas Data en Colombia.",
};

export default function AvisoPrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <Link href="/" className="mb-8 inline-flex items-center gap-1 text-sm text-purple hover:text-purple-light transition-colors">
          ← Volver al inicio
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-black md:text-4xl">Aviso de Privacidad</h1>
        <p className="mb-2 text-sm text-zinc-500">Última actualización: 18 de junio de 2026</p>
        <p className="mb-8 text-sm text-zinc-500">
          En cumplimiento de la Ley Estatutaria 1581 de 2012 y sus decretos reglamentarios.
        </p>

        <div className="prose prose-zinc max-w-none space-y-6 text-zinc-700">
          <section>
            <h2 className="text-xl font-semibold text-black">1. Responsable del Tratamiento</h2>
            <p>
              <strong>Nebula</strong> (en adelante, &ldquo;Nebula&rdquo;), agencia de desarrollo web y marketing digital,
              es la responsable del tratamiento de sus datos personales. Ponemos a su disposición los siguientes datos:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><strong>Nombre comercial:</strong> Nebula Agencia de Marketing Digital</li>
              <li><strong>Correo electrónico:</strong> contacto@nebula.agencia</li>
              <li><strong>Ubicación:</strong> Bogotá, Colombia</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">2. Datos Personales que Recolectamos</h2>
            <p>Podremos recolectar los siguientes datos personales cuando usted interactúa con nuestro sitio web o servicios:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Mensaje o consulta enviada a través de nuestro formulario de contacto</li>
              <li>Datos de navegación (dirección IP, tipo de navegador, páginas visitadas) mediante cookies y tecnologías similares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">3. Finalidades del Tratamiento</h2>
            <p>Sus datos personales serán tratados con las siguientes finalidades:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Responder a sus consultas, solicitudes de información y cotizaciones</li>
              <li>Gestionar la relación comercial y contractual con nuestros clientes</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios, promociones y novedades (previa autorización)</li>
              <li>Mejorar nuestro sitio web y la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales y regulatorias aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">4. Base Legal del Tratamiento — Su Consentimiento</h2>
            <p>
              El tratamiento de sus datos personales se fundamenta en <strong>su consentimiento previo, expreso e informado</strong>,
              tal como lo exige el artículo 9 de la Ley 1581 de 2012.
            </p>
            <p>
              Al marcar la casilla de aceptación en nuestro formulario de contacto, usted declara de manera libre, voluntaria y 
              explícita que ha leído y comprendido este Aviso de Privacidad, y nos autoriza a tratar sus datos personales 
              para las finalidades aquí descritas.
            </p>
            <p>
              Usted puede retirar su consentimiento en cualquier momento mediante solicitud escrita al correo 
              contacto@nebula.agencia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">5. Derechos del Titular (Derechos ARCO)</h2>
            <p>
              De conformidad con la Ley 1581 de 2012 y el artículo 15 de la Constitución Política de Colombia, 
              usted tiene los siguientes derechos como titular de sus datos personales:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted y para qué han sido tratados</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos, incompletos o desactualizados</li>
              <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios para las finalidades que motivaron su recolección</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos</li>
              <li><strong>Revocación:</strong> Revocar la autorización otorgada para el tratamiento de sus datos</li>
            </ul>
            <p className="mt-2">
              Para ejercer cualquiera de estos derechos, envíe su solicitud al correo <strong>contacto@nebula.agencia</strong> 
              indicando el derecho que desea ejercer, su nombre completo y los datos de identificación correspondientes. 
              Daremos respuesta en un plazo máximo de <strong>15 días hábiles</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">6. Conservación de los Datos</h2>
            <p>
              Conservaremos sus datos personales durante el tiempo necesario para cumplir las finalidades descritas en este 
              aviso de privacidad, o mientras exista una obligación legal que lo requiera. Una vez que ya no sean necesarios, 
              procederemos a su eliminación segura de acuerdo con nuestras políticas internas de gestión documental.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">7. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra 
              el acceso no autorizado, la pérdida, el uso indebido o la alteración, de conformidad con los principios de 
              seguridad y confidencialidad establecidos en la Ley 1581 de 2012.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">8. Transferencia de Datos a Terceros</h2>
            <p>
              No compartimos sus datos personales con terceros sin su autorización, excepto cuando sea necesario para:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Cumplir con una obligación legal o requerimiento de autoridad competente</li>
              <li>Proteger nuestros derechos o intereses legítimos</li>
              <li>Prestar servicios a través de proveedores que actúan como encargados del tratamiento (plataformas de hosting, servicios de correo electrónico) bajo nuestras instrucciones y con las debidas garantías contractuales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">9. Política de Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación, 
              analizar el tráfico del sitio y personalizar el contenido. Puede configurar su navegador para rechazar 
              todas las cookies o para indicar cuándo se está enviando una cookie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">10. Cambios a este Aviso de Privacidad</h2>
            <p>
              Nos reservamos el derecho de actualizar o modificar este aviso de privacidad en cualquier momento. 
              Le notificaremos sobre cambios significativos a través de nuestro sitio web. 
              Le recomendamos revisar esta página periódicamente para mantenerse informado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">11. Contacto</h2>
            <p>
              Si tiene preguntas, inquietudes o deseas ejercer sus derechos ARCO con relación a este aviso de privacidad 
              o al tratamiento de sus datos personales, puede contactarnos en:
            </p>
            <p className="mt-2">
              <strong>Correo electrónico:</strong> contacto@nebula.agencia<br />
              <strong>Ubicación:</strong> Bogotá, Colombia<br />
              <strong>Página web:</strong> <Link href="/" className="text-purple hover:text-purple-light">nebula.agencia</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
