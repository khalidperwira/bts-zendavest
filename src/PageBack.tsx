import React from 'react'

export const PageBack = ({prevPointer=0,nextPointer=2}) => {
    return (
      <>
        <div className="page">
          <div className="section left" style={{ backgroundImage: 'url(https://bts-typescript.khalidperwira.repl.co/src/assets/' + prevPointer + '.webp)' }} >
          </div>
          <div className="section right">
            <div className="frontfaceright" style={{ backgroundImage: 'url(https://bts-typescript.khalidperwira.repl.co/src/assets/' + nextPointer + '.webp)' }}></div>
          </div>
        </div>
      </>
    );
  }