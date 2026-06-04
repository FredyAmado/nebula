"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, CheckCircle, ChevronRight, Star, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Carrusel from "@/components/Carrusel";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Precios", href: "#precios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  {
    title: "Desarrollo Web",
    desc: "Sitios corporativos, landing pages y aplicaciones web modernas con Next.js y Tailwind.",
    icon: "🌐",
  },
  {
    title: "Automatización",
    desc: "Optimiza procesos administrativos con flujos inteligentes que ahorran tiempo y recursos.",
    icon: "⚡",
  },
  {
    title: "Consultoría TI",
    desc: "Asesoramiento técnico para elegir las mejores herramientas y estrategias digitales.",
    icon: "💡",
  },
  {
    title: "Diseño UX/UI",
    desc: "Interfaces limpias, accesibles y centradas en el usuario para maximizar conversiones.",
    icon: "🎨",
  },
  {
    title: "SEO & Marketing",
    desc: "Posiciona tu negocio en los buscadores y atrae más clientes con estrategias digitales.",
    icon: "📈",
  },
  {
    title: "Soporte Técnico",
    desc: "Mantenimiento continuo, actualizaciones y soporte para mantener tu sitio siempre activo.",
    icon: "🔧",
  },
];

const portfolio = [
  {
    title: "TechCorp",
    category: "Desarrollo Web",
    desc: "Sitio corporativo completo con blog, panel de administración y optimización SEO.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/project-techcorp.png",
  },
  {
    title: "ShopNow",
    category: "E-commerce",
    desc: "Tienda en línea con carrito de compras, pasarela de pagos y panel de inventario.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/project-shopnow.png",
  },
  {
    title: "Innova",
    category: "Automatización",
    desc: "Sistema de automatización de procesos administrativos con IA y reporting en tiempo real.",
    tags: ["Python", "IA", "APIs"],
    image: "/project-innova.png",
  },
  {
    title: "FlowStack",
    category: "Plataforma SaaS",
    desc: "Plataforma de automatización con flujos visuales, integraciones y analytics avanzados.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/project-flowstack.png",
  },
];

const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "30+", label: "Clientes satisfechos" },
  { value: "5+", label: "Años de experiencia" },
  { value: "98%", label: "Satisfacción" },
];

const team = [
  {
    name: "Fredy Amado",
    role: "Fundador & Desarrollador Full Stack",
    desc: "Especialista en Next.js, React y automatización con IA. Creador de múltiples herramientas CLI.",
    initials: "FA",
  },
  {
    name: "Ana Rodríguez",
    role: "Diseñadora UX/UI",
    desc: "Apasionada por crear interfaces limpias, accesibles y centradas en el usuario.",
    initials: "AR",
  },
  {
    name: "Carlos Mendoza",
    role: "Ingeniero de Software",
    desc: "Experto en backend, bases de datos y arquitectura de sistemas escalables.",
    initials: "CM",
  },
  {
    name: "Laura Gutiérrez",
    role: "Especialista en Marketing",
    desc: "Estrategias SEO, SEM y content marketing para impulsar tu presencia digital.",
    initials: "LG",
  },
];

const testimonials = [
  {
    name: "María García",
    role: "CEO, TechCorp",
    text: "Transformaron nuestra presencia digital por completo. El sitio superó todas nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Carlos López",
    role: "Director de Marketing, Innova",
    text: "Profesionales, rápidos y con un ojo increíble para el diseño. Altamente recomendados.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, ShopNow",
    text: "La automatización de nuestros procesos nos ahorró horas de trabajo cada semana. Increíble resultado.",
    rating: 5,
  },
];

const steps = [
  { number: "01", title: "Diagnóstico", desc: "Analizamos tus necesidades y objetivos para entender tu negocio." },
  { number: "02", title: "Propuesta", desc: "Diseñamos una solución a medida con alcance, tiempos y presupuesto." },
  { number: "03", title: "Desarrollo", desc: "Construimos tu proyecto con metodologías ágiles y entregas iterativas." },
  { number: "04", title: "Lanzamiento", desc: "Desplegamos, probamos y ponemos en marcha tu solución." },
  { number: "05", title: "Soporte", desc: "Acompañamiento continuo para garantizar el éxito a largo plazo." },
];

