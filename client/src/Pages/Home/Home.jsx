import ImageSlider from "../../Components/carousel/ImageSlide";
import { SlideData } from "../../Components/carousel/SlideData";
import Chatbot from "../../Components/chatbot/chatbot";

export default function Home() {
  return (
    <>
      <ImageSlider slides={SlideData} />
      <Chatbot />
    </>
  );
}

//Solo el achivo index de Pages recibe este export
