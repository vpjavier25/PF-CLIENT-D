import ImageSlider from "../../Components/carousel/ImageSlide";
import { SlideData } from "../../Components/carousel/SlideData";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyStatus } from "../../Redux/Slicers/LogInSlicer";

export default function Home() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(verifyStatus());
  }, [dispatch]);
 

  return (
    <>
      <ImageSlider slides={SlideData} />
      
    </>
  );
}

//Solo el achivo index de Pages recibe este export
