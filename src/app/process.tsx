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


type InputProps = {
    inputModifier: (value: string) => void,
} & TextareaAutosizeProps;


function Input({ value, inputModifier }: InputProps) {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        inputModifier(event.target.value);
    }

    return (
        <TextareaAutosize
          value={value}
          onChange={handleChange}
          className="text-black"
          placeholder="変換したい文字列を入力..."
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
        />
    )
}


export function Process() {
    const [inputValue, setInputValue] = useState("");
    const inputModifier = (value: string) => {
        setInputValue(value);
    }

    return (
      <main>
        <div className="functionality">
          <Input
            value={inputValue}
            inputModifier={inputModifier}
          />

          <Output
            value={replaceBrackets(inputValue)}
          />
        </div>
      </main>
    );
}

