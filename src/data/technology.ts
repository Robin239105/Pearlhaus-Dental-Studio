import type { Technology } from '../types';

export const technology: Technology[] = [
  {
    id: 'ct-scanner',
    name: '3D Cone Beam CT Scanner',
    category: 'Digital Imaging',
    description: 'Our state-of-the-art 3D Cone Beam CT Scanner provides high-definition, three-dimensional views of your oral cavity, nerve pathways, bone structure, and soft tissues. Unlike traditional flat X-rays, this advanced scanner rotates around your head, collecting multiple angles in seconds to reconstruct a complete 3D digital model.\n\nThis technology is absolutely essential for complex restorative procedures. By understanding the exact depth, width, and density of your jawbone, our clinical team can plan dental implant placements with sub-millimeter precision, avoiding critical structures like sinuses and nerves.\n\nIn addition to dental implants, we utilize this scanner for analyzing orthodontic movements, investigating TMJ jaw disorders, and conducting root canal evaluations. It provides unmatched diagnostic clarity, leading to safer, faster, and more predictable treatment outcomes.',
    benefits: [
      'Ultra-precise 3D visualization of bone structure and nerve pathways',
      'Significantly lower radiation exposure compared to medical CT scanners',
      'Rapid scan time takes less than 20 seconds',
      'Ensures safer, more predictable dental implant surgeries'
    ],
    image: '/images/site/dental_implant.png'
  },
  {
    id: 'intraoral-scanner',
    name: 'Intraoral Scanner (iTero)',
    category: 'Digital Impressions',
    description: 'We have replaced messy, uncomfortable alginate putty impressions with the state-of-the-art iTero Intraoral Scanner. This compact wand scans the inside of your mouth using safe laser and optical technology, capturing tens of thousands of data points per second to generate an accurate 3D model of your teeth.\n\nThe scanning process is completely clean, comfortable, and fast. If you need a break, we can stop the scan at any time and resume without starting over. Patients can watch their teeth render in real-time on a high-definition monitor directly above their chair.\n\nFor Invisalign and cosmetic crown treatments, these digital impressions ensure a perfect, comfortable fit. The software can simulate your post-treatment orthodontic results in minutes, showing you how your teeth will look after alignment before you even begin treatment.',
    benefits: [
      'Eliminates messy, foul-tasting impression putty and gagging',
      'Creates highly accurate 3D model of your teeth in under 5 minutes',
      'Real-time visualization of your simulated post-treatment smile',
      'Seamless digital transmission to laboratories for faster turnaround'
    ],
    image: '/images/site/aligners_invisalign.png'
  },
  {
    id: 'cerec-crowns',
    name: 'CEREC Same-Day Crowns',
    category: 'CAD/CAM Technology',
    description: 'Pearlhaus is proud to feature the CEREC (Chairside Economical Restoration of Esthetic Ceramics) system. This cutting-edge technology allows us to design, mill, and place custom ceramic crowns, veneers, or inlays in a single visit, saving you time and avoiding temporary restorations.\n\nThe process begins with a quick intraoral scan of the prepared tooth. Using advanced CAD/CAM software, Dr. Priya Nair or Dr. Ethan Park designs your restoration right by your chair. Once designed, the computer sends the details to our in-office milling machine, which sculpts your custom crown from a solid block of medical-grade ceramic.\n\nOnce milled, the restoration is stained, glazed, fired in our speed furnace, and bonded to your tooth. This completely eliminates the need to wear uncomfortable temporary crowns for weeks or return for a second appointment, providing high-strength, beautiful results in about 90 minutes.',
    benefits: [
      'Get a permanent, custom porcelain crown in a single visit (90 mins)',
      'Eliminates the need for uncomfortable, fragile temporary crowns',
      'High-strength, bio-compatible ceramic blocks match your natural enamel',
      'Fewer local anesthetic injections required'
    ],
    image: '/images/site/clinical_checkup.png'
  },
  {
    id: 'smile-design',
    name: 'Digital Smile Design Software',
    category: 'Treatment Planning',
    description: 'Digital Smile Design (DSD) is an advanced treatment planning tool that allows us to co-design your dream smile with you before any physical work begins. By combining high-definition facial photography, intraoral scans, and dynamic video, we analyze your teeth in relation to your lips, jaw line, and facial expressions.\n\nThe DSD software calculates the ideal proportions, symmetry, and color shades for your teeth. This ensures your cosmetic treatments look completely natural and complement your unique facial characteristics, avoiding the generic, artificially white look.\n\nPerhaps the greatest benefit is the diagnostic preview. We can create a physical "mock-up" of your proposed smile that you can wear temporarily, allowing you to see and feel the transformation in your mouth, which builds complete confidence in your treatment plan.',
    benefits: [
      'Bespoke smile planning tailored to your unique facial proportions',
      'Allows you to test-drive your proposed smile before starting treatment',
      'Ensures clear, collaborative communication between you and your dentist',
      'Highly predictable cosmetic outcomes with no visual surprises'
    ],
    image: '/images/site/patient_consultation.png'
  },
  {
    id: 'laser-dentistry',
    name: 'Laser Dentistry (Waterlase)',
    category: 'Minimally Invasive',
    description: 'We utilize the Waterlase Er,Cr:YSGG dental laser to perform a wide variety of tooth, gum, and bone procedures. By combining laser energy with a constant spray of water, the Waterlase cuts tissue without the heat, vibration, or pressure associated with traditional dental drills.\n\nThis technology makes treatments extremely comfortable. For many minor cavity preparations, we can skip local anesthetic injections entirely. The laser also sterilizes the area as it cuts and stimulates local cell growth, resulting in minimal bleeding and remarkably fast healing.\n\nIn cosmetic and gum treatments, laser dentistry allows for unparalleled precision. We use it for gum contouring, clearing bacterial pockets in periodontitis, and preparing teeth for veneers with minimal alteration to your natural enamel.',
    benefits: [
      'Often eliminates the need for needles and local anesthetic injections',
      'No loud drill noises, heat, or uncomfortable vibrations',
      'Minimizes bleeding and swelling during and after gum treatments',
      'Faster healing times and lower risk of post-operative infection'
    ],
    image: '/images/site/clinical_checkup.png'
  },
  {
    id: 'zoom-whitening',
    name: 'Teeth Whitening (Philips Zoom)',
    category: 'Whitening System',
    description: 'Philips Zoom WhiteSpeed is the gold standard in professional in-chair teeth whitening. This system uses a light-activated gel containing hydrogen peroxide and amorphous calcium phosphate (ACP) to lift stubborn coffee, tea, wine, and aging stains from your enamel.\n\nThe process is fast, safe, and highly effective. During your 60-minute session, we apply the professional-strength gel and activate it with a blue LED light accelerator. The gel is reapplied in three to four 15-minute cycles to achieve the depth of shade you desire.\n\nThe built-in ACP technology protects your enamel and significantly reduces transient tooth sensitivity. Our clinical team supervises the entire process, checking your gums and lips to ensure they are fully protected from the whitening agents.',
    benefits: [
      'Lifts teeth up to 8 shades whiter in just a single 60-minute session',
      'LED-accelerated technology is clinically proven to be safe for enamel',
      'Built-in desensitizing agents minimize post-treatment sensitivity',
      'Includes custom take-home maintenance trays for long-term results'
    ],
    image: '/images/site/smile_radiant.png'
  },
  {
    id: 'surgical-microscope',
    name: 'Surgical Microscope',
    category: 'Precision Dentistry',
    description: 'At Pearlhaus, we use advanced high-definition surgical microscopes during complex endodontic (root canal) and restorative treatments. These microscopes magnify the surgical field up to 20 times and illuminate it with intense, direct shadowless LED light.\n\nThis magnification is critical for identifying minute structures. It allows our dentists to locate hidden root canals, detect micro-fractures in teeth that are invisible to the naked eye, and inspect the margins of crowns and veneers for a perfect seal.\n\nBy working under microscope magnification, we can preserve more of your natural tooth structure and perform highly conservative treatments. This precision increases the success rates of root canals and restorative work, saving teeth that might otherwise need extraction.',
    benefits: [
      'Up to 20x magnification reveals micro-cracks and hidden canals',
      'Maximizes the success rates of complex root canal therapies',
      'Enables highly conservative, tooth-preserving preparations',
      'Allows microscopic inspection of crown seals to prevent future decay'
    ],
    image: '/images/site/clinical_checkup.png'
  },
  {
    id: 'digital-xray',
    name: 'Digital X-Ray System',
    category: 'Reduced Radiation',
    description: 'We employ high-resolution digital sensors for all diagnostic X-rays. Unlike traditional film X-rays which require chemical processing and take minutes to develop, our digital X-ray system captures images instantly and displays them directly on our chairside monitors.\n\nThis system represents a major safety advancement. It reduces radiation exposure by up to 90% compared to old film technology, making it extremely safe for all patients, including children and pregnant women.\n\nThe digital format allows us to magnify, color-code, and adjust the contrast of images to identify tiny areas of decay between teeth. We can also easily share these high-resolution images with you, explaining our findings and keeping you informed.',
    benefits: [
      'Reduces radiation exposure by up to 90% compared to film X-rays',
      'Instant imaging displayed on chairside monitors in seconds',
      'Digital enhancements allow detection of cavities in their earliest stages',
      'Eco-friendly technology eliminates the use of chemical developers'
    ],
    image: '/images/site/clinical_checkup.png'
  }
];
