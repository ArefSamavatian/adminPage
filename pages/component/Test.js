import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


function Test() {

    
        const [isOpen, setIsOpen] = useState(false);

        const variants = {
            open: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                }
            },
            closed: {
                x: '-100%',
                opacity: 0,
                transition: {
                    duration: 0.3
                }
            }
        };

        const dropdownVariants = {
            open: {
                opacity: 1,
                y: 0
            },
            closed: {
                opacity: 0,
                y: -10
            }
        };


        return (

                <div className="sidebar">
                    <motion.nav
                        animate={isOpen ? 'open' : 'closed'}
                        variants={variants}
                    >
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                Dropdown
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.ul
                                            variants={dropdownVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                        >
                                            <li>Option 1</li>
                                            <li>Option 2</li>
                                            <li>Option 3</li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </motion.nav>
                </div>


       
        );
    }


export default Test;