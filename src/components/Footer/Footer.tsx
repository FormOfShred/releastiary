import FAQDialog from "../FAQDialog/FAQDialog";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="max-w-7xl mx-auto flex justify-between p-5">
        <span className="font-bold">
          Releastiary
        </span>
        <span className="flex gap-1 text-sm items-center">
          made with 
          <a 
            href="https://www.igdb.com/" 
            target="_blank"
            className="text-accent hover:text-accent/80"
          >
            IGDB
          </a>
          <FAQDialog />
        </span>
      </div>
    </div>
  )
}

export default Footer;