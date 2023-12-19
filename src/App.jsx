import styles from './style';
import { Navbar, Hero, Footer } from './components';

const App = () => {
  return (
    <div>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>
        <div className="bg-greyColor w-[86%] m-auto overflow-hidden">
          <div  className={`${styles.padding} ${styles.flexCenter}`}>
            <Hero />
          </div>
        
      </div>
      <div className='bg-primary w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default App