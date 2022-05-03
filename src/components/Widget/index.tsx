import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget(){
  

  return (
    <>
      <Popover className="absolute bottom-4 right-4">
        <Popover.Panel>Hello world</Popover.Panel>
        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12
           hover:bg-violet-500 text-white flex items-center group 
            focus:outline-none focus:ring  focus:border-violet-900"
            >
          <ChatTeardropDots className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden 
            group-hover:max-w-xs transition-all duration-700 ease-linear">
              Feedback
          </span>
        </Popover.Button>
      </Popover>
    </>
  )
}