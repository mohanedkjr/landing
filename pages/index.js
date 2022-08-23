import Head from 'next/head'
import Image from 'next/image'
import bg from "../assets/electro.webp"

export default function Home() {
  return (
    <div style={{display:"flex",flexDirection:"column",placeItems:"center",placeContent:"center",height:"100vh"} }>
      <h1>أفضل ونش في الكويت</h1>
      <h2>51620222</h2>
      <Image src={bg}/>

    </div>
  )
}
