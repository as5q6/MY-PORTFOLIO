import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

declare global {
  interface Window {
    lottie: any;
  }
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

interface SkillProps {
  name: string;
  level: number;
}

interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
} 