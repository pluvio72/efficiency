import { Dialog, DialogContent } from "@/components/ui/dialog";

export function DetailsModal({ content, open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[60%]">
        <div className="prose prose-invert">{content && content({})}</div>
      </DialogContent>
    </Dialog>
  );
}

interface Props {
  content?: (props: any) => JSX.Element;
  open: boolean;
  setOpen: (newVal: boolean) => void;
}
