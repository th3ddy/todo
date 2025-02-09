import Link from "next/link";
import { TodoUpdate } from "../_components/todo-update";

//this is dynamic routes
export default async function Home({ params }) {
  //how to get id from the params
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/UBmuxwe7fuX0/${id}`
  );
  const data = await res.json();
  // console.log(data);
  return (
    <main>
      <div className="space-y-2 p-6">
        <h3>Name : {data.name}</h3>
        <h3>Unit : {data.unit}</h3>
        <h3>Batch : {data.batch}</h3>
        <h3>Message : {data.description}</h3>
        <div className="space-y-2">
          <TodoUpdate
            id={data._id}
            name={data.name}
            unit={data.unit}
            batch={data.batch}
            description={data.description}
          />
          <div className="space-y-2">
            <Link href="/">
              <button>BACK</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
