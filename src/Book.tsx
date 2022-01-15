import React, { useState, MouseEvent, AnimationEvent, TouchEvent, } from 'react'
import { PageBack } from "./PageBack"

export default function Book() {
  const [prevPointer, setPrevPointer] = useState(0);
  const [pointer, setPointer] = useState(1);
  const [nextPointer, setNextPointer] = useState(2);

  const PageFront = ({ pointer = 1, prevPointer = 0, nextPointer = 2 }) => {

    const flipDegree = 179;

    // onClick
    const onClickRight = (e: MouseEvent<HTMLDivElement>) => {
      if (pointer === 64) return;
      // next
      // e.currentTarget.classList.add('animate');
      e.currentTarget.style.animation = `flip-${flipDegree} 1s ease-in-out forwards`;
    };

    const onClickLeft = (e: MouseEvent<HTMLDivElement>) => {
      if (pointer === 1) return;
      e.currentTarget.style.animation = `flip-reverse-${flipDegree} 1s ease-in-out forwards`;
    };

    // swipe
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
      setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e: TouchEvent<HTMLDivElement>) {
      setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEndRight(e: TouchEvent<HTMLDivElement>) {
      if (touchStart - touchEnd > 75) {
          // do your stuff here for left swipe
          if (pointer === 64) return;
        e.currentTarget.style.animation = `flip-${flipDegree} 1s ease-in-out forwards`;
      }

      // if (touchStart - touchEnd < -75) {
      //     // do your stuff here for righ75t swipe
      //     if (pointer == 1) return;
      //     e.currentTarget.style.animation = `flip-reverse-${flipDegree} 1s ease-in-out forwards`;
      // }
    }

    function handleTouchEndLeft(e: TouchEvent<HTMLDivElement>) {
      // if (touchStart - touchEnd > 75) {
      //     // do your stuff here for left swipe
      //     if (pointer == 64) return;
      //   e.currentTarget.style.animation = `flip-${flipDegree} 1s ease-in-out forwards`;
      // }

      if (touchStart - touchEnd < -75) {
          // do your stuff here for righ75t swipe
          if (pointer === 1) return;
          e.currentTarget.style.animation = `flip-reverse-${flipDegree} 1s ease-in-out forwards`;
      }
    }



    // animated end
    const onAnimationEndRight = (e: AnimationEvent<HTMLDivElement>) => {
      // e.currentTarget.classList.remove('animate','animate-reverse');
      e.currentTarget.style.animation = 'none';
      e.currentTarget.style.transform = `rotateY(-${flipDegree}deg)`;
      e.currentTarget.style.animation = 'none';
      setPrevPointer(prevPointer + 1);
      setPointer(pointer + 1);
      setNextPointer(nextPointer + 1);
    }

    const onAnimationEndLeft = (e: AnimationEvent<HTMLDivElement>) => {
      e.currentTarget.style.animation = 'none';
      e.currentTarget.style.transform = `rotateY(-${flipDegree}deg)`;
      setPrevPointer(prevPointer - 1);
      setPointer(pointer - 1);
      setNextPointer(nextPointer - 1);
    }

    // css flip
    const css = window.document.styleSheets[0];
    css.insertRule(`
      @keyframes flip-${flipDegree} {
        0%   { transform: rotateY(0deg); }
        100% { transform: rotateY(-${flipDegree}deg); }
      }`, css.cssRules.length);

    css.insertRule(`
      @keyframes flip-reverse-${flipDegree} {
        0%   { transform: rotateY(-${flipDegree}deg); }
        100% { transform: rotateY(0deg); }
      }`, css.cssRules.length);
    return (
      <>
        <div className="page" >
          <div className="section left" style={{ backgroundImage: 'url(https://bts-typescript.khalidperwira.repl.co/src/assets/' + pointer + '.webp)' }} onClick={onClickLeft} onAnimationEnd={onAnimationEndLeft} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEndLeft}>
          </div>
          <div className="section right" onClick={onClickRight} onAnimationEnd={onAnimationEndRight} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}onTouchEnd={handleTouchEndRight}>
            <div className="frontfaceright" style={{ backgroundImage: 'url(https://bts-typescript.khalidperwira.repl.co/src/assets/' + pointer + '.webp)' }}></div>
            <div className="backfaceright" style={{ backgroundImage: 'url(https://bts-typescript.khalidperwira.repl.co/src/assets/' + nextPointer + '.webp)' }}></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
        {<PageBack nextPointer={nextPointer} prevPointer={prevPointer} />}
        {<PageFront pointer={pointer} nextPointer={nextPointer} prevPointer={prevPointer} />}
    </>
  );
}