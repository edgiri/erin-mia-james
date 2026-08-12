import Image from "next/image";
import Countdown from "./components/Countdown";

const trackingLinks: Record<string, string> = {
  va2049: "https://onlyfans.com/erinmiajames/c9",
  va2048: "https://onlyfans.com/erinmiajames/c8",
  va2045: "https://onlyfans.com/erinmiajames/c7",
  va2037: "https://onlyfans.com/erinmiajames/c6",
  va1525: "https://onlyfans.com/erinmiajames/c5",
  p:      "https://onlyfans.com/erinmiajames/c10",
  lu:     "https://onlyfans.com/erinmiajames/c4",
  default: "https://onlyfans.com/erinmiajames",
};

const IconIG = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
);

const IconTT = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
);

const IconTG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
  </svg>
);

const IconFB = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const BadgeVerified = () => (
  <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#1d9bf0"/>
    <path d="M6 11.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "rgba(0,0,0,0.8)",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "grid",
        placeItems: "center",
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </a>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const LINK_MAIN = trackingLinks[ref ?? ""] ?? trackingLinks["default"];

  const NAME = "Erin Mia James";
  const PROMO = "75% OFF · JUST TODAY";
  const LINK_IG = "https://www.instagram.com/erinmiajamesagain/";
  const LINK_TIKTOK = "https://www.tiktok.com/@itserinmiajames";
  const LINK_TG = "https://t.me/+GjGJj2dorOEzNTE1";
  const LINK_FB = "https://www.facebook.com/ErinMiaJames/";

  return (
    <>
    <script dangerouslySetInnerHTML={{ __html: `
      (function() {
        var ua = navigator.userAgent || '';
        if (ua.indexOf('Instagram') > -1 || ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1) {
          var banner = document.createElement('div');
          banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#1a1a1a;color:white;padding:14px 16px;font-family:sans-serif;font-size:13px;font-weight:600;display:flex;align-items:center;gap:10px;box-shadow:0 2px 12px rgba(0,0,0,0.5);';
          banner.innerHTML = '<span style="font-size:18px">🌐</span><span>Para una mejor experiencia, abre en Safari · Toca <strong>⋯</strong> y selecciona <strong>Abrir en navegador</strong></span>';
          document.body.appendChild(banner);
        }
      })();
    `}} />
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(12px, 4vw, 28px)",
      }}
    >
      <Image src="/bg.jpg" alt="background" fill priority style={{ objectFit: "cover", opacity: 0.5 }} />

      {/* CARD — sin fondo gris, solo el contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "min(400px, 92vw)",
          borderRadius: 28,
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* HERO IMAGE */}
        <div style={{ position: "relative", width: "100%", height: "clamp(320px, 70vw, 440px)" }}>
          <Image src="/avatar.jpg" alt="Erin Mia James" fill priority style={{ objectFit: "cover", objectPosition: "top" }} />
          {/* Gradiente pronunciado hacia negro */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "65%",
            background: "linear-gradient(to bottom, transparent, #000)",
          }} />

          {/* Nombre + verificado */}
          <div style={{
            position: "absolute", bottom: 80, left: 0, right: 0,
            textAlign: "center",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <span style={{ fontSize: "clamp(18px, 4.5vw, 24px)", fontWeight: 800 }}>{NAME}</span>
            <BadgeVerified />
          </div>

          {/* Botones sociales debajo del nombre */}
          <div style={{
            position: "absolute", bottom: 14, left: 0, right: 0,
            display: "flex", gap: 12, justifyContent: "center",
          }}>
            <SocialButton href={LINK_TIKTOK}><IconTT /></SocialButton>
            <SocialButton href={LINK_TG}><IconTG /></SocialButton>
            <SocialButton href={LINK_IG}><IconIG /></SocialButton>
            <SocialButton href={LINK_FB}><IconFB /></SocialButton>
          </div>
        </div>

        {/* BODY — fondo negro puro continuando del gradiente */}
        <div style={{
          background: "#000",
          display: "grid",
          placeItems: "center",
          gap: 14,
          padding: "16px 20px 28px",
        }}>
          {/* MY SOCIALS label */}
          <div style={{ opacity: 0.45, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>My socials</div>

          {/* PROMO */}
          <div style={{
            padding: "10px 28px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            fontWeight: 800,
            fontSize: "clamp(12px, 3vw, 14px)",
            letterSpacing: 1,
          }}>
            {PROMO}
          </div>

          {/* COUNTDOWN pequeño */}
          <div style={{ transform: "scale(0.62)", transformOrigin: "center top", marginBottom: -8 }}>
            <Countdown minutes={15} storageKey="erin-mia-james-endsAt" />
          </div>

          {/* CARD IMAGE */}
          <a
            href={LINK_MAIN}
            target={"_blank"}
            rel={"noreferrer"}
            style={{ display: "block", position: "relative", width: "100%", borderRadius: 16, overflow: "hidden" }}
          >
            <Image
              src="/card.jpg"
              alt="exclusive"
              width={900}
              height={500}
              style={{
                width: "100%",
                height: "clamp(160px, 40vw, 220px)",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "12px 0",
              textAlign: "center",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: 1,
              color: "white",
              background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
            }}>
              🩵 EXCLUSIVE CONTENT · CLICK HERE
            </div>
          </a>
        </div>
      </div>
    </main>
    </>
  );
}