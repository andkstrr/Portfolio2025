import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdInsertDriveFile } from "react-icons/md";
import ProfilePicture from "../assets/dk-dv.jpg";
import ExperienceList from "../components/ExperienceList";
import SkillsMarquee from "../components/SkillsMarquee";
import ProjectsList from "../components/ProjectsList";

function Home() {
  return (
    <div className="min-h-screen relative bg-background">
      <main className="max-w-3xl mx-auto px-6 py-20">
        {/* HERO SECTION */}
        <section className="mb-10">
          <div className="relative mb-6 inline-block">
            <div className="rounded-full bg-white dark:bg-neutral-900 border-2 border-slate-300 dark:border-neutral-700 p-1 shadow-xl">
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
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Andika Satrio Nurcahyo
            </h1>
            <span className="text-slate-900 dark:text-white">
              <HiOutlineBadgeCheck size={30} />
            </span>
            <p className="text-slate-500 dark:text-neutral-400 text-sm">
              (dev/fig)
            </p>
          </div>

          <p className="text-slate-500 dark:text-neutral-400 mb-6">
            I’m a Software Engineering student at Wikrama Vocational High School
            who enjoys building web, mobile apps and designing meaningful user
            experiences. I believe good design is not only about looks, but also
            about usability. Available for freelance UI/UX projects.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://github.com/andkstrr"
              target="_blank"
              className="flex items-center gap-2 text-slate-900 dark:text-neutral-400 font-medium underline hover:underline"
            >
              <FaGithub size={20} /> Github
            </a>
            <a
              href="https://linkedin.com/in/andkstrr"
              target="_blank"
              className="flex items-center gap-2 text-slate-900 dark:text-neutral-400 font-medium underline hover:underline"
            >
              <FaLinkedin size={20} color="#0077B5" /> LinkedIn
            </a>
            <a
              href="mailto:andkstrr.work@gmail.com"
              target="_blank"
              className="flex items-center gap-2 text-slate-900 dark:text-neutral-400 font-medium underline hover:underline"
            >
              <SiGmail size={20} color="#EA4335" /> Email
            </a>
            <a
              href="/cv-andika-satrio.pdf"
              target="_blank"
              download
              className="flex items-center gap-2 text-slate-900 dark:text-neutral-400 font-medium underline hover:underline"
            >
              <MdInsertDriveFile size={23} /> CV
            </a>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-right mb-2 dark:text-white">
            Career Milestones
          </h2>
          <p className="text-slate-500 dark:text-neutral-400 text-right mb-10">
            I have gained experience through various projects that involve
            designing, building, and refining digital solutions. Each project
            has contributed to my growth in understanding development processes,
            teamwork, and continuous improvement.
          </p>

          <ExperienceList />
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              Work With
            </h2>
            <p className="text-slate-500 dark:text-neutral-500">
              Tools and Technologies I've used
            </p>
          </div>

          <SkillsMarquee />
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              Recent Projects
            </h2>
            <p className="text-slate-500 dark:text-neutral-500">
              A selection of projects I've been working on recently
            </p>
          </div>

          <ProjectsList />
          <div className="text-right">
            <a
              href="https://github.com/andkstrr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-medium px-5 py-3 rounded-xl transition-all duration-300
              bg-slate-200 text-slate-600
              hover:bg-black hover:text-white
              dark:bg-neutral-800 dark:text-neutral-300
              dark:hover:bg-neutral-600 dark:hover:text-white"
            >
              View on GitHub &rarr;
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-slate-500 dark:text-neutral-500">
              Feel free to reach out if you'd like to work together or just say
              hi!
            </p>
          </div>

          <form className="bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 rounded-xl p-6">
            <div className="flex justify-between flex-wrap gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-2 border border-slate-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 dark:bg-neutral-800 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 border border-slate-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 dark:bg-neutral-800 dark:text-white"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full mt-4 px-4 py-2 border border-slate-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 dark:bg-neutral-800 dark:text-white"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="mt-6 w-full py-3 rounded-lg font-medium transition-all duration-300 border bg-neutral-900 text-white border-transparent hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="pt-3 text-center text-slate-400 dark:text-neutral-500 text-sm">
        © {new Date().getFullYear()} Andika Satrio Nurcahyo. All Rights Reserved
      </footer>
    </div>
  );
}

export default Home;
