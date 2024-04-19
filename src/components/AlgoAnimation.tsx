import { generateColorArray } from "@/util/Colors";

export default function AlgoAnimation() {
  const cols = generateColorArray("#ffffff", "#000000", 5);
  console.log(cols);

  return (
    <div>
      <div className="card rounded-md"></div>
    </div>
  );
}
