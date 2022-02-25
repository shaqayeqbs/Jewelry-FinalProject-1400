import classes from "./TopDesign.module.css";
import Link from "next/link";
import Image from "next/image";
const TopDesign = () => {
  return (
    <section className={classes.bg}>
      <h1 className={classes.title}>
        <pre className="title"> Freshen Up</pre>
        <pre className="d-inline mb-sm-1 title">       Your Look</pre>
      </h1>
      <div className={classes.lgg}>
        <Image
          alt="this is left background"
          src="/images/BackgroundL.jpg"
          width={400}
          height={570}
        />

        <div className="float-start">
          <h2>Original Stroy</h2>
          <p>
            Sink into our selections for simulating
            <br />
            sips, sounds, and stories that celebrate
            <br /> feminine viality
          </p>
          <div>
          <Link href="/jewelry">
            <a  className={classes.seeAll}> See All</a>
           
          </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopDesign;
