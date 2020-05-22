
import React from 'react';
import Icon from './Icon';

export default function Statistics(props) {
  return (
    <Icon
      {...props}
    >
      <g transform="matrix(.380952 0 0 .380952 0 0)">
        <path d="M10 9h-8c-1.104 0-2 .896-2 2v40c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-40c0-1.104-.896-2-2-2Z"></path>
        <path d="M27.833 23h-8c-1.104 0-2.833.11-2.833.864v27.273c0 .753 1.729 1.863 2.833 1.863h8c1.105 0 1.167-1.11 1.167-1.863v-27.273c0-.754-.062-.864-1.167-.864Z"></path>
        <path d="M44.5 12h-8c-1.104 0-2.5.334-2.5 1.364v37.273c0 1.029 1.396 2.363 2.5 2.363h8c1.104 0 1.5-1.334 1.5-2.363v-37.273c0-1.03-.396-1.364-1.5-1.364Z"></path>
        <path d="M61.5 37h-8c-1.104 0-2.5-.175-2.5.228v14.545c0 .402 1.396 1.227 2.5 1.227h8c1.104 0 1.5-.825 1.5-1.228v-14.544c0-.403-.396-.228-1.5-.228Z"></path>
      </g>
    </Icon>
  );
}
