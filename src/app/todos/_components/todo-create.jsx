import { revalidatePath } from "next/cache";
import Link from "next/link"; //untuk link
import { API_URL } from "@/constants/api-url";

export const TodoCreate = () => {
  // const res = await fetch(API_URL);
  // const { data } = await res.json();
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
  return (
    <div className="w-auto">
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
    </div>
  );
};
