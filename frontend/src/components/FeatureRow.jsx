export default function FeatureRow() {
  const features = [
    {
      title: "In-home Mobile Exercise Physiology",
      subtitle:
        "Exercise in the comfort of your own home. Our Exercise Physiologist come straight to you.",
      imgSrc: "",
    },
    {
      title: "Improve your fitness and strength",
      subtitle:
        "Don't let anything stop you from living healthy. Our University Qualified Exercise Physiologists create an exercise program tailored to you and your personal needs.",
      imgSrc: "",
    },
    {
      title: "Feel more confident in your own body",
      subtitle:
        "Our Exercise Physiologists help you feel more comfortable and more confident in your own body. Our goal is to help you live more independently and feel more empowered to do more",
      imgSrc: "",
    },
  ];
  return (
    <section className="section-padding">
      {features.map((feature, index) => (
        <div
          className={`w-full flex flex-col gap-12 my-24 items-center lg:flex-row `}
          key={feature.title}
        >
          <div
            className={`w-full flex flex-col items-center gap-8 order-last  ${
              index % 2 === 0 ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <div className="text-center">
              <h3 className="mb-2 capitalize">{feature.title}</h3>
              <p>{feature.subtitle}</p>
            </div>

            <button>Get Started</button>
          </div>
          <div className="w-full h-[300px] bg-gray-500 rounded-2xl overflow-hidden">
            <img src="" alt="" />
          </div>
        </div>
      ))}
    </section>
  );
}
