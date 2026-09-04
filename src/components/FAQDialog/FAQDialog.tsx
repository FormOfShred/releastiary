import { CircleQuestionMark } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const FAQDialog = () => {
  return (
  <Dialog>
    <DialogTrigger>
      <CircleQuestionMark height={20} />
    </DialogTrigger>
    <DialogContent className="bg-background">
      <DialogHeader className="flex flex-col gap-3">
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
        <DialogTitle>
          Data taking a long time to load?
        </DialogTitle>
        <DialogDescription>
          Since I'm using a free service to host the website and the backend,
          it might take some time for the data to be gathered, try refreshing or
          going to another day.
        </DialogDescription>
        <DialogTitle>
          Games missing?
        </DialogTitle>
        <DialogDescription>
          I try to filter out games but the API doesn't have a straightforward way of doing this,
          if you notice a game missing that should be present, you can create an issue on the 
          <a 
            href="https://github.com/FormOfShred/releastiary/issues"
            target="_blank"
            className="text-accent hover:text-accent/80 px-1"
          >
            repository
          </a>
          and I will look into it
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default FAQDialog;