import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Nebula",
  description: "Términos y condiciones de uso del sitio web nebula.agencia y los servicios de Nebula Agencia de Desarrollo Web.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <Link href="/" className="mb-8 inline-flex items-center gap-1 text-sm text-purple hover:text-purple-light transition-colors">
          ← Volver al inicio
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-black md:text-4xl">Términos y Condiciones</h1>
        <p className="mb-8 text-sm text-zinc-500">Última actualización: 18 de junio de 2026</p>

        <div className="prose prose-zinc max-w-none space-y-6 text-zinc-700">
          <section>
            <h2 className="text-xl font-semibold text-black">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web nebula.agencia (en adelante, el &ldquo;Sitio&rdquo;) y/o contratar los servicios de Nebula 
              (en adelante, &ldquo;Nebula&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;), usted acepta estar sujeto a los presentes 
              Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice el Sitio ni contrate nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">2. Descripción de los Servicios</h2>
            <p>
              Nebula ofrece servicios de desarrollo web, automatización de procesos, consultoría TI, diseño UX/UI, 
              SEO y marketing digital, y soporte técnico. Los alcances, plazos y costos de cada servicio se definirán 
              en una propuesta o contrato específico para cada cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido del Sitio, incluyendo pero no limitado a textos, imágenes, logotipos, diseños, código fuente, 
              y materiales, es propiedad de Nebula o de sus licenciantes y está protegido por las leyes de propiedad intelectual.
            </p>
            <p className="mt-2">
              El código, diseño y activos digitales desarrollados por Nebula para un cliente serán de propiedad del cliente 
              una vez que se haya completado el pago total acordado, salvo acuerdo en contrario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">4. Obligaciones del Usuario</h2>
            <p>Al utilizar nuestro Sitio y servicios, usted se compromete a:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Proporcionar información veraz y actualizada cuando sea requerida</li>
              <li>No utilizar el Sitio para fines ilícitos o no autorizados</li>
              <li>No intentar acceder a áreas restringidas del Sitio sin autorización</li>
              <li>No reproducir, distribuir o modificar el contenido del Sitio sin nuestro consentimiento</li>
              <li>Cumplir con los plazos de pago acordados en los contratos de servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">5. Limitación de Responsabilidad</h2>
            <p>
              Nebula no será responsable por daños indirectos, incidentales o consecuentes que puedan surgir del uso o la 
              imposibilidad de uso del Sitio o de los servicios contratados. Nuestra responsabilidad máxima se limita al 
              monto total pagado por el servicio en cuestión.
            </p>
            <p className="mt-2">
              No garantizamos que el Sitio esté libre de errores, virus o componentes dañinos. El usuario asume la 
              responsabilidad de implementar medidas de seguridad adecuadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">6. Garantías</h2>
            <p>
              Ofrecemos una garantía de 30 días posteriores a la entrega del proyecto para corregir errores de 
              funcionamiento no atribuibles a modificaciones realizadas por el cliente o a causas de fuerza mayor. 
              Esta garantía no cubre cambios de alcance, nuevas funcionalidades o mantenimiento continuo, los cuales 
              podrán ser contratados por separado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">7. Política de Pagos</h2>
            <p>
              Las condiciones de pago se establecerán en la propuesta o contrato de servicios. Los pagos pueden realizarse 
              mediante transferencia bancaria, consignación o los medios de pago acordados. El incumplimiento de los plazos 
              de pago podrá resultar en la suspensión de los servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">8. Enlaces a Terceros</h2>
            <p>
              El Sitio puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido o las prácticas 
              de privacidad de dichos sitios y no asumimos responsabilidad alguna por ellos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en el Sitio. 
              Le recomendamos revisar esta página periódicamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">10. Legislación Aplicable</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. 
              Cualquier controversia que surja en relación con estos términos será sometida a la jurisdicción de los 
              tribunales de Bogotá, Colombia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">11. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactarnos en:
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
