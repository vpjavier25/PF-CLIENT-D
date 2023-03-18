import { useParams } from "react-router-dom";
import { getProjectById, provGetId, cleanId } from "../../Redux/Slicers/projectSlicer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DetailProject() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let projectById = useSelector((state) => state.project.projectId);

  useEffect(() => {
    dispatch(provGetId(id));
    return ()=>{
      dispatch(cleanId());
    }
  }, []);

  return (
    <div>
      {Object.keys(projectById).length > 0 ? (
        <div>
          <img src={projectById.image} alt={projectById.name} />
          <h2>Name: {projectById.name}</h2>
          <h3>Title: {projectById.title}</h3>
          <p>description: {projectById.description}</p>
          <p>Location: {projectById.location}</p>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}
