import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck, CarFront, Clock4, Phone, MapPin, CalendarDays, CheckCircle2, ChevronRight } from "lucide-react";

export default function ValetLanding() {
  return (
    <div
      className="min-h-screen text-neutral-900 font-ui antialiased"
      style={{
        // Paleta de la imagen: oscuro, medio, claro
        "--brand-dark": '#311f15',
        "--brand-mid": '#5e513d',
        "--brand-light": '#d3b58a',
        background:
          "linear-gradient(180deg, rgba(211,181,138,0.12) 0%, rgba(255,255,255,1) 40%)",
      }}
    >
      {/* Carga de fuentes profesionales */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@800&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        :root{ 
          --font-ui: 'Manrope', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; 
          --font-brand: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
          --font-display: 'Plus Jakarta Sans', 'Manrope', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
        }
        .font-ui{ font-family: var(--font-ui); }
        .font-brand{ font-family: var(--font-brand); letter-spacing: .01em; }
        .font-display{ font-family: var(--font-display); }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="">
            <img className="h-10 w-10 text-center" src="/public/logo.png" alt="Logo" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:opacity-80" href="#servicios">Servicios</a>
            <a className="hover:opacity-80" href="#como-funciona">Cómo funciona</a>
            <a className="hover:opacity-80" href="#seguridad">Seguridad</a>
            <a className="hover:opacity-80" href="#contacto">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button data-testid="cta-primary" className="hidden sm:inline-flex" style={{ backgroundColor: 'var(--brand-dark)' }}>
              Reservar valet
            </Button>
            <Button
              data-testid="cta-secondary"
              variant="outline"
              className="border-2"
              style={{ borderColor: 'var(--brand-mid)', color: 'var(--brand-mid)' }}
            >
              Cotizar eventos
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden isolate">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center min-h-[520px]">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: 'var(--brand-light)', color: 'var(--brand-dark)' }}
            >
              <ShieldCheck className="h-4 w-4" /> Seguridad & Tranquilidad
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight" style={{ color: 'var(--brand-dark)' }}>
              Valet parking premium para hoteles, clínicas y eventos
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              Operación discreta y confiable para quienes valoran el tiempo y la seguridad. Personal verificado, protocolos auditables y cobertura 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button data-testid="hero-primary" size="lg" className="h-12 px-6" style={{ backgroundColor: 'var(--brand-dark)' }}>
                Reservar ahora
              </Button>
              <Button
                data-testid="cta-secondary"
                size="lg"
                variant="outline"
                className="h-12 px-6 border-2"
                style={{ borderColor: 'var(--brand-mid)', color: 'var(--brand-mid)' }}
              >
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-xl" style={{ backgroundColor: 'var(--brand-light)' }} />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-xl" style={{ backgroundColor: 'var(--brand-mid)' }} />
              <Card className="relative shadow-xl rounded-2xl overflow-hidden border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="font-display text-lg font-bold" style={{ color: 'var(--brand-dark)' }}>Reserva rápida</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Nombre y apellido" />
                    <Input placeholder="Rut / ID" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Teléfono" />
                    <Input placeholder="Email" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input type="date" />
                    <Input type="time" />
                  </div>
                  <div className="grid">
                    <Select className="">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tipo de servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="clinica">Clínica</SelectItem>
                        <SelectItem value="evento">Evento</SelectItem>
                        <SelectItem value="corporativo">Corporativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea placeholder="Comentarios" />
                  <Button className="w-full h-11" style={{ backgroundColor: 'var(--brand-mid)' }}>
                    Enviar solicitud <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-neutral-500">Tiempo de respuesta promedio: 10 min.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 md:py-20 bg-neutral-50/60 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--brand-dark)' }}>Soluciones a tu medida</h2>

          <p className="mt-2 text-neutral-600">Diseñamos operaciones de valet para espacios premium. Transparencia total de procesos y aseguramiento de calidad.</p>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { t: 'Hoteles & Residencias', d: 'Recepción discreta, pick-up en puerta y servicio 24/7.' },
              { t: 'Clínicas', d: 'Flujo eficiente para pacientes y acompañantes, con asistencia.' },
              { t: 'Eventos', d: 'Escalamos equipos y barreras móviles para alto volumen.' },
              { t: 'Corporativo', d: 'Operación mensual con KPI, reportes y custodia segura.' },
            ].map((s, i) => (
              <Card key={i} className="rounded-2xl border-neutral-200">
                <CardHeader>
                  <CardTitle className="font-display text-lg font-semibold" style={{ color: 'var(--brand-mid)' }}>{s.t}</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-600">{s.d}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--brand-dark)' }}>Cómo funciona</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { icon: <MapPin className="h-6 w-6" />, t: 'Recepción', d: 'Te recibimos en la entrada acordada, verificamos identidad y realizamos inspección 360°.' },
              { icon: <ShieldCheck className="h-6 w-6" />, t: 'Custodia segura', d: 'Traslado a estacionamiento privado con CCTV y registro de acceso.' },
              { icon: <CalendarDays className="h-6 w-6" />, t: 'Entrega puntual', d: 'Devuelta en hora y lugar convenidos, con confirmación por mensaje.' },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl border" style={{ borderColor: 'var(--brand-light)' }}>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg mb-4" style={{ backgroundColor: 'var(--brand-light)', color: 'var(--brand-dark)' }}>
                  {step.icon}
                </div>
                <h3 className="font-display font-extrabold tracking-tight" style={{ color: 'var(--brand-mid)' }}>{i + 1}. {step.t}</h3>
                <p className="mt-2 text-neutral-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad */}
      <section id="seguridad" className="py-16 md:py-20" style={{ backgroundColor: 'var(--brand-dark)' }}>
        <div className="mx-auto max-w-6xl px-6 text-white">
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/2">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Protocolo de seguridad</h2>
              <p className="mt-3 text-white/90">Nuestros procesos minimizan riesgos en cada etapa: recepción, traslado y custodia. Cada movimiento queda trazado.</p>
              <ul className="mt-6 grid gap-3 text-sm">
                {[
                  'Conductores con verificación de antecedentes y capacitación continua',
                  'Cobertura de seguro por daño durante tránsito y custodia',
                  'Estacionamientos privados con CCTV, control de acceso y registro de llaves',
                  'Checklist fotográfico de recepción y entrega',
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> <span>{li}</span></li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <Card className="bg-white text-neutral-900 rounded-2xl border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-display text-lg font-semibold" style={{ color: 'var(--brand-mid)' }}>Transparencia operativa</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-600">
                  <p>Accede a reportes mensuales con KPI de puntualidad, incidentes, tiempos promedio de recepción y ocupación de estacionamientos. Auditorías disponibles bajo acuerdo de confidencialidad.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-20 bg-neutral-50/80">
        <div className="mx-auto max-w-6xl px-6">
          <div className="p-8 md:p-10 rounded-3xl border-2" style={{ borderColor: 'var(--brand-mid)', backgroundColor: 'white' }}>
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight" style={{ color: 'var(--brand-dark)' }}>¿Listos para brindar tranquilidad a tus invitados?</h3>
                <p className="mt-2 text-neutral-600">Agendemos una llamada para diseñar la operación perfecta para tu hotel, clínica o evento.</p>
              </div>
              <div className="mt-6 md:mt-0 flex gap-3">
                <Button className="h-11 px-6" style={{ backgroundColor: 'var(--brand-mid)' }}>
                  <Phone className="mr-2 h-4 w-4" /> Agendar llamada
                </Button>
                <Button
                  variant="outline"
                  className="h-11 px-6 border-2"
                  style={{ borderColor: 'var(--brand-mid)', color: 'var(--brand-mid)' }}
                >
                  Solicitar propuesta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-10" style={{ backgroundColor: 'var(--brand-mid)' }}>
        <div className="mx-auto max-w-6xl px-6 text-white/90 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md" style={{ backgroundColor: 'var(--brand-light)' }} />
              <span className="font-brand">Vip Valet Parking</span>
            </div>
            <p className="mt-3 text-sm">Servicio de valet parking premium. Santiago — Chile.</p>
          </div>
          <div>
            <h4 className="font-brand">Contacto</h4>
            <ul className="mt-3 space-y-1 text-sm">
              <li>+56 9 1234 5678</li>
              <li>contacto@vipvalet.cl</li>
              <li>Horario: 24/7</li>
            </ul>
          </div>
          <div>
            <h4 className="font-brand">Dirección</h4>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Av. Alonso de Córdova 1234</li>
              <li>Las Condes, Santiago</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/70">© {new Date().getFullYear()} Vip Valet Parking. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}

