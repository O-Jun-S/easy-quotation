import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';


export function Output({ value }: TextareaAutosizeProps) {
    return (
        <TextareaAutosize
          value={value}
          className="text-black w-2/6"
          placeholder="変換後の文字列"
          readOnly={true}
          minRows={5}
        />
    )
}

