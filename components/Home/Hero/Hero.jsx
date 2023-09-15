import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="https://thispersondoesnotexist.com/"
          width={500}
          height={500}
          alt="random person"
        />
      </div>
      <div className="title-wrapper">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </section>
  );
}
