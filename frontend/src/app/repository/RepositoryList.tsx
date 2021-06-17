import React, {useContext} from "react";
import {observer} from "mobx-react";
import {PlusOutlined, LeftOutlined} from "@ant-design/icons";
import {Button, Tooltip, Card, Space, Table} from "antd";
import {
    EntityPermAccessControl,
    ScreensContext
} from "@haulmont/jmix-react-core";
import {
    DataTable,
    RetryDialog,
    useEntityList,
    EntityListProps,
    registerEntityBrowserScreen,
    registerRoute,
    Spinner
} from "@haulmont/jmix-react-ui";
import {GitRepository} from "../../jmix/entities/GitRepository";
import {FormattedMessage} from "react-intl";
import {gql, useQuery} from "@apollo/client";

const ENTITY_NAME = "Repository";
const ROUTING_PATH = "/repositoryList";

const REPO_LIST = gql`
  query {
    findByOwnerLogin (organization : "Haulmont") {
      id
      name
      owner {
        id
      }
    }
  }
`;

const DELETE_REPO = gql`
  mutation {
    deleteByOwnerAndName(owner: "belyaev-andrey", repo: "VsuTest")
  }
`;

const RepositoryList = observer((props: EntityListProps<GitRepository>) => {

    const {data} = useQuery<{findByOwnerLogin: GitRepository[]}>(REPO_LIST)

    if (!data) {
        return <Spinner/>
    }

    return (
        <Table dataSource={data.findByOwnerLogin} columns={[{title:"Id", dataIndex: "id"},{title: "Name", dataIndex: "name"},{title: "Owner", dataIndex: ["owner", "login"]}]}/>
    )
});

registerRoute(
    `${ROUTING_PATH}/:entityId?`,
    ROUTING_PATH,
    "repositoryList",
    <RepositoryList/>,
    ENTITY_NAME,
    "RepositoryList"
);
registerEntityBrowserScreen(ENTITY_NAME, "repositoryList", <RepositoryList/>);

export default RepositoryList;