import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  transform: {
    // @ts-ignore
    '^.+\\.(t|j)sx?$': ['ts-jest']
  },
}

export default config
