import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0f172a',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: 14,
          fontWeight: 700,
          color: '#38bdf8',
          letterSpacing: '-0.5px',
        }}
      >
        JN
      </div>
    ),
    { ...size }
  )
}
