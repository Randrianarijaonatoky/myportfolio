import React, { useEffect } from 'react';


const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        // Vous pouvez charger des plugins ici, si nécessaire
        await loadFull(main)
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div>

        </div>
    )
};

export default ParticlesBackground;
