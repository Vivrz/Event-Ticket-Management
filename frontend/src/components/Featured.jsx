import React from 'react';
import styles from '../styles/Featured.module.css';
const Featured = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        <div className={styles.text}>
        <span>Experience more</span>
        <h1>The cheapest ticekts on the internet , period</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero minima numquam atque repellendus fugit, eum, ad deserunt consectetur natus nemo dolor asperiores illo praesentium, quasi quis error laboriosam voluptatum.</span>
        </div>

        <div className={styles.image}>
            <video src="/Rockband.mp4" autoPlay muted loop></video>
        </div>
    </div>
    {/* search box :- */}
    <div className={styles.search}>
      <div className={styles.search_item}>
        <h3>Lacation</h3>

        <input type="text"placeholder="search location" />

      </div>

      <div className={styles.search_item}>
        <h3>Date</h3>

        <input type="date"/>
        
      </div>

      <div className={styles.search_item}>
        <h3>Price</h3>

        <select name="" id="">
          <option value=""selected disabled>All prices</option>
          <option value="0-500">$0-$500</option>
          <option value="$500-$1000">$500-$1000</option>
          <option value="$1000+">$1000+</option>
        </select>
        
      </div>
      <div className={styles.search_item}>
        <h3>Events Type</h3>

        <select name="" id="">
        <option value="online">Online</option>
          <option value="Physical">Physical</option>
          <option value="Blended">Blended</option>
        </select>
        
      <button className={styles.events_button}>
        Find Events
      </button>
      </div>
    </div>
    </div>
    
  )
}

export default Featured