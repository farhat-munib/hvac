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
  return (
    <svg {...base} {...props}>
      <path d="M12 2v20M4.2 6.5l15.6 9M19.8 6.5L4.2 15.5" />
      <path d="M12 5l2.2 2.2L12 9.4 9.8 7.2 12 5ZM12 19l2.2-2.2L12 14.6 9.8 16.8 12 19Z" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c.6 3-1.8 4.4-2.9 6.2-1 1.7-1.6 3.4-1.6 5A4.5 4.5 0 0 0 16.5 14c0-1.5-.7-2.9-1.6-4 .2 1.3-.5 2.4-1.4 2.6.7-2.6-.5-4.8-1.5-6.1C11 5.3 11.6 4 12 3Z" />
    </svg>
  );
}

export function HeatPumpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 8.6v6.8M8.6 12h6.8" />
    </svg>
  );
}

export function AirQualityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9h9.5a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M3 14h13a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M3 19h7.5a2 2 0 1 0-2-2" />
    </svg>
  );
}

export function DuctIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h7v8H3zM10 9.5l5-2.5v10l-5-2.5M19 7v10" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.6-.6-2.5 2.6-2.4Z" />
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
