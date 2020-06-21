import React, { Component } from 'react'
import Title from './Title';
import { FaHiking , FaShuttleVan, FaMapSigns } from "react-icons/fa";
export default class Services extends Component {
    state ={
        services:[
    {
        icon: <FaHiking/>,
        title:"Endless Hiking",
        info: "The trail is primarily used for hiking, walking, rock climbing, and nature trips. This is an easier hike for wonderful bridge views.If you are into repelling you can access sites from this trail."
    },
    {
        icon: <FaShuttleVan/>,
        title:"Free Shuttle",
        info: "Transportation Pakistan Tour and Travel aims to provide best quality transport services to our Customers. We use state of art technology for comfortable. Our goal is to provide the best travel experience."
    },
    {
        icon: <FaMapSigns/>,
        title:"Tour Guide",
        info: "Had an amazing experience with our tour guide.Local Travel Guides. Enjoy the services of the local travel guide and know more about the history, culture and the importance of the different places you visit."
    }
]
    }
    render() {
        return (
            <section className="services">
                <Title  title='Services' />
        <div className="services-center">
        {this.state.services.map((item, index) => {
            return (
            <article key={index} className="service">
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
            </article>
            );
        })}
        </div>
            </section>
        )
    }
}
