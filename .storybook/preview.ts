import type { Preview } from '@storybook/react'

// @ts-expect-error вероятно из-за эллиасов ошибка
import '../src/app/styles/index.scss'
import '../src/shared/types/TEntitySize'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview
