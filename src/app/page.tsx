import Hero from '@/components/home/hero/Hero'
import Focus from '@/components/home/OurFocus/Focus'
import Features from '@/components/home/Features/Features'
import ReadyToHelp from '@/components/home/ReadyToHelp/ReadyToHelp'
import Metadata from '@/components/common/Metadata'

export default function Home() {
  const keywords:string = "Web Development, Web Maintanance, Web Designing, Graphic Designing, Printing Designing";
  return (
    <main>
        <Metadata 
          title="JS Matrix | Web Development, Software & Design and Printing Solutions"
          keywords={keywords}
          description="Expert services in web development, website design, software development, SEO, and web page performance. We also provide emailer design, graphic designs, book and card designs, banner designs, printing solutions, poster and book printing, stationery, and computer hardware services."
        />
        <Hero />
        <Focus />
        <Features />
        <ReadyToHelp />
      </main>
  );
}
