// Lightweight inline SVG icons — keeps the demo dependency-free.
// All use currentColor and a 1.6 stroke for a consistent line-icon look.

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function SnowflakeIcon(props: IconProps) {
  // Six-armed snowflake with branch ticks — universally recognised as AC/cooling
  return (
    <svg {...base} {...props}>
      <path d="M12 2v20M2 12h20M5.64 5.64l12.72 12.72M18.36 5.64 5.64 18.36" />
      <path d="M9 4.5 12 7l3-2.5M9 19.5 12 17l3 2.5M4.5 9 7 12l-2.5 3M19.5 9 17 12l2.5 3" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  // Solid flame silhouette — furnace / heating
  return (
    <svg {...base} {...props}>
      <path d="M12 2c0 4.5-5 6.5-5 12a5 5 0 0 0 10 0c0-3-1.5-5-2.5-6.5.1 1.8-1 3-1.5 3.5C13.5 9 13 5.5 12 2Z" />
      <path d="M12 16a2 2 0 0 1 2 2" strokeOpacity="0.4" />
    </svg>
  );
}

export function HeatPumpIcon(props: IconProps) {
  // Outdoor heat-pump unit: cabinet + fan circle + bidirectional arrows showing heat exchange
  return (
    <svg {...base} {...props}>
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <path d="M2 11h20" />
      <circle cx="12" cy="16" r="3" />
      <path d="M12 13v6M9 16h6" strokeOpacity="0.45" />
      <path d="M6 7V5M10 7V4M14 7V4M18 7V5" />
    </svg>
  );
}

export function AirQualityIcon(props: IconProps) {
  // Air filter / purifier: a house outline with a leaf/sparkle inside — indoor air quality
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-5h6v5" />
      <path d="M12 10a2 2 0 0 1 0 4 2 2 0 0 1 0-4Z" />
      <path d="M12 8v1M12 15v1M10.3 9.3l.7.7M13.7 13l.7.7M9 12H8M16 12h-1M10.3 14.7l.7-.7M13.7 11l.7-.7" />
    </svg>
  );
}

export function DuctIcon(props: IconProps) {
  // Branching duct system: horizontal main trunk with two drop branches + registers
  return (
    <svg {...base} {...props}>
      <rect x="2" y="6" width="20" height="5" rx="1.5" />
      <path d="M7 11v5M17 11v5" />
      <rect x="5" y="16" width="4" height="2.5" rx="0.75" />
      <rect x="15" y="16" width="4" height="2.5" rx="0.75" />
      <path d="M5 8.5h3M11 8.5h2" strokeOpacity="0.4" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  // Clipboard with checklist + small wrench — maintenance / service plan
  return (
    <svg {...base} {...props}>
      <path d="M8 3H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <rect x="8" y="2" width="8" height="3" rx="1" />
      <path d="M9 12l2 2 4-4" />
      <path d="M9 17h4" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12V4h8l9 9-7 7-9-9Z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </svg>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 2 2.4 1.8 3 .2.9 2.9 2.1 2.1-1.1 2.8 1.1 2.8-2.1 2.1-.9 2.9-3 .2L12 22l-2.4-1.8-3-.2-.9-2.9L3.6 15l1.1-2.8L3.6 9.4l2.1-2.1.9-2.9 3-.2L12 2Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5 9 4l1 3.5-2 1.5a11 11 0 0 0 5 5l1.5-2 3.5 1 .5 2.5a2 2 0 0 1-2 2.3A15.5 15.5 0 0 1 4.2 5.5a2 2 0 0 1 2.3-2Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c4-4.5 7-8 7-11a7 7 0 1 0-14 0c0 3 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  // Filled star (uses fill, not stroke) for ratings.
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.9 6.1 21l1.2-6.5L2.5 9.9l6.6-.9L12 2.5Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
