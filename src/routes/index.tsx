import { createFileRoute } from "@tanstack/react-router";
import { SkyBackdrop } from "@/components/SkyBackdrop";
import { CourseFinder } from "@/components/CourseFinder";
import { courses, reviews, placedAt, stats } from "@/data/calibre";
import heroImg from "@/assets/aviation-hero.jpg";
import terminalImg from "@/assets/aviation-terminal.jpg";
import { Plane, MapPin, Phone, Mail, Clock, Star, ArrowRight, ShieldCheck, GraduationCap, Briefcase, Wallet, X, CheckCircle, User, Building } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calibre Aviation Academy — Job-ready in 6 months. Hyderabad." },
      {
        name: "description",
        content: "Industry-aligned Cabin Crew, Ground Handling, Air Ticketing & Passenger Service training in Hyderabad. Real placements at Rajiv Gandhi International Airport. EMI options, transparent fees.",
      },
      { property: "og:title", content: "Calibre Aviation Academy — Hyderabad" },
      { property: "og:description", content: "Launch your aviation career in 6 months. Real graduates. Real placements. Real airports." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

// ✅ USING THE WORKING ENDPOINT (same as your navbar)
const FORMZERO_ENDPOINT = "https://calibre-forms1.in0you2005.workers.dev/api/forms/contact-form/submissions";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<'form' | 'success' | 'error'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [mainFormData, setMainFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  
  const [modalFormData, setModalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleMainFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setMainFormData({ ...mainFormData, [e.target.name]: e.target.value });
  };

  const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setModalFormData({ ...modalFormData, [e.target.name]: e.target.value });
  };

  const handleMainFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMZERO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: mainFormData.name,
          email: mainFormData.email,
          phone: mainFormData.phone,
          course: mainFormData.course,
          message: mainFormData.message,
          _form_name: "Main Contact Form",
          _timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert("✅ Enquiry submitted successfully! We'll contact you within 24 hours.");
        setMainFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          course: '', 
          message: '' 
        });
      } else {
        alert("❌ Submission failed. Please try again or call us directly.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormState('form');

    try {
      const response = await fetch(FORMZERO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: modalFormData.name,
          email: modalFormData.email,
          phone: modalFormData.phone,
          course: modalFormData.course,
          message: modalFormData.message,
          _form_name: "Modal Contact Form",
          _timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setFormState('success');
        setModalFormData({ name: '', email: '', phone: '', course: '', message: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setFormState('form');
        }, 3000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('form'), 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('error');
      setTimeout(() => setFormState('form'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setFormState('form');
    setModalFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SkyBackdrop />
      <Nav onEnquireClick={() => {
        resetModal();
        setIsModalOpen(true);
      }} />
      <Hero />
      <Ticker />
      <Stats />
      <CourseFinder />
      <Courses />
      <Placements />
      <Ambience />
      <Testimonials />
      <Visit />
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Branches</h2>
            <p className="text-gray-400 text-lg">Visit our aviation academy branches across India</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3800.3824903009745!2d83.30642399999999!3d17.726607999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQzJzM1LjgiTiA4M8KwMTgnMjMuMSJF!5e0!3m2!1sen!2sin!4v1778486299371!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Visakhapatnam Branch</h3>
                <p className="text-gray-400">Professional aviation training centre in Visakhapatnam.</p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
              <iframe
                src="https://www.google.com/maps?q=Calibre+Aviation+Academy+Rajahmundry&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Rajahmundry Branch</h3>
                <p className="text-gray-400">Professional aviation training centre in Rajahmundry.</p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
              <iframe
                src="https://www.google.com/maps?q=Calibre+Aviation+Academy+Visakhapatnam&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Vijaywada Branch</h3>
                <p className="text-gray-400">Aviation academy branch serving Vizag students.</p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
              <iframe
                src="https://www.google.com/maps?q=Calibre+Aviation+Academy+Hyderabad&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Hyderabad Branch</h3>
                <p className="text-gray-400">Main aviation training branch near Hyderabad airport.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="enquire-section" className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Enquire Now</h2>
            <p className="text-gray-400 text-lg">Start your aviation career journey today.</p>
          </div>
          <form onSubmit={handleMainFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
              <input 
                type="text" 
                name="name" 
                value={mainFormData.name}
                onChange={handleMainFormChange}
                placeholder="Your Name" 
                required 
                className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Email *</label>
              <input 
                type="email" 
                name="email" 
                value={mainFormData.email}
                onChange={handleMainFormChange}
                placeholder="Your Email" 
                required 
                className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={mainFormData.phone}
                onChange={handleMainFormChange}
                placeholder="Phone Number" 
                className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Course Interested In</label>
              <select 
                name="course" 
                value={mainFormData.course}
                onChange={handleMainFormChange}
                className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
              >
                <option value="">Select a course</option>
                <option value="Cabin Crew">Cabin Crew</option>
                <option value="Ground Handling">Ground Handling</option>
                <option value="Air Ticketing">Air Ticketing</option>
                <option value="Passenger Service Agent">Passenger Service Agent</option>
                <option value="Pilot Training">Pilot Training</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea 
                name="message" 
                value={mainFormData.message}
                onChange={handleMainFormChange}
                placeholder="Your Message" 
                rows={5} 
                className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-yellow-500 text-black font-bold py-4 hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>
      
      <Footer />

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => {
            setIsModalOpen(false);
            setFormState('form');
          }}
        >
          <div
            className="relative w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-orange-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsModalOpen(false);
                setFormState('form');
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition z-10"
              aria-label="Close modal"
            >
              <X size={14} className="text-gray-600 sm:size-5" />
            </button>
            <div className="p-6 sm:p-8">
              {formState === 'form' && (
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      Enquire Now
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Fill out the form below. Our team will respond within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleModalSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={modalFormData.name}
                          onChange={handleModalInputChange}
                          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={modalFormData.email}
                          onChange={handleModalInputChange}
                          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Building size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={modalFormData.phone}
                          onChange={handleModalInputChange}
                          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Course Interested In
                      </label>
                      <select
                        name="course"
                        value={modalFormData.course}
                        onChange={handleModalInputChange}
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                      >
                        <option value="">Select a course</option>
                        <option value="Cabin Crew">Cabin Crew</option>
                        <option value="Ground Handling">Ground Handling</option>
                        <option value="Air Ticketing">Air Ticketing</option>
                        <option value="Passenger Service Agent">Passenger Service Agent</option>
                        <option value="Pilot Training">Pilot Training</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={modalFormData.message}
                        onChange={handleModalInputChange}
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none"
                        placeholder="Tell us about your career goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                      {!isSubmitting && <ArrowRight size={16} />}
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                      We will respond within 24 hours.
                    </p>
                  </form>
                </div>
              )}

              {formState === 'success' && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Enquiry Submitted
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Thanks for reaching out! Our team will contact you within 24 hours.
                  </p>
                </div>
              )}

              {formState === 'error' && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Submission Failed
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Something went wrong. Please try again or call us directly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Nav({ onEnquireClick }: { onEnquireClick: () => void }) {
  const links = [
    { id: "finder", label: "Find your course" },
    { id: "courses", label: "Courses" },
    { id: "placements", label: "Placements" },
    { id: "testimonials", label: "Reviews" },
    { id: "visit", label: "Visit" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full gradient-sky text-primary-foreground">
            <Plane className="h-4 w-4 -rotate-45" />
          </span>
          <span className="font-display text-2xl tracking-wider">CALIBRE</span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hidden sm:inline">Aviation Academy</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="hover:text-primary transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onEnquireClick}
          className="rounded-full gradient-gold text-accent-foreground text-sm font-semibold px-4 py-2 shadow-gold hover:opacity-90 transition animate-pulse-ring"
        >
          Enquire now
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative animate-reveal">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary bg-primary/5 border border-primary/15 px-3 py-1 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" /> Now boarding · Batch 2026
          </span>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mt-5 text-balance">
            Your <span className="text-gradient-gold">aviation career</span>.
            <br />
            Cleared for take-off in <span className="text-gradient-sky">6 months</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Industry-aligned training. Real ex-airline faculty. Transparent fees, EMI options, and graduates working at Rajiv Gandhi International Airport — not just promises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#finder" className="inline-flex items-center gap-2 rounded-full gradient-sky text-primary-foreground px-6 py-3 font-semibold shadow-sky hover:opacity-90 transition">
              Find my course <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#visit" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold hover:bg-accent hover:text-accent-foreground transition">
              Book a campus visit
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">4.9★</strong> from 500+ graduates · placed across India
            </span>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-sky">
            <img src={heroImg} alt="Commercial airliner taking off into a golden sunrise" className="w-full h-[420px] md:h-[560px] object-cover" width={1600} height={1100} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-cloud font-mono text-[11px] uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent animate-blink" /> LIVE · HYD 17R</span>
              <span>EST. ARRIVAL · YOUR FUTURE</span>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-1 animate-runway" />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border border-border rounded-2xl shadow-soft p-4 max-w-[260px] animate-float-slow">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 rounded-full bg-primary/10 grid place-items-center">
                <span className="absolute inset-0 rounded-full border border-primary/40 animate-radar" />
                <Plane className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-display text-lg leading-none">Next batch</p>
                <p className="text-xs text-muted-foreground">Seats filling — 14 left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "RGIA Hyderabad", "IndiGo", "Air India", "Vistara", "Akasa Air", "SpiceJet",
    "Bangalore BLR", "Delhi DEL", "Mumbai BOM", "Cochin COK",
  ];
  const list = [...items, ...items, ...items];
  return (
    <div className="relative border-y border-border/60 bg-primary text-primary-foreground overflow-hidden ticker-mask">
      <div className="flex gap-12 whitespace-nowrap py-4 animate-marquee w-max">
        {list.map((w, i) => (
          <span key={i} className="font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-12 opacity-90">
            <Plane className="h-3.5 w-3.5 -rotate-45" /> {w}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-card border border-border p-6 text-center hover:shadow-soft transition">
            <p className="font-display text-5xl md:text-6xl text-gradient-sky">{s.num}</p>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Courses() {
  const perks = [
    { icon: ShieldCheck, label: "Placement assistance" },
    { icon: Wallet, label: "EMI options" },
    { icon: GraduationCap, label: "Industry faculty" },
    { icon: Briefcase, label: "Job-ready in 6 months" },
  ];
  return (
    <section id="courses" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary bg-primary/5 border border-primary/15 px-3 py-1 rounded-full">
              <Plane className="h-3.5 w-3.5 -rotate-45" /> Programmes
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-3 text-balance">Pick your runway.</h2>
          </div>
          <p className="md:max-w-md text-muted-foreground">
            Four focused programmes. Each designed with hiring partners — so when you finish, you don't apply for jobs, jobs apply for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((c, i) => (
            <article key={c.slug} className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-sky transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="grid sm:grid-cols-5">
                <div className="relative sm:col-span-2 h-56 sm:h-auto overflow-hidden">
                  <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest bg-card/90 backdrop-blur px-2 py-1 rounded">{c.duration}</span>
                </div>
                <div className="sm:col-span-3 p-6">
                  <h3 className="font-display text-3xl">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.tagline}</p>
                  <ul className="mt-4 space-y-1.5">
                    {c.modules.slice(0, 4).map((m) => (
                      <li key={m} className="text-sm flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" /> {m}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary font-mono">EMI</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary font-mono">Placement</span>
                    </div>
                    <a href="#enquire" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {perks.map((p) => (
            <div key={p.label} className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3">
              <p.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Placements() {
  return (
    <section id="placements" className="relative py-24 px-6 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-runway opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
            Now boarding for life
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 text-balance">Real students. Real airports.</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
            Every name below cleared a Calibre programme and walked into a uniform. Your name belongs on this list next.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {placedAt.map((p, i) => (
            <div key={p.name} className="group relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur p-5 hover:bg-primary-foreground/10 transition" style={{ animationDelay: `${i * 50}ms` }}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">PLACED</span>
                <Plane className="h-3.5 w-3.5 text-accent -rotate-45" />
              </div>
              <p className="font-display text-2xl mt-3">{p.name}</p>
              <p className="text-xs text-primary-foreground/70 mt-1">{p.role}</p>
              <p className="text-xs text-primary-foreground/50 mt-3 border-t border-primary-foreground/10 pt-3">{p.airport}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ambience() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative animate-reveal">
          <div className="rounded-3xl overflow-hidden shadow-sky">
            <img src={terminalImg} alt="Modern airport terminal at golden hour with airliner outside" loading="lazy" className="w-full h-[480px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full blur-3xl gradient-gold opacity-50" />
        </div>
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary bg-primary/5 border border-primary/15 px-3 py-1 rounded-full">
            Why Calibre
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-balance">
            We don't sell dreams.
            <br />
            <span className="text-gradient-sky">We hand you the boarding pass.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Six months. Real ex-airline faculty. Live mock interviews. Grooming, communication, GDS systems, ramp safety — taught the way the airport actually operates.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Transparent fees", d: "No hidden charges. EMI options on every programme." },
              { t: "Industry faculty", d: "Trainers who've worked the apron, the cabin and the counter." },
              { t: "Placement support", d: "Resume, mock interviews, grooming and direct hiring drives." },
              { t: "Soft skills", d: "English, etiquette, confidence — the things airlines actually hire for." },
            ].map((it) => (
              <li key={it.t} className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition">
                <h4 className="font-display text-2xl">{it.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary bg-primary/5 border border-primary/15 px-3 py-1 rounded-full">
            Cleared, signed, and onboard
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 text-balance">What our graduates say.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real Google reviews from Calibre alumni — uncut, unedited, and currently working in Indian airports.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {reviews.map((r, i) => (
            <figure key={i} className="break-inside-avoid mb-6 rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-sky hover:-translate-y-0.5 transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                {r.placed && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded">
                    {r.placed}
                  </span>
                )}
              </div>
              <blockquote className="text-foreground/90 text-[15px] leading-relaxed">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden gradient-sky text-primary-foreground shadow-sky relative">
        <div className="absolute inset-0 grid-runway opacity-50" />
        <div className="relative grid md:grid-cols-2 gap-10 p-10 md:p-16" id="enquire">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              Final boarding call
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-balance">
              Don't watch others fly.
              <br />
              <span className="text-gradient-gold">Be the one boarding.</span>
            </h2>
            <p className="mt-4 opacity-90 max-w-md">
              Talk to a counsellor today. Walk through the campus tomorrow. Wear the uniform in six months.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919063028362" className="inline-flex items-center gap-2 rounded-full gradient-gold text-accent-foreground px-6 py-3 font-semibold shadow-gold hover:opacity-90 transition animate-pulse-ring">
                <Phone className="h-4 w-4" /> Call admissions
              </a>
              <a href="mailto:calibreaviation@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold hover:bg-primary-foreground/10 transition">
                <Mail className="h-4 w-4" /> Email us
              </a>
            </div>
          </div>
          <ul className="space-y-5 text-sm md:text-base">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
              <span>
                <strong className="block">Calibre Aviation Academy · Hyderabad</strong>
                2nd floor, Veda Library Building, 105/2 RT, Road No. 1, Sanjeeva Reddy Nagar (near Metro Pillar 1033), Hyderabad, Telangana 500038
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
              <span>Counselling open Mon–Sat · 10:00 am – 7:00 pm</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
              <span>+91 83410 40921 · +91 90630 28362</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
              <span>calibreaviation@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-border/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Calibre Aviation Academy. All rights reserved.</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em]">Job-ready · in · six · months</p>
      </div>
    </footer>
  );
}