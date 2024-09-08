/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/P2WGLdFKX41
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ReactNode } from "react"

export function AboutComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Acme Web Agency
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We are a full-service web agency that specializes in creating beautiful, functional, and user-friendly
                websites. From branding and design to development and marketing, we handle every aspect of your online
                presence.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Web Design</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Web Development</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Branding</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Digital Marketing</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted mt-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of talented professionals is dedicated to delivering exceptional results for our clients.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">Creative Director</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" alt="Bob Johnson" />
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-bold">Bob Johnson</h3>
                <p className="text-muted-foreground">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Work</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of our recent projects and see how we can help your business succeed online.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div>
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-muted-foreground">A modern and responsive website for a leading e-commerce brand.</p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div>
                <h3 className="text-xl font-bold">Project 2</h3>
                <p className="text-muted-foreground">
                  A custom web application for a SaaS startup, featuring advanced analytics and user management.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 3"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div>
                <h3 className="text-xl font-bold">Project 3</h3>
                <p className="text-muted-foreground">
                  A visually stunning website for a luxury fashion brand, featuring high-quality product imagery and a
                  seamless user experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 4"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div>
                <h3 className="text-xl font-bold">Project 4</h3>
                <p className="text-muted-foreground">
                  A mobile-friendly website for a non-profit organization, designed to showcase their mission and drive
                  donations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props: SVGAngle)  {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
