import { CircleQuestionMark } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const IGDBDialog = () => {
  return (
  <Dialog>
    <DialogTrigger>
      <CircleQuestionMark height={20} />
    </DialogTrigger>
    <DialogContent className="bg-background">
      <DialogHeader>
        <DialogTitle>
          Inaccurate data?
        </DialogTitle>
        <DialogDescription>
          Since the data is pulled from 
          <a 
            href="https://www.igdb.com/" 
            target="_blank"
            className="text-accent hover:text-accent/80 pl-1"
          >
            IGDB
          </a>
          , that is most likely the source of it.
          You can reach out to them to get this data corrected
        </DialogDescription>
        <DialogTitle>
          Experiencing issues with the website?
        </DialogTitle>
        <DialogDescription>
          You can create an issue on the 
          <a 
            href="https://github.com/FormOfShred/releastiary/issues"
            target="_blank"
            className="text-accent hover:text-accent/80 pl-1"
          >
            repository
          </a>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

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
          <IGDBDialog />
        </span>
      </div>
    </div>
  )
}

export default Footer;