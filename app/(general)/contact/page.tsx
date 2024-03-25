import type { Metadata } from "next";



export const metadata: Metadata = {
 title: 'Contact',
 description: 'Contact Description',
 keywords: ['Contact Page', 'Daniel', 'informacion', '...']
};

export default function ContactPage () {
  return (
    <>
        <span className="text-7xl">Contact page</span>
    </>
  )
}
