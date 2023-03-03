import { FC } from "react";
import styled from "styled-components";

import { INoteItem } from "../types/types";

const PreviewNote = styled.li<{ isChoosen: boolean }>`
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;

  border: ${(props) => (props.isChoosen ? `3px solid pink` : `3px solid gray`)};

  &:hover {
    transform: scale(1.01);
  }
`;

type Props = {
  item: INoteItem;
  isChoosen: boolean;
  chooseCurrentNote: (id: number) => void;
};

const Note: FC<Props> = ({ item, isChoosen, chooseCurrentNote }) => {
  return (
    <PreviewNote
      isChoosen={isChoosen}
      onClick={() => {
        chooseCurrentNote(item.id);
      }}
    >
      <p>{item.title}</p>
      <div>
        <p>{item.date}</p>
        <p>{item.description}</p>
      </div>
    </PreviewNote>
  );
};

export default Note;
