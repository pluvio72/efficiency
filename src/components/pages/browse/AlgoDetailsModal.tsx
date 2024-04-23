"use client";

import { Algorithm } from "@/types";
import Tex from "@matejmazur/react-katex";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import AlgoTldrModal from "./AlgoTldrModal";
import { useState } from "react";
import Image from "next/image";

export default function AlgoDetailsModal({ details, open, setOpen }: Props) {
  const [tldrModalOpen, setTldrModalOpen] = useState(false);

  if (!details) return <></>;

  const openTldrModal = () => setTldrModalOpen(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[70%]">
        <DialogHeader>
          <DialogTitle>{details?.name}</DialogTitle>
        </DialogHeader>
        <div className="w-full h-[300px] flex">
          <div className="bg-accent rounded-md flex-grow">
            {details.animation ? (
              <Image src={details.animation} alt="Algo animation" />
            ) : (
              <span>Animation pending</span>
            )}
          </div>
          <div className="flex flex-col justify-evenly ml-4">
            <div className="flex flex-col items-center justify-center">
              <div className="font-light text-sm text-muted-foreground">
                Big O
              </div>
              <div className="scroll-m-20 text-3xl font-semibold tracking-tight">
                <Tex>{details?.complexity.bigO.value}</Tex>
              </div>
              <div className="font-light text-xsm text-muted-foreground">
                {details?.complexity.bigO.type}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-light text-sm text-muted-foreground">
                Best Case
              </div>
              <div className="scroll-m-20 text-3xl font-semibold tracking-tight">
                {details?.complexity.bestCase.value ? (
                  <Tex>{details?.complexity.bestCase.value}</Tex>
                ) : (
                  "NA"
                )}
              </div>
              <div className="font-light text-xsm text-muted-foreground">
                {details?.complexity.bestCase.type}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-light text-sm text-muted-foreground">
                Average Case
              </div>
              <div className="scroll-m-20 text-3xl font-semibold tracking-tight">
                {details?.complexity.averageCase.value ? (
                  <Tex>{details?.complexity.averageCase.value}</Tex>
                ) : (
                  "NA"
                )}
              </div>
              <div className="font-light text-xsm text-muted-foreground">
                {details?.complexity.averageCase.type}
              </div>
            </div>
          </div>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {details?.description}
          <a
            className="text-bold text-gray-600 cursor-pointer hover:text-gray-700 transition"
            onClick={openTldrModal}
          >
            {" "}
            I&apos;m lazy give me the TLDR;
          </a>
        </p>
        <AlgoTldrModal
          open={tldrModalOpen}
          setOpen={setTldrModalOpen}
          strengths={details?.strengths || []}
          weaknesses={details?.weaknesses || []}
        />
      </DialogContent>
    </Dialog>
  );
}

interface Props {
  details?: Algorithm;
  open: boolean;
  setOpen: (newState: boolean) => void;
}
