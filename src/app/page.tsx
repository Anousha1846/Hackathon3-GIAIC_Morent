'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Hero from '@/components/custum/Hero'
import Location from '@/components/custum/Location'
import PopularCar from '@/components/custum/PopularCar'
import RecommendedCar from '@/components/custum/RecommendedCar'

const Page = () => {
  const { data: session } = useSession()
  return (
    <main className="bg-[#F6F7F9]">
      <Hero />
      <Location />
      <PopularCar />
      <RecommendedCar />

      {/* Session-based UI */}
      {/* <div className="session-info">
        {session ? (
          <>
            Signed in as {session.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div> */}
      
    </main>
  )
}

export default Page