const plans = [
  {
    name: "Básico",
    price: "$499",
    desc: "Perfecto para emprendimientos que inician su presencia digital.",
    features: [
      "Sitio web de 3 páginas",
      "Diseño responsive",
      "Formulario de contacto",
      "SEO básico",
      "Hosting 1 año",
    ],
    popular: false,
  },
  {
    name: "Profesional",
    price: "$1,299",
    desc: "Ideal para empresas que buscan una solución completa.",
    features: [
      "Sitio web de 5 páginas",
      "Diseño UX/UI personalizado",
      "Panel administrador",
      "SEO avanzado",
      "Integración redes sociales",
      "Soporte 3 meses",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    desc: "Para proyectos grandes con necesidades específicas.",
    features: [
      "Sitio web ilimitado en páginas",
      "Automatización de procesos",
      "Sistema a medida",
      "API e integraciones",
      "Consultoría dedicada",
      "Soporte prioritario 24/7",
    ],
    popular: false,
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple">
              <span className="text-sm font-bold text-white">N</span>
            </div>
              <span className="text-lg font-bold text-white">Nebula</span>
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
              <a href="#contacto" className="rounded-lg bg-purple px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-light">
                Contáctanos
              </a>
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white md:hidden">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {mobileOpen && (
            <div className="border-t border-white/10 bg-black px-4 py-4 md:hidden">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                ))}
                <a href="#contacto" onClick={() => setMobileOpen(false)} className="rounded-lg bg-purple px-5 py-2 text-center text-sm font-semibold text-white">
                  Contáctanos
                </a>
              </div>
            </div>
          )}
        </nav>

      {/* Hero */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/hero-banner.png)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark/80 via-black/70 to-black" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block rounded-full border border-purple/30 bg-purple/10 px-4 py-1 text-sm text-purple-light">
            Transformación digital para tu negocio
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Creamos soluciones digitales{" "}
            <span className="text-purple">que impulsan tu negocio</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Desarrollo web, automatización de procesos y consultoría TI. Ayudamos a empresas como la tuya a crecer con tecnología inteligente.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contacto" className="flex items-center gap-2 rounded-lg bg-purple px-8 py-3 text-base font-semibold text-white transition-all hover:bg-purple-light">
              Solicita una cotización
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicios" className="flex items-center gap-2 rounded-lg border border-zinc-700 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-zinc-800">
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto max-w-2xl text-zinc-600">
              Ofrecemos soluciones completas de tecnología y diseño para impulsar tu presencia digital.
            </p>
          </div>
          <Carrusel slides={services} />
        </div>
      </section>

      {/* Portfolio */}
      <section id="portafolio" className="bg-zinc-50 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Portafolio</h2>
            <p className="mx-auto max-w-2xl text-zinc-600">
              Proyectos que hablan por sí solos. Cada trabajo refleja nuestro compromiso con la calidad.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {portfolio.map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:shadow-lg">
                <div className="relative flex h-48 items-center justify-center bg-zinc-900 p-6">
                  <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${project.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="relative z-10 text-3xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-purple/10 px-3 py-1 text-xs font-medium text-purple">
                    {project.category}
                  </span>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-600">{project.desc}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contacto" className="inline-flex items-center gap-1 text-sm font-semibold text-purple transition-colors hover:text-purple-light">
                    Ver proyecto <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Planes y Precios</h2>
            <p className="mx-auto max-w-2xl text-zinc-600">
              Elige el plan que mejor se adapte a las necesidades de tu proyecto.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:shadow-lg ${
                plan.popular
                  ? "border-purple bg-purple text-white shadow-lg shadow-purple/20 scale-105 md:scale-110"
                  : "border-zinc-200 bg-white text-black"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow px-4 py-1 text-xs font-bold text-black">
                    Más popular
                  </div>
                )}
                <h3 className={`mb-1 text-xl font-bold ${plan.popular ? "text-white" : "text-black"}`}>{plan.name}</h3>
                <p className={`mb-4 text-sm ${plan.popular ? "text-white/80" : "text-zinc-500"}`}>{plan.desc}</p>
                <div className={`mb-6 text-4xl font-bold ${plan.popular ? "text-white" : "text-black"}`}>
                  {plan.price}
                  {plan.price !== "Personalizado" && <span className="text-lg font-normal text-zinc-400">/proyecto</span>}
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${plan.popular ? "text-yellow" : "text-purple"}`} />
                      <span className={plan.popular ? "text-white/90" : "text-zinc-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-purple hover:bg-zinc-100"
                      : "bg-purple text-white hover:bg-purple-light"
                  }`}
                >
                  {plan.price === "Personalizado" ? "Cotizar ahora" : "Contratar"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section id="nosotros" className="bg-black px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Por qué elegirnos</h2>
            <p className="mx-auto max-w-2xl text-zinc-400">
              Combinamos experiencia técnica con un enfoque centrado en el cliente para entregar resultados excepcionales.
            </p>
          </div>
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Expertos en tecnología moderna</h3>
              <p className="leading-relaxed text-zinc-400">
                Usamos las herramientas más avanzadas del mercado: Next.js, React, TypeScript, automatización con IA y más.
                Cada proyecto es construido con estándares de calidad empresarial.
              </p>
              <ul className="space-y-2">
                {["Desarrollo ágil con entregas rápidas", "Diseño responsive y accesible", "Soporte técnico continuo"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Nuestra filosofía</h3>
              <p className="leading-relaxed text-zinc-400">
                Creemos en la tecnología como herramienta para liberar el potencial humano. Cada línea de código, cada
                píxel y cada flujo de trabajo está diseñado para hacer tu vida más fácil y tu negocio más eficiente.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <div className="text-3xl font-bold text-purple md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Nuestro Equipo</h2>
            <p className="mx-auto max-w-2xl text-zinc-600">
              Conoce a las personas detrás de Nebula. Un equipo apasionado por la tecnología y el diseño.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="group rounded-xl border border-zinc-200 bg-white p-6 text-center transition-all hover:border-purple/30 hover:shadow-lg hover:shadow-purple/5">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple to-purple-light text-2xl font-bold text-white shadow-md">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                <p className="mb-2 text-sm font-medium text-purple">{member.role}</p>
                <p className="text-sm leading-relaxed text-zinc-500">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="bg-zinc-50 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Cómo trabajamos</h2>
            <p className="mx-auto max-w-2xl text-zinc-600">
              Un proceso transparente y probado para llevar tu proyecto de la idea a la realidad.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-zinc-200 md:block" />
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="relative flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple text-sm font-bold text-white md:z-10">
                    {step.number}
                  </div>
                  <div className="flex-1 rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-purple/30">
                    <h3 className="mb-1 text-lg font-semibold text-black">{step.title}</h3>
                    <p className="text-sm text-zinc-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Lo que dicen nuestros clientes</h2>
            <p className="mx-auto max-w-2xl text-zinc-600">
              La satisfacción de nuestros clientes habla por sí sola.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-zinc-200 bg-white p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-purple text-purple" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-zinc-100 pt-4">
                  <div className="text-sm font-semibold text-black">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-lg bg-purple px-8 py-3 text-base font-semibold text-white transition-all hover:bg-purple-light">
            Solicita una cotización gratis
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Contáctanos</h2>
            <p className="mx-auto max-w-2xl text-zinc-600">
              Estamos listos para escuchar tu proyecto. Déjanos un mensaje y te responderemos a la brevedad.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple/10">
                  <Mail className="h-5 w-5 text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <p className="text-sm text-zinc-600">contacto@nebula.agencia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple/10">
                  <Phone className="h-5 w-5 text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Teléfono</h4>
                  <p className="text-sm text-zinc-600">+57 1 234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple/10">
                  <MapPin className="h-5 w-5 text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Ubicación</h4>
                  <p className="text-sm text-zinc-600">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-lg font-bold text-white">Nebula</span>
            </div>
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-zinc-500 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-sm text-zinc-600">
              &copy; {new Date().getFullYear()} Nebula. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 p-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
        <h3 className="mb-2 text-xl font-semibold text-green-800">¡Mensaje enviado!</h3>
        <p className="text-green-700">Te contactaremos pronto. Gracias por tu interés.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-black">Nombre</label>
          <input id="name" required className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-black">Email</label>
          <input id="email" type="email" required className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" placeholder="tu@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-black">Teléfono</label>
        <input id="phone" type="tel" className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" placeholder="+57 300 123 4567" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-black">Mensaje</label>
        <textarea id="message" rows={4} required className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" placeholder="Cuéntanos sobre tu proyecto..." />
      </div>
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-light">
        Enviar mensaje
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
