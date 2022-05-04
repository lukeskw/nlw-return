import { CloneWidgetButton } from '../../../CloseWidgetButton';
import { FeedbackTypes, feedbackTypes } from '../../index'

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackTypes) => void;
}

export function FeedbackTypeStep ({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return(
    <>
      <header>
        <span className="text-xl leading-6"> Deixe seu feedback</span>

        <CloneWidgetButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key,value])=>{
          return (
            <button 
              type="button"
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 
                flex-1 flex flex-col items-center gap-2 border-2
                  border-transparent hover:border-brand-500
                  focus:outline-none focus:border-brand-500"
              
              onClick={() => {onFeedbackTypeChanged(key as FeedbackTypes)}}
            >
              <img src={value.img.src} alt={value.img.alt}/>
              <span className="">{value.title}</span>
            </button>
          );
        }) }
      </div>
    </>
  )
}