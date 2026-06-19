// Single source of truth — bilingual content (EN/AR).
// All long-form copy is { en, ar }. Components consume via t(value, locale).

import type { L } from "./i18n";

export const identity = {
  name: { en: "Hessah AlMujally", ar: "حصة المجلي" } as L,
  nameFirst: { en: "Hessah", ar: "حصة" } as L,
  nameLast: { en: "AlMujally", ar: "المجلي" } as L,
  handle: "@heaikyoraku",
  role: {
    en: "AI Engineer & Researcher",
    ar: "مهندسة ذكاء اصطناعي وباحثة",
  } as L,
  location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" } as L,
  email: "hessahmalmujally@gmail.com",
  phone: "0557067417",
  github: "https://github.com/Heaikyoraku",
  linkedin: "https://linkedin.com/in/hessahmalmujally",

  // Tagline above the name — pixel font small caps.
  tagline: { en: "// engineer of intelligent systems", ar: "// مهندسة أنظمة ذكية" } as L,

  // New manifest — broader, ambitious, Vision 2030, open to opportunities.
  manifest: [
    {
      en: "I am an AI engineer who builds across the full spectrum of modern intelligence — generative and agentic systems, multimodal pipelines, computer vision, and machine learning applied to fields as varied as healthcare and public infrastructure.",
      ar: "مهندسة ذكاء اصطناعي تبني عبر الطيف الكامل للذكاء الحديث — من الأنظمة التوليدية والوكيلة إلى الأنظمة متعددة الوسائط، الرؤية الحاسوبية، وتعلّم الآلة في مجالات تمتد من الرعاية الصحية إلى البنية التحتية العامة.",
    } as L,
    {
      en: "My work moves between research and product. I have co-founded a startup recognized nationally at LEAP 2025, contributed to research targeted for publication, and shipped end-to-end systems across diverse data — brain signals, images, language, time series, and human behaviour.",
      ar: "يتحرك عملي بين البحث والمنتج. شاركتُ في تأسيس شركة ناشئة حظيت بتقدير وطني في معرض LEAP 2025، وأسهمتُ في أبحاث تستهدف النشر، وأطلقتُ أنظمة متكاملة عبر بيانات متنوعة — إشارات الدماغ، الصور، اللغة، السلاسل الزمنية، والسلوك الإنساني.",
    } as L,
    {
      en: "What drives me is contributing to the Kingdom's AI ecosystem — building products, models, and ideas that align with Vision 2030 and help write the next chapter of Saudi technology. I'm open to roles, collaborations, and research opportunities that take this further.",
      ar: "ما يحرّكني هو الإسهام في منظومة الذكاء الاصطناعي بالمملكة — ببناء منتجات ونماذج وأفكار تتسق مع رؤية ٢٠٣٠ وتُسهم في كتابة الفصل القادم من التقنية السعودية. أرحّب بالفرص الوظيفية والتعاونات والأبحاث التي تأخذ هذا أبعد.",
    } as L,
  ],

  philosophy: {
    en: "Intelligence isn't a leaderboard — it's a translation problem. Useful AI translates between the messy signal of the world and what a person actually wants to do.",
    ar: "الذكاء ليس قائمة تصنيف — بل مسألة ترجمة. الذكاء الاصطناعي النافع يُترجم بين الإشارة المعقّدة للعالم وما يريد الإنسان فعله حقًا.",
  } as L,

  // Broader interests — no NLP-centric framing.
  interests: [
    { en: "Generative AI", ar: "الذكاء التوليدي" } as L,
    { en: "Agentic AI", ar: "الأنظمة الوكيلة" } as L,
    { en: "Multi-Agent Systems", ar: "الأنظمة متعددة الوكلاء" } as L,
    { en: "Foundation Models & LLMs", ar: "النماذج الأساسية" } as L,
    { en: "Computer Vision", ar: "الرؤية الحاسوبية" } as L,
    { en: "Multimodal AI", ar: "الذكاء متعدد الوسائط" } as L,
    { en: "Machine Learning", ar: "تعلّم الآلة" } as L,
    { en: "Data Science", ar: "علم البيانات" } as L,
    { en: "AI for Healthcare", ar: "الذكاء الاصطناعي في الصحة" } as L,
    { en: "AI Products & Startups", ar: "منتجات وريادة" } as L,
  ] as L[],
};

// ===== Timeline =====
export type TimelineNode = {
  date: L;
  title: L;
  org: L;
  type: "education" | "work" | "founder" | "research" | "award" | "leadership";
  body: L;
};

