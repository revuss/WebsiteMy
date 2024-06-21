import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section>
        <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-16 my-20">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-second">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
              Something&#xFF07;s missing.
            </p>
            <p className="mb-4 text-lg font-light text-second my-10">
              Sorry, we can&#xFF07;t find that page. You&#xFF07;ll find lots to
              explore on the home page.{" "}
            </p>
            <Link
              href="/"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
