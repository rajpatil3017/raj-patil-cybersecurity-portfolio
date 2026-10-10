import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raj Patil | Network Security & Cybersecurity',
  description: 'Professional portfolio of Raj Patil — Network Security, Fortinet TAC, enterprise networking, data center operations, and AI security learning projects.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'Raj Patil | Network Security', description: 'Enterprise network security, firewall troubleshooting, and cybersecurity projects.', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
