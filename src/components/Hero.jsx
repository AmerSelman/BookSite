import styles from "../style";
import { Books } from "../constants";

const Hero = () => {
  return (
    <section>
      <h1 className="text-center text-[40px] font-bold py-6">Books</h1>
      <div class={`${styles.gridLayout}`}>
      {Books.map((nav, index) => (
        
      <div className="place-content-center">
            <div className={`${styles.boxStyle}`}>
              <img src={nav.BookImg} className={`${styles.imgStyle}`}/>
              <div className="text-center text-[18px] font-bold m-2">
                <hi>{nav.BookName}</hi>
              </div>
              <hr class="my-2 border-black"/>
              <div className="text-center font-semibold text-[16px] my-2">
                <p1>
                  Category: {nav.Category}
                </p1>
              </div>
              <div className="text-center text-[16px] px-6">
                <p1>
                  Price: {nav.Price}$
                </p1>
              </div>
              <div className="text-center text-[16px] px-6 py-2">
                <p1>
                  Author: {nav.Author}
                </p1>
              </div>
              <div className="text-center text-[16px] px-4">
                <pi>
                  {nav.Info}
                </pi>
              </div>
            </div>
      
      </div>
      ))}
      </div>            
    </section>
  )
}

export default Hero