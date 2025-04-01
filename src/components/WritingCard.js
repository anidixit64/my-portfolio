import React from "react";
import { FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const WritingCard = ({ w, tabId }) => {
    return (
        <div>
            {tabId === "react-native" ? (
                <a
                    href={w.app}
                    download={w.title}
                    target='_blank'
                    rel='noreferrer'
                    className='work-link-group'>
                    <div className='works-card'>
                        <div className='works-container'>
                            <div className='top-work'>
                                <FiFileText className='work-folder' />
                                <div className='right'>
                                    <a
                                        href={w.app}
                                        download={w.title}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='work-link'>
                                        <FiDownload />
                                    </a>
                                </div>
                            </div>
                            <div className='mid-work'>
                                <p className='work-title'>{w.title}</p>
                                <p className='work-desc'>{w.desc}</p>
                            </div>
                            <div className='bottom-work'>
                                <small>{w.publication}</small>
                            </div>
                        </div>
                    </div>
                </a>
            ) : (
                <Link to={w.site} target='_blank' className='work-link-group'>
                    <div className='works-card'>
                        <div className='works-container'>
                            <div className='top-work'>
                                <FiFileText className='work-folder' />
                                <div className='right'>
                                    <Link className='work-link' to={w.site} target='_blank'>
                                        <FiExternalLink />
                                    </Link>
                                </div>
                            </div>
                            <div className='mid-work'>
                                <p className='work-title'>{w.title}</p>
                                <p className='work-desc'>{w.desc}</p>
                            </div>
                            <div className='bottom-work'>
                                <small>{w.publication}</small>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default WritingCard;
