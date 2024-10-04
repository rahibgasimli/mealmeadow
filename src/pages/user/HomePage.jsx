import EndirimliMehsullar from '../../components/home/EndirimliMehsullar'
import PhotoSlide from '../../components/home/PhotoSlide'
import CloseRestorans from '../../components/home/CloseRestorans'
import BravoCard from '../../components/home/BravoCard'
import Partnyor from '../../components/home/Partnyor'
import Contact from '../../components/home/Contact'
import HomeMainSlide from '../../components/home/HomeMainSlide'
import Categories from '../../components/home/Categories'

const HomePage = () => {
  return (
    <>
        <HomeMainSlide/>
        <Categories/>
        <EndirimliMehsullar/>
        <PhotoSlide/>
        <CloseRestorans/>
        <BravoCard/>
        <Partnyor/>
        <Contact/>
    </>
  )
}

export default HomePage