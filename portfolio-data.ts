// Portfolio data - populated from CV
// Omar Elarabi - Aerospace Engineering Portfolio

import { nccProjectData } from "./ncc-project-data";

export const personalInfo = {
  name: "Omar Elarabi",
  title: "AEROSPACE ENGINEERING PORTFOLIO",
  tagline: "Final Year Aerospace Engineering student specialising in aircraft propulsion systems, computational fluid dynamics, and structural analysis through physics-grounded simulation and optimisation.",
  email: "omarelarabi05@outlook.com",
  linkedin: "https://www.linkedin.com/in/omar-elarabi-358797243",
  location: "London, UK",
  graduationDate: "June 2026",
  availability: "Seeking graduate opportunities from Summer 2026",
};

export const professionalFocus = {
  headline: "Aircraft Systems Design, Computational Analysis & Multiphysics Simulation",
  paragraphs: [
    "Third-year Aerospace Engineering student at Queen Mary University of London (on track for First Class Honours), with expertise in computational design, aircraft propulsion systems, structural analysis, and aerothermodynamics. Academic trajectory focused on translating theoretical principles into validated engineering solutions through CAD, FEA, and CFD methodologies.",
    "Specialising in performance-critical aerospace systems including exhaust design for Formula Student vehicles, composite material optimisation for commercial aircraft, and control systems modelling. Technical approach combines parametric design, multiphysics simulation, and experimental validation to deliver optimised solutions for complex engineering challenges.",
  ],
};

export const designPriorities = [
  {
    number: "01",
    title: "Performance Optimisation",
    description: "Systematic reduction of error margins and enhancement of system efficiency through iterative analysis, parametric studies, and multi-objective optimisation strategies.",
  },
  {
    number: "02",
    title: "Physics-Based Simulation",
    description: "Leveraging CFD (ANSYS Fluent) and FEA tools to validate design performance against real-world operating conditions, ensuring analytical predictions align with physical behaviour.",
  },
  {
    number: "03",
    title: "Systems Integration",
    description: "Designing for sustainable and scalable production through material selection, process compliance, and integration with existing manufacturing infrastructure.",
  },
  {
    number: "04",
    title: "Regulatory Compliance",
    description: "Ensuring adherence to industry standards and certification requirements, including chassis compatibility, structural integrity, and noise regulations for aviation applications.",
  },
];

export const workingEnvironment = [
  {
    number: "01",
    title: "Structured Collaboration",
    description: "Leading peer mentoring programmes with 40% engagement increases, coordinating cross-departmental initiatives, and building accessible learning environments for diverse student cohorts.",
  },
  {
    number: "02",
    title: "Analytical Rigour",
    description: "Applying computational methods (MATLAB, Python, ANSYS) to validate theoretical models, screen thousands of material candidates, and quantify performance improvements with precision.",
  },
  {
    number: "03",
    title: "Iterative Problem-Solving",
    description: "Developing prototypes through CAD modelling, testing design iterations against constraints, and refining solutions based on simulation feedback and experimental data.",
  },
  {
    number: "04",
    title: "Safety & Compliance Leadership",
    description: "Conducting safety inductions and pre-activity briefings for health & safety initiatives, maintaining regulatory compliance, and developing accessible documentation for technical procedures.",
  },
];

export interface Education {
  degree: string;
  institution: string;
  dates: string;
  classification?: string;
  focusModules?: string[];
  id?: string;
  modules?: {
    year: string;
    totalCredits: number;
    totalECTS: number;
    courses: Array<{
      code: string;
      title: string;
      set?: string;
      level: number;
      mark: number;
      grade: string;
      attempt: number;
      credits: number;
      ectsCredits: number;
      result: string;
    }>;
  }[];
}

export interface Experience {
  role: string;
  organisation: string;
  dates: string;
  impacts: string[];
  id?: string;
  category?: string;
  context?: string;
  keyResponsibilities?: string[];
  achievementsDetails?: string[];
  skillsDeveloped?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}

