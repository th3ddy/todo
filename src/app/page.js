import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/UBmuxwe7fuX0");
  const { data } = await res.json();

  return (
    <main className="space-y-4 p-6">
      <section>
        <h3 className="text-lg font-semibold tracking-tight"> Ticket List</h3>
      </section>
      <section>
        {data.map((item) => {
          return (
            <div key={item._id}>
              <Link href={`/todos/${item._id}`}>{item.description}</Link>
            </div>
          );
        })}
      </section>
      <section>
        <form className="space-y-2">
          <input name="name" placeholder="Input Your Name" />
          <input name="Unit" placeholder="Input Your Unit" />
          <input name="batch" placeholder="Input Your batch" type="number" />
          <textarea name="description" placeholder="Input Message Error" />
          <input name="createddate" type="date" hidden />
          <input name="completed" defaultValue="N" hidden />
          <button>Create Todo</button>
        </form>
      </section>
    </main>
  );
}
