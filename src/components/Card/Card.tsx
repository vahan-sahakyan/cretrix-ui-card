import ShareIcon from "../../assets/share.svg";
import LikeIcon from "../../assets/like.svg";
import DotsIcon from "../../assets/dots.svg";

import "./Card.scss";

export default function Card() {
  return (
    <article>
      <header>
        <div className="cover"></div>
        <div className="avatar"></div>
        <span>1237 views · 1 day ago</span>
      </header>

      <main>
        <h2>Everything about pineapples and other tropical fruits</h2>
        <p>By: Nana McDougall</p>
        <section>
          <label>
            Progress: <span>64%</span>
          </label>
          <progress value={"64"} max={"100"} />
        </section>
        <footer>
          <img src={DotsIcon} />
          <aside>
            <img src={LikeIcon} />
            <img src={ShareIcon} />
          </aside>
        </footer>
      </main>
    </article>
  );
}