export const education: Education[] = [
  {
    id: "qmul-aerospace",
    degree: "BEng Aerospace Engineering (3rd Year, on track 1st class)",
    institution: "Queen Mary University of London",
    dates: "September 2023 - Present",
    classification: "On track First Class Honours",
    focusModules: [
      "Computational Design & Numerical Design",
      "Aircraft Propulsion Systems & Structures",
      "Aerothermodynamics of Flows & Structural Analysis",
      "Simulation Tools",
    ],
    modules: [
      {
        year: "2023/24",
        totalCredits: 120,
        totalECTS: 60.0,
        courses: [
          { code: "EMS402U", title: "Engineering Design", level: 4, mark: 72.3, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS410U", title: "Experimental Design and Practice 1", level: 4, mark: 67.4, grade: "B", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS412U", title: "Computational and Mathematical Modelling 1", level: 4, mark: 73.4, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS418U", title: "Computational and Mathematical Modelling 2", level: 4, mark: 74.5, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS420U", title: "Experimental Design and Practice 2", level: 4, mark: 74.0, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS430U", title: "Materials Engineering", level: 4, mark: 66.1, grade: "B", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS450U", title: "Exploring Engineering", level: 4, mark: 82.8, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS460U", title: "Fluid Mechanics and Thermodynamics", level: 4, mark: 100.0, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS499U", title: "Skills for Engineers", set: "ST", level: 4, mark: 100.0, grade: "A", attempt: 1, credits: 0, ectsCredits: 0.0, result: "Passed" },
        ],
      },
      {
        year: "2024/25",
        totalCredits: 120,
        totalECTS: 60.0,
        courses: [
          { code: "EMS501U", title: "Designing for Sustainable Manufacture", level: 5, mark: 81.2, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS505U", title: "Applied Solid Mechanics", level: 5, mark: 65.7, grade: "B", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS506U", title: "Numerical Methods and Data Science in Engineering", level: 5, mark: 99.0, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS507U", title: "Control System Analysis and Design", level: 5, mark: 85.5, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS512U", title: "Instrumentation and Measurements", level: 5, mark: 77.5, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS513U", title: "Aerothermodynamics of Flows", level: 5, mark: 65.1, grade: "B", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS514U", title: "Subsonic Aerodynamics and Wings", level: 5, mark: 63.3, grade: "B", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS515U", title: "Introduction to Spacecraft Dynamics", level: 5, mark: 76.3, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS599U", title: "Professional Engineering Skills", set: "ST", level: 5, mark: 100.0, grade: "A", attempt: 1, credits: 0, ectsCredits: 0.0, result: "Passed" },
        ],
      },
      {
        year: "2025/26 (SEM1)",
        totalCredits: 45,
        totalECTS: 22.5,
        courses: [
          { code: "EMS602U", title: "Simulation Tools in Engineering Analysis and Design", level: 6, mark: 84.0, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS611U", title: "Conceptual Design of Aircraft", level: 6, mark: 79.8, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
          { code: "EMS612U", title: "Flight Dynamics and Stability of Aircraft", level: 6, mark: 73.8, grade: "A", attempt: 1, credits: 15, ectsCredits: 7.5, result: "Passed" },
        ],
      },
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "pass-student-organiser",
    role: "Peer-Assisted Study Support (PASS) Student Organiser",
    organisation: "Queen Mary University of London",
    dates: "August 2025 - Present",
    category: "Leadership & Programme Coordination",
    context: "As the PASS Student Organiser, I coordinate and oversee the Peer Assisted Study Support (PASS) scheme within SEMS, ensuring smooth delivery of mentoring sessions that support first-year students' academic and social transition into university life. Acting as the central link between mentors, mentees, and staff, I manage communications, session planning, and promotional activities to maximise engagement and impact.",
    impacts: [
      "Led strategic planning, Excel-based analysis, and data-driven checklists of engagement metrics for peer learning programmes",
      "Coordinated cross-departmental initiatives and planned promotional activities, coordinating 10 mentors to deliver structured sessions",
      "Implemented data-driven improvements based on engagement analytics, increasing student participation by 40%",
    ],
    keyResponsibilities: [
      "Lead and coordinate a team of PASS mentors to deliver engaging, tailored mentoring sessions",
      "Plan and schedule PASS sessions, liaising with staff to secure rooms and resources",
      "Promote sessions across the school using presentations, posters, flyers, targeted email campaigns, social media and lecture shout-outs, organising Welcome Week activities, and managing the PASS QMUL module page",
      "Maintain communication with professors to stay updated on module developments, identify areas where students may struggle, and align session content accordingly",
      "Record attendance and engagement, analyse feedback forms to monitor impact, and report progress to the PASS Coordinator and academic staff",
      "Liaise with first-year course representatives to gather feedback and inform session planning",
      "Troubleshoot challenges, working collaboratively with staff and mentors to improve the scheme",
    ],
    achievementsDetails: [
      "Successfully increased student participation by 40% through data-driven promotional strategies and engagement improvements",
      "Coordinated 10 mentors to deliver consistent, high-quality mentoring sessions across multiple engineering modules",
      "Developed Excel-based tracking systems to analyse engagement metrics and identify areas for programme enhancement",
      "Built strong communication channels between students, mentors, and academic staff to create a responsive support system",
    ],
    skillsDeveloped: [
      "Leadership & Team Management: Coordinating volunteers, delegating tasks, and maintaining team motivation",
      "Event Planning & Organisation: Designing session structures, and executing campaigns and presentations that boost engagement and visibility",
      "Stakeholder Collaboration: Working with academics, course reps, and student services to coordinate an impactful programme",
      "Problem-Solving: Identifying and resolving operational challenges to ensure programme success",
      "Data Analysis & Feedback Integration: Using attendance trends and student input to enhance session delivery",
    ],
  },
  {
    id: "pass-mentor",
    role: "Peer-Assisted Study Support (PASS) Mentor",
    organisation: "Queen Mary University of London",
    dates: "September 2024 - Present",
    category: "Academic Support & Mentoring",
    context: "As a PASS Mentor, I provide academic support to first-year students within the School of Engineering and Materials Science (SEMS). My role involves facilitating discussions and guiding students to find solutions to academic challenges through peer-led sessions. By fostering a collaborative and supportive environment, I help students enhance their understanding of course material and develop independent problem-solving skills.",
    impacts: [
      "Identified and supported students facing academic challenges, developing targeted strategies to address knowledge gaps",
      "Customised teaching approaches and managed sessions based on individual student needs, fostering supportive learning environment",
      "Drove measurable improvements in academic progress through structured mentoring interventions",
      "Awarded PASS Mentor of the Year for outstanding impact on students' confidence and academic development",
    ],
    keyResponsibilities: [
      "Mentor first-year students in weekly sessions, helping them navigate course content and study challenges",
      "Encourage active learning through group discussions, focusing on exploration rather than providing direct answers",
      "Delivered a lecture shout-out to promote PASS sessions and engage students, honing public speaking and presentation skills",
    ],
    achievementsDetails: [
      "Strengthened students' understanding of complex engineering concepts through approachable explanations and peer-led discussions",
      "Built rapport with mentees, creating a safe space for students to ask questions and develop problem-solving independence",
      "Successfully adapted mentoring style to address diverse learning needs and academic backgrounds",
    ],
    skillsDeveloped: [
      "Effective Communication: Simplifying complex topics and fostering open dialogue with students",
      "Public Speaking: Delivering concise, engaging presentations to large student audiences",
      "Facilitation: Leading discussions that encourage independent thinking and problem-solving",
      "Mentoring & Support: Building rapport with students, understanding their challenges, and guiding them through their academic journey",
    ],
  },
  {
    id: "health-safety-briefings-officer",
    role: "Health & Safety Briefings Officer",
    organisation: "Aurora Initiatives, QMUL",
    dates: "August 2025 - Present",
    category: "Safety Management & Compliance",
    context: "As Briefing Officer for the Aurora Initiative's Health & Safety Team, I ensure society activities are conducted safely in compliance with established safety procedures. I deliver safety inductions and pre-activity briefings, prepare and share briefing materials, and maintain detailed attendance and compliance records. Working closely with the Head of Health & Safety, other safety officers, and departments, I contribute to maintaining up-to-date safety practices that support the society's engineering operations.",
    impacts: [
      "Conducted safety inductions and pre-activity briefings for society members, developing accessible briefing materials",
      "Led annual sessions covering critical safety protocols, ensuring regulatory compliance across all activities",
      "Maintained compliance and attendance records, coordinating with officers and departments to update safety procedures",
    ],
    keyResponsibilities: [
      "Deliver safety inductions and pre-activity briefings to ensure all participants understand relevant safety practices",
      "Prepare and distribute briefing materials in clear, accessible formats for society members",
      "Assist the manager in ensuring accurate attendance and compliance records for all safety-related activities",
      "Collaborate with other safety officers to keep practices current and aligned with engineering developments",
      "Take lead on safety matters within my area of responsibility",
    ],
    achievementsDetails: [
      "Developed clear and accessible safety briefing materials tailored for technical and non-technical society members",
      "Successfully delivered safety inductions ensuring 100% regulatory compliance across society activities",
      "Maintained detailed attendance, compliance, and safety records for audit and review purposes",
      "Collaborated cross-departmentally to align safety procedures with university engineering and operational standards",
    ],
    skillsDeveloped: [
      "Health & Safety Management: Delivering clear, targeted safety briefings and maintaining compliance documentation",
      "Risk Awareness & Mitigation: Identifying hazards and reinforcing preventative measures",
      "Team-Based Responsibility: Operating within a shared-responsibility safety team",
      "Cross-Department Collaboration: Working with committee members and university services to maintain compliance",
      "Attention to Detail & Accountability: Ensuring safety procedures are followed consistently",
    ],
  },
  {
    id: "health-safety-officer",
    role: "Health & Safety Officer",
    organisation: "QMUL AeroSoc",
    dates: "October 2025 - Present",
    category: "Safety Management & Compliance",
    context: "As a Health & Safety Officer for the QMUL Aerospace Society, I work as part of a team responsible for ensuring all safety protocols are planned and delivered in a safe, compliant, and well-managed manner. The role involves collectively overseeing safety practices across technical, academic, and social activities, supporting safe participation while collaborating closely with committee members and other departments.",
    impacts: [
      "Work collaboratively within the Health & Safety team to ensure society activities operate in a safe and responsible way",
      "Support the development, review, and implementation of safety procedures across events, workshops, and trips",
      "Monitor adherence to safety protocols during society activities and address issues proactively",
    ],
    keyResponsibilities: [
      "Work collaboratively within the Health & Safety team to ensure society activities operate in a safe and responsible way",
      "Support the development, review, and implementation of safety procedures across events, workshops, and trips",
      "Monitor adherence to safety protocols during society activities and address issues proactively",
      "Assist in maintaining attendance, compliance, and safety records where required",
      "Communicate with committee members and relevant university departments to ensure safety considerations are aligned",
      "Contribute to continuous improvement of safety practices, staying informed on ongoing engineering and operational activities",
    ],
    achievementsDetails: [
      "Supported safe delivery of student-led technical and non-technical activities across the aerospace society",
      "Collaborated with committee and university services to implement and maintain safety compliance procedures",
      "Monitored safety adherence during society events, addressing issues proactively to prevent incidents",
      "Contributed to continuous review and improvement of safety practices aligned with engineering standards",
    ],
    skillsDeveloped: [
      "Health & Safety Management: Supporting safe delivery of student-led technical and non-technical activities",
      "Risk Awareness & Mitigation: Identifying hazards and reinforcing safe working practices",
      "Team-Based Responsibility: Operating within a shared-responsibility safety team",
      "Cross-Department Collaboration: Working with engineering, systems, and legal teams to ensure unified safety protocols",
      "Record-Keeping & Compliance Tracking: Managing attendance and safety records for audit and review",
    ],
  },
  {
    id: "event-officer",
    role: "Event Officer",
    organisation: "QMUL Pilot Society",
    dates: "December 2025 - Present",
    category: "Event Planning & Coordination",
    context: "As Events Officer for the Pilots Society, I plan, coordinate, and deliver a range of academic, professional, and social events for society members. I work closely with the committee, university departments, and other student societies to ensure events are well organised, inclusive, and effectively promoted. My role focuses on clear communication, strategic scheduling, and smooth execution to maximise engagement and participation.",
    impacts: [
      "Plan, schedule, and coordinate society events including socials, industry talks, workshops, and trips",
      "Decide event dates and review timings in line with academic timetables, committee availability, and members' extracurricular commitments",
      "Lead outreach and communications to ensure all members receive timely and accurate event information",
    ],
    keyResponsibilities: [
      "Plan, schedule, and coordinate society events including socials, industry talks, workshops, and trips",
      "Decide event dates and review timings in line with academic timetables, committee availability, and members' extracurricular commitments",
      "Lead outreach and communications to ensure all members receive timely and accurate event information",
      "Communicate and collaborate across departments and with other student societies to plan joint events and partnerships",
      "Support the delivery of events on the day, ensuring activities run smoothly and professionally",
      "Take nominal roll of attendees during events to monitor engagement and participation",
    ],
    achievementsDetails: [
      "Successfully coordinated diverse event types including socials, industry talks, workshops, and trips",
      "Aligned event scheduling with academic calendars and member commitments to maximise attendance",
      "Led cross-departmental and inter-society collaborations to deliver joint initiatives and partnerships",
      "Maintained clear communication flow ensuring members received timely event updates and information",
      "Monitored engagement through attendance tracking to assess event impact and inform future planning",
    ],
    skillsDeveloped: [
      "Event Planning & Delivery: Coordinating logistics and timelines across diverse event types",
      "Cross-Department & Inter-Society Collaboration: Working with multiple stakeholders to deliver joint initiatives",
      "Communication & Outreach: Promoting events and maintaining clear information flow",
      "Time & Schedule Management: Aligning events with academic and extracurricular commitments",
      "Teamwork & Coordination: Working effectively within a committee to achieve shared goals",
    ],
  },
  {
    role: "Braking Team Member",
    organisation: "Hyperlink, QMUL",
    dates: "September 2024 - May 2025",
    id: "braking-team-member",
    category: "Engineering Design & Innovation",
    context: "As a member of the Hyperlink Braking Team, I contributed to the early-stage development of braking systems for a conceptual high-speed transport pod. My work focused on creating efficient magnetic braking solutions using eddy currents for contactless primary deceleration, and friction pads for secondary redundancy in the event of failure.",
    impacts: [
      "Designed magnetic braking system concepts using CAD and sketching, integrating eddy currents for friction-free electromagnetic damping",
      "Conducted dimensional analysis and material research to maximise braking efficiency for primary and secondary systems",
      "Investigated methods to optimise thermal power dissipation while maintaining system coordination and reliability",
    ],
    keyResponsibilities: [
      "Developed concepts for magnetic braking systems using sketching and CAD, incorporating eddy current damping for contactless primary deceleration",
      "Conducted concept sketches and researched optimal materials for thermal and magnetic performance",
      "Considered failure scenarios such as power outages and system overheating in design evaluations",
      "Analysed health and safety, efficiency, and component durability alongside cross-comparison of magnetic damping forces vs. mechanical drag",
    ],
    achievementsDetails: [
      "Designed innovative contactless magnetic braking concepts using eddy current principles for primary deceleration",
      "Researched and specified materials optimised for thermal dissipation and magnetic performance in high-speed applications",
      "Evaluated failure scenarios including power outages and thermal overload to ensure system redundancy and safety",
      "Contributed to cross-functional analysis balancing magnetic damping efficiency with mechanical backup systems",
    ],
    skillsDeveloped: [
      "CAD Design: Created detailed CAD models of braking system components, ensuring accuracy and feasibility",
      "Research & Analysis: Investigated material properties and design dimensions to maximise system performance",
      "Problem-Solving: Anticipated and designed around potential system faults, prioritising safety and reliability",
      "Concept Development: Developed innovative concepts to address braking challenges, focusing on both primary and secondary systems",
    ],
  },
  {
    role: "Second Year Aerospace Engineering Course Representative",
    organisation: "Queen Mary University of London",
    dates: "September 2024 - May 2025",
    id: "course-representative",
    category: "Student Advocacy & Communication",
    context: "As a second-year course representative, I gathered module feedback from my cohort, relayed it to academic staff, and helped implement positive changes to improve lab clarity, deadlines, and communication between students and lecturers. This role focused on representing diverse student viewpoints professionally and driving student-focused improvements.",
    impacts: [
      "Built communication channel between students and staff to improve student experience in partnership with QMUL leadership",
      "Raised awareness of student concerns, reporting feedback from meetings and recording turnout improvements",
    ],
    keyResponsibilities: [
      "Gathered module feedback from second-year aerospace engineering cohort and relayed concerns to academic staff",
      "Helped implement positive changes to improve lab clarity, assessment deadlines, and student-staff communication",
      "Represented diverse student viewpoints professionally in formal meetings with university leadership",
      "Prevented difficult situations from escalating by handling student concerns proactively and diplomatically",
    ],
    achievementsDetails: [
      "Successfully built communication channel between 2nd year cohort and academic staff, improving student experience",
      "Drove improvements to lab sessions, deadline structures, and communication processes based on student feedback",
      "Represented student concerns with professionalism and clarity in formal staff-student liaison meetings",
      "Prevented escalation of student issues through proactive engagement and diplomatic problem resolution",
    ],
    skillsDeveloped: [
      "Active Listening: Gathering feedback from diverse student perspectives and identifying common concerns",
      "Stakeholder Communication: Representing student viewpoints to academic staff and university leadership",
      "Collaborative Problem-Solving: Working with staff to implement practical improvements within academic constraints",
      "Advocacy & Diplomacy: Balancing student needs with institutional limitations while maintaining professional relationships",
    ],
  },
];

export const certifications: Certification[] = [];

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: "Introduced" | "Proficient" | "Advanced" | "Highly Advanced" | "Expert" | "Native" | "Intermediate";
  }[];
}

