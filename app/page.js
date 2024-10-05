import HomePage from "@/components/homepage/homepage";
import { Blue_Service_Section } from "@/components/login_and_register/commonComponents";
import Image from "next/image";
import { auth } from '@/auth'


export default async function Home() {
  const session  = await auth()
  const token =session?.user?.token
  return (
    <>
      <HomePage token={token}/>
      <Blue_Service_Section />
    </>
  )
}
