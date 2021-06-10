import React from "react";
import UserList from "../app/user/UserList";
import RepositoryList from "../app/repository/RepositoryList";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/RepositoryList">
        <RepositoryList />
      </ComponentPreview>
      <ComponentPreview path="/UserList">
        <UserList />
      </ComponentPreview>
    </Previews>
  );
};
