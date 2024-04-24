import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const GENERATE_SIZE = 500;

export default function DataInputModal({ open, setOpen, onSave }: Props) {
  const [data, setData] = useState<number[]>([]);

  const generate = () => {
    const values = [];
    for (let i = 0; i < GENERATE_SIZE; i++) {
      values.push(Math.ceil(Math.random() * GENERATE_SIZE * 2));
    }
    setData(values);
  };

  const _onSave = () => {
    onSave(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[50%]">
        <div className="mt-4">
          <Textarea
            className="w-full h-[450px]"
            placeholder="Enter comma seperated values...: 1,5,12"
            value={data.join(", ")}
          />
        </div>
        <div className="flex justify-between">
          <Button onClick={generate}>Generate</Button>
          <Button className="mx-2" onClick={_onSave}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface Props {
  open: boolean;
  setOpen: (newVal: boolean) => void;
  onSave: (data: number[]) => void;
}
