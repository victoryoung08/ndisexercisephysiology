import { List } from "@phosphor-icons/react/dist/ssr";
export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-slate-300 flex items-center justify-between px-12">
      <div>
        <img className="w-[48px] h-[48px] bg-black" src="" alt="" />
      </div>
      <div>
        <List size={24} color="black" stroke={0.5} />
      </div>
    </nav>
  );
}
