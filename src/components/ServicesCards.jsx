import React from 'react'
import { Slide } from "react-awesome-reveal";

const ServicesCards = () => {

    const ServicesCardData = [
        {
            sevices_id: 1,
            services_title: "Deal 1",
            services_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            services_img_url: "./sec.jpg"
        },
        {
            sevices_id: 2,
            services_title: "Deal 2",
            services_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            services_img_url: "./sec2.jpg"
        },
        {
            sevices_id: 3,
            services_title: "Deal 3",
            services_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            services_img_url: "./sec3.jpg"
        },

        {
            sevices_id: 4,
            services_title: "Deal 4",
            services_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            services_img_url: "./sec.jpg"
        },
        {
            sevices_id: 5,
            services_title: "Deal 5",
            services_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            services_img_url: "./sec.jpg"
        },
        {
            sevices_id: 6,
            services_title: "Deal 6",
            services_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            services_img_url: "./sec2.jpg"
        },
        {
            sevices_id: 7,
            services_title: "Deal 7",
            services_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            services_img_url: "./sec3.jpg"
        },

        {
            sevices_id: 8,
            services_title: "Deal 8",
            services_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            services_img_url: "./sec.jpg"
        },

    ]
    return (
        <>


            <Slide triggerOnce>
                <div className='cards grid grid-cols-4 gap-10 py-8 px-8'>
                    {ServicesCardData.map((Services) => (
                        <div className='card bg-success rounded border border-gray-300 shadow-md' key={Services.sevices_id}>
                            <div className='card-img'>
                                <img src={Services.services_img_url} alt="" />
                            </div>
                            <div className='card-text p-2'>
                                <p className='font-black text'>{Services.services_title}</p>
                                <p>{Services.services_description}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </Slide>
        </>
    )
}

export default ServicesCards
