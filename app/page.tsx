'use client';

import { useState } from 'react';
import { categoryLabels, categoryOrder, programs, type ProgramCategory } from './programs';

type Language = 'en' | 'bn';
type ExperiencedBrand = { name: string; slug: string } & (
  | { logo: string; logos?: never }
  | { logos: string[]; logo?: never }
);

const experiencedBrands: ExperiencedBrand[] = [
  { name: 'Inditex — ZARA & PULL&BEAR', logos: ['/brand-logos/inditex.svg', '/brand-logos/zara.svg', '/brand-logos/pullbear.svg'], slug: 'inditex' },
  { name: 'Tesco', logo: '/brand-logos/tesco.svg', slug: 'tesco' },
  { name: "Kohl's", logo: '/brand-logos/kohls.svg', slug: 'kohls' },
  { name: 'JCPenney', logo: '/brand-logos/jcpenney.svg', slug: 'jcpenney' },
  { name: 'Fruit of the Loom', logo: '/brand-logos/fruit-of-the-loom.svg', slug: 'fotl' },
  { name: 'Primark', logo: '/brand-logos/primark.svg', slug: 'primark' },
  { name: 'H&M', logo: '/brand-logos/hm.svg', slug: 'hm' },
  { name: 'Auchan', logo: '/brand-logos/auchan.svg', slug: 'auchan' },
  { name: 'Centric Brands', logo: '/brand-logos/centric-brands.png', slug: 'centric' },
  { name: 'Perry Ellis', logo: '/brand-logos/perry-ellis.jpg', slug: 'perry-ellis' },
  { name: 'UNIQLO', logo: '/brand-logos/uniqlo.svg', slug: 'uniqlo' },
  { name: 'MAX Fashion', logo: '/brand-logos/max-fashion.png', slug: 'max' },
  { name: 'New Look', logo: '/brand-logos/new-look.svg', slug: 'new-look' },
  { name: 'LC Waikiki', logo: '/brand-logos/lc-waikiki.png', slug: 'lc-waikiki' },
  { name: "Levi's", logo: '/brand-logos/levis.png', slug: 'levis' },
  { name: 'GAP', logo: '/brand-logos/gap.png', slug: 'gap' },
  { name: 'CCC', logo: '/brand-logos/ccc.svg', slug: 'ccc' },
  { name: 'PEPCO', logo: '/brand-logos/pepco.png', slug: 'pepco' },
  { name: 'Tommy Hilfiger', logo: '/brand-logos/tommy-hilfiger.svg', slug: 'tommy' },
  { name: 'LPP', logo: '/brand-logos/lpp.svg', slug: 'lpp' },
  { name: 'Walmart', logo: '/brand-logos/walmart.png', slug: 'walmart' },
  { name: 'U.S. Polo Assn.', logo: '/brand-logos/us-polo-assn.png', slug: 'us-polo' },
];

