import Image from "next/image";
import Link from "next/link"; //untuk link
import { revalidatePath } from "next/cache";

const API_URL = "https://v1.appbackend.io/v1/rows/UBmuxwe7fuX0";

export default async function Home() {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  //server action harus menggunakan use server

  //createTodoAction

  async function createTodoAction(formData) {
    "use server";
    const name = formData.get("name");
    const unit = formData.get("unit");
    const batch = formData.get("batch");
    const description = formData.get("description");
    const createddate = formData.get("createddate");
    const completed = formData.get("completed");
    const notes = formData.get("notes");

    // console.log(name, unit, batch, description, createddate, completed);

    //    const res = await fetch(API_URL, { //awalnya seperti ini, setelah jadi const res-nya bisa dihapus
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify([
        {
          name,
          unit,
          batch,
          description,
          createddate,
          completed,
          notes,
        },
      ]),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const data = await res.json(); //untuk cek
    // console.log(data);
    revalidatePath("/");
  }
  //createTodoAction

  //deleteTodoAction
  async function deleteTodoAction(formData) {
    "use server";

    const id = formData.get("todo_id");
    // console.log("id");
    await fetch(API_URL, {
      method: "DELETE",
      body: JSON.stringify([id]),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/");
  }
  //deleteTodoAction

  return (
    <main className="space-y-4 p-6">
      <section>
        <h3 className="text-lg font-semibold tracking-tight"> Ticket List</h3>
      </section>
      <section>
        {data.map((item) => {
          return (
            <div key={item._id} className="flex gap-2">
              <Link href={`/todos/${item._id}`}>{item.description}</Link>
              <form action={deleteTodoAction}>
                <input name="todo_id" defaultValue={item._id} hidden />
                <button className="bg-red-600 text-white rounded-lg text-xs px-2 py-1">
                  Delete
                </button>
              </form>
            </div>
          );
        })}
      </section>
      <section>
        <form className="space-y-2" action={createTodoAction}>
          <input name="name" placeholder="Input Your Name" />
          <input name="unit" placeholder="Input Your Unit" />
          <input name="batch" placeholder="Input Your batch" type="number" />
          <textarea name="description" placeholder="Input Message Error" />
          <input
            name="createddate"
            type="date"
            defaultValue="2025-02-08"
            hidden
          />
          <input name="completed" defaultValue="N" hidden />
          <input name="notes" defaultValue="" hidden />
          <button>Create Todo</button>
        </form>
      </section>
    </main>
  );
}
