import React from 'react';

const BannerItem = ({slide}) => {
    const {id,prev,next,picture}=slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img alt="" src={picture} className="w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-20 text-6xl text-white font-bold  top-1/4">
                    <h1>
                        Affordabel <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-20 w-2/5 text-xl text-white  top-1/2">
                    <p>
                        There Are Many Variation Of Passages Of Available.But The Majority Have Suffered Alteration In Some Form
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-20 w-2/5 text-xl text-white  top-3/4">
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;