'use client'

import { Button } from "@/components/ui/button"
import { GamepadIcon as GameController, Sparkles, Rocket, Zap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { lexend } from './fonts'
import { Logo } from './components/logo'

export default function GameCompany() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className={`flex min-h-screen flex-col bg-gradient-to-b from-[#F6F4F9] to-white overflow-hidden ${lexend.className}`}>
      {/* Animated background shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full bg-[#9B8BB4]/10 blur-3xl animate-blob" />
        <div className="absolute -bottom-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-[#584D6D]/5 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-[#FAF9FC]/60 fixed w-full z-50 border-b border-[#9B8BB4]/10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link className="flex items-center justify-center group" href="#">
            <div className="relative">
              <Logo className="h-8 w-8 text-[#9B8BB4] transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#9B8BB4]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className={`ml-2 text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#584D6D] to-[#9B8BB4] ${lexend.className}`}>
              Codelka
            </span>
          </Link>
        </motion.div>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          {['our games', 'contact'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <Link 
                className="text-sm font-bold uppercase tracking-wide text-[#584D6D]/80 hover:text-[#584D6D] transition-colors relative group"
                href={`#${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9B8BB4] transition-all group-hover:w-full" />
                <span className="absolute inset-0 -z-10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#9B8BB4]/5 rounded-lg" />
              </Link>
            </motion.div>
          ))}
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <section className="min-h-screen flex items-center relative">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <Sparkles className="h-12 w-12 text-[#9B8BB4] animate-pulse" />
              <div className="space-y-4 max-w-2xl">
                <h1 className={`text-4xl font-black tracking-tight leading-tight sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#584D6D] via-[#584D6D] to-[#9B8BB4] ${lexend.className}`}>
                  Feed with Love
                  <br />
                  <span className="text-[#9B8BB4] font-black">Tap with Joy</span>
                </h1>
                <p className="mx-auto max-w-[600px] text-[#584D6D]/70 md:text-lg leading-relaxed">
                  Embark on a delightful adventure. Feed your virtual friend and create magical moments - one tap at a time.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className={`h-12 px-6 text-sm font-medium transition-all bg-[#584D6D] hover:bg-[#463D57] text-white rounded-full 
                    shadow-[0_0_0_3px_rgba(155,139,180,0.3)] hover:shadow-[0_0_0_5px_rgba(155,139,180,0.3)] ${lexend.className}`}
                  size="lg"
                >
                  Start Feeding
                  <Rocket className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Zap className="h-6 w-6 text-[#9B8BB4]" />
          </div>
        </section>

        <section id="game" className="py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#9B8BB4]/5 -rotate-6 scale-105 rounded-3xl" />
              <div className="relative bg-[#E9E4F0]/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#9B8BB4]/10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                  <div className="space-y-6">
                    <div className="inline-block rounded-full bg-[#9B8BB4]/10 px-4 py-1.5">
                      <span className={`text-sm text-[#584D6D] ${lexend.className}`}>Coming Soon</span>
                    </div>
                    <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#584D6D] to-[#9B8BB4] ${lexend.className}`}>
                      FeedMi
                    </h2>
                    <p className="text-[#584D6D]/70 md:text-lg leading-relaxed">
                      The addictively cute mobile game where every tap brings joy. Feed your adorable companion, 
                      watch them grow, and discover endless surprises along the way.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Engaging tap-to-feed gameplay mechanics',
                        'Cute and expressive character animations',
                        'Unlock special foods and rare reactions',
                        'Compete with friends on global leaderboards'
                      ].map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-[#9B8BB4]" />
                          <span className="text-sm text-[#584D6D]/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link href="#" className="inline-block">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/appstore.c44572b2-3Lze56NTSFYUjB4IjQpTG3xfhcpceQ.webp"
                              alt="Download on the App Store"
                              width={156}
                              height={52}
                              className="h-[52px] w-auto"
                            />
                          </Link>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link href="#" className="inline-block">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/googleplay.4ced544f-x0btvScKorphMdGTvB0wljWCti0Tjd.webp"
                              alt="Get it on Google Play"
                              width={156}
                              height={52}
                              className="h-[52px] w-auto"
                            />
                          </Link>
                        </motion.div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex justify-center"
                      >
                        <Button 
                          variant="outline"
                          className={`h-12 px-6 text-sm font-medium transition-all text-[#584D6D] border-[#9B8BB4]/20 hover:bg-[#9B8BB4]/5 rounded-full ${lexend.className}`}
                          size="lg"
                        >
                          Learn More
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  <div className="relative group">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative rounded-3xl overflow-hidden"
                    >
                      <Image
                        alt="FeedMi Game Character"
                        className="rounded-3xl object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
                        height="800"
                        width="800"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedmi_artwork_02-csKdqYKjBj33TZjo7K5kIIiwJVGTsn.png"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#9B8BB4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-8 text-center"
            >
              <div className="space-y-6 max-w-2xl">
                <div className="inline-block rounded-full bg-[#9B8BB4]/10 px-4 py-1.5">
                  <span className={`text-sm text-[#584D6D] ${lexend.className}`}>Join the Adventure</span>
                </div>
                <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#584D6D] to-[#9B8BB4] ${lexend.className}`}>
                  Be Part of Our Story
                </h2>
                <p className="text-[#584D6D]/70 md:text-lg">
                  Follow our journey, share your thoughts, and help shape the future of our game.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row pt-6">
                {[
                  {
                    title: 'Join Discord',
                    description: 'Chat with the devs',
                    color: 'bg-[#9B8BB4]',
                    textColor: 'text-white',
                    hover: 'hover:bg-[#8A7BA3]'
                  },
                  {
                    title: 'Dev Blog',
                    description: 'Behind the scenes',
                    color: 'bg-[#E9E4F0]',
                    textColor: 'text-[#584D6D]',
                    hover: 'hover:bg-[#DED6E8]',
                    border: 'border border-[#9B8BB4]/20'
                  }
                ].map((button, i) => (
                  <motion.div
                    key={button.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`h-auto px-6 py-4 text-sm font-medium transition-all rounded-2xl ${button.color} ${button.textColor} ${button.hover} ${button.border || ''} ${lexend.className}`}
                    >
                      <div className="flex flex-col items-center">
                        <span>{button.title}</span>
                        <span className="text-xs opacity-70">{button.description}</span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#9B8BB4]/10 bg-[#E9E4F0]/60 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <Link className="flex items-center justify-center group" href="#">
              <Logo className="h-10 w-10 text-[#9B8BB4] transition-transform group-hover:scale-110" />
              <span className={`ml-2 text-lg font-bold tracking-tight text-[#584D6D] ${lexend.className}`}>Codelka</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/privacy-policy" 
                className="text-sm font-medium text-[#584D6D] hover:text-[#9B8BB4] transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="text-[#584D6D]/30">•</span>
              <Link 
                href="/terms" 
                className="text-sm font-medium text-[#584D6D] hover:text-[#9B8BB4] transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-xs text-[#584D6D]/70">© 2025 Codelka. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

