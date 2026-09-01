type ContactIconName = 'email' | 'whatsapp' | 'call' | 'location';

export default function ContactIcon({ name }: { name: ContactIconName }) {
  const paths: Record<ContactIconName, React.ReactNode> = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.1Z"/><path d="M8.2 7.8c.3-.5.6-.5.9-.5h.4l1.1 2.5c.1.3 0 .5-.2.7l-.7.8c.8 1.6 1.9 2.7 3.6 3.5l.8-1c.2-.3.5-.3.8-.2l2.3 1.1c.3.2.4.4.3.8-.2 1.2-1.4 2.1-2.6 2.1-2.1 0-4.5-1.3-6.3-3.1-1.7-1.7-2.8-3.9-2.7-5.2 0-.6.2-1.1.5-1.5Z"/></>,
    call: <path d="M7.1 3.5 4.3 5.2c-.8.5-1.1 1.5-.7 2.4 2.5 5.8 7 10.3 12.8 12.8.9.4 1.9.1 2.4-.7l1.7-2.8c.4-.7.2-1.6-.5-2l-3.1-1.8c-.6-.3-1.3-.2-1.8.3l-1.3 1.6A15.1 15.1 0 0 1 9 10.2l1.6-1.3c.5-.5.6-1.2.3-1.8L9.1 4c-.4-.7-1.3-.9-2-.5Z"/>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.7"/></>,
  };

  return <span className="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24">{paths[name]}</svg></span>;
}
