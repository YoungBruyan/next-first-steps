import type { Metadata } from "next";



export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Pricing Description',
 keywords: ['Pricing Page', 'Daniel', 'informacion', '...']
};

export default function PricingPage () {
  return (
    <>
        <span className="text-7xl">Pricing page</span>
    </>
  )
}
