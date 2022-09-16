import ReviewsPage from "../../components/Pages/Reviews";
import Head from "next/head";

function Reviews({ Review }) {
  return (
    <>
      <Head>
        <title>Code-Addict | Reviews</title>
      </Head>
      <ReviewsPage Review={Review} />;
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props: {
      Review: data.slice(0, 200),
    },
  };
};

export default Reviews;
