"use client";

import { useState } from "react";
import Link from "next/link";
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
    title: "Branding",
    desc: "Construimos la identidad visual de tu marca: logotipos, paletas de color y guías de marca.",
    icon: "✨",
  },
  {
    title: "Social Media",
    desc: "Gestión de redes sociales, contenido estratégico y community management para tu marca.",
    icon: "📱",
  },
  {
    title: "Google & Facebook Ads",
    desc: "Campañas publicitarias pagas en Google y Facebook para atraer más clientes calificados.",
    icon: "🎯",
  },
  {
    title: "Content Marketing",
    desc: "Creación de contenido estratégico: blogs, newsletters y copywriting para tu marca.",
    icon: "✍️",
  },
  {
    title: "SEO",
    desc: "Posiciona tu negocio en buscadores con estrategias de SEO técnico, on-page y contenido optimizado.",
    icon: "📈",
  },
  {
    title: "Analytics",
    desc: "Dashboards de métricas, informes de rendimiento y análisis de datos para decisiones inteligentes.",
    icon: "📊",
  },
  {
    title: "Email Marketing",
    desc: "Campañas de correo automatizadas, newsletters y embudos de conversión que venden.",
    icon: "📧",
  },
  {
    title: "Diseño Web",
    desc: "Sitios corporativos, landing pages y aplicaciones web modernas con Next.js y Tailwind.",
    icon: "🌐",
  },
  {
    title: "Diseño UX/UI",
    desc: "Interfaces limpias, accesibles y centradas en el usuario para maximizar conversiones.",
    icon: "🎨",
  },
];

