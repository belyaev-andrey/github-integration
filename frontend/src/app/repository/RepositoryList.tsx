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
import {Repository} from "../../jmix/entities/Repository";
import {FormattedMessage} from "react-intl";
import {gql, useQuery} from "@apollo/client";

const ENTITY_NAME = "Repository";
const ROUTING_PATH = "/repositoryList";

const REPO_LIST = gql`
    query ReposListList {
        repos(organization: "Haulmont") {
            id
            name
        }
    }
`;

const DELETE_REPO = gql`
    mutation ReposDelete {
        mutation {
            deleteRepo (owner: "belyaev-andrey", repo: "VsuTest") {
                name
            }
        }
    }
`;

const RepositoryList = observer((props: EntityListProps<Repository>) => {

    const {data} = useQuery<{repos: Repository[]}>(REPO_LIST)

    if (!data) {
        return <Spinner/>
    }

    return (
        <Table dataSource={data.repos} columns={[{title:"Id", dataIndex: "id"},{title: "Name", dataIndex: "name"}]}/>
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