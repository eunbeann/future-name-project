import TypingText from "../common/TypingText";
import InputDialog from "../person/components/InputDialog";

export default function PlaygroundPage() {
  return (
    <>
      <div className="flex items-center ">
        <TypingText speed={100} text="Hello, this is a typing animation!" />
      </div>
      <InputDialog />
    </>
  );
}
