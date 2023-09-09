/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import styles from './collection.module.css';
import { Link } from "react-router-dom";


const CollectionCard = ({ id, title, media_count }) => {
    return (
        <Link to={`/collections/detail/${id}`} className={styles.listItem}>
            <Button color='inherit' style={{ justifyContent: 'unset', textAlign: 'inherit' }} className={`grid-card list-item two-line`} data-ripple>
                <div>
                    <h3 className="body-large">{title}</h3>
                    <p className={`body-medium ${styles.label}`}>{media_count} media</p>
                </div>
            </Button>
        </Link>
    )
}

export default CollectionCard;