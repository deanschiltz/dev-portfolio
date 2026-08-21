import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { ThemeProvider } from '../hooks/useTheme'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import { SkipLink } from '../components/SkipLink'
import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Education } from '../sections/Education'
import { Experience } from '../sections/Experience'
import { Hero } from '../sections/Hero'
// import { Projects } from '../sections/Projects' // keep: restore by uncommenting here and below
import { Skills } from '../sections/Skills'

export function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <SkipLink />
          <Nav />
          <main id="main">
            <Hero />
            <About />
            <Experience />
            <Skills />
            {/* <Projects /> */}
            <Education />
            <Contact />
          </main>
          <Footer />
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  )
}
