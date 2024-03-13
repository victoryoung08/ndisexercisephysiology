export default function CTA({ mainCTA, body, link, button }) {
  return (
    <section>
      <h3>{mainCTA}</h3>
      <p>{body}</p>
      <button href={link}>{button}</button>
    </section>
  );
}
