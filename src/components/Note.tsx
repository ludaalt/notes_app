import { FC } from "react";
import styled from "styled-components";

import { INoteItem } from "../types/types";

const PreviewNote = styled.li`
  border: 3px solid pink;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    transform: scale(1.01);
  }
`;

type Props = {
  item: INoteItem;
};

const Note: FC<Props> = ({ item }) => {
  return (
    <PreviewNote>
      <p>{item.title}</p>
      <div>
        <p>{item.date}</p>
        <p>{item.description}</p>
      </div>
    </PreviewNote>
  );
};

export default Note;
