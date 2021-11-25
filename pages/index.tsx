import type { NextPage } from "next";
import { SEO } from "../common/components/SEO";
import { AppLayout } from "../modules/AppLayout";
import AboutMe from "./../modules/aboutMe/index";
import Services from "./../modules/services/index";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <SEO />
      <AboutMe />
      <Services />
    </AppLayout>
  );
};

export default Home;
