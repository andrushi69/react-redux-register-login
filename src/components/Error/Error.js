import React, {useState} from 'react';
import classes from "./Error.module.scss";

const Error = ({error}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={ open ? classes.error_container : classes.error_container_hide}>
      <div className={classes.error_message}>
        <h1>{error}</h1>
        <button onClick={()=> setOpen(false)}>Close</button>
      </div>

    </div>
  );
};

export default Error;