export const timeline: TimelineNode[] = [
  {
    date: { en: "Aug 2022", ar: "أغسطس ٢٠٢٢" },
    title: {
      en: "B.Sc. Artificial Intelligence — begins",
      ar: "بدء بكالوريوس الذكاء الاصطناعي",
    },
    org: {
      en: "Princess Nourah Bint Abdulrahman University",
      ar: "جامعة الأميرة نورة بنت عبدالرحمن",
    },
    type: "education",
    body: {
      en: "Joined one of the first dedicated AI undergraduate programs in Saudi Arabia.",
      ar: "التحاق بأحد أوائل برامج البكالوريوس المتخصصة في الذكاء الاصطناعي بالمملكة.",
    },
  },
  {
    date: { en: "Mar 2024", ar: "مارس ٢٠٢٤" },
    title: { en: "Co-founded Dhallaty (ضالتي)", ar: "تأسيس ضالتي" },
    org: { en: "AI-powered platform", ar: "منصة مدعومة بالذكاء الاصطناعي" },
    type: "founder",
    body: {
      en: "Co-founded and led all technical work. Reduced operational burden by ~40% and doubled item-return rates with 8 partner organizations.",
      ar: "شاركتُ في التأسيس وقُدتُ الجانب التقني بالكامل. خفّضنا العبء التشغيلي بنحو ٤٠٪ وضاعفنا معدلات استرداد الأصناف لدى ٨ جهات شريكة.",
    },
  },
  {
    date: { en: "Apr 2024", ar: "أبريل ٢٠٢٤" },
    title: { en: "1st Place — AppGPT Hackathon", ar: "المركز الأول — هاكاثون AppGPT" },
    org: { en: "PNU Cybersecurity Club × CYBERX", ar: "نادي الأمن السيبراني × CYBERX" },
    type: "award",
    body: {
      en: "Won the inaugural AppGPT hackathon at the College of Computer Sciences.",
      ar: "الفوز بالنسخة الأولى من هاكاثون AppGPT بكلية علوم الحاسب.",
    },
  },
  {
    date: { en: "Jul 2024", ar: "يوليو ٢٠٢٤" },
    title: { en: "3rd Place — CodeLab Competition", ar: "المركز الثالث — مسابقة CodeLab" },
    org: { en: "Center of Digital Entrepreneurship", ar: "مركز ريادة الأعمال الرقمية" },
    type: "award",
    body: {
      en: "Third place in a national entrepreneurship competition.",
      ar: "المركز الثالث في مسابقة وطنية لريادة الأعمال.",
    },
  },
  {
    date: { en: "Aug 2024", ar: "أغسطس ٢٠٢٤" },
    title: { en: "MVP Lab Accelerator", ar: "حاضنة MVP Lab" },
    org: { en: "The Garage · NTDP", ar: "الجراج · NTDP" },
    type: "founder",
    body: {
      en: "Joined the MVP Lab cohort. Built end-to-end product, technical, and go-to-market pipelines under expert mentorship.",
      ar: "الانضمام إلى الدفعة. بناء مسارات منتج وتقنية وتسويق متكاملة تحت إشراف نخبة من الخبراء.",
    },
  },
  {
    date: { en: "Feb 2025", ar: "فبراير ٢٠٢٥" },
    title: { en: "Top 15 · LEAP 2025 showcase", ar: "ضمن أفضل ١٥ — معرض LEAP ٢٠٢٥" },
    org: { en: "NTDP", ar: "NTDP" },
    type: "award",
    body: {
      en: "Selected Top 15 out of 40+ national startups. Represented Dhallaty at LEAP 2025 under NTDP nomination.",
      ar: "الاختيار ضمن أفضل ١٥ من بين أكثر من ٤٠ شركة ناشئة وطنية. تمثيل ضالتي في LEAP ٢٠٢٥ بترشيح من NTDP.",
    },
  },
  {
    date: { en: "Aug 2025", ar: "أغسطس ٢٠٢٥" },
    title: { en: "Multimodal AI — graduation project", ar: "ذكاء متعدد الوسائط — مشروع التخرج" },
    org: { en: "Princess Nourah University", ar: "جامعة الأميرة نورة" },
    type: "research",
    body: {
      en: "Designed and shipped a multimodal pipeline fusing biosignals, generative image models, and large language models.",
      ar: "تصميم وإطلاق نظام متعدد الوسائط يدمج الإشارات الحيوية ونماذج الصور التوليدية ونماذج اللغة الكبيرة.",
    },
  },
  {
    date: { en: "Jan–Apr 2026", ar: "يناير–أبريل ٢٠٢٦" },
    title: { en: "AI Research Internship", ar: "تدريب بحثي في الذكاء الاصطناعي" },
    org: {
      en: "KACST — AI & Robotics Institute",
      ar: "مدينة الملك عبدالعزيز للعلوم والتقنية — معهد الذكاء الاصطناعي والروبوتات",
    },
    type: "research",
    body: {
      en: "300-hour co-op in the Intelligent Health group. Extended a state-of-the-art biosignal–LLM pipeline; contributed to research targeted for journal publication.",
      ar: "تدريب تعاوني ٣٠٠ ساعة في مجموعة الصحة الذكية. توسيع نظام بحثي متقدّم يجمع الإشارات الحيوية ونماذج اللغة الكبيرة؛ المساهمة في بحث يُستهدف للنشر.",
    },
  },
  {
    date: { en: "May–Jun 2026", ar: "مايو–يونيو ٢٠٢٦" },
    title: { en: "Agentic AI Bootcamp", ar: "معسكر الذكاء الوكيل" },
    org: { en: "Saudi Digital Academy", ar: "الأكاديمية الرقمية السعودية" },
    type: "education",
    body: {
      en: "Built a multi-agent ticket-booking system end to end (LangChain · FastAPI · PostgreSQL · Redis · Moyasar).",
      ar: "بناء نظام حجز تذاكر متعدد الوكلاء من البداية إلى النهاية (LangChain · FastAPI · PostgreSQL · Redis · ميسر).",
    },
  },
  {
    date: { en: "Jun 2026", ar: "يونيو ٢٠٢٦" },
    title: { en: "Graduated — B.Sc. AI", ar: "التخرج — بكالوريوس ذكاء اصطناعي" },
    org: {
      en: "Princess Nourah Bint Abdulrahman University",
      ar: "جامعة الأميرة نورة بنت عبدالرحمن",
    },
    type: "education",
    body: {
      en: "Completed degree in Artificial Intelligence Sciences.",
      ar: "إتمام درجة البكالوريوس في علوم الذكاء الاصطناعي.",
    },
  },
];

