import type { Metadata } from "next";



export const metadata: Metadata = {
 title: 'About',
 description: 'About Description',
 keywords: ['About Page', 'Daniel', 'informacion', '...']
};



export default function AboutPage() {
    return(
        <main className="flex flex-col items-center">
            <span className="text-7xl">About Page</span>
        </main>
    )
}