import Metadata from '@/components/common/Metadata';
import DevHeading from '@/components/developement/DevHeading';
import Image from 'next/image';


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const PrintingServices = () => {
  const languages = ['Books', 'T-shirt', 'Printing', 'Poster Print', 'Print', 'Cards', 'Flyers', 'Designs & Print', 'Creative', 'Colors'];
  const headText = 'Printing Services'
  const paraText =  `We craft visually engaging designs that communicate your brand’s message with clarity and creativity. From logos to marketing materials, our designs leave a lasting impression.`

  const List = ({ text }:{text:string}) => (
    <p className="mb-5 flex items-center text-lg font-medium text-white">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return <>
    <Metadata 
      title="JS Matrix | Printing Services"
      keywords={languages.join(', ')}
      description={paraText}
    />
    <section className="pt-18 pt-[4rem] md:pt-[70px]">
      <DevHeading headingBgText={languages} headText={headText} paraText={paraText}  />
      


      <section className="relative bg-orange-900" x-data="{ mobileNavOpen: false }">
        <Image className="absolute top-0 left-0 w-full h-full" src="/images/bg-waves.png" fill alt="Bg image" />
          
          <div className="relative pt-18 pb-24 sm:pb-32 lg:pt-36 lg:pb-42">
            <div className="container mx-auto px-4 relative">
              <div className=" mx-auto text-center">
                <h2 className="font-heading text-4xl xs:text-5xl xl:text-6xl tracking-tight text-white mb-8">Innovating the Future of Printing</h2>
                <h3 className="font-heading text-2xl xs:text-3xl xl:text-4xl tracking-tight text-white mb-8">High-Quality Printing That Brings Ideas to cercumstances</h3>
                <p className="max-w-md xl:max-w-none text-lg text-white opacity-80 mb-10">We specialize in delivering top-notch printing solutions that transform your ideas into impactful visuals. From corporate stationery and promotional materials to large-scale advertising and custom packaging, our printing services are designed to meet every business and personal need. With a strong focus on quality, precision, and creativity, we make sure every print reflects your brand’s professionalism and leaves a lasting impression.</p>
                <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-grey-900 border border-lime-500 hover:border-white bg-orange-500 hover:bg-white rounded-full transition duration-200" href="/contact">See our solutions</a>
              </div>
            </div>
          </div>
        </section>








<section className="bg-gray-50 py-16 px-6">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Our Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our innovative solutions designed to help your business grow. High-quality, professional services tailored for your needs.
      </p>
    </div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
        <Image src="/images/img400.webp" width={400} height={200} alt="Web Development" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Book Printing</h3>
          <p className="text-gray-600 text-sm">
            Build modern, responsive, and scalable websites using technologies like React, NextJS, and Ruby on Rails.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
        <Image src="/images/img400.webp" width={400} height={200} alt="Graphic Design" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Flyer Printing</h3>
          <p className="text-gray-600 text-sm">
            Creative and visually stunning designs for your brand, including logos, banners, social media graphics, and more.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
        <Image src="/images/img400.webp" width={400} height={200} alt="Printing Services" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Poster Printing</h3>
          <p className="text-gray-600 text-sm">
            High-quality printing solutions for business cards, brochures, stationery, and more with fast turnaround.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
        <Image src="/images/img400.webp" width={400} height={200} alt="Digital Marketing" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Banner Printing</h3>
          <p className="text-gray-600 text-sm">
            Grow your online presence with SEO, PPC, social media marketing, and content strategies tailored to your business.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
        <Image src="/images/img400.webp" width={400} height={200} alt="SEO Services" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Card Printing</h3>
          <p className="text-gray-600 text-sm">
            Improve your search engine rankings and drive organic traffic with our expert SEO solutions.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
        <Image src="/images/img400.webp" width={400} height={200} alt="Website Maintenance" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">T-Shirt Printing</h3>
          <p className="text-gray-600 text-sm">
            Keep your website secure, updated, and fully functional with our reliable maintenance services.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
        <Image src="/images/img400.webp" width={400} height={200} alt="Website Maintenance" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">ID strip printing</h3>
          <p className="text-gray-600 text-sm">
            Keep your website secure, updated, and fully functional with our reliable maintenance services.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>













        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 px-6 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our Printing Solutions 🚀
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-14">
              We craft cutting-edge web solutions using the latest technologies. From sleek frontends to powerful backends,
              our stack ensures performance, scalability, and modern design.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              
              <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2">Business Stationery Printing</h3>
                <p className="text-gray-600 text-sm">
                  We design and print professional letterheads, envelopes, business cards, notepads, and other essentials that reflect credibility and brand identity. Whether you are a startup or an established organization, our stationery printing helps you build trust and consistency in every communication.
                </p>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2">Marketing & Promotional Printing</h3>
                <p className="text-gray-600 text-sm">
                  Marketing materials are the backbone of spreading your brand’s message. We print vibrant flyers, eye-catching brochures, impactful posters, and attention-grabbing banners that make your promotions stand out. Every design is printed with precision to ensure your campaigns reach the right audience with the right impact.
                </p>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2">Packaging & Label Printing</h3>
                <p className="text-gray-600 text-sm">
                  Your product packaging is more than just protection—it’s a powerful marketing tool. We offer custom-designed packaging solutions, labels, and stickers that not only look appealing but also communicate your brand’s personality. Our designs help your products stand out in competitive markets while maintaining functionality and durability.
                </p>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2">Custom & Creative Printing</h3>
                <p className="text-gray-600 text-sm">
                  Looking for something unique? We create personalized items such as calendars, catalogs, booklets, invitation cards, diaries, and creative gift items. Our team combines innovative designs with premium printing to bring you products that are memorable, functional, and visually stunning.
                </p>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2">Office Essentials</h3>
                <p className="text-gray-600 text-sm">
                  Every office relies on daily-use print materials like files, folders, ID cards, invoices, and receipts. We provide consistent, reliable, and high-quality printing for all your office essentials, ensuring you never have to compromise on accuracy, clarity, or professionalism.
                </p>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2">Presentation Design</h3>
                <p className="text-gray-600 text-sm">
                  Professional, clean, and creative presentation slides that communicate your message with clarity and style.
                </p>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2">Infographics & Illustrations</h3>
                <p className="text-gray-600 text-sm">
                  We simplify complex information into visually engaging infographics and create custom illustrations that enhance storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

      <div className="container mx-auto my-9 w-full wow fadeInUp shadow-three mb-12 rounded-sm px-8 py-11 bg-orange-700">
        <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-white '>Why Choose Us for Printing?</h2>

        <ul className='m-auto w-full md:w-8/12'>
          <List text="Premium Quality Prints – Our advanced technology ensures vibrant colors, sharp details, and durable results." />
          <List text="Comprehensive Range – From everyday stationery to large-scale advertising, we cover all your printing needs." />
          <List text="Custom Solutions – Tailored designs, finishes, and materials to match your unique requirements." />
          <List text="Creative & Professional Team – A perfect blend of artistic design and technical expertise." />
          <List text="End-to-End Service – From design consultation to final delivery, we handle the entire process seamlessly." />
        </ul>
      </div>
    </section>
  </>
  
}

export default PrintingServices;