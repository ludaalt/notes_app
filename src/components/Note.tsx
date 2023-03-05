import { FC } from "react";
import styled from "styled-components";

import { INoteItem } from "../types/types";
import { parseDate } from "../services/parseDate";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>{parseDate(item.date)}</p>
        <p style={{ wordBreak: "break-all", marginLeft: "20px" }}>
          {item.description}
        </p>
      </div>
    </PreviewNote>
  );
};

export default Note;
