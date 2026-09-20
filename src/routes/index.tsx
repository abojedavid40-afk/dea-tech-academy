import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BarChart3, Check, Code2, Menu, Palette, Play, ShieldCheck, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import softwareImage from "@/assets/course-software.jpg";
import dataImage from "@/assets/course-data.jpg";
import cyberImage from "@/assets/course-cybersecurity.jpg";
import designImage from "@/assets/course-design.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "DEA TECH — Learn In-Demand Tech Skills" },
    { name: "description", content: "Practical software development, data analysis, cybersecurity and graphic design courses from ₦20,000." },
    { property: "og:title", content: "DEA TECH — Build skills that move you forward" },
    { property: "og:description", content: "Practical tech training with expert mentors and portfolio-ready projects." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const courses = [
  { title: "Software Development", category: "Development", price: "₦50,000", duration: "12 weeks", level: "Beginner friendly", image: softwareImage, icon: Code2, summary: "Build fast, responsive web applications from idea to deployment.", skills: ["HTML, CSS & JavaScript", "React fundamentals", "Git & deployment"] },
  { title: "Data Analysis", category: "Data", price: "₦40,000", duration: "10 weeks", level: "Beginner friendly", image: dataImage, icon: BarChart3, summary: "Turn raw information into clear insights that guide real decisions.", skills: ["Excel & SQL", "Power BI dashboards", "Data storytelling"] },
  { title: "Cybersecurity", category: "Security", price: "₦45,000", duration: "12 weeks", level: "Intermediate", image: cyberImage, icon: ShieldCheck, summary: "Learn to identify threats and protect modern digital systems.", skills: ["Network security", "Ethical hacking basics", "Threat assessment"] },
  { title: "Graphic Design", category: "Design", price: "₦20,000", duration: "8 weeks", level: "Beginner friendly", image: designImage, icon: Palette, summary: "Create memorable visual identities, social graphics and campaigns.", skills: ["Design foundations", "Brand identity", "Portfolio projects"] },
];

function Index() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleCourses = filter === "All" ? courses : courses.filter((course) => course.category === filter);

  const scrollToCourses = () => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="DEA TECH home">
            <span className="grid size-9 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">D</span>
            <span className="font-display text-lg font-bold">DEA <span className="text-accent">TECH</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#courses">Courses</a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#why-us">Why DEA</a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#how-it-works">How it works</a>
          </nav>
          <div className="hidden md:block"><Button variant="hero" onClick={scrollToCourses}>Explore courses <ArrowRight /></Button></div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 md:hidden"><div className="flex flex-col gap-4"><a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a><a href="#why-us" onClick={() => setMenuOpen(false)}>Why DEA</a><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a></div></nav>}
      </header>

      <main id="top">
        <section className="tech-grid relative min-h-[92vh] border-b border-border pt-18">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,var(--brand-soft),transparent_36%)] opacity-60" />
          <div className="relative mx-auto grid min-h-[calc(92vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
            <div className="animate-rise max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs font-semibold text-accent"><Sparkles className="size-3.5" /> New cohorts now enrolling</div>
              <h1 className="text-balance text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">Build skills that <span className="text-accent">move you forward.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Practical tech education built for ambitious learners. Learn from working experts, build real projects and become job-ready.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button variant="hero" size="xl" onClick={scrollToCourses}>Find your course <ArrowRight /></Button><Button variant="glass" size="xl" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}><Play /> See how it works</Button></div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Check className="size-4 text-accent" /> Expert-led classes</span><span className="flex items-center gap-2"><Check className="size-4 text-accent" /> Portfolio projects</span><span className="flex items-center gap-2"><Check className="size-4 text-accent" /> Flexible learning</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl"><img src={softwareImage} alt="DEA TECH software development learner" width={1200} height={800} className="aspect-[4/3] w-full object-cover" /><div className="absolute inset-x-5 bottom-5 rounded-md border border-border bg-background/85 p-4 backdrop-blur-md"><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase text-accent">Most popular</p><p className="mt-1 font-display font-semibold">Software Development</p></div><span className="font-display text-xl font-bold">₦50,000</span></div></div></div>
              <div className="absolute -right-5 -top-5 hidden rounded-md border border-border bg-secondary p-4 shadow-xl sm:block"><p className="font-display text-2xl font-bold text-accent">4.9/5</p><p className="text-xs text-muted-foreground">learner rating</p></div>
            </div>
          </div>
        </section>

        <section id="courses" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase text-accent">Choose your path</p><h2 className="mt-3 text-3xl font-bold sm:text-5xl">Skills for the future of work</h2><p className="mt-4 max-w-xl text-muted-foreground">Focused, practical programmes designed around the skills employers need today.</p></div><div className="flex flex-wrap gap-2" aria-label="Filter courses">{["All", "Development", "Data", "Security", "Design"].map((item) => <Button key={item} variant={filter === item ? "hero" : "glass"} size="sm" onClick={() => setFilter(item)}>{item}</Button>)}</div></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{visibleCourses.map((course) => { const Icon = course.icon; return <article key={course.title} className="group overflow-hidden rounded-lg border border-border bg-card transition-transform duration-300 hover:-translate-y-1"><div className="relative overflow-hidden"><img src={course.image} alt={`${course.title} student`} loading="lazy" width={1200} height={800} className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold backdrop-blur">{course.category}</span></div><div className="p-6"><div className="flex items-start justify-between gap-5"><div><Icon className="mb-4 size-6 text-accent" /><h3 className="text-xl font-semibold">{course.title}</h3></div><span className="whitespace-nowrap font-display text-xl font-bold text-accent">{course.price}</span></div><p className="mt-3 text-sm leading-6 text-muted-foreground">{course.summary}</p><div className="mt-5 flex gap-4 border-y border-border py-3 text-xs text-muted-foreground"><span>{course.duration}</span><span>•</span><span>{course.level}</span></div><ul className="mt-5 grid gap-2">{course.skills.map((skill) => <li key={skill} className="flex items-center gap-2 text-sm"><Check className="size-4 text-accent" />{skill}</li>)}</ul><Button variant="glass" className="mt-6 w-full" onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}>View course <ArrowRight /></Button></div></article>; })}</div>
        </section>

        <section id="why-us" className="border-y border-border bg-card/50"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-sm font-semibold uppercase text-accent">Why DEA TECH</p><h2 className="mt-3 text-3xl font-bold sm:text-5xl">Learn by doing, not just watching.</h2><p className="mt-5 leading-7 text-muted-foreground">Every class combines clear guidance with practical work, helping you build confidence and a portfolio you can show.</p></div><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{[["01","Real projects","Build work that solves realistic business problems."],["02","Working mentors","Learn directly from people active in the industry."],["03","Small cohorts","Get feedback, ask questions and stay accountable."],["04","Career direction","Know what to learn next and how to show your skills."]].map(([number,title,copy]) => <div key={number} className="bg-background p-7"><span className="text-xs font-bold text-accent">{number}</span><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div>)}</div></div></section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div className="overflow-hidden rounded-lg border border-border"><img src={dataImage} alt="Data analysis student learning at DEA TECH" loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full object-cover" /></div><div><p className="text-sm font-semibold uppercase text-accent">A clear route forward</p><h2 className="mt-3 text-3xl font-bold sm:text-5xl">From first lesson to finished portfolio.</h2><div className="mt-8 space-y-7">{[["Pick your programme","Choose the skill that matches your goal and current experience."],["Learn with support","Follow live practical sessions and get direct mentor feedback."],["Build and showcase","Complete projects that prove what you can do."]].map(([title,copy], index) => <div key={title} className="flex gap-5"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{index + 1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p></div></div>)}</div></div></div></section>

        <section id="enroll" className="border-t border-border"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="relative overflow-hidden rounded-lg bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12"><div className="relative z-10 mx-auto max-w-2xl"><p className="text-sm font-bold uppercase">Your next chapter starts here</p><h2 className="mt-3 text-3xl font-bold sm:text-5xl">Ready to build your tech future?</h2><p className="mt-4 text-primary-foreground/80">Choose a programme from ₦20,000 and start learning skills that create real opportunities.</p><Button variant="glass" size="xl" className="mt-8 bg-background text-foreground hover:bg-background/90" onClick={scrollToCourses}>Choose a course <ArrowRight /></Button></div></div></div></section>
      </main>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center lg:px-8"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-md bg-primary font-display font-bold text-primary-foreground">D</span><span className="font-display font-bold text-foreground">DEA TECH</span></div><p>Practical skills. Real possibilities.</p><p>© 2026 DEA TECH</p></div></footer>
    </div>
  );
}
