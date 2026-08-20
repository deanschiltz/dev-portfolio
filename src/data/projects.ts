import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    slug: 'mayi',
    name: 'MayI',
    summary:
      'A real-time, Jackbox-style multiplayer game platform with an ASP.NET Core backend and a React frontend.',
    problem:
      'Party games need low-latency rooms, clear host/player flows, and a stack that can grow without turning the lobby into a special case.',
    highlights: [
      'ASP.NET Core API plus SignalR for live game state.',
      'Next.js / React client for lobbies, auth, and play.',
      'Documented architecture covering auth, data, and local development.',
    ],
    technologies: [
      'ASP.NET Core',
      'C#',
      'SignalR',
      'React',
      'Next.js',
      'REST APIs',
    ],
    repoUrl: 'https://github.com/deanschiltz/MayI',
    featured: true,
  },
  {
    slug: 'crazysort',
    name: 'CrazySort',
    summary:
      'An original liquid-sorting puzzle game for iOS and Android, built with React Native and Expo.',
    problem:
      'Casual puzzle games live or die on feel: pour physics, haptics, audio, and a save model that never loses a board.',
    highlights: [
      'Custom game engine hooks for pour rules and win detection.',
      'Gesture-driven jars with Reanimated and haptic feedback.',
      'Local save state so progress survives app restarts.',
    ],
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Reanimated',
      'Async Storage',
    ],
    repoUrl: 'https://github.com/deanschiltz/CrazySort',
    featured: true,
  },
  {
    slug: 'yeschef',
    name: 'YesChef',
    summary:
      'An iOS share-extension app that turns a social URL into a structured recipe, with a Node scraper as the primary resolver.',
    problem:
      'People save cooking videos as links. The useful artifact is ingredients, timing, and steps — not a buried caption.',
    highlights: [
      'Share extension plus App Group handoff into the main app.',
      'URL intelligence pipeline: normalize, classify, scrape, then fall back to Open Graph / JSON-LD.',
      'Playwright-backed backend endpoint that returns a recipe contract.',
    ],
    technologies: ['Swift', 'iOS', 'Node.js', 'Playwright', 'REST APIs'],
    featured: true,
  },
  {
    slug: 'flashcard-demo',
    name: 'FlashCard Demo',
    summary:
      'A Next.js study-card app used to practice modern React and App Router patterns.',
    problem:
      'Small, focused front-end projects are a good place to lock in routing, typography, and component structure before larger product work.',
    highlights: [
      'Next.js App Router with TypeScript.',
      'Component-driven UI for creating and reviewing cards.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript'],
    repoUrl: 'https://github.com/deanschiltz/FlashCardDemo',
  },
]
