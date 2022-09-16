import Link from "next/link";

function Pagination({ changeIndex, totalComments, postPerPage }) {
  //   const [newIndex, setNewIndex] = useState(numbers);
  const numbers = [];
  for (let i = 1; i <= Math.ceil(totalComments / postPerPage); i++) {
    numbers.push(i);
  }
  console.log(numbers);
  return (
    <ul className="pagination">
      {numbers.map((number) => {
        return (
          <li
            class="page-item"
            key={number}
            onClick={() => changeIndex(number)}
          >
            <Link href="#">
              <a class="page-link text-dark">{number}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
