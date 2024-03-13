import Image from "next/image";

export default function Hero({ heading, body, heroImage }) {
  return (
    <section className="py-12 px-4 gap-12 flex flex-col justify-center items-center  md:flex-row md:px-24">
      <div className="text-center w-full">
        <h1>{heading}</h1>
        <p>{body}</p>
      </div>
      {heroImage && (
        <div className="w-full h-[300px] relative rounded-3xl overflow-hidden">
          {
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${heroImage.url}`}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          }
        </div>
      )}
    </section>
  );
}
