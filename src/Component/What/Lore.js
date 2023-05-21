import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 6500,
});
function HeroSection() {
  return (
    <div className="container">
      <div data-aos="fade-up" data-aos-duration="1000">
        <p style={{ textAlign: "center", color: "#000" }}>
          {" "}
          <HorizontalRuleIcon className="dividerh" /> How it started
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className="hero-text" style={{ textAlign: "center" }}>
          Lore
        </h1>

        <div data-aos="fade-up" data-aos-duration="1000">
          {" "}
          <br />
          <br />
          <p className="about-topu">
            {" "}
            In a world long forgotten, the human race had vanished. A
            cataclysmic event had wiped them out, leaving only ruins and barren
            wastelands. In their place, a new order had risen - an order of
            apes.
            <br />
            <br />
            The apes had evolved, grown in intelligence and strength, until they
            ruled the world. They lived in sprawling cities, built in the ruins
            of human civilization, and had developed their own language,
            culture, and technology.
            <br />
            <br />
            In one such city, high in the canopy of an ancient forest, lived a
            young ape named Kael. Kael was different from the others - he was
            smaller, weaker, and less intelligent. But he had a fire in his
            heart, a burning desire to explore the world beyond the city.
            <br />
            <br />
            One day, Kael gathered a group of his fellow apes and set out on a
            journey. They traveled through the forest, encountering dangers and
            obstacles at every turn. They fought off giant predators, braved
            treacherous terrain, and even faced off against rival ape clans.
            <br />
            <br />
            As they journeyed on, Kael began to realize that there was more to
            the world than he had ever imagined. He discovered ancient ruins,
            lost technology, and even encountered the remnants of human
            survivors, struggling to survive in the harsh world they had
            created.
            <br />
            <br />
            With each new discovery, Kael's resolve grew stronger. He knew that
            he had to share the knowledge he had gained with his fellow apes. He
            returned to his city, determined to change the course of their
            society.
            <br />
            <br />
            But Kael's quest for knowledge had put him at odds with the ruling
            council of apes. They saw his curiosity as a threat to their power,
            and sought to silence him. Kael was banished from the city, cast out
            into the dangerous wilderness beyond.
            <br />
            <br />
            Undaunted, Kael continued his journey, driven by a sense of purpose
            and destiny. He encountered other exiled apes, and together they
            formed a new society, based on the principles of exploration,
            knowledge, and freedom.
            <br />
            <br />
            In time, Kael's society grew stronger, and they began to make
            contact with other ape clans across the wasteland. They shared their
            knowledge, their technology, and their ideas, inspiring a new era of
            progress and innovation.
            <br />
            <br />
            And so, in a world once ruled by destruction and despair, a new
            order had risen - an order of apes, united by a shared desire to
            explore, learn, and grow. Kael had fulfilled his destiny, and his
            legacy would live on for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
