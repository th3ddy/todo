import Link from "next/link"; //untuk link
import { TodoDelete } from "./todo-delete";
import { API_URL } from "@/constants/api-url";

export const TodoList = async () => {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  return (
    <section>
      {data.map((item) => {
        return (
          <div className="">
            <div key={item._id} className="flex gap-2">
              <Link href={`/todos/${item._id}`}>
                Unit : {item.unit} / Batch :{item.batch} / Message :
                {item.description}
              </Link>
              <TodoDelete id={item._id} />
            </div>
          </div>
        );
      })}
    </section>
  );
};
