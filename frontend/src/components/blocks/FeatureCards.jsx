// import Image from "next/image";

// export default function FeatureCards({ cards }) {
//   console.log(cards);
//   return (
//     <section>
//       {cards &&
//         cards.map((card, i) => (
//           <div key={i}>
//             <div className="w-full h-32 relative">
//               {card.featureImage && (
//                 <Image
//                   src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${card.featureImage.url}`}
//                   alt={card.featureImage.alt}
//                   fill
//                 />
//               )}
//             </div>
//             <div>
//               <h2>{card.heading}</h2>
//               <p>{card.body}</p>
//               <button href={card.link}>{card.button}</button>
//             </div>
//           </div>
//         ))}
//     </section>
//   );
// }
import Image from "next/image";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";

export default function FeatureCards({ cards }) {
  console.log(cards);
  return (
    <section>
      {cards &&
        cards.map((card, i) => (
          <div key={i}>
            <div className="w-full h-32 relative">
              {card.featureImage &&
                card.featureImage.url &&
                card.featureImage.alt && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${card.featureImage.url}`}
                    alt={card.featureImage.alt}
                    fill
                    objectFit="cover"
                  />
                )}
            </div>
            <div>
              <h2>{card.heading}</h2>
              <p>{card.body[0].children[0].text}</p>
              <button href={card.link}>{card.button}</button>
            </div>
          </div>
        ))}
    </section>
  );
}
