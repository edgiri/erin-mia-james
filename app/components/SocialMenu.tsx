"use client";
import { useState } from "react";

interface Account { label: string; url: string; }

export default function SocialMenu({ children, accounts }: { children: React.ReactNode; accounts: Account[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        {children}
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)",
            zIndex: 9999, display: "flex", alignItems: "flex-end",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: "100%", background: "#1a1a1a", borderRadius: "20px 20px 0 0",
              padding: "20px 20px 36px",
            }}
          >
            <div style={{ width: 36, height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 999, margin: "0 auto 20px" }} />
            {accounts.map(a => (
              <a
                key={a.url}
                href={a.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none", color: "white",
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  display: "grid", placeItems: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8"/>
                    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
                  </svg>
                </div>
                <span style={{ fontSize: 16, fontWeight: 600 }}>@{a.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
