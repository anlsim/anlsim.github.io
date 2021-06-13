import React from 'react';
import Skill from './Skill';

class SkillsMenu extends React.Component {
    constructor(){
        super();
        this.state ={
            skills:  [
                {
                    id: 1,
                    title: 'Languages',
                    skillItem:[ 
                        
                        {
                            name:'Java',
                            fAwesome: 'fab fa-java'
                        },
                        {
                            name:'C#',
                            fAwesome: null
                        },
                        {
                            name:'JavaScript',
                            fAwesome: 'fab fa-js-square'
                        },
                        {
                            name:'SQL',
                            fAwesome: null
                        },
                        {
                            name:'HTML5',
                            fAwesome: 'fab fa-html5'
                        },
                        {
                            name:'CSS3',
                            fAwesome: 'fab fa-css3-alt'
                        },
                        {
                            name:'',
                            fAwesome: 'fab fa-sass'
                        }
                    ]

                },
                {
                    id: 2,
                    title: 'Frameworks',
                    skillItem:[ 
                        {
                            name:'Bootstrap',
                            fAwesome: 'fab fa-bootstrap'
                        },
                        {
                            name:'React',
                            fAwesome: 'fab fa-react'
                        },
                        {
                            name:'VUE.Js',
                            fAwesome: 'fab fa-vuejs'
                        },
                        {
                            name:'',
                            fAwesome: 'fab fa-node'
                        },
                        {
                            name:'ASP.NET',
                            fAwesome: null
                        },
                    ]

                },
                {
                    id: 3,
                    title: 'Other',
                    skillItem:[ 
                        {
                            name:'OPP',
                            fAwesome: null
                        },
                        {
                            name:'MVC',
                            fAwesome: null
                        },
                        {
                            name:'',
                            fAwesome: 'fab fa-git'
                        },
                        {
                            name:'GitHub',
                            fAwesome: 'fab fa-github'
                        },
                        {
                            name:'',
                            fAwesome: 'fab fa-aws'
                        },
                        {
                            name:'Azure',
                            fAwesome: null
                        },   
                        {
                            name:'Figma',
                            fAwesome: 'fab fa-figma'
                        },               
                    ]

                },
                {
                    id: 4,
                    title: 'Adobe',
                    skillItem:[ 
                        {name:'Photoshop'},
                        {name:'Illustrator'},
                        {name:'Lightroom'},
                        {name:'InDesign'},
                        {name:'Xd'},
                    ]

                },
        ]
        };
        }
        render(){
            return(
                <>
                <div className='row'>
                   {
                        this.state.skills.map(({id, ...SectionProps}) => (
                            <Skill key={id} {...SectionProps}/>
                        ))
                    }
                  
                </div>
                </>
            );

    }
}

    export default SkillsMenu;