// ===== Projects =====
export type Project = {
  slug: string;
  title: L;
  subtitle: L;
  year: string;
  tag: "Research" | "Product" | "Startup" | "Coursework" | "Hackathon";
  status: "Shipped" | "In review" | "Active" | "Archived";
  problem: L;
  approach: L;
  architecture: L[];
  technologies: string[];
  results: L[];
  lessons: L;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "dhallaty",
    title: { en: "Dhallaty (ضالتي)", ar: "ضالتي" },
    subtitle: {
      en: "AI-powered platform — Top 15 at LEAP 2025",
      ar: "منصة مدعومة بالذكاء الاصطناعي — ضمن أفضل ١٥ في LEAP ٢٠٢٥",
    },
    year: "2024–2025",
    tag: "Startup",
    status: "Archived",
    problem: {
      en: "Manual workflows at large Saudi venues create slow, paperwork-heavy processes that frustrate both operators and end users.",
      ar: "العمليات اليدوية في الجهات الكبرى بالمملكة بطيئة وكثيفة الأوراق، ما يُرهق المشغّلين والمستفيدين على حدّ سواء.",
    },
    approach: {
      en: "Co-founded and led all technical work. Built an AI matching layer pairing reports with items via image and text similarity, exposed through a bilingual interface. Validated with 200+ operational reports across 8 government bodies.",
      ar: "شاركتُ في التأسيس وقُدتُ التطوير التقني بالكامل. بنيتُ طبقة مطابقة بالذكاء الاصطناعي تربط التقارير بالأصناف عبر تشابه الصور والنصوص، ضمن واجهة ثنائية اللغة. تم التحقق عبر أكثر من ٢٠٠ تقرير تشغيلي مع ٨ جهات حكومية.",
    },
    architecture: [
      { en: "Image-embedding matching (CLIP-style retrieval)", ar: "مطابقة الصور بالتضمين (شبيه CLIP)" },
      { en: "Bilingual NLP for free-text descriptions", ar: "معالجة لغوية ثنائية للأوصاف الحرّة" },
      { en: "Operator dashboard + claimant flow", ar: "لوحة للمشغّل + مسار للمستفيد" },
    ],
    technologies: ["Python", "Computer Vision", "Flask", "Product Design"],
    results: [
      { en: "~40% reduction in operational burden", ar: "خفض العبء التشغيلي بنحو ٤٠٪" },
      { en: "Item return rate doubled (30% → 60%)", ar: "مضاعفة معدل الاسترداد (٣٠٪ ← ٦٠٪)" },
      { en: "Top 15 of 40+ startups — NTDP MVP Lab", ar: "أفضل ١٥ من أصل +٤٠ شركة — NTDP MVP Lab" },
      { en: "Featured at LEAP 2025 under NTDP nomination", ar: "العرض في LEAP ٢٠٢٥ بترشيح NTDP" },
    ],
    lessons: {
      en: "Most of the value lived outside the model. Talking to 8 partner organizations taught me that 'accuracy' is what they measure on paper; 'one-screen workflow' is what actually drives adoption.",
      ar: "أغلب القيمة كانت خارج النموذج. الحوار مع ٨ جهات شريكة علّمني أن الدقة هي ما يُقاس على الورق، أما تبنّي الحل فعليًا فيقوده تصميم رحلة موحّدة في شاشة واحدة.",
    },
  },
  {
    slug: "kacst-research",
    title: { en: "Biosignal × LLM Research", ar: "بحث: الإشارات الحيوية × نماذج اللغة" },
    subtitle: {
      en: "Cross-lingual generation from brain signals — KACST",
      ar: "توليد عبر-لغوي من إشارات الدماغ — مدينة الملك عبدالعزيز للعلوم والتقنية",
    },
    year: "2026",
    tag: "Research",
    status: "In review",
    problem: {
      en: "Most generative pipelines that decode biosignals into text are English-only. Extending them to Arabic — a morphologically rich, right-to-left language — opens a new research frontier and a meaningful step for the region.",
      ar: "أغلب الأنظمة التوليدية التي تُحوّل الإشارات الحيوية إلى نص مقصورة على الإنجليزية. توسيعها إلى العربية — لغة غنية صرفيًا وذات اتجاه من اليمين إلى اليسار — يفتح أفقًا بحثيًا جديدًا وخطوة ذات معنى للمنطقة.",
    },
    approach: {
      en: "Reproduced a state-of-the-art pipeline, built a subject-independent variant, and added a cross-lingual head fine-tuned with LoRA on a 7B foundation model. Conducted spatial and frequency-band ablations to characterize where signal information actually lives.",
      ar: "إعادة إنتاج نظام بحثي متقدّم، وبناء نسخة مستقلة عن المستخدم، وإضافة رأس عبر-لغوي مُدرّب بـ LoRA على نموذج أساسي بحجم ٧ مليار. أُجريت تحاليل مكانية وترددية لتحديد أين تعيش المعلومة فعليًا داخل الإشارة.",
    },
    architecture: [
      { en: "Signal encoder → projection layer", ar: "مُرمِّز الإشارة ← طبقة إسقاط" },
      { en: "Visual alignment via CLIP", ar: "محاذاة بصرية عبر CLIP" },
      { en: "7B foundation model + LoRA adapters", ar: "نموذج أساسي ٧B + محوّلات LoRA" },
      { en: "Spatial probing across brain regions", ar: "فحص مكاني عبر مناطق الدماغ" },
      { en: "Frequency-band decomposition", ar: "تحليل النطاقات الترددية" },
    ],
    technologies: ["PyTorch", "Hugging Face", "LoRA", "CLIP", "Transformers"],
    results: [
      { en: "Subject-independent: 56.30% Object Accuracy (baseline 53.0%)", ar: "مستقل عن المستخدم: ٥٦٫٣٠٪ دقة الكائن (المرجع ٥٣٫٠٪)" },
      { en: "Cross-lingual extension: 58.78% Object Accuracy", ar: "التوسعة عبر-اللغوية: ٥٨٫٧٨٪" },
      { en: "Spatial probing — parietal region dominant", ar: "الفحص المكاني — هيمنة المنطقة الجدارية" },
      { en: "Targeted for publication", ar: "مُستهدَف للنشر" },
    ],
    lessons: {
      en: "The accuracy gains didn't come from a bigger backbone — they came from honestly characterizing where signal information lives before adding parameters.",
      ar: "تحسّن الدقة لم يأتِ من تكبير النموذج بل من فهم أين تسكن المعلومة في الإشارة قبل إضافة أي معاملات إضافية.",
    },
  },
  {
    slug: "emora",
    title: { en: "Emora", ar: "إيمورا" },
    subtitle: {
      en: "Multimodal storytelling for Arabic-speaking children",
      ar: "سرد متعدد الوسائط لأطفال المنطقة الناطقين بالعربية",
    },
    year: "2025–2026",
    tag: "Research",
    status: "Shipped",
    problem: {
      en: "Children with severe motor impairments often cannot speak or use their hands, yet they have inner emotional lives. Existing assistive tools are English-first and don't translate emotion into something the child can claim as theirs.",
      ar: "الأطفال ذوو الإعاقات الحركية الشديدة قد لا يستطيعون التحدّث أو استخدام أيديهم، لكن لديهم عوالم شعورية داخلية. الأدوات المساعدة الحالية مُصمَّمة للإنجليزية أولًا، ولا تُترجم العاطفة إلى شيء يشعر الطفل أنه يملكه.",
    },
    approach: {
      en: "Fused biosignals with eye-gaze to classify emotion, then chained that signal through generative art, Arabic story generation, and Arabic narration. Outperformed a recent published benchmark on leave-one-subject-out evaluation.",
      ar: "دمج الإشارات الحيوية مع تتبّع النظر لتصنيف العاطفة، ثم تمرير الإشارة عبر التوليد الفني، وتوليد القصص بالعربية، والسرد الصوتي العربي. تجاوز نتيجة معيار منشور حديث في تقييم LOSO.",
    },
    architecture: [
      { en: "Biosignal + eye-gaze fusion encoder", ar: "مُرمِّز دمج الإشارة الحيوية وتتبع النظر" },
      { en: "Seven-class emotion classifier", ar: "مُصنِّف عاطفي بسبع فئات" },
      { en: "Stable Diffusion XL — emotion-conditioned art", ar: "Stable Diffusion XL — توليد فني مشروط بالعاطفة" },
      { en: "LLM-based Arabic storytelling", ar: "سرد عربي بنموذج لغة كبير" },
      { en: "Arabic neural narration", ar: "سرد صوتي عربي عصبي" },
      { en: "Flask service for the full pipeline", ar: "خدمة Flask للنظام الكامل" },
    ],
    technologies: ["PyTorch", "Stable Diffusion XL", "LLMs", "Edge-TTS", "Flask"],
    results: [
      { en: "45.06% LOSO accuracy — beats recent benchmark", ar: "٤٥٫٠٦٪ دقة LOSO — يتجاوز معيارًا حديثًا" },
      { en: "End-to-end live demo: signal → emotion → art → story → voice", ar: "عرض حيّ متكامل: إشارة ← عاطفة ← فن ← قصة ← صوت" },
    ],
    lessons: {
      en: "Multimodal fusion isn't 'concatenate and pray.' Different channels carry overlapping but non-identical information; the win comes from a fusion stage that respects which channel matters more for which class.",
      ar: "الدمج متعدد الوسائط ليس مجرّد ضمّ ثم رجاء النجاح. القنوات المختلفة تحمل معلومات متداخلة لكنها ليست متطابقة؛ الفوز يأتي من مرحلة دمج تحترم أي قناة أهم لأي صنف.",
    },
  },
  {
    slug: "happiness",
    title: { en: "National Happiness Prediction", ar: "التنبؤ بالسعادة الوطنية" },
    subtitle: {
      en: "Modeling socio-economic drivers of well-being",
      ar: "نمذجة المحرّكات الاجتماعية-الاقتصادية للرفاه",
    },
    year: "2024",
    tag: "Coursework",
    status: "Shipped",
    problem: {
      en: "The World Happiness Report attributes well-being to broad factors — GDP, social support, freedom, generosity. But which actually drive predictions, and which only correlate?",
      ar: "يَنسب تقرير السعادة العالمي الرفاهَ إلى عوامل عريضة — الناتج، الدعم الاجتماعي، الحرية، الكرم. لكن أيّها يُحرّك التنبؤ فعليًا، وأيّها مجرد ارتباط؟",
    },
    approach: {
      en: "Built linear regression and random-forest models on the World Happiness Report dataset, then interpreted feature importance to separate true drivers from correlates.",
      ar: "بناء نماذج انحدار خطي وغابة عشوائية على بيانات تقرير السعادة العالمي، ثم تفسير أهمية المتغيّرات للتمييز بين المُحرّكات الفعلية وبين الارتباطات.",
    },
    architecture: [
      { en: "Feature engineering on socio-economic indicators", ar: "هندسة الميزات على المؤشرات الاجتماعية-الاقتصادية" },
      { en: "Linear regression baseline", ar: "خط الأساس بالانحدار الخطي" },
      { en: "Random-forest with importance ranking", ar: "غابة عشوائية مع ترتيب الأهمية" },
    ],
    technologies: ["Python", "scikit-learn", "pandas", "Data Science"],
    results: [{ en: "Cleanly separated true drivers from correlated noise", ar: "فصل المحرّكات الحقيقية عن الضوضاء المرتبطة" }],
    lessons: {
      en: "A higher R² isn't a victory if you can't say which feature mattered. Interpretability is the deliverable, not a footnote.",
      ar: "R² أعلى ليس نصرًا إذا لم تستطع تحديد أيّ ميزة كانت المهمة. التفسير هو المنتج، لا حاشية في آخر التقرير.",
    },
    links: [{ label: "GitHub", href: "https://github.com/Heaikyoraku/National-Happiness-Prediction" }],
  },
  {
    slug: "artifyai",
    title: { en: "ArtifyAI", ar: "ArtifyAI" },
    subtitle: {
      en: "Restoration + stylization pipeline for images",
      ar: "نظام ترميم وتنميط للصور",
    },
    year: "2024",
    tag: "Coursework",
    status: "Shipped",
    problem: {
      en: "Old or low-quality photos lose detail. Most restoration tools either over-smooth or hallucinate the wrong faces. Could we restore faithfully and then stylize, with a real evaluation loop?",
      ar: "الصور القديمة أو منخفضة الجودة تفقد التفاصيل، وأغلب أدوات الترميم إمّا تُنعّم بإفراط أو تختلق وجوهًا خاطئة. هل يمكن الترميم بأمانة ثم التنميط، مع حلقة تقييم حقيقية؟",
    },
    approach: {
      en: "Chained CodeFormer (face restoration) → Stable Diffusion (stylization) → ControlNet (structure preservation), with a side-by-side evaluation step.",
      ar: "ربط CodeFormer لترميم الوجوه ← Stable Diffusion للتنميط ← ControlNet للحفاظ على البنية، مع خطوة تقييم جنبًا إلى جنب.",
    },
    architecture: [
      { en: "CodeFormer — face restoration", ar: "CodeFormer — ترميم الوجوه" },
      { en: "Stable Diffusion — style transfer", ar: "Stable Diffusion — نقل النمط" },
      { en: "ControlNet — structural conditioning", ar: "ControlNet — تكييف البنية" },
    ],
    technologies: ["PyTorch", "CodeFormer", "Stable Diffusion", "ControlNet"],
    results: [{ en: "Measurable quality recovery in side-by-side eval", ar: "تحسّن قابل للقياس في التقييم المتوازي" }],
    lessons: {
      en: "Generative quality is downstream of conditioning. Most of the work is telling the model what to preserve, not what to change.",
      ar: "جودة التوليد ناتجة عن التكييف. أغلب العمل هو إخبار النموذج بما يجب الإبقاء عليه، لا ما يجب تغييره.",
    },
    links: [{ label: "GitHub", href: "https://github.com/Heaikyoraku/ArtifyAI" }],
  },
  {
    slug: "insiyab",
    title: { en: "Insiyab", ar: "انسياب" },
    subtitle: {
      en: "Metro congestion prediction with natural-language queries",
      ar: "التنبؤ بازدحام المترو عبر استعلامات بلغة طبيعية",
    },
    year: "2024",
    tag: "Coursework",
    status: "Shipped",
    problem: {
      en: "Public-transit congestion is predictable in aggregate but invisible to riders deciding when to leave. Could a model answer 'how crowded will line 2 be at 5 pm' in plain language?",
      ar: "الازدحام في النقل العام قابل للتنبؤ على المستوى الكلي، لكنه غير ظاهر للراكب وقت اتخاذ قرار الخروج. هل يمكن لنموذج أن يُجيب 'كم سيكون ازدحام الخط ٢ الساعة الخامسة؟' بلغة طبيعية؟",
    },
    approach: {
      en: "Trained an LSTM on synthetic congestion data and wrapped it in a natural-language layer that parses free-form questions about station, line, and time. Served via Gradio.",
      ar: "تدريب LSTM على بيانات ازدحام اصطناعية، ولفّه بطبقة لغة طبيعية تُحلّل الأسئلة الحرّة عن المحطة والخط والوقت. تقديم الخدمة عبر Gradio.",
    },
    architecture: [
      { en: "LSTM time-series model", ar: "نموذج LSTM للسلاسل الزمنية" },
      { en: "Question-parsing layer", ar: "طبقة تحليل الأسئلة" },
      { en: "Gradio interface", ar: "واجهة Gradio" },
    ],
    technologies: ["TensorFlow", "LSTM", "Gradio"],
    results: [{ en: "Live demo answering natural-language congestion queries", ar: "عرض حيّ يُجيب على استعلامات الازدحام بلغة طبيعية" }],
    lessons: {
      en: "Synthetic data is fine for a prototype, but the model only earns trust once it has seen real observations.",
      ar: "البيانات الاصطناعية كافية لنموذج أولي، لكن النموذج لا يكتسب الثقة إلا بعد رؤية مشاهدات حقيقية.",
    },
    links: [{ label: "GitHub", href: "https://github.com/Heaikyoraku/Insiyab" }],
  },
  {
    slug: "agentic-ticket-booking",
    title: { en: "Multi-Agent Booking System", ar: "نظام حجز متعدد الوكلاء" },
    subtitle: {
      en: "Coordinated agents handling a real payment flow",
      ar: "وكلاء منسّقون يديرون رحلة دفع حقيقية",
    },
    year: "2026",
    tag: "Coursework",
    status: "Shipped",
    problem: {
      en: "Booking a ticket end-to-end involves search, choice, hold, payment, and confirmation — each typically owned by a different service. Can specialized agents coordinate without stepping on each other or losing state?",
      ar: "حجز التذكرة من البداية إلى النهاية يتضمّن بحثًا واختيارًا وحجزًا ودفعًا وتأكيدًا — كل خطوة عادةً تخصّ خدمة مختلفة. هل يمكن لوكلاء متخصّصين أن يتنسّقوا دون تعارض أو فقدان للحالة؟",
    },
    approach: {
      en: "Designed and built (with three teammates) a multi-agent system where each agent owns one capability, coordinated via a router agent. I presented the technical architecture and the multi-agent reasoning portion.",
      ar: "تصميم وبناء نظام متعدد الوكلاء — مع ثلاث زميلات — حيث يملك كل وكيل قدرة واحدة، ويتنسّقون عبر وكيل توجيه. تولّيتُ تقديم الجانب التقني وآلية الاستدلال متعدد الوكلاء.",
    },
    architecture: [
      { en: "Router agent (intent + dispatch)", ar: "وكيل التوجيه (نية + إرسال)" },
      { en: "Discovery + reservation + payment + notification agents", ar: "وكلاء الاكتشاف والحجز والدفع والإشعار" },
      { en: "Redis shared state · PostgreSQL persistence", ar: "Redis للحالة المشتركة · PostgreSQL للتخزين" },
    ],
    technologies: ["LangChain", "FastAPI", "PostgreSQL", "Redis", "Moyasar"],
    results: [{ en: "End-to-end agent coordination on a live Saudi payment provider", ar: "تنسيق متكامل عبر مزوّد دفع سعودي حيّ" }],
    lessons: {
      en: "Agents fail at the seams, not inside themselves. The router and the shared-state schema are where you spend most of your debugging.",
      ar: "الوكلاء يفشلون عند الحواف، لا داخل أنفسهم. وكيل التوجيه ومخطط الحالة المشتركة هما المكانان اللذان يستهلكان أغلب وقت التصحيح.",
    },
  },
  {
    slug: "raqeeb",
    title: { en: "Raqeeb", ar: "رقيب" },
    subtitle: {
      en: "Multi-agent border-security simulation",
      ar: "محاكاة أمن حدود متعددة الوكلاء",
    },
    year: "2024",
    tag: "Coursework",
    status: "Archived",
    problem: {
      en: "Border surveillance is fundamentally a multi-agent problem: detection, tracking, decision, and dispatch happen in parallel and must agree under uncertainty.",
      ar: "أمن الحدود في جوهره مسألة متعدّدة الوكلاء: الكشف والتتبّع واتخاذ القرار والإرسال تتم بالتوازي ويجب أن تتفق تحت ظروف من عدم اليقين.",
    },
    approach: {
      en: "Built a simulated multi-agent system in JADE. Each agent specialized in one role and communicated over FIPA-compliant messages — my first time treating agency as a first-class abstraction.",
      ar: "بناء نظام محاكاة متعدد الوكلاء في JADE. كل وكيل متخصّص في دور واحد، والاتصال عبر رسائل وفق FIPA — أول مرة أتعامل مع الوكالة بوصفها تجريدًا من الدرجة الأولى.",
    },
    architecture: [
      { en: "JADE agent containers", ar: "حاويات وكلاء JADE" },
      { en: "FIPA-compliant messaging", ar: "مراسلة وفق FIPA" },
      { en: "Role-specialized agents", ar: "وكلاء متخصّصون بالأدوار" },
    ],
    technologies: ["JADE", "Java", "Multi-Agent Systems"],
    results: [{ en: "Working simulation with coordinated decisions under noise", ar: "محاكاة عاملة باتخاذ قرارات منسّقة تحت ضوضاء" }],
    lessons: {
      en: "This project made agentic AI click for me — long before LangChain. The patterns are the same; only the substrate changed.",
      ar: "هذا المشروع جعل مفهوم الذكاء الوكيل يستقرّ في ذهني — قبل LangChain بكثير. الأنماط نفسها؛ ما تغيّر هو الطبقة التحتية فقط.",
    },
  },
];

