import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Button } from './button'
import {wInfo} from '../../utils'
// import { IconButton } from ''


const stories = storiesOf('Button', module).addDecorator(withInfo())


stories.add('with text', wInfo(`
    This is the base info for all the button styles
`)(() => (
    <Button
        content={ text('content', 'button text')}
        edges={select('Edge style', ['sharp', 'rounded', 'rounded-sharp'], 'sharp')}
        primaryColor={
            select(
                'Background color',
                ['primary', 'success', 'error', 'alert', 'dark'],
                'dark'
            )
        }
        inverted={boolean('Inverted', false)}
    />
)))