import React from 'react';
import Feature from '../../components/feature/Feature';
import './team.css';

const team = () => (
    <div className="vga__whatvga section__margin">
        <div className="vga__whatvga-heading" id="team">
            <h1 className="gradient__text">
                VGA: Create talking videos from 2D images by learning 3D facial movements
                Based on Deep Learning techniques
            </h1>
        </div>
        <div className="vga__whatvga-container">
            <Feature
                title="Who are we?!"
                text={(
                    <>
                        - Ahmed Elsayed Sneed <br />
                        - Ziad Elsayed Elbrolosy <br />
                        - Yousef Yassin Elmenair <br />
                        - Basmalla Ayman Elbedwehy <br />
                        - Menna Wesam Mohamed <br />
                    </>
                )}
            />
            <Feature
                title="Work time"
                text={(
                    <>
                        Delta University for Science and Technology <br />
                        Faculty of Artificial Intelligence
                    </>
                )}
            />
            <Feature
                title="Work time"
                text={(
                    <>
                        AI327 - Work-based Professional Project in Artificial Intelligence(II) <br />
                        Semester 6 <br />
                        Spring 2024 <br />
                        Level 3 <br />
                    </>
                )}
            />
            <Feature
                title="Supervised by"
                text={(
                    <>
                        Dr.Prof. Hesham Arafat <br />
                        Dr. Amany Sarhan
                    </>
                )}
            />
        </div>
    </div>
);

export default team;
