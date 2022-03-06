import React, { useState } from 'react';

const Accordion = ({ items }) => {
    // names the first element (index of 0) to the variable of 'activeIndex' and the second element (index of 1) to the variable of 'setActiveIndex'. null is the default value...so activeIndex is null in this case:
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (ind) => {
        setActiveIndex(ind);
    };

    const renderedItems = items.map((item, ind) => {
        const active = ind === activeIndex ? 'active': ''
        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    onClick={() => onTitleClick(ind) }>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    })
    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;