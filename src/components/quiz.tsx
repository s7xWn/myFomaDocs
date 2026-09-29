"use client";

import { ReactNode, useState, isValidElement } from "react";

type Answer = {
  text: string;
  correct: boolean;
};

type QuizProps = {
  explantion?: string;
  title?: string | ReactNode;
  answers: Answer[];
  children: ReactNode;
};

export function Quiz({ answers, explantion, title, children }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const answered = selected !== null;
  const isCorrect = selected !== null && answers[selected].correct;

  const content =
    isValidElement(children) && children.type === "p"
      ? (children.props as { children: ReactNode }).children
      : children;

  return (
    <div className="my-6 rounded-xl border p-5">
      <h3 className="mb-4 mt-1 text-lg font-semibold">{title}</h3>
      {content}
      <div className="space-y-2">
        {answers.map((answer, index) => {
          const isSelected = selected === index;

          return (
            <button
              key={index}
              type="button"
              disabled={answered}
              onClick={() => setSelected(index)}
              className={[
                "w-full rounded-lg border p-3 text-left transition",
                !answered &&
                  "hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none",
                isSelected &&
                  answer.correct &&
                  "bg-fd-primary/10 text-fd-primary",
                isSelected &&
                  !answer.correct &&
                  "border-red-500  text-fd-primary",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {answer.text}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4">
          {isCorrect ? (
            <p className="text-green-600">✓ Правильно!</p>
          ) : (
            <p className="text-red-600">✗ Неправильно</p>
          )}
        </div>
      )}
    </div>
  );
}
