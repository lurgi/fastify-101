import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";

export async function loader({ context }: Route.LoaderArgs) {
  console.log("🚀🚀", context.app.env.COOKIE_SECRET);
  return {
    a: context.app.env.COOKIE_SECRET,
  };
}

export default function Home() {
  const { a } = useLoaderData();
  console.log(a);
  return <div>hi</div>;
}
