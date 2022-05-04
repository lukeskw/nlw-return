import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackTypes, FeedbackTypes } from "../..";
import { CloneWidgetButton } from "../../../CloseWidgetButton";
import { ScreenshotButton } from "../../ScreenshotButton";

type FeedbackTypeStepProps = {
  feedbackType: FeedbackTypes;
  handleRestartFeedback: () => void;
  onFeedbackSent: () => void;
}
export function FeedbackContentStep({feedbackType, handleRestartFeedback, onFeedbackSent}:FeedbackTypeStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string>('');
    
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    onFeedbackSent()
  }
  return(
    <>
      <header>
        <button type="button" 
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback} 
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.img.src} 
            alt={feedbackTypeInfo.img.alt} 
            className="w-6 h-6"/>
          {feedbackTypeInfo.title}
        </span>
        <CloneWidgetButton />

      </header>
      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          className="min-w-[384px] w-full min-h-[112px] 
          text-sm placeholder-zinc-400 text-zinc-200
          resize-none focus:outline-none 
          focus:ring-zinc-400  focus:border-zinc-400 border-zinc-600 
          bg-transparent rounded-md scrollbar scrollbar-thumb-zinc-700
          scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">

          <ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}/>

          <button className="p-2 bg-brand-500 
          rounded-[4px] border-transparent flex-1 flex justify-center
           items-center text-sm hover:bg-brand-300 focus:outline-none
           focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800
           focus:ring-brand-500 transition-colors
           disabled:opacity-50 disabled:hover:bg-brand-500"
          type="submit"
          disabled={comment.length===0}
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  )
}