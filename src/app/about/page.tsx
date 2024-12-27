import React from 'react';
import EngineeringExcellence from "../../components/about/EngineeringExcellence";
import OurGoal from "../../components/about/OurGoal";
import OurEngineer from "../../components/about/OurEngineer";
import FeaturedProject from "../../components/landing-page/FeaturedProject";
import ClientsReview from "../../components/landing-page/ClientReview";
import CivilConstruction from "../../components/landing-page/CivilConstruction";

function Page() {
    return (
        <>


            <OurGoal/>
            <EngineeringExcellence/>
            <OurEngineer/>
            <FeaturedProject/>
            <ClientsReview/>
            <CivilConstruction/>

        </>
    );
}

export default Page;