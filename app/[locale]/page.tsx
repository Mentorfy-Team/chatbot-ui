"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center text-center">
      <div>
        <Image src="/chatfy.png" alt="Logo" width={200} height={200} />
      </div>

      {/* <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        Iniciar Chat
        <IconArrowRight className="ml-1" size={20} />
      </Link> */}
      <br/>
      A Mentorfy agradece o apoio ao testar o Chatfy durante esse periodo.<br/>
      Em breve voltaremos com novidades. E mais um periodo de testes.
    </div>
  )
}
