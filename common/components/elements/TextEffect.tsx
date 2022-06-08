import React from "react";
import ReactTypingEffect from "react-typing-effect";

interface TextEffectProps {
  text1: string;
  text2: string;
}

export const TextEffect: React.FC<TextEffectProps> = (props) => {
  const { text1, text2 } = props;
  return (
    <>
      <ReactTypingEffect text={[text1, text2]} />
    </>
  );
};
