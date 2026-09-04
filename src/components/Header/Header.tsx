import FAQDialog from "../FAQDialog/FAQDialog";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto p-5 flex justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-bold text-lg">Releastiary</span>
          <FAQDialog />
        </div>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Header;