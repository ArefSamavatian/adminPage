import { motion } from 'framer-motion';
import { TreeItem } from '@mui/material'

function AnimatedTreeItem(props) {
    const animation = {
        opacity: 0,
        y: -10,
        transition: {
            opacity: { duration: 0.2 },
            y: { duration: 0.3 }
        }
    };

    return (
        <motion.div initial={animation} animate={{ opacity: 1, y: 0 }}>
            <TreeItem {...props} />
        </motion.div>
    );
}


export default AnimatedTreeItem