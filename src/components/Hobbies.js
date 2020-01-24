import React from "react";

import Togglable from "./Togglable";

const Hobbies = () => {
  const styles = {
    backgroundColor: "#d2dae2"
  };
  return (
    <div className="container" style={styles}>
      <section>
        <Togglable buttonLabel={"My Hobbies..."} label={"Hide Hobbies..."}>
          <article className="flex-a">
            <header>
              <h3>My Hobbies</h3>
            </header>

            <p>
              Things I like to do in spare time are cycling or walking in the
              nature and listening musics. I also like to make some Nepali
              dishes. My favourite foods are{" "}
              <q>daal, vaat, achar and tarkari</q> in Nepali words. I like doing
              meditation and also composing poems in my free and imaginative
              state of mind.
            </p>

            <p>
              I have also done some volunteer works. As I was in Nepal, during
              the time of earthquake crisis in April 2015, I personally, helped
              to rescue many quake striken people to get them out from the
              piling rubbles.{" "}
            </p>
            <p>
              During the time of this crisis, there was no time to wait for aid
              agencies or government forces to arrieve, rather urgent rescue was
              required from anyone one who is safe and is witness to the scene.
              I believe <q>Service to mankind is service to God.</q>{" "}
            </p>
            <p>
              My favourite quote, since I was in standard 10 student-{" "}
              <q>Laugh, the whole world will laugh with you but cry alone.</q>
            </p>
          </article>
        </Togglable>

        <Togglable buttonLabel={"My Poems..."} label={" Hide Poems..."}>
          <article className="flex-b">
            <h3>Prosaic Me</h3>
            <p>
              Ask the signing and setting Sun what love is, and you get the
              answer; Ask the Moon, playing hide and seek with the patches of
              cloud, what love is, and you get the answer; Ask the butterflies,
              hovering over the perfectly blooming garden, what love is, and you
              get the answer; Ask the Roses, spreading fragrance and giving
              adorable smiles at you, what love is and you get the answer; Ask
              the stars in the silvery night what love is, and you get the
              answer; Ask the whistling wind, passing through the forest, what
              love is, and you get the answer; Ask the colorful sky with
              spectrum of rainbows, what love is, and you get the answer; Ask
              the flock of birds, hovering over the open sky, what love is, and
              you get the answer; Ask me what love is, and wait for the
              answer!!!
            </p>
          </article>
        </Togglable>
        <Togglable
          buttonLabel={"Anniversary Wish..."}
          label={"Hide Anniversary Wish..."}
        >
          <article className="flex-a">
            <h3>One of the Anniversary Wishes to My SweetHeart</h3>
            <p>
              Forgetting the world treading into your world. Melting into you,
              living by your heart. Submissive into your love and care; seeing
              your dreams, walking to your destination. Loving your love,
              thinking your thoughts, seeing your sights, walking your road...
              The walk that never ends; as the day follows another day, the year
              follows another year and the final rest enlivens our love in an
              eternal dream... So are we and love. A full-hearted submission to
              this infinite journey of love, care and affection that surface
              sometimes into words; esp. on Anniversaries... Thanks, the
              auspicious day!
            </p>
          </article>
        </Togglable>
        <Togglable
          buttonLabel={"First Birthday Wish..."}
          label={"Hide Wishes..."}
        >
          <article className="flex-b">
            <h3>First Birthday Wish to Daughter Biansha</h3>
            <p>
              Each single moments you moved or started to kick me instilled in
              me more heavenly pleasure; unqueenchable desires to see you, to
              get on lap and hug you came to reality on this day. Peeping
              through the blanket, looking for me every single moment that you
              think you are breathing in me but i know I am breathing in you as
              well. Learning to take turns then crowling then uttering some
              indistinct sounds then standing on supports and finally you are
              here walking on your own feet...yes sweetheart you are one year
              old. Happy birthday Biansha- Lots of love from Mamu & Baba !!
              14.05.2015
            </p>
          </article>
        </Togglable>
        <Togglable
          buttonLabel={"Feelings At Daughter's Birth..."}
          label={"Hide Feelings..."}
        >
          <article className="flex-a">
            <h3>Expression of Impatient Wait to My First Princess</h3>
            <p>
              Unceasingly at motion, the curious clock,breathlessly paces at no
              pause. The loftiest peak constantly at her glaringly brilliant and
              radiant eyes to see the goddess of the sky. Boastfully the ocean
              carries my glad tidings and drives me to the victionity of heart,
              engendering the much awaited pleasure; the pleasure that I have
              been looking for long.....An impatient wait...14.05.2014
            </p>
          </article>
        </Togglable>
      </section>
    </div>
  );
};
export default Hobbies;
