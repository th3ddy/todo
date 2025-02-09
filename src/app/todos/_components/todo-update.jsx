import { revalidatePath } from "next/cache";
import Link from "next/link"; //untuk link
import { API_URL } from "@/constants/api-url";

export const TodoUpdate = ({
  id,
  name,
  unit,
  batch,
  description,
  createddate,
  completed,
  notes,
}) => {
  //updateTodoAction
  async function updateTodoAction(formData) {
    "use server";
    const _id = formData.get("id");
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
      method: "PUT",
      body: JSON.stringify({
        _id,
        name,
        unit,
        batch,
        description,
        createddate,
        completed,
        notes,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const data = await res.json(); //untuk cek
    // console.log(data);
    revalidatePath(`/todos/${id}`);
  }
  //updateTodoAction
  return (
    <div className="w-auto">
      <section>
        <form className="space-y-2" action={updateTodoAction}>
          <input name="id" defaultValue={id} hidden />
          <input
            name="name"
            placeholder="Input Your Name"
            defaultValue={name}
            hidden
          />
          <input
            name="unit"
            placeholder="Input Your Unit"
            defaultValue={unit}
            hidden
          />
          <input
            name="batch"
            placeholder="Input Your batch"
            defaultValue={batch}
            type="number"
          />
          <textarea
            name="description"
            placeholder="Input Message Error"
            defaultValue={description}
          />
          <input
            name="createddate"
            type="date"
            defaultValue={createddate}
            hidden
          />
          <input name="completed" defaultValue={completed} hidden />
          <input name="notes" defaultValue={notes} hidden />
          <button>Update Todo</button>
        </form>
      </section>
    </div>
  );
};
