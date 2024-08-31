"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
import { type ActionFunction } from "@/utils/types";
import { LuUser2 } from "react-icons/lu";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: ActionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer({
  image,
  name,
  action,
  text,
  children,
}: ImageInputContainerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const userIcon = (
    <LuUser2 className="w-24 h-24 bg-primary rounded text-white mb-4" />
  );

  return (
    <div>
      {image ? (
        // <change ti <Image /> component
        <img
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {text}
      </Button>
      {isOpen && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
