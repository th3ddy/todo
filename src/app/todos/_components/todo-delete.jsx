import { revalidatePath } from "next/cache";
import Link from "next/link";
import { API_URL } from "@/constants/api-url";
export const TodoDelete = ({ id }) => {
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
    <form action={deleteTodoAction}>
      <input name="todo_id" defaultValue={id} hidden />
      <button className="bg-red-600 text-white rounded-lg text-xs px-2 py-1">
        Delete
      </button>
    </form>
  );
};
