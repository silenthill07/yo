import React, { useRef } from 'react';
import { X, Printer, Copy, Check, FileDown, ShieldCheck, Download } from 'lucide-react';

interface ResumeViewerProps {
  onClose: () => void;
}

export function ResumeViewer({ onClose }: ResumeViewerProps) {
  const [copied, setCopied] = React.useState(false);
  const printableRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    // Generate specialized print session for clean layout
    const content = printableRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;
    
    // Create direct print iframe or overwrite body for clean print output style
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Ahmed Elkholy - Cybersecurity Resume</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #111;
                line-height: 1.5;
                padding: 40px;
                max-width: 800px;
                margin: 0 auto;
              }
              h1 {
                font-size: 26px;
                margin-bottom: 5px;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-bottom: 2px solid #222;
                padding-bottom: 5px;
              }
              .subtitle {
                font-size: 14px;
                color: #555;
                margin-bottom: 20px;
                font-weight: bold;
              }
              .section-title {
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                border-bottom: 1px solid #777;
                margin-top: 25px;
                margin-bottom: 12px;
                padding-bottom: 3px;
                color: #222;
                letter-spacing: 0.5px;
              }
              .item {
                margin-bottom: 15px;
              }
              .item-header {
                display: flex;
                justify-content: space-between;
                font-weight: bold;
                font-size: 13px;
              }
              .item-sub {
                font-style: italic;
                font-size: 12px;
                color: #444;
                margin-bottom: 5px;
              }
              ul {
                margin: 5px 0 0 0;
                padding-left: 20px;
                font-size: 12px;
              }
              li {
                margin-bottom: 4px;
              }
              .grid-certs {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
                font-size: 12px;
              }
              .cert-cat {
                margin-bottom: 10px;
              }
              .cert-cat-title {
                font-weight: bold;
                font-size: 12px;
                text-decoration: underline;
                margin-bottom: 4px;
              }
              p {
                font-size: 12px;
                text-align: justify;
              }
            </style>
          </head>
          <body>
            ${content}
            <script>
              window.onload = function() {
                window.print();
                window.close();
              }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleCopyMarkdown = () => {
    const rawMarkdown = `
# AHMED ELKHOLY
Offensive Security Engineer | Red Team Operator | Vulnerability Researcher
Cairo, Egypt | Phone: 01040159990 | ahmed1elkholy1@gmail.com
LinkedIn: linkedin.com/in/ahmed-elkholy222 | GitHub: github.com/silenthill07

## ABOUT ME
A highly accomplished Offensive Security Engineer and Red Teamer holding elite industry certifications including OSCP, CEH Master, and CISSP. Demonstrated expertise in advanced vulnerability research, cyber warfare operations, and critical infrastructure protection. Combines deep technical penetration testing capabilities with formally recognized leadership acumen (FBINAA graduate) to drive strategic security initiatives, uncover critical flaws, and fortify organizational defenses. Author and active contributor to the cybersecurity community.

## RECENT ETHICAL ENGAGEMENTS & CASE STUDIES
1. Critical Zero-Day Exploitation in Financial Infrastructure (Confidential Global Fintech Platform)
   - Objective: Red Team assessment simulating an APT
   - Attack Vectors: Spear-phishing, Java gateway zero-day deserialization, Pass-the-Hash, Kerberoasting
   - Impact: Obtained Domain Admin access and decrypted core Digital Ledger Schemas databases
   - Remediation: Coordinated hotfixes and optimized SIEM detection rules for Pass-the-Hash & Kerberoasting.

2. RCE Exploitation in Enterprise Cloud Management Portal (Fortune 500 Infrastructure SaaS)
   - Objective: Vulnerability assessment and active exploit validation
   - Attack Vectors: Blind SSRF, IMDSv2 Cloud Metadata bypass, key extraction, Apache Commons deserialization exploitation
   - Impact: Full Remote Code Execution on primary assets holding client configurations
   - Remediation: Hardened metadata endpoint ACL, migrated storage credentials, patched Apache libraries.

3. SCADA Network Takeover Simulation (National Energy & Utility Provider)
   - Objective: Perimeter compromise pivoting to operational technology OT segments
   - Attack Vectors: DMZ firewall bypass, engineering jump host pivoting, Modbus/TCP telemetry payload overrides
   - Impact: Emulated capabilities of manipulating Master Terminal Unit (MTU) valves
   - Remediation: Enforced Purdue model, strict MFA, established isolated jump controllers.

## EXPERIENCE
- QA Software Tester | Apple (March 2026 – Present)
  - Designed and executed comprehensive manual and automated test cases to ensure optimal software quality, performance, and reliability.
  - Identified, documented, and tracked software defects (bugs), creating detailed technical reports to facilitate swift and efficient resolution.
  - Collaborated closely with cross-functional development teams to analyze technical issues and implement stable, root-cause solutions.
  - Developed and maintained automated test scripts using Python to streamline testing cycles, enhance coverage, and increase accuracy.
  - Conducted thorough regression testing to verify that new software updates and code deployments did not negatively impact existing functionalities.
- Digital Forensics Consultant | Egyptian Ministry of Interior & Ministry of Defense (2023 – May 2026)
  - Led complex digital forensic investigations across a wide range of devices, networks, and operating systems in support of national security and high-stakes criminal cases.
  - Acquired, preserved, and analyzed volatile and non-volatile digital evidence utilizing advanced forensic tools, ensuring strict adherence to legal chain-of-custody protocols.
  - Authored comprehensive technical reports and translated complex forensic findings into actionable intelligence for legal proceedings, military stakeholders, and executive decision-makers.
  - Conducted advanced malware analysis, threat hunting, and incident response operations to identify, mitigate, and recover from sophisticated cyber incidents and APTs.
  - Collaborated closely with inter-agency teams to develop and refine digital forensics Standard Operating Procedures (SOPs) and enhance the overall cybersecurity posture of critical infrastructure.
- Founder & Technical Lead | Red Code (2024 - Present)
  - Direct operations, complex vulnerability research, custom adversary emulation, and critical infrastructure red teaming.
- Bug Bounty Hunter & Security Researcher | HackerOne / YesWeHack / Independent (2021 - Present)
  - Identify and responsibly report high/critical security flaws in Fortune 500 environments.
- Assistant Manager / Shift Manager | Vantage Egypt (2019 - 2023)
  - Directed operational workflows, personnel safety, and supply chains for leading franchise systems.

## CERTIFICATIONS
- Advanced Offensive Security: OSCP, CEH Master, OSEE, CISSP, Advanced Threat Hunting on Active Directory (LinkedIn)
- Leadership & Management: FBINAA Leadership Certification, FBINAA Officer Resiliency
- Fundamentals: OPSWAT Academy, IBM, Cisco Routing & Switching, SABSA, ISO 27001, Enterprise Security Architecture (LinkedIn), Software Testing (LinkedIn)

## DEVELOPED TOOLS & SYSTEMS
- **The Eye – AI-Powered Facial Recognition & Surveillance System**
  - Developed and engineered "The Eye," an advanced AI-driven facial recognition software designed to integrate seamlessly with IP camera networks for comprehensive security monitoring.
  - Implemented real-time and post-incident analysis capabilities to scan both live video streams and recorded footage for rapid identification of targeted individuals.
  - Integrated a robust SQL database to securely manage, store, and query targeted facial profiles, ensuring high-speed data retrieval and matching accuracy.
  - Designed an automated, high-priority alerting mechanism to instantly notify security personnel or system operators upon positive facial detection and matching.
  - Built an intuitive Graphical User Interface (GUI) to streamline system administration, database management, and network monitoring tasks.
- **KeyEcho Decoder – Acoustic Cryptanalysis Software**
  - Conceptualized and engineered "KeyEcho Decoder," an innovative software tool capable of reconstructing typed text solely by analyzing the unique acoustic signatures of keystrokes.
  - Implemented advanced Digital Signal Processing (DSP) techniques to filter ambient noise, isolate keystroke sounds, and identify individual keypress timing.
  - Developed and trained a Machine Learning classifier (likely using Python) to map specific sound frequencies and characteristics to corresponding alphanumeric keys.
  - Engineered real-time audio processing capabilities to listen to a live microphone feed and instantly translate keyboard sounds into readable text.
  - Successfully demonstrated a complex acoustic side-channel attack vector, highlighting novel security vulnerabilities in standard hardware interfaces.
- **Tactical Hardware & Physical Penetration Testing**
  - Deployed and configured advanced rogue access points utilizing Wi-Fi Pineapple to execute Man-in-the-Middle (MitM) attacks, capture handshakes, and harvest credentials in targeted wireless environments.
  - Executed rapid, automated keystroke injection attacks using USB Rubber Ducky and custom Arduino microcontrollers to bypass endpoint security and deploy covert payloads via physical access.
  - Conducted advanced Radio Frequency (RF) penetration testing utilizing HackRF (SDR) to intercept, analyze, and spoof wireless communications and industrial control signals.
  - Utilized Flipper Zero for multi-protocol physical engagements, including sub-GHz frequency manipulation, RFID/NFC cloning, and infrared (IR) access control bypass.
  - Engineered custom hardware implants and network sensors using Raspberry Pi and ESP32 modules to maintain persistent remote access and support close-proximity Red Teaming operations.

## EDUCATION
- Queen's University Belfast: Bachelor’s Degree, Cyber/Electronic Operations and Warfare (Grade: A+) (2022 - 2024)

## PUBLICATIONS
- Author, "The International Secrets: The Secret" — A study on strategic warfare and cyber warfare (Published under the name Ahmed El-Kholy)
    `;
    navigator.clipboard.writeText(rawMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-cyber-gray border border-white/[0.08] w-full max-w-4xl rounded-lg shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header toolbar banner */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-cyber-dark rounded-t-lg select-none">
          <div className="flex items-center space-x-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-green"></div>
            <span className="font-mono text-xs text-white uppercase tracking-wider font-bold">
              Secure Document Vault: Ahmed_Elkholy_Resume.pdf
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-cyber-card transition-all cursor-pointer"
            title="Exit Resume"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar action buttons panel */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-white/[0.05] bg-cyber-card/50 text-xs font-mono">
          <span className="text-gray-400">STATE: UNLOCKED / CERTIFIED BY GPG</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-white/[0.06] hover:border-cyber-green/40 hover:bg-cyber-green/[0.02] text-gray-300 hover:text-cyber-green rounded transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-cyber-green" />
                  <span>COPIED MD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY MD</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-cyber-green hover:bg-cyber-green hover:text-black text-cyber-green rounded transition-all cursor-pointer font-bold shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="p-6 md:p-10 overflow-y-auto bg-[#f9fafb] text-[#111827] flex-1 font-sans">
          <div className="p-8 md:p-12 bg-white rounded shadow-inner border border-gray-200" ref={printableRef}>
            
            {/* Header Identity and Coordinates */}
            <div className="border-b-2 border-gray-800 pb-4 mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 uppercase">
                AHMED ELKHOLY
              </h1>
              <p className="text-sm text-gray-600 font-semibold mt-1">
                Offensive Security Engineer | Red Team Operator | Vulnerability Researcher
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Cairo, Egypt • Phone: 01040159990 • Email: ahmed1elkholy1@gmail.com
              </p>
              <p className="text-xs text-gray-500">
                LinkedIn: linkedin.com/in/ahmed-elkholy222 • GitHub: github.com/silenthill07
              </p>
            </div>

            {/* Profile Narrative Section */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-400 pb-1 mb-2">
                Professional Profile
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed text-justify">
                A highly accomplished Offensive Security Engineer and Red Teamer holding elite industry certifications including OSCP, CEH Master, and CISSP. Demonstrated expertise in advanced vulnerability research, cyber warfare operations, and critical infrastructure protection. Combines deep technical penetration testing capabilities with formally recognized leadership acumen (FBINAA graduate) to drive strategic security initiatives, uncover critical flaws, and fortify organizational defenses. Author and active contributor to the cybersecurity community.
              </p>
            </div>

            {/* Recent Cases Section */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-400 pb-1 mb-3">
                Ethical Engagements & Representative Case Studies
              </h2>
              
              <div className="space-y-4">
                
                <div>
                  <div className="flex justify-between items-baseline font-bold text-xs text-gray-900">
                    <span>1. Critical Zero-Day Exploitation in Financial Infrastructure</span>
                    <span className="text-gray-500">Global Fintech Platform</span>
                  </div>
                  <div className="text-[11px] text-gray-600 italic">Red Team simulated APT attack mimicking persistent actors</div>
                  <ul className="list-disc pl-5 text-[11px] text-gray-700 mt-1.5 space-y-1">
                    <li>Achievable vectors layout: Initial entry engineered through targeted spear-phishing with subsequent Java endpoint exploit.</li>
                    <li>Advanced horizontal lateral pivoting: Mapped enterprise structure using pass-the-hash to target domain registry keys.</li>
                    <li><strong>Impact:</strong> Obtained system credential dominance over full cloud transactions schemas and ledger logs databases.</li>
                    <li><strong>Remediation:</strong> Designed high-density hotfixes and deployed rule triggers for Active Directory lateral pivoting.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-bold text-xs text-gray-900">
                    <span>2. Remote Code Execution in Cloud Management portal</span>
                    <span className="text-gray-500">Fortune 500 AWS SaaS</span>
                  </div>
                  <div className="text-[11px] text-gray-600 italic">Vulnerability assessment and automated exploit development</div>
                  <ul className="list-disc pl-5 text-[11px] text-gray-700 mt-1.5 space-y-1">
                    <li>Designed blind SSRF exploit pipeline accessing Amazon IMDSv2 metadata controller interfaces.</li>
                    <li>Coordinated exploitation of standard Java deserialization flaw inside isolated portal micro-modules.</li>
                    <li><strong>Impact:</strong> Acquired full remote shell execution on servers managing customer cryptographic credentials vaults.</li>
                    <li><strong>Remediation:</strong> Scaled metadata ACL protection, migrated configurations to IAM, and purged vulnerable libraries.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-bold text-xs text-gray-900">
                    <span>3. ICS/SCADA Control Boundary Simulation</span>
                    <span className="text-gray-500">National Energy Provider</span>
                  </div>
                  <div className="text-[11px] text-gray-600 italic">Red Team adversary emulation across secure corporate/operational technology divides</div>
                  <ul className="list-disc pl-5 text-[11px] text-gray-700 mt-1.5 space-y-1">
                    <li>Bypassed DMZ firewalls to Pivot from standard IT to OT engineering workstation.</li>
                    <li>Engineered custom Modbus telemetry payload injectors to override industrial hardware controller.</li>
                    <li><strong>Impact:</strong> Acquired simulated manipulation over the Master Terminal Unit (MTU) energy grid valve arrays.</li>
                    <li><strong>Remediation:</strong> Rebuilt the Purdue model segmentation, mandated rigid MFA, and established isolated network loops.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Employment Timeline Section */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-400 pb-1 mb-3">
                Employment History
              </h2>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between font-bold text-xs text-gray-900">
                    <span>QA Software Tester</span>
                    <span>March 2026 – Present</span>
                  </div>
                  <div className="text-[11px] text-gray-600 italic">Apple | Quality Assurance & Exploit Verification</div>
                  <ul className="list-disc pl-5 text-[11px] text-gray-750 mt-1 space-y-0.5">
                    <li>Designed and executed comprehensive manual and automated test cases to ensure optimal software quality, performance, and reliability.</li>
                    <li>Identified, documented, and tracked software defects (bugs), creating detailed technical reports to facilitate swift and efficient resolution.</li>
                    <li>Collaborated closely with cross-functional development teams to analyze technical issues and implement stable, root-cause solutions.</li>
                    <li>Developed and maintained automated test scripts using Python to streamline testing cycles, enhance coverage, and increase accuracy.</li>
                    <li>Conducted thorough regression testing to verify that new software updates and code deployments did not negatively impact existing functionalities.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-xs text-gray-900">
                    <span>Digital Forensics Consultant</span>
                    <span>2023 – May 2026</span>
                  </div>
                  <div className="text-[11px] text-gray-600 italic">Egyptian Ministry of Interior & Ministry of Defense | National Security & High-Stakes Legal Investigations</div>
                  <ul className="list-disc pl-5 text-[11px] text-gray-750 mt-1 space-y-0.5">
                    <li>Led complex digital forensic investigations across a wide range of devices, networks, and operating systems in support of national security and high-stakes criminal cases.</li>
                    <li>Acquired, preserved, and analyzed volatile and non-volatile digital evidence utilizing advanced forensic tools, ensuring strict adherence to legal chain-of-custody protocols.</li>
                    <li>Authored comprehensive technical reports and translated complex forensic findings into actionable intelligence for legal proceedings, military stakeholders, and executive decision-makers.</li>
                    <li>Conducted advanced malware analysis, threat hunting, and incident response operations to identify, mitigate, and recover from sophisticated cyber incidents and APTs.</li>
                    <li>Collaborated closely with inter-agency teams to develop and refine digital forensics Standard Operating Procedures (SOPs) and enhance the overall cybersecurity posture of critical infrastructure.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-xs text-gray-900">
                    <span>Founder & Technical Lead</span>
                    <span>2024 – Present</span>
                  </div>
                  <div className="text-[11px] text-gray-600 italic">Red Code | Offensive Operations & Exploit Engineering</div>
                  <p className="text-[11px] text-gray-750 mt-1">
                    Direct Advanced threat emulate maneuvers, custom vulnerability research, Active Directory assessments, and infrastructure hardening reviews. Deliver elite technical presentations to strategic corporate boards.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-xs text-gray-900">
                    <span>Bug Bounty Hunter & Security Researcher</span>
                    <span>2021 – Present</span>
                  </div>
                  <div className="text-[11px] text-gray-600 italic">HackerOne / YesWeHack / Independent Research</div>
                  <p className="text-[11px] text-gray-750 mt-1">
                    Identify and responsibly document critical remote code execution (RCE) and authentication bypass security vulnerabilities in major global enterprises. Recipient of numerous Security Hall of Fame awards.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-xs text-gray-900">
                    <span>Assistant Manager / Shift Manager</span>
                    <span>2019 – 2023</span>
                  </div>
                  <div className="text-[11px] text-gray-600 italic">Vantage Egypt | Operational Governance</div>
                  <p className="text-[11px] text-gray-750 mt-1">
                    Coordinated multi-tier shifts, optimized logistics channels, and ensured continuity during peak operational workflows. Refactored high-stakes planning and crisis resolution structures.
                  </p>
                </div>
              </div>
            </div>

            {/* Certification Table */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-400 pb-1 mb-2">
                Professional Credentials & Certifications
              </h2>
              <div className="grid-certs">
                <div className="cert-cat">
                  <div className="cert-cat-title">Advanced Offensive Security</div>
                  <div className="text-[11.5px] text-gray-700">
                    • OSCP (Offensive Security Certified Professional)<br />
                    • CEH Master (Certified Ethical Hacker Master)<br />
                    • OSEE (Offensive Security Exploitation Expert)<br />
                    • CISSP (Certified Information Systems Security Professional)<br />
                    • Advanced Threat Hunting on Active Directory (LinkedIn)
                  </div>
                </div>
                <div className="cert-cat">
                  <div className="cert-cat-title">Leadership & Infrastructure Standards</div>
                  <div className="text-[11.5px] text-gray-700">
                    • FBINAA Leadership Certification & Resilience training<br />
                    • OPSWAT Academy Certified & IBM Cyber Certifications<br />
                    • Cisco Cybersecurity, Routing & Switching Expert<br />
                    • SABSA Security Architecture & ISO 27001 Lead Implementer<br />
                    • Enterprise Security Architecture & Software Testing (LinkedIn)
                  </div>
                </div>
              </div>
            </div>

            {/* Developed Tools & Systems */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-400 pb-1 mb-2">
                Developed Tools & Systems
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between font-bold text-xs text-gray-900">
                    <span>The Eye</span>
                    <span>AI-Powered Facial Recognition & Surveillance System</span>
                  </div>
                  <ul className="list-disc pl-5 text-[11px] text-gray-750 mt-1 space-y-0.5">
                    <li>Developed and engineered "The Eye," an advanced AI-driven facial recognition software designed to integrate seamlessly with IP camera networks for comprehensive security monitoring.</li>
                    <li>Implemented real-time and post-incident analysis capabilities to scan both live video streams and recorded footage for rapid identification of targeted individuals.</li>
                    <li>Integrated a robust SQL database to securely manage, store, and query targeted facial profiles, ensuring high-speed data retrieval and matching accuracy.</li>
                    <li>Designed an automated, high-priority alerting mechanism to instantly notify security personnel or system operators upon positive facial detection and matching.</li>
                    <li>Built an intuitive Graphical User Interface (GUI) to streamline system administration, database management, and network monitoring tasks.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-xs text-gray-900">
                    <span>KeyEcho Decoder</span>
                    <span>Acoustic Cryptanalysis Software</span>
                  </div>
                  <ul className="list-disc pl-5 text-[11px] text-gray-750 mt-1 space-y-0.5">
                    <li>Conceptualized and engineered "KeyEcho Decoder," an innovative software tool capable of reconstructing typed text solely by analyzing the unique acoustic signatures of keystrokes.</li>
                    <li>Implemented advanced Digital Signal Processing (DSP) techniques to filter ambient noise, isolate keystroke sounds, and identify individual keypress timing.</li>
                    <li>Developed and trained a Machine Learning classifier (likely using Python) to map specific sound frequencies and characteristics to corresponding alphanumeric keys.</li>
                    <li>Engineered real-time audio processing capabilities to listen to a live microphone feed and instantly translate keyboard sounds into readable text.</li>
                    <li>Successfully demonstrated a complex acoustic side-channel attack vector, highlighting novel security vulnerabilities in standard hardware interfaces.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-xs text-gray-900">
                    <span>Tactical Hardware & Physical Penetration Testing</span>
                    <span>Hardware, RF & Covert Operations</span>
                  </div>
                  <ul className="list-disc pl-5 text-[11px] text-gray-750 mt-1 space-y-0.5">
                    <li>Deployed and configured advanced rogue access points utilizing Wi-Fi Pineapple to execute Man-in-the-Middle (MitM) attacks, capture handshakes, and harvest credentials in targeted wireless environments.</li>
                    <li>Executed rapid, automated keystroke injection attacks using USB Rubber Ducky and custom Arduino microcontrollers to bypass endpoint security and deploy covert payloads via physical access.</li>
                    <li>Conducted advanced Radio Frequency (RF) penetration testing utilizing HackRF (SDR) to intercept, analyze, and spoof wireless communications and industrial control signals.</li>
                    <li>Utilized Flipper Zero for multi-protocol physical engagements, including sub-GHz frequency manipulation, RFID/NFC cloning, and infrared (IR) access control bypass.</li>
                    <li>Engineered custom hardware implants and network sensors using Raspberry Pi and ESP32 modules to maintain persistent remote access and support close-proximity Red Teaming operations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Details Grid */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-400 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between font-bold text-xs text-gray-900">
                  <span>Queen's University Belfast</span>
                  <span>2022 – 2024</span>
                </div>
                <div className="text-[11px] text-gray-700 flex justify-between">
                  <span>Bachelor’s Degree, Cyber/Electronic Operations and Warfare</span>
                  <span className="font-semibold text-gray-950">Grade: A+</span>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-400 pb-1 mb-1">
                Publications
              </h2>
              <div className="text-[11.5px] text-gray-700 font-semibold font-serif">
                "The International Secrets: The Secret" <span className="font-sans font-normal text-xs text-gray-500">— A study on strategic warfare and cyber warfare, published under pen name Ahmed El-Kholy.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer info message */}
        <div className="p-4 bg-cyber-dark text-center text-[10px] font-mono text-gray-500 rounded-b-lg border-t border-white/[0.06] select-none">
          SECURE SECTOR ACCESS TERMINATED • PRESS COPY OR CLOSE WINDOW DIRECTLY
        </div>

      </div>
    </div>
  );
}
