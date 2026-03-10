import React, { useState } from "react";

const paragraphs = [
  "Todo comenzó en 2011, cuando en la casa de mis abuelos leí en el diario que se abría la carrera de Programación en la UTN de Resistencia, Chaco. No fue una etapa sencilla: mientras estudiaba, trabajaba para sostener los gastos de una carrera arancelada que prometía ser “el futuro”.",
  "En ese camino conocí a Rodrigo Miro, con quien compartía la pasión por el desarrollo de videojuegos. Nos encontramos en un taller de Java y, gracias a su invitación a sumarme a un emprendimiento que iniciaba con amigos, di mis primeros pasos profesionales y me incorporé a Tecspro (antes Mi Web Simple). Aunque suene extraño, fue allí donde empezó mi desorden.",
  "En esa empresa trabajaba Gonzalo Alonso junto a varios miembros de Tecspro. Con él inicié una sana competencia de crecimiento profesional: fue mi referente, mi maestro y, con el tiempo, también mi némesis. Durante años percibí cierta incomodidad frente a mi evolución, pequeñas trabas que recién comprendería mucho después.",
  "Tras dos años en Tecspro ingresé al Consejo Profesional de Ciencias Económicas, mi primera experiencia en relación de dependencia. Permanecí allí ocho años. Cuando Gonzalo renunció, quedé a cargo del área, formé equipos y acompañé el crecimiento de varias personas. Hasta hoy me arrepiento profundamente de haberme ido; es una de esas decisiones que enseñan, pero dejan una marca difícil de borrar.",
  "Dejé el Consejo para asumir un puesto de gran relevancia en Crombie. Sin embargo, tras un año me encontré con un fuerte desorden estructural y una conducción excesivamente influenciada por Recursos Humanos y uno de los socios. No tenía conflictos personales, pero comencé a notar diferencias y ciertas trabas, similares a experiencias pasadas, aunque esta vez a nivel organizacional.",
  "Decidí investigar y descubrí que utilizaban evaluaciones actitudinales para condicionar la performance, limitar el crecimiento y ajustar métricas internas. Lo comprobé por mi cuenta: contraté la versión profesional de la misma herramienta, respondí los exámenes con idénticas respuestas y obtuve una calificación de 9, mientras internamente me habían evaluado con un 6. Tuvimos varias reuniones, pero no alcanzamos un acuerdo. Según su visión, yo no encajaba con la misión y los valores de la empresa. Entonces decidí cerrar esa etapa.",
  "Poco después llegué a la empresa que creí, con todo el corazón, que era el lugar que siempre había buscado. Gracias a Fernando Bugliot, ex CEO de Ceibus, arribé de manera indirecta a Pronto Pago. Allí viví casi tres años de crecimiento exponencial.",
  "Todo cambió con la incorporación de Exequiel Ledezma. Trabajábamos junto a Felipe Azcoaga, colega y amigo a quien yo mismo había acompañado primero en el Consejo y luego en Ceibus. Durante un sprint surgió un conflicto por incumplimiento de plazos; desde mi perspectiva, no se debía a falta de compromiso de nuestra parte, sino a desorganización en la conducción técnica.",
  "Tuvimos una reunión con Fernando, tensa pero necesaria, donde presenté evidencias y, en apariencia, la situación se resolvió a nuestro favor. Sin embargo, aquello no fue bien recibido. Aún conservo mensajes en los que se me reprochaba haber hablado directamente con dirección, exigiéndome que nunca más “pasara por encima” del liderazgo técnico.",
  "En medio de todo esto formé una familia, me junté, alquilé un departamento y comenzó a construir mi propia casa. Algo hice bien.",
  "Nunca había tenido conflictos personales; siempre prioricé el trabajo, la transparencia y resultados realistas. Más adelante mantuvimos otra reunión entre todos y acordamos dejar atrás el episodio. Dejé claro que mi única intención era cuidar mi trabajo, el de Felipe y el de la empresa, no generar enemistades. Pero la venganza llegaría tiempo después.",
  "Meses después de asumir la gerencia general de Pronto Pago, Fernando renunció tanto a la empresa como a Ceibus. Su salida dejó un vacío importante, y yo presentí que mis días allí estaban contados. Cuatro meses más tarde, Exequiel me desvinculó.",
  "Dejé el departamento y parte de la vida que venía en pleno crecimiento. Me instalé en mi casa, que logré terminar con mis ahorros, y abrí un kiosco de barrio.",
  "Las experiencias que siguieron no tuvieron gran relevancia en mi desarrollo profesional: en su mayoría fueron trabajos como contractor, enfocados en features más que en crecimiento real. Sin embargo, las últimas dos impactaron fuertemente en mi salud.",
  "La anteúltima fue WeTak. Llegué nuevamente por contacto con antiguos colegas de Tecspro para cubrir la salida de Fabián. La empresa tenía sus luces y sombras, incluso ciertas similitudes con Crombie. Esta vez mi relación con Gonzalo no fue buena, lo que limitó mi aporte real y puso en juego mi vínculo con el CEO, mi reputación y mi confianza profesional.",
  "Finalmente, decidí renunciar para quedarme con una propuesta en Galicia, mi segunda experiencia en relación de dependencia, aunque esta vez a través de una consultora: OneInfo Consulting. Aposté por estabilidad y proyección. Sin embargo, a los seis meses fui despedido bajo el argumento de estar en “período de prueba”. Nunca hubo señales claras ni transparencia desde el inicio; de haberlas tenido, no habría tomado decisiones anteriores, porque tuve la oportunidad de elegir.",
  "Desde entonces no logré reinsertarme laboralmente en medio de la burbuja de la IA. Intenté varios proyectos personales y, hasta ahora, lo único que realmente me sostiene es un sistema market que desarrollé para administrar mi propio kiosco. Gracias a él estoy sobreviviendo desde hace meses, y es a lo que hoy pienso dedicarle tiempo completo.",
  "Mientras atravesaba todo este proceso, siempre estuvo a mi lado mi fiel amigo Martín, mi conejo. Me propuse darle todo lo que estuviera a mi alcance, todo lo que merecía, y estoy convencido de que lo hice, hasta hoy. Hoy tuve que tomar una decisión devastadora: destinar el dinero que me quedaba a los estudios de mi hija o llevarlo al veterinario, sabiendo que no podía postergarlo más. Y lo perdí.",
  "Siento que fallé. Siento que, en algún punto, tomé decisiones equivocadas. Que tal vez, en lugar de seguir intentando reinsertarme en el rubro, debería haber salido a hacer Uber o cualquier otra cosa para no tener que elegir.",
  "Sé que muchos dirán: “es solo una mascota”. Pero no se trata de eso. Se trata de los compromisos que uno asume en la vida. De la palabra silenciosa que uno se da a sí mismo cuando promete cuidar, sostener y estar.",
  "Hoy siento que fallé en eso. Que me estoy fallando. Que, de alguna manera, también les estoy fallando a quienes dependen de mí.",
  "Por eso tomo esta decisión. Renuncio a algo que amaba, no desde el rencor, sino desde la responsabilidad. Para reconstruirme. Para construir algo mejor.",
  "Y si algún día me vuelven a encontrar, será en otro puesto, desde otra perspectiva, con otra iniciativa."
];

