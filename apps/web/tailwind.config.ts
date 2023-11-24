import { config as sharedConfig, type Config } from '@repo/ui/tailwind.config'

const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig]
}

export default config
