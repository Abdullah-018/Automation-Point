'use client';

import { useState } from 'react';

type Language = 'en' | 'bn';

const profile = {
  en: {
    back: 'Back to Automation Point', role: 'Chief Executive Officer & Co-Founder',
    title: 'Prepress Automation & Graphic Design Professional',
    intro: 'Prepress manager and graphic design professional with 18+ years of experience across garment accessories, label production, packaging and print operations. Leads people and workflows with a strong focus on accuracy, quality and production efficiency.',
    stats: [['18+ Years', 'Prepress and design experience'], ['7', 'Professional roles'], ['4', 'Technical capability areas'], ['15+', 'Buyer and brand workflows']],
    profileTitle: 'Professional Summary',
    profileText: 'Experienced in leading prepress teams, developing automated workflows, preparing production-ready artwork and maintaining accurate colorways and print placements. Combines NiceLabel Automation, Python and Adobe Creative Suite expertise with team leadership and production coordination.',
    experienceTitle: 'Professional Experience',
    experience: [
      ['Manager - Prepress', 'DZN Labels Ltd. (Dizayn Etiket Bangladesh)', '10 Dec 2023 - Present', 'Leads prepress automation and artwork preparation for garment accessories and label production.'],
      ['Assistant Manager - Prepress (Automation)', 'Maheen Label Tex Ltd. & Maheen Dizaynetiket (BD.) Ltd.', '01 Aug 2022 - 10 Dec 2023', 'Managed automated prepress workflows and coordinated production-ready design output.'],
      ['Head of Department - Prepress', 'Trisan Trims Ltd.', '01 Oct 2018 - 07 Jul 2022', 'Directed prepress operations, artwork control, colorway development and team coordination.'],
      ['Senior Executive - Prepress', 'Enam Labels Ltd. (Labelon Group)', '06 Oct 2012 - Sep 2016', 'Prepared and checked label, packaging and accessories artwork for production.'],
      ['Executive - Prepress', 'r-pac Bangladesh Packaging Co. Ltd.', '01 Apr 2011 - 30 Sep 2012', 'Supported packaging artwork and prepress execution for international buyers.'],
      ['Senior Graphic Designer', 'KDS Accessories', '01 Apr 2008 - 01 Aug 2010', 'Created garment accessories and print designs according to buyer requirements.'],
      ['Owner - Design & Business Center', 'Self-employed', '15 Jan 2005 - 30 Mar 2008', 'Provided graphic design and print-related services to local clients.'],
    ],
    expertiseTitle: 'Selected Expertise & Responsibilities',
    expertise: [
      ['Production-ready Artwork', 'Converts buyer instructions into accurate artwork while maintaining dimensions, typography, barcodes, colour standards and print specifications.'],
      ['Accessories & Packaging', 'Works across hangtags, waist riders, photo cards, case cards, wrap bands, care labels, cartons and heat-transfer prints.'],
      ['Workflow Automation', 'Builds and improves NiceLabel workflows and Python utilities to reduce repetitive work and accelerate file processing.'],
      ['Team & Delivery Leadership', 'Coordinates product development and production teams while controlling priorities, quality and deadlines.'],
    ],
    skillsTitle: 'Core Skills', skills: ['Prepress Automation', 'Garment Accessories Artwork', 'Label & Packaging Design', 'Colorways & Print Placement', 'Artwork Quality Control', 'Team Leadership & Coordination', 'Buyer Specification Compliance'],
    toolsTitle: 'Software & Platforms', tools: ['NiceLabel / NiceLabel Automation', 'Python', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'CorelDRAW', 'Microsoft Office', 'Windows & macOS'],
    educationTitle: 'Education & Training', education: ['Diploma in Graphics Design · National Youth & Technical Training Center, Dhaka · 2007', 'Higher Secondary Certificate · Ideal Commerce College · Commerce · 2005', 'Secondary School Certificate · Mirpur Bangla High School · Commerce · 2003'],
    capabilityTitle: 'Technical Capability', capabilities: [['Automation', 'Variable-data workflows, template setup and Python scripting'], ['Artwork', 'Vector artwork, typography, layout, image editing, colour correction and print placement'], ['Production', 'Preflight checking, barcode/QR handling, output preparation and print-ready PDF workflows'], ['Management', 'Team supervision, job prioritisation, cross-functional coordination and deadline control']],
    brandsTitle: 'Buyer & Brand Experience', brands: 'M&S, Debenhams, Next, H&M, Tesco, G-Star, Cubus, BHS, Burton, Wallis, Evans, Dorothy Perkins, ZARA, Kappa and Topman.',
    approachTitle: 'Professional Value', approach: 'Transforms buyer requirements into precise production output, connects automation with real operator workflows and keeps quality, timing and team coordination aligned.',
    contact: 'Contact Kamruzzaman Zico', source: 'Portfolio content prepared from the supplied professional CV.',
  },
  bn: {
    back: 'Automation Point-এ ফিরে যান', role: 'চিফ এক্সিকিউটিভ অফিসার ও কো-ফাউন্ডার',
    title: 'প্রি-প্রেস অটোমেশন ও গ্রাফিক ডিজাইন প্রফেশনাল',
    intro: 'Garment accessories, label production, packaging ও print operation-এ ১৮+ বছরের অভিজ্ঞতাসম্পন্ন prepress manager ও graphic design professional। নির্ভুলতা, মান এবং production efficiency-কে গুরুত্ব দিয়ে team ও workflow পরিচালনা করেন।',
    stats: [['১৮+ বছর', 'Prepress ও design experience'], ['৭টি', 'পেশাগত দায়িত্ব'], ['৪টি', 'Technical capability area'], ['১৫+', 'Buyer ও brand workflow']],
    profileTitle: 'পেশাগত সারসংক্ষেপ',
    profileText: 'Prepress team leadership, automated workflow development, production-ready artwork এবং সঠিক colorway ও print placement নিশ্চিত করার দীর্ঘ অভিজ্ঞতা রয়েছে। NiceLabel Automation, Python ও Adobe Creative Suite দক্ষতার সঙ্গে team leadership এবং production coordination-এর সমন্বয় করেন।',
    experienceTitle: 'পেশাগত অভিজ্ঞতা',
    experience: [
      ['ম্যানেজার - প্রি-প্রেস', 'DZN Labels Ltd. (Dizayn Etiket Bangladesh)', '১০ ডিসেম্বর ২০২৩ - বর্তমান', 'Garment accessories ও label production-এর prepress automation এবং artwork preparation-এ নেতৃত্ব দেন।'],
      ['অ্যাসিস্ট্যান্ট ম্যানেজার - প্রি-প্রেস (অটোমেশন)', 'Maheen Label Tex Ltd. & Maheen Dizaynetiket (BD.) Ltd.', '০১ আগস্ট ২০২২ - ১০ ডিসেম্বর ২০২৩', 'Automated prepress workflow পরিচালনা এবং production-ready design output সমন্বয় করেছেন।'],
      ['হেড অব ডিপার্টমেন্ট - প্রি-প্রেস', 'Trisan Trims Ltd.', '০১ অক্টোবর ২০১৮ - ০৭ জুলাই ২০২২', 'Prepress operation, artwork control, colorway development এবং team coordination পরিচালনা করেছেন।'],
      ['সিনিয়র এক্সিকিউটিভ - প্রি-প্রেস', 'Enam Labels Ltd. (Labelon Group)', '০৬ অক্টোবর ২০১২ - সেপ্টেম্বর ২০১৬', 'Production-এর জন্য label, packaging এবং accessories artwork প্রস্তুত ও যাচাই করেছেন।'],
      ['এক্সিকিউটিভ - প্রি-প্রেস', 'r-pac Bangladesh Packaging Co. Ltd.', '০১ এপ্রিল ২০১১ - ৩০ সেপ্টেম্বর ২০১২', 'International buyer-এর packaging artwork ও prepress execution-এ সহায়তা করেছেন।'],
      ['সিনিয়র গ্রাফিক ডিজাইনার', 'KDS Accessories', '০১ এপ্রিল ২০০৮ - ০১ আগস্ট ২০১০', 'Buyer requirement অনুযায়ী garment accessories ও print design তৈরি করেছেন।'],
      ['মালিক - Design & Business Center', 'স্বনিয়োজিত', '১৫ জানুয়ারি ২০০৫ - ৩০ মার্চ ২০০৮', 'স্থানীয় client-দের graphic design ও print-related service দিয়েছেন।'],
    ],
    expertiseTitle: 'নির্বাচিত দক্ষতা ও দায়িত্ব',
    expertise: [
      ['Production-ready Artwork', 'Buyer instruction থেকে dimensions, typography, barcode, colour standard ও print specification ঠিক রেখে নির্ভুল artwork তৈরি।'],
      ['Accessories & Packaging', 'Hangtag, waist rider, photo card, case card, wrap band, care label, carton এবং heat-transfer print নিয়ে কাজ।'],
      ['Workflow Automation', 'পুনরাবৃত্ত কাজ কমাতে এবং file processing দ্রুত করতে NiceLabel workflow ও Python utility তৈরি ও উন্নয়ন।'],
      ['Team & Delivery Leadership', 'Priority, quality ও deadline নিয়ন্ত্রণ রেখে product development এবং production team সমন্বয়।'],
    ],
    skillsTitle: 'মূল দক্ষতা', skills: ['Prepress Automation', 'Garment Accessories Artwork', 'Label & Packaging Design', 'Colorways & Print Placement', 'Artwork Quality Control', 'Team Leadership & Coordination', 'Buyer Specification Compliance'],
    toolsTitle: 'সফটওয়্যার ও প্ল্যাটফর্ম', tools: ['NiceLabel / NiceLabel Automation', 'Python', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'CorelDRAW', 'Microsoft Office', 'Windows & macOS'],
    educationTitle: 'শিক্ষা ও প্রশিক্ষণ', education: ['Diploma in Graphics Design · National Youth & Technical Training Center, Dhaka · ২০০৭', 'Higher Secondary Certificate · Ideal Commerce College · Commerce · ২০০৫', 'Secondary School Certificate · Mirpur Bangla High School · Commerce · ২০০৩'],
    capabilityTitle: 'টেকনিক্যাল সক্ষমতা', capabilities: [['Automation', 'Variable-data workflow, template setup এবং Python scripting'], ['Artwork', 'Vector artwork, typography, layout, image editing, colour correction ও print placement'], ['Production', 'Preflight checking, barcode/QR handling, output preparation ও print-ready PDF workflow'], ['Management', 'Team supervision, job prioritisation, cross-functional coordination ও deadline control']],
    brandsTitle: 'Buyer ও Brand Experience', brands: 'M&S, Debenhams, Next, H&M, Tesco, G-Star, Cubus, BHS, Burton, Wallis, Evans, Dorothy Perkins, ZARA, Kappa এবং Topman।',
    approachTitle: 'পেশাগত মূল্য', approach: 'Buyer requirement-কে নির্ভুল production output-এ রূপ দেন, automation-কে বাস্তব operator workflow-এর সঙ্গে যুক্ত করেন এবং quality, timing ও team coordination একসঙ্গে নিয়ন্ত্রণ করেন।',
    contact: 'Kamruzzaman Zico-এর সঙ্গে যোগাযোগ', source: 'প্রদত্ত পেশাগত CV থেকে এই পোর্টফোলিওর তথ্য প্রস্তুত করা হয়েছে।',
  },
};

