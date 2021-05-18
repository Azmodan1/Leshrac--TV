import React from 'react'

export default function SvgMore() {
  return (
    <div className="icon_main" data-tooltip="Больше" id="more_main">
      <svg display="none">
        <symbol viewBox="0 0 408 408" id="more">
          <g>
            <g id="more-horiz">
              <path
                d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51
			s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
			S232.05,153,204,153z"
              />
            </g>
          </g>
        </symbol>
      </svg>
      <svg className="icon">
        <use xlinkHref="#more"></use>
      </svg>
    </div>
  )
}
