import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function AlgoTldrModal({
  strengths,
  weaknesses,
  open,
  setOpen,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[50%]">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col p-4 w-full">
            <span className="text-center font-bold text-xl">Strengths</span>
            <ul className="mt-3">
              {strengths.map((strength) => (
                <li className="my-1" key={strength}>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col p-4 w-full">
            <span className="text-center font-bold text-xl">Weaknesses</span>
            <ul className="mt-3">
              {weaknesses.map((weakness) => (
                <li className="my-1" key={weakness}>
                  {weakness}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface Props {
  strengths: string[];
  weaknesses: string[];
  open: boolean;
  setOpen: (newVal: boolean) => void;
}
