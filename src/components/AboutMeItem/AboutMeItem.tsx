import './AboutMeItem.scss'

type Props = {
  title: string,
  items: {
    subItem_title: string,
    subtitle: string,
    description: string,
    listItems?: string[]
  }[]
}

const AboutMeItem = ({title, items}: Props) => {
  return (
    <div className='sectionContainer' key={title}>
      <h2 className='sectionContainer__title'>{title}</h2>
        {
         items?.map((item)=>{
          return(
            <div className='sectionContainer__sectionItem' key={item.subItem_title}>
              <h3 className='sectionContainer__sectionTitle'>{item.subItem_title}</h3>
              <p className='sectionContainer__sectionSubtitle'>{item.subtitle}</p>
              <p className='sectionContainer__sectionDescription'>{item.description}</p>
              {
                item.listItems &&
                <ul className='sectionContainer__sectionList'>
                  {
                    item.listItems?.map((listItem)=> {
                      return(
                        <li key={listItem} className='sectionContainer__sectionListItem'>{listItem}</li>
                      )
                    })
                  }
                </ul>
                
              }
            </div>
          )
         }) 
        }
    </div>
  )


}

export default AboutMeItem