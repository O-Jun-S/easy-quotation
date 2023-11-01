import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';


type InputProps = {
    handleInputChange: (value: string) => void,
} & TextareaAutosizeProps;


export function Input({ value, handleInputChange }: InputProps) {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleInputChange(event.target.value);
    }

    return (
        <TextareaAutosize
          value={value}
          onChange={handleChange}
          className="text-black w-2/6"
          placeholder="変換したい文字列を入力..."
          minRows={5}
        />
    )

}

