import Banner from "../components/Banner";
import categories from "../data/categories";
import CategorySlider from "../components/CategorySlider";
import Timeline from "../components/Timeline";
import SkillsTools from "../components/SkillsTools";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto pb-16 sm:px-4 lg:px-4">
      <Banner />
      {categories.map((cat, index) => (
        <CategorySlider key={index} title={cat.name} videos={cat.videos} />
      ))}
      <Timeline />
      <SkillsTools />
      <CallToAction />
      <Footer />
    </div>
  );
}