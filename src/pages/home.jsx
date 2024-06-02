import {
  Hero,
  ServiceSect,
  MyStory,
  MyBook,
  SubSect,
  Testimonial,
  Step,
} from "../components/components";

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
        <ServiceSect />
        <MyStory />
        <MyBook />
        <SubSect />
        <Testimonial />
        <Step />
      </div>
    </>
  );
};

export default Home;