const sectionBreaks = {
  4: "Y desde allí, todo empezó a desbarrancarse.",
  17: "Hoy es un día muy difícil para mí."
};

function Icon({ children, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

function App() {
  const [theme, setTheme] = useState("dim");

  return (
    <div className={`app theme-${theme}`}>
      <main className="page">
        <div className="topbar">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <ul>
              <li>
                <a href="#inicio">
                  <Icon className="icon-sm">
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </Icon>
                  Inicio
                </a>
              </li>
              <li className="separator">
                <Icon className="icon-xs">
                  <path d="m9 18 6-6-6-6" />
                </Icon>
              </li>
              <li>
                <span>
                  <Icon className="icon-sm">
                    <path d="M15 18h-5" />
                    <path d="M18 14h-8" />
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
                    <rect height="4" rx="1" width="8" x="10" y="6" />
                  </Icon>
                  Blog
                </span>
              </li>
              <li className="separator">
                <Icon className="icon-xs">
                  <path d="m9 18 6-6-6-6" />
                </Icon>
              </li>
              <li className="current">Mi historia</li>
            </ul>
          </nav>

          <div className="theme-toggle">
            <button
              className={theme === "dim" ? "active primary" : "outline"}
              onClick={() => setTheme("dim")}
              type="button"
            >
              Dark
            </button>
            <button
              className={theme === "silk" ? "active primary" : "outline"}
              onClick={() => setTheme("silk")}
              type="button"
            >
              Light
            </button>
          </div>
        </div>

        <article className="article-card">
          <div className="article-inner">
            <header className="article-header">
              <div className="badge">Crónica Personal</div>
              <h1>He decidido dejar de programar…</h1>

              <div className="meta-row">
                <div className="author">
                  <div className="avatar-frame">
                    <img alt="Author" src="/avatar.jpg" />
                  </div>
                  <div className="author-copy">
                    <p className="author-name">Maximiliano Sh.</p>
                    <p className="author-role">Desarrollador</p>
                  </div>
                </div>

                <div className="meta-list">
                  <span>
                    <Icon className="icon-sm primary-text">
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect height="18" rx="2" width="18" x="3" y="4" />
                      <path d="M3 10h18" />
                    </Icon>
                    27 Feb, 2026
                  </span>
                  <span>
                    <Icon className="icon-sm primary-text">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </Icon>
                    15 min de lectura
                  </span>
                </div>
              </div>
            </header>

            <div className="content">
              <p className="intro">Mi trágica historia</p>

              {paragraphs.map((paragraph, index) => (
                <React.Fragment key={`${index}-${paragraph.slice(0, 16)}`}>
                  {sectionBreaks[index] ? <h2>{sectionBreaks[index]}</h2> : null}
                  <p>{paragraph}</p>
                </React.Fragment>
              ))}

              <div className="expiration-note">
                <span>
                  Este post se va a eliminar automáticamente el 1ro de Abril del
                  2026...
                </span>
              </div>
            </div>
          </div>
        </article>

        <footer className="footer">
          <aside>
            <div className="brand-block">
              <Icon className="icon-brand primary-text">
                <path d="M12 22v-9" />
                <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
                <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
                <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
              </Icon>
              <div>
                <p className="brand-name">MaxShDev.</p>
                <p>Desarrollador independiente.</p>
              </div>
            </div>
            <p>Copyright © 2026 - Todos los derechos reservados</p>
          </aside>
        </footer>
      </main>
    </div>
  );
}

export default App;
