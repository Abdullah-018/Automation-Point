'use client';

import { useState } from 'react';

type Language = 'en' | 'bn';

const profile = {
  en: {
    back: 'Back to Automation Point', role: 'Chief Technology Officer & Co-Founder',
    title: 'Industrial Software & Workflow Automation Engineer',
    intro: 'Production-grounded automation engineer with 9+ years of experience across labels, packaging and prepress. Builds practical software that turns repetitive production work into controlled, measurable systems.',
    stats: [['9+ Years', 'Print & packaging experience'], ['30+', 'Automation solutions designed'], ['250+', 'Press-ready jobs supported weekly'], ['15–35%', 'Fewer plate remakes from errors']],
    profileTitle: 'Executive Profile',
    profileText: 'Industrial software developer, workflow architect and print technology specialist. Combines Python, Java, VBA, Excel, PDF and Adobe workflow expertise with production leadership, data management and cross-functional delivery.',
    experienceTitle: 'Professional Experience',
    experience: [
      ['Senior Executive - Design', 'Dizayn Etiket Bangladesh · Kashimpur, Gazipur', 'Jul 2025 - Present', 'Reviews complex job sheets and customer data, prepares optimised press-ready files, conducts proof checks before CTP release and supports CS and PD teams on technical artwork issues.'],
      ['Senior Officer - Prepress', 'r-pac Bangladesh Ltd. · Rupganj, Narayanganj', 'Feb 2021 - Jun 2025', 'Generated ratio-based production files, developed Excel/VBA data-merge tools, improved global-brand workflows and mentored junior team members in quality and workflow practice.'],
      ['Assistant Designer - Design', 'Trisan Trims Ltd. · Savar, Dhaka', 'Jun 2017 - Jan 2021', 'Built core expertise in offset, PFL and screen layouts, proof checking, file optimisation and production setup.'],
    ],
    projectsTitle: 'Selected Automation Work',
    projects: [
      ['AP Ratio Program', 'Automates ratio planning and production calculations; reported workflow improvement of up to 95%.'],
      ['Production Planning System', 'Automates production preparation and planning; reported workflow improvement of up to 70%.'],
      ['Brand Workflow Automation', 'Solutions for ZARA / INDITEX, LPP and LC Waikiki production preparation and validation.'],
      ['Proof & CTP Automation', 'Supports faster, more consistent proof review, plate preparation and production handoff.'],
      ['Database Layout Automation', 'Generates production layouts from structured source data and operator-facing rules.'],
    ],
    skillsTitle: 'Core Expertise', skills: ['Workflow Automation', 'Industrial Software Development', 'Production Planning & Ratio Automation', 'Process Optimisation', 'Prepress Engineering', 'Variable Data Processing', 'Proof Checking & Quality Control'],
    toolsTitle: 'Technology & Tools', tools: ['Python, Java, VBA', 'Excel automation & GUI development', 'PDF processing & database layouts', 'Illustrator, InDesign, Photoshop, Acrobat Pro', 'NiceLabel, Barcode 6X, QR Code', 'Power Automate & Microsoft Teams'],
    educationTitle: 'Education', education: ['Bachelor of Business Studies (BBS) · Kowri M.A. Rouf Degree College · 2009–2013', 'H.S.C., Business Studies · 2007–2009', 'S.S.C., Business Studies · 2005–2007'],
    trainingTitle: 'Professional Training', training: ['Graphic Design: Layout & Production · 2016', 'CTP Plate Making · 2016', 'Plotter Machine: Mockup Cutter · 2021', 'Epson Printer: Proof Check · 2021'],
    approachTitle: 'Engineering Approach', approach: 'Diagnose the production constraint, map the operator workflow, define the business rules, build and test the tool, then refine it against actual production use.',
    contact: 'Contact Muhammad Abdullah', source: 'Portfolio content prepared from the supplied professional CV.',
  },
  bn: {
    back: 'Automation Point-এ ফিরে যান', role: 'চিফ টেকনোলজি অফিসার ও কো-ফাউন্ডার',
    title: 'ইন্ডাস্ট্রিয়াল সফটওয়্যার ও ওয়ার্কফ্লো অটোমেশন ইঞ্জিনিয়ার',
    intro: 'লেবেল, প্যাকেজিং ও প্রি-প্রেসে ৯+ বছরের বাস্তব অভিজ্ঞতাসম্পন্ন অটোমেশন ইঞ্জিনিয়ার। পুনরাবৃত্ত প্রোডাকশন কাজকে নিয়ন্ত্রিত ও পরিমাপযোগ্য সিস্টেমে রূপ দিতে ব্যবহারিক সফটওয়্যার তৈরি করেন।',
    stats: [['৯+ বছর', 'প্রিন্ট ও প্যাকেজিং অভিজ্ঞতা'], ['৩০+', 'ডিজাইন করা অটোমেশন সল্যুশন'], ['২৫০+', 'সাপ্তাহিক press-ready job support'], ['১৫–৩৫%', 'ভুলজনিত plate remake হ্রাস']],
    profileTitle: 'এক্সিকিউটিভ প্রোফাইল',
    profileText: 'ইন্ডাস্ট্রিয়াল সফটওয়্যার ডেভেলপার, ওয়ার্কফ্লো আর্কিটেক্ট ও প্রিন্ট টেকনোলজি বিশেষজ্ঞ। Python, Java, VBA, Excel, PDF ও Adobe workflow দক্ষতার সঙ্গে production leadership, data management এবং cross-functional delivery-এর অভিজ্ঞতা যুক্ত করেন।',
    experienceTitle: 'পেশাগত অভিজ্ঞতা',
    experience: [
      ['সিনিয়র এক্সিকিউটিভ - ডিজাইন', 'Dizayn Etiket Bangladesh · Kashimpur, Gazipur', 'জুলাই ২০২৫ - বর্তমান', 'জটিল job sheet ও customer data review, optimised press-ready file প্রস্তুত, CTP release-এর আগে proof check এবং technical artwork issue-তে CS ও PD team-কে সহায়তা।'],
      ['সিনিয়র অফিসার - প্রি-প্রেস', 'r-pac Bangladesh Ltd. · Rupganj, Narayanganj', 'ফেব্রুয়ারি ২০২১ - জুন ২০২৫', 'Ratio-based production file, Excel/VBA data-merge tool এবং global-brand workflow উন্নয়ন; quality ও workflow বিষয়ে junior team mentoring।'],
      ['অ্যাসিস্ট্যান্ট ডিজাইনার - ডিজাইন', 'Trisan Trims Ltd. · Savar, Dhaka', 'জুন ২০১৭ - জানুয়ারি ২০২১', 'Offset, PFL ও screen layout, proof checking, file optimisation এবং production setup-এ ভিত্তিগত দক্ষতা অর্জন।'],
    ],
    projectsTitle: 'নির্বাচিত অটোমেশন কাজ',
    projects: [
      ['AP Ratio Program', 'Ratio planning ও production calculation অটোমেশন; রিপোর্ট অনুযায়ী workflow-এ সর্বোচ্চ ৯৫% উন্নতি।'],
      ['Production Planning System', 'Production preparation ও planning অটোমেশন; রিপোর্ট অনুযায়ী সর্বোচ্চ ৭০% উন্নতি।'],
      ['Brand Workflow Automation', 'ZARA / INDITEX, LPP ও LC Waikiki production preparation এবং validation solution।'],
      ['Proof & CTP Automation', 'দ্রুত ও ধারাবাহিক proof review, plate preparation এবং production handoff সহায়তা।'],
      ['Database Layout Automation', 'Structured data ও operator-facing rule থেকে production layout তৈরি।'],
    ],
    skillsTitle: 'মূল দক্ষতা', skills: ['ওয়ার্কফ্লো অটোমেশন', 'ইন্ডাস্ট্রিয়াল সফটওয়্যার ডেভেলপমেন্ট', 'প্রোডাকশন প্ল্যানিং ও রেশিও অটোমেশন', 'প্রসেস অপটিমাইজেশন', 'প্রি-প্রেস ইঞ্জিনিয়ারিং', 'ভেরিয়েবল ডাটা প্রসেসিং', 'প্রুফ চেকিং ও কোয়ালিটি কন্ট্রোল'],
    toolsTitle: 'টেকনোলজি ও টুলস', tools: ['Python, Java, VBA', 'Excel automation ও GUI development', 'PDF processing ও database layouts', 'Illustrator, InDesign, Photoshop, Acrobat Pro', 'NiceLabel, Barcode 6X, QR Code', 'Power Automate ও Microsoft Teams'],
    educationTitle: 'শিক্ষা', education: ['Bachelor of Business Studies (BBS) · Kowri M.A. Rouf Degree College · ২০০৯–২০১৩', 'H.S.C., Business Studies · ২০০৭–২০০৯', 'S.S.C., Business Studies · ২০০৫–২০০৭'],
    trainingTitle: 'পেশাগত প্রশিক্ষণ', training: ['Graphic Design: Layout & Production · ২০১৬', 'CTP Plate Making · ২০১৬', 'Plotter Machine: Mockup Cutter · ২০২১', 'Epson Printer: Proof Check · ২০২১'],
    approachTitle: 'ইঞ্জিনিয়ারিং পদ্ধতি', approach: 'Production constraint শনাক্ত করা, operator workflow map করা, business rule নির্ধারণ, tool build ও test করা এবং বাস্তব production use থেকে ধারাবাহিকভাবে refine করা।',
    contact: 'Muhammad Abdullah-এর সঙ্গে যোগাযোগ', source: 'প্রদত্ত পেশাগত CV থেকে এই পোর্টফোলিওর তথ্য প্রস্তুত করা হয়েছে।',
  },
};

