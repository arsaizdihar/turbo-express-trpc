import { Button } from "ui";
import { trpc } from "../utils/trpc";

function Home() {
  const { data } = trpc.useQuery(["getUser"]);
  return (
    <div className="text-xl">
      <div>{JSON.stringify(data)}</div>
      <Button />
    </div>
  );
}

export default Home;
