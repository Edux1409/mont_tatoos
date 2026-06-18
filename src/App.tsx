import { ComponentPropsWithoutRef, ElementType, ReactNode, useEffect, useRef, useState } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';

const portraitUrl =
  '/pictures_tatoos/perfil2.png';

const marqueeImages = [
  '/pictures_tatoos/tatoo1.jpeg',
  '/pictures_tatoos/tatoo2.jpeg',
  '/pictures_tatoos/tatoo3.jpeg',
  '/pictures_tatoos/tatoo4.jpeg',
  '/pictures_tatoos/tatoo5.jpeg',
  '/pictures_tatoos/tatoo6.jpeg',
  '/pictures_tatoos/tatoo7.jpeg',
  '/pictures_tatoos/tatoo8.jpeg',
  '/pictures_tatoos/tatoo9.jpeg',
  '/pictures_tatoos/tatoo1.jpeg',
  '/pictures_tatoos/tatoo2.jpeg',
  '/pictures_tatoos/tatoo3.jpeg',
  '/pictures_tatoos/tatoo4.jpeg',
  '/pictures_tatoos/tatoo5.jpeg',
  '/pictures_tatoos/tatoo6.jpeg',
  '/pictures_tatoos/tatoo7.jpeg',
  '/pictures_tatoos/tatoo8.jpeg',
  '/pictures_tatoos/tatoo9.jpeg',
  '/pictures_tatoos/tatoo1.jpeg',
  '/pictures_tatoos/tatoo2.jpeg',
  '/pictures_tatoos/tatoo3.jpeg',
];

const decorativeImages = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
];

const services = [
  {
    number: '01',
    name: 'Tatuajes Personalizados',
    description: 'Creación de diseños de tatuajes detallados y personalizados adaptados a tus ideas específicas y ubicación corporal.',
  },
  {
    number: '02',
    name: 'Línea Fina y Blackwork',
    description: 'Trabajo de línea de alta calidad, preciso y sombreado que exhibe hermosa artesanía y cicatriza perfectamente.',
  },
  {
    number: '03',
    name: 'Cubrimiento de Tatuajes',
    description: 'Transformación de tatuajes antiguos o no deseados en nuevas piezas hermosas de arte con diseño estratégico y ubicación.',
  },
  {
    number: '04',
    name: 'Tatuajes Flash',
    description: 'Una selección curada de piezas prediseñadas y listas para tatuar disponibles con tarifas especiales de promoción.',
  },
  {
    number: '05',
    name: 'Consulta de Cuidados',
    description: 'Orientación completa sobre cómo cuidar tu nuevo tatuaje para asegurar que cicatrice hermosamente y dure toda la vida.',
  },
];

const projects = [
  {
    number: '01',
    category: 'Trabajo de Cliente',
    name: 'Manga Floral',
    images: [
      '/pictures_tatoos/tatoo1.jpeg',
      '/pictures_tatoos/tatoo2.jpeg',
      '/pictures_tatoos/tatoo3.jpeg',
    ],
  },
  {
    number: '02',
    category: 'Diseño Personalizado',
    name: 'Pieza Geométrica',
    images: [
      '/pictures_tatoos/tatoo4.jpeg',
      '/pictures_tatoos/tatoo5.jpeg',
      '/pictures_tatoos/tatoo6.jpeg',
    ],
  },
  {
    number: '03',
    category: 'Promoción Flash',
    name: 'Línea Minimalista',
    images: [
      '/pictures_tatoos/tatoo7.jpeg',
      '/pictures_tatoos/tatoo8.jpeg',
      '/pictures_tatoos/tatoo9.jpeg',
    ],
  },
];

type FadeInProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

function FadeIn<T extends ElementType = 'div'>({
  as,
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  ...props
}: FadeInProps<T>) {
  const MotionElement = motion.create((as || 'div') as ElementType);

  return (
    <MotionElement
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: 'translate3d(0, 0, 0)',
    transition: inactiveTransition,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const isActive =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!isActive) {
        setStyle({
          transform: 'translate3d(0, 0, 0)',
          transition: inactiveTransition,
        });
        return;
      }

      const x = (event.clientX - (rect.left + rect.width / 2)) / strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) / strength;

      setStyle({
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: activeTransition,
      });
    };

    const handleMouseLeave = () => {
      setStyle({
        transform: 'translate3d(0, 0, 0)',
        transition: inactiveTransition,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeTransition, inactiveTransition, padding, strength]);

  return (
    <div ref={ref} className={className} style={{ ...style, willChange: 'transform' }}>
      {children}
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/523312737977"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-white outline outline-2 outline-white sm:px-8 sm:py-3 sm:text-sm"
      style={{
        background: 'linear-gradient(123deg, #128C7E 7%, #25D366 37%, #128C7E 72%, #075E54 100%)',
        boxShadow: '0px 4px 4px rgba(37, 211, 102, 0.25), 4px 4px 12px #128C7E inset',
        outlineOffset: '-3px',
      }}
    >
      <MessageCircle aria-hidden className="h-4 w-4" />
      WhatsApp
    </a>
  );
}

