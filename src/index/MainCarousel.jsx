import React from "react";
import { Carousel } from "antd";
import PropTypes from "prop-types";
import Color from "../../general/Color";
import CarouselItem from "./CarouselItem";

export default function MainCarousel({ banners }) {
    return (
        <div>
            {/* <div style={{ width: "100%" }}>
                <Carousel autoplay autoplaySpeed={3000}>
                    {banners.map((i, index) => {
                        return (
                            <a
                                href={i.url}
                                key={index}
                                style={{ position: "relative" }}
                            >
                                <CarouselItem />
                            </a>
                        );
                    })}
                </Carousel>
            </div> */}
        </div>
    );
}

MainCarousel.defaultProps = {
    banners: [1, 2, 3, 4, 5],
};

MainCarousel.propTypes = {
    banners: PropTypes.array.isRequired,
};
