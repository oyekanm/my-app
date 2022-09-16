import Styles from "../../styles/Reviews.module.css";
import Link from "next/link";
import Head from "next/head";

function Details({ Review }) {
  const { id, name, email, body } = Review;
  return (
    <>
      <Head>
        <title>Code-Addict | Review Details</title>
      </Head>
      <div className="container">
        <p className="Title text-center">Review Details </p>
        <p className={Styles.comment}>Comment {id}</p>
        <p className={Styles.name}>{name}</p>
        <p className={Styles.email}>{email}</p>
        <p className={Styles.body}>{body}</p>
        <p className="Text">
          Back to the
          <Link href="/reviews">
            <a className="redirect"> Review Page</a>
          </Link>
        </p>
      </div>
    </>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  const paths = data.map((path) => {
    return {
      params: { id: `${path.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${params.id}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      Review: data,
    },
  };
};

export default Details;
