import ImageSlider from "../../Components/carousel/ImageSlide";
import { SlideData } from "../../Components/carousel/SlideData";

export default function Home() {
  return (
    <>
      <ImageSlider slides={SlideData} />
    </>
  );
}

//Solo el achivo index de Pages recibe este export
