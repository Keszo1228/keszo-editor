import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const PROFILE_PHOTO = "https://drive.google.com/file/d/12yfU9DA3UzzG_DX-qthO4hmTGrBGK5Kd/view?usp=drive_link";

const MUNKÁIM = [
  { title: "KLLHATATLANOK",    client: "DIPLOMAFILM",    thumb: "https://drive.google.com/file/d/1dQlA7hKkmgFbrQ44x3EgF78jazGf28D9/view?usp=drive_link", url: "https://youtube.com/embed/YlGhxHNyvow" },
  { title: "KONOK",            client: "PARAFRÁZIS",     thumb: "https://drive.google.com/file/d/1gHaUghLoxQjaB2G16qAAIAk7kbNmOIXW/view?usp=drive_link", url: "https://youtube.com/embed/zSyP7uzEblU" },
  { title: "MASQUERADE",       client: "PARAFRÁZIS",     thumb: "https://drive.google.com/file/d/1GImxL_MjPVO5aCxuhFBi4RyVrVUvcHY0/view?usp=drive_link", url: "https://youtube.com/embed/DP7yiBvzgVQ" },
  { title: "KÉSZ VAGY?",       client: "KISJÁTÉKFILM",   thumb: "https://drive.google.com/file/d/1dE8Kry7nq1FBbWI2M1fU-RwcPCDwyfr8/view?usp=drive_link",    url: "https://youtube.com/embed/NlcxL9DuERc" },
  { title: "VACAK",            client: "KISJÁTÉKFILM",   thumb: "https://drive.google.com/file/d/1tsuaAAjoaWADaD_7I8-ZLZHVQWzkkEZa/view?usp=drive_link", url: "https://youtube.com/embed/3CorjAbkflA" },
  { title: "VÉRFOLT",          client: "KISJÁTÉKFILM",   thumb: "https://drive.google.com/file/d/15hcXzp2MS96m_fBfDQjROd-pIJJbo6ed/view?usp=drive_link",    url: "https://youtube.com/embed/X07NPJVMKPs" },
  { title: "EKKEdd Magazinműsor", client: "MAGAZINMŰSOR", thumb: "https://drive.google.com/file/d/1shfTe9GCouDuKGmV4BX_JLx-FkeYL3FF/view?usp=drive_link", url: "https://youtube.com/embed/Z5RbFzSeAOY" },
  { title: "KOLLÉGISTÁK",      client: "DOKUMENTUMFILM", thumb: "https://drive.google.com/file/d/1v4P6yjk-B3C92OjXgK7cPXuFgzDvB9y_/view?usp=drive_link", url: "https://youtube.com/embed/1LuJPNSZw4s" },
  { title: "KOLESZOSOK",       client: "DOKUMENTUMFILM", thumb: "https://drive.google.com/file/d/1wWvnsDvLSdvwFIBJnil5l3V4ZZn3hWkQ/view?usp=drive_link", url: "https://youtube.com/embed/MIMLuKDU6Rs" },
  { title: "ÚJRA ITT",         client: "KISJÁTÉKFILM",   thumb: "https://drive.google.com/file/d/1BQVXYPrGsXlMVLoqENCasY5JFE4y6vae/view?usp=drive_link", url: "https://youtube.com/embed/bSnk1kAsLmo" },
  { title: "EMBERI JÁTSZMÁK",  client: "KISJÁTÉKFILM",   thumb: "https://drive.google.com/file/d/1tXop-H0WBVVICFlVlg0i1cBEFuvx3Lu9/view?usp=drive_link", url: "https://youtube.com/embed/g51wklXed-8" },
  { title: "PORTRÉ",           client: "DOKUMENTUMFILM", thumb: "https://drive.google.com/file/d/1sStmx7xAoHaW5SUNJukoDqNI4hNoERLs/view?usp=drive_link", url: "https://youtube.com/embed/Je-03rt-cUA" },
];

