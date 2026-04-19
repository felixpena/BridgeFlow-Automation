import { ImageResponse } from "next/og";

export const size        = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon generado dinámicamente por Next.js App Router.
 * Símbolo: dos bloques (layers) conectados por una flecha cian,
 * representando el puente de datos entre sistemas.
 */
export default function Icon() {
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
          borderRadius:   "7px",
        }}
      >
        <svg
          width="22"
          height="22"
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
