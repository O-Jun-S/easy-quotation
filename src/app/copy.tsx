type copyProps = {
    handler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    buttonText: string;
};


export function CopyButton({ handler, buttonText }: copyProps) {
    return (
        <button
          onClick={handler}
          className="rounded-full p-3 bg-cyan-500 hover:bg-cyan-600 font-semibold">
          { buttonText }
        </button>
    )
}


