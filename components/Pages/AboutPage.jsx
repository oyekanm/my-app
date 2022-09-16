import Styles from "../../styles/AboutPage.module.css";
import Image from "next/image";
function AboutPage() {
  return (
    <div className="container">
      <p className="Title text-center"> About Page</p>
      <p className="Text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam
        dignissimos voluptate quas odit vel, saepe ipsam. Voluptatum, deleniti?
        Soluta, incidunt hic? Dolore blanditiis corporis odio perspiciatis!
        Voluptatem, rerum quas.
      </p>
      <div>
        <p className="Title text-center">We the best team </p>
        <div className="row">
          <div className={`col-md-4 text-center ${Styles.Meet}`}>
            <Image
              src="/image/bolu.jpg"
              width="300px"
              height="250px"
              alt="images"
            />
            <p className={Styles.name}>oyekanmi boluwatife</p>
            <p className={Styles.title}>ceo</p>
          </div>
          <div className={`col-md-4 text-center ${Styles.Meet}`}>
            <Image
              src="/image/nerd.jpeg"
              width="300px"
              height="250px"
              alt="images"
            />
            <p className={Styles.name}>oyekanmi abimbola</p>
            <p className={Styles.title}>manager</p>
          </div>
          <div className={`col-md-4 text-center ${Styles.Meet}`}>
            <Image
              src="/image/bmoney.jpeg"
              width="300px"
              height="250px"
              alt="images"
            />
            <p className={Styles.name}>oyekanmi enitan</p>
            <p className={Styles.title}>neutral</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
