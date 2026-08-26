import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="relative w-full min-h-[25vh] text-white">
        <div className=" absolute left-10 top-5 p-2">
          <h1 className="text-3xl">Contact me!</h1>
          <br></br>
          <li className="text-xl list-none">
            <Link href="https://github.com/TijnEekhout">
              <ul>Github</ul>
            </Link>
            <ul>
              <a href="mailto:t.eekhout@sintlucasedu.nl">Mail</a>
            </ul>
            <Link href="https://www.linkedin.com/in/tijn-eekhout-8351003a6/">
              <ul>LinkedIn</ul>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}
