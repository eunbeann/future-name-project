// import taskBar from "@/app/assets/image/taskBar.png";
import taskBarWithButton from "@/app/assets/image/taskBarWithButton.png";
import Image from "next/image";

export default function TaskBar() {
  return (
    <Image
      className="fixed bottom-0 w-full z-50"
      src={taskBarWithButton}
      alt="introBackground"
      priority={true}
      draggable="false"
    />
  );
}
