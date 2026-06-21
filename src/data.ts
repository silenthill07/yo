import { CaseStudy, Experience, Certification, EducationItem, PublicationItem, DevelopedTool } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Critical Zero-Day Exploitation in Financial Infrastructure',
    targetContext: 'Confidential Global Fintech Platform',
    objective: 'Red Team assessment simulating an APT (Advanced Persistent Threat)',
    attackVectors: [
      'Initial access via highly-targeted spear-phishing',
      'Exploitation of a zero-day deserialization vulnerability in core Java gateway',
      'Lateral movement across isolated subnets using pass-the-hash',
      'Kerberoasting to escalate privileges toward Active Directory Domain Controller'
    ],
    impact: 'Achieved Domain Admin privileges and obtained full compromised read-access to core transaction databases containing encrypted digital ledger schemas.',
    remediationOutcome: 'Collaborated directly with the blue team and platform developers to deploy zero-delay hotfixes, refactor backend API sanitization, and enhance SIEM detection rules for Pass-the-Hash & Kerberoasting anomalies.'
  },
  {
    id: 'cs2',
    title: 'RCE Exploitation in Enterprise Cloud Management Portal',
    targetContext: 'Fortune 500 Infrastructure SaaS Provider',
    objective: 'Vulnerability assessment, bug bounty, & exploit chain verification',
    attackVectors: [
      'Discovered blind Server-Side Request Forgery (SSRF) in webhook handler',
      'Pivoted to compromise internal Cloud Instance Metadata Service (IMDSv2)',
      'Extracted privileged cloud temporary keys',
      'Discovered exposed Java deserialization flaw on backend administration server'
    ],
    impact: 'Achieved Remote Code Execution (RCE) on cloud assets hosting production-grade client configurations and secrets storage.',
    remediationOutcome: 'Secured metadata endpoint Access Control Lists, migrated from static credentials to AWS IAM Roles/AWS Secrets Manager, and patched vulnerable Apache Commons library configurations.'
  },
  {
    id: 'cs3',
    title: 'Critical Infrastructure ICS/SCADA Control Simulation',
    targetContext: 'National Energy & Utility Provider',
    objective: 'Full-scale adversary simulation across regulatory IT and operational technology (OT) boundaries',
    attackVectors: [
      'Identified weak firewall policies at the DMZ corporate boundary',
      'Compromised and pivoted through a dual-homed engineering jump host',
      'Eavesdropped on plain-text Modbus/TCP control packets',
      'Emulated legacy payload injections to trigger simulated status overrides'
    ],
    impact: 'Established compromised capability of simulating master terminal unit (MTU) override commands, demonstrating real-world risk to SCADA critical energy grid sectors.',
    remediationOutcome: 'Implemented strict implementation of the Purdue Model architecture, enforced strict multi-factor authentication (MFA) on all jump servers, and structured read-only telemetry controls over human-machine interfaces.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp0',
    role: 'QA Software Tester',
    company: 'Apple',
    date: 'March 2026 – Present',
    description: [
      'Designed and executed comprehensive manual and automated test cases to ensure optimal software quality, performance, and reliability.',
      'Identified, documented, and tracked software defects (bugs), creating detailed technical reports to facilitate swift and efficient resolution.',
      'Collaborated closely with cross-functional development teams to analyze technical issues and implement stable, root-cause solutions.',
      'Developed and maintained automated test scripts using Python to streamline testing cycles, enhance coverage, and increase accuracy.',
      'Conducted thorough regression testing to verify that new software updates and code deployments did not negatively impact existing functionalities.'
    ]
  },
  {
    id: 'exp_forensics',
    role: 'Digital Forensics Consultant',
    company: 'Egyptian Ministry of Interior & Ministry of Defense',
    date: '2023 – May 2026',
    description: [
      'Led complex digital forensic investigations across a wide range of devices, networks, and operating systems in support of national security and high-stakes criminal cases.',
      'Acquired, preserved, and analyzed volatile and non-volatile digital evidence utilizing advanced forensic tools, ensuring strict adherence to legal chain-of-custody protocols.',
      'Authored comprehensive technical reports and translated complex forensic findings into actionable intelligence for legal proceedings, military stakeholders, and executive decision-makers.',
      'Conducted advanced malware analysis, threat hunting, and incident response operations to identify, mitigate, and recover from sophisticated cyber incidents and APTs.',
      'Collaborated closely with inter-agency teams to develop and refine digital forensics Standard Operating Procedures (SOPs) and enhance the overall cybersecurity posture of critical infrastructure.'
    ]
  },
  {
    id: 'exp1',
    role: 'Founder & Technical Lead',
    company: 'Red Code',
    date: '2024 - Present',
    description: [
      'Direct operations, complex vulnerability research, custom adversary emulation, and critical infrastructure red teaming engagements.',
      'Lead a team in designing bespoke exploit modules, auditing web-scale applications, and delivering strategic remediation for enterprises.',
      'Act as elite advisor for global institutions looking to simulate sophisticated modern APT threats, resulting in a 40% improvement in clients\' detection capabilities.'
    ]
  },
  {
    id: 'exp2',
    role: 'Bug Bounty Hunter & Security Researcher',
    company: 'HackerOne / YesWeHack / Independent',
    date: '2021 - Present',
    description: [
      'Identify and responsibly report high/critical severity security flaws (including RCE, SSRF, IDOR, SQLi, and Authentication Bypasses) inside Fortune 500 environments.',
      'Recognized in multiple global Security Halls of Fame for helping secure enterprise cloud SaaS networks, financial ecosystems, and healthcare portals.',
      'Author custom exploit tools, script custom nuclei templates, and active contributor to the wider international cybersecurity vulnerability disclosure stream.'
    ]
  },
  {
    id: 'exp3',
    role: 'Assistant Manager / Shift Manager',
    company: 'Vantage Egypt',
    date: '2019 - 2023',
    description: [
      'Directed operational workflows, personnel safety protocols, and supply chains for a leading franchise management provider in Egypt.',
      'Applied disciplined leadership, crisis control, and resource allocation policies to ensure high-performance continuity during peak operational periods.',
      'Pivoted organizational leadership experience to apply standard operational discipline, incident response frameworks, and group governance to offensive security teams.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  // Advanced Offensive Security
  {
    name: 'OSCP (Offensive Security Certified Professional)',
    issuer: 'OffSec',
    category: 'offensive'
  },
  {
    name: 'CEH Master (Certified Ethical Hacker Master)',
    issuer: 'EC-Council',
    category: 'offensive'
  },
  {
    name: 'OSEE (Offensive Security Exploitation Expert)',
    issuer: 'OffSec',
    category: 'offensive'
  },
  {
    name: 'CISSP (Certified Information Systems Security Professional)',
    issuer: 'ISC²',
    category: 'offensive'
  },
  {
    name: 'Advanced Threat Hunting on Active Directory',
    issuer: 'LinkedIn Learning',
    category: 'offensive'
  },
  // Leadership & Management
  {
    name: 'FBINAA Graduate Leadership Certification',
    issuer: 'FBI National Academy Associates',
    category: 'leadership'
  },
  {
    name: 'FBINAA Officer Resiliency Certification',
    issuer: 'FBI National Academy Associates',
    category: 'leadership'
  },
  // Fundamentals & Infrastructure
  {
    name: 'OPSWAT Academy Certified',
    issuer: 'OPSWAT',
    category: 'infra'
  },
  {
    name: 'IBM Cybersecurity Certifications',
    issuer: 'IBM',
    category: 'infra'
  },
  {
    name: 'Cisco Routing, Switching, & Security',
    issuer: 'Cisco',
    category: 'infra'
  },
  {
    name: 'SABSA Chartered Enterprise Security Architect',
    issuer: 'SABSA',
    category: 'infra'
  },
  {
    name: 'ISO 27001 Lead Implementer',
    issuer: 'BSI / PEBC',
    category: 'infra'
  },
  {
    name: 'Enterprise Security Architecture: Aligning Cybersecurity with Business Goals',
    issuer: 'LinkedIn Learning',
    category: 'infra'
  },
  {
    name: 'Succeeding in Software Testing',
    issuer: 'LinkedIn Learning',
    category: 'infra'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu1',
    institution: 'Queen\'s University Belfast',
    degree: 'Bachelor’s Degree, Cyber/Electronic Operations and Warfare',
    grade: 'Grade: A+',
    year: '2022 - 2024'
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub1',
    title: 'The International Secrets: The Secret',
    authorName: 'Ahmed El-Kholy',
    description: 'An in-depth analysis of strategic military warfare, cyber warfare operations, and the future of global cyber intelligence.'
  }
];

export const DEVELOPED_TOOLS: DevelopedTool[] = [
  {
    id: 'tool1',
    title: 'The Eye',
    subtitle: 'AI-Powered Facial Recognition & Surveillance System',
    description: [
      'Developed and engineered "The Eye," an advanced AI-driven facial recognition software designed to integrate seamlessly with IP camera networks for comprehensive security monitoring.',
      'Implemented real-time and post-incident analysis capabilities to scan both live video streams and recorded footage for rapid identification of targeted individuals.',
      'Integrated a robust SQL database to securely manage, store, and query targeted facial profiles, ensuring high-speed data retrieval and matching accuracy.',
      'Designed an automated, high-priority alerting mechanism to instantly notify security personnel or system operators upon positive facial detection and matching.',
      'Built an intuitive Graphical User Interface (GUI) to streamline system administration, database management, and network monitoring tasks.'
    ]
  },
  {
    id: 'tool2',
    title: 'KeyEcho Decoder',
    subtitle: 'Acoustic Cryptanalysis Software',
    description: [
      'Conceptualized and engineered "KeyEcho Decoder," an innovative software tool capable of reconstructing typed text solely by analyzing the unique acoustic signatures of keystrokes.',
      'Implemented advanced Digital Signal Processing (DSP) techniques to filter ambient noise, isolate keystroke sounds, and identify individual keypress timing.',
      'Developed and trained a Machine Learning classifier (likely using Python) to map specific sound frequencies and characteristics to corresponding alphanumeric keys.',
      'Engineered real-time audio processing capabilities to listen to a live microphone feed and instantly translate keyboard sounds into readable text.',
      'Successfully demonstrated a complex acoustic side-channel attack vector, highlighting novel security vulnerabilities in standard hardware interfaces.'
    ]
  },
  {
    id: 'tool3',
    title: 'Tactical Hardware & Physical Penetration Testing',
    subtitle: 'Tactical Hardware & Physical Penetration Testing',
    description: [
      'Deployed and configured advanced rogue access points utilizing Wi-Fi Pineapple to execute Man-in-the-Middle (MitM) attacks, capture handshakes, and harvest credentials in targeted wireless environments.',
      'Executed rapid, automated keystroke injection attacks using USB Rubber Ducky and custom Arduino microcontrollers to bypass endpoint security and deploy covert payloads via physical access.',
      'Conducted advanced Radio Frequency (RF) penetration testing utilizing HackRF (SDR) to intercept, analyze, and spoof wireless communications and industrial control signals.',
      'Utilized Flipper Zero for multi-protocol physical engagements, including sub-GHz frequency manipulation, RFID/NFC cloning, and infrared (IR) access control bypass.',
      'Engineered custom hardware implants and network sensors using Raspberry Pi and ESP32 modules to maintain persistent remote access and support close-proximity Red Teaming operations.'
    ]
  }
];

