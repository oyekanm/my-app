import Styles from "../../styles/Layout.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
function NavBar() {
  const [load, setLoad] = useState(false);
  console.log(load);

  return (
    <nav>
      <div className="container Nav">
        <div className={Styles.brand}>
          <Image
            src="/image/code-addict.png"
            width={150}
            height={100}
            alt="logo"
          />
          <div
            className={
              load === false
                ? `${Styles.Navigation} `
                : `${Styles.Navigation} ${Styles.active}`
            }
            onClick={() => setLoad(!load)}
          >
            <div className={`${Styles.Nav__button}`}></div>
            <div className={`${Styles.Nav__button}`}></div>
            <div className={`${Styles.Nav__button}`}></div>
          </div>
        </div>
        <div
          className={
            load === false
              ? `${Styles.Navbar}`
              : `${Styles.Navbar} ${Styles.show}`
          }
        >
          <ul
            className={
              load === false
                ? `${Styles.Nav__list}`
                : `${Styles.Nav__list} ${Styles.Nav__show} `
            }
          >
            <li className={Styles.Nav__item} onClick={() => setLoad(false)}>
              <Link href="/">
                <a className={Styles.Nav__link}>Home</a>
              </Link>
            </li>
            <li className={Styles.Nav__item} onClick={() => setLoad(false)}>
              <Link href="/about">
                <a className={Styles.Nav__link}>About</a>
              </Link>
            </li>
            <li className={Styles.Nav__item} onClick={() => setLoad(false)}>
              <Link href="/reviews">
                <a className={Styles.Nav__link}>Reviews</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
