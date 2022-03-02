import {
  createBox,
  createRestyleComponent,
  createText,
  createVariant,
  VariantProps,
} from '@shopify/restyle'
import { Theme } from '../styles/restyle'

export const View = createBox<Theme>()

const _Text = createText<Theme>()
export function Text({
  children,
  ...props
}: React.ComponentProps<typeof _Text>) {
  return (
    <_Text variant="body" {...props}>
      {children}
    </_Text>
  )
}

export const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof View>,
  Theme
>([createVariant({ themeKey: 'cardVariants' })], View)

export const Welcome = () => {
  return (
    <View
      flex={1}
      backgroundColor="background"
      paddingVertical="xl"
      paddingHorizontal="m"
    >
      <Text variant="largeTitle">Welcome</Text>
      <View flexDirection={{ phone: 'column', tablet: 'row' }}>
        <Card margin="s" variant="secondary">
          <Text variant="body">This is a simple example</Text>
        </Card>
        <Card margin="s" variant="primary">
          <Text variant="body">Displaying how to use Restyle</Text>
        </Card>
      </View>
    </View>
  )
}
