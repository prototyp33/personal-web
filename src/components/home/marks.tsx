export function Bloom({ className }: { className?: string }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true">
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="40"
          cy="18"
          rx="5.2"
          ry="13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          transform={`rotate(${deg} 40 40)`}
        />
      ))}
      <circle
        cx="40"
        cy="40"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function PortraitPlate() {
  return (
    <svg
      className="portrait-art"
      viewBox="0 0 320 420"
      role="img"
      aria-label="Abstract stand-in for a portrait of Adrian Javier Iraegui"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="320" height="420" fill="#f3d4cd" />
      <circle cx="232" cy="108" r="74" fill="#163a82" />
      <circle
        cx="232"
        cy="108"
        r="48"
        fill="none"
        stroke="#f7f2ee"
        strokeWidth="1.5"
      />
      <rect x="28" y="168" width="118" height="168" rx="28" fill="#f8e0db" />
      <path
        d="M46 292c22-28 40-28 62 0"
        fill="none"
        stroke="#163a82"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M52 250h70"
        fill="none"
        stroke="#b85a54"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="168" y="236" width="22" height="112" rx="11" fill="#161311" />
      <rect x="198" y="198" width="22" height="150" rx="11" fill="#163a82" />
      <rect x="228" y="258" width="22" height="90" rx="11" fill="#b85a54" />
      <rect x="258" y="220" width="22" height="128" rx="11" fill="#161311" />
    </svg>
  );
}

export function ProjectPlate() {
  return (
    <svg
      className="portrait-art"
      viewBox="0 0 640 400"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="640" height="400" fill="#f0cdc6" />
      <rect x="0" y="262" width="640" height="138" fill="#e7bfb6" />
      <rect x="48" y="168" width="54" height="150" rx="12" fill="#f8e0db" />
      <rect x="116" y="124" width="54" height="194" rx="12" fill="#163a82" />
      <rect x="184" y="186" width="54" height="132" rx="12" fill="#161311" />
      <rect x="252" y="96" width="54" height="222" rx="12" fill="#f8e0db" />
      <rect x="320" y="150" width="54" height="168" rx="12" fill="#b85a54" />
      <rect x="388" y="118" width="54" height="200" rx="12" fill="#163a82" />
      <rect x="456" y="176" width="54" height="142" rx="12" fill="#161311" />
      <rect x="524" y="140" width="54" height="178" rx="12" fill="#f8e0db" />
      <path
        d="M40 248c70-46 120-18 180-52 62-36 110 8 170-28 48-28 90-8 150-46"
        fill="none"
        stroke="#f7f2ee"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
