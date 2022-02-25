import classes from "./about.module.css";


const About = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>About</div>
        <h2 className={(classes.about2, classes.about)}>Inspired by the </h2>
        <h2 className={classes.about}>
          Dynamism and free-spirited Essence of Pop Art. form to
          <br />
          Collection is a dazzl ing tribute <br />
          To individuality.
        </h2>
      </div>
    </div>
  );
};

export default About;
