import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import ideaUrl from '../../assets/images/icons/idea.svg';
import otherUrl from '../../assets/images/icons/other.svg';
import bugUrl from '../../assets/images/icons/bug.svg';
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    img: {
      src: bugUrl,
      alt: 'this is a bug icon'
  },
  },
  IDEA: {
    title: "Ideia",
    img: {
      src: ideaUrl,
      alt: 'this is a lamp icon'
  },
  },
  OTHER: {
    title: "Outro",
    img: {
      src: otherUrl,
      alt: 'this is a thought baloon icon'
  },
  },
}

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [fbType, setFbType] = useState<FeedbackTypes | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    const handleRestartFeedback = () => {
      setFeedbackSent(false)
      setFbType(null)
    }
    
    return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 
        flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        
        { feedbackSent ? (
          <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
        ) : (
          <>
            {!fbType ? (
              <FeedbackTypeStep onFeedbackTypeChanged={setFbType}/>
            ) : (
              <FeedbackContentStep 
              feedbackType={fbType}
              handleRestartFeedback= {handleRestartFeedback}
              onFeedbackSent={()=>setFeedbackSent(true)}
              />
              )}
          </>
        )}

        <footer className="text-xs text-neutral-400 max-w-[8rem] text-center break-all">
            <p>Feito com ❤ por
              <a className="font-semibold underline underline-offset-2" href="https://github.com/lukeskw" target="_blank"> Luke </a>
               e pela
              <a className="font-semibold underline underline-offset-2" href="http://rocketseat.com.br" target="_blank"> Rocketseat</a></p>
        </footer>
      </div>
    )
}