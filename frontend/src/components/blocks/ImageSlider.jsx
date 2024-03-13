export default function ImageSlider({ images }) {
  return <div>{images && images.map((image) => <img src={image.src} />)}</div>;
}
