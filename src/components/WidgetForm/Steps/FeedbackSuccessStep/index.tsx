import { CloneWidgetButton } from "../../../CloseWidgetButton";
import Check from '../../../../assets/images/icons/check.svg';

type FeedbackSuccessStepProps = {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep ({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
  return(
    <>
    <header>
      <CloneWidgetButton />
    </header>
    <div className="flex flex-col items-center py-10 w-[304px]">
      <img src={Check} alt="this is a check icon" />
      <span className="text-xl mt-2">
          Agradecemos o feedback!
      </span>
      <button className="py-2 px-6 mt-6 bg-zinc-800 rounded-[4px]
        border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors
        focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800
      focus:ring-brand-500"
        onClick={onFeedbackRestartRequested}
      >
          Quero enviar outro
      </button>
    </div>
    </>
  )
}