export const technicalMatrix: SkillCategory[] = [
  {
    category: "Computer Aided Design (CAD)",
    skills: [
      { name: "SolidWorks", level: "Advanced" },
      { name: "CAD (General)", level: "Advanced" },
    ],
  },
  {
    category: "Analysis & Simulation",
    skills: [
      { name: "ANSYS Fluent (CFD)", level: "Highly Advanced" },
      { name: "ANSYS Mechanical (FEA)", level: "Advanced" },
      { name: "Abaqus", level: "Highly Advanced" },
      { name: "ANSYS EduPack", level: "Expert" },
    ],
  },
  {
    category: "Programming & Data",
    skills: [
      { name: "MATLAB", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "Microsoft Office", level: "Expert" },
    ],
  },
  {
    category: "Systems & Modelling",
    skills: [
      { name: "Simulink", level: "Expert" },
      { name: "OpenWAM & WAMer", level: "Advanced" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "English", level: "Native" },
      { name: "Arabic", level: "Native" },
      { name: "French", level: "Intermediate" },
    ],
  },
];

export interface Project {
  id: string;
  category: string;
  title: "Designing the Powertrain Exhaust System - Formula Student Car",
  descriptor: "Academic Project | CFD & Thermal Analysis | SolidWorks & ANSYS Fluent",
  thumbnail?: string;
  
