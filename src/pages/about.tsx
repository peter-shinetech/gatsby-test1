import * as React from 'react'
import MyComponent from '../components/MyComponent'
import { InvalidComponent, ValidComponent } from '../components/ValidComponent'

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <MyComponent />
      <ValidComponent />
      <InvalidComponent />
    </main>
  )
}

export default AboutPage

export const Head = () => <title>About Me</title>