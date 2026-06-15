import type { Treatment } from '../types';

export const treatments: Treatment[] = [
  // COSMETIC DENTISTRY (5)
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    category: 'Cosmetic Dentistry',
    shortDescription: 'Brighten your smile up to 8 shades in just a single hour with our safe, dentist-supervised teeth whitening treatment. Utilizing Philips Zoom LED-accelerated technology, we deliver immediate, spectacular results while prioritizing your comfort and enamel health.',
    fullDescription: 'Our professional teeth whitening service represents the gold standard in cosmetic dental brightness. Under the expert guidance of Dr. Priya Nair, we utilize the clinical-grade Philips Zoom WhiteSpeed system, which is widely recognized for its safety, speed, and exceptional results. The process begins with a detailed assessment of your current tooth shade and gum health to ensure suitability.\n\nWe then apply a highly concentrated hydrogen peroxide whitening gel to your teeth, taking strict precautions to fully isolate and protect your gums and lips. A specialized blue LED light is positioned over your mouth to activate the gel, accelerating the breakdown of stubborn stains caused by coffee, tea, red wine, tobacco, and aging.\n\nThis light-activated process is performed in three to four 15-minute intervals during a single session, allowing us to monitor and customize the depth of shade you achieve. Many patients walk out with teeth up to eight shades whiter in just 60 minutes, making it the perfect quick transformation.\n\nTo minimize the mild sensitivity that can occur, our whitening gels incorporate Amorphous Calcium Phosphate (ACP), which helps rebuild enamel luster and reduce discomfort. We also construct custom-fitted take-home trays with gentle maintenance gel for you to touch up your smile in the future.\n\nProfessional teeth whitening is a highly conservative cosmetic enhancement. It does not alter your natural tooth structure and offers a safe, predictable, and highly rewarding way to boost your confidence and achieve a bright, radiant smile.',
    image: '/images/site/smile_radiant.png',
    duration: '60-90 minutes',
    recovery: 'No downtime',
    price: 'From $299',
    priceNote: 'Per session, finance available',
    painLevel: 'Minimal',
    sessions: '1 session',
    benefits: [
      'Teeth up to 8 shades lighter in one visit',
      'Instant, stunning results in just 60 minutes',
      'Safe, clinically supervised enamel protection',
      'Advanced formula minimizes tooth sensitivity',
      'Custom take-home maintenance trays included',
      'Lifts deep-set stains from coffee, wine, and aging'
    ],
    process: [
      { step: '1', title: 'Consultation & Shade Check', description: 'We evaluate your oral health, discuss your whitening goals, and document your baseline tooth shade.' },
      { step: '2', title: 'Barrier Protection', description: 'Your lips and gums are carefully isolated and covered to protect them from the professional-strength gel.' },
      { step: '3', title: 'Gel Application & LED Light', description: 'The Zoom whitening gel is applied and activated using our specialized blue LED light for a 15-minute cycle.' },
      { step: '4', title: 'Cycle Repeat', description: 'The gel is removed and reapplied for 3 to 4 cycles until the desired brightness is successfully achieved.' },
      { step: '5', title: 'Post-Care Protection', description: 'We apply a soothing desensitizing paste to protect your teeth and provide take-home trays with instruction.' }
    ],
    faqs: [
      { q: 'How long do the whitening results last?', a: 'Typically between 12 to 24 months, depending on your diet and habits. Avoiding staining foods and using your take-home touch-up kit will significantly extend the brightness.' },
      { q: 'Will teeth whitening cause permanent sensitivity?', a: 'No, any sensitivity is temporary and usually subsides within 24-48 hours. We use Zoom gels with built-in desensitizers to prevent discomfort.' },
      { q: 'Can teeth whitening whiten my existing crowns or fillings?', a: 'No, whitening agents only work on natural tooth enamel. Any crowns, veneers, or white fillings will remain their original color.' },
      { q: 'Is professional whitening safe for enamel?', a: 'Yes, clinical studies prove that dentist-supervised teeth whitening using Philips Zoom does not damage or weaken tooth enamel.' }
    ],
    relatedTreatments: ['porcelain-veneers', 'composite-bonding', 'smile-makeover'],
    featured: true,
    isNew: false,
    icon: 'Sparkles'
  },
  {
    id: 'porcelain-veneers',
    slug: 'porcelain-veneers',
    title: 'Porcelain Veneers',
    category: 'Cosmetic Dentistry',
    shortDescription: 'Achieve a flawless, symmetrical smile with custom-designed porcelain veneers. These ultra-thin shells are individually crafted to cover chips, gaps, and severe staining, providing a durable and highly natural aesthetic.',
    fullDescription: 'Porcelain veneers represent the pinnacle of cosmetic dentistry, offering a comprehensive solution for teeth that are chipped, heavily stained, unevenly spaced, or slightly misaligned. Created under the precise guidance of Dr. Charlotte Whitmore, veneers are ultra-thin shells of dental-grade porcelain that are custom-bonded to the front surfaces of your teeth, instantly transforming their shape, color, and alignment.\n\nOur process begins with Digital Smile Design. We take high-resolution photographs and 3D intraoral scans to construct a digital model of your ideal smile, evaluating the proportions of your face to ensure a natural appearance. You can review and approve this design before any physical work is done.\n\nTo prepare your teeth, a microscopic layer of enamel (often less than 0.5mm) is gently removed to create space for the veneers. We then take a precise digital impression and place temporary veneers to protect your teeth while our boutique dental laboratory handcrafts your permanent porcelain restorations.\n\nOnce completed, each veneer is meticulously adjusted for fit and color harmony before being bonded to your tooth using high-strength dental cement. Porcelain is highly biocompatible and mimics the light-reflecting qualities of natural enamel, ensuring a lifelike appearance.\n\nPorcelain is also highly stain-resistant, meaning your smile will remain bright for years. With good oral hygiene and regular dental check-ups, porcelain veneers are an exceptionally durable cosmetic investment, lasting between 10 to 20 years.',
    image: '/images/site/clinical_checkup.png',
    duration: '2 visits (over 2-3 weeks)',
    recovery: 'No downtime',
    price: 'From $1,200',
    priceNote: 'Per tooth, interest-free finance available',
    painLevel: 'Minimal',
    sessions: '2 sessions',
    benefits: [
      'Flawless, symmetrical, and completely natural appearance',
      'Highly resistant to stains from coffee, wine, and tea',
      'Long-lasting durability of 15+ years with proper care',
      'Ultra-conservative preparations preserve natural tooth',
      'Custom color-matched to your face and preferences',
      'Transforms chips, severe gaps, and crowding in weeks'
    ],
    process: [
      { step: '1', title: 'Consultation & Smile Design', description: 'We discuss your aesthetic goals, take digital scans, and model your proposed new smile using 3D software.' },
      { step: '2', title: 'Tooth Preparation', description: 'A microscopic layer of enamel is prepared, and a high-resolution digital scan is captured for our lab.' },
      { step: '3', title: 'Temporary Veneers', description: 'We place temporary resin veneers so you can test-drive your new teeth and go about your daily life.' },
      { step: '4', title: 'Laboratory Crafting', description: 'Our specialist dental ceramist handcrafts your custom porcelain veneers, blending shades for natural depth.' },
      { step: '5', title: 'Final Bonding', description: 'The permanent veneers are carefully checked for fit and color, then permanently bonded to your teeth.' }
    ],
    faqs: [
      { q: 'Is the process of getting veneers painful?', a: 'No, we use local anesthetic during the preparation and bonding stages to ensure you feel absolutely nothing.' },
      { q: 'How long do porcelain veneers last?', a: 'They typically last between 10 to 20 years with proper care, including brushing, flossing, and regular check-ups.' },
      { q: 'Can I eat normally with porcelain veneers?', a: 'Yes, once bonded, they are incredibly strong. You can eat all your favorite foods, though you should avoid chewing on hard objects like ice.' },
      { q: 'Is the veneer process reversible?', a: 'Because a thin layer of enamel is removed to fit the veneers, the process is generally considered permanent and irreversible.' }
    ],
    relatedTreatments: ['teeth-whitening', 'composite-bonding', 'smile-makeover'],
    featured: true,
    isNew: false,
    icon: 'Layers'
  },
  {
    id: 'composite-bonding',
    slug: 'composite-bonding',
    title: 'Composite Bonding',
    category: 'Cosmetic Dentistry',
    shortDescription: 'Repair minor chips, close small gaps, and smooth uneven edges in a single visit. Composite bonding utilizes tooth-colored resin sculpted directly onto your teeth, offering immediate, affordable, and beautiful results.',
    fullDescription: 'Composite bonding is a highly versatile and conservative cosmetic dental treatment designed to correct minor structural flaws in a single visit. Using a high-strength, tooth-colored composite resin, Dr. Priya Nair carefully builds up chipped edges, fills in small gaps between teeth, reshapes uneven teeth, and conceals minor discolorations, restoring a balanced and healthy appearance.\n\nThe key advantage of composite bonding is its conservative nature. Unlike veneers or crowns, composite bonding rarely requires any tooth reduction. In most cases, the natural tooth structure is preserved completely intact, and no local anesthetic injections are needed, making it a comfortable and accessible treatment.\n\nPriya prepares the tooth surface with a mild etching agent to create a secure bonding foundation. She then applies the putty-like composite resin, hand-sculpting and layering the material to match the natural contours, translucent tips, and color shades of your adjacent teeth.\n\nOnce sculpted, a high-intensity curing light is used to harden the resin in seconds. The material is then shaped, smoothed, and polished to a high-gloss luster, blending seamlessly with your natural enamel. The entire process takes between 30 to 45 minutes per tooth.\n\nComposite bonding provides immediate cosmetic gratification, allowing you to walk out with a renewed smile. While less durable than porcelain, composite bonding is a highly cost-effective option that can last between 5 to 8 years with proper maintenance.',
    image: '/images/site/smile_radiant.png',
    duration: '60-90 minutes',
    recovery: 'No downtime',
    price: 'From $350',
    priceNote: 'Per tooth, same-day results',
    painLevel: 'None',
    sessions: '1 session',
    benefits: [
      'No needles or local anesthetic required in most cases',
      'Immediate, same-day results in a single short visit',
      'Highly conservative treatment preserves natural enamel',
      'Closes gaps, repairs chips, and corrects uneven edges',
      'Cost-effective alternative to porcelain restorations',
      'Easy to repair or touch up in the future if needed'
    ],
    process: [
      { step: '1', title: 'Shade Matching', description: 'We select the perfect resin color using a shade guide to match your natural surrounding teeth.' },
      { step: '2', title: 'Surface Preparation', description: 'The tooth surface is lightly cleaned and conditioned with a gentle gel to ensure optimal adhesion.' },
      { step: '3', title: 'Resin Sculpting', description: 'Dr. Priya Nair carefully applies the resin in thin layers, sculpting it by hand to the perfect shape.' },
      { step: '4', title: 'Light Curing', description: 'A specialized blue light is directed onto the sculpted resin to harden and bond the material in seconds.' },
      { step: '5', title: 'Polishing', description: 'We trim, shape, and polish the bonded resin to a high-gloss finish that matches your natural enamel.' }
    ],
    faqs: [
      { q: 'Does composite bonding stain?', a: 'Yes, composite resin can absorb stains over time from foods like coffee, red wine, and berries. Regular cleanings help keep them bright.' },
      { q: 'Is composite bonding painful?', a: 'No, bonding is a completely painless procedure. Because no enamel is removed, anesthetic is rarely required.' },
      { q: 'How long does composite bonding last?', a: 'Typically between 5 to 8 years. It can be easily touched up or replaced as wear occurs.' },
      { q: 'Can composite bonding repair a chipped front tooth?', a: 'Yes, repairing minor chips and wear on front teeth is one of the most common and successful uses for bonding.' }
    ],
    relatedTreatments: ['teeth-whitening', 'porcelain-veneers', 'white-fillings'],
    featured: false,
    isNew: false,
    icon: 'Brush'
  },
  {
    id: 'smile-makeover',
    slug: 'smile-makeover',
    title: 'Smile Makeover',
    category: 'Cosmetic Dentistry',
    shortDescription: 'Completely transform your appearance with a bespoke Smile Makeover. By combining teeth whitening, porcelain veneers, orthodontics, or implants, we design a customized treatment plan tailored to your facial harmony.',
    fullDescription: 'A Smile Makeover is a comprehensive cosmetic treatment plan tailored to transform the overall aesthetics of your smile. Rather than applying a single procedure, Dr. Charlotte Whitmore integrates multiple restorative and cosmetic treatments—such as teeth whitening, porcelain veneers, composite bonding, gum contouring, and dental implants—to address multiple dental concerns simultaneously.\n\nThe cornerstone of our Smile Makeover process is facial harmony. Using Digital Smile Design (DSD), we analyze your facial features, lip movements, and skin tone to plan a smile that looks natural and enhances your unique beauty. We can even transfer this design into your mouth as a temporary mockup, allowing you to preview your new smile.\n\nOnce the design is approved, we map out a structured, phase-based treatment plan. This ensures that any foundational dental issues—such as gum health or alignment—are treated first, creating a secure foundation for cosmetic enhancements like veneers or crowns.\n\nWhether you want to correct severe discoloration, fill missing gaps, realign crooked teeth, or build up worn edges, a Smile Makeover is designed around your timeline and budget. We offer flexible, interest-free payment options to make your smile journey manageable.\n\nThe result is a life-changing aesthetic transformation. A Smile Makeover not only restores full dental function but boosts your self-esteem, allowing you to speak, laugh, and smile with absolute confidence.',
    image: '/images/site/patient_consultation.png',
    duration: 'Varies (2 visits to multiple months)',
    recovery: 'Varies by procedure',
    price: 'From $3,500',
    priceNote: 'Custom treatment plan, finance options',
    painLevel: 'Minimal',
    sessions: 'Multiple sessions',
    benefits: [
      'Complete smile transformation tailored to your goals',
      'Integrates multiple procedures for comprehensive results',
      'Bespoke digital planning ensures perfect facial harmony',
      'Preview your new smile in your mouth before beginning',
      'Restores full chewing and speaking function',
      'Improves long-term oral health and structural stability'
    ],
    process: [
      { step: '1', title: 'Comprehensive Consultation', description: 'We discuss your concerns, capture 3D scans and photographs, and define your aesthetic goals.' },
      { step: '2', title: 'Digital Smile Design', description: 'Our team designs your new smile on screen, customizing tooth shape, alignment, and color shades.' },
      { step: '3', title: 'Trial Smile Mockup', description: 'We place a temporary mockup in your mouth so you can see and feel your proposed smile in real life.' },
      { step: '4', title: 'Phased Treatment', description: 'We execute the planned treatments in sequence, starting with foundational health and finishing with cosmetic details.' },
      { step: '5', title: 'Final Reveal & Support', description: 'Your new smile is complete! We provide custom night splints and maintenance plans to protect your investment.' }
    ],
    faqs: [
      { q: 'How long does a Smile Makeover take?', a: 'It depends on the treatments combined. Simple cosmetic makeovers take 2-3 weeks, while cases involving implants or orthodontics can take several months.' },
      { q: 'Will my new smile look fake or too white?', a: 'No, we use Digital Smile Design to match your natural facial harmony, ensuring teeth have realistic translucency, shape, and shade.' },
      { q: 'What is the cost of a Smile Makeover?', a: 'Costs vary based on the procedures selected. We provide a detailed treatment plan and cost breakdown before any work begins.' },
      { q: 'Are interest-free payment plans available?', a: 'Yes, we offer flexible payment options through DentiCare and Zip Money, allowing you to split the cost into monthly installments.' }
    ],
    relatedTreatments: ['porcelain-veneers', 'teeth-whitening', 'invisalign', 'single-implant'],
    featured: true,
    isNew: true,
    icon: 'Sparkles'
  },
  {
    id: 'gum-contouring',
    slug: 'gum-contouring',
    title: 'Gum Contouring',
    category: 'Cosmetic Dentistry',
    shortDescription: 'Frame your smile beautifully with laser gum contouring. This minimally invasive treatment gently removes excess gum tissue to correct a gummy, uneven smile line, exposing more of your natural teeth with rapid healing.',
    fullDescription: 'Gum contouring, also known as gum lifting or gingivoplasty, is a cosmetic laser procedure designed to reshape and balance your gum line. Many patients feel self-conscious about a "gummy" smile—where excessive gum tissue covers too much of the teeth—or an asymmetrical gum line that makes teeth look uneven or short. Gum contouring provides a quick, precise solution to balance your smile.\n\nAt Pearlhaus, we use advanced Waterlase dental lasers to perform this procedure. Unlike traditional surgery that utilizes scalpels, the laser uses a concentrated light beam to vaporize excess tissue with high precision. This light energy seals blood vessels and sterilizes the tissue simultaneously.\n\nThis means the treatment is exceptionally gentle. We apply a local anesthetic to ensure you feel no pain, and the lack of incisions means no stitches are required. Bleeding is minimal, and post-operative swelling or discomfort is significantly reduced.\n\nDuring the procedure, Dr. Charlotte Whitmore carefully sculpts the gum line to follow the natural contours of your teeth, exposing more of your tooth structure. This creates a longer, more symmetrical, and beautifully proportioned frame for your smile.\n\nThe healing process is fast, with most patients reporting minor gum soreness that resolves within 2 to 3 days. Gum contouring is a permanent cosmetic improvement, delivering a beautiful frame for your teeth in a single short appointment.',
    image: '/images/site/clinical_checkup.png',
    duration: '45-60 minutes',
    recovery: '2-3 days (minor soreness)',
    price: 'From $650',
    priceNote: 'Per arch, laser technology',
    painLevel: 'Minimal',
    sessions: '1 session',
    benefits: [
      'Reshapes and balances a gummy, uneven smile line',
      'Exposes more of your natural tooth structure',
      'Advanced laser cuts, seals, and sterilizes tissue',
      'Virtually bloodless procedure with no stitches required',
      'Rapid healing times with minimal discomfort',
      'Permanent results in a single, short appointment'
    ],
    process: [
      { step: '1', title: 'Gum Evaluation', description: 'We examine your gum health and plan the ideal contour line to frame your teeth.' },
      { step: '2', title: 'Local Anesthesia', description: 'A mild local anesthetic is applied to the gum area to ensure complete comfort during the procedure.' },
      { step: '3', title: 'Laser Sculpting', description: 'Dr. Charlotte Whitmore uses the Waterlase laser to vaporize and shape excess gum tissue.' },
      { step: '4', title: 'Tissue Polish', description: 'The newly shaped gum margins are polished, and dental health check-ups ensure symmetry.' },
      { step: '5', title: 'Healing Advice', description: 'We provide post-care instructions, advising soft foods and gentle brushing for 48 hours.' }
    ],
    faqs: [
      { q: 'Does gum contouring hurt?', a: 'The procedure is performed under local anesthetic, so you will feel no pain. Some mild soreness may be felt after the numbing wears off.' },
      { q: 'Is gum contouring permanent?', a: 'Yes, gum tissue removed during contouring does not grow back, making it a permanent cosmetic improvement.' },
      { q: 'How long does it take for the gums to heal?', a: 'Gums heal quickly. While the tissue is fully recovered in about 2 weeks, any soreness is usually gone within 2 to 3 days.' },
      { q: 'Can I combine gum contouring with veneers?', a: 'Yes, gum contouring is often performed before placing veneers to ensure the new teeth are framed symmetrically.' }
    ],
    relatedTreatments: ['porcelain-veneers', 'smile-makeover', 'teeth-whitening'],
    featured: false,
    isNew: false,
    icon: 'Scissors'
  },

  // GENERAL DENTISTRY (5)
  {
    id: 'checkup-clean',
    slug: 'checkup-clean',
    title: 'Dental Check-up & Clean',
    category: 'General Dentistry',
    shortDescription: 'Maintain optimal oral health and fresh breath with a comprehensive check-up and clean. Our thorough examinations, digital X-rays, and gentle scaling protect your teeth and detect potential issues early.',
    fullDescription: 'A routine dental check-up and clean is the foundation of long-term oral health, fresh breath, and a confident smile. At Pearlhaus, we believe preventive care should be a regular, comfortable priority. Under the care of Dr. Ethan Park, our comprehensive check-up is designed to assess your entire mouth, gums, jaw joints, and soft tissues, identifying potential issues before they develop into painful conditions.\n\nThe appointment begins with a detailed visual examination and digital X-rays (if due) to inspect the areas between your teeth and under existing restorations. We also perform an oral cancer screening and evaluate your gum health, checking for early signs of gingivitis or bone recession.\n\nNext, our hygienist conducts a professional clean using specialized ultrasonic scalers and hand instruments. This gently removes plaque and hardened tartar (calculus) buildup from your teeth and under the gum line, areas that standard brushing cannot clear.\n\nOnce scaled, your teeth are polished to remove superficial stains from coffee, tea, or food, restoring your enamel\'s natural smoothness and shine. We finish with a professional fluoride treatment to strengthen your enamel and prevent future decay.\n\nBefore you leave, we discuss our findings, show you any issues on our monitors, and provide customized home care hygiene advice. Regular check-ups every six months are key to preserving your natural teeth and maintaining a healthy smile.',
    image: '/images/site/aligners_invisalign.png',
    duration: '60 minutes',
    recovery: 'No downtime',
    price: 'From $195',
    priceNote: 'Gap-free check-ups available for health funds',
    painLevel: 'None',
    sessions: 'Ongoing (every 6 months)',
    benefits: [
      'Comprehensive examination of teeth, gums, and soft tissues',
      'Removes stubborn tartar and plaque standard brushing misses',
      'Polishes away surface stains for a smoother, brighter smile',
      'Strengthens enamel with professional fluoride application',
      'Detects decay, gum disease, and oral cancer early',
      'Helps prevent bad breath and maintains healthy gums'
    ],
    process: [
      { step: '1', title: 'Dental Assessment', description: 'We visually examine your teeth, gums, biting alignment, and surrounding oral tissues.' },
      { step: '2', title: 'Digital X-Rays', description: 'Low-radiation digital X-rays are taken to inspect between teeth and check bone structure.' },
      { step: '3', title: 'Ultrasonic Scaling', description: 'Our hygienist uses gentle ultrasonic tools to scale away hard tartar and plaque buildup.' },
      { step: '4', title: 'Tooth Polishing', description: 'We apply a polishing paste to remove superficial stains and smooth the enamel surface.' },
      { step: '5', title: 'Fluoride Treatment', description: 'A highly concentrated fluoride gel is applied to strengthen enamel and prevent cavities.' }
    ],
    faqs: [
      { q: 'How often should I get a check-up and clean?', a: 'We recommend visiting us every 6 months to maintain optimal oral health and detect any decay or gum issues early.' },
      { q: 'Do you offer gap-free check-ups for health funds?', a: 'Yes! We offer gap-free check-up, clean, and X-ray services for all patients with eligible private dental health insurance.' },
      { q: 'Does a professional clean hurt?', a: 'A professional clean is generally painless. If you have sensitive teeth or gums, we can apply a numbing gel to make the process comfortable.' },
      { q: 'Why do I need dental X-rays?', a: 'X-rays allow us to check areas invisible to the naked eye, such as bone levels, nerve canals, and decay forming between teeth.' }
    ],
    relatedTreatments: ['white-fillings', 'root-canal', 'mouthguards'],
    featured: true,
    isNew: false,
    icon: 'Stethoscope'
  },
  {
    id: 'white-fillings',
    slug: 'white-fillings',
    title: 'Tooth-Coloured Fillings',
    category: 'General Dentistry',
    shortDescription: 'Restore decayed or damaged teeth discreetly with metal-free composite fillings. Color-matched perfectly to your natural enamel, these composite fillings provide a durable, metal-free, and beautiful result.',
    fullDescription: 'Tooth-colored fillings, also known as composite fillings, are a modern, mercury-free method used to restore teeth damaged by decay or wear. Traditional silver amalgam fillings are highly visible and contain mercury. At Pearlhaus, we use premium composite resin materials that bond directly to your enamel, restoring your tooth\'s strength while matching its natural color.\n\nDr. Ethan Park performs our filling procedures with an emphasis on comfort and durability. The process begins by applying a local anesthetic to ensure you feel nothing. Ethan then gently removes the decayed or damaged portion of the tooth, cleaning the cavity thoroughly.\n\nTo prepare the tooth for bonding, a mild conditioning gel is applied. The putty-like composite resin, which consists of glass and plastic particles, is layered into the cavity. We select a shade that matches your surrounding teeth, ensuring the filling is invisible.\n\nEach layer of composite resin is hardened in seconds using a high-intensity curing light. This direct bonding process chemically fuses the filling to your natural tooth, reinforcing its structural strength and helping prevent future fractures.\n\nOnce filled, the tooth is shaped to match your biting alignment and polished to a smooth, natural-looking finish. You can eat and drink normally immediately after the appointment, with restored chewing function and a seamless appearance.',
    image: '/images/site/smile_radiant.png',
    duration: '45-60 minutes',
    recovery: 'No downtime',
    price: 'From $180',
    priceNote: 'Depending on cavity size',
    painLevel: 'None',
    sessions: '1 session',
    benefits: [
      'Metal-free composite resin contains no mercury',
      'Invisible finish matches natural tooth color',
      'Bonds directly to enamel, reinforcing tooth strength',
      'Requires less removal of healthy tooth structure than amalgam',
      'Completed in a single, short appointment',
      'Resistant to fractures and temperature changes'
    ],
    process: [
      { step: '1', title: 'Local Anesthetic', description: 'We apply a local anesthetic to the tooth area to ensure you feel absolutely no discomfort.' },
      { step: '2', title: 'Decay Removal', description: 'Dr. Ethan Park gently removes the decayed tissue and cleans the cavity space thoroughly.' },
      { step: '3', title: 'Enamel Etching', description: 'The cavity is prepared with a mild gel to roughen the surface microscopically for bonding.' },
      { step: '4', title: 'Resin Layering', description: 'We select the matching shade and pack the composite resin into the cavity, curing each layer with light.' },
      { step: '5', title: 'Bite Adjustment & Polish', description: 'The filling is sculpted to match your bite, smoothed, and polished to blend with your enamel.' }
    ],
    faqs: [
      { q: 'Will my tooth-colored filling be visible?', a: 'No, the composite resin is custom-shaded to match your tooth enamel, making the restoration virtually invisible.' },
      { q: 'Can I replace my old silver amalgam fillings with composite?', a: 'Yes, we safely remove and replace old metal fillings with healthy, natural-looking tooth-colored composite.' },
      { q: 'How long do composite fillings last?', a: 'Typically between 7 to 10 years, depending on the filling size, location, and your oral hygiene habits.' },
      { q: 'Will my tooth be sensitive after getting a filling?', a: 'You may experience mild temperature sensitivity for a few days after the procedure, which is normal and resolves quickly.' }
    ],
    relatedTreatments: ['checkup-clean', 'root-canal', 'composite-bonding'],
    featured: false,
    isNew: false,
    icon: 'Shield'
  },
  {
    id: 'root-canal',
    slug: 'root-canal',
    title: 'Root Canal Treatment',
    category: 'General Dentistry',
    shortDescription: 'Save an infected or severely decayed tooth with pain-free, modern root canal therapy. Using high-precision surgical microscopes, we clear bacterial infections and seal your tooth for long-term comfort.',
    fullDescription: 'Root canal treatment, or endodontic therapy, is a highly successful restorative procedure designed to save a tooth that has become severely decayed, infected, or damaged. Many patients fear root canals due to outdated misconceptions, but modern techniques, effective anesthetics, and clinical microscopes make the procedure as comfortable as getting a standard filling.\n\nWhen a tooth\'s internal pulp—which contains nerves and blood vessels—becomes infected due to deep decay or trauma, it can cause severe toothaches and abscesses. If left untreated, the tooth will eventually die and require extraction. A root canal saves the tooth and stops the pain.\n\nDr. Ethan Park performs our endodontic treatments using a high-definition surgical microscope. The magnification and direct lighting allow Ethan to locate and clear all tiny nerve canals, ensuring the infection is completely removed.\n\nFirst, we anesthetize the tooth to ensure complete comfort. Ethan creates a small opening in the crown to access the infected pulp, clearing the bacteria and sterilizing the canals using special sanitizing agents. The empty canals are then reshaped and filled with a biocompatible material called gutta-percha.\n\nWe seal the access opening with a temporary filling. Because a root-canal-treated tooth becomes more brittle over time, we highly recommend protecting it with a custom porcelain crown. This restores full chewing strength and protects the tooth from future decay, preserving your smile.',
    image: '/images/site/dental_implant.png',
    duration: '60-90 minutes',
    recovery: '1-2 days (minor soreness)',
    price: 'From $890',
    priceNote: 'Depending on number of canals',
    painLevel: 'None',
    sessions: '1-2 sessions',
    benefits: [
      'Relieves severe toothaches caused by nerve infection',
      'Saves your natural tooth, avoiding extraction',
      'Pain-free modern endodontics under local anesthetic',
      'Microscopic magnification ensures complete infection clearing',
      'Restores full chewing capability and biting force',
      'Prevents the spread of bacterial infection to jawbone'
    ],
    process: [
      { step: '1', title: 'Diagnosis & Anesthesia', description: 'We take X-rays to map the root structure, and anesthetize the tooth to ensure complete comfort.' },
      { step: '2', title: 'Pulpectomy', description: 'A small opening is created in the crown, and the infected pulp is removed under a microscope.' },
      { step: '3', title: 'Canal Cleaning', description: 'The root canals are cleaned, sterilized, and shaped using modern rotary files.' },
      { step: '4', title: 'Canal Sealing', description: 'We fill the clean canals with a bio-compatible material and place a temporary filling to seal the tooth.' },
      { step: '5', title: 'Restoration Prep', description: 'At a later visit, we place a permanent filling or prepare the tooth for a custom porcelain crown.' }
    ],
    faqs: [
      { q: 'Is root canal treatment painful?', a: 'No, root canal treatment does not cause pain; it relieves it. The procedure feels similar to receiving a standard filling.' },
      { q: 'How many visits are required for a root canal?', a: 'Typically completed in 1 to 2 appointments, depending on the complexity of the root canals and the infection level.' },
      { q: 'What happens if I don\'t get a root canal?', a: 'The infection will spread, causing severe pain and bone loss, eventually requiring the tooth to be extracted.' },
      { q: 'Do I need a crown after a root canal?', a: 'Yes, because the tooth loses its blood supply, it becomes brittle. A porcelain crown protects it from cracking.' }
    ],
    relatedTreatments: ['white-fillings', 'extractions', 'single-implant', 'crowns-bridges'],
    featured: false,
    isNew: false,
    icon: 'Activity'
  },
  {
    id: 'extractions',
    slug: 'extractions',
    title: 'Tooth Extractions',
    category: 'General Dentistry',
    shortDescription: 'Remove damaged, infected, or crowded teeth safely and comfortably. We offer both simple and surgical extractions, including wisdom teeth removal, with comprehensive post-care support.',
    fullDescription: 'At Pearlhaus, we exhaust every possible clinical option to save your natural teeth. However, there are circumstances where extracting a tooth is the best option to protect your overall oral health. This can occur due to severe decay, advanced gum disease, dental trauma, orthodontic crowding, or impacted wisdom teeth.\n\nDr. James Okafor performs our extractions with precision, comfort, and gentle care. Simple extractions are performed on teeth visible in the mouth, while surgical extractions are used for teeth that are broken at the gum line or remain impacted beneath the bone.\n\nBefore the extraction, we apply a local anesthetic to ensure you feel nothing. James then uses specialized, gentle dental instruments to carefully loosen the tooth from its socket and remove it, taking care to preserve the surrounding bone.\n\nFor wisdom teeth extractions, we utilize 3D CT scans to map the tooth roots and nerve pathways, planning a safe, minimally invasive procedure. We also offer sedation options for anxious patients to ensure a stress-free experience.\n\nFollowing the extraction, we guide you through post-care, providing advice on diet and cleaning to promote quick healing. We also discuss tooth replacement options—such as dental implants or bridges—to restore your bite and prevent neighboring teeth from shifting.',
    image: '/images/site/patient_consultation.png',
    duration: '30-45 minutes',
    recovery: '3-5 days (healing)',
    price: 'From $250',
    priceNote: 'Depending on complexity',
    painLevel: 'Minimal',
    sessions: '1 session',
    benefits: [
      'Prevents the spread of severe decay and bacterial infection',
      'Relieves chronic pain caused by damaged or crowded teeth',
      'Resolves pain and crowding from impacted wisdom teeth',
      'Gentle techniques preserve surrounding jawbone structure',
      'Sedation options available for anxious patients',
      'Clear path to tooth replacement using dental implants'
    ],
    process: [
      { step: '1', title: 'X-Ray & Planning', description: 'We take digital X-rays to assess the root structure and plan a safe extraction path.' },
      { step: '2', title: 'Anesthesia Induction', description: 'We apply local anesthetic to fully numb the tooth, gums, and surrounding bone tissues.' },
      { step: '3', title: 'Tooth Loosening', description: 'Dr. James Okafor uses gentle instruments to carefully widen the socket and loosen the tooth.' },
      { step: '4', title: 'Tooth Extraction', description: 'The tooth is removed, and we place a sterile gauze pad over the socket to encourage clotting.' },
      { step: '5', title: 'Post-Care Instructions', description: 'We explain post-op care, providing spare gauze and advising soft foods and rest for 24 hours.' }
    ],
    faqs: [
      { q: 'Will I feel pain during the tooth extraction?', a: 'No, the area is completely numbed with local anesthetic. You will feel some pressure, but no pain.' },
      { q: 'How long does the extraction recovery take?', a: 'Initial healing takes 3-5 days. Discomfort is mild and easily managed with standard pain relief.' },
      { q: 'What is a dry socket and how can I prevent it?', a: 'A dry socket occurs if the blood clot dislodges from the socket. Prevent it by avoiding smoking, straws, and vigorous rinsing for 48 hours.' },
      { q: 'Should I replace the extracted tooth?', a: 'Unless it is a wisdom tooth, replacing missing teeth with an implant or bridge is important to keep other teeth from shifting.' }
    ],
    relatedTreatments: ['single-implant', 'root-canal', 'all-on-4'],
    featured: false,
    isNew: false,
    icon: 'Trash'
  },
  {
    id: 'mouthguards',
    slug: 'mouthguards',
    title: 'Mouthguards & Splints',
    category: 'General Dentistry',
    shortDescription: 'Protect your smile from sports impact and nightly grinding. Our custom-fitted mouthguards and dental night splints provide optimal comfort and protection, helping resolve TMJ jaw pain.',
    fullDescription: 'Custom-fitted mouthguards and splints are essential protective dental appliances designed to shield your teeth, gums, and jaw from physical trauma and nightly grinding. Off-the-shelf guards offer poor protection and can alter your bite. At Pearlhaus, we craft custom-fitted devices to match your mouth, ensuring comfortable, high-level protection.\n\nFor sports protection, we construct custom sports mouthguards. These multi-layered guards absorb and distribute impact forces, protecting your teeth from fractures, avulsion, and soft tissue lacerations during contact sports.\n\nFor patients who grind or clench their teeth at night—a condition known as bruxism—we fabricate night splints (occlusal splints). Bruxism can cause worn enamel, chipped teeth, morning headaches, and chronic pain in the temporomandibular joint (TMJ).\n\nOur night splints are made of a comfortable, durable acrylic. They fit over your upper or lower teeth, preventing contact and absorbing clenching forces. This relaxes your jaw muscles and protects your teeth from wear.\n\nTo make a guard, Dr. Ethan Park takes a quick digital impression of your teeth. Our laboratory then constructs the guard to your exact specifications. This ensures a comfortable, secure fit that doesn’t interfere with breathing or speech, providing peace of mind and protection.',
    image: '/images/site/clinical_checkup.png',
    duration: '2 visits (15 mins each)',
    recovery: 'No downtime',
    price: 'From $450',
    priceNote: 'Custom-fitted, health fund rebates apply',
    painLevel: 'None',
    sessions: '2 sessions',
    benefits: [
      'Custom-fitted design ensures optimal protection and comfort',
      'Protects teeth from fractures and trauma during contact sports',
      'Prevents tooth wear and fractures caused by nightly grinding',
      'Relieves morning headaches and TMJ jaw joint pain',
      'Secure fit does not interfere with breathing or speech',
      'Durable, high-quality materials last for years'
    ],
    process: [
      { step: '1', title: 'Digital Impressions', description: 'We take a quick 3D digital scan of your teeth, eliminating messy impression putty.' },
      { step: '2', title: 'Laboratory Fabrication', description: 'Our dental lab fabricates the custom guard or splint using high-durability acrylic.' },
      { step: '3', title: 'Fitting & Evaluation', description: 'We check the fit of the guard in your mouth, adjusting it to ensure a comfortable bite.' },
      { step: '4', title: 'Care Advice', description: 'We explain how to clean and store your guard to keep it fresh and extend its lifespan.' }
    ],
    faqs: [
      { q: 'Why is a custom mouthguard better than a store-bought one?', a: 'Custom mouthguards are designed to match your bite, providing superior impact absorption, comfort, and breathing ease.' },
      { q: 'How do I know if I need a night splint?', a: 'If you wake up with jaw soreness, morning headaches, or notice your teeth look worn or chipped, you may be grinding at night.' },
      { q: 'How long does it take to make a custom guard?', a: 'Typically takes 1 to 2 weeks from your scan date. We fit it at a brief follow-up visit.' },
      { q: 'How should I clean my mouthguard or splint?', a: 'Rinse with cold water after use, clean gently with a soft toothbrush and mild soap, and store it in its ventilated case.' }
    ],
    relatedTreatments: ['checkup-clean', 'white-fillings'],
    featured: false,
    isNew: false,
    icon: 'Smile'
  },

  // ORTHODONTICS (4)
  {
    id: 'invisalign',
    slug: 'invisalign',
    title: 'Invisalign',
    category: 'Orthodontics',
    shortDescription: 'Straighten your teeth discreetly with Invisalign, the world’s leading clear aligner system. Enjoy virtually invisible, removable aligners custom-made to shift your teeth comfortably without metal brackets.',
    fullDescription: 'Invisalign has revolutionized orthodontic care, offering a discreet, comfortable, and highly predictable way to straighten your teeth. Unlike traditional braces that utilize metal brackets and wires, Invisalign uses a series of custom-made, clear plastic aligners that are virtually invisible, allowing you to undergo treatment with complete confidence.\n\nAt Pearlhaus, Dr. Alexander Reid is our specialist orthodontic provider. We use the advanced iTero Intraoral Scanner to capture a 3D digital impression of your teeth. Alex then uses Invisalign ClinCheck software to map the precise, micro-movements of your teeth, showing you a digital simulation of your completed smile before you even begin treatment.\n\nYou will receive a sequence of custom-fit aligners, changing to a new set every 1-2 weeks. The aligners apply gentle, continuous forces to shift your teeth into position. You will need to wear them for 20-22 hours a day, removing them only to eat, drink, brush, and floss.\n\nInvisalign aligners are made from smooth SmartTrack material, which prevents irritation to your cheeks and gums. Because they are removable, there are no dietary restrictions, and maintaining excellent oral hygiene is simple.\n\nInvisalign is suitable for adults and teenagers, treating crowding, spacing, overbites, underbites, and crossbites. As a Diamond Provider, we offer unmatched expertise and flexible payment plans to fit your budget.',
    image: '/images/site/clinical_checkup.png',
    duration: '6-18 months',
    recovery: 'No downtime',
    price: 'From $5,500',
    priceNote: 'Flexible payment plans available',
    painLevel: 'Minimal',
    sessions: 'Check-ups every 6-8 weeks',
    benefits: [
      'Virtually invisible clear aligners are highly discreet',
      'Removable design allows you to eat your favorite foods',
      'No metal brackets or wires to cause gum irritation',
      'Preview your completed smile before beginning treatment',
      'Easy to maintain brushing and flossing routines',
      'Treats crowding, spacing, overbites, and alignment'
    ],
    process: [
      { step: '1', title: 'Consultation & 3D Scanning', description: 'We take a 3D digital scan of your teeth and discuss your alignment goals.' },
      { step: '2', title: 'ClinCheck Smile Design', description: 'Dr. Alexander Reid plans the exact tooth movements and previews the results using 3D software.' },
      { step: '3', title: 'Aligner Delivery', description: 'You receive your first sets of custom clear aligners, and we check their fit in your mouth.' },
      { step: '4', title: 'Progress Check-ups', description: 'You visit us every 6 to 8 weeks to monitor progress and receive your next sets of aligners.' },
      { step: '5', title: 'Smile Retention', description: 'Once straight, we provide custom clear retainers to keep your new smile in place.' }
    ],
    faqs: [
      { q: 'How many hours a day must I wear my aligners?', a: 'You must wear your aligners for 20 to 22 hours a day, removing them only to eat, drink, brush, and floss.' },
      { q: 'Does Invisalign affect my speech?', a: 'You may have a very minor lisp for the first 2-3 days as your tongue adjusts. This is temporary and resolves quickly.' },
      { q: 'Are there any food restrictions with Invisalign?', a: 'No, because the aligners are removable, you can eat and drink whatever you like during treatment.' },
      { q: 'How do I clean my Invisalign aligners?', a: 'Rinse them in lukewarm water and clean gently with a soft toothbrush and mild soap. Avoid hot water, which can warp the plastic.' }
    ],
    relatedTreatments: ['braces', 'retainers', 'teen-orthodontics', 'smile-makeover'],
    featured: true,
    isNew: true,
    icon: 'AlignJustify'
  },
  {
    id: 'braces',
    slug: 'braces',
    title: 'Traditional Braces',
    category: 'Orthodontics',
    shortDescription: 'Correct complex bite issues and severe misalignment with traditional braces. We offer modern, low-profile metal brackets as well as clear ceramic options for a more discreet appearance.',
    fullDescription: 'Traditional orthodontic braces remain one of the most reliable and effective methods for correcting complex bite discrepancies, severe crowding, and misaligned teeth. While clear aligners are popular, braces offer unparalleled control for complex tooth movements, achieving beautiful, stable results.\n\nDr. Alexander Reid offers modern orthodontic braces designed with your comfort and appearance in mind. Traditional braces utilize small brackets bonded to the front of your teeth, connected by archwires. We offer low-profile metal brackets as well as clear ceramic brackets, which blend in with your natural tooth color for a more discreet look.\n\nBraces work by applying continuous, controlled forces to guide your teeth into alignment. Alex conducts adjustments every 4-6 weeks to replace archwires and update elastic ties, ensuring tooth movement remains safe and efficient.\n\nTraditional braces are suitable for patients of all ages, resolving complex bite issues like severe overbites, underbites, crossbites, and impacted teeth that clear aligners cannot treat.\n\nWe design your treatment using digital imaging to ensure your final smile is straight and supports healthy jaw joints. We offer flexible, interest-free payment options to make orthodontic care accessible for families and adults.',
    image: '/images/site/aligners_invisalign.png',
    duration: '12-24 months',
    recovery: 'No downtime',
    price: 'From $4,200',
    priceNote: 'Metal and ceramic options, finance available',
    painLevel: 'Moderate',
    sessions: 'Adjustments every 4-6 weeks',
    benefits: [
      'Highly effective for complex bite issues and severe misalignment',
      'Ceramic bracket options offer a more discreet appearance',
      'Constant, predictable treatment forces work 24/7',
      'Exceptional structural control for precise results',
      'Suitable for adults, teenagers, and growing children',
      'Achieves a straight, healthy bite and stable jaw alignment'
    ],
    process: [
      { step: '1', title: 'Orthodontic Assessment', description: 'We capture digital X-rays, photos, and scans to plan your alignment path.' },
      { step: '2', title: 'Brackets Bonding', description: 'Dr. Alexander Reid carefully bonds the metal or ceramic brackets to the front of your teeth.' },
      { step: '3', title: 'Archwire Placement', description: 'We insert the initial flexible archwire and secure it to the brackets using elastic ties.' },
      { step: '4', title: 'Adjustments', description: 'You visit us every 4 to 6 weeks to adjust and tighten wires, monitoring progress.' },
      { step: '5', title: 'Debonding & Retainers', description: 'We remove the brackets, clean the enamel, and provide custom retainers to secure your smile.' }
    ],
    faqs: [
      { q: 'How long do I need to wear braces?', a: 'Typically between 12 to 24 months, depending on the complexity of your alignment and bite correction.' },
      { q: 'Do orthodontic adjustments hurt?', a: 'You will feel some tightness and soreness for 2-3 days after an adjustment, which is easily managed with standard pain relief.' },
      { q: 'Are there foods I should avoid with braces?', a: 'Yes, avoid sticky, hard, or crunchy foods like gum, caramel, hard candies, and popcorn, which can break brackets.' },
      { q: 'What is the difference between metal and ceramic brackets?', a: 'Metal brackets are silver and highly durable. Ceramic brackets are clear, blending with your teeth for a more discreet look.' }
    ],
    relatedTreatments: ['invisalign', 'retainers', 'teen-orthodontics'],
    featured: false,
    isNew: false,
    icon: 'Grid'
  },
  {
    id: 'retainers',
    slug: 'retainers',
    title: 'Retainers',
    category: 'Orthodontics',
    shortDescription: 'Secure your straight, beautiful smile post-treatment. We offer custom-designed removable clear retainers and bonded wire retainers to prevent teeth from drifting back toward their original positions.',
    fullDescription: 'Completing your orthodontic treatment is an exciting milestone, but the journey to keep your smile straight continues. Teeth have a natural tendency to drift back toward their original positions—a process known as orthodontic relapse. Wearing a custom retainer is essential to protect your alignment and secure your smile.\n\nDr. Alexander Reid provides custom retainers designed to hold your teeth in position while the surrounding bone and gum tissues settle. We offer both removable clear retainers (Essix retainers) and fixed, bonded wire retainers, depending on your needs.\n\nRemovable clear retainers are made of thin, medical-grade plastic that fits over your teeth, similar to an Invisalign aligner. They are virtually invisible and typically worn overnight. Fixed retainers consist of a small wire bonded to the back of your front teeth, providing continuous, invisible retention.\n\nTo create your retainers, we capture a digital scan of your teeth, eliminating messy impression putty. The laboratory then fabricates your retainers to ensure a comfortable fit.\n\nWe recommend wearing retainers long-term to protect your investment. We offer replacement services if your retainers are lost or damaged, ensuring your smile remains straight and beautiful.',
    image: '/images/site/clinical_checkup.png',
    duration: '2 visits (15 mins each)',
    recovery: 'No downtime',
    price: 'From $350',
    priceNote: 'Custom-fitted, replacement sets available',
    painLevel: 'None',
    sessions: '2 sessions',
    benefits: [
      'Prevents orthodontic relapse and keeps teeth straight',
      'Removable clear retainers are virtually invisible and comfortable',
      'Fixed bonded wire retainers provide continuous, worry-free support',
      'Custom-fabricated using digital scans for a perfect fit',
      'Protects your financial investment in braces or Invisalign',
      'Simple to maintain and clean'
    ],
    process: [
      { step: '1', title: 'Digital Scanning', description: 'We take a quick 3D digital scan of your teeth to ensure a perfect fit.' },
      { step: '2', title: 'Fabrication', description: 'Our dental lab fabricates your custom clear or bonded wire retainers.' },
      { step: '3', title: 'Fitting', description: 'We check the fit of the retainer in your mouth, adjusting it to ensure comfort.' },
      { step: '4', title: 'Care Advice', description: 'We explain how to clean, store, and wear your retainers to keep them fresh.' }
    ],
    faqs: [
      { q: 'How long do I need to wear a retainer?', a: 'To prevent teeth from shifting, we recommend wearing your retainer long-term, typically transitioning to night-only wear.' },
      { q: 'What is the difference between clear and bonded retainers?', a: 'Clear retainers are removable plastic shells worn at night. Bonded retainers are wires glued to the back of your teeth for 24/7 support.' },
      { q: 'What should I do if my retainer is lost or broken?', a: 'Contact us immediately for a replacement scan to prevent your teeth from shifting.' },
      { q: 'How do I clean my clear retainer?', a: 'Rinse with cold water and brush gently with a soft toothbrush and mild soap. Avoid hot water, which can warp the plastic.' }
    ],
    relatedTreatments: ['invisalign', 'braces', 'teen-orthodontics'],
    featured: false,
    isNew: false,
    icon: 'Award'
  },
  {
    id: 'teen-orthodontics',
    slug: 'teen-orthodontics',
    title: 'Teen Orthodontics',
    category: 'Orthodontics',
    shortDescription: 'Straighten your teenager’s smile comfortably and confidently. We offer specialized teen treatment plans, including Invisalign Teen with compliance indicators, and ceramic braces.',
    fullDescription: 'The teenage years are the ideal time for orthodontic treatment. Because the jaw is still growing, teeth can be shifted into alignment more quickly and efficiently. At Pearlhaus, we design teen orthodontic treatments to align teeth and build confidence, offering discreet, comfortable options.\n\nDr. Alexander Reid specializes in teen orthodontics, offering both traditional braces and Invisalign Teen clear aligners. We understand that teenagers want options that blend in with their lifestyle, which is why ceramic braces and Invisalign Teen are popular.\n\nInvisalign Teen aligners are virtually invisible, removable, and made from smooth plastic. They include blue compliance indicators on the aligners to help parents and dentists monitor usage, ensuring they are worn for the required 20-22 hours a day.\n\nIf traditional braces are preferred, we offer clear ceramic brackets that blend with the teeth, as well as customizable colored elastics, allowing teens to express their style.\n\nWe utilize digital imaging and 3D scans to design a straight smile that supports healthy jaw joints. We offer flexible, interest-free payment plans to make treatment manageable for families.',
    image: '/images/site/aligners_invisalign.png',
    duration: '12-24 months',
    recovery: 'No downtime',
    price: 'From $4,500',
    priceNote: 'Flexible payment plans, family discount',
    painLevel: 'Moderate',
    sessions: 'Adjustments every 4-8 weeks',
    benefits: [
      'Specialized orthodontic plans designed for growing teenager jaws',
      'Invisalign Teen aligners are virtually invisible and removable',
      'Blue compliance indicators help monitor aligner usage',
      'Ceramic braces offer a low-profile, aesthetic bracket option',
      'Corrects crowding, spacing, and bite alignment issues',
      'Boosts self-esteem and social confidence during developmental years'
    ],
    process: [
      { step: '1', title: 'Consultation & Diagnostics', description: 'We capture digital scans, X-rays, and photos to analyze jaw growth and alignment.' },
      { step: '2', title: 'Treatment Design', description: 'Dr. Alexander Reid plans the alignment path, choosing Invisalign or braces.' },
      { step: '3', title: 'Bonding / Aligner Delivery', description: 'We bond the brackets or deliver your custom clear aligners, checking their fit.' },
      { step: '4', title: 'Progress Check-ups', description: 'We monitor alignment and adjust wires or check aligner usage every 4 to 8 weeks.' },
      { step: '5', title: 'Retention Phase', description: 'Once straight, we provide custom retainers to secure the new smile.' }
    ],
    faqs: [
      { q: 'Is Invisalign Teen as effective as traditional braces?', a: 'Yes! Invisalign Teen is highly effective for most alignment issues when worn for the required 20-22 hours a day.' },
      { q: 'How do the blue compliance indicators work?', a: 'A small blue dot on the aligner fades to clear as it is worn, helping monitor usage.' },
      { q: 'Can my teen play sports and instruments during treatment?', a: 'Yes! Removable aligners make playing sports and instruments simple. Braces require a custom sports mouthguard for protection.' },
      { q: 'What is the cost of teen orthodontic treatment?', a: 'Costs depend on the option selected. We provide a full breakdown and payment plan options before starting.' }
    ],
    relatedTreatments: ['invisalign', 'braces', 'retainers', 'early-ortho'],
    featured: false,
    isNew: false,
    icon: 'Smile'
  },

  // IMPLANTS (4, adding crowns-bridges here to complete the mega menu list)
  {
    id: 'single-implant',
    slug: 'single-implant',
    title: 'Single Dental Implant',
    category: 'Dental Implants',
    shortDescription: 'Restore your smile permanently with a single dental implant. Acting as a replacement tooth root, this titanium implant supports a custom porcelain crown, providing a lifetime solution that looks and feels natural.',
    fullDescription: 'A single dental implant represents the absolute gold standard for replacing a single missing tooth. Unlike traditional bridges that require reducing adjacent healthy teeth, or removable dentures that can feel loose, a dental implant replaces the entire tooth structure from root to crown, providing a permanent, secure, and natural-looking solution.\n\nThe procedure is performed by Dr. James Okafor, utilizing advanced digital guided surgery. We begin with a 3D Cone Beam CT scan to evaluate your jawbone structure and plan the implant placement. The titanium implant post is placed into the bone, where it integrates over 3 to 6 months through a biological process called osseointegration.\n\nDuring this healing period, the titanium post acts as a replacement tooth root, stimulating bone density and preventing facial structure recession. We can place a temporary crown to maintain your appearance.\n\nOnce integrated, a custom abutment is attached to the implant, supporting a custom porcelain crown crafted to match your surrounding teeth. This restores full biting force, prevents adjacent teeth from shifting, and looks completely natural.\n\nDental implants are highly durable, with the titanium post designed to last a lifetime. With good oral hygiene and regular dental check-ups, dental implants are the closest replacement to your natural teeth, restoring your confidence and function.',
    image: '/images/site/dental_implant.png',
    duration: '3-6 months (healing period)',
    recovery: '3-5 days (mild swelling)',
    price: 'From $4,500',
    priceNote: 'Titanium implant + crown, finance options',
    painLevel: 'Minimal',
    sessions: '3-4 sessions',
    benefits: [
      'Permanent replacement looks and functions like a natural tooth',
      'Titanium implant integrates with bone, lasting a lifetime',
      'Preserves adjacent healthy teeth without dental reduction',
      'Stimulates bone growth, preventing facial structure recession',
      'Restores 100% chewing capability and biting force',
      'Custom porcelain crown matches natural enamel color'
    ],
    process: [
      { step: '1', title: 'Diagnostic 3D Scan', description: 'We capture a 3D Cone Beam CT scan to evaluate jawbone density and plan placement.' },
      { step: '2', title: 'Implant Placement', description: 'Dr. James Okafor places the titanium implant post under local anesthetic.' },
      { step: '3', title: 'Osseointegration', description: 'The implant is left to heal and integrate with the jawbone for 3 to 6 months.' },
      { step: '4', title: 'Abutment & Impression', description: 'An abutment is attached, and we take a digital impression for your custom crown.' },
      { step: '5', title: 'Crown Fitting', description: 'We fit and secure the custom porcelain crown, completing your permanent restoration.' }
    ],
    faqs: [
      { q: 'Is dental implant surgery painful?', a: 'No, the procedure is performed under local anesthetic, so you feel no pain. Some mild swelling can be managed with standard pain relief.' },
      { q: 'Am I a candidate for a dental implant?', a: 'Most adults with good oral and general health are candidates. We assess jawbone density using 3D scans.' },
      { q: 'How long does a dental implant last?', a: 'The titanium implant post is designed to last a lifetime. The porcelain crown may need replacement after 10-15 years.' },
      { q: 'What is the cost of a dental implant?', a: 'Costs depend on complexity and bone health. We provide a full breakdown and payment plan options before starting.' }
    ],
    relatedTreatments: ['all-on-4', 'implant-dentures', 'crowns-bridges', 'extractions'],
    featured: true,
    isNew: false,
    icon: 'Hammer'
  },
  {
    id: 'all-on-4',
    slug: 'all-on-4',
    title: 'All-on-4 Implants',
    category: 'Dental Implants',
    shortDescription: 'Restore a full arch of teeth in a single day with All-on-4 implants. Using four strategically placed titanium implants, we support a secure, permanent bridge, providing a lifelike restoration.',
    fullDescription: 'All-on-4 dental implants represent a revolutionary restorative technique designed for patients with missing teeth, severe decay, or failing dentition. By placing just four titanium implants in the jawbone, we can support a permanent bridge of replacement teeth. This full mouth restoration can be completed in a single day.\n\nThe All-on-4 protocol is performed by Dr. James Okafor. By tilting the posterior implants at a 45-degree angle, we maximize contact with the bone, eliminating the need for bone grafting in most cases. This reduces treatment time, cost, and complexity.\n\nThe process begins with 3D digital planning. On the day of surgery, any failing teeth are removed, and the four implants are placed. A temporary bridge is attached immediately, allowing you to walk out with a secure, functional smile.\n\nOnce healed, we replace the temporary bridge with a permanent, custom-designed restoration. The bridge is securely screwed onto the implants, providing a stable solution that won’t slip or slide like traditional dentures.\n\nAll-on-4 restores your chewing function and speech. It preserves bone density, supports facial structures, and looks natural, allowing you to eat, speak, and smile with confidence.',
    image: '/images/site/aligners_invisalign.png',
    duration: '1 day (temporary bridge)',
    recovery: '7-10 days (healing)',
    price: 'From $22,000',
    priceNote: 'Per arch, interest-free finance available',
    painLevel: 'Moderate',
    sessions: '3-4 sessions',
    benefits: [
      'Full arch restoration completed in a single day',
      'Four implants support a permanent, secure bridge',
      'Eliminates the need for bone grafting in most cases',
      'Stable restoration won\'t slip or slide like dentures',
      'Restores natural chewing capability and speech',
      'Preserves jawbone density and supports facial structures'
    ],
    process: [
      { step: '1', title: 'Consultation & 3D Imaging', description: 'We perform a detailed exam, take 3D CT scans, and plan your guided surgery.' },
      { step: '2', title: 'Guided Implant Surgery', description: 'Dr. James Okafor places the four titanium implants and attaches the temporary bridge.' },
      { step: '3', title: 'Healing & Integration', description: 'The implants heal and integrate with the bone for 3 to 6 months while you wear the temporary bridge.' },
      { step: '4', title: 'Permanent Bridge Fitting', description: 'We take digital impressions and fit your custom permanent bridge, securing it to the implants.' }
    ],
    faqs: [
      { q: 'What is the difference between All-on-4 and dentures?', a: 'All-on-4 bridges are permanently fixed in the mouth, restoring chewing function and speech without slipping or adhesives.' },
      { q: 'Can I eat normally after All-on-4 surgery?', a: 'You must eat a soft diet during the initial healing period. Once the implants are integrated, you can eat all foods comfortably.' },
      { q: 'How long does the All-on-4 procedure take?', a: 'The surgical placement and bridge attachment are completed in a single day, taking 3-4 hours per arch.' },
      { q: 'How do I clean my All-on-4 teeth?', a: 'Brush twice a day, use a water flosser or specialized floss under the bridge, and visit us for regular professional cleanings.' }
    ],
    relatedTreatments: ['single-implant', 'implant-dentures', 'extractions'],
    featured: false,
    isNew: false,
    icon: 'Boxes'
  },
  {
    id: 'implant-dentures',
    slug: 'implant-dentures',
    title: 'Implant-Supported Dentures',
    category: 'Dental Implants',
    shortDescription: 'Secure your removable dentures with dental implants. Our implant-supported dentures click firmly into place, eliminating slipping and the need for messy adhesives, improving your speech and chewing comfort.',
    fullDescription: 'Implant-supported dentures, also known as snap-on dentures or overdentures, offer a stable, comfortable, and affordable solution for patients who wear dentures. Traditional dentures can slip, cause sore spots, and make speaking or chewing difficult. By anchoring your dentures to dental implants, we eliminate these issues and restore confidence.\n\nThe procedure is performed by Dr. James Okafor, utilizing two to four implants in the jawbone. These implants feature snap-on attachments that correspond to sockets in your denture. This allows the denture to click firmly into place, providing stability.\n\nWhile the denture remains removable for cleaning, it is secured by the implants when in place, eliminating slipping and the need for adhesives. This stability improves your chewing capability, allowing you to enjoy a variety of foods, and ensures clear speech.\n\nTo make your dentures, James takes a digital impression of your jawbone and implants. Our laboratory then constructs the dentures to ensure a comfortable fit and natural appearance.\n\nImplant-supported dentures help preserve bone density and support facial structures. We offer conversion options to secure your existing dentures, providing a stable, life-changing solution.',
    image: '/images/site/dental_implant.png',
    duration: '3-6 months (healing period)',
    recovery: '3-5 days (mild swelling)',
    price: 'From $12,000',
    priceNote: 'Secure removable solution, finance available',
    painLevel: 'Minimal',
    sessions: '3-4 sessions',
    benefits: [
      'Secure snap-on design eliminates denture slipping',
      'No need for messy denture adhesives or creams',
      'Improves chewing capability and speaking confidence',
      'Removable for easy cleaning and maintenance',
      'Implant anchors help preserve jawbone density',
      'Affordable alternative to full-mouth permanent bridges'
    ],
    process: [
      { step: '1', title: 'Consultation & CT Scan', description: 'We assess bone health and plan the implant placement using 3D imaging.' },
      { step: '2', title: 'Implant Placement', description: 'Dr. James Okafor places two to four titanium implants under local anesthetic.' },
      { step: '3', title: 'Osseointegration', description: 'The implants heal and integrate with the bone for 3 to 6 months.' },
      { step: '4', title: 'Denture Fabrication', description: 'We attach snap connectors and take digital impressions to construct the custom denture.' },
      { step: '5', title: 'Fitting & Delivery', description: 'We fit the new denture, clicking it into place and adjusting it to ensure comfort.' }
    ],
    faqs: [
      { q: 'Can I use my existing dentures with implants?', a: 'In some cases, we can retro-fit your existing dentures with attachments to connect to the implants.' },
      { q: 'Are implant-supported dentures removable?', a: 'Yes, they snap firmly onto the implants for stability, but are easily removed at night for cleaning.' },
      { q: 'How many implants are required to secure a denture?', a: 'Typically two to four implants per arch, depending on your bone density and stability needs.' },
      { q: 'How do I care for my snap-on dentures?', a: 'Remove them daily to clean with a denture brush, clean around the implant attachments in your mouth, and visit us regularly.' }
    ],
    relatedTreatments: ['single-implant', 'all-on-4', 'extractions'],
    featured: false,
    isNew: false,
    icon: 'Columns'
  },
  {
    id: 'crowns-bridges',
    slug: 'crowns-bridges',
    title: 'Crowns & Bridges',
    category: 'Dental Implants',
    shortDescription: 'Restore damaged or missing teeth with custom crowns and bridges. Using advanced CEREC same-day technology, we design, mill, and place beautiful porcelain restorations in a single visit.',
    fullDescription: 'Dental crowns and bridges are essential restorative treatments designed to rebuild damaged, decayed, or missing teeth, restoring full function and a beautiful, natural appearance. At Pearlhaus, we feature advanced CEREC CAD/CAM technology, allowing us to design, mill, and place custom ceramic crowns in a single visit, saving you time and temporary restorations.\n\nA dental crown, or cap, covers the entire visible portion of a damaged tooth, restoring its shape, strength, and appearance. A dental bridge replaces one or more missing teeth, using custom crowns on the adjacent teeth to anchor a replacement tooth in the gap.\n\nThe process begins with a quick intraoral scan. Dr. Priya Nair or Dr. Ethan Park designs your restoration right by your chair. Once designed, the computer sends the details to our in-office milling machine, which sculpts your custom crown from a solid block of ceramic.\n\nOnce milled, the restoration is stained, glazed, fired, and bonded to your tooth. This completely eliminates the need to wear uncomfortable temporary crowns for weeks or return for a second appointment, providing high-strength, beautiful results in about 90 minutes.\n\nOur ceramic restorations match the translucency and color of your natural enamel. They are highly durable, restoring your biting force and protecting your teeth from future decay, preserving your smile.',
    image: '/images/site/clinical_checkup.png',
    duration: '90 minutes (same-day crowns)',
    recovery: 'No downtime',
    price: 'From $1,500',
    priceNote: 'Same-day crowns, finance available',
    painLevel: 'None',
    sessions: '1 session (crowns)',
    benefits: [
      'Get a custom ceramic crown in a single visit (90 mins)',
      'Eliminates the need for uncomfortable temporary restorations',
      'Ceramic blocks match the color and translucency of enamel',
      'Bridges replace missing teeth, restoring biting capability',
      'Protects and reinforces cracked or decayed teeth',
      'Long-lasting durability of 10-15 years'
    ],
    process: [
      { step: '1', title: 'Tooth Preparation', description: 'We prepare the damaged tooth, removing decay and shaping it for the crown.' },
      { step: '2', title: 'Digital Scanning', description: 'We take a quick 3D digital scan of your teeth, eliminating messy impression putty.' },
      { step: '3', title: 'CAD Design', description: 'Our dentists design your custom crown or bridge on-screen, matching your bite.' },
      { step: '4', title: 'CEREC Milling', description: 'Our in-office milling machine sculpts your restoration from a ceramic block.' },
      { step: '5', title: 'Bonding & Polish', description: 'The custom restoration is glazed, fired, and bonded to your tooth, completing your smile.' }
    ],
    faqs: [
      { q: 'What is the difference between a crown and a bridge?', a: 'A crown covers a single damaged tooth. A bridge replaces one or more missing teeth, using adjacent teeth as anchors.' },
      { q: 'How long do CEREC same-day crowns last?', a: 'Typically between 10 to 15 years with proper care, including brushing, flossing, and regular check-ups.' },
      { q: 'Do you offer same-day bridges?', a: 'CEREC crowns are completed in a single visit. Bridges require advanced laboratory fabrication, taking 1-2 weeks.' },
      { q: 'Will my custom crown match my other teeth?', a: 'Yes, we select the perfect ceramic block shade and glaze it to match the color and character of your natural enamel.' }
    ],
    relatedTreatments: ['white-fillings', 'root-canal', 'single-implant'],
    featured: false,
    isNew: false,
    icon: 'Crown'
  },

  // CHILDREN'S DENTISTRY (3)
  {
    id: 'childrens-checkup',
    slug: 'childrens-checkup',
    title: "Children's Check-up",
    category: "Children's Dentistry",
    shortDescription: 'Set your child up for a lifetime of healthy smiles in a child-friendly environment. Our gentle examinations, cleanings, and fluoride treatments make dental visits fun and stress-free.',
    fullDescription: 'Our children’s dentistry services are dedicated to setting kids up for a lifetime of healthy, confident smiles. Early dental visits help children become familiar with the clinic environment, preventing future dental anxiety. We recommend booking your child’s first visit by their first birthday, or within six months of their first tooth erupting.\n\nDr. Sofia Marchetti is our pediatric expert, running a clinic environment designed to make visits fun. Sofia uses sensory distractions, interactive play, and simple language, ensuring that children leave the clinic feeling proud and decay-free.\n\nA routine children\'s check-up includes a gentle examination of emerging teeth, gums, and jaw development, a cleaning to remove soft plaque, a strengthening fluoride treatment, and interactive hygiene demonstrations to build brushing habits.\n\nWe monitor jaw growth and the relationships between emerging teeth, checking for alignment issues early. Early detection allows for interceptive treatments, making future orthodontic work simpler and faster.\n\nWe accept the Child Dental Benefits Schedule (CDBS), providing eligible children with basic dental services bulk-billed with no out-of-pocket costs. We make pediatric care accessible for Sydney families.',
    image: '/images/team/sofia-marchetti.png',
    duration: '45 minutes',
    recovery: 'No downtime',
    price: 'From $149',
    priceNote: 'Bulk-billing available for eligible CDBS patients',
    painLevel: 'None',
    sessions: 'Ongoing (every 6 months)',
    benefits: [
      'Child-focused dental clinic environment makes visits fun',
      'Gentle examinations monitor tooth and jaw development',
      'Clears soft plaque buildup and strengthens enamel',
      'Builds positive associations, preventing future dental anxiety',
      'Interactive brushing and flossing demonstrations',
      'Accepts Child Dental Benefits Schedule (CDBS)'
    ],
    process: [
      { step: '1', title: 'Bubbly Welcome', description: 'We welcome your child, introducing them to our clinic and instruments as friendly characters.' },
      { step: '2', title: 'Gentle Exam', description: 'Dr. Sofia Marchetti checks tooth eruption, gum health, and jaw development.' },
      { step: '3', title: 'Clean & Polish', description: 'We gently clean plaque and polish teeth with a soft, child-friendly brush.' },
      { step: '4', title: 'Fluoride Polish', description: 'A protective fluoride gel is applied to strengthen enamel and prevent cavities.' },
      { step: '5', title: 'Sticker Prize', description: 'We praise your child\'s behavior, providing brushing guides and a sticker prize.' }
    ],
    faqs: [
      { q: 'At what age should my child first visit the dentist?', a: 'By their first birthday, or within 6 months of their first tooth erupting, to monitor development and prevent anxiety.' },
      { q: 'What is the Child Dental Benefits Schedule (CDBS)?', a: 'A government program providing eligible children (ages 2-17) with up to $1,095 in basic dental services over two years.' },
      { q: 'How can I prepare my child for their first visit?', a: 'Talk about the dentist positively, read children\'s books about dental visits, and avoid using dental visits as threats.' },
      { q: 'Does my child need dental X-rays?', a: 'We only take X-rays for children if we suspect decay between teeth or need to evaluate jaw and permanent tooth development.' }
    ],
    relatedTreatments: ['fissure-sealants', 'early-ortho', 'mouthguards'],
    featured: true,
    isNew: false,
    icon: 'Baby'
  },
  {
    id: 'fissure-sealants',
    slug: 'fissure-sealants',
    title: 'Fissure Sealants',
    category: "Children's Dentistry",
    shortDescription: 'Protect your child’s permanent molars from decay. Fissure sealants are thin protective coatings applied to the chewing surfaces, sealing out bacteria and food particles in minutes without drilling.',
    fullDescription: 'Dental fissure sealants are a highly effective, preventive treatment designed to protect children\'s permanent back teeth (molars) from decay. The chewing surfaces of molars feature deep grooves (fissures) that are narrow and difficult for toothbrush bristles to reach, making them susceptible to plaque and bacterial buildup. Fissure sealants form a protective shield to keep teeth clean.\n\nDr. Sofia Marchetti performs our sealant procedures, which are quick, painless, and require no drilling or anesthetic. The process is completed in minutes per tooth, making it a comfortable experience for children.\n\nFirst, Sofia cleans and prepares the chewing surface of the molar. She then paints a thin, liquid plastic coating into the grooves. A specialized blue light is used to harden and bond the sealant in seconds, forming a smooth protective layer over the fissures.\n\nThis smooth surface prevents food particles and bacteria from getting trapped in the grooves, making teeth easy to brush clean. Sealants reduce the risk of decay in children\'s molars by up to 80%.\n\nSealants are applied as permanent molars erupt (around ages 6 and 12). They are checked during routine appointments and can last for several years, providing cost-effective decay prevention.',
    image: '/images/team/sofia-marchetti.png',
    duration: '30 minutes',
    recovery: 'No downtime',
    price: 'From $65',
    priceNote: 'Per tooth, preventive decay shield',
    painLevel: 'None',
    sessions: '1 session',
    benefits: [
      'Forms a protective shield, reducing molar decay by up to 80%',
      'Painless procedure completed in minutes with no drilling',
      'Smooths deep grooves, making teeth easy to brush clean',
      'Applied to permanent molars as they erupt (ages 6 & 12)',
      'Highly cost-effective prevention reduces future filling needs',
      'Durable protection lasts for several years'
    ],
    process: [
      { step: '1', title: 'Tooth Cleaning', description: 'The molar chewing surface is cleaned to remove plaque and food debris.' },
      { step: '2', title: 'Surface Prep', description: 'We apply a conditioning gel to the grooves to prepare the enamel for bonding.' },
      { step: '3', title: 'Sealant Painting', description: 'Dr. Sofia Marchetti paints the thin liquid sealant into the fissures.' },
      { step: '4', title: 'Light Curing', description: 'A blue light is directed onto the tooth to harden the sealant in seconds.' },
      { step: '5', title: 'Bite Check', description: 'We check the sealant height, ensuring it doesn\'t interfere with your child\'s bite.' }
    ],
    faqs: [
      { q: 'Which teeth should be sealed?', a: 'We recommend sealing permanent back molars as they erupt, typically around age 6 (first molars) and age 12 (second molars).' },
      { q: 'Does getting sealants hurt?', a: 'No, getting sealants is completely painless. No drilling or anesthetic is required.' },
      { q: 'How long do fissure sealants last?', a: 'They can last for several years. We check them during routine visits and can touch them up if they wear.' },
      { q: 'Can adults get fissure sealants?', a: 'Yes, adults with deep grooves and no decay in their molans can get sealants for prevention.' }
    ],
    relatedTreatments: ['childrens-checkup', 'early-ortho', 'white-fillings'],
    featured: false,
    isNew: false,
    icon: 'Key'
  },
  {
    id: 'early-ortho',
    slug: 'early-ortho',
    title: 'Early Orthodontic Assessment',
    category: "Children's Dentistry",
    shortDescription: 'Assess your child’s dental and jaw development between ages 7 and 10. Early evaluation helps detect growth discrepancies, allowing for interceptive treatment that simplifies future orthodontics.',
    fullDescription: 'An early orthodontic assessment is a preventive evaluation designed to monitor jaw growth and the relationships between emerging permanent teeth in children. The Australian Society of Orthodontists recommends children have their first orthodontic evaluation between ages 7 and 10, when jaw discrepancies can be detected.\n\nDr. Alexander Reid and Dr. Sofia Marchetti collaborate on our childhood assessments. At this developmental stage, the jawbone is soft and growing, allowing us to guide growth and correct structural issues before they become permanent.\n\nAn early assessment does not mean your child will get braces immediately. Instead, it allows us to monitor development and plan interceptive treatments (Phase 1 orthodontics) if needed. This can include expansion appliances to widen narrow arches, or partial braces to clear space.\n\nInterceptive treatment resolves issues like severe crowding, narrow jaws, crossbites, and protruding teeth. Correcting these early creates space for emerging teeth, reducing the need for extractions and simplifying future treatment.\n\nIf no immediate treatment is required, we monitor growth during check-ups, planning the ideal timing for orthodontics, saving you time and cost.',
    image: '/images/site/aligners_invisalign.png',
    duration: '45 minutes',
    recovery: 'No downtime',
    price: 'From $150',
    priceNote: 'Comprehensive analysis, diagnostic scans',
    painLevel: 'None',
    sessions: '1 session',
    benefits: [
      'Evaluates jaw growth and tooth relationships early',
      'Detects structural issues when jawbone is soft and responsive',
      'Allows interceptive treatment to guide jaw growth',
      'Creates space for permanent teeth, preventing crowding',
      'Reduces the need for permanent tooth extractions later',
      'Simplifies and shortens future orthodontic treatments'
    ],
    process: [
      { step: '1', title: 'Visual Assessment', description: 'We examine your child\'s teeth alignment, bite relationship, and jaw symmetry.' },
      { step: '2', title: 'Digital Scans', description: 'We take 3D scans of the teeth and jaw structure to analyze development.' },
      { step: '3', title: 'Panoramic X-Ray', description: 'A low-radiation panoramic X-ray is taken to view teeth developing beneath the gums.' },
      { step: '4', title: 'Treatment Discussion', description: 'Dr. Alexander Reid explains his findings, discussing interceptive options if needed.' }
    ],
    faqs: [
      { q: 'Why is age 7-10 the best time for an assessment?', a: 'At this age, permanent teeth are emerging and the jaw is growing, making it easy to guide growth and correct bite issues.' },
      { q: 'Does an assessment mean my child gets braces immediately?', a: 'No, most children do not need immediate treatment. We monitor development and plan orthodontics for the ideal age.' },
      { q: 'What is interceptive orthodontic treatment?', a: 'Early treatment (e.g. space maintainers or expanders) used to guide jaw growth, simplify future braces, and avoid extractions.' },
      { q: 'What issues can be corrected with early treatment?', a: 'Narrow jaws, severe crowding, crossbites, protruding front teeth, and bite discrepancies can be corrected early.' }
    ],
    relatedTreatments: ['childrens-checkup', 'teen-orthodontics', 'invisalign'],
    featured: false,
    isNew: false,
    icon: 'Compass'
  }
];
