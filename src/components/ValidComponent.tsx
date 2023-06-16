import * as React from 'react'

export const ValidComponent = () => {
    return (
      <div>
        <h1>A valid component!</h1>
        <p>This will work fine.</p>
        <p>
          Since there is only one top-level element: the div.
        </p>
      </div>
    )
  }
  
export const InvalidComponent = () => {
    return (
      <>
      <h1>This won't work.</h1>
      <p>Because there are two elements at the top level.</p>
      </>
    )
}