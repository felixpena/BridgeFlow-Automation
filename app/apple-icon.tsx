import { ImageResponse } from "next/og";

export const size        = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple Touch Icon (180×180) — mismo símbolo que el favicon,
 * escalado para dispositivos iOS/macOS "Agregar a inicio".
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:          "100%",
          height:         "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          background:     "#0F172A",
          borderRadius:   "40px",
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Block izquierdo */}
          <rect x="1" y="4" width="7" height="5" rx="1.5" fill="white" opacity="0.9" />
          <rect x="1" y="13" width="7" height="5" rx="1.5" fill="white" opacity="0.55" />

          {/* Conector / flecha cian */}
          <path
            d="M10 6.5 H14 M10 15.5 H14"
            stroke="#22D3EE"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14 6.5 L14 15.5"
            stroke="#22D3EE"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Bloque derecho (destino) */}
          <rect x="14" y="8.5" width="7" height="5" rx="1.5" fill="#22D3EE" />
        </svg>
      </div>
    ),
    size
  );
}