function InstagramButton() {
  return (
    <a
      href="https://instagram.com/mont._tattoo"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-sm"
    >
      <Instagram aria-hidden className="h-4 w-4" />
      Instagram
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a
      href="https://instagram.com/mont._tattoo"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Ver Tatuaje
      <ArrowUpRight aria-hidden className="h-4 w-4" />
    </a>
  );
}

function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-30 flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        {['Nosotros', 'Promociones', 'Trabajos', 'Contacto'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-').replace('á', 'a').replace('ó', 'o')}`} className="transition-opacity duration-200 hover:opacity-70">
            {item}
          </a>
        ))}
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="relative z-20 mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <h1 className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Mont Tattoo
        </h1>
      </FadeIn>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img src={portraitUrl} alt="Mont Ink portrait" className="w-full object-contain" />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-30 mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[200px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[260px] md:max-w-[320px]"
        >
          Estudio de tatuajes especializado en diseños personalizados. Ubicado en Zapopan, Jalisco, México. ¡Pregunta sobre nuestras promociones!
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <WhatsAppButton />
          <InstagramButton />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeRow({ images, direction }: { images: string[]; direction: 'right' | 'left' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const repeatedImages = [...images, ...images, ...images];

  useEffect(() => {
    const updateOffset = () => {
      if (!ref.current) {
        return;
      }

      const sectionTop = ref.current.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });
    window.addEventListener('resize', updateOffset);

    return () => {
      window.removeEventListener('scroll', updateOffset);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  const translateX = direction === 'right' ? offset - 200 : -(offset - 200);

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="flex gap-3" style={{ transform: `translateX(${translateX}px)`, willChange: 'transform' }}>
        {repeatedImages.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            loading="lazy"
            className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}

function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <MarqueeRow images={marqueeImages.slice(0, 11)} direction="right" />
        <MarqueeRow images={marqueeImages.slice(11)} direction="left" />
      </div>
    </section>
  );
}

function AnimatedCharacter({
  char,
  progress,
  start,
  end,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00a0' : char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char === ' ' ? '\u00a0' : char}
      </motion.span>
    </span>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p
      ref={ref}
      className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
    >
      {text.split('').map((char, index, chars) => {
        const start = index / chars.length;
        const end = Math.min(start + 0.18, 1);

        return <AnimatedCharacter key={`${char}-${index}`} char={char} progress={scrollYProgress} start={start} end={end} />;
      })}
    </p>
  );
}

function AboutSection() {
  return (
    <section id="nosotros" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      {decorativeImages.map((image) => (
        <FadeIn
          key={image.src}
          delay={image.delay}
          x={image.x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute z-0 opacity-70 ${image.className}`}
        >
          <img src={image.src} alt="" loading="lazy" className="w-full object-contain" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            Acerca de Nosotros
          </h2>
        </FadeIn>

        <AnimatedText text="¡Hola! Soy Monserrat. Con base en Zapopan, Jalisco, México. Me especializo en diseños personalizados que se adapten a tu estilo único. Contamos con increíbles promociones disponibles, así que ¡no dudes en contactarme! Construyamos algo increíble juntos en tu piel." />

        <div className="h-16 sm:h-20 md:h-24" />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="promociones" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28">
          Servicios
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className="flex gap-6 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-10 sm:py-10 md:gap-16 md:py-12"
          >
            <span className="min-w-[86px] text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C] sm:min-w-[140px] md:min-w-[190px]">
              {service.number}
            </span>
            <div className="flex flex-col justify-center gap-3">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-[#0C0C0C]">{service.name}</h3>
              <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C] opacity-60">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[number];
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh]">
      <motion.article
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
        className="sticky rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:top-32 md:rounded-[60px] md:p-8"
      >
        <div className="mb-6 flex flex-col gap-5 md:mb-8 md:flex-row md:items-center md:justify-between">
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-end">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#D7E2EA]">{project.number}</span>
            <div className="pb-2">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70 sm:text-sm">{project.category}</p>
              <h3 className="text-[clamp(1.7rem,4vw,4.5rem)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="grid gap-4 md:grid-cols-[40fr_60fr]">
          <div className="grid gap-4">
            <img
              src={project.images[0]}
              alt={`${project.name} detail 1`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} detail 2`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <img
            src={project.images[2]}
            alt={project.name}
            loading="lazy"
            className="h-[clamp(310px,40vw,586px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="trabajos" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Nuestros Trabajos
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
