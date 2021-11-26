import React from 'react';
import styles from "./Search.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {changeFilterItem} from "../../redux/Contacts/ContactsAction";
import Loader from "react-loader-spinner";
import * as contactsSelectors from "../../redux/Contacts/ContactsSelectors";


export default function Filter() {

  const value = useSelector(contactsSelectors.setFilter)
  const loading = useSelector(contactsSelectors.setLoading)
  const dispatch = useDispatch()
  const onChange = (e) => dispatch(changeFilterItem(e.target.value))
  return (
    <div className={styles.search}>
      {loading ?
        <Loader className={styles.loading} type="Oval" color="#ADFF2FFF" height={50} width={50} timeout={3000}/> : ""}
      <label className={styles.search_label}>
        <input className={`${styles.search_input} animate__animated animate__fast animate__fadeInUpBig`} type="text" value={value} onChange={onChange}/>
      </label>
    </div>
  );

}
