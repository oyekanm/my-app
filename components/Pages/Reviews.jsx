import React, { useState } from "react";
import Card from "../utilities/Card";
import Link from "next/link";
import Styles from "../../styles/Reviews.module.css";
import Pagination from "./Pagination";
function ReviewsPage({ Review }) {
  const [index, setIndex] = useState(1);
  const [postPerPage, setPostPerpage] = useState(20);

  const lastIndex = postPerPage * index;
  const firstIndex = lastIndex - postPerPage;
  const comments = Review.slice(firstIndex, lastIndex);

  const changeIndex = (value) => {
    setIndex(value);
  };

  return (
    <div className="container">
      <p className="Title text-center"> Reviews </p>
      {comments.map((review) => {
        const { id, name } = review;
        return (
          <Card key={id}>
            <p className={Styles.name}>{name}</p>
            <Link href={`/reviews/${id}`}>
              <a className={Styles.bttn}> Check comments </a>
            </Link>
          </Card>
        );
      })}
      <div className="page">
        <Pagination
          changeIndex={changeIndex}
          totalComments={Review.length}
          postPerPage={postPerPage}
        />
      </div>
    </div>
  );
}

export default ReviewsPage;
