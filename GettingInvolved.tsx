import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
import passImage from "figma:asset/5124c2b701a56809f511cd76998692824813e116.png";
import lectureImage from "figma:asset/7bd2822ce97d2ec5e9c8d339fe743cf2ddc6baea.png";

interface InvolvementCard {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: {
    text: string;
    url: string;
  };
}

const involvementData: InvolvementCard[] = [
  {
    id: 1,
    title: "QMUL Library Services",
    description: "Contributing to academic development through PASS (Peer Assisted Study Sessions) at Queen Mary University of London's Library Services. Supporting students with academic skills, research methodologies, and study techniques.",
    image: passImage,
    link: {
      text: "Click Here",
      url: "https://www.qmul.ac.uk/library/academic-skills/one-to-one-support/library-drop-ins/",
    },
  },
  {
    id: 2,
    title: "PASS Promotion & Outreach",
    description: "Delivering lecture shout-outs to promote PASS sessions in front of the entire first-year engineering cohort across all disciplines. Engaging with hundreds of students to raise awareness of academic support resources and encourage peer learning.",
    image: lectureImage,
    link: {
      text: "Click Here",
      url: "https://www.sems.qmul.ac.uk/edi/initiatives/",
    },
  },
];

// Separate component for individual cards to avoid hooks in loops
function InvolvementCardItem({ 
  card, 
  index, 
  scrollYProgress 
}: { 
  card: InvolvementCard; 
  index: number; 
  scrollYProgress: MotionValue<number>;
}) {
  const cardProgress = useTransform(
    scrollYProgress,
    [index / involvementData.length, (index + 1) / involvementData.length],
    [0, 1]
  );

  const opacity = useTransform(cardProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(cardProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ opacity, scale }}
        className="grid md:grid-cols-2 gap-12 items-center w-full"
      >
        {/* Photo Card */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-border group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
            <div
              className="text-xs tracking-[0.2em] uppercase opacity-70 mb-1"
              style={{ fontFamily: "var(--font-heading)", color: "#fff" }}
            >
              Involvement
            </div>
            <h3
              className="text-lg"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#fff" }}
            >
              {card.title}
            </h3>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6">
          <div
            className="text-xs tracking-[0.2em] uppercase opacity-40"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            0{card.id}
          </div>
          <h3
            className="text-3xl"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            {card.title}
          </h3>
          <p
            className="text-base opacity-70 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {card.description}
          </p>
          {card.link && (
            <a
              href={card.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors group"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              <span>{card.link.text}</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function GettingInvolved() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="getting-involved"
      ref={containerRef}
      className="relative py-8 px-6 md:px-12 lg:px-24"
      style={{ 
        minHeight: `${involvementData.length * 100}vh`
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>

      {/* Section Header - Sticky at top */}
      <div className="max-w-6xl mx-auto sticky top-16 z-30 bg-background/95 backdrop-blur-md py-4 px-6 rounded-lg shadow-lg mb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-xs tracking-[0.3em] uppercase opacity-50 mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Community Engagement
          </div>
          <h2
            className="mb-2"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
          >
            Getting Involved
          </h2>
          <p
            className="text-sm max-w-2xl opacity-70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contributing to academic communities and supporting knowledge sharing beyond research and technical work.
          </p>
        </motion.div>
      </div>

      {/* Sticky Photo Card Section */}
      <div className="max-w-6xl mx-auto relative" style={{ paddingTop: "2rem" }}>
        {involvementData.map((card, index) => (
          <InvolvementCardItem 
            key={card.id} 
            card={card} 
            index={index} 
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}