const portfolio = [
  {
    title: "Café Aromas",
    category: "Branding",
    desc: "Identidad visual completa: logotipo, paleta de color, papelería y guía de marca para una cafetería artesanal.",
    tags: ["Branding", "Identidad Visual", "Packaging"],
    image: "/project-techcorp.png",
  },
  {
    title: "ModaTrend",
    category: "Social Media",
    desc: "Estrategia de contenido para redes, campañas estacionales y community management que duplicó el engagement.",
    tags: ["Instagram", "TikTok", "Meta Ads"],
    image: "/project-shopnow.png",
  },
  {
    title: "Inmobiliaria Nova",
    category: "Diseño Web",
    desc: "Sitio web corporativo con catálogo de propiedades, tour virtual y formularios de contacto automatizados.",
    tags: ["Next.js", "UX/UI", "SEO"],
    image: "/project-innova.png",
  },
  {
    title: "FlowStack",
    category: "Content Marketing",
    desc: "Estrategia de contenido SEO, blog técnico y email nurturing que generó 200+ leads calificados en 3 meses.",
    tags: ["SEO", "Blog", "Email Marketing"],
    image: "/project-flowstack.png",
  },
  {
    title: "FullSports",
    category: "Google Ads",
    desc: "Campañas de Google Shopping y Search Ads optimizadas que redujeron el CPA un 35% y triplicaron ventas.",
    tags: ["Google Ads", "Shopping", "Analytics"],
    image: "/project-fullsports.png",
  },
  {
    title: "Mantus",
    category: "Transformación Digital",
    desc: "Rediseño web + branding + automatización de atención al cliente con WhatsApp Business API.",
    tags: ["Diseño Web", "WhatsApp API", "Marketing"],
    image: "/project-mantus.png",
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
    role: "Fundador & Director Creativo",
    desc: "Especialista en marketing digital, diseño web y automatización. Creador de estrategias digitales que generan resultados.",
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
    role: "Diseñador Web",
    desc: "Experto en desarrollo frontend, UX/UI y creación de sitios web modernos con alto rendimiento.",
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
    text: "Las campañas de Google Ads transformaron nuestras ventas. Resultados profesionales desde el primer mes.",
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
    name: "Starter",
    price: "$299",
    desc: "Perfecto para emprendimientos que inician su presencia digital.",
    features: [
      "Branding básico (logo + paleta)",
      "Perfiles en redes sociales",
      "1 campaña Google o Facebook Ads",
      "Reporte mensual de resultados",
      "Soporte por email",
    ],
    popular: false,
  },
  {
    name: "Profesional",
    price: "$599",
    desc: "Ideal para empresas que buscan crecimiento consistente.",
    features: [
      "Identidad visual completa",
      "Social Media management",
      "3 campañas Ads mensuales",
      "Content marketing (4 piezas/mes)",
      "SEO on-page + técnico",
      "Dashboard de analytics",
      "Soporte prioritario",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    desc: "Para empresas que requieren una estrategia 360°.",
    features: [
      "Estrategia de marca integral",
      "Social Media + Ads sin límite",
      "Content + email automation",
      "SEO avanzado + link building",
      "Analytics con reporting semanal",
      "Diseño web o landing page incluido",
      "Consultoría estratégica mensual",
      "Soporte 24/7 dedicado",
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-black/90 to-black" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block rounded-full border border-purple/30 bg-purple/10 px-4 py-1 text-sm text-purple-light">
            Agencia de marketing digital y diseño web
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Hacemos crecer tu marca con{" "}
            <span className="text-purple">marketing y diseño web</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Estrategias de marketing digital, branding, publicidad online y diseño de sitios web que atraen clientes y generan resultados reales para tu negocio.
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
              De la estrategia a la ejecución: todo lo que necesitas para destacar en el mundo digital.
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
              Resultados que hablan por sí solos. Cada proyecto refleja nuestro compromiso con tu crecimiento.
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
              Elige el plan que mejor se adapte a las metas de tu negocio. Todos incluyen acompañamiento continuo.
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
                  {plan.price !== "Personalizado" && <span className="text-lg font-normal text-zinc-400">/mes</span>}
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
              Somos una agencia de marketing digital y diseño web que combina creatividad con datos para hacer crecer tu negocio.
            </p>
          </div>
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Estrategia que vende</h3>
              <p className="leading-relaxed text-zinc-400">
                No hacemos diseño por diseñar. Cada campaña, cada pieza gráfica y cada línea de código está pensada para
                atraer clientes, generar conversiones y hacer crecer tu negocio con resultados medibles.
              </p>
              <ul className="space-y-2">
                {["Estrategias basadas en datos y métricas reales", "Diseño web orientado a conversión", "Acompañamiento continuo en cada paso"].map((item) => (
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
                Creemos en el marketing como puente entre tu marca y las personas que la necesitan. Cada estrategia, cada
                diseño y cada campaña está creado para conectar, comunicar y convertir.
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
              Conoce al equipo detrás de Nebula. Creativos, estrategas y desarrolladores apasionados por tu éxito.
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
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus metas de marketing y ventas.
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
              Cuéntanos sobre tu negocio y te propondremos una estrategia de marketing y diseño web a tu medida.
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
          <div className="border-t border-zinc-800 pt-8">
            <div className="mb-4 flex flex-wrap justify-center gap-6">
              <Link href="/aviso-privacidad" className="text-sm text-zinc-500 transition-colors hover:text-white">
                Aviso de Privacidad
              </Link>
              <Link href="/privacidad" className="text-sm text-zinc-500 transition-colors hover:text-white">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-zinc-500 transition-colors hover:text-white">
                Términos y Condiciones
              </Link>
              <Link href="/eliminacion-datos" className="text-sm text-zinc-500 transition-colors hover:text-white">
                Eliminación de Datos
              </Link>
            </div>
            <p className="text-center text-sm text-zinc-600">
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
  const [error, setError] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = { name: formData.get("name") as string, email: formData.get("email") as string, phone: formData.get("phone") as string, message: formData.get("message") as string, consent: true };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Error");
      setSubmitted(true);
    } catch {
      setError(true);
    }
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
          <input id="name" name="name" required className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-black">Email</label>
          <input id="email" name="email" type="email" required className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" placeholder="tu@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-black">Servicio de interés</label>
        <select id="service" name="service" className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple">
          <option value="">Selecciona un servicio</option>
          <option value="branding">Branding</option>
          <option value="social-media">Social Media</option>
          <option value="ads">Google & Facebook Ads</option>
          <option value="content">Content Marketing</option>
          <option value="seo">SEO</option>
          <option value="analytics">Analytics</option>
          <option value="email">Email Marketing</option>
          <option value="web">Diseño Web</option>
          <option value="ux-ui">Diseño UX/UI</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-black">Teléfono</label>
        <input id="phone" name="phone" type="tel" className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" placeholder="+57 300 123 4567" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-black">Mensaje</label>
        <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" placeholder="Cuéntanos sobre tu proyecto..." />
      </div>
      <div className="flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-zinc-300 text-purple focus:ring-purple"
        />
        <label htmlFor="consent" className="text-sm text-zinc-600">
          He leído y acepto el{" "}
          <Link href="/aviso-privacidad" className="text-purple underline hover:text-purple-light">
            Aviso de Privacidad
          </Link>{" "}
          de Nebula según la Ley 1581 de 2012.
        </label>
      </div>
      {error && <p className="text-sm text-red-500">Error al enviar. Intenta de nuevo o escríbenos a contacto@nebula.agencia.</p>}
      <button
        type="submit"
        disabled={!consent}
        className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all ${
          consent
            ? "bg-purple hover:bg-purple-light"
            : "bg-zinc-300 cursor-not-allowed"
        }`}
      >
        Enviar mensaje
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