// ===== Achievements =====
export const achievements: { title: L; org: L; year: string; kind: L }[] = [
  {
    title: { en: "1st Place — AppGPT Hackathon", ar: "المركز الأول — هاكاثون AppGPT" },
    org: { en: "PNU × CYBERX", ar: "نادي PNU × CYBERX" },
    year: "2024",
    kind: { en: "Competition", ar: "مسابقة" },
  },
  {
    title: { en: "3rd Place — CodeLab Competition", ar: "المركز الثالث — CodeLab" },
    org: { en: "Center of Digital Entrepreneurship", ar: "مركز ريادة الأعمال الرقمية" },
    year: "2024",
    kind: { en: "Competition", ar: "مسابقة" },
  },
  {
    title: { en: "Top 15 — MVP Lab Accelerator", ar: "أفضل ١٥ — حاضنة MVP Lab" },
    org: { en: "The Garage · NTDP", ar: "الجراج · NTDP" },
    year: "2025",
    kind: { en: "Accelerator", ar: "حاضنة" },
  },
  {
    title: { en: "LEAP 2025 — National Showcase", ar: "LEAP ٢٠٢٥ — عرض وطني" },
    org: { en: "NTDP nomination", ar: "ترشيح NTDP" },
    year: "2025",
    kind: { en: "Showcase", ar: "عرض" },
  },
  {
    title: { en: "Oracle Student Ambassador", ar: "سفيرة Oracle للطلاب" },
    org: { en: "Oracle", ar: "Oracle" },
    year: "—",
    kind: { en: "Ambassador", ar: "سفيرة" },
  },
  {
    title: { en: "Co-Founder & CTO — Dhallaty", ar: "شريكة مؤسِّسة ومديرة تقنية — ضالتي" },
    org: { en: "Independent", ar: "مستقل" },
    year: "2024–2025",
    kind: { en: "Leadership", ar: "قيادة" },
  },
];

