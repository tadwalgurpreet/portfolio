import React from "react"
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from "../../assets/mywork_data"

const MyWork = () => {
  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                    <div 
                        key={index} 
                        className="mywork-item"
                        onClick={() => window.open(work.w_github, '_blank', 'noopener,noreferrer')}
                    >
                        <div className="mywork-item-image">
                            <img src={work.w_img} alt={work.w_name} />
                        </div>
                        <div className="mywork-item-content">
                            <h3 className="mywork-item-title">{work.w_name}</h3>
                            <p className="mywork-item-description">{work.w_description}</p>
                            <div className="mywork-item-tech">
                                {work.w_tech.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="mywork-item-link">
                                <span>View on GitHub →</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyWork