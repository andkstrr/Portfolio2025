import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdInsertDriveFile } from "react-icons/md";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import ProfilePicture from "../assets/dk-dv.jpg";
import SkillsMarquee from "../components/SkillsMarquee";
import ExperienceItem from "../components/ExperienceItem";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div className="min-h-screen relative">
      <main className="max-w-3xl mx-auto px-6 py-20">
        {/* HERO SECTION */}
        <section className="mb-10">
          <div className="relative mb-6 inline-block">
            <div className="rounded-full bg-white border-2 border-slate-300 p-1 shadow-xl">
              <img
                src={ProfilePicture}
                alt="Profile Picture"
                className="h-40 w-40 rounded-full object-cover"
              />
            </div>

            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-green-800 px-4 py-1 text-xs font-semibold text-white shadow-md">
              #OPENTOWORK
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-4xl font-bold text-slate-900">
              Andika Satrio Nurcahyo
            </h1>
            <span>
              <HiOutlineBadgeCheck size={30} />
            </span>
            <p className="text-slate-500 text-sm">(he/him)</p>
          </div>

          <p className="text-slate-600 mb-6">
            I’m a Software Engineering student at Wikrama Vocational High School
            who enjoys building web, mobile apps and designing meaningful user
            experiences. I believe good design is not only about looks, but also
            about usability. Available for freelance UI/UX projects.
          </p>

          <div className="flex gap-4 mb-12">
            <a
              href="https://github.com/andkstrr"
              target="_blank"
              className="flex items-center gap-2 text-slate-900 font-medium underline hover:underline"
            >
              <FaGithub size={20} /> Github
            </a>
            <a
              href="https://linkedin.com/in/andkstrr"
              target="_blank"
              className="flex items-center gap-2 text-slate-900 font-medium underline hover:underline"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href="mailto:andkstrr.work@gmail.com"
              target="_blank"
              className="flex items-center gap-2 text-slate-900 font-medium underline hover:underline"
            >
              <SiGmail size={20} /> Email
            </a>
            <a
              href="/cv-andika-satrio.pdf"
              target="_blank"
              download
              className="flex items-center gap-2 text-slate-900 font-medium underline hover:underline"
            >
              <MdInsertDriveFile size={23} /> CV
            </a>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-right mb-2">Experience</h2>
          <p className="text-slate-600 text-right mb-10">
            I have gained experience through various projects that involve
            designing, building, and refining digital solutions. Each project
            has contributed to my growth in understanding development processes,
            teamwork, and continuous improvement.
          </p>

          <div className="space-y-2">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} data={exp} />
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">Work With</h2>
            <p className="text-slate-500">Tools and Technologies I've used</p>
          </div>

          <SkillsMarquee />
        </section>

        {/* PROJECTS SECTION */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2">Recent Projects</h2>
            <p className="text-slate-500">A selection of projects I’ve been working on recently</p>
          </div>

          <div className="flex flex-col gap-6">
            {projects.length === 0 && (
              <p className="text-center text-gray-500">
                This section is under development :)
              </p>
            )}

            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="pt-3 text-center text-slate-400 text-sm">
        © 2025 Andika Satrio Nurcahyo. All Rights Reserved
      </footer>
    </div>
  );
}

export default Home;
