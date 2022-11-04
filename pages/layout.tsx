import Image from "next/image"
import logo from "../public/logo-gamespace.png"
import s from "../styles/RootLayout.module.scss"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className={s.header} >
        <Image
          src={logo}
          alt="Picture of the author"
        />
      </header>
      {children}
    </>
  )
}
