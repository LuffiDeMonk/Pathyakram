import Advertisment from "../components/Advertisment";
import Notice from "@/components/Notice";
import UniversitySlider from "@/components/UniversitySlider";
import Banner from "@/components/Banner";
import PlayWithAi from "@/components/PlayWithAi";
import Navbar from "@/components/Navbar";




// type UniversityData = {
//   name: string;
//   location: string;
//   established_year: number;
//   affiliation: string;
//   id: string;
// }

export default async function Home() {
  return (
    <>
      <Navbar />
      <Banner isMainpage={true} />
      <PlayWithAi />
      <Advertisment />
      <UniversitySlider />
      <Notice />
    </>
  )
}
