import React from 'react';
// Dynamically load all images from /img/logos/ directory
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const logos = importAll(require.context('../img/logos', false, /\.(png|jpe?g|svg)$/));

function Testimonials() {
    return (
        <div>
            <ul className="flex flex-col">
                {logos.map((logo, index) => (
                    <li>
                        <img src={logo} alt={`Logo ${index + 1}`} className="h-16 w-auto" />
                    </li>
                ))}
            </ul>
        </div>
) }

export default Testimonials;