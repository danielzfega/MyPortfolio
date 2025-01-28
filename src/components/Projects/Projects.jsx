import React, {useState} from 'react'
import { FaPersonCircleQuestion, FaEarthAmericas } from 'react-icons/fa6'
import homestyler from '../../images/homestyler.png'
import './Projects.css'

const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'Project - Home Decor',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusantium, necessitatibus laboriosam illum atque dolore error quam expedita molestiae et aut consequuntur distinctio. In, voluptatem qui magnam numquam blanditiis assumenda?',
      mission: 'Front-end Developer, system analysis and design',
      language: 'HTML5, CSS3, ReactJs...',
      images: homestyler
    },
    {
      name: 'Project - Home Decor',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusantium, necessitatibus laboriosam illum atque dolore error quam expedita molestiae et aut consequuntur distinctio. In, voluptatem qui magnam numquam blanditiis assumenda?',
      mission: 'Front-end Developer, system analysis and design',
      language: 'HTML5, CSS3, ReactJs...',
      images: homestyler
    },
    {
      name: 'Project - Home Decor',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusantium, necessitatibus laboriosam illum atque dolore error quam expedita molestiae et aut consequuntur distinctio. In, voluptatem qui magnam numquam blanditiis assumenda?',
      mission: 'Front-end Developer, system analysis and design',
      language: 'HTML5, CSS3, ReactJs...',
      images: homestyler
    }
  ])
  return (
    <div>
      <section className="projects">
        <div className="title">
          My Projects
        </div>
        <div className="projectsDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatibus. Tenetur magnam quibusdam sed ullam, nemo quo voluptates? Blanditiis odio expedita perferendis neque explicabo commodi aliquam nobis. Ut, minima perspiciatis.
        </div>
        <div className="list">
          {
            listProjects.map((value, key) => (
              <div key= {key} className='item'>

                  <div className="images">
                    <img src={value.images} alt="" />
                  </div>

                  <div className="content">
                    <h3>{value.name}</h3>

                    <div className="contentDesc">{value.des}</div>

                    <div className="mission">
                       <div className='missionIcon'><FaPersonCircleQuestion/></div>

                       <div>
                        <h4>Mission</h4>
                        <div className="missionTxt">{value.mission}</div>
                       </div>

                    </div>

                    <div className="mission">
                       <div className='missionIcon'><FaEarthAmericas/></div>

                       <div>
                        <h4>Language</h4>
                        <div className="missionTxt">{value.language}</div>
                       </div>
                       
                    </div>
                  </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Projects
