import React, {Component} from 'react';
import Skill from './Skill';

class SkillsMenu extends Component {
    constructor(){
        super();
        this.state ={
            skills:  [
                {
                    id: 1,
                    title: 'Languages',
                    skillItem:[ 
                        {name:'Java'},
                        {name:'C#'},
                        {name:'JavaScript'},
                        {name:'SQL'},
                        {name:'HTML5'},
                        {name:'CSS3'},
                        {name:'SASS'}
                    ]

                },
                {
                    id: 2,
                    title: 'Frameworks',
                    skillItem:[ 
                        {name:'Bootstrap'},
                        {name:'React'},
                        {name:'Node.Js'},
                        {name:'ASP.NET'},
                    ]

                },
                {
                    id: 3,
                    title: 'Ohter',
                    skillItem:[ 
                        {name:'OPP'},
                        {name:'MVC'},
                        {name:'GIT'},
                        {name:'GitHub'},
                        {name:'AWS'},
                        {name:'Azure'},                 
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