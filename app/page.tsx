import Advertisment from "../components/Advertisment";
import Notice from "@/components/Notice";
import UniversitySlider from "@/components/UniversitySlider";
import Banner from "@/components/Banner";
import PlayWithAi from "@/components/PlayWithAi";




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
      <Banner isMainpage={true} />
      <PlayWithAi />
      <Advertisment />
      <UniversitySlider />
      <Notice />
    </>
  )
}
