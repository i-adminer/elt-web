export interface SolutionFeature {
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[]; // 3 images for detail page slideshow
  techStack: string[];
  features: SolutionFeature[];
  benefits: string[];
  link: string;
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "managed-ict-services",
    title: "Managed ICT Services",
    subtitle: "Complete IT infrastructure management and 24/7 support",
    description:
      "Comprehensive ICT management including server monitoring, network administration, security updates, and 24/7 technical support. Let us handle your IT while you focus on your core business.",
    longDescription:
      "Our Managed ICT Services give your business access to a full IT department for a fixed monthly fee. We proactively monitor your systems, respond to issues before they affect your operations, and handle everything from network health reviews to cybersecurity management. Whether you have 10 or 70 employees, we deliver enterprise-grade IT support scaled to your size and budget.",
    coverImage: "/images/solutions/managed-ict.jpg",
    images: ["/images/solutions/managed-ict.jpg"],
    techStack: [
      "Server Management",
      "Network Security",
      "24/7 Monitoring",
      "Cloud Infrastructure",
      "Backup & Recovery",
    ],
    features: [
      {
        title: "24/7 Monitoring & Alerting",
        description:
          "Round-the-clock visibility into your infrastructure with automated alerts and rapid incident response.",
      },
      {
        title: "Network Health Reviews",
        description:
          "Regular audits of your network performance, security posture, and configuration to prevent issues before they occur.",
      },
      {
        title: "Proactive Maintenance",
        description:
          "Scheduled patching, updates, and maintenance windows that keep systems secure without disrupting business hours.",
      },
      {
        title: "Strategic IT Planning",
        description:
          "Quarterly technology reviews aligned with your business goals, ensuring your IT roadmap supports growth.",
      },
      {
        title: "Active Cybersecurity Management",
        description:
          "Continuous threat monitoring, endpoint protection, and security policy enforcement across all devices.",
      },
      {
        title: "Fixed Monthly Pricing",
        description:
          "Predictable costs with no surprise bills. One monthly fee covers everything in your agreed service scope.",
      },
    ],
    benefits: [
      "Reduce IT downtime by up to 80%",
      "Access enterprise-grade support at SMB pricing",
      "Free your team to focus on core business",
      "Stay ahead of cyber threats with proactive protection",
      "Scale IT support as your business grows",
    ],
    link: "/solutions/managed-ict-services",
  },
  {
    slug: "virtual-cio",
    title: "Virtual CIO",
    subtitle: "Strategic IT leadership without the full-time cost",
    description:
      "Access experienced IT leadership to align technology with your business goals, manage vendor relationships, and guide digital transformation without hiring a full-time CIO.",
    longDescription:
      "A Virtual Chief Information Officer from EasyLink gives your business the strategic IT leadership it needs to grow — without the cost of a full-time executive. Our vCIO service bridges the gap between your business strategy and your technology decisions, ensuring every investment in IT delivers measurable value. From roadmap planning to vendor negotiations, we act as your trusted technology advisor.",
    coverImage: "/images/solutions/virtual-cio.png",
    images: ["/images/solutions/virtual-cio.png"],
    techStack: [
      "IT Strategy",
      "Technology Planning",
      "Vendor Management",
      "Digital Transformation",
      "Budget Planning",
    ],
    features: [
      {
        title: "IT Roadmap Development",
        description:
          "A clear, prioritised technology roadmap aligned with your 1, 3, and 5-year business objectives.",
      },
      {
        title: "Technology Alignment",
        description:
          "Ensuring every tool and system your business uses directly supports operational efficiency and growth.",
      },
      {
        title: "Vendor Management",
        description:
          "Negotiating and managing relationships with technology vendors to get the best value and service levels.",
      },
      {
        title: "Budget Planning & Optimisation",
        description:
          "Right-sizing your IT spend — eliminating waste, identifying savings, and planning future investments.",
      },
      {
        title: "Digital Transformation Guidance",
        description:
          "Leading your business through technology-driven change with minimal disruption and maximum impact.",
      },
      {
        title: "Board & Executive Reporting",
        description:
          "Clear, jargon-free technology reports for leadership that connect IT performance to business outcomes.",
      },
    ],
    benefits: [
      "Access C-level IT expertise at a fraction of the cost",
      "Make confident technology decisions with expert guidance",
      "Align IT investments with business strategy",
      "Reduce vendor costs through professional negotiation",
      "Drive digital transformation at your own pace",
    ],
    link: "/solutions/virtual-cio",
  },
  {
    slug: "helpdesk-support",
    title: "Helpdesk Support",
    subtitle: "Round-the-clock technical assistance for your team",
    description:
      "Professional helpdesk services providing immediate technical support via phone, email, and remote access. Our certified technicians resolve issues quickly to keep your business running.",
    longDescription:
      "EasyLink Helpdesk Support gives your team access to experienced IT technicians whenever they need help — by phone, email, or remote desktop session. Every ticket is tracked, prioritised, and resolved within agreed response times. Our helpdesk is powered by Freshdesk, giving you full visibility into every open and resolved issue. We handle everything from password resets to complex software troubleshooting.",
    coverImage: "/images/solutions/helpdesk.png",
    images: ["/images/solutions/helpdesk.png"],
    techStack: [
      "Remote Support",
      "Ticket Management",
      "Freshdesk",
      "User Training",
      "Issue Resolution",
    ],
    features: [
      {
        title: "Multi-Channel Support",
        description:
          "Reach our team by phone, email, Freshdesk tickets, or Twitter — whichever works best for your team.",
      },
      {
        title: "Remote Desktop Support",
        description:
          "Technicians connect directly to affected machines to diagnose and resolve issues in real time.",
      },
      {
        title: "Ticket Tracking & Visibility",
        description:
          "Every request is logged, tracked, and updated so you always know the status of any open issue.",
      },
      {
        title: "Priority Response SLAs",
        description:
          "Tiered response times based on severity — critical issues receive immediate attention, every time.",
      },
      {
        title: "User Training & Documentation",
        description:
          "We train your staff on common issues and provide self-service documentation to reduce repeat tickets.",
      },
      {
        title: "Escalation Management",
        description:
          "Complex issues escalate automatically to senior engineers — nothing falls through the cracks.",
      },
    ],
    benefits: [
      "Resolve IT issues faster with dedicated support",
      "Reduce productivity loss from technical problems",
      "Full ticket history and audit trail",
      "Staff training reduces repeat issues over time",
      "Enterprise helpdesk experience for every business size",
    ],
    link: "/solutions/helpdesk-support",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    subtitle: "Scalable cloud infrastructure and seamless migration",
    description:
      "Cloud strategy, migration, and management for AWS, Azure, and Google Cloud. Scale your infrastructure on-demand with enterprise-grade security and reliability.",
    longDescription:
      "Whether you are moving to the cloud for the first time or optimising an existing cloud environment, EasyLink manages the entire journey. We design, migrate, and manage cloud infrastructure that is secure, cost-efficient, and built to scale with your business. Our team holds expertise across the major cloud platforms and delivers solutions that reduce costs while improving reliability and performance.",
    coverImage: "/images/solutions/cloud.png",
    images: ["/images/solutions/cloud.png"],
    techStack: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Cloud Migration",
      "Cloud Security",
      "DevOps",
    ],
    features: [
      {
        title: "Cloud Strategy & Assessment",
        description:
          "An honest evaluation of your current infrastructure with a clear recommendation for the right cloud approach.",
      },
      {
        title: "Seamless Migration",
        description:
          "Zero-downtime migration planning and execution — your business stays running throughout the move.",
      },
      {
        title: "Multi-Cloud Management",
        description:
          "Unified management across AWS, Azure, and Google Cloud from a single point of contact.",
      },
      {
        title: "Cloud Security & Compliance",
        description:
          "Security architecture, access controls, and compliance management built into every deployment.",
      },
      {
        title: "Cost Optimisation",
        description:
          "Continuous monitoring of cloud spend with recommendations to eliminate waste and right-size resources.",
      },
      {
        title: "Backup & Disaster Recovery",
        description:
          "Cloud-native backup solutions and tested disaster recovery plans to protect your critical data.",
      },
    ],
    benefits: [
      "Scale resources up or down based on business demand",
      "Reduce capital expenditure on physical hardware",
      "Improve business continuity and uptime",
      "Access your data and applications from anywhere",
      "Enterprise-grade cloud security for every workload",
    ],
    link: "/solutions/cloud-solutions",
  },
  {
    slug: "data-protection",
    title: "Data Protection",
    subtitle: "Comprehensive data security, backup, and disaster recovery",
    description:
      "Enterprise-grade backup solutions, disaster recovery planning, and data protection strategies. Ensure business continuity with automated backups and rapid recovery.",
    longDescription:
      "Data is your most valuable business asset. EasyLink Data Protection as a Service ensures it is always secure, always backed up, and always recoverable. We implement automated backup schedules, test recovery procedures regularly, and provide full encryption for data at rest and in transit. From ransomware recovery to compliance requirements, we protect your business from data loss in every form.",
    coverImage: "/images/solutions/data-protection.png",
    images: ["/images/solutions/data-protection.png"],
    techStack: [
      "Automated Backup",
      "Disaster Recovery",
      "Data Encryption",
      "Compliance",
      "Business Continuity",
    ],
    features: [
      {
        title: "Automated Daily Backups",
        description:
          "Scheduled backups run automatically with alerts for any failures — no manual intervention required.",
      },
      {
        title: "Offsite & Cloud Storage",
        description:
          "Backups stored in secure, geographically separate locations to protect against local disasters.",
      },
      {
        title: "Rapid Recovery Testing",
        description:
          "Regular recovery drills to verify that your data can be restored quickly when it matters most.",
      },
      {
        title: "End-to-End Encryption",
        description:
          "All backup data is encrypted in transit and at rest using industry-standard protocols.",
      },
      {
        title: "Ransomware Protection",
        description:
          "Immutable backup copies that cannot be encrypted or deleted by ransomware attacks.",
      },
      {
        title: "Compliance Management",
        description:
          "Backup policies aligned with industry regulations including data retention and audit requirements.",
      },
    ],
    benefits: [
      "Recover from data loss in hours, not days",
      "Protect against ransomware and cyber attacks",
      "Meet regulatory data retention requirements",
      "Never lose critical business data again",
      "Peace of mind with tested recovery procedures",
    ],
    link: "/solutions/data-protection",
  },
  {
    slug: "it-outsourcing",
    title: "IT Outsourcing",
    subtitle: "A complete IT department delivered as a service",
    description:
      "Fully outsourced IT including staff augmentation, project management, and technical expertise. Scale your IT capabilities without the overhead of in-house hiring.",
    longDescription:
      "IT Outsourcing from EasyLink gives your business access to a full team of IT professionals without the cost and complexity of building one internally. Whether you need to augment your existing team, manage a specific project, or outsource your entire IT function, we provide the expertise and flexibility to meet your needs. Our model scales with your business so you always have the right level of support.",
    coverImage: "/images/solutions/it-outsourcing.png",
    images: ["/images/solutions/it-outsourcing.png"],

    techStack: [
      "Staff Augmentation",
      "Project Management",
      "Technical Consulting",
      "Quality Assurance",
      "Training",
    ],
    features: [
      {
        title: "Staff Augmentation",
        description:
          "Embed experienced IT professionals into your team on a temporary or permanent basis to fill skill gaps.",
      },
      {
        title: "Full IT Department Management",
        description:
          "We manage your entire IT function — people, processes, and technology — as a single managed service.",
      },
      {
        title: "Project-Based Delivery",
        description:
          "Dedicated project teams for specific initiatives such as system rollouts, migrations, or infrastructure upgrades.",
      },
      {
        title: "Flexible Engagement Models",
        description:
          "Choose from hourly, monthly retainer, or project-based pricing based on what works for your business.",
      },
      {
        title: "Knowledge Transfer & Training",
        description:
          "We document everything and train your staff so institutional knowledge stays within your organisation.",
      },
      {
        title: "Scalable Resource Allocation",
        description:
          "Increase or decrease the level of support as your business demands change — no long-term lock-in.",
      },
    ],
    benefits: [
      "Access specialist IT skills without full-time hiring costs",
      "Scale technical resources up or down on demand",
      "Reduce recruitment, onboarding, and training overhead",
      "Maintain operational continuity during staff transitions",
      "Focus internal resources on strategic business priorities",
    ],
    link: "/solutions/it-outsourcing",
  },
];

export function getAllSolutions(): Solution[] {
  return SOLUTIONS;
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
