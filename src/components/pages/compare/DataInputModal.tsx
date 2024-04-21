import { useState } from "react";

const GENERATE_SIZE = 500;

export default function DataInputModal({ onSave }: Props) {
  const [data, setData] = useState<number[]>([]);

  const generate = () => {
    const values = [];
    for (let i = 0; i < GENERATE_SIZE; i++) {
      values.push(Math.ceil(Math.random() * GENERATE_SIZE * 2));
    }
    setData(values);
  };

  const _onSave = () => onSave(data);

  return (
    <dialog id="data_input" className="modal">
      <div className="modal-box w-[50%]">
        <textarea
          className="textarea w-full h-[450px] textarea-bordered"
          placeholder="Enter comma seperated values...: 1,5,12"
          value={data.join(", ")}
        ></textarea>
        <div className="modal-action flex justify-between">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-info" onClick={generate}>
            Generate
          </button>
          <form method="dialog">
            <button className="btn mx-2">Close</button>
            <button className="btn btn-primary mx-2" onClick={_onSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

interface Props {
  onSave: (data: number[]) => void;
}