export default function MuhammadAbdullahPortfolio() {
  const [language, setLanguage] = useState<Language>('en');
  const t = profile[language];
  const bn = language === 'bn';

  return <main className={`profile-page ${bn ? 'bangla' : ''}`}>
    <header className="profile-header"><div className="shell"><a className="brand" href="/"><img className="brand-logo" src="/automation-point-logo.svg" alt="Automation Point logo"/><span><strong>AUTOMATION POINT</strong><small>AUTOMATING THE FUTURE OF PREPRESS</small></span></a><div className="profile-nav"><a href="/">← {t.back}</a><div className="profile-language"><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button><button className={language === 'bn' ? 'active' : ''} onClick={() => setLanguage('bn')}>বাংলা</button></div></div></div></header>

    <section className="profile-hero"><div className="shell profile-hero-grid"><div className="profile-portrait"><img src="/muhammad-abdullah.jpeg" alt="Muhammad Abdullah"/></div><div className="profile-hero-copy"><p className="profile-kicker">{t.role}</p><h1>Muhammad<br/>Abdullah</h1><h2>{t.title}</h2><p>{t.intro}</p><div className="profile-actions"><a className="btn primary" href="mailto:abdullahyz018@gmail.com">{t.contact} →</a><a className="btn secondary" href="https://www.linkedin.com/in/muhammad-abdullah-b83400164">LinkedIn ↗</a></div></div></div></section>

    <section className="profile-stats"><div className="shell">{t.stats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></section>

    <section className="profile-content shell"><aside className="profile-sidebar"><section><p className="profile-label">{t.skillsTitle}</p><ul className="skill-list">{t.skills.map(item => <li key={item}>{item}</li>)}</ul></section><section><p className="profile-label">{t.toolsTitle}</p><ul>{t.tools.map(item => <li key={item}>{item}</li>)}</ul></section><section><p className="profile-label">{t.educationTitle}</p><ul>{t.education.map(item => <li key={item}>{item}</li>)}</ul></section><section><p className="profile-label">{t.trainingTitle}</p><ul>{t.training.map(item => <li key={item}>{item}</li>)}</ul></section></aside>
      <div className="profile-main"><section><p className="profile-label">{t.profileTitle}</p><p className="profile-lead">{t.profileText}</p></section><section><p className="profile-label">{t.experienceTitle}</p><div className="profile-timeline">{t.experience.map(([role, company, date, text]) => <article key={role}><div><h3>{role}</h3><span>{company}</span></div><time>{date}</time><p>{text}</p></article>)}</div></section><section><p className="profile-label">{t.projectsTitle}</p><div className="profile-projects">{t.projects.map(([name, text]) => <article key={name}><h3>{name}</h3><p>{text}</p></article>)}</div></section><section className="profile-approach"><p className="profile-label">{t.approachTitle}</p><p>{t.approach}</p></section></div>
    </section>

    <section className="profile-contact"><div className="shell"><div><p>EMAIL</p><a href="mailto:abdullahyz018@gmail.com">abdullahyz018@gmail.com</a></div><div><p>MOBILE / WHATSAPP</p><a href="https://wa.me/8801814175662">+880 1814-175662</a></div><div><p>LOCATION</p><strong>Dhaka, Bangladesh</strong></div></div></section>
    <footer className="profile-footer"><div className="shell"><p>{t.source}</p><a href="/">Automation Point →</a></div></footer>
  </main>;
}
