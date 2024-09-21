import { Dialog } from "@/components/ui/dialog";
import TypingText from "../common/TypingText";
import InputDialog from "../person/components/InputDialog";
import { TouchButton } from "../person/MotionButton";

export default function PlaygroundPage() {
  return (
    <>
      <div className="flex items-center ">
        <TypingText speed={100} text="Hello, this is a typing animation!" />
      </div>
      <InputDialog />
      <Dialog>
        <Dialog.Trigger asChild>
          <TouchButton>Edit Profile</TouchButton>
        </Dialog.Trigger>
        <Dialog.Content className="sm:max-w-[425px]">
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when youre done.
            </Dialog.Description>
          </Dialog.Header>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <Dialog.Footer>
            <button>Save changes</button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}
