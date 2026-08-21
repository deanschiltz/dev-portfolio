import headshot from '../assets/images/headshot.png'
import type { Profile } from '../types/portfolio'

const siteUrl = 'https://deanschiltz.com'

export const profile: Profile = {
  name: 'Dean Schiltz',
  shortName: 'Dean',
  title: 'Full Stack Web Software Developer',
  titleLead: 'Full Stack',
  titleHighlight: 'Software Developer',
  heroGreeting: "Hello, I'm Dean Schiltz",
  focus: 'Full Stack Web Software Developer at General Motors',
  summary: 'Austin, Texas',
  about: [
    'Passionate about software development and building purposeful applications, I have spent the last 7 years as a Full Stack Software Engineer, designing, developing, and delivering scalable, high-performance web applications and APIs. Throughout my career, I have built strong partnerships across product teams while focusing on scalable architectures, AI-enhanced solutions, and cloud-based development.',
    'Currently, I am a Full Stack Software Developer at General Motors, where I enhance full-stack web applications for the Centralized Asset Lifecycle Management System (CALMS) using C#, ASP.NET Core, SQL Server, jQuery, HTML, CSS, and Telerik Kendo UI. I also co-lead working sessions with business stakeholders to gather requirements, prioritize application enhancements, and ensure solutions align with business objectives.',
  ],
  location: 'Austin, Texas',
  email: 'deandschiltz@gmail.com',
  siteUrl,
  sourceRepoUrl: 'https://github.com/deanschiltz/dev-portfolio',
  // Respect Vite `base` so the resume path stays correct in local + production.
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
  headshot,
  headshotAlt: 'Portrait of Dean Schiltz in a navy suit',
}

/**
 * Keep `siteUrl` aligned with the live custom domain so canonical,
 * Open Graph, sitemap, and robots.txt stay consistent.
 */
