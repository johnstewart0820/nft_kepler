import React, {useCallback, useRef, useState} from 'react';
import {faq_items} from "../config";
import _ from 'lodash'

function Faq() {

    const [accordionIds, setAccordionIds] = useState<number[]>([]);

    const acc = useRef<Array<HTMLElement | null>>([])

    const onChangeAccordion = useCallback((id: number) => {
        if (_.includes(accordionIds, id)) {
            setAccordionIds(_.remove(accordionIds, item => {
                return item !== id
            }))
        } else {
            setAccordionIds([...accordionIds, id])
        }
    }, [accordionIds])

    return (
        <section id="faq" className="faq">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <p className="description">You have questions, and we have answers. Couldn't find an anwser? Hop in our
                    Discord Community!</p>
                <div className="wrapp-faq__block">
                    {
                        faq_items.map((item, id) => {
                            const isActive: boolean = _.includes(accordionIds, id);
                            return (
                                <div className={`wrapp-faq__block-flex ${isActive && 'active'}`} key={`FAQ-${id}`}>
                                    <button
                                        className={`accordion wrapp-faq__block-title ${isActive && 'active'}`}
                                        onClick={() => onChangeAccordion(id)}
                                    >
                                        {item.title}
                                    </button>
                                    <div ref={ref => acc.current.push(ref)}
                                         className="panel wrapp-faq__block-text"
                                         style={{maxHeight: isActive ? `${acc.current[id]?.scrollHeight}px` : undefined,}}>
                                        {
                                            item.text.map((text, tid) => {
                                                return (
                                                    <p key={`FAQ-text-${id}-${tid}`}>{text}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Faq;