import { Badge, Card, Text, createStyles, Group, ActionIcon } from '@mantine/core'
import { IconDeviceLaptop, IconBookmark, IconShare } from '@tabler/icons';
import './Project.scss'

type Props = {
  title: string
  description: string
  tools: {
    name: string
    fAwasome: string
  }[]
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },
  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));
const Project = ({ title, description, tools }: Props) => {
  const { classes, theme } = useStyles();
  return (
    <Card shadow='md' p="lg" radius="md" className={classes.card} >
      <Card.Section mb="sm">

      </Card.Section>
      <Badge>Categoria</Badge>
      <Text weight={700} className={classes.title} mt="xs" size="lg">
        {title}
      </Text>
      <Text size="sm"  lineClamp={4}>
        {description}
      </Text>
      <Group mt="lg" >
        <Text size='md'> Technology used</Text>
           {tools.map((tool, index) => (
            <div key={index} className="project__icon">
              <i className={tool.fAwasome}>{tool.name}</i>
            </div>
          ))}
      </Group>
      <Card.Section className={classes.footer}>
        <Group position="apart">
        <Group spacing={0}>
        <ActionIcon>
          <IconDeviceLaptop size={30} color={theme.colors.yellow[7]} stroke={1.5}/>
          </ActionIcon>
        </Group>
        </Group>
      </Card.Section>
    </Card>
    // <div className='project'>
    //   <div className='project__header'>
    //     <h2 className='project__title'>{title}</h2>
    //   </div>
    //   <div className='project__body'>
    //     <p>{description}</p>
         
    //       <h3 className='project__bodyTitle'>Technology used</h3>
    //       <div className={'project__tools'}>
    //       {tools.map((tool, index) => (
    //         <div key={index} className="project__icon">
    //         <i className={tool.fAwasome}>{tool.name}</i>
    //         </div>
    //       ))}
    //   </div>
    //   </div>
    // </div>
  )
}

export default Project
