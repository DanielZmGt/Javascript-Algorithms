"use client";
import { useState } from "react";
import Image from "next/image";
import { resumeDataEs, resumeDataEn, ResumeData } from "../data";

export default function ResumePage() {
  const [lang, setLang] = useState<"es" | "en">("en");
  const data: ResumeData = lang === "es" ? resumeDataEs : resumeDataEn;

  return (
    <div className="min-h-screen bg-[#f0ede8] font-[Georgia,serif] text-[#1a1a1a] py-10 print:py-0 print:bg-white flex justify-center">
      
      {/* Language Toggle (Hidden in print) */}
      <div className="absolute top-4 right-4 print:hidden flex gap-2">
        <button 
          onClick={() => setLang("en")}
          className={`px-3 py-1 text-sm rounded ${lang === "en" ? "bg-[#1c2b3a] text-white" : "bg-gray-200 text-gray-700"}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang("es")}
          className={`px-3 py-1 text-sm rounded ${lang === "es" ? "bg-[#1c2b3a] text-white" : "bg-gray-200 text-gray-700"}`}
        >
          ES
        </button>
      </div>

      <div className="max-w-[900px] w-full bg-white shadow-[0_4px_32px_rgba(0,0,0,0.12)] print:shadow-none flex flex-col md:grid md:grid-cols-[260px_1fr] print:grid-cols-[240px_1fr]">
        
        {/* SIDEBAR */}
        <aside className="bg-[#1c2b3a] text-[#e8e4de] px-7 py-10 flex flex-col gap-8 print:px-6">
          
          <div className="text-center">
            <Image 
              src={data.photoUrl} 
              alt={data.name} 
              width={160} 
              height={160} 
              className="w-40 h-40 object-cover object-top rounded-full border-4 border-[#c9a86c] mx-auto mb-4"
              priority
            />
            <h1 className="text-[1.15rem] font-bold tracking-[0.02em] text-white leading-[1.3]" dangerouslySetInnerHTML={{ __html: data.name.replace(" Zamudio", "<br>Zamudio") }} />
            <p className="text-[0.8rem] text-[#c9a86c] uppercase tracking-[0.12em] mt-1.5">{data.title}</p>
          </div>

          <div className="sidebar-section">
            <h2 className="text-[0.68rem] uppercase tracking-[0.18em] text-[#c9a86c] border-b border-[#c9a86c44] pb-1.5 mb-3">{lang === "es" ? "Contacto" : "Contact"}</h2>
            <ul className="text-[0.82rem] flex flex-col gap-2.5">
              <li className="flex items-start gap-2">
                <svg className="w-4 shrink-0 mt-0.5 opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${data.contact.email}`} className="hover:underline">{data.contact.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 shrink-0 mt-0.5 opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013.09 4.18 2 2 0 015.08 2h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 17.92z" />
                </svg>
                {data.contact.phone}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 shrink-0 mt-0.5 opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {data.contact.location}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 shrink-0 mt-0.5 opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/{data.contact.github.split('/').pop()}</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 shrink-0 mt-0.5 opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h2 className="text-[0.68rem] uppercase tracking-[0.18em] text-[#c9a86c] border-b border-[#c9a86c44] pb-1.5 mb-3">{lang === "es" ? "Habilidades Técnicas" : "Technical Skills"}</h2>
            <ul className="text-[0.82rem] flex flex-col gap-2.5">
              {data.skills.map((skill, index) => (
                <li key={index}>
                  <span className="block mb-1 text-[#e8e4de]">{skill.label}</span>
                  <div className="bg-[#2e4257] rounded-sm h-1.5 overflow-hidden">
                    <div className="bg-[#c9a86c] h-full rounded-sm" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h2 className="text-[0.68rem] uppercase tracking-[0.18em] text-[#c9a86c] border-b border-[#c9a86c44] pb-1.5 mb-3">{lang === "es" ? "Stack & Herramientas" : "Stack & Tools"}</h2>
            <div className="flex flex-wrap gap-1.5">
              {data.tools.map((tool, index) => (
                <span key={index} className="bg-[#2e4257] text-[#c9a86c] rounded px-2 py-0.5 text-[0.73rem] tracking-[0.04em]">{tool}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h2 className="text-[0.68rem] uppercase tracking-[0.18em] text-[#c9a86c] border-b border-[#c9a86c44] pb-1.5 mb-3">{lang === "es" ? "Idiomas" : "Languages"}</h2>
            <ul className="text-[0.82rem] flex flex-col gap-2">
              {data.languages.map((language, index) => (
                <li key={index} className="flex justify-between">
                  <span>{language.name}</span>
                  <span className="text-[#c9a86c] text-[0.75rem]">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h2 className="text-[0.68rem] uppercase tracking-[0.18em] text-[#c9a86c] border-b border-[#c9a86c44] pb-1.5 mb-3">{lang === "es" ? "Certificaciones" : "Certifications"}</h2>
            <ul className="text-[0.85rem] text-inherit flex flex-col gap-2">
              {data.certifications.map((cert, index) => (
                <li key={index}>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{cert.name}</a>
                </li>
              ))}
            </ul>
          </div>

        </aside>

        {/* MAIN */}
        <main className="px-10 py-11 flex flex-col gap-9 print:px-8">
          
          <section>
            <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-[#c9a86c] border-b-2 border-[#c9a86c] pb-1.5 mb-4.5">{lang === "es" ? "Perfil Profesional" : "Professional Profile"}</h2>
            <p className="text-[0.92rem] text-[#333] leading-[1.75]">{data.profile}</p>
          </section>

          <section>
            <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-[#c9a86c] border-b-2 border-[#c9a86c] pb-1.5 mb-4.5">{lang === "es" ? "Proyectos Destacados" : "Featured Projects"}</h2>
            <div className="flex flex-col gap-5.5">
              {data.projects.map((project, index) => (
                <div key={index} className="project">
                  <div className="flex items-baseline justify-between flex-wrap gap-1 mb-1.5">
                    <span className="text-[1rem] font-bold text-[#1c2b3a]"><a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.name}</a></span>
                    <span className="text-[0.73rem] text-[#888] italic">{project.stack}</span>
                  </div>
                  <p className="text-[0.87rem] text-[#444] leading-[1.65]">{project.description}</p>
                  {project.highlights && (
                    <ul className="mt-1.5 pl-4.5 text-[0.85rem] text-[#444] leading-[1.7] list-disc marker:text-gray-400">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-[#c9a86c] border-b-2 border-[#c9a86c] pb-1.5 mb-4.5">{lang === "es" ? "Optimización de Flujo de Trabajo" : "Workflow Optimization"}</h2>
            <p className="text-[0.87rem] text-[#444] leading-[1.7]">{data.workflow}</p>
          </section>

        </main>
      </div>
    </div>
  );
}
