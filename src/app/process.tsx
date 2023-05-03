"use client";
import { useState } from 'react';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';


function replaceBrackets(str: string) {
    str = str.replace(/「/g, "『");
    str = str.replace(/」/g, "』");
    return str;
}


function copyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text)
  .then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}


type InputProps = {
    handleInputChange: (value: string) => void,
} & TextareaAutosizeProps;


function Input({ value, handleInputChange }: InputProps) {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleInputChange(event.target.value);
    }

    return (
        <TextareaAutosize
          value={value}
          onChange={handleChange}
          className="text-black"
          placeholder="変換したい文字列を入力..."
          minRows={5}
        />
    )

}


function Output({ value }: TextareaAutosizeProps) {
    return (
        <TextareaAutosize
          value={value}
          className="text-black"
          placeholder="変換後の文字列"
          readOnly={true}
          minRows={5}
        />
    )
}


type copyProps = {
    handler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    buttonText: string;
};


function CopyButton({ handler, buttonText }: copyProps) {
    return (
        <button onClick={handler} className="rounded-full p-3 border">
          { buttonText }
        </button>
    )
}


export function Process() {
    const [inputValue, setInputValue] = useState("");
    const [buttonText, setButtonText] = useState("Copy!");
    const outputValue = replaceBrackets(inputValue);


    const handleInputChange = (text: string) => {
        setButtonText("Copy!");
        setInputValue(text);
    }


    const handleCopy = (_event: React.MouseEvent<HTMLButtonElement>) => {
        copyTextToClipboard(outputValue);
        setButtonText("Copied!");
    }


    return (
      <main>
        <div className="flex flex-col items-center m-4 space-y-4">
          <Input
            value={inputValue}
            handleInputChange={handleInputChange}
          />

          <Output
            value={outputValue}
          />

          <CopyButton
            handler={handleCopy}
            buttonText={buttonText}
          />
        </div>
      </main>
    );
}