function driveThumb(url) {
  if (!url) return null;
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w800` : url;
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <a href="#top" className="text-xl sm:text-2xl font-extrabold tracking-tight text-white/80">
            KESZI BÁLINT — VÁGÓ
          </a>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group relative w-full overflow-hidden rounded-2xl bg-neutral-900 shadow hover:shadow-lg"
      aria-label={`Open ${project.title}`}
    >
      {driveThumb(project.thumb) ? (
        <img
          src={driveThumb(project.thumb)}
          alt={project.title}
          loading="lazy"
          className="h-48 sm:h-56 md:h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="h-48 sm:h-56 md:h-52 w-full bg-neutral-800 flex items-center justify-center">
          <Play className="w-12 h-12 text-white/40" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/80">{project.client}</p>
          <h3 className="mt-0.5 text-sm sm:text-base font-semibold text-white">{project.title}</h3>
        </div>
        <Play className="w-6 h-6 text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition" />
      </div>
    </button>
  );
}

function Lightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          aria-modal role="dialog"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
            className="w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-3 sm:p-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/60">{item.client}</p>
                <h4 className="text-white font-semibold">{item.title}</h4>
              </div>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-white/5" aria-label="Close video">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                title={item.title}
                src={item.url}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  const src = driveThumb(PROFILE_PHOTO);
  return (
    <div className="w-full aspect-[3/4] rounded-2xl border border-white/10 bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
      {src && !failed ? (
        <img src={src} alt="Keszi Bálint" className="w-full h-full object-cover" onError={() => setFailed(true)} />
      ) : (
        <span className="flex flex-col items-center gap-2 text-white/20 text-xs select-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          Google Drive link
        </span>
      )}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div id="top" className="min-h-screen bg-[#0d0d0d] text-white selection:bg-white/20">
      <Header />

      <section id="rolam" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="flex-1 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-justify tracking-wide text-[#b3b3b3] text-base">Videóvágással foglalkozom, és célom, hogy igényes, jól felépített és figyelemfelkeltő tartalmakat készítsek. Számomra a vágás nem csak technikai munka, hanem egy kreatív folyamat, ahol a ritmus, a hangulat és a történet együtt adja meg a videó valódi erejét. Precíz, kommunikatív, jó problémamegoldó képességgel rendelkező elhivatott filmesként a film- és tartalomgyártás területeire nyitottan tekintek. Fontos számomra, hogy a videó ne csak jól nézzen ki, hanem működjön is: legyen szó kisjátékfilmről, short-form kontentről, reklámról, magazinműsorról vagy akár aftermovie-ról. Folyamatosan fejlesztem magam, nyitott vagyok új ötletekre és stílusokra, és minden projektnél arra törekszem, hogy a lehető legtöbbet hozzam ki belőle.</p>
            </div>
            <div className="md:text-right">
              <h3 className="uppercase tracking-wide text-sm font-semibold text-white/90 mb-5">KÉPESSÉGEIM</h3>
              <ul className="space-y-1 text-white/70 text-sm">
                <li>DaVinci Resolve</li>
                <li>Premiere Pro</li>
                <li>Photoshop</li>
                <li>After Effects</li>
                <li>Illustrator</li>
                <li>Media Composer</li>
                <li>Pro Tools</li>
                <li>Blender</li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-52">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MUNKÁIM.map((p, i) => (
            <ProjectCard key={i} project={p} onOpen={setActive} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-xl text-[#f2f2f2] sm:text-2xl p-8 px-1 pb-4 font-semibold">Elérhetőségek</h2>
        <div className="mt-1 grid gap-3">
          <a href="https://www.youtube.com/@keszo1228/videos" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center border border-white/10 rounded-2xl px-4 py-2 text-sm text-[#c3c3c3] bg-[#1a1a1a] hover:bg-[#262626] hover:text-[#e6e6e6]">YouTube</a>
          <a href="https://www.instagram.com/keszo1228/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center border border-white/10 rounded-2xl px-4 py-2 text-sm text-[#c3c3c3] bg-[#1a1a1a] hover:bg-[#262626] hover:text-[#e6e6e6]">Instagram</a>
          <a href="mailto:balint.keszi2001@gmail.com" className="inline-flex w-fit items-center border border-white/10 rounded-2xl px-4 py-2 text-sm text-[#c3c3c3] bg-[#1a1a1a] hover:bg-[#262626] hover:text-[#e6e6e6]">balint.keszi2001@gmail.com</a>
        </div>
        <p className="mt-14 text-xs text-white/50">© {new Date().getFullYear()} Keszi Bálint. Minden jog fenntartva.</p>
      </section>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </div>
  );
}
