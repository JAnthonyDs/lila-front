import React, { useDeferredValue } from "react";

import './Style.scss'

const Section: React.FC = () => {
    return (
        <div>
            <p className="text">
                LILA MODELS
            </p>
            <p className="pequeno">LAGOS</p>

            <p className="description">We are modelling agency, showcasing our self and brand to the world, we give this platform to women who are really passionate of been a model.</p>

            <button>See Models</button>
        </div>
    );
}

export default Section;