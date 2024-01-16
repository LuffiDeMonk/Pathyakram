import Advertisment from "./components/Advertisment";
import Banner from "./components/Banner";
import Notice from "./components/Notice";
import UniversitySlider from "./components/UniversitySlider";

const getUniversityData = async () => {
  const response = await fetch('http://localhost:8000/universities')
  if (!response.ok) {
    throw new Error('No data found')
  }
  return response.json()
}

type UniversityData = {
  name: string;
  location: string;
  established_year: number;
  affiliation: string;
  id: string;
}

export default async function Home() {
  const sliderData: UniversityData[] = await getUniversityData()
  return (
    <>
      <Banner isMainpage={true} />
      <Advertisment />
      <UniversitySlider data={sliderData} />
      <Notice />
    </>
  )
}