  // Project detail page fields
  context: "Research project focused on complete exhaust system design and manufacturing for a Formula Student competition vehicle. The system requires optimisation of thermal performance, compliance with chassis geometry, and adherence to IMechE regulations while ensuring sustainable manufacturing processes.",
  constraints: [
    "Compliance with IMechE Formula Student rulebook and noise regulations",
    "Integration with existing chassis geometry and spatial packaging limitations",
    "Material selection for high-temperature durability and sustainable manufacturing",
    "Optimised flow characteristics through headers, collector, tailpipe, and muffler components",
  ],
  operatingConditions: [
    "High-temperature exhaust gas flow with thermal expansion considerations",
    "Variable engine operating conditions throughout competition cycles",
    "Manufacturing constraints for prototype development and validation",
  ],
  projectData: {
    category: "Propulsion & Thermal Systems",
    methodology: "Parametric CAD Design, CFD Simulation, Regulatory Compliance Analysis",
    keyTools: "SolidWorks, ANSYS Fluent, CFD Post-Processing, MATLAB, Simulink, OpenWAM (WAMer), ANSYS Edupack",
  },
  engineeringStrategy: [
    "Completed comprehensive literature review and research into previous exhaust designs used for QMUL Formula Student vehicles and competing university vehicles, gathering engine specification data and establishing boundary conditions for the design process.",
    "Investigate optimal materials through Ashby's method using ANSYS Edupack, ensuring structural, thermal, and environmental stability for the application by comparing candidate materials obtained through a series of steps including constructing a material property matrix to define most significant properties with constraints, constructing a materials index for the model, and investigating manufacturing suppliers including costs and sustainability through life cycle analysis.",
    "Complete 1D engine simulation through MATLAB, Simulink, and OpenWAM (WAMer) to optimise the geometry and dimensions of the exhaust system runners for maximising torque, power, and volumetric efficiency against engine speed rpm.",
    "Develop complete 3D parametric models of exhaust system components (headers, collector, tailpipe, muffler) in SolidWorks, ensuring fit and compliance with chassis geometry and IMechE regulations.",
    "Conduct computational fluid dynamics simulations using ANSYS Fluent to analyse thermal behaviour and flow characteristics, guiding material selection for sustainable manufacturing practices.",
    "Iteratively refine design through CFD validation to optimise thermal performance, noise compliance, and structural integrity while developing testable prototypes for experimental validation.",
  ],
  performanceMetrics: {
    type: "list",
    data: [
      "Complete exhaust system design validated through CFD simulation",
      "Compliance achieved with IMechE Formula Student regulations and noise limits",
      "Sustainable manufacturing pathway established through material selection and prototype testing",
    ],
  },
  engineeringInsight: "The integration of parametric CAD modelling with multiphysics CFD analysis enables simultaneous optimisation of thermal performance, regulatory compliance, and manufacturing feasibility - demonstrating the critical role of simulation-driven design in performance-constrained automotive applications.",
}

