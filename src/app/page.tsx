import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-[#0a011c] to-[#9f21d6]">
      <main className="p-12 text-center">
        <Image
          src="/images/logo-80.png"
          alt="Droit devant"
          width={300}
          height={300}
          className="rounded-xl"
        />
      </main>
    </div>
  )
}
