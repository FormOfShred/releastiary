import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="border-b">
      <div className="max-w-6xl mx-auto p-5 flex justify-between">
        <span className="font-bold text-lg">Releastiary</span>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Header;