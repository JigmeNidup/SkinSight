"use client";
import { PauseOutlined, PlaySquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [utterance, setUtterance] = useState(null);
  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);
  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };
  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  return (
    <>
      {isPaused ? (
        <Button
          type="primary"
          onClick={handlePlay}
          icon={<PlaySquareOutlined />}
        />
      ) : (
        <Button type="primary" onClick={handlePause} icon={<PauseOutlined />} />
      )}
    </>
  );
};

export default TextToSpeech;
