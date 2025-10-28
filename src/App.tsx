/*
  INTELITECH - Single-file React (TypeScript) component ready for Vercel
  Save as: src/App.tsx
*/

import React, { useState, type JSX } from 'react';

// ----------------- CONFIGURE HERE -----------------
export const LOGO_SRC: string | null = '/images/Logo.png'; // e.g. '/images/logo.svg' or null to use text-logo
export const HERO_BG: string | null = '/images/Bg2.jpg'; // e.g. '/images/hero.jpg' or null for gradient
export const COMPANY_NAME = 'Intelitech';
export const SHOW_NAME_NEXT_TO_LOGO = true; // when true AND LOGO_SRC is provided, name appears next to the image

// Add project images to public/images and reference them here
export const IMAGES: string[] = [
  '/images/Foto1.jpg',
  '/images/Foto2.jpg',
  '/images/Foto3.png',
  '/images/Foto4.jpeg',
];
// --------------------------------------------------

// --- Cambia aquí el correo receptor ---
const RECEIVER = 'correo@ejemplo.com';
// ---------------------------------------

const services = [
  { title: 'Instalación de Puntos de Venta (POS)', desc: 'Implementación, configuración y soporte.' },
  { title: 'Cercos Eléctricos', desc: 'Diseño e instalación con sistemas de detección y alarma.' },
  { title: 'Cámaras de Seguridad', desc: 'CCTV, IP y sistemas de grabación NVR/DVR.' },
  { title: 'Control de Acceso', desc: 'Lectores, controladores y soluciones biométricas.' },
  { title: 'Alarmas', desc: 'Sistemas de intrusión y monitoreo.' },
  { title: 'Redes', desc: 'Cableado estructurado, switches y Wi-Fi empresarial.' },
  { title: 'Estudios Site Survey', desc: 'Análisis en sitio para cobertura y diseño óptimo.' },
  { title: 'Equipos de Inspección de Rayos X', desc: 'Suministro e instalación de equipos de inspección.' },
];

