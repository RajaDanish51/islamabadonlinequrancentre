import React from "react";

// Simple, dependency-free stroke icons used throughout the page.
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const UsersIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const PlayIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
  </svg>
);

export const GraduationCapIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
    <path d="M22 10v6" />
  </svg>
);

export const GlobeIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
);

export const UserIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
  </svg>
);

export const ClockIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const OneToOneIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="8" cy="9" r="3" />
    <circle cx="16" cy="9" r="3" />
    <path d="M4 19c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5" />
    <path d="M12 19c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5" />
  </svg>
);

export const ShieldIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const BookOpenIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M2 5c2-1 5-1 7 0v14c-2-1-5-1-7 0V5Z" />
    <path d="M22 5c-2-1-5-1-7 0v14c2-1 5-1 7 0V5Z" />
  </svg>
);

export const BookIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5v-16Z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
  </svg>
);

export const HeadsetIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 13a9 9 0 0 1 18 0" />
    <rect x="3" y="13" width="4" height="6" rx="1" />
    <rect x="17" y="13" width="4" height="6" rx="1" />
    <path d="M19 19v1a2 2 0 0 1-2 2h-3" />
  </svg>
);

export const CubeIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
    <path d="M3 7l9 5 9-5" />
    <path d="M12 12v10" />
  </svg>
);

export const ScrollIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M8 2h11v16a3 3 0 0 1-3 3H8" />
    <path d="M8 21a3 3 0 0 1-3-3V5a3 3 0 0 0-3 3" />
    <path d="M11 8h4" />
    <path d="M11 12h4" />
  </svg>
);

export const MosqueIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2v3" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
    <path d="M12 8a4 4 0 0 1 4 4v3H8v-3a4 4 0 0 1 4-4Z" />
    <path d="M2 20v-4a3 3 0 0 1 3-3 3 3 0 0 1 3 3v4" />
    <path d="M16 20v-4a3 3 0 0 1 3-3 3 3 0 0 1 3 3v4" />
    <path d="M2 20h20" />
  </svg>
);

export const CalendarIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const CheckCircleIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const StarIcon = ({ filled = true, ...props }) => (
  <svg
    {...base}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    {...props}
  >
    <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 6 10 7 10-7" />
  </svg>
);

export const PinIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const FacebookIcon = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H7v3.2h2.8v8h3.7Z" />
  </svg>
);

export const YoutubeIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <polygon points="10 9 16 12 10 15 10 9" fill="currentColor" stroke="none" />
  </svg>
);

export const InstagramIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const ChevronRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const SendIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const ArabicIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 6h16" />
    <path d="M4 12h10" />
    <path d="M4 18h16" />
    <circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const HandsPrayIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3v9" />
    <path d="M7 5c0 4-2 5-2 9a5 5 0 0 0 5 5" />
    <path d="M17 5c0 4 2 5 2 9a5 5 0 0 1-5 5" />
    <path d="M9 21h6" />
  </svg>
);

export const WhatsappIcon = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.4 3.8 3.4.5.2.9.3 1.3.4.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
  </svg>
);

export const WalletIcon = ({ width = 18, height = 18, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);

export const BankIcon = ({ width = 18, height = 18, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="21" x2="21" y2="21" />
    <line x1="5" y1="21" x2="5" y2="10" />
    <line x1="9" y1="21" x2="9" y2="10" />
    <line x1="15" y1="21" x2="15" y2="10" />
    <line x1="19" y1="21" x2="19" y2="10" />
    <polygon points="12 3 21 9 3 9" />
  </svg>
);

export const MobilePaymentIcon = ({ width = 18, height = 18, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);