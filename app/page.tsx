'use client';

import { useState } from 'react';

type Language = 'en' | 'bn';

const content = {
  en: {
    nav: ['About', 'Services', 'Projects', 'Process', 'Leadership', 'Contact'],
    hello: 'HELLO, WE ARE',
    heroTitle: 'Automation Point',
    heroRole: 'Prepress Automation & Digital Solutions',
    heroText: 'We turn complex production workflows into accurate, efficient and dependable systems—combining industry experience with practical software engineering.',
    slogan: 'AUTOMATING THE FUTURE OF PREPRESS',
    heroImpact: 'From complex workflows to precise production—engineered for speed, accuracy and scale.',
    primary: 'View Our Work', secondary: 'Explore Services',
    trustTitle: 'WHAT DEFINES US', trust: ['Industry-led', 'Custom-built', 'Quality-focused', 'End-to-end'],
    servicesLabel: 'WHAT WE DO', servicesTitle: 'Services We Offer',
    services: [
      ['⌁', 'Prepress Automation', 'Buyer layout workflows, ratio and size processing, barcode utilities and production-ready automation.'],
      ['◎', 'Proofing & Quality Systems', 'PDF comparison, artwork validation and structured checks for confident production output.'],
      ['⌘', 'Data & Workflow Engineering', 'PDF-to-database pipelines, Access and Excel automation, and specialised desktop utilities.'],
      ['◇', 'Digital Product Development', 'Web platforms, internal systems and business tools designed around real operational needs.'],
    ],
    workLabel: 'SOFTWARE PORTFOLIO', workTitle: 'Programs We Have Developed', workLink: 'Information only — no software runs on this website',
    projects: [
      ['AP-PrintPlan Pro', 'Print Planning & Costing', 'Calculates UPS, sheet use, plate requirements and print quantities, compares production options and prepares cost-aware print plans.'],
      ['Illustrator Relink by File Name', 'Adobe Illustrator Automation', 'Relinks every placed Illustrator asset from a selected folder when the replacement file has the same name, with match and failure reporting.'],
      ['LCW Data Processor', 'Data & Database Automation', 'Reads LCW Excel reports, classifies label data, validates and deduplicates records, then updates structured Access production tables.'],
      ['LCW PFL Automation', 'Label Layout Automation', 'Detects Regular, CH and Without Country Code content page-by-page and produces precise 25×180 mm or 35×200 mm PFL layouts.'],
      ['AP Proof & CTP Checker', 'Prepress Quality Assurance', 'Inspects artwork, compares approved/master and CTP output, checks text, barcode and geometry, and exports evidence-based reports.'],
      ['AP Ratio', 'Ratio & UPS Optimisation', 'Processes Excel order data to calculate ratio, repeat, sheets, plates and work orders, including waste and production-cost comparisons.'],
      ['AP AssetMerge Illustrator', 'Asset & Template Automation', 'Fills Illustrator template slots with linked AI/PDF assets and text data, then generates plate-ready AI, PDF or EPS outputs.'],
      ['AP DataMerge Illustrator', 'Variable Data Automation', 'Merges TSV data into numbered Illustrator placeholders, duplicates template pages and exports multi-artboard production files.'],
      ['AP MultiFusion DataMerge', 'Multi-function Illustrator Automation', 'Combines text merge, asset replacement and production-aware page grouping in one automated Illustrator plate workflow.'],
      ['INDITEX Data & Label System', 'Inditex Production Automation', 'Converts label JSON into Access data, resolves size charts, generates branded QR assets and supports price/care labels including Arabic content.'],
      ['Offset Production Dashboard', 'Offset Plate Automation', 'Matches Excel records with front/back PDF artwork, handles EAN barcode variants and builds ordered offset plate and combined production PDFs.'],
      ['LCW Blister Processor', 'Blister Data Automation', 'Combines LCW customer Excel reports, resolves package and component colour/size data, validates conflicts and creates a production-ready workbook.'],
      ['LCW PFL — Backup Build', 'Production Recovery Build', 'Maintained backup of the Regular, CH and Without Country Code layout engine for safe recovery and production continuity.'],
      ['ZARA & LCW UPS Dashboard', 'UPS & Combined PDF Production', 'Creates ZARA/PFL and LCW UPS distributions, rebuilds label blocks, preserves barcode quality and outputs print-ready combined PDFs.'],
    ],
    missionLabel: 'WHY WE EXIST', missionTitle: 'Precision in every process. Progress in every solution.',
    mission: 'Our mission is to study real prepress and production workflows, remove repetitive manual steps, reduce avoidable errors and turn complex processes into practical automation. We build dependable tools that help teams improve accuracy, shorten turnaround time, control production cost and make better operational decisions.',
    vision: 'Our vision is to shape a connected, technology-enabled future for the prepress industry—where people, data, artwork and production systems work together seamlessly. We aim to make advanced automation accessible to businesses of every size and help professionals operate, grow and innovate with greater confidence.',
    values: [['Precision', 'Accuracy is designed into the workflow from the beginning.'], ['Practicality', 'Every feature solves a real operational problem.'], ['Progress', 'Working ideas are refined into stronger, dependable systems.']],
    leadersLabel: 'OUR LEADERSHIP', leadersTitle: 'The people behind Automation Point',
    leadersIntro: 'A leadership team combining production insight, technical execution and business direction.',
    processLabel: 'OUR PROCESS', processTitle: 'How We Work',
    process: [['1', 'Discover', 'Understand the workflow, constraints and desired outcome.'], ['2', 'Design', 'Shape clear logic, interfaces and production rules.'], ['3', 'Develop', 'Build a focused solution around the real process.'], ['4', 'Test & Refine', 'Validate edge cases, quality and operational continuity.'], ['5', 'Deliver & Support', 'Deploy confidently and improve through real use.']],
    contactLabel: "LET'S WORK TOGETHER", contactTitle: 'Start Your Project', contactText: 'Have a repetitive workflow, data challenge or production bottleneck? Tell us where the work slows down.',
    email: 'Email us', whatsapp: 'WhatsApp', call: 'Call', addressLabel: 'Office',
    footer: 'Prepress automation, quality systems and digital solutions.', rights: 'All rights reserved.',
  },
  bn: {
    nav: ['আমাদের সম্পর্কে', 'সেবাসমূহ', 'প্রজেক্ট', 'কাজের ধাপ', 'নেতৃত্ব', 'যোগাযোগ'],
    hello: 'আমরা', heroTitle: 'Automation Point', heroRole: 'প্রি-প্রেস অটোমেশন ও ডিজিটাল সল্যুশন',
    heroText: 'শিল্পক্ষেত্রের বাস্তব অভিজ্ঞতা ও ব্যবহারিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সমন্বয়ে আমরা জটিল প্রোডাকশন ওয়ার্কফ্লোকে নির্ভুল, দ্রুত এবং নির্ভরযোগ্য সিস্টেমে রূপান্তর করি।',
    slogan: 'AUTOMATING THE FUTURE OF PREPRESS',
    heroImpact: 'জটিল ওয়ার্কফ্লো থেকে নির্ভুল প্রোডাকশন—গতি, সঠিকতা ও স্কেলের জন্য প্রকৌশলভিত্তিক সমাধান।',
    primary: 'আমাদের কাজ দেখুন', secondary: 'সেবাসমূহ দেখুন', trustTitle: 'আমাদের বৈশিষ্ট্য', trust: ['ইন্ডাস্ট্রি-কেন্দ্রিক', 'কাস্টম সল্যুশন', 'মান-কেন্দ্রিক', 'শুরু থেকে শেষ'],
    servicesLabel: 'আমাদের সেবা', servicesTitle: 'যেসব সেবা আমরা দিই',
    services: [
      ['⌁', 'প্রি-প্রেস অটোমেশন', 'বায়ার লেআউট, রেশিও ও সাইজ প্রসেসিং, বারকোড ইউটিলিটি এবং প্রোডাকশন অটোমেশন।'],
      ['◎', 'প্রুফিং ও কোয়ালিটি সিস্টেম', 'PDF তুলনা, আর্টওয়ার্ক ভ্যালিডেশন এবং নির্ভরযোগ্য আউটপুটের জন্য কাঠামোবদ্ধ যাচাই।'],
      ['⌘', 'ডাটা ও ওয়ার্কফ্লো ইঞ্জিনিয়ারিং', 'PDF থেকে ডাটাবেজ, Access ও Excel অটোমেশন এবং বিশেষায়িত ডেস্কটপ ইউটিলিটি।'],
      ['◇', 'ডিজিটাল প্রোডাক্ট ডেভেলপমেন্ট', 'বাস্তব ব্যবসায়িক প্রয়োজন অনুযায়ী ওয়েব প্ল্যাটফর্ম, ইন্টারনাল সিস্টেম ও ডিজিটাল টুল।'],
    ],
    workLabel: 'সফটওয়্যার পোর্টফোলিও', workTitle: 'আমাদের ডেভেলপ করা প্রোগ্রাম', workLink: 'এই ওয়েবসাইটটি শুধু তথ্য প্রদর্শন করে—এখানে কোনো সফটওয়্যার চালু হয় না',
    projects: [
      ['AP-PrintPlan Pro', 'প্রিন্ট প্ল্যানিং ও কস্টিং', 'UPS, শিট ব্যবহার, প্লেট ও প্রিন্ট পরিমাণ হিসাব করে, বিকল্প তুলনা করে এবং কস্ট-ভিত্তিক প্রিন্ট প্ল্যান তৈরি করে।'],
      ['Illustrator Relink by File Name', 'Adobe Illustrator অটোমেশন', 'একই নামের replacement file ব্যবহার করে Illustrator-এর সব placed asset relink করে এবং match/failure report দেয়।'],
      ['LCW Data Processor', 'ডাটা ও ডাটাবেজ অটোমেশন', 'LCW Excel report পড়ে, label data শ্রেণিবিন্যাস, validation ও deduplication করে Access production table আপডেট করে।'],
      ['LCW PFL Automation', 'লেবেল লেআউট অটোমেশন', 'প্রতিটি page-এ Regular, CH ও Without Country Code শনাক্ত করে নির্ভুল 25×180 বা 35×200 mm PFL layout তৈরি করে।'],
      ['AP Proof & CTP Checker', 'প্রি-প্রেস কোয়ালিটি অ্যাস্যুরেন্স', 'Artwork, approved/master এবং CTP output তুলনা করে text, barcode ও geometry যাচাইসহ evidence report তৈরি করে।'],
      ['AP Ratio', 'রেশিও ও UPS অপটিমাইজেশন', 'Excel order data থেকে ratio, repeat, sheet, plate ও work order হিসাব করে waste ও production cost তুলনা করে।'],
      ['AP AssetMerge Illustrator', 'অ্যাসেট ও টেমপ্লেট অটোমেশন', 'Illustrator template slot-এ linked AI/PDF asset ও text বসিয়ে plate-ready AI, PDF বা EPS output তৈরি করে।'],
      ['AP DataMerge Illustrator', 'ভেরিয়েবল ডাটা অটোমেশন', 'TSV data-কে numbered Illustrator placeholder-এ merge করে template page duplicate ও multi-artboard file export করে।'],
      ['AP MultiFusion DataMerge', 'মাল্টি-ফাংশন Illustrator অটোমেশন', 'Text merge, asset replacement ও production-aware page grouping একসঙ্গে করে automated plate workflow তৈরি করে।'],
      ['INDITEX Data & Label System', 'Inditex প্রোডাকশন অটোমেশন', 'Label JSON থেকে Access data, size-chart resolution, branded QR এবং Arabic-সহ price/care label প্রস্তুত করে।'],
      ['Offset Production Dashboard', 'অফসেট প্লেট অটোমেশন', 'Excel record-এর সঙ্গে front/back PDF artwork ও EAN barcode মিলিয়ে সাজানো offset plate ও combined production PDF তৈরি করে।'],
      ['LCW Blister Processor', 'ব্লিস্টার ডাটা অটোমেশন', 'LCW customer Excel report একত্র করে package/component colour ও size resolve, conflict validate এবং production workbook তৈরি করে।'],
      ['LCW PFL — Backup Build', 'প্রোডাকশন রিকভারি বিল্ড', 'Regular, CH ও Without Country Code layout engine-এর নিরাপদ recovery ও production continuity backup।'],
      ['ZARA & LCW UPS Dashboard', 'UPS ও Combined PDF Production', 'ZARA/PFL ও LCW UPS distribution, label block rebuild, barcode quality preservation এবং print-ready combined PDF তৈরি করে।'],
    ],
    missionLabel: 'আমাদের উদ্দেশ্য', missionTitle: 'প্রতিটি প্রক্রিয়ায় নির্ভুলতা। প্রতিটি সমাধানে অগ্রগতি।',
    mission: 'আমাদের মিশন হলো বাস্তব প্রি-প্রেস ও প্রোডাকশন ওয়ার্কফ্লো গভীরভাবে বোঝা, পুনরাবৃত্ত ম্যানুয়াল ধাপ কমানো, এড়ানো সম্ভব এমন ভুল প্রতিরোধ করা এবং জটিল প্রক্রিয়াকে ব্যবহারিক অটোমেশনে রূপ দেওয়া। আমরা এমন নির্ভরযোগ্য টুল তৈরি করি যা দলকে নির্ভুলতা বাড়াতে, টার্নঅ্যারাউন্ড সময় কমাতে, উৎপাদন ব্যয় নিয়ন্ত্রণ করতে এবং উন্নত অপারেশনাল সিদ্ধান্ত নিতে সহায়তা করে।',
    vision: 'আমাদের ভিশন হলো প্রি-প্রেস শিল্পের জন্য একটি সংযুক্ত ও প্রযুক্তিনির্ভর ভবিষ্যৎ গড়ে তোলা—যেখানে মানুষ, ডাটা, আর্টওয়ার্ক ও প্রোডাকশন সিস্টেম নির্বিঘ্নে একসঙ্গে কাজ করবে। আমরা উন্নত অটোমেশনকে সব আকারের প্রতিষ্ঠানের নাগালে আনতে এবং পেশাজীবীদের আরও আত্মবিশ্বাসের সঙ্গে কাজ, প্রবৃদ্ধি ও উদ্ভাবনে সক্ষম করতে চাই।',
    values: [['নির্ভুলতা', 'শুরু থেকেই ওয়ার্কফ্লোর মধ্যে সঠিকতা নিশ্চিত করা হয়।'], ['ব্যবহারিকতা', 'প্রতিটি ফিচার বাস্তব অপারেশনাল সমস্যার সমাধান করে।'], ['অগ্রগতি', 'কার্যকর ধারণাকে উন্নত করে নির্ভরযোগ্য সিস্টেমে রূপ দেওয়া হয়।']],
    leadersLabel: 'আমাদের নেতৃত্ব', leadersTitle: 'Automation Point-এর পেছনের মানুষ', leadersIntro: 'প্রোডাকশন অভিজ্ঞতা, প্রযুক্তিগত বাস্তবায়ন ও ব্যবসায়িক দিকনির্দেশনার সমন্বিত নেতৃত্ব।',
    processLabel: 'আমাদের প্রক্রিয়া', processTitle: 'আমরা যেভাবে কাজ করি',
    process: [['১', 'অনুসন্ধান', 'ওয়ার্কফ্লো, সীমাবদ্ধতা ও কাঙ্ক্ষিত ফলাফল বুঝি।'], ['২', 'ডিজাইন', 'লজিক, ইন্টারফেস ও প্রোডাকশন রুল নির্ধারণ করি।'], ['৩', 'ডেভেলপ', 'বাস্তব প্রক্রিয়াকে কেন্দ্র করে সমাধান তৈরি করি।'], ['৪', 'পরীক্ষা ও উন্নয়ন', 'ব্যতিক্রম, মান ও ধারাবাহিকতা যাচাই করি।'], ['৫', 'ডেলিভারি ও সাপোর্ট', 'নির্ভরতার সঙ্গে চালু করি এবং ব্যবহার থেকে উন্নত করি।']],
    contactLabel: 'একসঙ্গে কাজ করি', contactTitle: 'আপনার প্রজেক্ট শুরু করুন', contactText: 'কোনো পুনরাবৃত্ত কাজ, ডাটা সমস্যা বা প্রোডাকশন বাধা আছে? কোথায় কাজ ধীর হয়, আমাদের জানান।',
    email: 'ইমেইল', whatsapp: 'হোয়াটসঅ্যাপ', call: 'ফোন', addressLabel: 'অফিস',
    footer: 'প্রি-প্রেস অটোমেশন, কোয়ালিটি সিস্টেম ও ডিজিটাল সল্যুশন।', rights: 'সর্বস্বত্ব সংরক্ষিত।',
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = content[language];
  const bn = language === 'bn';
  const ids = ['about', 'services', 'work', 'process', 'team', 'contact'];

  return (
    <main className={bn ? 'bangla' : ''}>
      <header className="site-header" id="top"><nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top"><img className="brand-logo" src="/automation-point-logo.svg" alt="Automation Point logo"/><span><strong>AUTOMATION POINT</strong><small>{t.slogan}</small></span></a>
        <div className="nav-links">{t.nav.map((item, i) => <a href={`#${ids[i]}`} key={ids[i]}>{item}</a>)}</div>
        <div className="nav-actions" role="group" aria-label="Language selection"><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button><button className={language === 'bn' ? 'active' : ''} onClick={() => setLanguage('bn')} aria-pressed={language === 'bn'}>বাংলা</button><a href="#contact">{bn ? 'কথা বলুন' : "Let's Talk"}</a></div>
      </nav></header>

      <section className="hero shell"><div className="hero-copy"><p className="eyebrow">{t.hello}</p><h1>{t.heroTitle}</h1><h2>{t.heroRole}</h2><p>{t.heroText}</p><p className="hero-impact">{t.heroImpact}</p><div className="hero-buttons"><a className="btn primary" href="#work">{t.primary} <span>→</span></a><a className="btn secondary" href="#services">{t.secondary} <span>↓</span></a></div><div className="hero-tags"><span>AP Ratio</span><span>Proofing</span><span>Data</span><span>Platforms</span></div></div>
        <div className="hero-art" aria-label="Automation Point leadership"><div className="hero-blob"/><div className="person person-left"><img src="/muhammad-abdullah.jpeg" alt="Muhammad Abdullah, Chief Technology Officer and Co-Founder"/></div><div className="person person-right"><img src="/kamruzzaman-zico.jpg" alt="Kamruzzaman Zico, Chief Executive Officer and Co-Founder"/></div><div className="tech-card card-one"><b>01</b><span>AUTOMATE</span></div><div className="tech-card card-two"><b>02</b><span>VALIDATE</span></div><div className="dots" aria-hidden="true">••••<br/>••••<br/>••••</div></div>
      </section>

      <section className="trust"><div className="shell"><p>{t.trustTitle}</p>{t.trust.map((item, i) => <div key={item}><span>0{i+1}</span><strong>{item}</strong></div>)}</div></section>

      <section className="section shell" id="services"><div className="center-heading"><p>{t.servicesLabel}</p><h2>{t.servicesTitle}</h2></div><div className="service-cards">{t.services.map(([icon,title,text]) => <article key={title}><div className="line-icon">{icon}</div><h3>{title}</h3><p>{text}</p><span className="mini-line"/></article>)}</div></section>

      <section className="projects-section" id="work"><div className="shell"><div className="section-bar"><div><p>{t.workLabel}</p><h2>{t.workTitle}</h2></div><span>{t.workLink}</span></div><div className="project-grid">{t.projects.map(([title,type,text], i) => <article key={title} className={`project project-${i+1}`}><div className="project-visual"><img src={`/program-visuals/program-${String(i+1).padStart(2,'0')}.png`} alt={`${title} workflow visualization`}/><span>{String(i+1).padStart(2,'0')}</span></div><div className="project-body"><p>{type}</p><h3>{title}</h3><span>{text}</span></div></article>)}</div></div></section>

      <section className="mission shell" id="about"><div className="mission-heading"><p>{t.missionLabel}</p><h2>{t.missionTitle}</h2></div><div className="mission-grid"><article><span>MISSION</span><p>{t.mission}</p></article><article><span>VISION</span><p>{t.vision}</p></article></div><div className="value-grid">{t.values.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="team-section" id="team"><div className="shell"><div className="team-heading"><div><p>{t.leadersLabel}</p><h2>{t.leadersTitle}</h2></div><span>{t.leadersIntro}</span></div><div className="team-grid"><article><div className="team-photo"><img src="/muhammad-abdullah.jpeg" alt="Muhammad Abdullah"/></div><div className="team-info"><span>CHIEF TECHNOLOGY OFFICER &amp; CO-FOUNDER</span><h3>Muhammad Abdullah</h3><p>{bn ? 'প্রযুক্তি, প্রি-প্রেস অটোমেশন এবং কার্যকর ডিজিটাল সিস্টেম বাস্তবায়নে নেতৃত্ব দেন।' : 'Leads technology, prepress automation and the delivery of practical digital systems.'}</p><div className="person-contact"><a href="mailto:abdullahyz018@gmail.com">abdullahyz018@gmail.com</a><a href="tel:+8801814175662">+880 1814-175662</a></div></div></article><article><div className="team-photo"><img src="/kamruzzaman-zico.jpg" alt="Kamruzzaman Zico"/></div><div className="team-info"><span>CHIEF EXECUTIVE OFFICER &amp; CO-FOUNDER</span><h3>Kamruzzaman Zico</h3><p>{bn ? 'ব্যবসায়িক দিকনির্দেশনা, ক্লায়েন্ট সম্পর্ক এবং Automation Point-এর দীর্ঘমেয়াদি প্রবৃদ্ধিতে নেতৃত্ব দেন।' : 'Leads business direction, client relationships and the long-term growth of Automation Point.'}</p><div className="person-contact"><a href="mailto:kamruzzamanzico@gmail.com">kamruzzamanzico@gmail.com</a><a href="tel:+8801911677766">+880 1911-677766</a></div></div></article></div></div></section>

      <section className="process shell" id="process"><div className="center-heading"><p>{t.processLabel}</p><h2>{t.processTitle}</h2></div><div className="process-line">{t.process.map(([no,title,text])=><article key={title}><div>{no}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="contact" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p className="contact-lead">{t.contactText}</p><a className="btn primary" href="mailto:info.automationpoint@gmail.com">{t.email} →</a></div><div className="contact-list"><a href="mailto:info.automationpoint@gmail.com"><span>{t.email}</span><strong>info.automationpoint@gmail.com</strong></a><a href="https://wa.me/8801814175662"><span>{t.whatsapp}</span><strong>+880 1814-175662</strong></a><a href="tel:+8801911677766"><span>{t.call}</span><strong>+880 1911-677766</strong></a><div><span>{t.addressLabel}</span><strong>47-10 East Jamshingh, Radio Colony,<br/>Savar, Dhaka, Bangladesh</strong></div></div></div></section>

      <footer><div className="shell"><a className="brand footer-brand" href="#top"><img className="brand-logo" src="/automation-point-logo.svg" alt="Automation Point logo"/><span><strong>AUTOMATION POINT</strong><small>{t.footer}</small></span></a><p>© 2026 Automation Point. {t.rights}</p><a href="#top">↑</a></div></footer>
    </main>
  );
}
