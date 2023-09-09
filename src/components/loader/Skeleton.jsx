import { Skeleton } from "@mui/material";

const SkeletonCard = ({ width = 2000, height = 3000 }) => {
    return (
        <Skeleton animation="wave" sx={{ aspectRatio: width / height, backgroundColor: 'var(--surface-container-highest)', marginBottom: '10px', transform: 'unset' }} />
    )
}

export default SkeletonCard;

// custom skeleton
// <div className="skeleton"></div>