import ImageGrid from "../components/ImageGrid";

import MichelleFurlonginterplay1 from "../assets/images/MichelleFurlonginterplay1.jpg";
import MichelleFurlonginterplay2 from "../assets/images/MichelleFurlonginterplay2.jpg";
import MichelleFurlonginterplay3 from "../assets/images/MichelleFurlonginterplay3.jpg";
import MichelleFurlonginterplay4 from "../assets/images/MichelleFurlonginterplay4.jpg";
import MichelleFurlonginterplay5 from "../assets/images/MichelleFurlonginterplay5.jpg";
import MichelleFurlonginterplay6 from "../assets/images/MichelleFurlonginterplay6.jpg";
import MichelleFurlonginterplay7 from "../assets/images/MichelleFurlonginterplay7.jpg";

export default function InterPlay() {
  const imageUrls = [
    MichelleFurlonginterplay1,
    MichelleFurlonginterplay2,
    MichelleFurlonginterplay3,
    MichelleFurlonginterplay4,
    MichelleFurlonginterplay5,
    MichelleFurlonginterplay6,
    MichelleFurlonginterplay7,
  ];
  return (
    <div>
      <h1>&quot;INTER-PLAY&quot;</h1>
      {/* <img src={MichelleFurlonginterplay1} alt="Michelle Furlong" /> */}
      <div className="text-container">
        <p>
          <b>ENTER - PLAYER</b> Lines and numbers mark the rules. Twists direct
          the motions to get into. Some tools to pick up. Alternate bodies to
          become. Michelle Furlong’s Inter”play” invites us into the mindset
          required for “play” where the repetitive gestures of game, sport, and
          ritual suggest a new possibility around rules, skillsets and armory
          for world-building. The games as we know them collapse alongside an
          almost manic re-imagining of futures. This is the play that is forming
          inside of us. These spaces of transformation are familiar: The pool
          shark’s flow. Your batting average stats. The pulse of a drumming
          ceremony. Dances, marches, punches, swings, kicks, catches, throws,
          rolls. Your avatar is really you, out-gaming you. The materials for
          playing with play are tools reshaped into wands, or things we might
          like to smash: drumming sticks, the scratchy green turf of a soccer
          field, our cleats digging-in, the cue ball careening across a green
          velvet surface. There are also the gestures that wring from the hands.
          The somatic effects of everyone’s body acting together without being
          told to, the steps of the dance in your arms and your legs, a
          frequency of being and becoming together. A catcher’s mask. Mitts,
          gloves, and jerseys. The stamping of feet, sacred or carnivalistic.
          The game has a higher stake as our ancestral and bodily memories enter
          the game. They ricochet outwards as sound, energy, a protest, nets or
          walls torn down. Sometimes the game is about stepping over a boundary
          into another space, a non-space where there is freedom, no one knows
          but us. Touch the walls of it. Map and re-dream it. So at least we
          know it’s possible. Michelle asks us to explore other ways of being in
          the world. To drop our weapons. Fold our hand. Let all the faces of
          all the games we’ve played work on simultaneous planes in our
          consciousness. Then shuffle them. Scatter the I Ching. Pick our way
          through them towards the disassembled, ‘broken’ parts — divining the
          unknown? If only to comment on what is to come. Eyes on the field,
          hand signals to the catcher. Skip, fall, chant. Quest for profit and
          extraction. A certain trance overtakes us, Sometimes with violence.
          Quest beyond our limits. Remember, “I dreamt one thousand basketball
          courts. Nothing holier then sports.”* <br /> <br />
          —Text by <b>Alisha Piercy</b> <br /> *Lyric credit: Cocorosie{" "}
          <a
            className="text-link"
            target="_blank"
            href="https://www.youtube.com/watch?v=AgPYhz70b9I"
          >
            “K-Hole”
          </a>
        </p>
      </div>
      <ImageGrid images={imageUrls} />
    </div>
  );
}