const content = {
  en: {
    nav: ['About', 'Services', 'Brands', 'Projects', 'Process', 'Leadership', 'Contact'],
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
    brandsLabel: 'PRACTICAL INDUSTRY EXPERIENCE', brandsTitle: 'Brands We Have Worked With',
    brandsIntro: 'Hands-on experience supporting real prepress, artwork, data and production workflows across globally recognised brands.',
    brandsNote: 'Brand names and marks belong to their respective owners. They are shown only to indicate practical workflow experience and do not imply endorsement or formal partnership.',
    workLabel: 'SOFTWARE PORTFOLIO', workTitle: 'Programs We Have Developed', workLink: 'Information only — no software runs on this website',
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
    nav: ['আমাদের সম্পর্কে', 'সেবাসমূহ', 'ব্র্যান্ড অভিজ্ঞতা', 'প্রজেক্ট', 'কাজের ধাপ', 'নেতৃত্ব', 'যোগাযোগ'],
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
    brandsLabel: 'বাস্তব ইন্ডাস্ট্রি অভিজ্ঞতা', brandsTitle: 'যেসব ব্র্যান্ডের কাজে আমাদের অভিজ্ঞতা আছে',
    brandsIntro: 'বিশ্বব্যাপী পরিচিত বিভিন্ন ব্র্যান্ডের বাস্তব প্রি-প্রেস, আর্টওয়ার্ক, ডাটা ও প্রোডাকশন ওয়ার্কফ্লো নিয়ে হাতে-কলমে কাজের অভিজ্ঞতা।',
    brandsNote: 'প্রদর্শিত ব্র্যান্ডের নাম ও মার্ক তাদের নিজ নিজ মালিকের সম্পত্তি। এগুলো কেবল আমাদের বাস্তব ওয়ার্কফ্লো অভিজ্ঞতা বোঝাতে দেখানো হয়েছে; কোনো আনুষ্ঠানিক অংশীদারত্ব বা অনুমোদন বোঝায় না।',
    workLabel: 'সফটওয়্যার পোর্টফোলিও', workTitle: 'আমাদের ডেভেলপ করা প্রোগ্রাম', workLink: 'এই ওয়েবসাইটটি শুধু তথ্য প্রদর্শন করে—এখানে কোনো সফটওয়্যার চালু হয় না',
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
  const [projectCategory, setProjectCategory] = useState<'all' | ProgramCategory>('all');
  const t = content[language];
  const bn = language === 'bn';
  const visiblePrograms = projectCategory === 'all' ? programs : programs.filter((program) => program.category === projectCategory);
  const labels = categoryLabels[language];
  const ids = ['about', 'services', 'brands', 'work', 'process', 'team', 'contact'];

  return (
    <main className={bn ? 'bangla' : ''}>
      <header className="site-header" id="top"><nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top"><img className="brand-logo" src="/automation-point-logo.svg" alt="Automation Point logo"/><span><strong>AUTOMATION POINT</strong><small>{t.slogan}</small></span></a>
        <div className="nav-links">{t.nav.map((item, i) => <a href={`#${ids[i]}`} key={ids[i]}>{item}</a>)}</div>
        <div className="nav-actions" role="group" aria-label="Language selection"><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button><button className={language === 'bn' ? 'active' : ''} onClick={() => setLanguage('bn')} aria-pressed={language === 'bn'}>বাংলা</button><a href="#contact">{bn ? 'কথা বলুন' : "Let's Talk"}</a></div>
      </nav></header>

      <section className="hero shell"><div className="hero-copy"><p className="eyebrow">{t.hello}</p><h1>{t.heroTitle}</h1><h2>{t.heroRole}</h2><p>{t.heroText}</p><p className="hero-impact">{t.heroImpact}</p><div className="hero-buttons"><a className="btn primary" href="#work">{t.primary} <span>→</span></a><a className="btn secondary" href="#services">{t.secondary} <span>↓</span></a></div><div className="hero-tags"><span>AP Ratio</span><span>Proofing</span><span>Data</span><span>Platforms</span></div></div>
        <div className="hero-art" aria-label="Automation Point leadership"><div className="hero-blob"/><div className="person person-left"><img src="/kamruzzaman-zico.jpg" alt="Kamruzzaman Zico, Chief Executive Officer and Co-Founder"/></div><div className="person person-right"><img src="/muhammad-abdullah.jpeg" alt="Muhammad Abdullah, Chief Technology Officer and Co-Founder"/></div><div className="tech-card card-one"><b>01</b><span>LEAD</span></div><div className="tech-card card-two"><b>02</b><span>AUTOMATE</span></div><div className="dots" aria-hidden="true">••••<br/>••••<br/>••••</div></div>
      </section>

      <section className="trust"><div className="shell"><p>{t.trustTitle}</p>{t.trust.map((item, i) => <div key={item}><span>0{i+1}</span><strong>{item}</strong></div>)}</div></section>

      <section className="section shell" id="services"><div className="center-heading"><p>{t.servicesLabel}</p><h2>{t.servicesTitle}</h2></div><div className="service-cards">{t.services.map(([icon,title,text]) => <article key={title}><div className="line-icon">{icon}</div><h3>{title}</h3><p>{text}</p><span className="mini-line"/></article>)}</div></section>

      <section className="brands-section" id="brands"><div className="shell"><div className="brands-heading"><div><p>{t.brandsLabel}</p><h2>{t.brandsTitle}</h2></div><span>{t.brandsIntro}</span></div><div className="brand-showcase">{experiencedBrands.map((brand, index) => <article className={`brand-tile brand-${brand.slug}`} key={brand.name}><span className="brand-index">{String(index + 1).padStart(2, '0')}</span><div className="brand-logo-area">{brand.logos ? brand.logos.map((logo, logoIndex) => <img src={logo} alt={`${brand.name} logo ${logoIndex + 1}`} key={logo}/>) : <img src={brand.logo} alt={`${brand.name} logo`}/>}</div><strong className="brand-name">{brand.name}</strong></article>)}</div><p className="brands-note">{t.brandsNote}</p></div></section>

      <section className="projects-section" id="work"><div className="shell">
        <div className="section-bar"><div><p>{t.workLabel}</p><h2>{t.workTitle}</h2></div><span>{t.workLink}</span></div>
        <div className="portfolio-overview">
          <div><strong>45</strong><span>{bn ? 'স্বতন্ত্র ওয়ার্কফ্লো' : 'Distinct workflows'}</span></div>
          <div><strong>05</strong><span>{bn ? 'সক্ষমতার ক্ষেত্র' : 'Capability groups'}</span></div>
          <p>{bn ? 'বাস্তব প্রোডাকশন প্রয়োজন থেকে তৈরি আমাদের অটোমেশন, ডাটা, কোয়ালিটি ও সাপোর্ট সিস্টেমের নির্বাচিত পরিচিতি। নিরাপত্তার জন্য শুধু উচ্চ-স্তরের workflow দেখানো হয়েছে।' : 'A structured view of automation, data, quality and support systems built around real production needs. Only high-level workflows are shown to protect implementation knowledge.'}</p>
        </div>
        <div className="project-filters" role="group" aria-label={bn ? 'প্রোগ্রাম ক্যাটাগরি' : 'Program categories'}>{categoryOrder.map((category) => <button key={category} type="button" className={projectCategory === category ? 'active' : ''} onClick={() => setProjectCategory(category)} aria-pressed={projectCategory === category}>{labels[category]}<span>{category === 'all' ? programs.length : programs.filter((program) => program.category === category).length}</span></button>)}</div>
        <p className="project-result"><strong>{String(visiblePrograms.length).padStart(2,'0')}</strong> {bn ? 'টি ওয়ার্কফ্লো দেখানো হচ্ছে' : `workflow${visiblePrograms.length === 1 ? '' : 's'} shown`}</p>
        <div className="project-grid">{visiblePrograms.map((program) => {
          const index = programs.indexOf(program);
          const item = program[language];
          return <article key={item.title} className={`project category-${program.category}`}><div className="project-visual"><img src={`/program-visuals-v2/workflow-${String(index+1).padStart(2,'0')}.svg`} alt={`${item.title} workflow visualization`}/><span>{String(index+1).padStart(2,'0')}</span></div><div className="project-body"><p>{item.type}</p><h3>{item.title}</h3><span>{item.description}</span><small>{labels[program.category]}</small></div></article>;
        })}</div>
      </div></section>

      <section className="mission shell" id="about"><div className="mission-heading"><p>{t.missionLabel}</p><h2>{t.missionTitle}</h2></div><div className="mission-grid"><article><span>MISSION</span><p>{t.mission}</p></article><article><span>VISION</span><p>{t.vision}</p></article></div><div className="value-grid">{t.values.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="team-section" id="team"><div className="shell"><div className="team-heading"><div><p>{t.leadersLabel}</p><h2>{t.leadersTitle}</h2></div><span>{t.leadersIntro}</span></div><div className="team-grid"><article><a className="team-photo" href="/kamruzzaman-zico" aria-label="View Kamruzzaman Zico's personal portfolio"><img src="/kamruzzaman-zico.jpg" alt="Kamruzzaman Zico"/></a><div className="team-info"><span>CHIEF EXECUTIVE OFFICER &amp; CO-FOUNDER</span><h3><a href="/kamruzzaman-zico">Kamruzzaman Zico</a></h3><p>{bn ? 'ব্যবসায়িক দিকনির্দেশনা, ক্লায়েন্ট সম্পর্ক এবং Automation Point-এর দীর্ঘমেয়াদি প্রবৃদ্ধিতে নেতৃত্ব দেন।' : 'Leads business direction, client relationships and the long-term growth of Automation Point.'}</p><div className="person-contact"><a href="mailto:kamruzzamanzico@gmail.com">kamruzzamanzico@gmail.com</a><a href="tel:+8801911677766">+880 1911-677766</a></div><a className="profile-link" href="/kamruzzaman-zico">{bn ? 'ব্যক্তিগত প্রোফাইল দেখুন' : 'View personal profile'} <span>→</span></a></div></article><article><a className="team-photo" href="/muhammad-abdullah" aria-label="View Muhammad Abdullah's personal portfolio"><img src="/muhammad-abdullah.jpeg" alt="Muhammad Abdullah"/></a><div className="team-info"><span>CHIEF TECHNOLOGY OFFICER &amp; CO-FOUNDER</span><h3><a href="/muhammad-abdullah">Muhammad Abdullah</a></h3><p>{bn ? 'প্রযুক্তি, প্রি-প্রেস অটোমেশন এবং কার্যকর ডিজিটাল সিস্টেম বাস্তবায়নে নেতৃত্ব দেন।' : 'Leads technology, prepress automation and the delivery of practical digital systems.'}</p><div className="person-contact"><a href="mailto:abdullahyz018@gmail.com">abdullahyz018@gmail.com</a><a href="tel:+8801814175662">+880 1814-175662</a></div><a className="profile-link" href="/muhammad-abdullah">{bn ? 'ব্যক্তিগত পোর্টফোলিও দেখুন' : 'View personal portfolio'} <span>→</span></a></div></article></div></div></section>

      <section className="process shell" id="process"><div className="center-heading"><p>{t.processLabel}</p><h2>{t.processTitle}</h2></div><div className="process-line">{t.process.map(([no,title,text])=><article key={title}><div>{no}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="contact" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p className="contact-lead">{t.contactText}</p><a className="btn primary" href="mailto:info.automationpoint@gmail.com">{t.email} →</a></div><div className="contact-list"><a href="mailto:info.automationpoint@gmail.com"><span>{t.email}</span><strong>info.automationpoint@gmail.com</strong></a><a href="https://wa.me/8801814175662"><span>{t.whatsapp}</span><strong>+880 1814-175662</strong></a><a href="tel:+8801911677766"><span>{t.call}</span><strong>+880 1911-677766</strong></a><div><span>{t.addressLabel}</span><strong>47-10 East Jamshingh, Radio Colony,<br/>Savar, Dhaka, Bangladesh</strong></div></div></div></section>

      <footer><div className="shell"><a className="brand footer-brand" href="#top"><img className="brand-logo" src="/automation-point-logo.svg" alt="Automation Point logo"/><span><strong>AUTOMATION POINT</strong><small>{t.footer}</small></span></a><p>© 2026 Automation Point. {t.rights}</p><a href="#top">↑</a></div></footer>
    </main>
  );
}
