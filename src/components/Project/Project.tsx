import {
  Image,
  Card,
  Text,
  createStyles,
  Group,
  ActionIcon,
  ThemeIcon,
} from '@mantine/core'
import {
  IconDeviceLaptop,
  IconBrandGithub,
} from '@tabler/icons'
import './Project.scss'

type Props = {
  title: string
  description: string
  tools: {
    name: string
    fAwasome: string
  }[]
  gitUrl?: string
  webUrl?: string
  imgUrl?: string
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: '#E7F2F8'

  },

  title: {
    fontFamily: 'Open Sans Condensed',
  },

  action: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },
  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[2]
    }`,
  },
}))
const Project = ({
  title,
  description,
  tools,
  gitUrl,
  webUrl,
  imgUrl
}: Props) => {
  const { classes, theme } = useStyles()
  return (
    <Card
      shadow='md'
      p='lg'
      radius='md'
      className={classes.card}>
      <Card.Section mb='sm'>
        <Image src={imgUrl}  height={300} alt='a'/>
      </Card.Section>
      <Text
        weight={700}
        className={classes.title}
        mt='xs'
        size='lg'>
        {title}
      </Text>
      <Text size='sm' lineClamp={4}>{description}</Text>
      <Text weight={600} size='md' mt='xs'>Technology used</Text>
      <Group mt='lg'>
        {tools.map((tool, index) => (
          <ThemeIcon 
            radius="md" 
            size="xl"
            variant="gradient"
            gradient={{ from: '#489FB5', to: '#489FB5', deg: 90 }}
          >
            <i className={tool.fAwasome}>{tool.name}</i>
          </ThemeIcon>
        ))}
      </Group>

      <Card.Section className={classes.footer}>
        <Group position='apart'>
          <Group spacing={0}>
            {gitUrl && (
              <ActionIcon component='a' href={gitUrl}>
                <IconBrandGithub
                  size={30}
                  color={theme.colors.yellow[7]}
                  stroke={1.5}
                />
              </ActionIcon>
            )}
            {webUrl && (
              <ActionIcon component='a' href={webUrl}>
                <IconDeviceLaptop
                  size={30}
                  color={theme.colors.yellow[7]}
                  stroke={1.5}
                />
              </ActionIcon>
            )}
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