export default function App(): JSX.Element {
  const [contactSent, setContactSent] = useState(false);
  // Form ahora sólo contiene name + message (se eliminó email)
  const [form, setForm] = useState<{ name: string; message: string }>({ name: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validación mínima
    if (!form.name.trim() || !form.message.trim()) {
      alert('Por favor llena tu nombre y un mensaje.');
      return;
    }

    // Construimos subject / body para mailto
    const subject = encodeURIComponent(`Contacto desde web - ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\n\nMensaje:\n${form.message}`);

    // Mostramos retroalimentación (demo) y abrimos el cliente de correo
    setContactSent(true);
    // Abrir cliente de correo con nombre + mensaje (usa la constante RECEIVER)
    window.location.href = `mailto:${RECEIVER}?subject=${subject}&body=${body}`;

    // Reseteo visual después de un tiempo (solo demo)
    setTimeout(() => setContactSent(false), 5000);
  }

  return (
    <div
      className="min-h-screen font-sans text-gray-800"
      style={{
        backgroundImage: HERO_BG ? `url(${HERO_BG})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* dark overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content wrapper so scroll content sits above overlay */}
      <div className="relative z-10">
        <header className="py-6">
          <nav className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {LOGO_SRC ? (
                <div className="flex items-center gap-3">
                  <img src={LOGO_SRC} alt="Intelitech logo" className="h-10 w-auto" />
                  {SHOW_NAME_NEXT_TO_LOGO && (() => { const name = COMPANY_NAME.toUpperCase(); const left = name.slice(0, Math.max(0, name.length - 4)); const right = name.slice(-4); return (<span className="text-xl font-semibold select-none"><span style={{ color: '#bfc6c9' }}>{left}</span><span style={{ color: '#f3c200' }}>{right}</span></span>); })()}
                </div>
              ) : (
                <div className="flex items-center gap-1 text-2xl font-bold select-none text-white">
                  <span style={{ color: '#bfc6c9' /* metallic gray hint */ }}>INTELI</span>
                  <span style={{ color: '#f3c200' /* metallic yellow hint */ }}>TECH</span>
                </div>
              )}
            </div>

            <ul className="hidden md:flex items-center gap-6 text-white">
              <li><a href="#servicios" className="hover:underline">Servicios</a></li>
              <li><a href="#trabajos" className="hover:underline">Nuestros trabajos</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </header>

        {/* HERO (keeps the large intro but background is global) */}
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="backdrop-blur-md bg-black/30 rounded-2xl p-8 sm:p-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Soluciones integrales en seguridad y comunicaciones
              </h1>
              <p className="mt-4 text-white/90 text-lg">
                Instalación y mantenimiento: puntos de venta, cercos eléctricos, cámaras, control de acceso, alarmas, redes y equipos de inspección.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#contacto" className="inline-block rounded-full px-6 py-3 bg-yellow-400 text-black font-semibold shadow-lg">Cotizar ahora</a>
                <a href="#servicios" className="inline-block rounded-full px-6 py-3 border border-white/30 text-white">Ver servicios</a>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-6">
          {/* Services */}
          <section id="servicios" className="py-12">
            <h2 className="text-3xl font-bold mb-6 text-white bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 inline-block px-4 py-2 rounded" style={{ backgroundColor: 'transparent' }}>
              Nuestros Servicios
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <article key={s.title} className="p-5 rounded-2xl bg-white/60 backdrop-blur-sm shadow-md">
                  <h3 className="font-semibold text-lg text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
                  <button className="mt-4 inline-block text-sm font-medium text-yellow-800">Más info</button>
                </article>
              ))}
            </div>
          </section>

          {/* Projects / Gallery */}
          <section id="trabajos" className="py-12">
            <h2 className="text-3xl font-bold mb-6 text-white bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 inline-block px-4 py-2 rounded" style={{ backgroundColor: 'transparent' }}>
              Nuestros trabajos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {IMAGES.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-black/20">
                  <img src={src} alt={`Proyecto ${i + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contacto" className="py-12">
            <h2 className="text-3xl font-bold mb-6 text-white bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 inline-block px-4 py-2 rounded" style={{ backgroundColor: 'transparent' }}>
              Contacto
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-md">
                <label className="block mb-2 text-sm font-medium">Nombre</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full mb-4 p-3 rounded border" required />

                {/* Campo de correo eliminado según solicitud */}

                <label className="block mb-2 text-sm font-medium">Mensaje</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full mb-4 p-3 rounded border" required />

                <div className="flex items-center gap-4">
                  <button type="submit" className="px-5 py-3 rounded-full bg-yellow-400 font-semibold">Enviar</button>
                  {contactSent && <span className="text-green-700">Mensaje enviado (cliente de correo abierto)</span>}
                </div>
              </form>

              <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm shadow-md">
                <h3 className="text-xl font-semibold mb-3">Información</h3>
                <p className="text-gray-800">Tel: +52 833 383 1105<br />Email: correo@gmail.com</p>

                <div className="mt-6">
                  <h4 className="font-medium mb-2">Horario</h4>
                  <p className="text-gray-700"></p>
                </div>
              </div>
            </div>
          </section>

        </main>

        <footer className="mt-12 py-8 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {LOGO_SRC ? (
                  <div className="flex items-center gap-3">
                    <img src={LOGO_SRC} alt="logo" className="h-8" />
                    {SHOW_NAME_NEXT_TO_LOGO && <span className="text-sm text-gray-300">{COMPANY_NAME}</span>}
                  </div>
                ) : (
                  <div className="font-bold text-lg flex gap-0">
                    <span style={{ color: '#bfc6c9' }}>INTELI</span>
                    <span style={{ color: '#f3c200' }}>TECH</span>
                  </div>
                )}
                <span className="text-sm text-gray-300">© 2021 {COMPANY_NAME}</span>
              </div>
              <div className="text-sm text-gray-400"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
