import React from 'react';
import {ListItemIcon, Checkbox,TextField, List, ListItem, ListItemText, ListItemSecondaryAction,IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import { makeStyles } from '@material-ui/core/styles';
import './App.scss';

function App() {
  return (
    <div className="app">
      started: 27.05.20
      <List>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} role={undefined} dense >
              <ListItemIcon>
                  <Checkbox
                      edge="start"
                      checked={false}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                  />
              </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} secondary={"1 evening"} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
          );
        })}
        <ListItem>
            <TextField label="Outlined" variant="outlined" className={'task-field'}/>
            <TextField label="Outlined" variant="outlined" className={'task-field'}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="save">
                    <SaveIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      </List>
       Прошло дней: 120
       Всего часов нужно уделить: 168
       За это время вечеров уделено: 20 (40часов)
        Скорость: медленно
        До средней скорости: вы не добираете 10 вечеров (20 часов)
    </div>
  );
}

export default App;
