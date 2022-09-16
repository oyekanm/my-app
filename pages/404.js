import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);

  return (
    <>
      <Head>
        <title>Code-Addict | Error404</title>
      </Head>
      <div className="container text-center">
        <p className="Title"> Opppsss!!!</p>
        <p className="Text"> This page cant be found</p>
        <p className="Text">
          Back to the
          <Link href="/reviews">
            <a className="redirect"> Home Page</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default ErrorPage;
