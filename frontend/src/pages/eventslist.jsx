import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "../styles/Eventslist.module.css";

const eventslist = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2>Find Events</h2>

          <div className={styles.search}>
            <label htmlFor="">Location</label>
            <input type="text" placeholder="London" />
            <label htmlFor="">Date</label>
            <input type="Date" placeholder="2024/11/23" />
            <label htmlFor="">Event Type</label>
            <select name="" id="">
              <option value="Online">Online</option>
              <option value="Physical">Physical</option>
              <option value="Blended">Blended</option>
            </select>

            <label htmlFor="">Price Range</label>
            <select name="" id="">
              <option value="">All Prices</option>
              <option value="$0 - $500">$0 - $500</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$1000+">$1000+</option>
            </select>
          </div>
        </div>

        <div className={styles.mainbar}>
          <div className={styles.event_item}>
            <img
              src="/eventlist_image1.jpg"
              alt=""
              className={styles.event_image}
            />
            <div className={styles.event_detail}>
              <h2>London Concert</h2>
              <button>$20</button>
              <span>Location: London</span>
            </div>

            <div className={styles.event_detail}>
              <span>Date: Tue feb 1 2025</span>
              <span>Capacity: 200 people</span>
              <span>Ticket: Required</span>
              <span>Place: Physical</span>
            </div>
          </div>
          <hr />
          <div className={styles.event_item}>
            <img
              src="/crowd.jpg"
              alt=""
              className={styles.event_image}
            />
            <div className={styles.event_detail}>
              <h2>Amsterdam Concert</h2>
              <button>$15</button>
              <span>Location: Amsterdam</span>
            </div>

            <div className={styles.event_detail}>
              <span>Date: wed feb 15 2025</span>
              <span>Capacity: 100 people</span>
              <span>Ticket: Required</span>
              <span>Place: Physical</span>
            </div>
          </div>
          <hr />
          <div className={styles.event_item}>
            <img
              src="/Crowd1.jpg"
              alt=""
              className={styles.event_image}
            />
            <div className={styles.event_detail}>
              <h2>Coldplay India</h2>
              <button>$30</button>
              <span>Location: Mumbai,India</span>
            </div>

            <div className={styles.event_detail}>
              <span>Date: Wed Jan 13 2025</span>
              <span>Capacity: 6000 people</span>
              <span>Ticket: Required</span>
              <span>Place: Physical</span>
            </div>
          </div>
          <hr />
          <div className={styles.event_item}>
            <img
              src="/audience.jpg"
              alt=""
              className={styles.event_image}
            />
            <div className={styles.event_detail}>
              <h2>Diljit Concert</h2>
              <button>$25</button>
              <span>Location: Delhi,India</span>
            </div>

            <div className={styles.event_detail}>
              <span>Date: Sat Dec 20 2025</span>
              <span>Capacity: 3000 people</span>
              <span>Ticket: Required</span>
              <span>Place: Physical</span>
            </div>
          </div>
          <hr />
          <div className={styles.event_item}>
            <img
              src="/beachparty.jpg"
              alt=""
              className={styles.event_image}
            />
            <div className={styles.event_detail}>
              <h2>Beach Party</h2>
              <button>$7</button>
              <span>Location: Goa</span>
            </div>

            <div className={styles.event_detail}>
              <span>Date: Sun Dec 15 2025</span>
              <span>Capacity: 100 people</span>
              <span>Ticket: Required</span>
              <span>Place: Physical</span>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default eventslist;
