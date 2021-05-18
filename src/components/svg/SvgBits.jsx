import React from 'react'
import { BitsButton } from '../StyledComponents'

export default function Bits() {
  return (
    <div>
      <BitsButton>
        <div>
          <svg display="none">
            <symbol viewBox="0 0 223.646 223.646" id="diamond">
              <g>
                <g>
                  <polygon points="111.823,0 16.622,111.823 111.823,223.646 207.025,111.823 " />
                </g>
              </g>
            </symbol>
          </svg>
          <svg className="icon">
            <use xlinkHref="#diamond"></use>
          </svg>
        </div>
        <h6> Купить Битс</h6>
      </BitsButton>
    </div>
  )
}
