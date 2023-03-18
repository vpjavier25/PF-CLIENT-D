import {Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider, Button} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter, addFilterLocation, addFilterState, orderByAlpha } from "../../Redux/Slicers/projectSlicer";
import style from './Filters.module.css'


export default function Filters ({page, ord}){

    //lógica para conseguir todas las locaciones
    const allProjects = useSelector(state => state.project.AllProjects);
    const allLocations = new Set();
    allProjects.forEach(project => {allLocations.add(project.location)});
    const locations = Array.from(allLocations);

    //lógica de los filtros
    const filterLocation = useSelector(state => state.project.filterLocation);
    const filterState = useSelector(state => state.project.filterState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filter())
        page(1);
    }, [filterLocation, filterState])
   
    const handlerFLocation = (e) =>{
        dispatch(addFilterLocation(e))
    }

    const handlerFState = (e) =>{
        dispatch(addFilterState(e))
    }

    //logica ordenamiento

    const handlerAlphaOrder = (e) =>{
        dispatch(orderByAlpha(e))
        page(1);
    }

    return(
        <div>
            <Menu closeOnSelect={false } overflow="scroll">
                <MenuButton as={Button} colorScheme='blue' className={style.Buttons}>
                    Ordenar:
                </MenuButton>
                <MenuList minWidth='240px'>
                    <MenuOptionGroup defaultValue='none' title='Orden Alfabético' type='radio' onChange={handlerAlphaOrder}>
                        <MenuItemOption value='none'>Ninguno</MenuItemOption>
                        <MenuItemOption value='asc'>A-Z</MenuItemOption>
                        <MenuItemOption value='desc'>Z-A</MenuItemOption>
                        <MenuItemOption value='+'>Mayor costo</MenuItemOption>
                        <MenuItemOption value='-'>Menor cost</MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
            <Menu closeOnSelect={false}>
                <MenuButton as={Button} colorScheme='blue'  className={style.Buttons}>
                    Filtrar por: 
                </MenuButton>
                <MenuList minWidth='240px' maxWidth='300px'>
                    <MenuOptionGroup title='Estado' type='checkbox'onChange={handlerFState}>
                        <MenuItemOption value={true} >Completado</MenuItemOption>
                        <MenuItemOption value={false} >En Proceso</MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup title='Pais' type='checkbox'onChange={handlerFLocation} maxWidth='300px' overflow="scroll">
                        {locations.map((location, i)=>{
                            return <MenuItemOption value={location} key={i}>{location}</MenuItemOption>
                        })}
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </div>
    )
}