export const certificates = [
  { name: { en: "AI Engineer Nanodegree", ar: "AI Engineer Nanodegree" }, issuer: "Udacity · AWS" },
  { name: { en: "AI Analyst", ar: "AI Analyst" }, issuer: "IBM" },
  { name: { en: "AI for Medicine Specialization", ar: "AI for Medicine Specialization" }, issuer: "DeepLearning.AI" },
  { name: { en: "Developing Explainable AI (XAI)", ar: "Developing Explainable AI" }, issuer: "Duke University" },
  { name: { en: "Machine Learning with Python", ar: "Machine Learning with Python" }, issuer: "IBM" },
  { name: { en: "AWS Educate ML Foundations", ar: "AWS Educate ML Foundations" }, issuer: "AWS" },
  { name: { en: "Introducing Generative AI with AWS", ar: "Introducing Generative AI with AWS" }, issuer: "Udacity" },
  { name: { en: "McKinsey Forward Program", ar: "McKinsey Forward Program" }, issuer: "McKinsey.org" },
] satisfies { name: L; issuer: string }[];

// ===== Current focus (replaces "Now" with a cleaner block) =====
export const focus: { title: L; body: L }[] = [
  {
    title: { en: "Generative & agentic prototypes", ar: "نماذج توليدية ووكيلة" },
    body: {
      en: "Designing multi-agent flows for real workflows — listing, triage, and document parsing across Saudi SME use cases.",
      ar: "تصميم تدفقات متعددة الوكلاء لرحلات عمل حقيقية — الإدراج والفرز ومعالجة الوثائق ضمن سيناريوهات منشآت سعودية.",
    },
  },
  {
    title: { en: "AI for healthcare & biosignals", ar: "ذكاء اصطناعي للصحة والإشارات الحيوية" },
    body: {
      en: "Continuing research on biosignal–LLM pipelines, with an eye on clinically meaningful evaluation.",
      ar: "الاستمرار في الأبحاث الجامعة بين الإشارات الحيوية ونماذج اللغة، مع تركيز على التقييم الإكلينيكي ذي المعنى.",
    },
  },
  {
    title: { en: "Foundation models on edge budgets", ar: "النماذج الأساسية بميزانيات محدودة" },
    body: {
      en: "Exploring how small a useful adapter can get on a foundation backbone — rank, dataset, and budget tradeoffs.",
      ar: "استكشاف أصغر حجم ممكن لمحوّل مفيد على نموذج أساسي — مفاضلات الرتبة وحجم البيانات والميزانية.",
    },
  },
];

