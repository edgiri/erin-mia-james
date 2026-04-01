import Image from "next/image";
import { headers } from "next/headers";
import Countdown from "./components/Countdown";

function IconButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: 68,
        height: 68,
        borderRadius: 18,
        background: "rgba(255,255,255,0.14)",
        border: "1px solid rgba(255,255,255,0.18)",
        display: "grid",
        placeItems: "center",
        textDecoration: "none",
        color: "white",
        fontWeight: 800,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {text}
    </a>
  );
}

export default async function Page() {
  // Ubicación aproximada por IP (en Vercel)
  // En localhost puede salir "Desconocida" y es normal.
  const h = await headers();
  const city = h.get("x-vercel-ip-city") || "";
  const country = h.get("x-vercel-ip-country") || "";
  const location = city && country ? `${city}, ${country}` : "Desconocida";

  // Datos de ERIN MIA JAMES
  const NAME = "ERIN MIA JAMES";
  const PROMO = "75% OFF · JUST TODAY";

  // Links actualizados
  const LINK_MAIN = "https://onlyfans.com/erinmiajames";
  const LINK_IG = "https://www.instagram.com/erinmiajamesagain/";
  const LINK_TIKTOK = "https://www.tiktok.com/@itserinmiajames";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(12px, 4vw, 28px)",
      }}
    >
      {/* FONDO */}
      <Image src="/bg.jpg" alt="background" fill priority style={{ objectFit: "cover" }} />

      {/* TARJETA (responsive) */}
      <div
        style={{
          width: "min(420px, 92vw)",
          borderRadius: "clamp(20px, 4vw, 28px)",
          padding: "clamp(16px, 4vw, 26px)",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 20px 70px rgba(0,0,0,0.35)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: "white",
        }}
      >
        <div style={{ display: "grid", placeItems: "center", gap: "clamp(10px, 2.8vw, 14px)" }}>
          {/* AVATAR */}
          <div
            style={{
              width: "clamp(84px, 18vw, 112px)",
              height: "clamp(84px, 18vw, 112px)",
              borderRadius: 999,
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.9)",
            }}
          >
            <Image src="/avatar.jpg" alt="avatar" width={112} height={112} style={{ objectFit: "cover" }} />
          </div>

          {/* NOMBRE + UBICACIÓN */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(30px, 7.5vw, 44px)",
                fontWeight: 900,
                letterSpacing: 1,
                lineHeight: 1.05,
              }}
            >
              {NAME}
            </div>
            <div style={{ opacity: 0.9, fontSize: "clamp(16px, 4.2vw, 20px)" }}>{location}</div>
          </div>

          {/* PROMO */}
          <div style={{ marginTop: 6, marginBottom: 6 }}>
            <span
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(255, 60, 120, 0.22)",
                border: "1px solid rgba(255, 80, 140, 0.45)",
                color: "#ff4d94",
                fontWeight: 900,
                letterSpacing: 1,
                fontSize: "clamp(19px, 5vw, 24px)",
              }}
            >
              {PROMO}
            </span>
          </div>

          {/* FOTO + COUNTDOWN */}
          <div
            style={{
              width: "100%",
              borderRadius: "clamp(16px, 3.8vw, 22px)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.2)",
            }}
          >
            <a href={LINK_MAIN} target="_blank" rel="noreferrer" style={{ display: "block", position: "relative" }}>
              <Image
                src="/card.jpg"
                alt="card"
                width={900}
                height={900}
                style={{
                  width: "100%",
                  height: "clamp(170px, 42vw, 240px)",
                  objectFit: "cover",
                  cursor: "pointer",
                  display: "block",
                }}
              />

              {/* badge */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontWeight: 900,
                  fontSize: 12,
                  color: "white",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                OF 🔒
              </div>
            </a>

            <div style={{ padding: "clamp(12px, 3vw, 18px)" }}>
              <Countdown minutes={15} storageKey="erin-mia-james-endsAt" />
            </div>
          </div>

          {/* LINKS */}
          <div style={{ display: "flex", gap: 14, marginTop: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <IconButton href={LINK_MAIN} text="OF🔒" />
            <IconButton href={LINK_IG} text="IG" />
            <IconButton href={LINK_TIKTOK} text="TT" />
          </div>
        </div>
      </div>
    </main>
  );
}