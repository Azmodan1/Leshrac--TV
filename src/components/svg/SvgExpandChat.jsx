import React from 'react'

export default function ExpandChat() {
  return (
    <div className="icon_main" data-tooltip="Развернуть" id="expand_chat_main">
      <svg display="none">
        <symbol viewBox="0 0 550.354 550.354" id="expand_chat">
          <g>
            <g>
              <path
                d="M541.169,208.807H261.295c-5.07,0-5.906-2.484-1.87-5.551l68.373-51.919c4.039-3.066,7.311-9.66,7.311-14.73V25.578
			c0-5.07-3.269-6.689-7.301-3.614L3.025,269.61c-4.033,3.075-4.033,8.057,0,11.132L327.811,528.39
			c4.033,3.076,7.301,1.457,7.301-3.613V413.748c0-5.07-3.274-11.665-7.311-14.73l-68.372-51.919
			c-4.04-3.066-3.201-5.551,1.87-5.551h279.876c5.07,0,9.18-4.11,9.18-9.181V217.988
			C550.349,212.917,546.239,208.807,541.169,208.807z"
              />
            </g>
          </g>
        </symbol>
      </svg>
      <svg className="icon">
        <use xlinkHref="#expand_chat"></use>
      </svg>
    </div>
  )
}
