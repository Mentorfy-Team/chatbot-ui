"use client"
import { Database } from "@/supabase/types"
import { createBrowserClient } from "@supabase/ssr"
import { useEffect } from "react"
import zipy from "zipyai"

export const ZipyProvider = () => {
  useEffect(() => {
    const supabase = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            const cookieStore = document?.cookie
            const value = `; ${cookieStore}`
            const parts = value.split(`; ${name}=`)
            if (parts.length === 2) return parts.pop()?.split(";").shift()
          }
        }
      }
    )

    if (supabase)
      zipy
        .init("9db1fe8e", {
          releaseVer: process.env.NEXT_PUBLIC_VERSION ?? "0.0.0"
        })
        .then(() => {
          supabase.auth.getUser().then(async ({ data: userData, error }) => {
            if (!userData.user || error) return
            const user = userData.user

            const { data } = await supabase
              .from("profiles")
              .select("*")
              .eq("user_id", user.id)
              .single()

            zipy.identify(user.id, {
              id: user.id,
              email: user.email,
              name: data?.display_name
            })
          })
        })
  }, [])

  return <></>
}
