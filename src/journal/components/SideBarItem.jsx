import { TurnedInNot } from "@mui/icons-material";
import { ListItem,ListItemButton, ListItemIcon, ListItemText ,Grid} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";


export const SideBarItem = ({id ,title, body, imageUrls = [], date}) => {

    const dispatch = useDispatch()

    const onClickNote = () => {
        dispatch(setActiveNote({id ,title, body, imageUrls, date}))
    }



    const newTitle = useMemo(()=>{
        return title.length > 17
        ? title.substring(0,17) + '...'
        :title
    },[title])


  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
