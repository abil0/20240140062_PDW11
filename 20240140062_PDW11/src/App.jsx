import { useState, useEffect, useRef } from "react";

const NAVY = {
  deepest: "#050D1A",
  deep: "#0A1628",
  mid: "#0D2137",
  steel: "#1A3A5C",
  accent: "#2563EB",
  glow: "#3B82F6",
  sky: "#60A5FA",
  ice: "#BAE6FD",
  frost: "#E0F2FE",
  white: "#F0F8FF",
};

const skills = [
  { label: "React.js", pct: 88 },
  { label: "JavaScript", pct: 92 },
  { label: "HTML & CSS", pct: 95 },
  { label: "Node.js", pct: 74 },
  { label: "UI/UX Design", pct: 80 },
];

const projects = [
  {
    title: "Nautica",
    desc: "about game .",
    tags: ["React + js",],
    year: "2026",
  },
  {
    title: "Bank sampah",
    desc: "recycle , reuse , reduce",
    tags: ["react vite",],
    year: "2026",
  },
];

function Particle({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        background: NAVY.glow,
        opacity: 0.15,
        animation: `float ${style.dur}s ease-in-out infinite`,
        ...style,
      }}
    />
  );
}

function NavBar({ active, setActive }) {
  const links = ["Home", "About", "Projects", "Contact"];
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
        height: 64,
        background: "rgba(5,13,26,0.82)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid rgba(59,130,246,0.15)`,
      }}
    >
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 20,
          color: NAVY.sky,
          letterSpacing: "-0.5px",
        }}
      >
        &lt;PDW <span style={{ color: NAVY.ice }}>20240140062</span>/&gt;
      </span>
      <div style={{ display: "flex", gap: "2rem" }}>
        {links.map((l) => (
          <button
            key={l}
            onClick={() => setActive(l)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: active === l ? 600 : 400,
              color: active === l ? NAVY.ice : "rgba(186,230,253,0.55)",
              letterSpacing: "0.02em",
              padding: "4px 0",
              borderBottom: active === l ? `2px solid ${NAVY.glow}` : "2px solid transparent",
              transition: "all 0.2s",
            }}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  const [typed, setTyped] = useState("");
  const words = ["UI Developer", "React Enthusiast", "Code Architect"];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setTyped(word.slice(0, charIdx + 1));
          if (charIdx + 1 === word.length) {
            setTimeout(() => setDeleting(true), 1400);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setTyped(word.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? 60 : 90
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  const particles = [
    { width: 180, height: 180, top: "8%", left: "5%", dur: 7 },
    { width: 100, height: 100, top: "65%", left: "80%", dur: 9 },
    { width: 60, height: 60, top: "40%", left: "90%", dur: 5 },
    { width: 240, height: 240, top: "75%", left: "-4%", dur: 11 },
    { width: 50, height: 50, top: "15%", left: "70%", dur: 6 },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${NAVY.deepest} 0%, ${NAVY.mid} 60%, ${NAVY.steel} 100%)`,
      }}
    >
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 780,
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(37,99,235,0.18)",
            border: `1px solid rgba(96,165,250,0.35)`,
            borderRadius: 40,
            padding: "6px 20px",
            fontSize: 12,
            fontFamily: "'Space Mono', monospace",
            color: NAVY.sky,
            letterSpacing: "0.12em",
            marginBottom: "1.8rem",
            textTransform: "uppercase",
          }}
        >
          ✦ Pengembangan Design Web · Kelas D · 2026
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            color: NAVY.white,
            margin: "0 0 1rem",
            letterSpacing: "-2px",
          }}
        >
          Halo, Saya{" "}
          <span
            style={{
              color: NAVY.sky,
              display: "block",
            }}
          >
            Nabil Rafif
          </span>
        </h1>

        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: NAVY.ice,
            marginBottom: "2.5rem",
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <span style={{ opacity: 0.5 }}>//</span>
          <span>{typed}</span>
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: "1.2em",
              background: NAVY.glow,
              animation: "blink 1s steps(1) infinite",
              verticalAlign: "middle",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            lineHeight: 1.75,
            color: "rgba(186,230,253,0.7)",
            maxWidth: 520,
            margin: "0 auto 3rem",
          }}
        >
          Mahasiswa Teknologi informasi.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: NAVY.accent,
              color: NAVY.white,
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "13px 28px",
              borderRadius: 10,
              letterSpacing: "0.01em",
              transition: "all 0.2s",
            }}
          >
            Lihat Proyek →
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(37,99,235,0.12)",
              border: `1.5px solid rgba(96,165,250,0.4)`,
              color: NAVY.ice,
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 15,
              padding: "12px 28px",
              borderRadius: 10,
              letterSpacing: "0.01em",
              transition: "all 0.2s",
            }}
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: NAVY.deepest,
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: NAVY.glow,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              01. Tentang Saya
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: NAVY.white,
                lineHeight: 1.2,
                letterSpacing: "-1px",
                marginBottom: "1.5rem",
              }}
            >
              Membuat UI yang{" "}
              <span
                style={{
                  color: NAVY.sky,
                  fontStyle: "italic",
                }}
              >
                berkesan
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(186,230,253,0.65)",
                marginBottom: "1.2rem",
              }}
            >
              Saya adalah mahasiswa semester 4 Teknologi informasi di
              Universitas Muhammadiyah Yogyakarta.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(186,230,253,0.65)",
              }}
            >
              Saya percaya kepada diri saya sendiri bahwa selama saya berusaha semuakan terasa mudah
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: NAVY.glow,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Kemampuan Teknis
            </p>
            {skills.map((sk) => (
              <div key={sk.label} style={{ marginBottom: "1.2rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: NAVY.ice,
                      fontWeight: 500,
                    }}
                  >
                    {sk.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 12,
                      color: NAVY.glow,
                    }}
                  >
                    {sk.pct}%
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: "rgba(37,99,235,0.18)",
                    borderRadius: 99,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${sk.pct}%`,
                      background: `linear-gradient(90deg, ${NAVY.accent}, ${NAVY.sky})`,
                      borderRadius: 99,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? "rgba(26,58,92,0.55)"
          : "rgba(13,33,55,0.6)",
        border: hovered
          ? `1px solid rgba(96,165,250,0.45)`
          : `1px solid rgba(37,99,235,0.18)`,
        borderRadius: 16,
        padding: "2rem 2rem 1.8rem",
        transition: "all 0.3s ease",
        cursor: "default",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          color: "rgba(96,165,250,0.4)",
          letterSpacing: "0.08em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 22,
          fontWeight: 700,
          color: NAVY.white,
          marginBottom: "0.75rem",
          letterSpacing: "-0.5px",
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 15,
          lineHeight: 1.75,
          color: "rgba(186,230,253,0.6)",
          marginBottom: "1.5rem",
        }}
      >
        {project.desc}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: NAVY.sky,
              background: "rgba(37,99,235,0.15)",
              border: `1px solid rgba(96,165,250,0.25)`,
              borderRadius: 6,
              padding: "3px 10px",
              letterSpacing: "0.06em",
            }}
          >
            {t}
          </span>
        ))}
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: "rgba(186,230,253,0.35)",
          }}
        >
          {project.year}
        </span>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: NAVY.deep,
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            color: NAVY.glow,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          02 / Proyek
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: NAVY.white,
            letterSpacing: "-1px",
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          Karya yang saya banggakan
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="contact"
      style={{
        background: NAVY.deepest,
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            color: NAVY.glow,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          03 / Kontak
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 4vw, 2.6rem)",
            fontWeight: 700,
            color: NAVY.white,
            letterSpacing: "-1px",
            marginBottom: "1rem",
          }}
        >
          Mari berkolaborasi
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "rgba(186,230,253,0.6)",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          Terbuka untuk proyek freelance, magang, atau sekadar diskusi
          teknologi. Kirimkan pesan dan saya akan merespons dalam 24 jam.
        </p>

        {sent ? (
          <div
            style={{
              background: "rgba(37,99,235,0.15)",
              border: `1px solid rgba(96,165,250,0.35)`,
              borderRadius: 14,
              padding: "2rem",
              color: NAVY.ice,
              fontFamily: "'Space Mono', monospace",
              fontSize: 15,
            }}
          >
            ✓ Pesan terkirim! Terima kasih.
          </div>
        ) : (
          <div
            style={{
              background: "rgba(13,33,55,0.7)",
              border: `1px solid rgba(37,99,235,0.22)`,
              borderRadius: 16,
              padding: "2rem",
              textAlign: "left",
            }}
          >
            {["Nama Lengkap", "Alamat Email"].map((ph) => (
              <input
                key={ph}
                placeholder={ph}
                style={{
                  display: "block",
                  width: "100%",
                  boxSizing: "border-box",
                  background: "rgba(5,13,26,0.6)",
                  border: `1px solid rgba(37,99,235,0.25)`,
                  borderRadius: 10,
                  padding: "12px 16px",
                  marginBottom: "1rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: NAVY.white,
                  outline: "none",
                }}
              />
            ))}
            <textarea
              placeholder="Pesan Anda..."
              rows={4}
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                background: "rgba(5,13,26,0.6)",
                border: `1px solid rgba(37,99,235,0.25)`,
                borderRadius: 10,
                padding: "12px 16px",
                marginBottom: "1.2rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: NAVY.white,
                resize: "vertical",
                outline: "none",
              }}
            />
            <button
              onClick={() => setSent(true)}
              style={{
                width: "100%",
                background: NAVY.accent,
                color: NAVY.white,
                border: "none",
                borderRadius: 10,
                padding: "14px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              Kirim Pesan →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: NAVY.deepest,
        borderTop: `1px solid rgba(37,99,235,0.15)`,
        padding: "2rem",
        textAlign: "center",
        fontFamily: "'Space Mono', monospace",
        fontSize: 12,
        color: "rgba(186,230,253,0.3)",
        letterSpacing: "0.06em",
      }}
    >
      &lt;/&gt; crafted with React · Modul 14 PDW · {new Date().getFullYear()}
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #050D1A; }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-24px) scale(1.04); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        input::placeholder, textarea::placeholder { color: rgba(186,230,253,0.3); }
      `}</style>
      <NavBar active={active} setActive={setActive} />
      <main style={{ paddingTop: 0 }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}