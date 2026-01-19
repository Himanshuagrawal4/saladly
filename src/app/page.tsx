import Hero from "@/components/sections/Hero";
import WhySaladly from "@/components/sections/WhySaladly";
import Menu from "@/components/sections/Menu";

import HowItWorks from "@/components/sections/HowItWorks";
import ServiceAreas from "@/components/sections/ServiceAreas";
import SocialProof from "@/components/sections/SocialProof";
// import LeadCapture from "@/components/sections/LeadCapture";

export default function Home() {
    return (
        <>
            <Hero />
            <WhySaladly />
            <Menu />

            <HowItWorks />
            <ServiceAreas />
            <SocialProof />
            {/* <LeadCapture /> */}
        </>
    );
}
