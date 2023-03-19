import CardContainer from "../../Components/CardContainer/CardContainer";
import ImageSlider from "../../Components/carousel/ImageSlide";
import { SlideData } from "../../Components/carousel/SlideData";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <>
      <ImageSlider slides={SlideData} />
      <Projects />
    </>
  );
}

//Solo el achivo index de Pages recibe este export