// ===== Knowledge graph =====
export type GraphNode = {
  id: string;
  label: L;
  group: "core" | "applied" | "method" | "product";
  x: number;
  y: number;
};

export const graphNodes: GraphNode[] = [
  { id: "ai",  label: { en: "AI Engineering", ar: "هندسة الذكاء" }, group: "core",    x: 0,     y: 0 },
  { id: "gen", label: { en: "Generative AI",    ar: "ذكاء توليدي" }, group: "core",    x: -0.65, y: -0.50 },
  { id: "agt", label: { en: "Agentic AI",       ar: "ذكاء وكيل" },   group: "core",    x:  0.65, y: -0.50 },
  { id: "fm",  label: { en: "Foundation Models",ar: "نماذج أساسية" },group: "core",    x:  0,    y: -0.85 },
  { id: "cv",  label: { en: "Computer Vision",  ar: "رؤية حاسوبية" },group: "applied", x: -0.90, y:  0.05 },
  { id: "mm",  label: { en: "Multimodal AI",    ar: "متعدد الوسائط" },group: "applied",x:  0.90, y:  0.05 },
  { id: "ml",  label: { en: "Machine Learning", ar: "تعلّم الآلة" }, group: "method",  x: -0.55, y:  0.60 },
  { id: "ds",  label: { en: "Data Science",     ar: "علم البيانات" },group: "method",  x:  0.55, y:  0.60 },
  { id: "hlth",label: { en: "AI · Healthcare",  ar: "صحة" },         group: "applied", x: -0.15, y:  0.90 },
  { id: "mas", label: { en: "Multi-Agent",      ar: "وكلاء متعدّدون" },group: "method", x:  1.00, y: -0.30 },
  { id: "prd", label: { en: "AI Products",      ar: "منتجات" },      group: "product", x:  0.30, y:  0.90 },
];

export const graphEdges: [string, string][] = [
  ["ai", "gen"], ["ai", "agt"], ["ai", "fm"], ["ai", "cv"], ["ai", "mm"],
  ["ai", "ml"],  ["ai", "ds"],  ["ai", "hlth"], ["ai", "mas"], ["ai", "prd"],
  ["gen", "fm"], ["agt", "fm"], ["agt", "mas"], ["gen", "mm"], ["cv", "mm"],
  ["ml", "ds"], ["hlth", "ml"], ["hlth", "cv"], ["agt", "prd"], ["gen", "prd"],
];
