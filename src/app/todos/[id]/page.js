import Link from "next/link";

//this is dynamic routes
export default async function Home({ params }) {
  //how to get id from the params
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/UBmuxwe7fuX0/${id}`
  );
  const data = await res.json();
  return (
    <div>
      <h3>{data.name}</h3>
      <h3>{data.description}</h3>
      <div>
        <Link href="/">
          <button>BACK</button>
        </Link>
      </div>
    </div>
  );
}
