import React, { useState } from "react";
import { Button, InputBase } from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './styles.scss';

export default function SearchView(props: any) {

  const [currentInput, setCurrentInput] = useState<string>()

  const setCity = (e: any) => {
    e.preventDefault();
    props.setCity(currentInput)
  }

  return (
    <form className="search-bar" onSubmit={setCity}>
      <InputBase
        className="search-input"
        placeholder="Search…"
        onChange={e => setCurrentInput(e.target.value)}
        endAdornment={
          <Button variant="contained" color="primary" size="large" className="search-button" type="submit">
            Go <PlayCircleFilledIcon className="search-icon" fontSize="small" />
          </Button>
        }
      />
    </form>

  );
}
