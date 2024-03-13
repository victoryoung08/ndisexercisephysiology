import {
  SealCheck,
  MapPinLine,
  Bandaids,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./FeatureIconRow.module.css";
export default function FeatureIconRow({ props }) {
  const gridData = [
    {
      heading: "250+ NDIS Participants",
      icon: "SealCheck",
      color: "primary",
    },
    {
      heading: "You Focused",
      icon: "MapPinLine",
      color: "secondary",
    },
    {
      heading: "We're Patient",
      icon: "Bandaids",
      color: "accent",
    },
  ];
  const icons = {
    SealCheck,
    MapPinLine,
    Bandaids,
  };
  return (
    <section
      className={`grid grid-cols-3 max-w-[95%] mx-auto border-black border-[1.5px] rounded-[48px] bg-secondaryAccent ${props}`}
    >
      {gridData.map((data) => {
        const Icon = icons[data.icon];

        return (
          <div
            className={`flex flex-col gap-4 py-4 px-2 w-full text-center items-center`}
            key={data.heading}
          >
            <Icon size={32} />
            <h5 className="text-sm md:text-base">{data.heading}</h5>
          </div>
        );
      })}
    </section>
  );
}
