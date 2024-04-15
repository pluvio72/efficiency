import { AlgorithmRunner } from "@/util/AlgorithmRunner";

type RequestData = {
  keys: string[];
  data: number[];
};

const runner = new AlgorithmRunner();

export async function POST(req: Request) {
  const { keys, data } = (await req.json()) as RequestData;

  const runTimes = runner.run(keys, data);
  return Response.json({ runTimes });
}