export const projects: Project[] = [
  {
    id: "powertrain-exhaust-system",
    category: "Propulsion Systems",
    title: "Designing the Powertrain Exhaust System - Formula Student Car",
    descriptor: "Academic Project | CFD & Thermal Analysis | SolidWorks & ANSYS Fluent",
    thumbnail: "https://images.unsplash.com/photo-1765202661736-d4dca3d488a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwcmFjaW5nJTIwY2FyJTIwZXhoYXVzdCUyMHN5c3RlbXxlbnwxfHx8fDE3NzIwNzA4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    context: "Research project focused on complete exhaust system design and manufacturing for a Formula Student competition vehicle. The system requires optimisation of thermal performance, compliance with chassis geometry, and adherence to IMechE regulations while ensuring sustainable manufacturing processes.",
    constraints: [
      "Compliance with IMechE Formula Student rulebook and noise regulations",
      "Integration with existing chassis geometry and spatial packaging limitations",
      "Material selection for high-temperature durability and sustainable manufacturing",
      "Optimised flow characteristics through headers, collector, tailpipe, and muffler components",
    ],
    operatingConditions: [
      "High-temperature exhaust gas flow with thermal expansion considerations",
      "Variable engine operating conditions throughout competition cycles",
      "Manufacturing constraints for prototype development and validation",
    ],
    projectData: {
      category: "Propulsion & Thermal Systems",
      methodology: "Parametric CAD Design, CFD Simulation, Regulatory Compliance Analysis",
      keyTools: "SolidWorks, ANSYS Fluent, CFD Post-Processing, MATLAB, Simulink, OpenWAM (WAMer), ANSYS Edupack",
    },
    engineeringStrategy: [
      "Completed comprehensive literature review and research into previous exhaust designs used for QMUL Formula Student vehicles and competing university vehicles, gathering engine specification data and establishing boundary conditions for the design process.",
      "Investigate optimal materials through Ashby's method using ANSYS Edupack, ensuring structural, thermal, and environmental stability for the application by comparing candidate materials obtained through a series of steps including constructing a material property matrix to define most significant properties with constraints, constructing a materials index for the model, and investigating manufacturing suppliers including costs and sustainability through life cycle analysis.",
      "Complete 1D engine simulation through MATLAB, Simulink, and OpenWAM (WAMer) to optimise the geometry and dimensions of the exhaust system runners for maximising torque, power, and volumetric efficiency against engine speed rpm.",
      "Develop complete 3D parametric models of exhaust system components (headers, collector, tailpipe, muffler) in SolidWorks, ensuring fit and compliance with chassis geometry and IMechE regulations.",
      "Conduct computational fluid dynamics simulations using ANSYS Fluent to analyse thermal behaviour and flow characteristics, guiding material selection for sustainable manufacturing practices.",
      "Iteratively refine design through CFD validation to optimise thermal performance, noise compliance, and structural integrity while developing testable prototypes for experimental validation.",
    ],
    performanceMetrics: {
      type: "list",
      data: [
        "Complete exhaust system design validated through CFD simulation",
        "Compliance achieved with IMechE Formula Student regulations and noise limits",
        "Sustainable manufacturing pathway established through material selection and prototype testing",
      ],
    },
    engineeringInsight: "The integration of parametric CAD modelling with multiphysics CFD analysis enables simultaneous optimisation of thermal performance, regulatory compliance, and manufacturing feasibility - demonstrating the critical role of simulation-driven design in performance-constrained automotive applications.",
  },
  {
    id: "water-tank-control",
    category: "Control Systems",
    title: "Water Tank Level Control - MATLAB & Simulink",
    descriptor: "Simulation Project | PID Controller Optimisation | System Dynamics",
    thumbnail: "https://images.unsplash.com/photo-1714233039800-3cfa2542e330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjB0YW5rJTIwY29udHJvbCUyMHN5c3RlbXxlbnwxfHx8fDE3NzIwNzA4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    context: "Control systems project investigating the performance of open and closed loop control systems in regulating water level in a process vessel. The project focused on developing PID-controlled systems that minimise error between physical experimental and simulated responses, demonstrating the critical impact of controller calibration on system performance through MATLAB and Simulink block diagram modelling.",
    constraints: [
      "Minimisation of steady-state error and overshoot in tank level response",
      "PID parameter optimisation to match physical system behaviour from experimental data",
      "System stability across varying operating conditions and disturbances",
      "Compliance with real-time control requirements and feedback loop responsiveness",
      "Accuracy validation between theoretical, simulated, and experimental models",
    ],
    operatingConditions: [
      "Dual-tank hydraulic system with variable inflow and outflow rates controlled by proportional valve and pump",
      "Real-time level control with feedback loop integration using experimental control equipment",
      "Open loop and closed loop control configurations for comparative analysis",
      "External disturbances through pump voltage step inputs and valve voltage adjustments",
      "Comparison between physical experimental data and MATLAB/Simulink simulation predictions",
    ],
    projectData: {
      category: "Control Systems & Simulation",
      methodology: "Mathematical Modelling, PID Tuning, Experimental Validation, Transfer Function Analysis",
      keyTools: "MATLAB, Simulink, PID Controller Design, Experimental Control Equipment",
    },
    engineeringStrategy: [
      "Developed mathematical model of the water tank system based on governing equations for level control, where the rate of change of volume is determined by inflow and outflow rates: dV(t)/dt = Fin(t) - Fout(t) = Fpump(t) - K√(V(t)), establishing the theoretical foundation for control system design.",
      "Conducted open loop level step response test using experimental control equipment with external voltage setting for Pump 2, recording system behaviour to determine time constant and validate theoretical predictions against experimental data, achieving a time constant of τ = 185.6s compared to theoretical value of 165.4s.",
      "Designed and simulated open loop control system in MATLAB/Simulink using block diagrams with transfer functions, comparing simulated behaviour to experimental results to validate model accuracy and identify discrepancies caused by external factors such as friction and turbulence.",
      "Implemented closed loop PID controller with initial gains Kp = 10, Ki = 0.5, Kd = 0 and iteratively optimised parameters through experimental testing, analysing the impact of proportional, integral, and derivative gains on rise time, overshoot, settling time, and steady-state error.",
      "Conducted comprehensive sensitivity analysis on PID gains: modifying Kp from 10 to 15 reduced rise time to 22s but introduced 6.33% overshoot; increasing Ki from 0.5 to 2 improved steady-state error reduction but caused instability; adjusting Kd from 0 to 3 dampened oscillations and reduced settling time to 22s.",
      "Validated simulation accuracy through direct comparison of experimental and simulated data across multiple test configurations, achieving error margins of ±12.2% to ±15% and demonstrating the necessity of empirical tuning for real-world control system fidelity.",
    ],
    performanceMetrics: {
      type: "list",
      data: [
        "Open loop time constant: τ = 185.6s (experimental) vs 165.4s (theoretical), 12.2% deviation",
        "Original PID (Kp=10, Ki=0.5, Kd=0): Rise time 22s, settling time 117s, peak overshoot 10.3%",
        "Modified PID (Kp=15, Ki=0.5, Kd=0): Rise time 22s, settling time 120s, peak overshoot 6.33%",
        "Integral gain increase (Ki=2): Improved steady-state error reduction but introduced system instability",
        "Derivative gain optimisation (Kd=3): Achieved 22s settling time with minimal oscillations",
        "Simulation-to-experimental error: ±12.2% to ±15% across all test configurations",
      ],
    },
    engineeringInsight: "The experimental investigation revealed the critical trade-offs in PID controller tuning: increasing proportional gain improved response time but at the cost of system stability with increased overshoot and settling time; integral gain effectively reduced steady-state error but required careful calibration to avoid instability; derivative gain provided the most effective damping of oscillations. The 12-15% discrepancy between simulated and experimental results underscores the necessity of experimental validation in control system design—simulation models provide powerful predictive capability but external factors such as friction, turbulence, and sensor noise necessitate empirical tuning to ensure real-world fidelity and stable operation.",
    results: {
      sections: [
        {
          title: "Open Loop System Performance",
          description: "The open loop test established baseline system characteristics with a time constant of 185.6s, exceeding the theoretical value of 165.4s by 12.2%. This deviation was attributed to external factors including flow rate variations, friction in the system, and turbulence effects not captured in the ideal theoretical model. The experimental and simulated plots demonstrated similar behaviour, validating the mathematical model's fundamental accuracy while highlighting the impact of real-world conditions.",
          data: {
            experimental: {
              timeConstant: 185.6,
              settledLevel: 9.81,
              levelA: 0.13,
              levelB: 0.165,
            },
            theoretical: {
              timeConstant: 165.4,
              area: 0.017671459,
              pumpConstant: 10500,
            }
          }
        },
        {
          title: "Closed Loop PID Controller Analysis",
          description: "Three PID configurations were tested to evaluate the impact of each gain parameter. The original PID (Kp=10, Ki=0.5, Kd=0) produced an overdamped response with 10.3% overshoot and 117s settling time. Increasing the proportional gain to 15 reduced overshoot to 6.33% but maintained 120s settling time. The derivative gain modification (Kd=3) provided superior damping characteristics, achieving 22s settling time with minimal oscillations, demonstrating the derivative term's effectiveness in stabilizing system response.",
          data: {
            originalPID: {
              kp: 10,
              ki: 0.5,
              kd: 0,
              riseTime: 22,
              settleTime: 117,
              peakValue: 6.62,
              overshoot: 10.3,
            },
            modifiedPID_Kp: {
              kp: 15,
              ki: 0.5,
              kd: 0,
              riseTime: 22,
              settleTime: 120,
              peakValue: 6.38,
              overshoot: 6.33,
            },
            modifiedPID_Kd: {
              kp: 10,
              ki: 0.5,
              kd: 3,
              riseTime: 22,
              settleTime: 22,
              peakValue: 6.35,
              overshoot: 5.8,
            }
          }
        },
        {
          title: "Comparative Analysis and Validation",
          description: "The integral gain modification (Ki=2) demonstrated the trade-off between error correction and stability—while it provided greater strength in response to accumulated error, excessive integral gain resulted in instability and oscillations. The optimal configuration balanced all three parameters, with the derivative-modified controller showing the best overall performance. Peak values of the LT experimental output were 6.62V and 6.744V for original and modified systems respectively, with a 2% tolerance validation, demonstrating the model's predictive accuracy despite minor discrepancies.",
          data: {
            errorMargins: {
              openLoop: 12.2,
              closedLoopOriginal: 15.1,
              closedLoopModified: 12.2,
            },
            performanceRanking: [
              { config: "Modified PID (Kd=3)", score: 95, metric: "Best damping and settling time" },
              { config: "Modified PID (Kp=15)", score: 82, metric: "Reduced overshoot, slower settling" },
              { config: "Original PID", score: 75, metric: "Acceptable but overdamped" },
              { config: "High Integral Gain (Ki=2)", score: 60, metric: "Unstable with oscillations" },
            ]
          }
        }
      ]
    },
  },
  nccProjectData,
  {
    id: "ai-atm-taxi-time",
    category: "Data Science & AI",
    title: "AI in Air Traffic Management - Predictive Taxi Time Modelling",
    descriptor: "Academic Research | Machine Learning | Python & MATLAB",
    thumbnail: "https://images.unsplash.com/photo-1599814666634-3d146e25b267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwYWlyJTIwdHJhZmZpYyUyMGNvbnRyb2wlMjByYWRhcnxlbnwxfHx8fDE3NzIzMjU0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    context: "Machine learning research applying AI techniques to predict aircraft taxi times at Zurich Airport. Developed predictive models using fuzzy inference systems and subtractive clustering to optimise airport efficiency and reduce operational delays.",
    constraints: [
      "37-feature dataset from Zurich Airport (24M annual passengers)",
      "PCA dimensionality reduction to identify critical predictors",
      "Model complexity optimisation for accuracy vs. efficiency",
      "Low RMSE requirement for training and validation",
      "Overfitting prevention through cluster calibration",
    ],
    operatingConditions: [
      "Real-world airport data: speed, weather, congestion",
      "Variable airport configuration with three runways",
      "Feature extraction from 37 operational parameters",
      "78% training, 22% testing data split",
      "Fuzzy Inference System with subtractive clustering",
    ],
    projectData: {
      category: "Artificial Intelligence & Airport Operations",
      methodology: "PCA, Subtractive Clustering, Fuzzy Inference Systems",
      keyTools: "Python, MATLAB, PCA, Fuzzy Logic, Statistical Analysis",
    },
    engineeringStrategy: [
      "Acquired and preprocessed Zurich Airport dataset with 37 features across aircraft factors, operations, congestion, and weather conditions.",
      "Applied PCA to reduce dimensionality from 37 to 4 principal components, maximising variance (41.8%) whilst minimising redundancy.",
      "Extracted 17 critical features using threshold-based analysis (threshold = 0.03) including operational mode, aircraft weight, and weather parameters.",
      "Developed fuzzy inference system with subtractive clustering using 78%-22% train-test split to prevent overfitting.",
      "Optimised cluster influence range from 0.315 to 0.3, achieving training RMSE of 2.4081 and validation RMSE of 2.4087 (difference: 0.0006).",
      "Validated through statistical analysis: linear structure in predicted vs. actual plots confirmed accurate predictions with minimal deviation.",
    ],
    performanceMetrics: {
      type: "list",
      data: [
        "37 features reduced to 4 principal components (89% compression)",
        "17 critical features identified through PCA threshold analysis",
        "PC1 explained 15.4% variance, total explained variance: 41.8%",
        "Cluster influence optimised from 0.315 to 0.3 for stability",
        "Data split: 78% training, 22% validation for robust testing",
        "Linear correlation in predicted vs. actual outputs validates model accuracy",
      ],
    },
    engineeringInsight: "PCA dimensionality reduction combined with subtractive clustering demonstrates data-centric engineering's power in complex airport operations. The critical insight: balancing model complexity with prediction accuracy. Higher cluster influence ranges achieve lower training errors but risk overfitting. By calibrating to 0.3 and validating against unseen data, the model achieved near-identical training and validation RMSE (0.0006 difference), confirming robust predictive capability. This approach reduces human error in taxi time prediction whilst maintaining adaptability—crucial for optimising airport capacity in congested airspace.",
  },
];