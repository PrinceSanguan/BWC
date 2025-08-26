import styles  from "../Aboutpage/GetStartedSection.module.css";
import Img from "/home/natty/BWC/public/images/getstarted.jpg";

export default function GetStartedSection() {
    return (
        <section className={styles.getStartedSection}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <h1>
                        <span className={styles.getStartedTitle}>Where It All</span>
                        <span className={styles.getStartedTitle}> Started</span>
                    </h1>
                    <h2 className={styles.getStartedDescription}>
                    Invisible Window Cleaning was built on the foundations of a small round originally run by Keith,
                    a well-known window cleaner in South Bristol. For over 15 years, Keith cleaned homes around Bedminster,
                    Southville and Knowle — always with a smile and a wave.
                    </h2>
                    <h2 className={styles.getStartedDescription}>
                    Andy took over the round from Keith when he retired, gradually expanded the team, 
                    and turned the business into what it is today.
                    We still carry many of Keith’s old customers — and his high standards.
                    </h2>
                </div>
                <div className={styles.contentRight}>
                    <img src={Img} alt="Get started image" />
                </div>
            </div>
        </section>
    )
}
