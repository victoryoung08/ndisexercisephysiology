import Image from "next/image";
import FeatureIconRow from "../../components/FeatureIconRow";
import LeadForm from "../../components/LeadForm";
import FeatureRow from "../../components/FeatureRow";
import { RenderBlocks } from "@/utils/RenderBlocks";
import axios from "axios";

const options = {
  method: "GET",
  cache: "no-store",
};

export async function generateStaticParams() {
  const request = await fetch("http://localhost:4000/api/locations", {
    method: "GET",
    cache: "no-store",
  });
  const data = await request.json();
  const { docs: pageData } = data;
  // const returnObj = {
  //   slug: pageData.map((data) => data.slug),
  // };
  const locationSlugs = pageData.map((location) => ({
    params: { slug: location.slug, id: location.id },
  }));
  return locationSlugs;
}

export default async function Page({ params }) {
  // fetch all the slugs
  const { slug } = params;
  console.log(slug);
  // fetch the specific page data with params.slug
  const request = await axios(
    `/api/locations?where[slug][equals]=${slug}`,
    options
  );
  const pageData = request.data.docs;
  const services = [
    {
      heading: "Neurological Conditions",
      imgSrc: "",
    },
    {
      heading: "Weight Gain due to Medications",
      imgSrc: "",
    },
    {
      heading: "Spinal Cord Injuries",
      imgSrc: "",
    },
    {
      heading: "Intellectual Disability & Autism",
      imgSrc: "",
    },
  ];
  const pages = pageData[0].layout;
  console.log(pages);
  return <>{pages && <RenderBlocks layout={pages} />}</>;
  // <main className="">
  //   <section className=" flex flex-col gap-8 py-12 px-4 md:px-24">
  //     <div>
  //       <div className="w-full h-[300px] overflow-hidden rounded-xl relative md:h-[450px]">
  //         <Image
  //           className="mx-auto"
  //           src="/physiotherapy.jpeg"
  //           fill
  //           style={{
  //             objectFit: "cover",
  //           }}
  //         />
  //       </div>
  //       <FeatureIconRow props={`relative bottom-[45px]`} />
  //     </div>
  //     <header className="flex flex-col gap-24 lg:flex-row">
  //       <div className="w-full flex flex-col gap-4">
  //         <h1>NDIS Exercise Physiology in </h1>
  //         <p>
  //           Get personalised exercise services specialising working with NDIS
  //           particpants - helping you live more confidently, be fitter and
  //           strength for independence
  //         </p>
  //         <button className="is-large">Book Now</button>
  //       </div>
  //       <LeadForm
  //         style={{
  //           textAlign: "center",
  //         }}
  //       />
  //     </header>
  //   </section>
  //   {/* Feature Icon Row */}

  //   {/* Feature Row */}
  //   <FeatureRow />
  //   {/* About */}
  //   <section className="section-padding flex flex-col gap-24">
  //     <div>
  //       <div className="w-full flex flex-col gap-8">
  //         <h2 className="w-full">
  //           Personalised, individualised and you focused Exercise Physiology
  //           specialised in working with NDIS Particpants
  //         </h2>
  //         <p className="w-full">
  //           At Exercise Habits Exercise Physiology, we focus on getting you
  //           back to where you were and better. Our services include exercise
  //           therapy, strength and fitness training, exercise rehabilitation
  //           and exercise for weight loss and medication side effects. All of
  //           our Exercise Physiologists are University Qualified with a wealth
  //           of experience so rest assure you&apos;ll be in safe and dedicated
  //           hands helping you recover. Our core focus is to help you recover
  //           from injuries, manage and reduce plain while also improving your
  //           overall well-being.
  //         </p>
  //         <div>
  //           <button className="is-large">Schedule an appointment</button>
  //         </div>
  //       </div>
  //     </div>
  //     <img className="w-full h-[450px] bg-gray-500 rounded-xl" />
  //   </section>
  //   {/* Services */}
  //   <section className="grid grid-cols-2 gap-4 section-padding lg:grid-cols-3">
  //     {services.map((service) => (
  //       <div className="service-card" key={service.heading}>
  //         <img src="" alt="" className="w-full h-2/3 bg-gray-500" />
  //         <div className="w-full h-1/3 flex items-center justify-center">
  //           <h4>{service.heading}</h4>
  //         </div>
  //       </div>
  //     ))}
  //   </section>
  // </main>
}