export default function KamruzzamanZicoPortfolio() {
  const [language, setLanguage] = useState<Language>('en');
  const t = profile[language];
  const bn = language === 'bn';

  return <main className={`profile-page profile-page-zico ${bn ? 'bangla' : ''}`}>
    <header className="profile-header"><div className="shell"><a className="brand" href="/"><img className="brand-logo" src="/automation-point-logo.svg" alt="Automation Point logo"/><span><strong>AUTOMATION POINT</strong><small>AUTOMATING THE FUTURE OF PREPRESS</small></span></a><div className="profile-nav"><a href="/">← {t.back}</a><div className="profile-language"><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button><button className={language === 'bn' ? 'active' : ''} onClick={() => setLanguage('bn')}>বাংলা</button></div></div></div></header>

    <section className="profile-hero"><div className="shell profile-hero-grid"><div className="profile-portrait"><img src="/kamruzzaman-zico.jpg" alt="Kamruzzaman Zico"/></div><div className="profile-hero-copy"><p className="profile-kicker">{t.role}</p><h1>Kamruzzaman<br/>Zico</h1><h2>{t.title}</h2><p>{t.intro}</p><div className="profile-actions"><a className="btn primary" href="mailto:kamruzzamanzico@gmail.com">{t.contact} →</a></div></div></div></section>

    <section className="profile-stats"><div className="shell">{t.stats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></section>

    <section className="profile-content shell"><aside className="profile-sidebar"><section><p className="profile-label">{t.skillsTitle}</p><ul className="skill-list">{t.skills.map(item => <li key={item}>{item}</li>)}</ul></section><section><p className="profile-label">{t.toolsTitle}</p><ul>{t.tools.map(item => <li key={item}>{item}</li>)}</ul></section><section><p className="profile-label">{t.educationTitle}</p><ul>{t.education.map(item => <li key={item}>{item}</li>)}</ul></section><section><p className="profile-label">{t.brandsTitle}</p><p className="profile-sidebar-text">{t.brands}</p></section></aside>
      <div className="profile-main"><section><p className="profile-label">{t.profileTitle}</p><p className="profile-lead">{t.profileText}</p></section><section><p className="profile-label">{t.experienceTitle}</p><div className="profile-timeline">{t.experience.map(([role, company, date, text]) => <article key={`${role}-${company}`}><div><h3>{role}</h3><span>{company}</span></div><time>{date}</time><p>{text}</p></article>)}</div></section><section><p className="profile-label">{t.expertiseTitle}</p><div className="profile-projects">{t.expertise.map(([name, text]) => <article key={name}><h3>{name}</h3><p>{text}</p></article>)}</div></section><section><p className="profile-label">{t.capabilityTitle}</p><div className="profile-capabilities">{t.capabilities.map(([name, text]) => <article key={name}><strong>{name}</strong><span>{text}</span></article>)}</div></section><section className="profile-approach"><p className="profile-label">{t.approachTitle}</p><p>{t.approach}</p></section></div>
    </section>

    <section className="profile-contact"><div className="shell"><div><p>EMAIL</p><a href="mailto:kamruzzamanzico@gmail.com">kamruzzamanzico@gmail.com</a></div><div><p>MOBILE / WHATSAPP</p><a href="https://wa.me/8801911677766">+880 1911-677766</a></div><div><p>LOCATION</p><strong>Dhaka, Bangladesh</strong></div></div></section>
    <footer className="profile-footer"><div className="shell"><p>{t.source}</p><a href="/">Automation Point →</a></div></footer>
  </main>;
}
