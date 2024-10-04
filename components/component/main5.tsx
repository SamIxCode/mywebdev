"use client"

import Link from "next/link"
import Image from 'next/image'; // Use next/image for optimized images
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Main5() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-800"> {/* Fixed the className typo */}
      <div className="flex-1 pt-25">

        <section className="w-full py-1 md:py-20 lg:py-28 xl:py-36 flex justify-center bg-gray-800">
          <div className="container px-4 md:px-6 flex justify-center">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] justify-center">
              <div className="flex flex-col justify-center space-y-4 items-center">
                <div className="space-y-2 text-center justify-center w-full">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-300">
                    Posunťe svoje Podnikanie <span className=" text-blue-500">o krok ďalej</span> v online sfére
                  </h1>
                  <p className=" mx-9 text-gray-400 md:text-xl  text-center">
                 
Vývoj webových stránok špecializovaný na vytváranie vlastných, responzívnych webových stránok, ktoré prinášajú výsledky pre vaše podnikanie.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-300 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Viac
                  </Link>
                  <Link
                    href="#"
                    className=" text-white inline-flex h-10 items-center justify-center rounded-md border border-gray-600 bg-gray-800 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-700 hover:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
              <Image
                src="/marketing-campaign-90.png"
                width={450}
                height={550}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 lg:py-28 flex justify-center bg-gray-900">
          <div className="container px-4 md:px-6 flex justify-center flex-col items-center">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-400" id="portfolioHomePage">Naše Portfólio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">Projekty</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               
                Prezrite naše na mieru vytvorené stránok pre našich klietntov. Od e-commerce až po branding, sme tu pre Vás.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 justify-center" >
              <Image
                src="/webdev_ilu_2.png"
                width={550}
                height={310}
                alt="Portfolio Item"
                className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4 items-center">
                <div className="grid gap-1 text-center">
                  <h3 className="text-xl font-bold text-gray-300">Aider</h3>
                  <p className="text-gray-400">Moderná webstránka, rozsiahlymi funkciami ako napríklad dražba vozidiel. </p>
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-xl font-bold text-gray-300">Luxx Optik</h3>
                  <p className="text-gray-400">Stránka pre opitku ktorá spracúva vysokokvalitné obrázky vysokou rýchlosťou, vstavaný jednoduchý inhouse CMS systém</p>
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-xl font-bold text-gray-300">Miesto pre vašu stránku</h3>
                  <p className="text-gray-400">
                    Na tomto mieste môže byť vaša stránka
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {/* <Link
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                prefetch={false}
              >
                Prezrieť celé portfólio
              </Link> */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 lg:py-28 flex justify-center bg-gray-900">
          <div className="container px-4 md:px-6 flex justify-center flex-col items-center">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-400">O nás</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">Náš Tým</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is comprised of experienced web developers, designers, and project managers dedicated to
                delivering top-notch web solutions.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 justify-center ">
            <img
  src="/1661262230573.jpg"
  
  width={200}
  alt="Team Member"
  className="mx-auto max-h-[600px] max-w-[600px] overflow-hidden rounded-2xl object-cover object-center  "
/>

              <div className="flex flex-col justify-center space-y-4 items-center">
                <div className="grid gap-1 text-center">
                  <h3 className="text-xl font-bold text-gray-300">Samuel Rybár</h3>
                  <p className="text-gray-400">Lead Developer, Founder</p>
                </div>

              </div>
            </div>
            <div className="flex justify-center">
              {/* <Link
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                prefetch={false}
              >
                Viac o nás
              </Link> */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 lg:py-28 flex justify-center bg-gray-900">
          <div className="container px-4 md:px-6 flex justify-center flex-col items-center">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-400">Kontaktovať nás</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">Spojme sa</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">

                Prirpavený naštartovať Váš projekt? Kontaktujte nás ešte dnes !
              </p>
            </div>
            <form  id="contactForm" className="space-y-4 w-full max-w-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                  Meno, názov Firmy
                </label>
                <Input id="name" placeholder="Acme S.r.o / Ján Novák" className="mt-1 block w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <Input id="email" type="email" placeholder="mail@acme.com" className="mt-1 block w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                  Správa
                </label>
                <Textarea id="message" placeholder="Hi! I want a new website :)" className="mt-1 block w-full" />
              </div>
              <Button className="w-full bg-gray-700 text-gray-300 hover:bg-gray-600">Odoslať správu</Button>
            </form>
          </div>
        </section>
      </div>
      <div className="w-full py-6 bg-gray-800 text-center text-gray-400">
        <div>© 2024 Rybar IT solutions Web Development. All rights reserved.</div>
      </div>
    </div>
  )
}
