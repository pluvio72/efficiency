import { DATA_STRUCTURES } from "@/data/data-structures";

export default function Page() {
  return (
    <div className="min-h-[95vh] p-4 flex flex-col">
      <div className="grid grid-cols-2 gap-x-4 py-4">
        {DATA_STRUCTURES.map((data) => (
          <div
            key={data.key}
            className="cursor-pointer transition rounded-lg hover:bg-accent border px-6 py-2"
          >
            <span className="text-xl font-semibold tracking-tight">
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
