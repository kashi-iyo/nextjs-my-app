import Layout from "../components/Layouy"
import Image from "next/image"

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact Info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.png"
            width={60}
            height={60}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">city A</p>
          <p className="font-bold mt-3">E-main</p>
          <p className="text-xs mt-2 text-gray-600">abg@gmail.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-000-000</p>
        </div>
        <div className="mt-6 flex justify-around">
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
        </div>
      </div>
    </Layout>
  )
}


