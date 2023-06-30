import React from 'react';
import styles from './index.module.css'

function ProductManager() {
    return (
        <div className='Dashborde'>
            <div className={styles.parentContainer}>
                <div className={styles.childContainer}>
                    <div className={styles.gooooooz}>

                    </div>
                    <div className={styles.fixedElement}>This element is fixed and maintains its width</div>
                </div>
            </div>
        </div>
    );
}

export default ProductManager;