'use client';

import { useState } from 'react';

type Language = 'en' | 'bn';

const copy = {
  en: {
    back: 'Back to Automation Point', role: 'Chief Executive Officer & Co-Founder',
    title: 'Business Leadership & Strategic Growth',
    intro: 'Leads the business direction, client relationships and long-term growth of Automation Point, aligning practical industry needs with focused technology solutions.',
    leadership: 'Leadership Focus',
    areas: [['Business Direction', 'Shapes priorities around real customer and production needs.'], ['Client Relationships', 'Builds clear, dependable communication from discovery through delivery.'], ['Sustainable Growth', 'Guides Automation Point toward focused, long-term business development.']],
    noteTitle: 'Professional Portfolio',
    note: 'A detailed career timeline, education, achievements and professional expertise will be added after the complete CV is provided.',
    contact: 'Contact Kamruzzaman Zico', source: 'Profile prepared from the currently available Automation Point information.',
  },
  bn: {
    back: 'Automation Point-এ ফিরে যান', role: 'চিফ এক্সিকিউটিভ অফিসার ও কো-ফাউন্ডার',
    title: 'ব্যবসায়িক নেতৃত্ব ও কৌশলগত প্রবৃদ্ধি',
    intro: 'Automation Point-এর ব্যবসায়িক দিকনির্দেশনা, ক্লায়েন্ট সম্পর্ক ও দীর্ঘমেয়াদি প্রবৃদ্ধিতে নেতৃত্ব দেন এবং বাস্তব ইন্ডাস্ট্রি প্রয়োজনের সঙ্গে কার্যকর প্রযুক্তি সমাধানের সমন্বয় করেন।',
    leadership: 'নেতৃত্বের ক্ষেত্র',
    areas: [['ব্যবসায়িক দিকনির্দেশনা', 'বাস্তব customer ও production প্রয়োজন অনুযায়ী অগ্রাধিকার নির্ধারণ।'], ['ক্লায়েন্ট সম্পর্ক', 'Discovery থেকে delivery পর্যন্ত স্পষ্ট ও নির্ভরযোগ্য যোগাযোগ।'], ['টেকসই প্রবৃদ্ধি', 'Automation Point-এর লক্ষ্যভিত্তিক দীর্ঘমেয়াদি business development পরিচালনা।']],
    noteTitle: 'পেশাগত পোর্টফোলিও',
    note: 'পূর্ণ CV পাওয়ার পর career timeline, education, achievements এবং professional expertise-এর বিস্তারিত এখানে যোগ করা হবে।',
    contact: 'Kamruzzaman Zico-এর সঙ্গে যোগাযোগ', source: 'Automation Point-এর বর্তমানে পাওয়া তথ্য থেকে এই প্রোফাইল প্রস্তুত করা হয়েছে।',
  },
};

export default function KamruzzamanZicoPortfolio() {
  const [language, setLanguage] = useState<Language>('en');
  const t = copy[language];
  const bn = language === 'bn';

  return <main className={`profile-page profile-page-zico ${bn ? 'bangla' : ''}`}>
    <header className="profile-header"><div className="shell"><a className="brand" href="/"><img className="brand-logo" src="/automation-point-logo.svg" alt="Automation Point logo"/><span><strong>AUTOMATION POINT</strong><small>AUTOMATING THE FUTURE OF PREPRESS</small></span></a><div className="profile-nav"><a href="/">← {t.back}</a><div className="profile-language"><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button><button className={language === 'bn' ? 'active' : ''} onClick={() => setLanguage('bn')}>বাংলা</button></div></div></div></header>

    <section className="profile-hero"><div className="shell profile-hero-grid"><div className="profile-portrait"><img src="/kamruzzaman-zico.jpg" alt="Kamruzzaman Zico"/></div><div className="profile-hero-copy"><p className="profile-kicker">{t.role}</p><h1>Kamruzzaman<br/>Zico</h1><h2>{t.title}</h2><p>{t.intro}</p><div className="profile-actions"><a className="btn primary" href="mailto:kamruzzamanzico@gmail.com">{t.contact} →</a></div></div></div></section>

    <section className="profile-focus shell"><div className="profile-focus-heading"><p className="profile-label">{t.leadership}</p><h2>{bn ? 'দৃষ্টি, সম্পর্ক ও প্রবৃদ্ধির সমন্বিত নেতৃত্ব' : 'Leadership connecting vision, relationships and growth'}</h2></div><div className="profile-focus-grid">{t.areas.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="profile-awaiting"><div className="shell"><div className="profile-awaiting-mark">AP</div><div><p className="profile-label">{t.noteTitle}</p><h2>{bn ? 'বিস্তারিত প্রোফাইল শিগগিরই যুক্ত হবে' : 'Detailed professional profile coming next'}</h2><p>{t.note}</p></div></div></section>

    <section className="profile-contact"><div className="shell"><div><p>EMAIL</p><a href="mailto:kamruzzamanzico@gmail.com">kamruzzamanzico@gmail.com</a></div><div><p>MOBILE / WHATSAPP</p><a href="https://wa.me/8801911677766">+880 1911-677766</a></div><div><p>ROLE</p><strong>CEO &amp; Co-Founder</strong></div></div></section>
    <footer className="profile-footer"><div className="shell"><p>{t.source}</p><a href="/">Automation Point →</a></div></footer>
  </main>;
}
