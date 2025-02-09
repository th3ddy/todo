import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { TodoList } from "./todos/_components/todo-read";
import { TodoCreate } from "./todos/_components/todo-create";

const API_URL = "https://v1.appbackend.io/v1/rows/UBmuxwe7fuX0";

export default async function Home() {
  // const res = await fetch(API_URL);
  // const { data } = await res.json();

  //revalidatePath("/");

  return (
    <main className="space-y-4 p-6">
      <section>
        <h3 className="text-5xl font-semibold tracking-tight">Coretax</h3>
        <h3 className="text-lg font-semibold tracking-tight text-red-600">
          Coretax changes your life !!!
        </h3>
        <p className="text-sm font-semibold tracking-tight">
          Silakan masukkan pesan error saat import atau validasi data pada
          sistem Coretax
        </p>
        <div className="items-center">
          <Link href="/todos/form/input">
            <button>Create</button>
          </Link>
        </div>
      </section>
      {/* <TodoCreate /> */}
      <TodoList />
    </main>
  );
}
