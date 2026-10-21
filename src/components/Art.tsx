import { useId } from 'react'
import type { ArtKind } from '../types'

// Original SVG hardware illustrations. Not product photography and not any specific brand.
export default function Art({ kind, view = 0, className, label }: { kind: ArtKind; view?: number; className?: string; label?: string }) {
  const id = useId().replace(/:/g, '')
  const hue = view === 1 ? ['#FF6200', '#0066FF'] : view === 2 ? ['#FFB800', '#FF6200'] : ['#0066FF', '#FF6200']
  const [a, b] = hue
  const rot = [0, -5, 5][view] ?? 0
  const body = `url(#b${id})`
  const fan = (cx: number, cy: number, r: number) => {
    const s = r / 100
    const clipId = `fc_${id}_${cx}_${cy}`
    // Sickle airfoil fan blade mathematically bounded within r * 0.78
    const p1 = `${26 * s} ${-14 * s}`
    const c1 = `${40 * s} ${-28 * s}`
    const c2 = `${46 * s} ${-50 * s}`
    const p2 = `${30 * s} ${-68 * s}`
    const p3 = `${16 * s} ${-74 * s}`
    const c3 = `${24 * s} ${-52 * s}`
    const c4 = `${10 * s} ${-34 * s}`
    const p4 = `${-4 * s} ${-27 * s}`
    const blade = `M ${p1} C ${c1}, ${c2}, ${p2} A ${74 * s} ${74 * s} 0 0 0 ${p3} C ${c3}, ${c4}, ${p4} A ${28 * s} ${28 * s} 0 0 1 ${p1} Z`
    const ridge = `M ${18 * s} ${-20 * s} C ${30 * s} ${-36 * s}, ${36 * s} ${-52 * s}, ${23 * s} ${-70 * s}`

    return (
      <g transform={`translate(${cx} ${cy})`}>
        <defs>
          <clipPath id={clipId}>
            <circle cx="0" cy="0" r={r * 0.92} />
          </clipPath>
        </defs>

        {/* Outer Circular Recessed Bezel Frame (GPU Shroud duct ring) */}
        <circle cx="0" cy="0" r={r} fill="#060e1c" stroke="#1d2f4d" strokeWidth="2.5" />
        <circle cx="0" cy="0" r={r * 0.95} fill="#030813" stroke="#101c30" strokeWidth="1.5" />
        <circle cx="0" cy="0" r={r * 0.92} fill="#02050b" />

        {/* Fan Assembly Clipped strictly inside circular duct cavity */}
        <g clipPath={`url(#${clipId})`}>
          {/* Rear Stator Brackets (Stationary beneath rotor) */}
          <line x1={-r * 0.22} y1={-r * 0.22} x2={-r * 0.52} y2={-r * 0.52} stroke="#0e1d35" strokeWidth="2.5" strokeLinecap="round" />
          <line x1={r * 0.22} y1={-r * 0.22} x2={r * 0.52} y2={-r * 0.52} stroke="#0e1d35" strokeWidth="2.5" strokeLinecap="round" />
          <line x1={-r * 0.22} y1={r * 0.22} x2={-r * 0.52} y2={r * 0.52} stroke="#0e1d35" strokeWidth="2.5" strokeLinecap="round" />
          <line x1={r * 0.22} y1={r * 0.22} x2={r * 0.52} y2={r * 0.52} stroke="#0e1d35" strokeWidth="2.5" strokeLinecap="round" />

          {/* Smooth Revolving Rotor Assembly */}
          <g className="fan-spin">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="3.2s"
              repeatCount="indefinite"
            />
            {/* 9 Aerodynamic Sickle Airfoil Blades */}
            {Array.from({ length: 9 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 40})`}>
                <path
                  d={blade}
                  fill="#0c182b"
                  stroke={a}
                  strokeWidth={1.2 * s}
                  strokeOpacity="0.55"
                />
                <path
                  d={ridge}
                  fill="none"
                  stroke="#00D2FF"
                  strokeWidth={0.8 * s}
                  strokeOpacity="0.45"
                />
              </g>
            ))}

            {/* Outer Axial-tech Barrier Ring (welded to blade tips) */}
            <circle cx="0" cy="0" r={r * 0.76} fill="none" stroke={a} strokeWidth={1.8 * s} strokeOpacity="0.75" />
            <circle cx="0" cy="0" r={r * 0.74} fill="none" stroke="#00D2FF" strokeWidth={0.8 * s} strokeOpacity="0.4" />

            {/* Center Motor Hub */}
            <circle cx="0" cy="0" r={r * 0.3} fill="#091424" stroke="#223a60" strokeWidth="1.8" />
            <circle cx="0" cy="0" r={r * 0.2} fill="#0e1d34" stroke={a} strokeWidth="1.2" strokeOpacity="0.7" />

            {/* Center Raksha Brand Colors */}
            <circle cx="0" cy="0" r={r * 0.12} fill={b} />
            <circle cx="0" cy="0" r={r * 0.06} fill="#FFB800" />
          </g>
        </g>
      </g>
    )
  }
  let shape: JSX.Element
  switch (kind) {
    case 'gpu':
      shape = <g>
        <rect x="26" y="96" width="14" height="100" rx="3" fill="#22324f" />
        <rect x="38" y="88" width="326" height="112" rx="16" fill={body} stroke="#2a3b5c" />
        {fan(130, 144, 42)}{fan(262, 144, 42)}
        <rect x="52" y="194" width="300" height="5" rx="2.5" fill={b} />
        <rect x="120" y="200" width="190" height="12" fill="#FFB800" opacity=".95" />
        <rect x="320" y="104" width="30" height="8" rx="4" fill={a} />
      </g>; break
    case 'laptop':
      shape = <g>
        <rect x="76" y="34" width="248" height="164" rx="12" fill="#0a1424" stroke="#2a3b5c" strokeWidth="3" />
        <rect x="88" y="46" width="224" height="140" rx="4" fill={`url(#s${id})`} />
        <path d="M88 150 Q150 100 200 130 T312 96 V186 H88Z" fill="#07111F" opacity=".55" />
        <path d="M30 210 H370 L350 232 Q348 236 342 236 H58 Q52 236 50 232Z" fill={body} stroke="#2a3b5c" />
        <rect x="165" y="212" width="70" height="6" rx="3" fill="#07111F" />
      </g>; break
    case 'tower':
      shape = <g>
        <rect x="112" y="16" width="176" height="268" rx="16" fill={body} stroke="#2a3b5c" strokeWidth="2" />
        <rect x="124" y="28" width="152" height="244" rx="10" fill="#050b15" />
        {fan(168, 78, 26)}{fan(168, 146, 26)}{fan(168, 214, 26)}
        <rect x="204" y="124" width="60" height="26" rx="5" fill="#16243D" stroke={a} />
        <rect x="270" y="40" width="3" height="220" fill={b} />
        <rect x="205" y="60" width="58" height="4" fill={a} opacity=".7" />
      </g>; break
    case 'ram':
      shape = <g>
        <rect x="30" y="100" width="340" height="96" rx="8" fill="#0d3b2e" stroke="#2a3b5c" />
        <rect x="30" y="100" width="340" height="30" rx="8" fill={body} />
        {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={58 + i * 50} y="140" width="38" height="40" rx="4" fill="#0a1424" stroke="#2a3b5c" />)}
        {Array.from({ length: 30 }).map((_, i) => <rect key={i} x={40 + i * 10.6} y="190" width="6" height="12" fill="#FFB800" />)}
        <rect x="40" y="106" width="320" height="4" rx="2" fill={a} />
      </g>; break
    case 'ssd':
      shape = <g>
        <rect x="50" y="110" width="300" height="84" rx="8" fill="#0a1424" stroke="#2a3b5c" />
        <rect x="64" y="122" width="170" height="60" rx="4" fill={body} stroke={a} strokeOpacity=".6" />
        <rect x="248" y="122" width="40" height="60" rx="4" fill="#16243D" />
        <rect x="298" y="122" width="40" height="60" rx="4" fill="#16243D" />
        <rect x="50" y="110" width="8" height="84" fill="#FFB800" />
      </g>; break
    case 'accessories':
    case 'keyboard':
      shape = <g>
        <rect x="20" y="82" width="360" height="136" rx="14" fill={body} stroke="#2a3b5c" />
        {[0, 1, 2, 3].map((r) => Array.from({ length: 12 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={34 + c * 28.5} y={94 + r * 28} width="24" height="23" rx="4" fill="#0a1424" stroke={r === 0 ? a : '#2a3b5c'} strokeOpacity={r === 0 ? 0.8 : 1} />
        )))}
        <rect x="90" y="190" width="200" height="22" rx="4" fill="#0a1424" stroke={b} strokeOpacity=".8" />
      </g>; break
    case 'mouse':
      shape = <g>
        <path d="M200 40 C262 40 292 90 292 160 C292 224 258 262 200 262 C142 262 108 224 108 160 C108 90 138 40 200 40Z" fill={body} stroke="#2a3b5c" strokeWidth="2" />
        <path d="M200 40 V130" stroke="#2a3b5c" strokeWidth="2" />
        <rect x="190" y="70" width="20" height="38" rx="10" fill="#050b15" stroke={a} />
        <path d="M122 190 Q200 246 278 190" fill="none" stroke={b} strokeWidth="3" />
      </g>; break
    case 'monitor':
      shape = <g>
        <rect x="36" y="30" width="328" height="190" rx="10" fill="#0a1424" stroke="#2a3b5c" strokeWidth="3" />
        <rect x="46" y="40" width="308" height="168" rx="4" fill={`url(#s${id})`} />
        <path d="M46 170 Q130 110 210 150 T354 110 V208 H46Z" fill="#07111F" opacity=".5" />
        <rect x="188" y="220" width="24" height="36" fill="#22324f" />
        <rect x="140" y="254" width="120" height="10" rx="5" fill="#2a3b5c" />
      </g>; break
  }
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label ?? `${kind} illustration`} className={className} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b2b48" /><stop offset="1" stopColor="#0c1830" /></linearGradient>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
      </defs>
      <g transform={`rotate(${rot} 200 150)`}>{shape}</g>
    </svg>
  )
}
