import React from 'react'

export const PageBack = ({prevPointer=0,nextPointer=2}) => {
    const env = "https://raw.githubusercontent.com/khalidperwira/bts-zendavest/main/src/assets/";
    return (
      <>
        <div className="page">
          <div className="section left" style={{ backgroundImage: 'url('+ env + prevPointer + '.webp)' }} >
          </div>
          <div className="section right">
            <div className="frontfaceright" style={{ backgroundImage: 'url('+ env + nextPointer + '.webp)' }}></div>
          </div>
        </div>
      </>
    );
  }