import React from 'react';

export const Services = ({ title, description, number, svgs }) => {
    return (
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#f4f8fd] flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[var(--brandcolor)]">
            {typeof svgs === "string" ? (
                <img src={svgs} alt={title} className="w-12 h-12" />
            ) : (
                svgs
            )}
            <p className="font-bold text-2xl mt-0.5 group-hover:text-white text-black/80">
                {title}
            </p>
            <p className="text-gray-400 group-hover:text-white text-sm">
                {description}
            </p>
            <p style={{ WebkitTextStroke: '1px #dbdbdb', WebkitTextFillColor: 'transparent' }} className="group-hover:WebkitTextStroke-white text-5xl font-bold self-end">
                {number}
            </p>
        </div>
    );
}

// export default Services;
