import React from "react";
import { VerticalMenu, MenuItem, SubMenuItem } from "@haulmont/jmix-react-ui";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";
import { tabs } from "@haulmont/jmix-react-core";

export const AppMenu = () => {
  return (
    <VerticalMenu>
      <MenuItem
        onClick={tabs.closeAll}
        icon={<HomeOutlined />}
        caption={"menu.home"}
        key={"home"}
      />
      <MenuItem
        screenId={"RepositoryList"}
        icon={<BarsOutlined />}
        caption={"menu.RepositoryList"}
        key={"f40c8faa-f171-4a95-8630-55a1002de44e"}
      />
      <MenuItem
        screenId={"UserList"}
        icon={<BarsOutlined />}
        caption={"menu.UserList"}
        key={"b2cbff02-09d3-4fa3-8c09-6628a6bca6b8"}
      />
    </VerticalMenu>
  );
};
