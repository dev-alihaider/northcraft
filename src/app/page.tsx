
import IntroPage from "../components/landing-page/IntroPage";
import TotalProjects from "../components/landing-page/TotalProjects";
import Card from "../components/landing-page/Card";
import ClientReview from "../components/landing-page/ClientReview";
import CivilConstruction from "../components/landing-page/CivilConstruction";
import FeaturedProject from "../components/landing-page/FeaturedProject";

export default function Home() {
    return (
<>

    <IntroPage/>
    <Card/>

    <TotalProjects/>
    <FeaturedProject/>
    <ClientReview/>

    <CivilConstruction/>
</>
    );
}
