import React from 'react'
// import './AccordionStyles.css';
import Accordion from 'react-bootstrap/Accordion';

const CustomeAccordion = () => {
    const data = [
        {
            title: "1. Introduction to cyber safety",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            title: "2. Passwords",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            title: "3. Socially engineered attacks",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            title: "4. Data security risks",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            title: "5. Your responsibilities",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            title: "6. More information",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
    ]
    return (
        <Accordion defaultActiveKey="0" className='Accordion'>
            {
                data.map((item, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index} className='item'>
                            <Accordion.Header id='header' className='header'>{item.title}</Accordion.Header>
                            <Accordion.Body className='body'>
                               {item.desc}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
            }

        </Accordion>
    )
}

export default CustomeAccordion
