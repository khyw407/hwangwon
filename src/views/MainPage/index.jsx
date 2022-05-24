import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from './Sections/Banner';
import Category from './Sections/Category';
import withRoot from '../../components/withRoot';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <Footer />
    </>
  );
}

export default withRoot(MainPage);
