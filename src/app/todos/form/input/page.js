import Link from "next/link";
import { TodoCreate } from "../../_components/todo-create";

export default async function Home() {
  return (
    <section>
      <TodoCreate />
      <div>
        <Link href="/">
          <button className=" py-2 px-2 bg-red-700">Home</button>
        </Link>
      </div>
    </section>
  );
}
