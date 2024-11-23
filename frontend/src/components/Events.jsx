import React from "react";
import styles from "../styles/Events.module.css";
import { FaHeart } from 'react-icons/fa';


const Events = () => {
  return (
    <div className={styles.container}>
      <div className={styles.events_header}>
        <h3>Upcoming Events</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.events_item}>
          <div className={styles.event_image}>
            <img src="/concert.jpg" alt="Concert" className={styles.image} />
          </div>
          <div className={styles.info}>
            <span>$20</span>


            <FaHeart className={styles.hearticon} />
          </div>

          <div className={styles.desc}>
            <div class={styles.event_date}>
              <h3>DEC</h3>
              <h3>12</h3>
            </div>

            <div className={styles.events_explain}>
              <h2>Delhi Karaoke</h2>

              <span>
                Experience the vibrant nightlife of Delhi with a karaoke night.
                The city offers a diverse range of venues, from cozy lounges to
                energetic bars, where you can sing your favorite songs. Whether
                you're a seasoned singer or a shy beginner, Delhi's karaoke
                scene welcomes everyone.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.events_item}>
          <div className={styles.event_image}>
            <img src="/concert5.jpg" alt="Concert" className={styles.image} />
          </div>
          <div className={styles.info}>
            <span>$40</span>

            <FaHeart className={styles.hearticon} />
          </div>

          <div className={styles.desc}>
            <div class={styles.event_date}>
              <h3>JAN</h3>
              <h3>15</h3>
            </div>

            <div className={styles.events_explain}>
              <h2>Coldplay</h2>

              <span>
                Coldplay, a British rock band formed in London in 1996, has
                captivated audiences worldwide with their signature blend of
                alternative rock and pop. Known for their poignant lyrics, and
                soaring melodies, Coldplay has produced a string of hit albums,
                including "Parachutes" etc.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.events_item}>
          <div className={styles.event_image}>
            <img src="/concert4.jpg" alt="Concert" className={styles.image} />
          </div>
          <div className={styles.info}>
            <span>$60</span>

            <FaHeart className={styles.hearticon} />
          </div>

          <div className={styles.desc}>
            <div class={styles.event_date}>
              <h3>NOV</h3>
              <h3>22</h3>
            </div>

            <div className={styles.events_explain}>
              <h2>Diljit Dosanjh Concert</h2>

              <span>
                Diljit Dosanjh is a renowned Punjabi singer, actor, and
                television presenter. Known for his energetic performances and
                soulful voice, he has captivative audiences worldwide with his
                chart-topping songs and captivating stage presence.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.events_item}>
          <div className={styles.event_image}>
            <img src="/concert3.jpg" alt="Concert" className={styles.image} />
          </div>
          <div className={styles.info}>
            <span>FREE</span>

            <FaHeart className={styles.hearticon} />
          </div>

          <div className={styles.desc}>
            <div class={styles.event_date}>
              <h3>DEC</h3>
              <h3>09</h3>
            </div>

            <div className={styles.events_explain}>
              <h2>Jaipur Karaoke</h2>

              <span>
                Experience the magic of Jaipur's vibrant nightlife with a
                karaoke night. The Pink City offers a variety of venues, from
                cozy lounges to energetic bars, where you can sing your heart
                out to your favorite songs.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.events_item}>
          <div className={styles.event_image}>
            <img src="/concert1.jpg" alt="Concert" className={styles.image} />
          </div>
          <div className={styles.info}>
            <span>$5</span>

            <FaHeart className={styles.hearticon} />
          </div>

          <div className={styles.desc}>
            <div class={styles.event_date}>
              <h3>DEC</h3>
              <h3>25</h3>
            </div>

            <div className={styles.events_explain}>
              <h2>Amsterdam Concert</h2>

              <span>
                Amsterdam, a city renowned for its rich cultural heritage and
                vibrant music scene, hosts a diverse range of concerts
                throughout the year. From classical music to rock, pop, and
                electronic dance music, there's something for everyone.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.events_item}>
          <div className={styles.event_image}>
            <img src="/concert2.jpg" alt="Concert" className={styles.image} />
          </div>
          <div className={styles.info}>
            <span>$10</span>

            <FaHeart className={styles.hearticon} />
          </div>

          <div className={styles.desc}>
            <div class={styles.event_date}>
              <h3>DEC</h3>
              <h3>09</h3>
            </div>

            <div className={styles.events_explain}>
              <h2>Atif Live show</h2>

              <span>
                Atif Aslam, a renowned Pakistani singer, is known for his
                soulful voice and romantic songs. His live shows are a
                mesmerizing experience, where he captivates the audience with
                his melodious voice and performances. Atif's concerts
                are a blend of old classics and new hits, that leaves the audience.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
